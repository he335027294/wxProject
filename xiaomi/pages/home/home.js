// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: [],
    breif:[],
    hongbao:[],
    todaylist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://127.0.0.1:3000/home/imagelist",
      success: (res) => {
        console.log(res.data);
        this.setData({
          imagelist: res.data
        });
      },
    }),
    
    wx.request({
      url: "http://127.0.0.1:3000/home/breif",
      success: (res) => {
        console.log(res.data);
        this.setData({
          breif: res.data.breif,
          hongbao: res.data.hongbao
        });
      },
    }),

    wx.request({
      url: "http://127.0.0.1:3000/home/today",
      success: (res) => {
        var temp = res.data;
        console.log(temp);
        for (let i in temp) {
          var info_a = res.data[i].info;
          if (info_a.length >= 30) {
            info_a = info_a.slice(0, 30) + "...";
          }
          temp[i].info_a = info_a;
        }
        this.setData({
          todaylist:temp
        });
      },
    })
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
  //===========================
  showDetail:function(e){
    let id=e.target.dataset.id;
    wx.navigateTo({
      url: "../detail/detail?id=" + id
    });
  }
})