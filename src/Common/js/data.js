/*接口列表*/
const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/service/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/service/lottery/findInvestInfoList',
    findPlanInfoList: 'https://www.cnlands.cn/service/lottery/findPlanInfoList',
    findInvestTotalInfoList: 'https://www.cnlands.cn/service/lottery/findInvestTotalInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/service/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList',
    getInvestInfoByPeriod: "https://www.cnlands.cn/service/lottery/getInvestInfoByPeriod",
    getInvestTotalInfoByPeriod: "https://www.cnlands.cn/service/lottery/getInvestTotalInfoByPeriod",
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
        group: 1,
        enable: 1
    },
    {
        name: 'plan02',
        url: apiUrl.findInvestInfoList,
        desc: '方案2',
        group: 1,
        enable: 1
    },
    {
        name: 'plan03',
        url: apiUrl.findInvestInfoList,
        desc: '方案3',
        group: 1,
        enable: 1
    },
    {
        name: 'plan04',
        url: apiUrl.findInvestInfoList,
        desc: '方案4',
        group: 1,
        enable: 0
    },
    {
        name: 'plan01_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-截止22点最近1条',
        group: 2,
        enable: 1
    },
    {
        name: 'plan02_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-截止22点最近1条',
        group: 2,
        enable: 1
    },
    {
        name: 'plan03_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-截止22点最近1条',
        group: 2,
        enable: 1
    },
    {
        name: 'plan04_before22',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-截止22点最近1条',
        group: 2,
        enable: 0
    },
    {
        name: 'plan01_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案1-截止2点最近1条',
        group: 3,
        enable: 1
    },
    {
        name: 'plan02_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案2-截止2点最近1条',
        group: 3,
        enable: 1
    },
    {
        name: 'plan03_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案3-截止2点最近1条',
        group: 3,
        enable: 1
    },
    {
        name: 'plan04_before02',
        url: apiUrl.findInvestInfoListBeforeTime,
        desc: '方案4-截止2点最近1条',
        group: 3,
        enable: 1
    },
    {
        name: 'plan01_before22_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点利润',
        group: 4,
        enable: 1
    },
    {
        name: 'plan02_before22_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案2-截止22点利润',
        group: 4,
        enable: 1
    },
    {
        name: 'plan03_before22_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案3-截止22点利润',
        group: 4,
        enable: 1
    },
    {
        name: 'plan04_before22_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案4-截止22点利润',
        group: 4,
        enable: 0
    },
    {
        name: 'plan01_before22_minprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点利润',
        group: 4,
        enable: 0
    },
    {
        name: 'plan01_before22_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止22点利润>1200',
        group: 5,
        enable: 1
    },
    {
        name: 'plan02_before22_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案2-截止22点利润>1200',
        group: 5,
        enable: 1
    },
    {
        name: 'plan03_before22_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案3-截止22点利润>1200',
        group: 5,
        enable: 1
    },
    {
        name: 'plan04_before22_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案4-截止22点利润>1200',
        group: 5,
        enable: 0
    },
    {
        name: 'plan01_wholeday_maxprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点利润',
        group: 6,
        enable: 1
    },
    {
        name: 'plan01_wholeday_minprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点利润',
        group: 6,
        enable: 1
    },
    {
        name: 'plan01_wholeday_fixedprofit',
        url: apiUrl.findInvestInfoListProfit,
        desc: '方案1-截止0点利润>1200',
        group: 6,
        enable: 1
    },
    {
        name: 'plan01_all_before22',
        url: apiUrl.findInvestInfoList,
        desc: '方案1-截止22点所有记录',
        group: 7,
        enable: 1
    },
    {
        name: 'plan02_all_before22',
        url: apiUrl.findInvestInfoList,
        desc: '方案2-截止22点所有记录',
        group: 7,
        enable: 1
    },
    {
        name: 'plan03_all_before22',
        url: apiUrl.findInvestInfoList,
        desc: '方案3-截止22点所有记录',
        group: 7,
        enable: 1
    },
    {
        name: 'plan04_all_before22',
        url: apiUrl.findInvestInfoList,
        desc: '方案4-截止22点所有记录',
        group: 7,
        enable: 0
    },
    {
        name: 'all_plan',
        url: apiUrl.findInvestTotalInfoList,
        desc: '所有方案结果',
        group: 8,
        enable: 1
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
