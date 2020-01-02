<template>
<view>
<view class="register">
	<view class="register_title">
		<text>注册</text>
	</view>
	<view :class="'register_user ' + nameFocus">
		<input type="text" placeholder="用户ID（字母或数字)" placeholder-style="color:rgb(173,185,193)" @input="bindUsername" @focus="onFocusName" @blur="onBlurName">
	</view>
	<view :class="'register_pwd ' + psdFocus">
		<input type="text" password placeholder="用户密码" hover-class="input-hover" placeholder-style="color:rgb(173,185,193)" @input="bindPassword" @focus="onFocusPsd" @blur="onBlurPsd">
	</view>
	<view class="register_btn">
		<button hover-class="btn_hover" @tap="register">注册</button>
	</view>
	<view class="register_back">
		<navigator url="../login/login" open-type="redirect" hover-class="navigator-hover">返回登录</navigator>
	</view>
	<!-- <component is="toast" error-data=" ..._toast_ "></component> -->
</view>
</view>
</template>

<script>
let WebIM = require("../../utils/WebIM")["default"];

export default {
  data() {
    return {
      username: "",
      password: "",
      psdFocus: "",
      nameFocus: ""
    };
  },

  components: {},
  props: {},
  onLoad: function () {
    // let app = getApp().globalData;
    // new (getApp().globalData.ToastPannel.ToastPannel)();
    let app = getApp().globalData;
		new app.ToastPannel.ToastPannel();
  },
  methods: {
    bindUsername: function (e) {
      this.setData({
        username: e.detail.value
      });
    },
    bindPassword: function (e) {
      this.setData({
        password: e.detail.value
      });
    },
    onFocusPsd: function () {
      this.setData({
        psdFocus: 'psdFocus'
      });
    },
    onBlurPsd: function () {
      this.setData({
        psdFocus: ''
      });
    },
    onFocusName: function () {
      this.setData({
        nameFocus: 'nameFocus'
      });
    },
    onBlurName: function () {
      this.setData({
        nameFocus: ''
      });
    },
    register: function () {
      const that = this;

      if (that.username == "") {
        return this.toastFilled('请输入用户名！');
      } else if (that.password == "") {
        return this.toastFilled('请输入密码！');
      } else {
        var options = {
          apiUrl: WebIM.config.apiURL,
          username: that.username.toLowerCase(),
          password: that.password,
          nickname: "",
          appKey: WebIM.config.appkey,
          success: function (res) {
            console.log('res', res);

            if (res.statusCode == "200") {
              that.toastSuccess('注册成功');
              var data = {
                apiUrl: WebIM.config.apiURL,
                user: that.username.toLowerCase(),
                pwd: that.password,
                grant_type: "password",
                appKey: WebIM.config.appkey
              };
              wx.setStorage({
                key: "myUsername",
                data: that.username
              });
            }
          },
          error: function (res) {
            console.log('res', res);

            if (res.statusCode !== "200") {
              if (res.statusCode == '400' && res.data.error == 'illegal_argument') {
                return that.toastFilled('用户名非法!');
              }

              that.toastFilled('用户名已被占用!');
            }
          }
        };
        WebIM.conn.registerUser(options);
      }
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
<style>
@import "./register.css";
</style>