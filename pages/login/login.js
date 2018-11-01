// pages/login/login.js
var app=getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
       username:null,
       sex:null,
       age:null,
       tel:null,
       addr:null
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
  
  },
  loginBtnClick: function () {
    app.appData.PersonInfo = { username: this.data.username, sex: this.data.sex, age:this.data.age,tel:this.data.tel,addr:this.data.addr }
    wx.navigateTo({
      url: '../profile/profile',
    })
  },
  usernameInput: function (event) {

   this.setData({ username: event.detail.value })
  },
  sexInput: function (event) {
    this.setData({ sex: event.detail.value })
  },
  ageInput: function (event) {
    this.setData({ age: event.detail.value })
  },
  telInput: function (event) {
    this.setData({ tel: event.detail.value })
  },
  addrInput: function (event) {
    this.setData({ addr: event.detail.value })
  }

})