const WXAPI = require('../../wxapi/router');
const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    DetailData: {
      'applicant_id': '',
      'startdate': '2018-12-25',
      'duration': '1',
      'start_site': ['湖南省', '长沙市', '岳麓区'],
      'destination': ['湖南省', '长沙市', '岳麓区'],
      'vehicle': '飞机',
      'business_reason': '',
      'remark': '',
      'type': ''
    },
    DurationRange: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    VehicleRange: ['飞机', '高铁', '火车', '公司车辆'],
    ReasonRange: [],
    CheckAgree: false,
    CheckboxValue: [1],
  },

  DateChange(e) {
    this.setData({
      [`DetailData.startdate`]: e.detail.value
    })
  },

  DurationChange(e) {
    var data = this.data.DurationRange[e.detail.value];
    this.setData({
      [`DetailData.duration`]: data
    })
  },

  StartSiteChange: function(e) {
    this.setData({
      [`DetailData.start_site`]: e.detail.value
    })
  },

  DestinationChange: function(e) {
    this.setData({
      [`DetailData.destination`]: e.detail.value
    })
  },

  VehicleChange(e) {
    var data = this.data.VehicleRange[e.detail.value];
    this.setData({
      [`DetailData.vehicle`]: data
    })
  },

  ReasonChange(e) {
    var data = this.data.VehicleRange[e.detail.value];
    this.setData({
      [`DetailData.business_reason`]: data
    })
  },

  CheckboxChange(e) {
    this.data.CheckboxValue = e.detail.value;
    if (this.data.CheckboxValue[0] == 1) {
      this.setData({
        CheckAgree: true
      });
    } else {
      this.setData({
        CheckAgree: false
      });
    }
  },

  formSubmit(e) {
    this.setData({
      [`DetailData.type`]: 'submit'
    });
    let submitData = this.data.DetailData;
    console.log(submitData);
    WXAPI.apply(submitData).then(function (res) {

    });
  },

  formSave() {
    this.setData({
      [`DetailData.type`]: 'save'
    });
    let submitData = this.data.DetailData;
  },

  onLoad: function(options) {

  }
})