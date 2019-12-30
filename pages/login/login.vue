<template>
<view>
<view class="login">
	<view class="login_title">
		<text>登录</text>
	</view>
	<view :class="'login_user ' + nameFocus">
		<input type="text" placeholder="用户ID" placeholder-style="color:rgb(173,185,193)" @input="bindUsername" @focus="onFocusName" @blur="onBlurName"></input>
	</view>
	<view :class="'login_pwd ' + psdFocus">
		<input type="text" password placeholder="用户密码" placeholder-style="color:rgb(173,185,193)" @input="bindPassword" @focus="onFocusPsd" @blur="onBlurPsd"></input>
	</view>
	<view class="login_btn">
		<button hover-class="btn_hover" @tap="login">登录</button>
	</view>

	<view class="login_text">
		<navigator url="../register/register" open-type="redirect" hover-class="navigator-hover">新用户注册</navigator>
		<navigator url="../login_token/login_token" open-type="redirect" hover-class="navigator-hover">使用Token登录</navigator>
	</view>
	<!-- <component is="toast" error-data=" ..._toast_ "></component> -->
</view>
</view>
</template>

<script>
let WebIM = require("../../utils/WebIM")["default"];
let __test_account__, __test_psword__;
let disp = require("../../utils/broadcast"); // __test_account__ = "easezy";
// __test_psword__ = "111111";
// __test_account__ = "easezy";
// __test_psword__ = "111111";
let runAnimation = true;

export default {
  data() {
    return {
      name: "",
      psd: "",
      grant_type: "password",
      psdFocus: "",
      nameFocus: ""
    };
  },

  components: {},
  props: {},
  onLoad: function () {
    const me = this;
	const app = getApp().globalData;	
	console.log("app: " + app);
	// new app.ToastPannel.ToastPannel();
	
    disp.on("em.xmpp.error.passwordErr", function () {
      me.toastFilled('用户名或密码错误');
    });
  },
  methods: {
    bindUsername: function (e) {
      this.setData({
        name: e.detail.value
      });
    },
    bindPassword: function (e) {
      this.setData({
        psd: e.detail.value
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
    login: function () {
      runAnimation = !runAnimation;

      if (!__test_account__ && this.name == "") {
        this.toastFilled('请输入用户名！');
        return;
      } else if (!__test_account__ && this.psd == "") {
        this.toastFilled('请输入密码！');
        return;
      }

      wx.setStorage({
        key: "myUsername",
        data: __test_account__ || this.name.toLowerCase()
      });
      getApp().globalData.conn.open({
        apiUrl: WebIM.config.apiURL,
        user: __test_account__ || this.name.toLowerCase(),
        pwd: __test_psword__ || this.psd,
        grant_type: this.grant_type,
        appKey: WebIM.config.appkey
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
<style>
@import "./login.css";
</style>