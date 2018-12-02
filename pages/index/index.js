Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: '',
    h70:'',
    h30: '',
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: '',
      longitude: '',
      width: 50,
      height: 50,
      location:''
    }],
  },
  //重新定位 获取位置
  reGetLoc:function(){
    var that = this;
    that.viewLocation();
  },

//用chooseLocation方法获取当前位置名称
  locationName:function(){
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({location:res.name});
        console.log('位置名称:', res.name);
        return res.name;
      },
    })
  },

  //获取位置
  viewLocation: function () {
    var that = this;
    wx.authorize({ scope: "scope.userLocation" });
    // wx.openSetting({
    //   success(res) {
    //     console.log(res.authSetting)
    //     // res.authSetting = {
    //     //   "scope.userInfo": true,
    //     //   "scope.userLocation": true
    //     // }
    //   }
    // })
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        console.log(res);
         that.setData({ longitude: res.longitude, });
         that.setData({ latitude: res.latitude, });
       // console.log(that.data.markers[0].id);
        var lo = 'markers[0].longitude'
        var la = 'markers[0].latitude'
        that.setData({[lo] : res.longitude,});
        that.setData({ [la]: res.latitude, }); 
      },
      fail() {
        console.log('fail');
      },
    })
  },
  
 //获取屏幕高度
 getH:function(){
   var that = this;
   wx.getSystemInfo({
     success: function (res) {
       let a = res.windowHeight * 0.7;
       let b = res.windowHeight * 0.3;
       that.setData({h70: a});
       that.setData({ h30: b });
       console.log('h70:', that.data.h70);
       console.log('h30:', b);
       console.log('height:', res.windowHeight);
     },
   })
 },

  callCPY:function(){
    var that = this;
    //let name = that.locationName();
    wx.showModal({
      title: '呼救',
      content: '您是否在地图中显示位置并确认呼救?',
      success:function(res){
        if (res.confirm == true){
          wx.makePhoneCall({
            phoneNumber: '120',
          })
          wx.navigateTo({
            url: '../../pages/callHelp/callHelp',
          })
        }else{
          console.log('用户取消呼救');
        }
      },
      fail:function(){
        console.log('调用呼救失败');
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    // 以下两个是测试数据
    let totalItems = 100;
    let rightItems = 80;
    let completePercent = parseInt((rightItems / totalItems) * 100);
    that.getResultComment(completePercent);
    that.showScoreAnimation(rightItems, totalItems);
    that.getH();
    that.viewLocation();
   // that.locationName();
  },

  showScoreAnimation: function (rightItems, totalItems) {
    /*
    cxt_arc.arc(x, y, r, sAngle, eAngle, counterclockwise);
    x	                    Number	  圆的x坐标
    y	                    Number	  圆的y坐标
    r	                    Number	  圆的半径
    sAngle	            Number	  起始弧度，单位弧度（在3点钟方向）
    eAngle	            Number	  终止弧度
    counterclockwise	    Boolean	  可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
    */
    let that = this;
    let copyRightItems = 0;
    that.setData({
      timer: setInterval(function () {
        copyRightItems++;
        if (copyRightItems == rightItems) {
          clearInterval(that.data.timer)
        } else {
          // 页面渲染完成
          // 这部分是灰色底层
          let cxt_arc = wx.createCanvasContext('canvasArc');//创建并返回绘图上下文context对象。
          cxt_arc.setLineWidth(6);//绘线的宽度
          cxt_arc.setStrokeStyle('#d2d2d2');//绘线的颜色
          cxt_arc.setLineCap('round');//线条端点样式
          cxt_arc.beginPath();//开始一个新的路径
          cxt_arc.arc(53, 53, 50, 0, 2 * Math.PI, false);//设置一个原点(53,53)，半径为50的圆的路径到当前路径
          cxt_arc.stroke();//对当前路径进行描边
          //这部分是蓝色部分
          cxt_arc.setLineWidth(6);
          cxt_arc.setStrokeStyle('#3ea6ff');
          cxt_arc.setLineCap('round')
          cxt_arc.beginPath();//开始一个新的路径
          cxt_arc.arc(53, 53, 50, -Math.PI * 1 / 2, 2 * Math.PI * (copyRightItems / totalItems) - Math.PI * 1 / 2, false);
          cxt_arc.stroke();//对当前路径进行描边
          cxt_arc.draw();
        }
      }, 20)
    })
  },

  getResultComment: function (completePercent) {
    let that = this;
    switch (true) {
      case completePercent < 60:
        that.setData({
          resultComment: "渣渣"
        })
        break;
      case completePercent >= 60 && completePercent <= 69:
        that.setData({
          resultComment: "学弱"
        })
        break;
      case completePercent >= 70 && completePercent < 80:
        that.setData({
          resultComment: "中等"
        })
        break;
      case completePercent >= 80 && completePercent < 90:
        that.setData({
          resultComment: "良好"
        })
        break;
      case completePercent >= 90 && completePercent < 95:
        that.setData({
          resultComment: "优秀"
        })
        break;
      case completePercent >= 95 && completePercent < 100:
        that.setData({
          resultComment: "学霸"
        })
        break;
      case completePercent >= 100:
        that.setData({
          resultComment: "学神"
        })
        break;
    }
  },
})
