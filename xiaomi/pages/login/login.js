// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  toRegister:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  formSubmit: function (e) {
    var uphone = e.detail.value.uphone;
    var upwd = e.detail.value.upwd;
    if (uphone == "") {
      wx.showModal({
        title: '提示',
        content: '手机号不能为空',
      })
      return;
    };
    if (upwd == "") {
      wx.showModal({
        title: '提示',
        content: '密码不能为空',
      })
      return;
    };
    //console.log(uphone,upwd);
    
    wx.request({
      url: "http://127.0.0.1:3000/user/login?uphone=" + uphone+"&upwd="+upwd,
      success: (res) => {
        console.log(res.data);
        if (res.data.code == -1) {
          wx.showToast({
            title: '用户名或密码错误',
            icon:"none"
          })
          return;
        }
        if (res.data.code == 1){
          wx.showToast({
            title:"登陆成功",
            icon:"success"
          })
          app.globalData.userId = res.data.info.id;
          console.log(getApp().globalData.userId);      
          wx.switchTab({
            url: '../person/person',
          })
        }
      },
    });
  }
})