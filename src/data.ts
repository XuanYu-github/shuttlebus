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
  { category: '市内班车（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '07:18', departureLocation: '市府广场(安庆路)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['公安厅', '安光所', '二号楼'] },
  { category: '市内班车（周一至周五）', busName: '1号车', plateNumber: '皖A00435D', departureTime: '17:00', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '市府广场(安庆路)', stops: ['二号楼', '安光所', '公安厅'] },
  { category: '市内班车（周一至周五）', busName: '2号车', plateNumber: '皖AH2097', departureTime: '07:18', departureLocation: '名君家园(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['安居苑', '贵池路潜山路交口', '十里庙', '通用所', '大铺头311站牌停靠(永达商场对面)', '智能所', '安光所', '综合楼', '二号楼', '三号食堂'] },
  { category: '市内班车（周一至周五）', busName: '2号车', plateNumber: '皖AH2097', departureTime: '17:03', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '名君家园(北门)', stops: ['二号楼', '安光所', '智能所', '合家福', '十里庙', '贵池路潜山路交口', '安居苑'] },
  { category: '市内班车（周一至周五）', busName: '3号车', plateNumber: '皖A35311', departureTime: '07:25', departureLocation: '名君家园(东门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['大溪地', '桂花园', '梦园小区', '香樟大道', '湖公馆', '智能所', '二号楼', '强磁场', '三号食堂'] },
  { category: '市内班车（周一至周五）', busName: '3号车', plateNumber: '皖A35311', departureTime: '17:05', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '名君家园(北门)', stops: ['三号食堂', '强磁场', '二号楼', '智能所', '湖公馆', '香樟大道', '梦园小区', '桂花园', '大溪地'] },
  { category: '市内班车（周一至周五）', busName: '4号车', plateNumber: '皖A16958', departureTime: '07:05', departureLocation: '科大南区南门(水阳江路)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['徽州大道', '三里庵', '大铺头311站牌停靠(永达商场对面)', '智能所', '安光所', '二号楼', '交叉楼', '三号食堂'], note: '三里庵预计07:30到达' },
  { category: '市内班车（周一至周五）', busName: '4号车', plateNumber: '皖A16958', departureTime: '17:02', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大南区南门(水阳江路)', stops: ['交叉楼', '二号楼', '安光所', '智能所', '三里庵', '徽州大道'] },
  { category: '市内班车（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '07:15', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['大润发', '潜山路淠河路交口', '金色池塘', '智能所', '安光所', '综合楼', '二号楼', '交叉楼', '三号食堂'] },
  { category: '市内班车（周一至周五）', busName: '5号车', plateNumber: '皖AH5271', departureTime: '17:04', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大东区(北门)', stops: ['二号楼', '安光所', '智能所', '金色池塘', '潜山路淠河路交口', '科大北区'] },
  { category: '市内班车（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '07:20', departureLocation: '振兴路地铁站', arrivalLocation: '聚变堆园区(北门)', stops: ['大富山庄(北门)', '华邦蜀山里(北门)', '中海原山(北门)', '聚贤苑', '智能所', '安光所', '二号楼', '强磁场', '三号食堂', '等离子体所四号楼(北广场)'] },
  { category: '市内班车（周一至周五）', busName: '6号车', plateNumber: '皖A40061', departureTime: '17:06', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '大富山庄(北门)', stops: ['强磁场', '二号楼', '安光所', '智能所', '中海原山(北门)', '华邦蜀山里(北门)', '振兴路地铁站'] },
  { category: '市内班车（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '07:18', departureLocation: '安徽医科大学南区(西门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['习友路翡翠路交口', '祁门路翡翠路交口', '西二环南二环交口', '和一花园天桥', '新加坡花园城', '智能所', '综合楼', '二号楼', '交叉楼'] },
  { category: '市内班车（周一至周五）', busName: '7号车', plateNumber: '皖AH3471', departureTime: '17:01', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '安徽医科大学南区(西门)', stops: ['强磁场', '二号楼', '安光所', '智能所', '天柱路', '和一花园天桥', '西二环匡河路交口', '乐富强御龙湾(东门)', '祁门路翡翠路交口', '习友路翡翠路交口'] },

  { category: '科学家园班车（周一至周五）', busName: '1号车', plateNumber: '皖A38816', departureTime: '07:22', departureLocation: '沃野花园', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['三十五中(西门)', '香槟小镇(东门)', '科学家园', '桃源里', '御璟江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车（周一至周五）', busName: '2号车', plateNumber: '皖A38816', departureTime: '07:55', departureLocation: '科学家园', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['桃源里', '聚贤苑', '御璟江山', '智能所', '安光所', '二号楼', '强磁场', '交叉楼', '三号食堂'] },
  { category: '科学家园班车（周一至周五）', busName: '3号车', plateNumber: '皖A38816', departureTime: '16:50', departureLocation: '聚变堆园区(北门)', arrivalLocation: '沃野花园', stops: ['等离子体所四号楼(北广场)', '强磁场', '二号楼', '安光所', '智能所', '科学岛路石牛路交口', '聚贤苑', '桃源里', '科学家园', '香槟小镇(东门)', '蜀峰路井岗路交口', '甘泉路井岗路交口'] },
  { category: '科学家园班车（周一至周五）', busName: '4号车', plateNumber: '皖A38816', departureTime: '17:40', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科学家园', stops: ['强磁场', '二号楼', '安光所', '智能所', '御璟江山', '聚贤苑', '桃源里'] },

  { category: '聚贤苑—聚变堆园区（北门）班车（周一至周五）', busName: '1号车', plateNumber: '皖A40061', departureTime: '07:20', departureLocation: '振兴路地铁站', arrivalLocation: '聚变堆园区(北门)', stops: ['大富山庄(北门)', '华邦蜀山里(北门)', '中海原山(北门)', '聚贤苑', '智能所', '安光所', '二号楼', '强磁场', '三号食堂', '等离子体所四号楼(北广场)'] },
  { category: '聚贤苑—聚变堆园区（北门）班车（周一至周五）', busName: '2号车', plateNumber: '皖AH1841', departureTime: '11:20', departureLocation: '聚变堆园区(北门)', arrivalLocation: '科大东区(北门)', stops: ['等离子体所四号楼(北广场)', '固体所', '强磁场', '二号楼', '安光所', '智能所', '聚贤苑', '科学家园', '科大西区(北门)'] },
  { category: '聚贤苑—聚变堆园区（北门）班车（周一至周五）', busName: '3号车', plateNumber: '皖A38812', departureTime: '13:15', departureLocation: '科学家园', arrivalLocation: '聚变堆园区(北门)', stops: ['聚贤苑', '智能所', '安光所', '二号楼', '强磁场', '三号食堂'] },
  { category: '聚贤苑—聚变堆园区（北门）班车（周一至周五）', busName: '4号车', plateNumber: '皖A38816', departureTime: '16:50', departureLocation: '聚变堆园区(北门)', arrivalLocation: '沃野花园', stops: ['等离子体所四号楼(北广场)', '强磁场', '二号楼', '安光所', '智能所', '科学岛路石牛路交口', '聚贤苑', '桃源里', '科学家园', '香槟小镇(东门)', '蜀峰路井岗路交口', '甘泉路井岗路交口'] },
  { category: '聚贤苑—聚变堆园区（北门）班车（周一至周五）', busName: '5号车', plateNumber: '不固定', departureTime: '22:10', departureLocation: '聚变堆园区(北门)', arrivalLocation: '聚贤苑', stops: ['三十岗公寓(南门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所', '核所'] },

  { category: '高研院班车（周一至周五）', busName: '1号车', plateNumber: '皖AH1841', departureTime: '08:20', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大东区(北门)', stops: ['固体所', '强磁场', '二号楼', '安光所', '智能所', '科大西区(北门)'] },
  { category: '高研院班车（周一至周五）', busName: '1号车', plateNumber: '皖AH1841', departureTime: '09:00', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['科大西区(北门)', '智能所', '安光所', '二号楼', '强磁场', '固体所'] },
  { category: '高研院班车（周一至周五）', busName: '2号车', plateNumber: '皖AH1841', departureTime: '11:20', departureLocation: '聚变堆园区(北门)', arrivalLocation: '科大东区(北门)', stops: ['等离子体所四号楼(北广场)', '固体所', '强磁场', '二号楼', '安光所', '智能所', '聚贤苑', '科学家园', '科大西区(北门)'] },
  { category: '高研院班车（周一至周五）', busName: '2号车', plateNumber: '皖AH1841', departureTime: '12:25', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['科大西区(北门对面)', '科学家园', '智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂'] },

  { category: '博士生班车（科大东区，周一至周五）', busName: '1号车', plateNumber: '皖AH5271', departureTime: '06:45', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大东区(北门)', stops: ['等离子体所转盘', '强磁场', '中区公寓(尚学路口)', '安光所', '科大西区(北门)'] },
  { category: '博士生班车（科大东区，周一至周五）', busName: '2号车', plateNumber: '皖AH1841', departureTime: '12:25', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['科大西区(北门对面)', '科学家园', '智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂'] },
  { category: '博士生班车（科大东区，周一至周五）', busName: '3号车', plateNumber: '皖AH1841', departureTime: '13:00', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大东区(北门)', stops: ['等离子体所转盘', '强磁场', '二号楼', '安光所', '幼儿园', '科大西区(北门)'] },
  { category: '博士生班车（科大东区，周一至周五）', busName: '3号车', plateNumber: '皖AH1841', departureTime: '即刻返回', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: [], note: '直达' },
  { category: '博士生班车（科大东区，周一至周五）', busName: '4号车', plateNumber: '皖AH5271', departureTime: '18:30', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['科大西区(北门)', '幼儿园', '安光所', '中区公寓(尚学路口)', '强磁场', '等离子体所转盘'] },
  { category: '博士生班车（科大东区，周一至周五）', busName: '5号车', plateNumber: '皖A40061', departureTime: '18:20', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大东区(北门)', stops: ['等离子体所转盘', '强磁场', '二号楼', '安光所', '幼儿园', '科大西区(北门)'] },
  { category: '博士生班车（科大东区，周一至周五）', busName: '5号车', plateNumber: '皖A40061', departureTime: '22:10', departureLocation: '科大东区(北门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['科大西区(北门对面)', '智能所', '安光所', '中区公寓(尚学路口)', '强磁场', '等离子体所转盘'] },

  { category: '博士生班车（科大高新校区，周一至周五）', busName: '1号车', plateNumber: '皖AS3616', departureTime: '06:45', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大高新校区(南门)', stops: ['等离子体所转盘', '强磁场', '中区公寓(尚学路口)', '安光所', '幼儿园'] },
  { category: '博士生班车（科大高新校区，周一至周五）', busName: '2号车', plateNumber: '皖A49161', departureTime: '12:30', departureLocation: '科大高新校区(南门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['幼儿园', '安光所', '中区公寓(尚学路口)', '强磁场', '等离子体所转盘'] },
  { category: '博士生班车（科大高新校区，周一至周五）', busName: '3号车', plateNumber: '皖A49161', departureTime: '13:00', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大高新校区(南门)', stops: ['等离子体所转盘', '强磁场', '二号楼', '安光所', '幼儿园'] },
  { category: '博士生班车（科大高新校区，周一至周五）', busName: '4号车', plateNumber: '皖AS3616', departureTime: '18:30', departureLocation: '科大高新校区(南门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['幼儿园', '安光所', '中区公寓(尚学路口)', '强磁场', '等离子体所转盘'] },
  { category: '博士生班车（科大高新校区，周一至周五）', busName: '5号车', plateNumber: '皖A49161', departureTime: '18:40', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科大高新校区(南门)', stops: ['等离子体所转盘', '强磁场', '中区公寓(尚学路口)', '安光所', '幼儿园'] },
  { category: '博士生班车（科大高新校区，周一至周五）', busName: '6号车', plateNumber: '皖A49161', departureTime: '22:10', departureLocation: '科大高新校区(南门)', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['幼儿园', '安光所', '中区公寓(尚学路口)', '强磁场', '等离子体所转盘'] },

  { category: '研究生班车（工研院）', busName: '1号车', plateNumber: '皖A35275', departureTime: '08:00', departureLocation: '等离子体所转盘', arrivalLocation: '工研院', stops: ['中区公寓(尚学路口)', '智能所', '科学家园(南门)', '香槟小镇(东门)'], note: '每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '1号车', plateNumber: '皖A35275', departureTime: '17:00', departureLocation: '工研院', arrivalLocation: '等离子体所转盘', stops: ['香槟小镇(东门)', '科学家园(南门)', '智能所', '中区公寓(尚学路口)'], note: '每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '2号车', plateNumber: '皖A35275', departureTime: '20:30', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '地铁二号线大铺头站附近', stops: ['固体所路口', '强磁场', '二号楼', '安光所', '智能所'], note: '每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '3号车', plateNumber: '皖A35275', departureTime: '21:30', departureLocation: '工研院', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['大铺头311站牌停靠(永达商场对面)', '科学家园', '智能所', '安光所', '二号楼', '等离子体所转盘'], note: '夏季(4月-10月)，每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '3号车', plateNumber: '皖A35275', departureTime: '21:00', departureLocation: '工研院', arrivalLocation: '等离子体所四号楼(北广场)', stops: ['大铺头311站牌停靠(永达商场对面)', '科学家园', '智能所', '安光所', '二号楼', '等离子体所转盘'], note: '冬季(11月-3月)，每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '3号车', plateNumber: '皖A35275', departureTime: '22:00', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科学家园', stops: ['固体所路口', '强磁场', '二号楼', '安光所', '智能所', '公交二公司'], note: '夏季(4月-10月)，每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '3号车', plateNumber: '皖A35275', departureTime: '21:30', departureLocation: '等离子体所四号楼(北广场)', arrivalLocation: '科学家园', stops: ['固体所路口', '强磁场', '二号楼', '安光所', '智能所', '公交二公司'], note: '冬季(11月-3月)，每日运行，春节不运行' },
  { category: '研究生班车（工研院）', busName: '4号车', plateNumber: '皖AH1841', departureTime: '08:00', departureLocation: '三十岗公寓(南门)', arrivalLocation: '三号食堂', stops: [], note: '换乘皖A35275至工研院' },

  { category: '附属学校班车（周一至周五）', busName: '1号车', plateNumber: '皖AA4168', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '2号车', plateNumber: '皖A43571', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '3号车', plateNumber: '皖AC1523', departureTime: '06:55', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '4号车', plateNumber: '皖AA4168', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '5号车', plateNumber: '皖A43571', departureTime: '07:30', departureLocation: '聚贤苑', arrivalLocation: '附属学校门口', stops: [] },
  { category: '附属学校班车（周一至周五）', busName: '6号车', plateNumber: '皖A43579', departureTime: '07:30', departureLocation: '肿瘤医院', arrivalLocation: '附属学校门口', stops: ['聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '7号车', plateNumber: '皖AH1841', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['御璟江山'] },
  { category: '附属学校班车（周一至周五）', busName: '8号车', plateNumber: '皖AC1523', departureTime: '07:30', departureLocation: '科学家园', arrivalLocation: '附属学校门口', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '9号车', plateNumber: '皖AA4168', departureTime: '17:20', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '10号车', plateNumber: '皖A43571', departureTime: '17:20', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '11号车', plateNumber: '皖AC1523', departureTime: '17:20', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '12号车', plateNumber: '皖AH1841', departureTime: '17:20', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里'] },
  { category: '附属学校班车（周一至周五）', busName: '13号车', plateNumber: '皖A43579', departureTime: '17:20', departureLocation: '附属学校门口', arrivalLocation: '肿瘤医院', stops: ['聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '14号车', plateNumber: '皖AA4168', departureTime: '18:20', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },
  { category: '附属学校班车（周一至周五）', busName: '15号车', plateNumber: '皖A43579', departureTime: '19:00', departureLocation: '附属学校门口', arrivalLocation: '科学家园', stops: ['桃源里', '聚贤苑'] },
  { category: '附属学校班车（周一至周五）', busName: '16号车', plateNumber: '皖AC1523', departureTime: '18:20', departureLocation: '附属学校门口', arrivalLocation: '聚贤苑', stops: ['桃源里', '科学家园'] },

  { category: '三十岗公寓班车（周一至周五）', busName: '1号车', plateNumber: '', departureTime: '07:20', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '1号车', plateNumber: '', departureTime: '07:40', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '2号车', plateNumber: '', departureTime: '08:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '2号车', plateNumber: '', departureTime: '08:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '3号车', plateNumber: '', departureTime: '08:30', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '3号车', plateNumber: '', departureTime: '09:00', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '4号车', plateNumber: '', departureTime: '11:30', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '4号车', plateNumber: '', departureTime: '13:20', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'], note: '公寓北楼楼下发车' },
  { category: '三十岗公寓班车（周一至周五）', busName: '5号车', plateNumber: '', departureTime: '12:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '5号车', plateNumber: '', departureTime: '14:00', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'], note: '公寓北楼楼下发车' },
  { category: '三十岗公寓班车（周一至周五）', busName: '6号车', plateNumber: '', departureTime: '17:15', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '6号车', plateNumber: '', departureTime: '17:40', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '7号车', plateNumber: '', departureTime: '18:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '7号车', plateNumber: '', departureTime: '18:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '8号车', plateNumber: '', departureTime: '19:20', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '8号车', plateNumber: '', departureTime: '19:40', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '9号车', plateNumber: '', departureTime: '21:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '9号车', plateNumber: '', departureTime: '21:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '10号车', plateNumber: '', departureTime: '22:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周一至周五）', busName: '10号车', plateNumber: '', departureTime: '即刻返回', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },

  { category: '三十岗公寓班车（周六）', busName: '1号车', plateNumber: '', departureTime: '08:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周六）', busName: '1号车', plateNumber: '', departureTime: '08:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周六）', busName: '2号车', plateNumber: '', departureTime: '11:30', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周六）', busName: '2号车', plateNumber: '', departureTime: '13:20', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'], note: '公寓北楼楼下发车' },
  { category: '三十岗公寓班车（周六）', busName: '3号车', plateNumber: '', departureTime: '18:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周六）', busName: '3号车', plateNumber: '', departureTime: '18:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周六）', busName: '4号车', plateNumber: '', departureTime: '22:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周六）', busName: '4号车', plateNumber: '', departureTime: '即刻返回', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },

  { category: '三十岗公寓班车（周日）', busName: '1号车', plateNumber: '', departureTime: '08:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周日）', busName: '1号车', plateNumber: '', departureTime: '08:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] },
  { category: '三十岗公寓班车（周日）', busName: '2号车', plateNumber: '', departureTime: '11:30', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周日）', busName: '2号车', plateNumber: '', departureTime: '13:20', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'], note: '公寓北楼楼下发车' },
  { category: '三十岗公寓班车（周日）', busName: '3号车', plateNumber: '', departureTime: '18:00', departureLocation: '核所', arrivalLocation: '三十岗公寓(南门)', stops: ['智能所', '安光所', '中区公寓(尚学路口)', '交叉楼', '三号食堂', '聚变堆园区(北门)'] },
  { category: '三十岗公寓班车（周日）', busName: '3号车', plateNumber: '', departureTime: '18:30', departureLocation: '三十岗公寓(南门)', arrivalLocation: '核所', stops: ['聚变堆园区(北门)', '三号食堂', '交叉楼', '中区公寓(尚学路口)', '安光所', '智能所'] }
];
