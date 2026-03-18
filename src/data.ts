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
  // 日常公务车时刻表（周一至周五） 1-7号车
  { category: '日常公务车时刻表（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '07:18', departureLocation: '市府广场(安庆路)', arrivalLocation: '等离子体所(北广场)', stops: ['公安厅', '安光所', '二号楼'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '17:00', departureLocation: '等离子体所(北广场)', arrivalLocation: '市府广场(安庆路)', stops: ['三号食堂', '二号楼', '安光所', '公安厅'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '2号车', plateNumber: '皖A35311', departureTime: '07:20', departureLocation: '安居苑(陈村路)', arrivalLocation: '等离子体所(北广场)', stops: ['合家福(通用所)', '十里庙', '岳西路', '潜山路贵池路交口', '名君家园', '大铺头'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '2号车', plateNumber: '皖A35311', departureTime: '17:03', departureLocation: '等离子体所(北广场)', arrivalLocation: '科大北区', stops: ['大铺头', '名君家园', '潜山路贵池路交口', '岳西路', '十里庙', '合家福(通用所)', '安居苑(陈村路)'], note: '经安居苑到科大北区' },
  { category: '日常公务车时刻表（周一至周五）', busName: '3号车', plateNumber: '皖A40087', departureTime: '07:25', departureLocation: '大溪地', arrivalLocation: '强磁场', stops: ['桂花园', '湖公馆', '智能所', '二号楼'], note: '等离子体所职工安光所不下车' },
  { category: '日常公务车时刻表（周一至周五）', busName: '3号车', plateNumber: '皖A40087', departureTime: '17:05', departureLocation: '强磁场', arrivalLocation: '大溪地', stops: ['二号楼', '智能所', '湖公馆', '桂花园'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '4号车', plateNumber: '皖A16958', departureTime: '07:00', departureLocation: '科大南区南门(水阳江路)', arrivalLocation: '三号食堂', stops: ['徽州大道', '屯溪路', '芜湖路', '三里庵', '大铺头', '智能所', '安光所', '二号楼', '交叉楼'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '07:15', departureLocation: '科大东区(北门)', arrivalLocation: '三号食堂', stops: ['潜山路淠河路交口', '蜀山监狱门口', '金色池塘', '半岛路', '智能所', '一号楼', '综合楼', '二号楼', '强磁场'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '17:06', departureLocation: '三号食堂', arrivalLocation: '科大北区', stops: ['强磁场', '二号楼', '综合楼', '一号楼', '智能所', '半岛路', '金色池塘', '蜀山监狱门口', '潜山路淠河路交口', '科大东区(北门)'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '07:22', departureLocation: '振兴路地铁站口', arrivalLocation: '交叉楼', stops: ['大富山庄北门', '华邦蜀山里北门', '中海原山北门', '皖山路与环湖大道交口', '聚贤苑', '智能所', '安光所', '二号楼', '强磁场'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '17:07', departureLocation: '交叉楼', arrivalLocation: '振兴路地铁站口', stops: ['强磁场', '二号楼', '安光所', '智能所', '聚贤苑', '皖山路与环湖大道交口', '中海原山北门', '华邦蜀山里北门', '大富山庄北门'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '07:22', departureLocation: '安医大新区校门口(经开区)', arrivalLocation: '交叉楼', stops: ['习友路翡翠路交口', '祁门路翡翠路交口', '智能所', '安光所', '二号楼'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '17:01', departureLocation: '交叉楼', arrivalLocation: '安医大新区校门口(经开区)', stops: ['二号楼', '安光所', '智能所', '祁门路翡翠路交口', '习友路翡翠路交口'] },

  // 日常公务车时刻表（周一至周五） 8-15号车
  { category: '日常公务车时刻表（周一至周五）', busName: '8号车', plateNumber: '皖AA4168', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '8号车', plateNumber: '皖AA4168', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '9号车', plateNumber: '皖A43571', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '10号车', plateNumber: '皖AC1523', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '10号车', plateNumber: '皖AC1523', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '11号车', plateNumber: '皖AA4168', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '12号车', plateNumber: '皖A43571', departureTime: '07:30', departureLocation: '聚贤苑', arrivalLocation: '附属学校门口', stops: [] },
  { category: '日常公务车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '07:30', departureLocation: '肿瘤医院', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '13号车', plateNumber: '皖A43571', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '14号车', plateNumber: '皖AH1841', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['御景江山'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '14号车', plateNumber: '皖AH1841', departureTime: '17:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '15号车', plateNumber: '皖AC1523', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '日常公务车时刻表（周一至周五）', busName: '15号车', plateNumber: '皖AC1523', departureTime: '17:40', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },

  // 工研院班车
  { category: '工研院班车', busName: '早班', plateNumber: '', departureTime: '07:15', departureLocation: '科大西区(北门)', arrivalLocation: '工研院', stops: ['合作化路与贵池路交叉口向西200米', '名君家园(北门)', '贵池路与陈村路交叉口向西50米', '贵池路与潜山路交叉口向西100米', '贵池路与怀宁路交叉口向北50米', '怀宁路与长江西路交叉口向西200米'] },
  { category: '工研院班车', busName: '晚班', plateNumber: '', departureTime: '17:00', departureLocation: '工研院', arrivalLocation: '科大西区(北门)', stops: ['怀宁路与长江西路交叉口向西200米', '贵池路与怀宁路交叉口向北50米', '贵池路与潜山路交叉口向西100米', '贵池路与陈村路线交叉口向西50米', '名君家园(北门)', '合作化路与贵池路交叉口向西200米'] },

  // 高研院班车
  { category: '高研院班车', busName: '1号车', plateNumber: '', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '高研院', stops: ['创新院'] },
  { category: '高研院班车', busName: '1号车', plateNumber: '', departureTime: '17:00', departureLocation: '高研院', arrivalLocation: '科学家园', stops: ['创新院'] },
  { category: '高研院班车', busName: '2号车', plateNumber: '', departureTime: '07:20', departureLocation: '中海原山', arrivalLocation: '高研院', stops: ['聚贤苑', '创新院'] },
  { category: '高研院班车', busName: '2号车', plateNumber: '', departureTime: '17:00', departureLocation: '高研院', arrivalLocation: '中海原山', stops: ['创新院', '聚贤苑'] },
  { category: '高研院班车', busName: '3号车', plateNumber: '', departureTime: '07:25', departureLocation: '地铁2号线(振兴路站)', arrivalLocation: '高研院', stops: ['创新院'] },
  { category: '高研院班车', busName: '3号车', plateNumber: '', departureTime: '17:00', departureLocation: '高研院', arrivalLocation: '地铁2号线(振兴路站)', stops: ['创新院'] },

  // 博士生上课班车
  { category: '博士生上课班车', busName: '博士班车1', plateNumber: '', departureTime: '07:10', departureLocation: '科学家园', arrivalLocation: '科大东区(北门)', stops: [], note: '周二、四' },
  { category: '博士生上课班车', busName: '博士班车1', plateNumber: '', departureTime: '12:10', departureLocation: '科大东区(北门)', arrivalLocation: '科学家园', stops: [], note: '周二、四' },
  { category: '博士生上课班车', busName: '博士班车2', plateNumber: '', departureTime: '13:10', departureLocation: '聚贤苑', arrivalLocation: '科大东区(北门)', stops: ['科学家园'] },
  { category: '博士生上课班车', busName: '博士班车2', plateNumber: '', departureTime: '18:40', departureLocation: '科大东区(北门)', arrivalLocation: '聚贤苑', stops: ['科学家园'] },
  { category: '博士生上课班车', busName: '博士班车2', plateNumber: '', departureTime: '22:15', departureLocation: '科大东区(北门)', arrivalLocation: '聚贤苑', stops: ['科学家园'] },
  { category: '博士生上课班车', busName: '博士班车3', plateNumber: '', departureTime: '07:40', departureLocation: '聚贤苑', arrivalLocation: '科大东区(南区)', stops: ['科学家园'], note: '周一二三四日' },
  { category: '博士生上课班车', busName: '博士班车3', plateNumber: '', departureTime: '12:10', departureLocation: '科大东区(北门)', arrivalLocation: '聚贤苑', stops: ['科学家园'], note: '周一二三四日' },
  { category: '博士生上课班车', busName: '博士班车3', plateNumber: '', departureTime: '18:40', departureLocation: '科大东区(北门)', arrivalLocation: '聚贤苑', stops: ['科学家园'], note: '周一二三四日' },

  // 研究生班车 & 肿瘤医院班车
  { category: '研究生班车', busName: '夜间班车', plateNumber: '', departureTime: '21:30', departureLocation: '交叉楼', arrivalLocation: '科大东区', stops: ['二号楼', '安光所', '智能所', '大铺头', '科大西区', '科大北区'], note: '夏令时(4月-10月)、周一至周日' },
  { category: '研究生班车', busName: '夜间班车', plateNumber: '', departureTime: '21:00', departureLocation: '交叉楼', arrivalLocation: '科大东区', stops: ['二号楼', '安光所', '智能所', '大铺头', '科大西区', '科大北区'], note: '冬令时(11月-3月)、周一至周日' },
  { category: '肿瘤医院班车', busName: '肿瘤医院班车', plateNumber: '', departureTime: '07:20', departureLocation: '名君家园', arrivalLocation: '肿瘤医院', stops: ['大铺头'] },
  { category: '肿瘤医院班车', busName: '肿瘤医院班车', plateNumber: '', departureTime: '17:00', departureLocation: '肿瘤医院', arrivalLocation: '名君家园', stops: ['蜀山森林公园', '科学家园', '聚贤苑', '大铺头'] },

  // 科学家园班车
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '07:22', departureLocation: '沃野花园', arrivalLocation: '等离子体所(北广场)', stops: ['三十五中西门', '香槟小镇(东门)', '科学家园', '桃源里', '御景江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '07:55', departureLocation: '科学家园', arrivalLocation: '等离子体所(北广场)', stops: ['桃源里', '聚贤苑', '御景江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '17:00', departureLocation: '等离子体所(北广场)', arrivalLocation: '沃野花园', stops: ['强磁场', '二号楼', '安光所', '智能所', '科石交口', '聚贤苑', '桃源里', '科学家园', '香槟小镇(东门)', '御景江山', '甘井交口'] },
  { category: '科学家园班车', busName: '1号车', plateNumber: '皖A38816', departureTime: '17:40', departureLocation: '等离子体所(北广场)', arrivalLocation: '科学家园', stops: ['强磁场', '二号楼', '智能所', '聚贤苑', '御景江山', '桃源里'] }
];
