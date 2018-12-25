// pages/mysrlf/myself.js
var service = require('../../service/test');
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
   h1:'',
   h2:'',
    swiper_current:0,
    _num:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'',
    sex:'',
    date:'',
    phonenumber:'',
    emergencyName:'',
    relationship: '',
    emergencyPhonenumber:''
  },

  gotoUpdateinfo:function(){
   wx.navigateTo({
     url: '/pages/update-info/update-info',
   })
  },
  
  radioChange(e){
    var that = this;
    console.log(e.detail.value);
    that.setData({ swiper_current: e.detail.value});
    that.setData({ _num: e.detail.value });
  },
  
  swiperChange(e){
    var that = this;
    that.setData({ _num: e.detail.current });      
  },


  // 分享给好友的事件
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'CPR呼救小程序',
      path: '/pages/index/index/user?id=123'
    }
  },

  gotofeedback:function(){
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },
  getUserInfo(e) {
    if (!e.detail.userInfo) return;

    if (e.currentTarget.dataset.url)
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      });

    this.setData({
      userInfo: e.detail.userInfo,
      authorized: true,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        let h30 = 0.3 * res.windowHeight;
        let h70 = 0.7 * res.windowHeight;
        that.setData({
          h1: h30,
          h2: h70,
        });
      }
    })
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }  
 
    service.getInfo(
      (res) => {
        console.log(res);
        this.setData({
          name: res.data.name,
          sex: res.data.sex,
          phonenumber: res.data.phonenumber,
          date: res.data.date,
          emergencyName: res.data.emergencyName,
          relationship: res.data.relationship,
          emergencyPhonenumber: res.data.emergencyPhonenumber
        })
      },
      (e) => {
        console.log(e)
      }
    ); 

  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
   
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})