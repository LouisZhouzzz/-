// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    text: "这里是内容",
    btntext:"一键呼救",
    show:true,
    news:['作者',"价格","销量"]
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
/*  一键呼救  */
  callClick:function(){
    wx.makePhoneCall({
      phoneNumber: '120' //仅为示例，并非真实的电话号码
    })
  },
  /*获取当前位置  */
  getStateClick:function(){
     wx.getLocation({
       success: function(res) {
         var latitude=res.latitude
         var longitude=res.longitude
         wx.chooseLocation({
           latitude: latitude,
           longitude: longitude
         })
       },
     })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})