// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uphone:"",
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
  toLogin:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  },
  formSubmit: function (e){
    var uphone = e.detail.value.uphone;
    var upwd = e.detail.value.upwd;
    var upwd2 = e.detail.value.upwd2;
    var cb = e.detail.value.cb;
    if(cb.length==0){
      wx.showModal({
        title: '提示',
        content: '您必须先同意用户条款与隐私政策',
      })
      return;
    }
    if (uphone == "") {
      wx.showModal({
        title: '提示',
        content: '手机号不能为空',
      })
      return;
    }
    let reg = /^1[3578][0-9]{9}$/;
    if (!reg.test(uphone)) {
      wx.showModal({
        title: '提示',
        content: '手机号的格式不正确',
      })
      return;
    }
    if (upwd.length < 6 || upwd.length > 10) {
      wx.showModal({
        title: '提示',
        content: '密码不符合指定长度6-10位',
      })
      return;
    }
    if (upwd != upwd2) {
      wx.showModal({
        title: '提示',
        content: '两次输入密码不一致',
      })
      return;
    }
    wx.request({
      url: "http://127.0.0.1:3000/user/check?uphone="+uphone,
      success: (res) => {
        //console.log(res.data);
        if(res.data=="NO"){
          wx.showModal({
            title: '提示',
            content: '该手机号已被注册，请登录',
          })
          return;
        }else{
          wx.request({
            url: 'http://127.0.0.1:3000/user/register',
            method: "POST",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              uphone: uphone,
              upwd: upwd
            },
            success: (res) => {
              //console.log(res.data);
              if (res.data.code == 1) {
                wx.showModal({
                  title: '提示',
                  content: '注册成功，点击确定跳转至登陆页面',
                  success(res) {
                    if (res.confirm) {
                      wx.redirectTo({
                        url: '../login/login',
                      })
                    }
                  }
                })
              }
            }
          })
        }
      },
    });
    console.log(e.detail.value);
  },
  formReset:function(e){
    console.log("点击重置")
  }
})