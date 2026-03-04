/**
 * 批量驾车时间计算工具
 * 使用百度地图驾车路线规划(轻量版) API，计算所有班车路线（出发地→目的地）的驾车时间和距离
 *
 * 使用方法：node scripts/batch-driving-time.mjs
 * 并发限制：3次/秒（个人开发者），脚本采用每次请求间隔400ms的串行模式
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, '..');

const AK = 'XRbgkKmHdxR8oLOCubvDWxxdrJt6S4pu';
const DELAY_MS = 380;

// 读取 mapData.ts 的坐标数据
function loadMapData() {
  const raw = readFileSync(join(ROOT, 'src', 'mapData.ts'), 'utf-8');
  const coords = {};
  // 匹配 "站名": [lat, lng]
  const regex = /"([^"]+)":\s*\[([\d.]+),\s*([\d.]+)\]/g;
  let m;
  while ((m = regex.exec(raw)) !== null) {
    coords[m[1]] = { lat: parseFloat(m[2]), lng: parseFloat(m[3]) };
  }
  return coords;
}

// 读取 data.ts 的班车数据，提取所有唯一的 出发地→目的地 对
function loadRoutes() {
  const raw = readFileSync(join(ROOT, 'src', 'data.ts'), 'utf-8');
  const pairs = new Map(); // key = "出发地→目的地"

  // 匹配所有 departureLocation / arrivalLocation
  const regex = /departureLocation:\s*'([^']+)',\s*arrivalLocation:\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(raw)) !== null) {
    const dep = m[1];
    const arr = m[2];
    const key = `${dep}→${arr}`;
    if (!pairs.has(key)) {
      pairs.set(key, { departure: dep, arrival: arr });
    }
  }
  return Array.from(pairs.values());
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getDrivingTime(originLat, originLng, destLat, destLng) {
  const url = `https://api.map.baidu.com/directionlite/v1/driving?origin=${originLat},${originLng}&destination=${destLat},${destLng}&ak=${AK}`;
  
  const resp = await fetch(url);
  const data = await resp.json();
  
  if (data.status === 0 && data.result?.routes?.length > 0) {
    const route = data.result.routes[0];
    return {
      distance: route.distance,         // 米
      duration: route.duration,          // 秒
      distanceKm: (route.distance / 1000).toFixed(1),
      durationMin: Math.round(route.duration / 60),
    };
  }
  return null;
}

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  if (min < 60) return `${min}分钟`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}小时${m > 0 ? m + '分钟' : ''}`;
}

async function main() {
  const coords = loadMapData();
  const routes = loadRoutes();

  console.log(`\n🚗 百度地图驾车时间批量计算工具`);
  console.log(`📍 已加载 ${Object.keys(coords).length} 个站点坐标`);
  console.log(`🛤  共 ${routes.length} 条唯一路线\n`);

  const results = [];
  const errors = [];
  let skipped = 0;

  for (let i = 0; i < routes.length; i++) {
    const { departure, arrival } = routes[i];
    const depCoord = coords[departure];
    const arrCoord = coords[arrival];

    process.stdout.write(`[${i + 1}/${routes.length}] ${departure} → ${arrival} ... `);

    if (!depCoord) {
      console.log(`⚠️  出发地无坐标`);
      errors.push({ departure, arrival, reason: '出发地无坐标' });
      skipped++;
      continue;
    }
    if (!arrCoord) {
      console.log(`⚠️  目的地无坐标`);
      errors.push({ departure, arrival, reason: '目的地无坐标' });
      skipped++;
      continue;
    }

    try {
      const result = await getDrivingTime(depCoord.lat, depCoord.lng, arrCoord.lat, arrCoord.lng);
      if (result) {
        results.push({ departure, arrival, ...result });
        console.log(`✅ ${result.distanceKm}km, ${formatDuration(result.duration)}`);
      } else {
        errors.push({ departure, arrival, reason: 'API返回空' });
        console.log(`❌ API无结果`);
      }
    } catch (e) {
      errors.push({ departure, arrival, reason: e.message });
      console.log(`❌ ${e.message}`);
    }

    if (i < routes.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  // 输出结果表格
  console.log('\n');
  console.log('='.repeat(80));
  console.log('📊 驾车时间汇总');
  console.log('='.repeat(80));
  console.log('');
  console.log(`${'出发地'.padEnd(25)} ${'目的地'.padEnd(25)} ${'距离'.padStart(8)} ${'时间'.padStart(8)}`);
  console.log('-'.repeat(80));

  for (const r of results) {
    console.log(
      `${r.departure.padEnd(25)} ${r.arrival.padEnd(25)} ${(r.distanceKm + 'km').padStart(8)} ${formatDuration(r.duration).padStart(8)}`
    );
  }

  console.log('-'.repeat(80));
  console.log(`✅ 成功: ${results.length}  ⚠️ 跳过: ${skipped}  ❌ 失败: ${errors.length - skipped}`);

  if (errors.length > 0) {
    console.log('\n⚠️  问题路线:');
    for (const e of errors) {
      console.log(`  ${e.departure} → ${e.arrival}: ${e.reason}`);
    }
  }

  // 输出可直接用于代码的 TypeScript 对象
  console.log('\n');
  console.log('='.repeat(80));
  console.log('📝 可粘贴到代码中的驾车时间数据:');
  console.log('='.repeat(80));
  console.log('export const drivingTimes: Record<string, { distanceKm: number; durationMin: number }> = {');
  for (const r of results) {
    console.log(`  "${r.departure}→${r.arrival}": { distanceKm: ${r.distanceKm}, durationMin: ${r.durationMin} },`);
  }
  console.log('};');
}

main().catch(console.error);
