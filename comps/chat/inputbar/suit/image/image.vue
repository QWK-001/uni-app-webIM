<template><view></view></template><script>
let WebIM = require("../../../../../utils/WebIM")["default"];
let msgType = require("../../../msgtype");
let disp = require("../../../../../utils/broadcast");

export default {
  data() {
    return {};
  },

  components: {},
  props: {
    username: {
      type: Object,
      default: () => ({})
    },
    chatType: {
      type: String,
      default: msgType.chatType.SINGLE_CHAT
    }
  },
  methods: {
    openCamera() {
      var me = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["camera"],

        success(res) {
          me.upLoadImage(res);
        }

      });
    },

    sendImage() {
      var me = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],

        success(res) {
          me.upLoadImage(res);
        }

      });
    },

    isGroupChat() {
      return this.chatType == msgType.chatType.CHAT_ROOM;
    },

    getSendToParam() {
      return this.isGroupChat() ? this.username.groupId : this.username.your;
    },

    upLoadImage(res) {
      var me = this;
      var tempFilePaths = res.tempFilePaths;
      var token = WebIM.conn.context.accessToken;
      wx.getImageInfo({
        src: res.tempFilePaths[0],

        success(res) {
          var allowType = {
            jpg: true,
            gif: true,
            png: true,
            bmp: true
          };
          var str = WebIM.config.appkey.split("#");
          var width = res.width;
          var height = res.height;
          var index = res.path.lastIndexOf(".");
          var filetype = ~index && res.path.slice(index + 1) || "";

          if (filetype.toLowerCase() in allowType) {
            wx.uploadFile({
              url: "https://a1.easemob.com/" + str[0] + "/" + str[1] + "/chatfiles",
              filePath: tempFilePaths[0],
              name: "file",
              header: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + token
              },

              success(res) {
                var data = res.data;
                var dataObj = JSON.parse(data);
                var id = WebIM.conn.getUniqueId(); // 生成本地消息 id

                var msg = new WebIM.message(msgType.IMAGE, id);
                var file = {
                  type: msgType.IMAGE,
                  size: {
                    width: width,
                    height: height
                  },
                  url: dataObj.uri + "/" + dataObj.entities[0].uuid,
                  filetype: filetype,
                  filename: tempFilePaths[0]
                };
                msg.set({
                  apiUrl: WebIM.config.apiURL,
                  body: file,
                  from: me.username.myName,
                  to: me.getSendToParam(),
                  roomType: false,
                  chatType: me.chatType,
                  success: function (argument) {
                    disp.fire('em.chat.sendSuccess', id);
                  }
                });

                if (me.chatType == msgType.chatType.CHAT_ROOM) {
                  msg.setGroup("groupchat");
                }

                WebIM.conn.send(msg.body);
                me.$emit("newImageMsg", {
                  msg: msg,
                  type: msgType.IMAGE
                }, {
                  bubbles: true,
                  composed: true
                });
              }

            });
          }
        }

      });
    },

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
undefined