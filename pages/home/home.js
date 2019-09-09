const WXAPI = require('../../wxapi/router');
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
        time: "2019-09-09",
        status: ""
      },
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
    },
  },
  lifetimes: {
    attached: function () {
      console.log("加载完毕");
      let uid = wx.getStorageSync("uid");
      if (uid) {
        WXAPI.getMyApplication(uid).then(function(res) {
          if (res,code == 200) {

          }
        })
      }
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
