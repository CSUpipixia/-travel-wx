Page({

  /**
   * 页面的初始数据
   */
  data: {
    applicationList: [], //申请列表
    applications: [{
        id: 1,
        name: "长沙 —— 上海",
        price: 300
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      },
      {
        id: 2,
        name: "长沙 —— 深圳",
        price: 400
      }
    ],
    // 加载更多
    loadingMoreHidden: true
  },

  // 查看申请表详细信息
  toDetailsTap: function(e) {
    wx.navigateTo({
      url: "/pages/applicationdetails/index?id=" + e.currentTarget.dataset.id
    })
  },

  // 转向申请页面
  toApplyTap: function(e) {
    wx.navigateTo({
      url: '/pages/apply/apply'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
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

  }
})