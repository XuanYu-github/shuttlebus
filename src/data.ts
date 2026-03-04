export type Shuttle = {
  category: string;
  busName: string;
  plateNumber: string;
  departureTime: string;
  departureLocation: string;
  arrivalLocation: string;
  stops?: string[];
  note?: string;
};

export const shuttleData: Shuttle[] = [
  // 日常班车时刻表（周一至周五）
  // 1号车停靠位已优化：去重“安庆路”
  { category: '日常班车时刻表（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '07:18', departureLocation: '市府广场(安庆路)', arrivalLocation: '等离子体所(北广场)', stops: ['公安厅', '安光所', '二号楼', '三号食堂'] },
  { category: '日常班车时刻表（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '17:00', departureLocation: '等离子体所(北广场)', arrivalLocation: '市府广场(安庆路)', stops: ['三号食堂', '二号楼', '安光所', '公安厅'] },
  // 2号车原版停靠站（含起终点）: 安居苑(陈村路) → 合家福(通用所) → 十里庙 → 岳西路 → 潜山路贵池路交口 → 安居苑(陈村路) → 名君家园 → 大铺头 → 等离子体所(北广场)
  { category: '日常班车时刻表（周一至周五）', busName: '2号车', plateNumber: '皖A35311', departureTime: '07:20', departureLocation: '安居苑(陈村路)', arrivalLocation: '等离子体所(北广场)', stops: ['合家福(通用所)', '十里庙', '岳西路', '潜山路贵池路交口', '名君家园', '大铺头'] },
  // 返程停靠站: 等离子体所(北广场) → 大铺头 → 名君家园 → 潜山路贵池路交口 → 岳西路 → 十里庙 → 合家福(通用所) → 安居苑(陈村路) → 科大北区(经安居苑到科大北区)
  { category: '日常班车时刻表（周一至周五）', busName: '2号车', plateNumber: '皖A35311', departureTime: '17:03', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大北区(经安居苑到科大北区)', stops: ['大铺头', '名君家园', '潜山路贵池路交口', '岳西路', '十里庙', '合家福(通用所)', '安居苑(陈村路)'] },
  { category: '日常班车时刻表（周一至周五）', busName: '3号车', plateNumber: '皖A40087', departureTime: '07:25', departureLocation: '名君家园(东门)', arrivalLocation: '等离子体所(北广场)', stops: ['强磁场', '二号楼', '智能所', '湖公馆', '桂花园', '大溪地'] },
  { category: '日常班车时刻表（周一至周五）', busName: '3号车', plateNumber: '皖A40087', departureTime: '17:05', departureLocation: '等离子体所(北广场)', arrivalLocation: '名君家园(北门)', stops: ['大溪地', '桂花园', '湖公馆', '智能所', '二号楼', '强磁场'] },
  { category: '日常班车时刻表（周一至周五）', busName: '4号车', plateNumber: '皖A16958', departureTime: '07:00', departureLocation: '科大南区南门(水阳江路)', arrivalLocation: '等离子体所(北广场)', stops: ['三里庵', '大铺头', '智能所', '安光所', '二号楼', '交叉楼', '三号食堂'] },
  { category: '日常班车时刻表（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '07:15', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['潜山路淠河路交口', '蜀山监狱门口', '金色池塘', '智能所', '一号楼', '综合楼', '二号楼', '强磁场', '三号食堂'] },
  { category: '日常班车时刻表（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '17:06', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大东区(北门)', stops: ['二号楼', '一号楼', '智能所', '半岛路', '金色池塘', '蜀山监狱门口', '潜山路淠河路交口', '科大北区'] },
  { category: '日常班车时刻表（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '07:22', departureLocation: '振兴路地铁站口', arrivalLocation: '等离子体所(北广场)', stops: ['大富山庄北门', '华邦蜀山里北门', '中海原山北门', '皖山路与环湖大道交口', '聚贤苑', '智能所', '安光所', '二号楼', '强磁场', '交叉楼'] },
  { category: '日常班车时刻表（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '17:07', departureLocation: '等离子体所(北广场)', arrivalLocation: '振兴路地铁站口', stops: ['大富山庄北门', '华邦蜀山里北门', '中海原山北门', '皖山路与环湖大道交口', '聚贤苑', '智能所', '安光所', '二号楼', '强磁场', '固体所'] },
  { category: '日常班车时刻表（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '07:22', departureLocation: '等离子体所(北广场)', arrivalLocation: '安医大新区校门口(经开区)', stops: ['习友路翡翠路交口', '祁门路翡翠路交口', '智能所', '安光所', '二号楼', '交叉楼'] },
  { category: '日常班车时刻表（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '17:01', departureLocation: '安医大新区校门口(经开区)', arrivalLocation: '等离子体所(北广场)', stops: ['习友路翡翠路交口', '祁门路翡翠路交口', '智能所', '安光所', '二号楼', '交叉楼'] },
  { category: '日常班车时刻表（周一至周五）', busName: '8号车', plateNumber: '皖AA4168', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '8号车', plateNumber: '皖AA4168', departureTime: '06:55', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '9号车', plateNumber: '皖A43571', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常班车时刻表（周一至周五）', busName: '10号车', plateNumber: '皖AC1523', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常班车时刻表（周一至周五）', busName: '10号车', plateNumber: '皖AC1523', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },
  { category: '日常班车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },
  { category: '日常班车时刻表（周一至周五）', busName: '12号车', plateNumber: '皖A43571', departureTime: '07:30', departureLocation: '聚贤苑', arrivalLocation: '附属学校门口', stops: [] },
  { category: '日常班车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '07:30', departureLocation: '肿瘤医院', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常班车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '日常班车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '日常班车时刻表（周一至周五）', busName: '14号车', plateNumber: '皖AH1841', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['御景江山'] },
  { category: '日常班车时刻表（周一至周五）', busName: '14号车', plateNumber: '皖AH1841', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '15号车', plateNumber: '皖AC1523', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常班车时刻表（周一至周五）', busName: '15号车', plateNumber: '皖AC1523', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },

  // 工研院班车
  // 原版停靠站（含起终点）: 科大西区 → 合作化路与贵池路交叉口向西200米 → 名君家园(北门) → 贵池路与陈村路交叉口向西50米 → 贵池路与潜山路交叉口向西100米 → 贵池路与怀宁路交叉口向北50米 → 怀宁路与长江西路交叉口向西200米 → 工研院
  // 注意: 起点名为"科大西区(北门)"，原版停靠站列表里出现的是"科大西区"，去重后只保留起终点间的中间站
  { category: '工研院班车', busName: '8号车', plateNumber: '皖A40077', departureTime: '07:15', departureLocation: '科大西区(北门)', arrivalLocation: '工研院', stops: ['合作化路与贵池路交叉口向西200米', '名君家园(北门)', '贵池路与陈村路交叉口向西50米', '贵池路与潜山路交叉口向西100米', '贵池路与怀宁路交叉口向北50米', '怀宁路与长江西路交叉口向西200米'] },
  { category: '工研院班车', busName: '8号车', plateNumber: '皖A40077', departureTime: '17:10', departureLocation: '工研院', arrivalLocation: '科大西区(北门)', stops: ['怀宁路与长江西路交叉口向西200米', '贵池路与怀宁路交叉口向北50米', '贵池路与潜山路交叉口向西100米', '贵池路与陈村路交叉口向西50米', '名君家园(北门)', '合作化路与贵池路交叉口向西200米'] },

  // 研究生处临时班车
  // 原版停靠站（含起终点）: 等离子体所 → 强磁场 → 二号楼 → 安光所 → 智能所 → 工研院
  { category: '研究生处临时班车', busName: '临时班车', plateNumber: '皖A35275', departureTime: '08:00', departureLocation: '等离子体所(转盘)', arrivalLocation: '工研院', stops: ['强磁场', '二号楼', '安光所', '智能所'] },
  // 原版: 等离子体所(北广场) → 固体所 → 强磁场 → 二号楼 → 一号楼 → 智能所 → 地铁二号线大铺头站附近
  { category: '研究生处临时班车', busName: '临时班车', plateNumber: '皖A35275', departureTime: '20:30', departureLocation: '等离子体所(北广场)', arrivalLocation: '地铁二号线大铺头站附近', stops: ['固体所', '强磁场', '二号楼', '一号楼', '智能所'] },
  // 原版: 等离子体所(北广场) → 固体所 → 强磁场 → 二号楼 → 安光所 → 智能所 → 公交二公司 → 科学家园
  { category: '研究生处临时班车', busName: '临时班车', plateNumber: '皖A35275', departureTime: '21:30', departureLocation: '等离子体所(北广场)', arrivalLocation: '科学家园', stops: ['固体所', '强磁场', '二号楼', '安光所', '智能所', '公交二公司'] },
  // 原版: 工研院 → 山水间南门 → 香槟小镇(东门) → 科学家园南门 → 智能所 → 安光所 → 二号楼 → 强磁场 → 等离子体所(转盘)
  { category: '研究生处临时班车', busName: '临时班车', plateNumber: '皖A35275', departureTime: '17:00', departureLocation: '工研院', arrivalLocation: '等离子体所(转盘)', stops: ['山水间南门', '香槟小镇(东门)', '科学家园南门', '智能所', '安光所', '二号楼', '强磁场'] },
  // 原版: 工研院 → 大铺头 → 科学家园 → 智能所 → 安光所 → 二号楼 → 等离子体所(北广场)
  { category: '研究生处临时班车', busName: '临时班车', plateNumber: '皖A35275', departureTime: '21:30', departureLocation: '工研院', arrivalLocation: '等离子体所(北广场)', stops: ['大铺头', '科学家园', '智能所', '安光所', '二号楼'] },

  // 科学家园班车
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '07:22', departureLocation: '沃野花园', arrivalLocation: '等离子体所(北广场)', stops: ['三十五中西门', '香槟小镇(东门)', '科学家园', '桃源里', '御景江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '07:55', departureLocation: '科学家园', arrivalLocation: '等离子体所(北广场)', stops: ['桃源里', '聚贤苑', '御景江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '17:00', departureLocation: '等离子体所(北广场)', arrivalLocation: '沃野花园', stops: ['强磁场', '二号楼', '安光所', '智能所', '科石交口', '聚贤苑', '桃源里', '科学家园', '香槟小镇(东门)', '御景江山', '甘井交口'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '17:40', departureLocation: '等离子体所(北广场)', arrivalLocation: '科学家园', stops: ['强磁场', '二号楼', '智能所', '聚贤苑', '御景江山', '桃源里'] },

  // 日常公务车时刻表
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '', departureTime: '07:40', departureLocation: '等离子体所(大门口)', arrivalLocation: '工研院', stops: ['二号楼', '安光所', '智能所', '科学家园南门', '香槟小镇(东门)', '山水间南门'], note: '周一至周日' },
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '', departureTime: '17:10', departureLocation: '工研院', arrivalLocation: '等离子体所(大门口)', stops: ['山水间南门', '香槟小镇(东门)', '科学家园南门', '智能所', '安光所', '二号楼'], note: '周六、周日' },
  { category: '日常公务车时刻表', busName: '夜间加班车', plateNumber: '', departureTime: '20:30', departureLocation: '等离子体所(大门口)', arrivalLocation: '地铁二号线(大铺头站)', stops: ['固体所', '强磁场', '二号楼', '一号楼', '智能所'], note: '周一至周日' },
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '皖A38812', departureTime: '21:30', departureLocation: '工研院', arrivalLocation: '等离子体所(大门口)', stops: ['大铺头', '科学家园', '智能所', '安光所', '二号楼'], note: '夏令时(4月-10月)、周一至周日' },
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '皖A38812', departureTime: '21:00', departureLocation: '工研院', arrivalLocation: '等离子体所(大门口)', stops: ['大铺头', '科学家园', '智能所', '安光所', '二号楼'], note: '冬令时(11月-3月)、周一至周日' },
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '皖A38812', departureTime: '22:00', departureLocation: '等离子体所(大门口)', arrivalLocation: '科学家园', stops: ['固体所', '二号楼', '生物所', '安光所', '智能所', '公交二公司'], note: '夏令时(4月-10月)、周一至周日' },
  { category: '日常公务车时刻表', busName: '研究生班车', plateNumber: '皖A38812', departureTime: '21:30', departureLocation: '等离子体所(大门口)', arrivalLocation: '科学家园', stops: ['固体所', '二号楼', '生物所', '安光所', '智能所', '公交二公司'], note: '冬令时(11月-3月)、周一至周日' },

  // 博士生上课班车
  // 原版停靠站（含起终点）: 等离子体所 → 强磁场 → 安光所 → 科学岛幼儿园 → 科大高新校区
  { category: '博士生上课班车', busName: '博士班车1', plateNumber: '皖AS3616', departureTime: '06:45', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大高新校区', stops: ['强磁场', '安光所', '科学岛幼儿园'] },
  { category: '博士生上课班车', busName: '博士班车1', plateNumber: '皖AS3616', departureTime: '18:30', departureLocation: '科大高新校区', arrivalLocation: '等离子体所(北广场)', stops: ['科学岛幼儿园', '安光所', '强磁场'], note: '返程马路对面上车' },
  { category: '博士生上课班车', busName: '博士班车2', plateNumber: '皖A49161', departureTime: '12:30', departureLocation: '科大高新校区', arrivalLocation: '等离子体所(北广场)', stops: ['科学岛幼儿园', '安光所', '强磁场'] },
  { category: '博士生上课班车', busName: '博士班车2', plateNumber: '皖A49161', departureTime: '13:00', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大高新校区', stops: ['强磁场', '安光所', '科学岛幼儿园'] },
  { category: '博士生上课班车', busName: '博士班车3', plateNumber: '皖A49161', departureTime: '18:40', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大高新校区', stops: ['强磁场', '安光所', '科学岛幼儿园'], note: '返程马路对面上车' },
  { category: '博士生上课班车', busName: '博士班车3', plateNumber: '皖A49161', departureTime: '22:10', departureLocation: '科大高新校区', arrivalLocation: '等离子体所(北广场)', stops: ['科学岛幼儿园', '安光所', '强磁场'] },
  // 原版停靠站（含起终点）: 等离子体所 → 强磁场 → 安光所 → 科学岛幼儿园 → 科大西区 → 科大东区(北门)
  { category: '博士生上课班车', busName: '博士班车4', plateNumber: '皖AH5271', departureTime: '06:45', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大东区(北门)', stops: ['强磁场', '安光所', '科学岛幼儿园', '科大西区'] },
  // 原版: 科大东区(北门) → 科大西区 → 等离子体所 → 强磁场 → 安光所 → 科学岛幼儿园（此处 等离子体所 是途经站，非终点）
  // 注意: 此处终点注意 - 实际返程路线 科大东区(北门) → 科大西区 → 科学岛幼儿园 → 安光所 → 强磁场 → 等离子体所(北广场)
  { category: '博士生上课班车', busName: '博士班车4', plateNumber: '皖AH5271', departureTime: '即刻返回(来程06:45)', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['科大西区', '科学岛幼儿园', '安光所', '强磁场'], note: '返程马路对面上车' },
  { category: '博士生上课班车', busName: '博士班车5', plateNumber: '皖AH1841', departureTime: '12:25', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(转盘)', stops: ['科大西区', '科学岛幼儿园', '安光所', '强磁场'] },
  { category: '博士生上课班车', busName: '博士班车6', plateNumber: '皖AH1841', departureTime: '13:00', departureLocation: '等离子体所(转盘)', arrivalLocation: '科大东区(北门)', stops: ['强磁场', '安光所', '科学岛幼儿园', '科大西区'] },
  { category: '博士生上课班车', busName: '博士班车6', plateNumber: '皖AH1841', departureTime: '即刻返回(来程13:00)', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(转盘)', stops: ['科大西区', '科学岛幼儿园', '安光所', '强磁场'] },
  { category: '博士生上课班车', busName: '博士班车7', plateNumber: '皖AH5271', departureTime: '18:30', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['科大西区', '科学岛幼儿园', '安光所', '强磁场'] },
  { category: '博士生上课班车', busName: '博士班车8', plateNumber: '皖A40061', departureTime: '18:20', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大东区(北门)', stops: ['强磁场', '安光所', '科学岛幼儿园', '科大西区'] },
  { category: '博士生上课班车', busName: '博士班车8', plateNumber: '皖A40061', departureTime: '22:10', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['科大西区', '科学岛幼儿园', '安光所', '强磁场'] },

  // 高研院班车
  // 原版停靠站（含起终点）均为点对点: 等离子体所(北广场) → 科大东区(北门), 无中间站
  // 但2号车返程从原版DOM中提取到: 固体所 → 强磁场 → 二号楼 → 一号楼 → 智能所 → 科大西区 → 科大东区(北门)
  // 解读: 此路线去程无中间站, 返程经固体所等站 (此为特殊情况)
  { category: '高研院班车', busName: '1号车', plateNumber: '皖AH1841', departureTime: '08:20', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大东区(北门)', stops: ['固体所', '强磁场', '二号楼', '一号楼', '智能所', '科大西区'] },
  { category: '高研院班车', busName: '1号车', plateNumber: '皖AH1841', departureTime: '09:00', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['科大西区', '智能所', '一号楼', '二号楼', '强磁场', '固体所'] },
  { category: '高研院班车', busName: '2号车', plateNumber: '皖AH1841', departureTime: '11:30', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大东区(北门)', stops: ['固体所', '强磁场', '二号楼', '一号楼', '智能所', '科大西区'] },
  // 2号车返程停靠站（含起终点）: 科大东区(北门) → 科大西区 → 智能所 → 一号楼 → 二号楼 → 强磁场 → 固体所 → 等离子体所(北广场)
  { category: '高研院班车', busName: '2号车', plateNumber: '皖AH1841', departureTime: '即刻返回(来程11:30)', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所(北广场)', stops: ['科大西区', '智能所', '一号楼', '二号楼', '强磁场', '固体所'] },
];
