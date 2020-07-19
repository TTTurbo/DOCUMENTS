const moment = require('moment');
const secretKeyConf = require('./secretKeyConf.js');

moment.locale("zh-cn");

module.exports = {
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'TTTurbo',
    repo: 'DOCUMENTS',
    clientId: '9482cdf52b023678e118',
    clientSecret: 'a6a4cfc9af56185f6b3e5c9d68dad9d2f4a1b9b8',
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': {
    'ga': secretKeyConf.ga
  },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    titleMap: {
      javascript: "JS 基础",
    },
    collapseList: [
      "/frontend/javascript/"
    ]
  }
};