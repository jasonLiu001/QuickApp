/*接口列表*/
const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/service/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/service/lottery/findInvestInfoList',
    findMaxProfitInfoList: 'https://www.cnlands.cn/service/lottery/findMaxProfitInfoList',
    findPlanInfoList: 'https://www.cnlands.cn/service/lottery/findPlanInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/service/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList'
};

// 图标列表
const iconList = {
    checkbox_checked: 'https://www.cnlands.cn/images/icon_box-checked.png',
    checkbox_unchecked: 'https://www.cnlands.cn/images/icon_box-empty.png',
    icon_completed_right: 'https://www.cnlands.cn/images/icon_right.png',
    icon_completed_wrong: 'https://www.cnlands.cn/images/icon_error.png'
};

const investTable = [
    {
        name: 'period',
        des: '期号'
    },
    {
        name: 'planType',
        des: '计划类型'
    },
    {
        name: 'investNumberCount',
        des: '购买号码数量'
    },
    {
        name: 'currentAccountBalance',
        des: '当前账号余额'
    },
    {
        name: 'STATUS',
        des: '开奖状态'
    },
    {
        name: 'isWin',
        des: '是否中奖'
    },
    {
        name: 'investTime',
        des: '购买号码时间'
    }];


const maxProfitTable = [
    {
        name: 'period',
        des: '期号'
    },
    {
        name: 'planType',
        des: '计划类型'
    },
    {
        name: 'originAccoutBalance',
        des: '初始账号余额'
    }, {
        name: 'maxAccountBalance',
        des: '最大盈利值'
    },
    {
        name: 'isRealInvest',
        des: '是否是真实投注'
    }, {
        name: 'createTime',
        des: '购买号码时间'
    }
];

export {
    investTable,
    maxProfitTable,
    apiUrl,
    iconList
}
