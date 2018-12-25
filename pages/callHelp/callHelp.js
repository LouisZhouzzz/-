// pages/callHelp/callHelp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h: '',
    longitude: '',
    latitude: '',
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: '',
      longitude: '',
      width: 50,
      height: 50,
      location: '',
    },
    {
      iconPath: "/image/volunteer.png",
      id: 1,
      latitude: 23.13579,
      longitude: 113.26440,
      width: 30,
      height: 30,
      location: '',
      callout:{
        content:'黄志明 1333333333',
        color:'#fff',
        fontSize:'25',
        borderRadius:'2',
        bgColor:'#33FF49',
        padding:'5',
        display: 'ALWAYS',
        textAlign: 'center'
      }
      },
      {
        iconPath: "/image/volunteer.png",
        id: 2,
        latitude: 23.13479,
        longitude: 113.26740,
        width: 30,
        height: 30,
        location: '',
        callout: {
          content: '周召伟 1333333333',
          color: '#fff',
          fontSize: '25',
          borderRadius: '2',
          bgColor: '#33FF49',
          padding: '5',
          display: 'ALWAYS',
          textAlign: 'center'
        }
      },
      {
        iconPath: "/image/volunteer.png",
        id: 3,
        latitude: 23.13079,
        longitude: 113.26540,
        width: 30,
        height: 30,
        location: ''
      },
      {
        iconPath: "/image/volunteer.png",
        id: 4,
        latitude: 23.13279,
        longitude: 113.26440,
        width: 30,
        height: 30,
        location: ''
      }
    ],
  },

  //获取位置
  viewLocation: function() {
    var that = this;
    wx.authorize({
      scope: "scope.userLocation"
    });
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
        });
        that.setData({
          latitude: res.latitude,
        });
        // console.log(that.data.markers[0].id);
        var lo = 'markers[0].longitude'
        var la = 'markers[0].latitude'
        that.setData({
          [lo]: res.longitude,
        });
        that.setData({
          [la]: res.latitude,
        });
      },
      fail() {
        console.log('fail');
      },
    })
  },

  //获取屏幕高度
  getH: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          h: res.windowHeight
        });
        console.log('h:', that.data.h);
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.getH();
    that.viewLocation();
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