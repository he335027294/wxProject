// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: false,
    //list: [{ count: 2 }],
    cartItems: [],
    CheckAll: true,
    total: 0,
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
    var cartItems = wx.getStorageSync("cartItems");
    this.setData({cartItems});
    //购物车非空判定
    this.shopIsEmpty();
    //全选判定
    this.judgeSelect();
    //商品求和
    this.getsumTotal();
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
  toList: function () {
    wx.switchTab({
      url: '../list/list',
    })
  },
  subcount: function (e) {

  },
  //判定购物车是否为空
  shopIsEmpty: function () {
    var cartItems = wx.getStorageSync("cartItems");
    var _empty = cartItems.length == 0 ? true : false;
    this.setData({ isEmpty: _empty });
  },
  //清空购物车
  clearAll: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要清空购物车吗？',
      success: function (sm) {
        if (sm.confirm) {
          wx.setStorageSync("cartItems", []);
          that.onShow();
        }
      }
    })
  },
  //商品求和
  getsumTotal: function () {
    var sum = 0;
    var cartItems = this.data.cartItems;
    for (let ele of cartItems) {
      if (ele.selected) {
        sum += ele.value * ele.price;
      }
    }
    this.setData({
      total: sum
    })
  },
  //全选
  select: function (e) {
    var CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll;
    var cartItems = this.data.cartItems;
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].selected = CheckAll
    }
    this.setData({
      cartItems: cartItems,
      CheckAll: CheckAll
    })
    this.getsumTotal()
    //更新缓存
    wx.setStorageSync("cartItems", cartItems);
  },
  //选择
  selectedCart: function (e) {
    var cartItems = this.data.cartItems   //获取购物车列表
    var index = e.currentTarget.dataset.index;  //当前下标索引
    var selected = cartItems[index].selected;
    cartItems[index].selected = !selected;//取反
    this.setData({
      cartItems: cartItems
    })
    //全选判定
    this.judgeSelect();
    this.getsumTotal();
    //更新缓存
    wx.setStorageSync("cartItems", cartItems)
  },
  //全选判定
  judgeSelect: function () {
    var cartItems = this.data.cartItems
    var flag = 1;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].selected == false) {
        flag = 0; break;
      }
    }
    if (flag == 1) {
      this.setData({
        CheckAll: true
      })
    } else {
      this.setData({
        CheckAll: false
      })
    }
  },
  //删除商品
  deleteCart: function (e) {
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    cartItems.splice(index, 1)
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal();
    //更新缓存
    wx.setStorageSync("cartItems", cartItems)
    this.shopIsEmpty();
    if (this.data.isEmpty) {
      this.onShow();
    }
  },
  //减
  subcount: function (e) {
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].value;
    if (value == 1) {
      cartItems[index].value = 1
    } else {
      value--
      cartItems[index].value = value;
    }
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },
  //加
  addcount: function (e) {
    var cartItems = this.data.cartItems;
    var index = e.currentTarget.dataset.index;
    var value = cartItems[index].value;
    if (value == 99) {
      cartItems[index].value = 99
    } else {
      value++
      cartItems[index].value = value;
    }
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },
  //改
  changecount:function(e){
    var cartItems = this.data.cartItems;
    var index = e.target.dataset.index;
    var value = e.detail.value;
    if (value > 99) {
      cartItems[index].value = 99
    }else if(value>1){
      cartItems[index].value = value;
    }else{
      cartItems[index].value = 1;
    }
    this.setData({
      cartItems: cartItems
    });
    this.getsumTotal()
    wx.setStorageSync("cartItems", cartItems)
  },
  //提交订单
  submitOrder: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定提交订单吗？',
      success: function (sm) {
        if (sm.confirm) {
          var userId = getApp().globalData.userId;
          var cartItems = that.data.cartItems;
          var jsoncartItems = JSON.stringify(that.data.cartItems);
          var newCartItems=[];
          for (let i in cartItems) {
            if (cartItems[i].selected==false){
              newCartItems.push(cartItems[i])
            }
          }
          wx.setStorageSync("cartItems",newCartItems);
          wx.request({
            url: 'http://127.0.0.1:3000/order/order',
            method: "POST",
            header: {
               "Content-Type": "application/x-www-form-urlencoded"
            },
            data: {
              userId: userId,
              cartItems: jsoncartItems,
            },
            success: (res) => {
              if (res.data.code == 1) {
                
                wx.navigateTo({
                  url: '../order/order',
                })
                // wx.showModal({
                //   title: '提示',
                //   content: '是否跳转至我的订单界面',
                //   success: function (sm) {
                //     if (sm.confirm) {
                //       wx.navigateTo({
                //         url: '../order/order',
                //       })
                //     }
                //   }
                // })
              }
            }
          })
          that.onShow();
        }
      }
    })
  },
})