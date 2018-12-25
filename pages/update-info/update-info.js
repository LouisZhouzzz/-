// pages/update-info/update-info.js
var service = require('../../service/test');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    sex:'',
    phonenumber:'',
    date:"",
    emergencyName:'',
    relationship:'',
    emergencyPhonenumber:'',
  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // usedata:function(){
  //   var that = this;
    // wx.request({
    //   url: 'https://result.eolinker.com/nTM5JuQ93d00dbc391f65c7781e9eb6ba6d189e73f73b18?uri=/update-info/info',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     var obj = res.data;
    //     console.log(obj.sex);
        
    //   },
    //    complete: function complete(res) {
    //     wx.hideNavigationBarLoading();
    //     // if (msg) wx.hideLoading();
    //   }
    // })
  // },
  
  formSubmit: function(e) {
    // console.log(e);
    console.log(e.detail.value);
    if (e.detail.value.name.length == 0 || e.detail.value.tel.length == 0) {
      wx.showToast({
        title: '手机号码或密码不得为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else {
      wx.request({
        url: 'http://22937od778.51mypc.cn/RescueSystem/rescue',
        data: { name: e.detail.value.name, tel: e.detail.value.tel, password: e.detail.value.password },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }, // 设置请求的 header
        success: function (res) {
          console.log(res);
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          // success
        },
        fail: function (res) {
          console.log(res);
          // fail
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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