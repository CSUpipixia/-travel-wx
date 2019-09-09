const WXAPI = require('../../wxapi/router');
const app = getApp();

Page({
  data: {
    DetailData: {
      'applicant_id': '',
      'startdate': '2018-12-25',
      'duration': '1',
      'start_site': ['湖南省', '长沙市', '岳麓区'],
      'destination': ['湖南省', '长沙市', '岳麓区'],
      'vehicle': '飞机',
      'business_reason': '',
      'remark': ''
    },
  },

  // 查看申请表详细信息
  toRefundTap: function(e) {
    wx.navigateTo({
      url: "/pages/refund/refund"
    })
  }
})