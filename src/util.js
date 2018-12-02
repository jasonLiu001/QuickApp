/**
 * 显示菜单
 */
function showMenu() {
    const prompt = require('@system.prompt');
    const router = require('@system.router');
    const appInfo = require('@system.app').getInfo();
    prompt.showContextMenu({
        itemList: ['参数设置', '保存桌面', '关于', '取消'],
        success: function (ret) {
            switch (ret.index) {
                case 0:
                    //参数设置
                    router.push({
                        uri: '/Settings'
                    });
                    break;
                case 1:
                    // 保存桌面
                    createShortcut();
                    break;
                case 2:
                    // 关于
                    router.push({
                        uri: '/About',
                        params: {
                            name: appInfo.name,
                            icon: appInfo.icon
                        }
                    });
                    break;
                case 3:
                    // 取消
                    break;
                default:
                    prompt.showToast({
                        message: 'error'
                    })
            }
        }
    })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
    const prompt = require('@system.prompt');
    const shortcut = require('@system.shortcut');
    shortcut.hasInstalled({
        success: function (ret) {
            if (ret) {
                prompt.showToast({
                    message: '已创建桌面图标'
                })
            } else {
                shortcut.install({
                    success: function () {
                        prompt.showToast({
                            message: '成功创建桌面图标'
                        })
                    },
                    fail: function (errmsg, errcode) {
                        prompt.showToast({
                            message: `${errcode}: ${errmsg}`
                        })
                    }
                })
            }
        }
    })
}

/**
 *
 * 获取列表数据
 * @param {String} method
 * @param {Array} list
 * @param {String} url
 * @param {Function} noDataCallback
 * @param {Function} everySinglePageDataCallback
 */
function findList(method, list, url, noDataCallback, everySinglePageDataCallback) {
    const prompt = require('@system.prompt');
    const fetch = require('@system.fetch');
    //console.log(`title: ${JSON.parse(data.data).title}`)
    fetch.fetch({
        url: url,
        method: method,
        success: (data) => {
            if (data) {
                //解析 服务器端接口数据
                let serverData;
                try {
                    serverData = JSON.parse(data.data);
                } catch (e) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误或无响应`
                    });
                    return;
                }

                //全部加载完成 隐藏正在载入...
                if (serverData.data === null || serverData.data === undefined) {
                    if (noDataCallback && typeof (noDataCallback) === 'function') {
                        noDataCallback();
                    }

                    return;
                }

                //遍历数组数据
                for (let key in serverData.data) {
                    list.push(serverData.data[key]);
                }
            }
            if (everySinglePageDataCallback && typeof (everySinglePageDataCallback) === 'function') {
                everySinglePageDataCallback();
            }

        },
        fail: (data, code) => {
            prompt.showToast({
                message: `请求数据超时, code = ${code}`
            });
        }
    })
}

/**
 *
 * 获取单条数据
 * @param {String} url 数据请求url
 * @param data 提交数据
 * @param httpMethod http请求方式 GET或者POST
 * @param {Function} successCallback 请求成功回调
 */
function getData(url, data, httpMethod, successCallback) {
    const prompt = require('@system.prompt');
    const fetch = require('@system.fetch');
    fetch.fetch({
        url: url,
        method: httpMethod,
        data: data || {},
        success: (data) => {
            if (data) {
                console.log(data);
                //解析 服务器端接口数据
                let serverData;
                try {
                    serverData = JSON.parse(data.data);
                } catch (e) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误或无响应`
                    });
                    return;
                }

                if (serverData.data === null || serverData.data === undefined) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误`
                    });
                    return;
                }
                if (successCallback && typeof (successCallback) === 'function') {
                    successCallback(serverData);
                }
            }
        },
        fail: (data, code) => {
            prompt.showToast({
                message: `请求数据超时, code = ${code}`
            });
        }
    });
}

/**
 * 更新数据
 * @param url 请求url
 * @param data body体中的数据
 * @param successCallback 数据更新成功消息
 */
function updateData(url, data, successCallback) {
    const prompt = require('@system.prompt');
    const fetch = require('@system.fetch');
    fetch.fetch({
        url: url,
        data: data || {},
        method: 'POST',
        success: (data) => {
            if (data) {
                //解析 服务器端接口数据
                let serverData;
                try {
                    serverData = JSON.parse(data.data);
                } catch (e) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误或无响应`
                    });
                    return;
                }

                //全部加载完成 隐藏正在载入...
                if (serverData.data === null || serverData.data === undefined) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误`
                    });
                    return;
                }

                if (successCallback && typeof (successCallback) === 'function') {
                    successCallback(serverData);
                }
            }
        },
        fail: (data, code) => {
            prompt.showToast({
                message: `请求数据超时, code = ${code}`
            });
        }
    });
}

/**
 *
 * 获取1000注原始号码
 */
function getTotalNumberArray() {
    let a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let totalArray = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            for (let k = 0; k < c.length; k++) {
                totalArray.push(a[i] + '' + b[j] + '' + c[k]);
            }
        }
    }
    return totalArray;
}

/**
 *
 * 从源数组中得到剩余
 * @param sourceNumberArray 需要操作的源数组
 * @param needToBeDeleteNumberString  需要从源数组中被移除号码字符，用逗号分隔
 */
function getRestNumbersFromSource(sourceNumberArray, needToBeDeleteNumberString) {
    let resultsNumbers = [];
    sourceNumberArray.forEach((item, index) => {
        if (needToBeDeleteNumberString.indexOf(item) === -1) {
            resultsNumbers.push(item);
        }
    });
    return resultsNumbers;
}

/**
 *
 * 显示操作确认提示
 * @param message 提示内容
 * @param btnConfirmCallback 确定按钮回调函数
 */
function showConfirmDialog(message, btnConfirmCallback) {
    const prompt = require('@system.prompt');
    prompt.showDialog({
        title: '提示',
        message: message,
        buttons: [
            {
                text: '确定',
                color: '#33dd44'
            },
            {
                text: '取消',
                color: '#33dd44'
            }
        ],
        success: function (ret) {
            switch (ret.index) {
                case 0://确定
                    btnConfirmCallback();
                    break;
                case 1://取消
                    break;
            }
        },
        cancel: function () {
            console.log('handling cancel')
        },
        fail: function (data, code) {
            console.log(`handling fail, code = ${code}`)
        }
    });
}

/**
 *
 * 显示提示
 * @param message 提示消息
 */
function showAlert(message) {
    const prompt = require('@system.prompt');
    prompt.showDialog({
        title: '提示',
        message: message,
        buttons: [
            {
                text: '确定',
                color: '#33dd44'
            }
        ],
        success: function (ret) {
            switch (ret.index) {
                case 0://确定
                    break;
            }
        },
        cancel: function () {
            console.log('handling cancel')
        },
        fail: function (data, code) {
            console.log(`handling fail, code = ${code}`)
        }
    });
}

/**
 *
 * 显示Toast提示
 * @param message 提示内容
 */
function showToast(message) {
    const prompt = require('@system.prompt');
    prompt.showToast({
        message: message
    });
}

export default {
    showMenu,
    createShortcut,
    findList,
    getData,
    updateData,
    getTotalNumberArray,
    getRestNumbersFromSource,
    showConfirmDialog,
    showAlert,
    showToast
}
