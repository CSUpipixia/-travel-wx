const app = getApp()
const WXAPI = require('../../wxapi/router.js')

Page({
  data: {
    motto: 'Hello World'
  },

  //测试
  sendRequest: function (e) {
    var that = this;
    // wx.login({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    WXAPI.test('test').then(
      function (res) {
        console.log(res);
        if (res.code == 200) {
          that.setData({
            motto: res.data,
          })
        }
      }
    );
  }
})