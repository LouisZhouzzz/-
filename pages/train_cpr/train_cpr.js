// pages/train_cpr/train_cpr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passTitle: 'cpr',
    title_main: 'CPR教程',
    currentTab: 0,
    body: {
      train_cpr1: '判断：早期识别心脏骤停并启动急救系统。\n确认患者无反应无正常呼吸或不能正常呼吸后识别心脏骤停，立即启动急救系统，并寻找体外除颤仪。可以检查大动脉搏动，时间不超过10s，如未扪及立即开始心肺复苏。\n',
      train_cpr2: 'A、开放气道\n仰头抬颏法、推举下颌法。取出患者口内异物、呕吐物、假牙等\n',
      train_cpr3: 'B、人工呼吸\n成人口对口，婴幼儿口对口鼻。吹气前捏住患者鼻孔，并向胸侧观察是否胸壁抬起。频率：10-12次/min，每次通气1s以上。\n',
      train_cpr4: 'C、胸外按压按压体位：\n靠近患者胸部一侧，保证按压力量垂直于胸骨，可采取跪式、立式等。按压部位：胸骨中下段。按压方法：双掌叠加，手指不触及胸部，肩膀与手臂连线垂直患者胸骨。按压频率：至少100次/min，不论单人还是双人均为30:2按压比例。即按压30次人工呼吸2次。按压幅度：成人4-125px，幼儿至少2.5 - 3.5厘米，婴儿至少1.5 - 2.5厘米。\n',
      train_cpr5: 'D、AED除颤\n单向波360J，双向波120-200J。\n'
    },
  },

  //获取屏幕高度
  getH: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          h: res.windowHeight
        });
        console.log('h:', that.data.h);
      },
    })
  },

  // 点击切换页面
  radioChange(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  // 滑动切换
  swiperChange(e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getH();
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