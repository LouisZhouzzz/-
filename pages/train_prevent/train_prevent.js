// pages/train_prevent/train_prevent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passTitle: 'prevent',
    title_main: '预防心脏病',
    currentTab: 0,
    body: {
      train_prevent1: '要控制食盐的摄入量，有不少朋友们会发现突然性的出现心力衰竭症状，同时还会发现有心脏扩大心功能不全等症状。大家一定要严格控制食盐的摄入量，有效的防止水钠潴留，预防人体出现心脏性的疾病。',
      train_prevent2: '要严格的控制胆固醇以及油脂的摄入量，油脂含量摄入过高会导致人体心脏承受的负担加重，大家需要尽量的少接触肥肉动物性内脏等食物。',
      train_prevent3: '要想预防心脏病，大家需要合理的控制好体重，一定会超标。肥胖的人士特别容易患上心脏病，但由于人体的血脂浓度过高导致的血流的速度变慢，甚至还会加重心脏的负担。',
      train_prevent4: '坚持体育运动，每天都需要做体育运动达到半小时左右，可以选择快步走运动及慢跑运动，能够锻炼人体的心肺功能，同时还能够有效预防人体形成心脏病。',
      train_prevent5: '要预防心脏病，每个星期可以吃2到3次玉米粥，玉米粥是含有非常多的叶酸微量元素，而且还能够降低心血管疾病的发病率，预防人体出现便秘的症状。',
      train_prevent6: '保持稳定平和的心态。现在人的生活工作压力大，承受非常大的负担，情绪波动过大会导致人体全身的血流量变快，心脏所承受的负担也会加重，所以大家一定要学会调整好个人情绪。',
      train_prevent7: '纠正不良的生活习惯，不可以抽烟喝酒，长期的抽烟喝酒会导致人体血液循环受到影响，而且还会导致心脏的血流量变少，这样特别容易形成心脏病，所以大家绝对不可以抽烟喝酒。',
      train_prevent8: '一杯红酒防梗死\n每天一杯红酒预防梗死。红酒能预防心脏的冠状血管栓塞，降低血小板的活跃性达75%，而为达到此目的使用的乙酰水杨酸有效率仅45%。',
      train_prevent9: '多吃高纤维蔬果\n水果、蔬菜和全麦谷类食物都有丰富的纤维，有维持血压正常的功效。同时蔬菜和水果中的维生素和化学物质又有防止血管阻塞的功能。',
      train_prevent10: '多喝白开水\n白开水的吸收无需经过消化过程，能迅速地被吸收到循环系统中并稀释血液，因而可以预防冠状动脉栓塞。而其他饮料则需要水分从循环系统中回渗到消化系统，需要通过消化才能被吸收，这一过程血液是被浓缩的，所以没有保护心血管系统的作用。',
      train_prevent11: '香蕉\n每周8个香蕉保证心率正常。在不愉快的谈话、爬楼梯或跑步后，吃1~2个香蕉，这能供给神经系统必要的能量，促进心肌保存蛋白质，恢复心肌细胞内钾的平衡。'
    }
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