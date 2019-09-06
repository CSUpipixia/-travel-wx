const app = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
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

  methods: {
    // 查看申请表详细信息
    toDetailsTap: function(e) {
      wx.navigateTo({
        url: "/pages/applicationdetails/index?id=" + e.currentTarget.dataset.id
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
  },
})