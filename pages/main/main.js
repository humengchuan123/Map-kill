// pages/main/main.js
var newsData = require('../../data/main-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [ 
      '../../img/1681528.png',
      '../../img/1681539.png',
      '../../img/1681550.png',
      '../../img/1691785.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    post_key:[]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ post_key: newsData.postList});
  },
  onMainTap:function(e){
     var postId = e.currentTarget.dataset.postid;
     wx.navigateTo({
       url: "main-item/main-item?id=" + postId
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
  
  }
})