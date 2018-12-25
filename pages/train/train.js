// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1:'http://22937od778.51mypc.cn/img/train_prevent/prevent2.png'
  },
  
  gototrain_cpr: function () {
    wx.navigateTo({
      url: '/pages/train_cpr/train_cpr',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gototrain_aed: function () {
    wx.navigateTo({
      url: '/pages/train_aed/train_aed',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gototrain_prevent: function () {
    wx.navigateTo({
      url: '/pages/train_prevent/train_prevent',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gototrain_know: function () {
    wx.navigateTo({
      url: '/pages/train_know/train_know',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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