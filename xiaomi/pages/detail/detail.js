// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    list:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://127.0.0.1:3000/detail/detail?id="+options.id,
      success: (res) => {
        this.setData({list:res.data})
        //console.log(this.data.list);
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
  addNum: function () {
    //点击加号按钮
    var n = this.data.count + 1;
    if (n > 999) { n = 999 }
    this.setData({
      count: n
    })
    //console.log("+")
  },
  subNum: function () {
    //点击减号按钮
    var n = this.data.count - 1;
    if (n < 1) { n = 1 }
    this.setData({
      count: n
    })
    //console.log("-");
  },
  myblur:function(e){
    var n =Number(e.detail.value);
    this.setData({
      count: n
    })
  },
  addcart:function(e){
    //获取缓存
    var cartItems=wx.getStorageSync("cartItems")||[];
    //数据处理
    var {count,id,image,price,title,info}=e.target.dataset;
    var exist=cartItems.find(function(el){
      return el.id==id;
    })
    if(exist){
      exist.value = parseInt(exist.value)+count;
    }else{
      cartItems.push({
        id,title,image,price,value:count,selected:true,info
      })
    }
    //提示信息
    wx.showToast({
      title:"添加成功",
      icon:"success",
      duration:1000
    })
    //更新缓存
    wx.setStorageSync("cartItems", cartItems)
    //console.log(wx.getStorageSync("cartItems"))
  },
  toShopping:function(){
    wx.switchTab({
      url: '../shopping/shopping',
    })
  },
  buyNow:function(){
    wx.showToast({
      title: '抱歉，暂不支持此功能',
      icon:"none"
    })
  }
})