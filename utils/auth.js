const WXAPI = require('../wxapi/router.js')

/**
 * 检测登录状态，返回 true / false
 */
async function checkHasLogined() {
  const token = wx.getStorageSync('token')
  if (!token) {
    return false
  }
  //检查登录态是否过期
  wx.checkSession({
    fail() {
      return false
    }
  })
  const checkTokenRes = await WXAPI.checkToken(token)
  if (checkTokenRes != 1) {
    wx.removeStorageSync('token')
    return false
  }
  return true
}

/**
 * 跳转登录界面
 */
async function login(page) {
  const that = this
  wx.login({
    success: function(res) {
      WXAPI.login(res.code).then(function(res) {
        if (res == 999) {
          //注册
        }
        if (res != 200) {
          //登录出错
          wx.showModal({
            title: '错误',
            content: '无法登录，请重试' + res.msg,
          })
        }

      })
    }
  })
}

/**
 * 注册
 */
async function register(page) {
  let that = this;
  wx.login({
    success: function(res) {
      let code = res.code
      wx.getUserInfo({
        success: function (res) {
          let iv = res.iv;
          let encryptedData = res.encryptedData;
          WXAPI.register({
            code: code,
            encryptedData: encryptedData,
            iv: iv
          }).then(function(res) {
            that.login(page);
          })
        }
      })
    }
  })

}