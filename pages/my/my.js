const app = getApp()
const CONFIG = require('../../config.js')
const WXAPI = require('../../wxapi/router')
const AUTH = require('../../utils/auth')

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    userInfo: {
      nickName: "薛涛",
      avatarUrl: "../../image/nologin.png"
    },
    allTimes: 0,
    allCitys: 0,
    allRefunds: 0
  },
  attached() {
    console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            allTimes: i,
            allCitys: i,
            allRefunds: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          allTimes: that.coutNum(200),
          allCitys: that.coutNum(98),
          allRefunds: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  methods: {
    // 数字转换
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
  }
})