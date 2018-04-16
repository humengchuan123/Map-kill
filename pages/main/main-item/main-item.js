// pages/main/main-item/main-item.js
var newsData = require('../../../data/main-data.js');
var app = getApp();
Page({
  onLoad:function(option){
    var postId = option.id;
    var postData = newsData.postList[postId];
    // this.data.postData = postData;
    console.log(postData)
    this.setData({
      postData:postData
    })
  }
})