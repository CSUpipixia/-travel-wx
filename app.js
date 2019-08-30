//app.js
const WXAPI = require('./wxapi/router.js')
const CONFIG = require('config.js')

App({
  isLogin: false,
  onLaunch: function() {
    const that = this;

  },
  goLoginPage: function() {
    if (this.isLogin)
      return
    wx.removeStorageSync('token');
    this.isLogin = true
    setTimeout(function() {
      wx.navigateTo({
        url: 'page/login/login',
      })
    }, 1000)
  },
  globalData: {
    isConnected: true,
  }
})