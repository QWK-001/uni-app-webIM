<template>
<chat id="groupchat" :username="username" :groupId="groupId" chatType="chatRoom"></chat>
</template>

<script>
let disp = require("../../utils/broadcast");
import chat from "../../comps/chat/chat";

export default {
  data() {
    return {
      username: {
        your: ""
      }
    };
  },

  components: {
    chat
  },
  props: {},

  // options = 系统传入的 url 参数
  onLoad(options) {
    let username = JSON.parse(options.username);
    this.setData({
      username: username
    });
    wx.setNavigationBarTitle({
      title: username.your
    });
  },

  onUnload() {
    disp.fire("em.chatroom.leave");
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    this.selectComponent('#groupchat').getMore(); // 停止下拉动作

    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },
  methods: {
    setData: function (obj, callback) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
      callback && callback();
    }
  }
};
</script>
<style>
@import "./groupChatRoom.css";
</style>