// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type:[],
    high:[],
    _judge:0,
    test:"me"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://127.0.0.1:3000/type/type",
      success: (res) => {
        console.log(res.data);
        this.setData({
          type: res.data
        });
      },
    })
    
    this.Timer();
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var temp = [];
    var me=this;
    for (let i in this.data.type) {
      let id = '#t' + i;
      let query = wx.createSelectorQuery();
      query.select(id).boundingClientRect();
      query.exec(function (res) {
        //console.log(res[0].top);
        temp.push(res[0].top);
        me.setData({ high: temp });
      })
    }
    
    //console.log(me.data.high);//在for循环异步前执行，为[]

    // var temp = [];
    // for (let i in this.data.type) {
    //   let id = '#t' + i;
    //   let query = wx.createSelectorQuery();
    //   query.select(id).boundingClientRect();
    //   query.exec(function (res) {
    //     console.log(res[0].top);
    //     temp.push(res[0].top)
    //   })
    // }
    // this.setData({ high: temp });
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
  onPageScroll: function (e) {
    //console.log(e.scrollTop)
    for(let i in this.data.high){
      if (e.scrollTop < this.data.high[i]+60){
        console.log(i)
        this.setData({
          _judge:i
        })
        return;
      }
    }

    //console.log(e);//{scrollTop:99}
  },
  Timer:function(){
    // var me=function(){
    //   let query = wx.createSelectorQuery();
    //   query.select('#t0').boundingClientRect();
    //   //query.selectViewport().scrollOffset();
    //   query.exec(function (res) {
    //     console.log(res[0]);
    //   })
    // }
    // setInterval(me,1000);
    
  },
  tabClick:function(e){
    console.log(e.target);
    this.setData({
      _judge: e.target.dataset.judge
    })
    wx.pageScrollTo({
      scrollTop: this.data.high[e.target.dataset.judge]-75,
      duration:0,
    })
  },
  showDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?id='+id,
    })
  }
})