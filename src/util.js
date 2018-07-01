/**
 * 显示菜单
 */
function showMenu() {
    const prompt = require('@system.prompt');
    const router = require('@system.router');
    const appInfo = require('@system.app').getInfo();
    prompt.showContextMenu({
        itemList: ['保存桌面', '关于', '取消'],
        success: function (ret) {
            switch (ret.index) {
                case 0:
                    // 保存桌面
                    createShortcut();
                    break;
                case 1:
                    // 关于
                    router.push({
                        uri: '/About',
                        params: {
                            name: appInfo.name,
                            icon: appInfo.icon
                        }
                    });
                    break;
                case 2:
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
                let serverData = JSON.parse(data.data);

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
 * @param {String} url
 * @param {Function} completeCallback
 */
function getData(url, completeCallback) {
    const prompt = require('@system.prompt');
    const fetch = require('@system.fetch');
    fetch.fetch({
        url: url,
        method: 'POST',
        success: (data) => {
            if (data) {
                console.log(data);
                //解析 服务器端接口数据
                let serverData = JSON.parse(data.data);

                if (serverData.data === null || serverData.data === undefined) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误`
                    });
                    return;
                }
                if (completeCallback && typeof (completeCallback) === 'function') {
                    completeCallback(serverData.data);
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
 * 更新数据
 */
function updateData(url) {
    const prompt = require('@system.prompt');
    const fetch = require('@system.fetch');
    fetch.fetch({
        url: url,
        method: 'POST',
        success: (data) => {
            if (data) {
                //解析 服务器端接口数据
                let serverData = JSON.parse(data.data);

                //全部加载完成 隐藏正在载入...
                if (serverData.data === null || serverData.data === undefined) {
                    prompt.showToast({
                        message: `服务器返回数据格式错误`
                    });
                    return;
                }

                prompt.showToast({
                    message: `数据更新成功`
                });
            }
        },
        fail: (data, code) => {
            prompt.showToast({
                message: `请求数据超时, code = ${code}`
            });
        }
    });
}

export default {
    showMenu,
    createShortcut,
    findList,
    getData,
    updateData
}
