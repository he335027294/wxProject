// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    userInfo:{},
    sum:0,
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
    var that=this;
    var userId=getApp().globalData.userId;
    wx.request({
      url: 'http://127.0.0.1:3000/order/getlist?userId='+userId,
      success:(res)=>{
        var sum=0;
        var arr=res.data;
        for(let ele of arr){
          sum+=ele.goodCount*ele.price;
        }
        that.setData({ orderlist: res.data, sum:sum });
      }
    })
    wx.request({
      url: "http://127.0.0.1:3000/user/user?id=" + userId,
      success: (res) => {
        this.setData({ userInfo: res.data[0] });
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
  changeAdd:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  clearAll:function(){
    var userId = getApp().globalData.userId;
    var that=this;
    wx.showModal({
      title: '提示',
      content: "确定清空订单？",
      success: function (sm) {
        if (sm.confirm) {
          wx.request({
            url: 'http://127.0.0.1:3000/order/clear',
            method: "POST",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              userId: userId,
            },
            success: (res) => {
              console.log(res.data);
              if (res.data.code == 1) {
                wx.showToast({
                  title: res.data.msg,
                })
              }
              that.setData({ orderList: [] });
              that.onShow();
            }
          })
        }
      }
    })  
  },
  toList:function(){
    wx.switchTab({
      url: '../list/list',
    })
  },
  buyNow: function () {
    wx.showToast({
      title: '抱歉，暂不支持此功能',
      icon: "none"
    })
  }
})