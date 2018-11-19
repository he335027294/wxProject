// pages/searchPage/searchPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchword:"",
    searchlist:[],
    tipNum:0,
    listLength:0,
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
  wordInput:function(e){
    //console.log(e.detail.value)
    this.setData({
      searchword:e.detail.value
    })
  },
  search:function(e){
    var words=e.target.dataset.words;
    if(words.length==0){
      wx.showToast({
        title: '搜索内容不能为空~',
        icon:"none"
      })
      return;
    }
    wx.request({
      url: 'http://127.0.0.1:3000/search/search?words='+words,
      success:(res)=>{
        //console.log(res.data);
        var temp=res.data;
        if(res.data.length!=0){
          for (let i in temp) {
            var info_a = res.data[i].info;
            if (info_a.length >= 30) {
              info_a = info_a.slice(0, 30) + "...";
            }
            temp[i].info_a = info_a;
          }
          this.setData({
            searchlist: temp,
            tipNum: 1 ,
            listLength: res.data.length
          })
          console.log(this.data.searchlist);
        }
        if(res.data.length==0){
          this.setData({tipNum:-1});
        }
      }
    })
    
  },
  showDetail: function (e) {
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: "../detail/detail?id=" + id
    });
  }
})