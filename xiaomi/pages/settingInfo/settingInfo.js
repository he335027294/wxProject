// pages/settingInfo/settingInfo.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:0,
    userInfo:{}
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
    this.setData({
      userId: app.globalData.userId
    });
    let id = this.data.userId;
    if (id != 0) {
      wx.request({
        url: "http://127.0.0.1:3000/user/user?id=" + id,
        success: (res) => {
          this.setData({ userInfo: res.data[0] })
          console.log(this.data.userInfo);
        }
      });
    }
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
  formSubmit: function (e) {
    console.log(e.detail.value);
    var uname = e.detail.value.uname;
    var usex = e.detail.value.usex;
    var uzone = e.detail.value.uzone;
    var ubirth = e.detail.value.ubirth;
    var id= this.data.userId;
    wx.request({
      url: 'http://127.0.0.1:3000/update/userinfo',
      method:"POST",
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        uname:uname,
        usex:usex,
        uzone:uzone,
        ubirth:ubirth,
        id:id
      },
      success:(res)=>{
        //console.log(res.data);
        if(res.data.code==1){
          wx.showToast({
            title: res.data.msg,
            icon:"success"
          })
          setTimeout(()=>{
            wx.navigateBack({
              delta:1
            })
          },1000)
        }
      }
    })
  }
})