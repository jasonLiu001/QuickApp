/*接口列表*/
const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/service/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/service/lottery/findInvestInfoList',
    findMaxProfitInfoList: 'https://www.cnlands.cn/service/lottery/findMaxProfitInfoList',
    findPlanInfoList: 'https://www.cnlands.cn/service/lottery/findPlanInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/service/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList',
    getInvestInfoByPeriod: "https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList",
    findInvestInfoListBeforeTime: "https://www.cnlands.cn/service/lottery/findInvestInfoListBeforeTime",
    getAllSettings: "https://www.cnlands.cn/service/lottery/getAllSettings",
    updateSettingsByKey: "https://www.cnlands.cn/service/lottery/updateSettingsByKey",
    getSettingsByKey: "https://www.cnlands.cn/service/lottery/getSettingsByKey"
};

const apiCollection = [
    {
        name: 'plan01',
        url: apiUrl.findInvestInfoList,
        desc: '方案1'
    },
    {
        name: 'plan02',
        url: apiUrl.findInvestInfoList,
        desc: '方案2'
    },
    {
        name: 'plan03',
        url: apiUrl.findInvestInfoList,
        desc: '方案3'
    },
    {
        name: 'plan04',
        url: apiUrl.findInvestInfoList,
        desc: '方案4'
    },
    {
        name: 'plan01_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-22点前'
    },
    {
        name: 'plan01_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-02点前'
    },
    {
        name: 'plan02_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-22点前'
    },
    {
        name: 'plan02_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-02点前'
    },
    {
        name: 'plan03_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-22点前'
    },
    {
        name: 'plan03_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-02点前'
    },
    {
        name: 'plan04_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-22点前'
    },
    {
        name: 'plan04_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-02点前'
    }
];

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
    iconList,
    apiCollection
}
