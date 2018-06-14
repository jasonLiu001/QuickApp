/*列表中表字段*/
const tableFields = ['field1', 'field2', 'field3', 'field4', 'field5', 'field6', 'field7', 'field8'];

const investTable = [
    {
        name: 'period',
        des: 'period'
    },
    {
        name: 'planType',
        des: 'planType'
    },
    {
        name: 'investNumberCount',
        des: 'investNumberCount'
    },
    {
        name: 'currentAccountBalance',
        des: 'currentAccountBalance'
    },
    {
        name: 'STATUS',
        des: 'STATUS'
    },
    {
        name: 'isWin',
        des: 'isWin'
    },
    {
        name: 'investTime',
        des: 'investTime'
    }];


const maxProfitTable = [
    {
        name: 'period',
        des: 'period'
    },
    {
        name: 'planType',
        des: 'planType'
    },
    {
        name: 'originAccoutBalance',
        des: 'originAccoutBalance'
    }, {
        name: 'maxAccountBalance',
        des: 'maxAccountBalance'
    },
    {
        name: 'isRealInvest',
        des: 'isRealInvest'
    }, {
        name: 'createTime',
        des: 'createTime'
    }
];

export {
    tableFields,
    investTable,
    maxProfitTable
}
