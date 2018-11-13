// pages/address/address.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: app.globalData.userId,
    userInfo: {}
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
  formSubmit:function(e){
    console.log(e.detail.value.myaddress);
    var address = e.detail.value.myaddress;
    var id = this.data.userId;
    wx.request({
      url: 'http://127.0.0.1:3000/update/address',
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        address: address,
        id:id,
      },
      success: (res) => {
        if(res.data.code==1){
          wx.showToast({
            title:res.data.msg,
            icon:"success"
          })
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },1000)
        }
      }
    })
  }
})