// pages/settingKey/settingKey.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 0,
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
    wx.request({
      url: "http://127.0.0.1:3000/user/user?id=" + id,
      success: (res) => {
        this.setData({ userInfo: res.data[0] })
        console.log(this.data.userInfo);
      }
    });
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
    let id = this.data.userId;
    var { oldUpwd, newUpwd, checkUpwd } = e.detail.value;
    if (oldUpwd==''||newUpwd==''||checkUpwd==''){
      wx.showToast({
        title: '输入项不能为空！',
        icon:"none"
      })
      return;
    }
    wx.request({
      url: 'http://127.0.0.1:3000/update/checkupwd',
      data:{
        id:id,
        upwd:oldUpwd
      },
      success:(res)=>{
        console.log(res.data);
        if(res.data.code==-1){
          wx.showToast({
            title: res.data.msg,
            icon:"none",
          })
          return;
        } else if (res.data.code == 1){
          if (newUpwd.length > 12 || newUpwd.length <6) {
            wx.showToast({
              title: "新密码格式不正确！",
              icon: "none",
            })
            return;
          }
          if(newUpwd!=checkUpwd){
            wx.showToast({
              title:"确认密码跟新密码不一致",
              icon: "none",
            })
            return;
          }
          wx.request({
            url: 'http://127.0.0.1:3000/update/setupwd',
            method: "POST",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              id: id,
              upwd:newUpwd,
            },
            success: (res) => {
              if (res.data.code == 1) {
                wx.showModal({
                  title: '提示',
                  content: '修改成功，点击返回个人设置界面',
                  success: function (sm) {
                    if (sm.confirm) {
                      wx.navigateTo({
                        url: '../setting/setting',
                      })
                    }
                  }
                })
              }
            }
          })
        } 
      }
    })
  }
})