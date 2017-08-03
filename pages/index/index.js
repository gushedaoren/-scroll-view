//index.js
//获取应用实例
var app = getApp()



Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    currentScrollPos:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  upper: function(e) {
    console.log(e)

  },
  lower: function(e) {
    console.log(e)

  },
  scroll: function(e) {
    console.log(e)
    var to=e.detail.scrollLeft;
    console.log(to);
    this.setData({ currentScrollPos: to })


  },
  onLoad: function () {
    console.log('onLoad')


    var that = this
    //调用应用实例的方法获取全局数据


    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }



})
