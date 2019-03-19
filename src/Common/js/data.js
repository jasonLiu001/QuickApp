/*接口列表*/
const apiUrl = {
    findAwardInfoList: 'https://www.cnlands.cn/service/lottery/findAwardInfoList',
    findInvestInfoList: 'https://www.cnlands.cn/invest/getInvestList',
    findInvestTotalInfoList: 'https://www.cnlands.cn/invest/getInvestList',
    findPlanInfoList: 'https://www.cnlands.cn/service/lottery/findPlanInfoList',
    findAllInvestTotalInfoList: 'https://www.cnlands.cn/service/lottery/findAllInvestTotalInfoList',
    findPlanResultInfoList: 'https://www.cnlands.cn/service/lottery/findPlanResultInfoList',
    findInvestNumbersInfoList: 'https://www.cnlands.cn/service/lottery/findInvestNumbersInfoList',
    getInvestInfoByPeriod: "https://www.cnlands.cn/service/lottery/getInvestInfoByPeriod",
    getInvestTotalInfoByPeriod: "https://www.cnlands.cn/service/lottery/getInvestTotalInfoByPeriod",
    getAllSettings: "https://www.cnlands.cn/settings/getAllSettings",
    updateSettingsByKey: "https://www.cnlands.cn/settings/updateSettingsByKey",
    getProfitList: "https://www.cnlands.cn/invest/getProfitList",
    updateNextPeriodOpenNumber: "https://www.cnlands.cn/service/lottery/updateNextPeriodOpenNumber",
    manualInvest: "https://www.cnlands.cn/invest/manualInvest",
    manualCancelInvest: "https://www.cnlands.cn/invest/manualCancelInvest",
    manualStartApp: "https://www.cnlands.cn/app/start",
    manualCalculateWinMoney: "https://www.cnlands.cn/invest/manualCalculateWinMoney",
    updateHistoryAward: "https://www.cnlands.cn/award/updateHistoryAward"
};

// 图标列表
const iconList = {
    checkbox_checked: 'https://www.cnlands.cn/images/icon_box-checked.png',
    checkbox_unchecked: 'https://www.cnlands.cn/images/icon_box-empty.png',
    icon_completed_right: 'https://www.cnlands.cn/images/icon_right.png',
    icon_completed_wrong: 'https://www.cnlands.cn/images/icon_error.png'
};

//投注表名
const INVEST_TABLE_NAME = {
    invest: 'invest',
    investTotal: 'invest_total'
};

export {
    apiUrl,
    iconList,
    INVEST_TABLE_NAME
}
