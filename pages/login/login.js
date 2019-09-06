const WXAPI = require('../../wxapi/router')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    userid: "",
    password: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindUserIdInput: function(e) {
    this.setData({
      userid: e.detail.value
    })
  },

  bindPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  bindGetUserInfo: function(e) {
    console.log(e);
    if (!e.detail.userInfo) {
      return;
    }
    if (app.globalData.isConnected) {
      wx.setStorageSync('userInfo', e.detail.userInfo)
      this.login();
    } else {
      wx.showToast({
        title: '当前无网络',
        icon: 'none',
      })
    }
  },

  login: function() {
    const that = this;
    const token = wx.getStorageSync('token');
    if (token) {
      WXAPI.checkToken(token).then(function(res) {
        if (res.code != 200) {
          wx.removeStorageSync('token');
          that.login();
        } else {
          app.isLogin = false;
        }
        return;
      })
    }
    wx.login({
      success: function(res) {
        let data = {
          code: res.code,
          userid: this.data.userid,
          password: this.data.password
        }
        WXAPI.login(data).then(function(res) {
          if (res.code == 600) {
            //此工号不存在
          }
          if (res.code == 400) {
            //账号名或密码错误
          }
          if (res.code != 200) {
            // 登录错误
            wx.hideLoading();
            wx.showModal({
              title: '提示',
              content: '无法登录，请重试',
              showCancel: false
            })
            return;
          }
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('uid', res.data.uid)
          app.isLogin = false;
          wx.navigateTo({
            url: '/pages/index/index'
          })
        })
      }
    })
  }
})