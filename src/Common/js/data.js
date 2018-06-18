/*列表中表字段*/
const tableFields = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8'];

const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/servie/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/servie/lottery/findInvestInfoList',
    findMaxProfitInfoList: 'https://www.cnlands.cn/servie/lottery/findMaxProfitInfoList',
    findPlanInfoList: 'https://www.cnlands.cn/servie/lottery/findPlanInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/servie/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/servie/lottery/findInvestNumbersInfoList'
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
    tableFields,
    investTable,
    maxProfitTable,
    apiUrl
}
