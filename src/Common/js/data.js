/*接口列表*/
const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/service/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/service/lottery/findInvestInfoList',
    findMaxProfitInfoList: 'https://www.cnlands.cn/service/lottery/findMaxProfitInfoList',
    findPlanInfoList: 'https://www.cnlands.cn/service/lottery/findPlanInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/service/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList',
    getInvestInfoByPeriod: "https://www.cnlands.cn/service/lottery/getInvestInfoByPeriod",
    findInvestInfoListBeforeTime: "https://www.cnlands.cn/service/lottery/findInvestInfoListBeforeTime",
    getAllSettings: "https://www.cnlands.cn/service/lottery/getAllSettings",
    updateSettingsByKey: "https://www.cnlands.cn/service/lottery/updateSettingsByKey",
    getSettingsByKey: "https://www.cnlands.cn/service/lottery/getSettingsByKey",
    findInvestInfoListProfit: "https://www.cnlands.cn/service/lottery/findInvestInfoListProfit"
};

const apiCollection = [
    {
        name: 'plan01',
        url: apiUrl.findInvestInfoList,
        desc: '方案1',
        group: 1
    },
    {
        name: 'plan02',
        url: apiUrl.findInvestInfoList,
        desc: '方案2',
        group: 1
    },
    {
        name: 'plan03',
        url: apiUrl.findInvestInfoList,
        desc: '方案3',
        group: 1
    },
    {
        name: 'plan04',
        url: apiUrl.findInvestInfoList,
        desc: '方案4',
        group: 1
    },
    {
        name: 'plan01_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-截止22点',
        group: 2
    },
    {
        name: 'plan01_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-截止2点',
        group: 2
    },
    {
        name: 'plan02_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-截止22点',
        group: 2
    },
    {
        name: 'plan02_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-截止2点',
        group: 2
    },
    {
        name: 'plan03_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-截止22点',
        group: 2
    },
    {
        name: 'plan03_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-截止2点',
        group: 2
    },
    {
        name: 'plan04_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-截止22点',
        group: 2
    },
    {
        name: 'plan04_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-截止2点',
        group: 2
    },
    {
        name: 'plan01_before22_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点最大利润',
        group: 3
    },
    {
        name: 'plan01_wholeday_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点最大利润',
        group: 3
    },
    {
        name: 'plan01_before22_minprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点最小利润',
        group: 3
    },
    {
        name: 'plan01_wholeday_minprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点最小利润',
        group: 3
    },
    {
        name: 'plan01_before22_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点特定利润1200',
        group: 3
    },
    {
        name: 'plan01_wholeday_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点特定利润1200',
        group: 3
    }
];

// 图标列表
const iconList = {
    checkbox_checked: 'https://www.cnlands.cn/images/icon_box-checked.png',
    checkbox_unchecked: 'https://www.cnlands.cn/images/icon_box-empty.png',
    icon_completed_right: 'https://www.cnlands.cn/images/icon_right.png',
    icon_completed_wrong: 'https://www.cnlands.cn/images/icon_error.png'
};

export {
    apiUrl,
    iconList,
    apiCollection
}
