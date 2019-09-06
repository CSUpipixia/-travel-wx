Page({
  data: {
    PageCur: 'home'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },

  // 转向申请页面
  toApplyTap: function (e) {
    wx.navigateTo({
      url: '/pages/apply/apply'
    })
  },
  
  onShareAppMessage() {
    return {
      title: '差旅系统',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})