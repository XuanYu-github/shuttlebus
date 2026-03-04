/**
 * 批量地理编码工具
 * 使用百度地图 Geocoding API，将所有班车站点名称转换为精确的 BD-09 经纬度坐标
 * 并自动更新 src/mapData.ts
 *
 * 使用方法：node scripts/batch-geocode.mjs
 * 并发限制：3次/秒（个人开发者），脚本采用每次请求间隔400ms的串行模式
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, '..');

const AK = 'XRbgkKmHdxR8oLOCubvDWxxdrJt6S4pu';
const CITY_PREFIX = '合肥'; // 在地址前加城市名提高精度
const DELAY_MS = 380;       // 380ms间隔 ≈ 2.6次/秒，安全低于3次/秒限制

// ===== 所有需要地理编码的站点 =====
// 从 src/data.ts 中提取的所有唯一地名
const ALL_LOCATIONS = [
  // 市区站点
  '市府广场(安庆路)',
  '市府广场',
  '安庆路',
  '公安厅',
  '合家福(通用所)',
  '十里庙',
  '岳西路',
  '潜山路贵池路交口',
  '安居苑(陈村路)',
  '安居苑',
  '名君家园',
  '名君家园(东门)',
  '名君家园(北门)',
  '大铺头',
  '地铁二号线(大铺头站)',
  '地铁二号线大铺头站附近',
  '三里庵',
  '潜山路淠河路交口',
  '蜀山监狱门口',
  '金色池塘',
  '湖公馆',
  '桂花园',
  '大溪地',
  '半岛路',
  '公交二公司',
  '习友路翡翠路交口',
  '祁门路翡翠路交口',
  '振兴路地铁站口',
  // 蜀山/环湖住宅区
  '大富山庄北门',
  '华邦蜀山里北门',
  '中海原山北门',
  '皖山路与环湖大道交口',
  '聚贤苑',
  '三十五中西门',
  '香槟小镇(东门)',
  '山水间南门',
  '科学家园',
  '科学家园南门',
  '桃源里',
  '御景江山',
  '科石交口',
  '甘井交口',
  '沃野花园',
  '附属学校门口',
  // 科学岛
  '安光所',
  '二号楼',
  '三号食堂',
  '等离子体所(北广场)',
  '等离子体所',
  '等离子体所(转盘)',
  '等离子体所(大门口)',
  '强磁场',
  '智能所',
  '交叉楼',
  '一号楼',
  '综合楼',
  '固体所',
  '生物所',
  '科学岛幼儿园',
  // 工研院
  '工研院',
  // 高校
  '科大北区',
  '科大东区(北门)',
  '科大东区',
  '科大西区(北门)',
  '科大西区',
  '科大南区南门(水阳江路)',
  '科大高新校区',
  // 医院
  '肿瘤医院',
  '安医大新区校门口(经开区)',
  // 工研院途经站
  '合作化路与贵池路交叉口向西200米',
  '贵池路与陈村路交叉口向西50米',
  '贵池路与潜山路交叉口向西100米',
  '贵池路与怀宁路交叉口向北50米',
  '怀宁路与长江西路交叉口向西200米',
];

// 已知从原版后台API获取的精确坐标（跳过这些，直接使用）
const KNOWN_EXACT_COORDS = new Set([
  '安庆路', '公安厅', '安光所', '二号楼', '三号食堂',
  '合家福(通用所)', '十里庙', '岳西路', '潜山路贵池路交口',
  '安居苑(陈村路)', '名君家园', '大铺头', '科大北区',
  '强磁场', '智能所', '湖公馆', '桂花园', '大溪地',
  '三里庵', '交叉楼', '潜山路淠河路交口', '蜀山监狱门口',
  '金色池塘', '一号楼', '综合楼', '半岛路',
  '大富山庄北门', '华邦蜀山里北门', '中海原山北门',
  '皖山路与环湖大道交口', '聚贤苑', '等离子体所',
  '工研院', '山水间南门', '香槟小镇(东门)', '科学家园南门',
  '三十五中西门', '科学家园', '桃源里', '御景江山',
  '三号食堂', '科石交口', '甘井交口', '大铺头',
  '生物所', '公交二公司', '固体所',
  '科大东区(北门)', '科大西区',
  '科学岛幼儿园',
  '习友路翡翠路交口', '祁门路翡翠路交口',
]);

// 需要地理编码的站点（排除已知精确坐标的）
const TO_GEOCODE = ALL_LOCATIONS.filter(name => !KNOWN_EXACT_COORDS.has(name));

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function geocode(address) {
  const query = encodeURIComponent(`${CITY_PREFIX}${address}`);
  const url = `https://api.map.baidu.com/geocoding/v3/?ak=${AK}&address=${query}&output=json`;
  
  const resp = await fetch(url);
  const data = await resp.json();
  
  if (data.status === 0 && data.result?.location) {
    return {
      lat: data.result.location.lat,
      lng: data.result.location.lng,
      confidence: data.result.confidence,
      precise: data.result.precise,
      level: data.result.level,
    };
  }
  return null;
}

async function main() {
  console.log(`\n🗺  百度地图批量地理编码工具`);
  console.log(`📍 共 ${ALL_LOCATIONS.length} 个站点，其中 ${KNOWN_EXACT_COORDS.size} 个已有精确API坐标`);
  console.log(`🔍 需要地理编码: ${TO_GEOCODE.length} 个站点\n`);

  const results = {};
  const errors = [];

  for (let i = 0; i < TO_GEOCODE.length; i++) {
    const name = TO_GEOCODE[i];
    process.stdout.write(`[${i + 1}/${TO_GEOCODE.length}] 查询: ${name} ... `);
    
    try {
      const result = await geocode(name);
      if (result) {
        results[name] = result;
        const flag = result.precise ? '✅' : result.confidence >= 70 ? '⚠️' : '❌';
        console.log(`${flag} lat=${result.lat.toFixed(6)}, lng=${result.lng.toFixed(6)} (置信度${result.confidence}, ${result.level})`);
      } else {
        errors.push(name);
        console.log(`❌ 未找到`);
      }
    } catch (e) {
      errors.push(name);
      console.log(`❌ 错误: ${e.message}`);
    }
    
    if (i < TO_GEOCODE.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // 输出结果
  console.log('\n');
  console.log('='.repeat(60));
  console.log('📝 地理编码结果（可粘贴到 mapData.ts）：');
  console.log('='.repeat(60));
  
  const lines = [];
  for (const [name, r] of Object.entries(results)) {
    const preciseNote = r.precise ? 'API精确' : `置信度${r.confidence}`;
    lines.push(`  "${name}": [${r.lat.toFixed(6)}, ${r.lng.toFixed(6)}],  // 地理编码 ${preciseNote} ${r.level}`);
  }
  
  console.log(lines.join('\n'));

  if (errors.length > 0) {
    console.log(`\n⚠️  查询失败的站点 (${errors.length}个):`);
    errors.forEach(e => console.log(`  - ${e}`));
  }

  // 自动更新 mapData.ts（合并新坐标）
  const shouldUpdate = process.argv.includes('--update');
  if (shouldUpdate) {
    console.log('\n✏️  正在更新 src/mapData.ts ...');
    updateMapData(results);
    console.log('✅ mapData.ts 已更新！');
  } else {
    console.log('\n💡 提示: 运行 `node scripts/batch-geocode.mjs --update` 自动更新 mapData.ts');
  }
}

function updateMapData(newCoords) {
  const mapDataPath = join(ROOT, 'src', 'mapData.ts');
  let content = readFileSync(mapDataPath, 'utf-8');
  
  for (const [name, r] of Object.entries(newCoords)) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`"${escaped}":\\s*\\[\\d+\\.\\d+,\\s*\\d+\\.\\d+\\]`, 'g');
    const newEntry = `"${name}": [${r.lat.toFixed(6)}, ${r.lng.toFixed(6)}]`;
    
    if (content.match(regex)) {
      content = content.replace(regex, newEntry + ',  // 地理编码更新');
      console.log(`  更新: ${name}`);
    } else {
      console.log(`  跳过(不在文件中): ${name}`);
    }
  }
  
  writeFileSync(mapDataPath, content, 'utf-8');
}

main().catch(console.error);
