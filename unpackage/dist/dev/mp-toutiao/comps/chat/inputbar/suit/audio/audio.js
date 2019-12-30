(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["comps/chat/inputbar/suit/audio/audio"],{

/***/ 276:
/*!*****************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.vue?vue&type=template&id=e7bd8b50& */ 277);
/* harmony import */ var _audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio.vue?vue&type=script&lang=js& */ 279);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.vue?vue&type=style&index=0&lang=css& */ 281);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 277:
/*!************************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=template&id=e7bd8b50& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio.vue?vue&type=template&id=e7bd8b50& */ 278);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_template_id_e7bd8b50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 278:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=template&id=e7bd8b50& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 279:
/*!******************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio.vue?vue&type=script&lang=js& */ 280);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 280:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var WebIM = __webpack_require__(/*! ../../../../../utils/WebIM */ 12)["default"];
var msgType = __webpack_require__(/*! ../../../msgtype */ 68);
var RECORD_CONST = __webpack_require__(/*! ./record_status */ 273);
var RecordStatus = RECORD_CONST.RecordStatus;
var RecordDesc = RECORD_CONST.RecordDesc;
var disp = __webpack_require__(/*! ../../../../../utils/broadcast */ 69);
var RunAnimation = false;
var InitHeight = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];var _default2 =

{
  data: function data() {
    return {
      changedTouches: null,
      recordStatus: RecordStatus.HIDE,
      RecordStatus: RecordStatus,
      RecordDesc: RecordDesc,
      // 模板中有引用
      radomheight: InitHeight,
      recorderManager: wx.getRecorderManager(),
      recordClicked: false,
      isLongPress: false };

  },

  components: {},
  props: {
    username: {
      type: Object,
      default: function _default() {return {};} },

    chatType: {
      type: String,
      default: msgType.chatType.SINGLE_CHAT } },



  // lifetimes
  created: function created() {},

  beforeMount: function beforeMount() {},

  moved: function moved() {},

  destroyed: function destroyed() {},

  mounted: function mounted() {},

  methods: {
    toggleWithoutAction: function toggleWithoutAction(e) {// 阻止 tap 冒泡
    },

    toggleRecordModal: function toggleRecordModal() {
      this.setData({
        recordStatus: this.recordStatus == RecordStatus.HIDE ? RecordStatus.SHOW : RecordStatus.HIDE,
        radomheight: InitHeight });

    },

    handleRecordingMove: function handleRecordingMove(e) {
      var touches = e.touches[0];
      var changedTouches = this.changedTouches;

      if (!changedTouches) {
        return;
      }

      if (this.recordStatus == RecordStatus.SWIPE) {
        if (changedTouches.pageY - touches.pageY < 20) {
          this.setData({
            recordStatus: RecordStatus.HOLD });

        }
      }

      if (this.recordStatus == RecordStatus.HOLD) {
        if (changedTouches.pageY - touches.pageY > 20) {
          this.setData({
            recordStatus: RecordStatus.SWIPE });

        }
      }
    },

    handleRecording: function handleRecording(e) {
      var me = this;
      me.setData({
        recordClicked: true });

      setTimeout(function () {
        if (me.data.recordClicked == true) {
          executeRecord();
        }
      }, 350);

      function executeRecord() {
        wx.getSetting({
          success: function success(res) {
            var recordAuth = res.authSetting['scope.record'];

            if (recordAuth == false) {
              //已申请过授权，但是用户拒绝
              wx.openSetting({
                success: function success(res) {
                  var recordAuth = res.authSetting['scope.record'];

                  if (recordAuth == true) {
                    wx.showToast({
                      title: "授权成功",
                      icon: "success" });

                  } else {
                    wx.showToast({
                      title: "请授权录音",
                      icon: "none" });

                  }

                  me.setData({
                    isLongPress: false });

                } });

            } else if (recordAuth == true) {
              // 用户已经同意授权
              startRecord();
            } else {
              // 第一次进来，未发起授权
              wx.authorize({
                scope: 'scope.record',
                success: function success() {
                  //授权成功
                  wx.showToast({
                    title: "授权成功",
                    icon: "success" });

                } });

            }
          },
          fail: function fail() {
            wx.showToast({
              title: "鉴权失败，请重试",
              icon: "none" });

          } });

      }

      function startRecord() {
        me.data.changedTouches = e.touches[0];
        me.setData({
          recordStatus: RecordStatus.HOLD });

        RunAnimation = true;
        me.myradom();
        var recorderManager = me.data.recorderManager || wx.getRecorderManager();
        recorderManager.onStart(function () {// console.log("开始录音...");
        });
        recorderManager.start({
          format: "mp3" });
        // 超时

        setTimeout(function () {
          me.handleRecordingCancel();
          RunAnimation = false;
        }, 100000);
      }
    },

    handleRecordingCancel: function handleRecordingCancel() {var _this = this;
      RunAnimation = false;
      var recorderManager = this.recorderManager; // 向上滑动状态停止：取消录音发放

      if (this.recordStatus == RecordStatus.SWIPE) {
        this.setData({
          recordStatus: RecordStatus.RELEASE });

      } else {
        this.setData({
          recordStatus: RecordStatus.HIDE,
          recordClicked: false });

      }

      recorderManager.onStop(function (res) {
        // console.log("结束录音...", res);
        if (_this.recordStatus == RecordStatus.RELEASE) {
          console.log("user canceled");
          _this.setData({
            recordStatus: RecordStatus.HIDE });

          return;
        }

        if (res.duration < 1000) {
          wx.showToast({
            title: "录音时间太短",
            icon: "none" });

        } else {
          // 上传
          _this.uploadRecord(res.tempFilePath, res.duration);
        }
      }); // 停止录音

      recorderManager.stop();
    },

    isGroupChat: function isGroupChat() {
      return this.chatType == msgType.chatType.CHAT_ROOM;
    },

    getSendToParam: function getSendToParam() {
      return this.isGroupChat() ? this.username.groupId : this.username.your;
    },

    uploadRecord: function uploadRecord(tempFilePath, dur) {
      var str = WebIM.config.appkey.split("#");
      var me = this;
      var token = WebIM.conn.context.accessToken;
      wx.uploadFile({
        url: "https://a1.easemob.com/" + str[0] + "/" + str[1] + "/chatfiles",
        filePath: tempFilePath,
        name: "file",
        header: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token },


        success: function success(res) {
          // 发送 xmpp 消息
          var id = WebIM.conn.getUniqueId();
          var msg = new WebIM.message(msgType.AUDIO, id);
          var dataObj = JSON.parse(res.data); // 接收消息对象

          msg.set({
            apiUrl: WebIM.config.apiURL,
            accessToken: token,
            body: {
              type: msgType.AUDIO,
              url: dataObj.uri + "/" + dataObj.entities[0].uuid,
              filetype: "",
              filename: tempFilePath,
              accessToken: token,
              length: Math.ceil(dur / 1000) },

            from: me.data.username.myName,
            to: me.getSendToParam(),
            roomType: false,
            chatType: me.data.chatType,
            success: function success(argument) {
              disp.fire('em.chat.sendSuccess', id);
            } });


          if (me.isGroupChat()) {
            msg.setGroup("groupchat");
          }

          msg.body.length = Math.ceil(dur / 1000); //console.log('发送的语音消息', msg.body)

          WebIM.conn.send(msg.body);
          me.$emit("newAudioMsg", {
            msg: msg,
            type: msgType.AUDIO },
          {
            bubbles: true,
            composed: true });

        } });


    },

    myradom: function myradom() {
      var that = this;
      var _radomheight = that.radomheight;

      for (var i = 0; i < that.radomheight.length; i++) {
        //+1是为了避免为0
        _radomheight[i] = 100 * Math.random().toFixed(2) + 10;
      }

      that.setData({
        radomheight: _radomheight });


      if (RunAnimation) {
        setTimeout(function () {
          that.myradom();
        }, 500);
      } else {
        return;
      }
    },

    setData: function setData(obj, callback) {
      var that = this;
      var keys = [];
      var val, data;
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
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 281:
/*!**************************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio.vue?vue&type=style&index=0&lang=css& */ 282);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 282:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/inputbar/suit/audio/audio.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L2lucHV0YmFyL3N1aXQvYXVkaW8vYXVkaW8udnVlP2I3MTMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9pbnB1dGJhci9zdWl0L2F1ZGlvL2F1ZGlvLnZ1ZT82ZmZmIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL2NvbXBzL2NoYXQvaW5wdXRiYXIvc3VpdC9hdWRpby9hdWRpby52dWU/NjhkNyIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L2lucHV0YmFyL3N1aXQvYXVkaW8vYXVkaW8udnVlPzJiMmYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9pbnB1dGJhci9zdWl0L2F1ZGlvL2F1ZGlvLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L2lucHV0YmFyL3N1aXQvYXVkaW8vYXVkaW8udnVlPzFjZWYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9pbnB1dGJhci9zdWl0L2F1ZGlvL2F1ZGlvLnZ1ZT81ODQyIl0sIm5hbWVzIjpbIldlYklNIiwicmVxdWlyZSIsIm1zZ1R5cGUiLCJSRUNPUkRfQ09OU1QiLCJSZWNvcmRTdGF0dXMiLCJSZWNvcmREZXNjIiwiZGlzcCIsIlJ1bkFuaW1hdGlvbiIsIkluaXRIZWlnaHQiLCJkYXRhIiwiY2hhbmdlZFRvdWNoZXMiLCJyZWNvcmRTdGF0dXMiLCJISURFIiwicmFkb21oZWlnaHQiLCJyZWNvcmRlck1hbmFnZXIiLCJ3eCIsImdldFJlY29yZGVyTWFuYWdlciIsInJlY29yZENsaWNrZWQiLCJpc0xvbmdQcmVzcyIsImNvbXBvbmVudHMiLCJwcm9wcyIsInVzZXJuYW1lIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjaGF0VHlwZSIsIlN0cmluZyIsIlNJTkdMRV9DSEFUIiwiY3JlYXRlZCIsImJlZm9yZU1vdW50IiwibW92ZWQiLCJkZXN0cm95ZWQiLCJtb3VudGVkIiwibWV0aG9kcyIsInRvZ2dsZVdpdGhvdXRBY3Rpb24iLCJlIiwidG9nZ2xlUmVjb3JkTW9kYWwiLCJzZXREYXRhIiwiU0hPVyIsImhhbmRsZVJlY29yZGluZ01vdmUiLCJ0b3VjaGVzIiwiU1dJUEUiLCJwYWdlWSIsIkhPTEQiLCJoYW5kbGVSZWNvcmRpbmciLCJtZSIsInNldFRpbWVvdXQiLCJleGVjdXRlUmVjb3JkIiwiZ2V0U2V0dGluZyIsInN1Y2Nlc3MiLCJyZXMiLCJyZWNvcmRBdXRoIiwiYXV0aFNldHRpbmciLCJvcGVuU2V0dGluZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInN0YXJ0UmVjb3JkIiwiYXV0aG9yaXplIiwic2NvcGUiLCJmYWlsIiwibXlyYWRvbSIsIm9uU3RhcnQiLCJzdGFydCIsImZvcm1hdCIsImhhbmRsZVJlY29yZGluZ0NhbmNlbCIsIlJFTEVBU0UiLCJvblN0b3AiLCJjb25zb2xlIiwibG9nIiwiZHVyYXRpb24iLCJ1cGxvYWRSZWNvcmQiLCJ0ZW1wRmlsZVBhdGgiLCJzdG9wIiwiaXNHcm91cENoYXQiLCJDSEFUX1JPT00iLCJnZXRTZW5kVG9QYXJhbSIsImdyb3VwSWQiLCJ5b3VyIiwiZHVyIiwic3RyIiwiY29uZmlnIiwiYXBwa2V5Iiwic3BsaXQiLCJ0b2tlbiIsImNvbm4iLCJjb250ZXh0IiwiYWNjZXNzVG9rZW4iLCJ1cGxvYWRGaWxlIiwidXJsIiwiZmlsZVBhdGgiLCJuYW1lIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsImlkIiwiZ2V0VW5pcXVlSWQiLCJtc2ciLCJtZXNzYWdlIiwiQVVESU8iLCJkYXRhT2JqIiwiSlNPTiIsInBhcnNlIiwic2V0IiwiYXBpVXJsIiwiYXBpVVJMIiwiYm9keSIsInVyaSIsImVudGl0aWVzIiwidXVpZCIsImZpbGV0eXBlIiwiZmlsZW5hbWUiLCJsZW5ndGgiLCJNYXRoIiwiY2VpbCIsImZyb20iLCJteU5hbWUiLCJ0byIsInJvb21UeXBlIiwiYXJndW1lbnQiLCJmaXJlIiwic2V0R3JvdXAiLCJzZW5kIiwiJGVtaXQiLCJidWJibGVzIiwiY29tcG9zZWQiLCJ0aGF0IiwiX3JhZG9taGVpZ2h0IiwiaSIsInJhbmRvbSIsInRvRml4ZWQiLCJvYmoiLCJjYWxsYmFjayIsImtleXMiLCJ2YWwiLCJmb3JFYWNoIiwia2V5IiwiJGRhdGEiLCJrZXkyIiwiaW5kZXgiLCIkc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR2pFO0FBQ21MO0FBQ25MLGdCQUFnQiw0S0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUEyZ0MsQ0FBZ0IsODVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O2tJQ0EvaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0NBQUQsQ0FBUCxDQUFzQyxTQUF0QyxDQUFaO0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDBCQUFELENBQXJCO0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixtQkFBTyxDQUFDLDBCQUFELENBQTFCO0FBQ0EsSUFBSUcsWUFBWSxHQUFHRCxZQUFZLENBQUNDLFlBQWhDO0FBQ0EsSUFBSUMsVUFBVSxHQUFHRixZQUFZLENBQUNFLFVBQTlCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHTCxtQkFBTyxDQUFDLHdDQUFELENBQWxCO0FBQ0EsSUFBSU0sWUFBWSxHQUFHLEtBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF5RCxFQUF6RCxFQUE2RCxFQUE3RCxFQUFpRSxFQUFqRSxFQUFxRSxFQUFyRSxFQUF5RSxFQUF6RSxFQUE2RSxFQUE3RSxFQUFpRixFQUFqRixFQUFxRixFQUFyRixDQUFuQixDOztBQUVlO0FBQ2JDLE1BRGEsa0JBQ047QUFDTCxXQUFPO0FBQ0xDLG9CQUFjLEVBQUUsSUFEWDtBQUVMQyxrQkFBWSxFQUFFUCxZQUFZLENBQUNRLElBRnRCO0FBR0xSLGtCQUFZLEVBQVpBLFlBSEs7QUFJTEMsZ0JBQVUsRUFBVkEsVUFKSztBQUtMO0FBQ0FRLGlCQUFXLEVBQUVMLFVBTlI7QUFPTE0scUJBQWUsRUFBRUMsRUFBRSxDQUFDQyxrQkFBSCxFQVBaO0FBUUxDLG1CQUFhLEVBQUUsS0FSVjtBQVNMQyxpQkFBVyxFQUFFLEtBVFIsRUFBUDs7QUFXRCxHQWJZOztBQWViQyxZQUFVLEVBQUUsRUFmQztBQWdCYkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUVDLE1BREU7QUFFUkMsYUFBTyxFQUFFLDRCQUFPLEVBQVAsRUFGRCxFQURMOztBQUtMQyxZQUFRLEVBQUU7QUFDUkgsVUFBSSxFQUFFSSxNQURFO0FBRVJGLGFBQU8sRUFBRXRCLE9BQU8sQ0FBQ3VCLFFBQVIsQ0FBaUJFLFdBRmxCLEVBTEwsRUFoQk07Ozs7QUEyQmI7QUFDQUMsU0E1QmEscUJBNEJILENBQUUsQ0E1QkM7O0FBOEJiQyxhQTlCYSx5QkE4QkMsQ0FBRSxDQTlCSDs7QUFnQ2JDLE9BaENhLG1CQWdDTCxDQUFFLENBaENHOztBQWtDYkMsV0FsQ2EsdUJBa0NELENBQUUsQ0FsQ0Q7O0FBb0NiQyxTQXBDYSxxQkFvQ0gsQ0FBRSxDQXBDQzs7QUFzQ2JDLFNBQU8sRUFBRTtBQUNQQyx1QkFETywrQkFDYUMsQ0FEYixFQUNnQixDQUFDO0FBQ3ZCLEtBRk07O0FBSVBDLHFCQUpPLCtCQUlhO0FBQ2xCLFdBQUtDLE9BQUwsQ0FBYTtBQUNYMUIsb0JBQVksRUFBRSxLQUFLQSxZQUFMLElBQXFCUCxZQUFZLENBQUNRLElBQWxDLEdBQXlDUixZQUFZLENBQUNrQyxJQUF0RCxHQUE2RGxDLFlBQVksQ0FBQ1EsSUFEN0U7QUFFWEMsbUJBQVcsRUFBRUwsVUFGRixFQUFiOztBQUlELEtBVE07O0FBV1ArQix1QkFYTywrQkFXYUosQ0FYYixFQVdnQjtBQUNyQixVQUFJSyxPQUFPLEdBQUdMLENBQUMsQ0FBQ0ssT0FBRixDQUFVLENBQVYsQ0FBZDtBQUNBLFVBQUk5QixjQUFjLEdBQUcsS0FBS0EsY0FBMUI7O0FBRUEsVUFBSSxDQUFDQSxjQUFMLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQyxZQUFMLElBQXFCUCxZQUFZLENBQUNxQyxLQUF0QyxFQUE2QztBQUMzQyxZQUFJL0IsY0FBYyxDQUFDZ0MsS0FBZixHQUF1QkYsT0FBTyxDQUFDRSxLQUEvQixHQUF1QyxFQUEzQyxFQUErQztBQUM3QyxlQUFLTCxPQUFMLENBQWE7QUFDWDFCLHdCQUFZLEVBQUVQLFlBQVksQ0FBQ3VDLElBRGhCLEVBQWI7O0FBR0Q7QUFDRjs7QUFFRCxVQUFJLEtBQUtoQyxZQUFMLElBQXFCUCxZQUFZLENBQUN1QyxJQUF0QyxFQUE0QztBQUMxQyxZQUFJakMsY0FBYyxDQUFDZ0MsS0FBZixHQUF1QkYsT0FBTyxDQUFDRSxLQUEvQixHQUF1QyxFQUEzQyxFQUErQztBQUM3QyxlQUFLTCxPQUFMLENBQWE7QUFDWDFCLHdCQUFZLEVBQUVQLFlBQVksQ0FBQ3FDLEtBRGhCLEVBQWI7O0FBR0Q7QUFDRjtBQUNGLEtBbENNOztBQW9DUEcsbUJBcENPLDJCQW9DU1QsQ0FwQ1QsRUFvQ1k7QUFDakIsVUFBSVUsRUFBRSxHQUFHLElBQVQ7QUFDQUEsUUFBRSxDQUFDUixPQUFILENBQVc7QUFDVHBCLHFCQUFhLEVBQUUsSUFETixFQUFYOztBQUdBNkIsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsWUFBSUQsRUFBRSxDQUFDcEMsSUFBSCxDQUFRUSxhQUFSLElBQXlCLElBQTdCLEVBQW1DO0FBQ2pDOEIsdUJBQWE7QUFDZDtBQUNGLE9BSlMsRUFJUCxHQUpPLENBQVY7O0FBTUEsZUFBU0EsYUFBVCxHQUF5QjtBQUN2QmhDLFVBQUUsQ0FBQ2lDLFVBQUgsQ0FBYztBQUNaQyxpQkFBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7QUFDZCxnQkFBSUMsVUFBVSxHQUFHRCxHQUFHLENBQUNFLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBakI7O0FBRUEsZ0JBQUlELFVBQVUsSUFBSSxLQUFsQixFQUF5QjtBQUN2QjtBQUNBcEMsZ0JBQUUsQ0FBQ3NDLFdBQUgsQ0FBZTtBQUNiSix1QkFBTyxFQUFFLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsc0JBQUlDLFVBQVUsR0FBR0QsR0FBRyxDQUFDRSxXQUFKLENBQWdCLGNBQWhCLENBQWpCOztBQUVBLHNCQUFJRCxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdEJwQyxzQkFBRSxDQUFDdUMsU0FBSCxDQUFhO0FBQ1hDLDJCQUFLLEVBQUUsTUFESTtBQUVYQywwQkFBSSxFQUFFLFNBRkssRUFBYjs7QUFJRCxtQkFMRCxNQUtPO0FBQ0x6QyxzQkFBRSxDQUFDdUMsU0FBSCxDQUFhO0FBQ1hDLDJCQUFLLEVBQUUsT0FESTtBQUVYQywwQkFBSSxFQUFFLE1BRkssRUFBYjs7QUFJRDs7QUFFRFgsb0JBQUUsQ0FBQ1IsT0FBSCxDQUFXO0FBQ1RuQiwrQkFBVyxFQUFFLEtBREosRUFBWDs7QUFHRCxpQkFuQlksRUFBZjs7QUFxQkQsYUF2QkQsTUF1Qk8sSUFBSWlDLFVBQVUsSUFBSSxJQUFsQixFQUF3QjtBQUM3QjtBQUNBTSx5QkFBVztBQUNaLGFBSE0sTUFHQTtBQUNMO0FBQ0ExQyxnQkFBRSxDQUFDMkMsU0FBSCxDQUFhO0FBQ1hDLHFCQUFLLEVBQUUsY0FESTtBQUVYVix1QkFBTyxFQUFFLG1CQUFNO0FBQ2I7QUFDQWxDLG9CQUFFLENBQUN1QyxTQUFILENBQWE7QUFDWEMseUJBQUssRUFBRSxNQURJO0FBRVhDLHdCQUFJLEVBQUUsU0FGSyxFQUFiOztBQUlELGlCQVJVLEVBQWI7O0FBVUQ7QUFDRixXQTNDVztBQTRDWkksY0FBSSxFQUFFLGdCQUFZO0FBQ2hCN0MsY0FBRSxDQUFDdUMsU0FBSCxDQUFhO0FBQ1hDLG1CQUFLLEVBQUUsVUFESTtBQUVYQyxrQkFBSSxFQUFFLE1BRkssRUFBYjs7QUFJRCxXQWpEVyxFQUFkOztBQW1ERDs7QUFFRCxlQUFTQyxXQUFULEdBQXVCO0FBQ3JCWixVQUFFLENBQUNwQyxJQUFILENBQVFDLGNBQVIsR0FBeUJ5QixDQUFDLENBQUNLLE9BQUYsQ0FBVSxDQUFWLENBQXpCO0FBQ0FLLFVBQUUsQ0FBQ1IsT0FBSCxDQUFXO0FBQ1QxQixzQkFBWSxFQUFFUCxZQUFZLENBQUN1QyxJQURsQixFQUFYOztBQUdBcEMsb0JBQVksR0FBRyxJQUFmO0FBQ0FzQyxVQUFFLENBQUNnQixPQUFIO0FBQ0EsWUFBSS9DLGVBQWUsR0FBRytCLEVBQUUsQ0FBQ3BDLElBQUgsQ0FBUUssZUFBUixJQUEyQkMsRUFBRSxDQUFDQyxrQkFBSCxFQUFqRDtBQUNBRix1QkFBZSxDQUFDZ0QsT0FBaEIsQ0FBd0IsWUFBTSxDQUFDO0FBQzlCLFNBREQ7QUFFQWhELHVCQUFlLENBQUNpRCxLQUFoQixDQUFzQjtBQUNwQkMsZ0JBQU0sRUFBRSxLQURZLEVBQXRCO0FBRUk7O0FBRUpsQixrQkFBVSxDQUFDLFlBQVk7QUFDckJELFlBQUUsQ0FBQ29CLHFCQUFIO0FBQ0ExRCxzQkFBWSxHQUFHLEtBQWY7QUFDRCxTQUhTLEVBR1AsTUFITyxDQUFWO0FBSUQ7QUFDRixLQXhITTs7QUEwSFAwRCx5QkExSE8sbUNBMEhpQjtBQUN0QjFELGtCQUFZLEdBQUcsS0FBZjtBQUNBLFVBQUlPLGVBQWUsR0FBRyxLQUFLQSxlQUEzQixDQUZzQixDQUVzQjs7QUFFNUMsVUFBSSxLQUFLSCxZQUFMLElBQXFCUCxZQUFZLENBQUNxQyxLQUF0QyxFQUE2QztBQUMzQyxhQUFLSixPQUFMLENBQWE7QUFDWDFCLHNCQUFZLEVBQUVQLFlBQVksQ0FBQzhELE9BRGhCLEVBQWI7O0FBR0QsT0FKRCxNQUlPO0FBQ0wsYUFBSzdCLE9BQUwsQ0FBYTtBQUNYMUIsc0JBQVksRUFBRVAsWUFBWSxDQUFDUSxJQURoQjtBQUVYSyx1QkFBYSxFQUFFLEtBRkosRUFBYjs7QUFJRDs7QUFFREgscUJBQWUsQ0FBQ3FELE1BQWhCLENBQXVCLFVBQUFqQixHQUFHLEVBQUk7QUFDNUI7QUFDQSxZQUFJLEtBQUksQ0FBQ3ZDLFlBQUwsSUFBcUJQLFlBQVksQ0FBQzhELE9BQXRDLEVBQStDO0FBQzdDRSxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBLGVBQUksQ0FBQ2hDLE9BQUwsQ0FBYTtBQUNYMUIsd0JBQVksRUFBRVAsWUFBWSxDQUFDUSxJQURoQixFQUFiOztBQUdBO0FBQ0Q7O0FBRUQsWUFBSXNDLEdBQUcsQ0FBQ29CLFFBQUosR0FBZSxJQUFuQixFQUF5QjtBQUN2QnZELFlBQUUsQ0FBQ3VDLFNBQUgsQ0FBYTtBQUNYQyxpQkFBSyxFQUFFLFFBREk7QUFFWEMsZ0JBQUksRUFBRSxNQUZLLEVBQWI7O0FBSUQsU0FMRCxNQUtPO0FBQ0w7QUFDQSxlQUFJLENBQUNlLFlBQUwsQ0FBa0JyQixHQUFHLENBQUNzQixZQUF0QixFQUFvQ3RCLEdBQUcsQ0FBQ29CLFFBQXhDO0FBQ0Q7QUFDRixPQW5CRCxFQWZzQixDQWtDbEI7O0FBRUp4RCxxQkFBZSxDQUFDMkQsSUFBaEI7QUFDRCxLQS9KTTs7QUFpS1BDLGVBaktPLHlCQWlLTztBQUNaLGFBQU8sS0FBS2pELFFBQUwsSUFBaUJ2QixPQUFPLENBQUN1QixRQUFSLENBQWlCa0QsU0FBekM7QUFDRCxLQW5LTTs7QUFxS1BDLGtCQXJLTyw0QkFxS1U7QUFDZixhQUFPLEtBQUtGLFdBQUwsS0FBcUIsS0FBS3JELFFBQUwsQ0FBY3dELE9BQW5DLEdBQTZDLEtBQUt4RCxRQUFMLENBQWN5RCxJQUFsRTtBQUNELEtBdktNOztBQXlLUFAsZ0JBektPLHdCQXlLTUMsWUF6S04sRUF5S29CTyxHQXpLcEIsRUF5S3lCO0FBQzlCLFVBQUlDLEdBQUcsR0FBR2hGLEtBQUssQ0FBQ2lGLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBVjtBQUNBLFVBQUl0QyxFQUFFLEdBQUcsSUFBVDtBQUNBLFVBQUl1QyxLQUFLLEdBQUdwRixLQUFLLENBQUNxRixJQUFOLENBQVdDLE9BQVgsQ0FBbUJDLFdBQS9CO0FBQ0F4RSxRQUFFLENBQUN5RSxVQUFILENBQWM7QUFDWkMsV0FBRyxFQUFFLDRCQUE0QlQsR0FBRyxDQUFDLENBQUQsQ0FBL0IsR0FBcUMsR0FBckMsR0FBMkNBLEdBQUcsQ0FBQyxDQUFELENBQTlDLEdBQW9ELFlBRDdDO0FBRVpVLGdCQUFRLEVBQUVsQixZQUZFO0FBR1ptQixZQUFJLEVBQUUsTUFITTtBQUlaQyxjQUFNLEVBQUU7QUFDTiwwQkFBZ0IscUJBRFY7QUFFTkMsdUJBQWEsRUFBRSxZQUFZVCxLQUZyQixFQUpJOzs7QUFTWm5DLGVBVFksbUJBU0pDLEdBVEksRUFTQztBQUNYO0FBQ0EsY0FBSTRDLEVBQUUsR0FBRzlGLEtBQUssQ0FBQ3FGLElBQU4sQ0FBV1UsV0FBWCxFQUFUO0FBQ0EsY0FBSUMsR0FBRyxHQUFHLElBQUloRyxLQUFLLENBQUNpRyxPQUFWLENBQWtCL0YsT0FBTyxDQUFDZ0csS0FBMUIsRUFBaUNKLEVBQWpDLENBQVY7QUFDQSxjQUFJSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXbkQsR0FBRyxDQUFDekMsSUFBZixDQUFkLENBSlcsQ0FJeUI7O0FBRXBDdUYsYUFBRyxDQUFDTSxHQUFKLENBQVE7QUFDTkMsa0JBQU0sRUFBRXZHLEtBQUssQ0FBQ2lGLE1BQU4sQ0FBYXVCLE1BRGY7QUFFTmpCLHVCQUFXLEVBQUVILEtBRlA7QUFHTnFCLGdCQUFJLEVBQUU7QUFDSm5GLGtCQUFJLEVBQUVwQixPQUFPLENBQUNnRyxLQURWO0FBRUpULGlCQUFHLEVBQUVVLE9BQU8sQ0FBQ08sR0FBUixHQUFjLEdBQWQsR0FBb0JQLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQixDQUFqQixFQUFvQkMsSUFGekM7QUFHSkMsc0JBQVEsRUFBRSxFQUhOO0FBSUpDLHNCQUFRLEVBQUV0QyxZQUpOO0FBS0plLHlCQUFXLEVBQUVILEtBTFQ7QUFNSjJCLG9CQUFNLEVBQUVDLElBQUksQ0FBQ0MsSUFBTCxDQUFVbEMsR0FBRyxHQUFHLElBQWhCLENBTkosRUFIQTs7QUFXTm1DLGdCQUFJLEVBQUVyRSxFQUFFLENBQUNwQyxJQUFILENBQVFZLFFBQVIsQ0FBaUI4RixNQVhqQjtBQVlOQyxjQUFFLEVBQUV2RSxFQUFFLENBQUMrQixjQUFILEVBWkU7QUFhTnlDLG9CQUFRLEVBQUUsS0FiSjtBQWNONUYsb0JBQVEsRUFBRW9CLEVBQUUsQ0FBQ3BDLElBQUgsQ0FBUWdCLFFBZFo7QUFlTndCLG1CQUFPLEVBQUUsaUJBQVVxRSxRQUFWLEVBQW9CO0FBQzNCaEgsa0JBQUksQ0FBQ2lILElBQUwsQ0FBVSxxQkFBVixFQUFpQ3pCLEVBQWpDO0FBQ0QsYUFqQkssRUFBUjs7O0FBb0JBLGNBQUlqRCxFQUFFLENBQUM2QixXQUFILEVBQUosRUFBc0I7QUFDcEJzQixlQUFHLENBQUN3QixRQUFKLENBQWEsV0FBYjtBQUNEOztBQUVEeEIsYUFBRyxDQUFDUyxJQUFKLENBQVNNLE1BQVQsR0FBa0JDLElBQUksQ0FBQ0MsSUFBTCxDQUFVbEMsR0FBRyxHQUFHLElBQWhCLENBQWxCLENBOUJXLENBOEI4Qjs7QUFFekMvRSxlQUFLLENBQUNxRixJQUFOLENBQVdvQyxJQUFYLENBQWdCekIsR0FBRyxDQUFDUyxJQUFwQjtBQUNBNUQsWUFBRSxDQUFDNkUsS0FBSCxDQUFTLGFBQVQsRUFBd0I7QUFDdEIxQixlQUFHLEVBQUVBLEdBRGlCO0FBRXRCMUUsZ0JBQUksRUFBRXBCLE9BQU8sQ0FBQ2dHLEtBRlEsRUFBeEI7QUFHRztBQUNEeUIsbUJBQU8sRUFBRSxJQURSO0FBRURDLG9CQUFRLEVBQUUsSUFGVCxFQUhIOztBQU9ELFNBakRXLEVBQWQ7OztBQW9ERCxLQWpPTTs7QUFtT1AvRCxXQW5PTyxxQkFtT0c7QUFDUixVQUFNZ0UsSUFBSSxHQUFHLElBQWI7QUFDQSxVQUFJQyxZQUFZLEdBQUdELElBQUksQ0FBQ2hILFdBQXhCOztBQUVBLFdBQUssSUFBSWtILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ2hILFdBQUwsQ0FBaUJrRyxNQUFyQyxFQUE2Q2dCLENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQ7QUFDQUQsb0JBQVksQ0FBQ0MsQ0FBRCxDQUFaLEdBQWtCLE1BQU1mLElBQUksQ0FBQ2dCLE1BQUwsR0FBY0MsT0FBZCxDQUFzQixDQUF0QixDQUFOLEdBQWlDLEVBQW5EO0FBQ0Q7O0FBRURKLFVBQUksQ0FBQ3hGLE9BQUwsQ0FBYTtBQUNYeEIsbUJBQVcsRUFBRWlILFlBREYsRUFBYjs7O0FBSUEsVUFBSXZILFlBQUosRUFBa0I7QUFDaEJ1QyxrQkFBVSxDQUFDLFlBQVk7QUFDckIrRSxjQUFJLENBQUNoRSxPQUFMO0FBQ0QsU0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdELE9BSkQsTUFJTztBQUNMO0FBQ0Q7QUFDRixLQXZQTTs7QUF5UFB4QixXQUFPLEVBQUUsaUJBQVU2RixHQUFWLEVBQWVDLFFBQWYsRUFBeUI7QUFDaEMsVUFBSU4sSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJTyxJQUFJLEdBQUcsRUFBWDtBQUNBLFVBQUlDLEdBQUosRUFBUzVILElBQVQ7QUFDQWMsWUFBTSxDQUFDNkcsSUFBUCxDQUFZRixHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFVQyxHQUFWLEVBQWU7QUFDdENILFlBQUksR0FBR0csR0FBRyxDQUFDcEQsS0FBSixDQUFVLEdBQVYsQ0FBUDtBQUNBa0QsV0FBRyxHQUFHSCxHQUFHLENBQUNLLEdBQUQsQ0FBVDtBQUNBOUgsWUFBSSxHQUFHb0gsSUFBSSxDQUFDVyxLQUFaO0FBQ0FKLFlBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQVVHLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ2xDLGNBQUlBLEtBQUssR0FBRyxDQUFSLElBQWFOLElBQUksQ0FBQ3JCLE1BQXRCLEVBQThCO0FBQzVCYyxnQkFBSSxDQUFDYyxJQUFMLENBQVVsSSxJQUFWLEVBQWdCZ0ksSUFBaEIsRUFBc0JKLEdBQXRCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQUksQ0FBQzVILElBQUksQ0FBQ2dJLElBQUQsQ0FBVCxFQUFpQjtBQUNmWixrQkFBSSxDQUFDYyxJQUFMLENBQVVsSSxJQUFWLEVBQWdCZ0ksSUFBaEIsRUFBc0IsRUFBdEI7QUFDRDtBQUNGOztBQUVEaEksY0FBSSxHQUFHQSxJQUFJLENBQUNnSSxJQUFELENBQVg7QUFDRCxTQVZEO0FBV0QsT0FmRDtBQWdCQU4sY0FBUSxJQUFJQSxRQUFRLEVBQXBCO0FBQ0QsS0E5UU0sRUF0Q0ksRTs7Ozs7Ozs7Ozs7OztBQzNCZjtBQUFBO0FBQUE7QUFBQTtBQUFpMkMsQ0FBZ0IsbXJDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBcjNDLHVDIiwiZmlsZSI6ImNvbXBzL2NoYXQvaW5wdXRiYXIvc3VpdC9hdWRpby9hdWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXVkaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3YmQ4YjUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2F1ZGlvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYXVkaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2F1ZGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlN2JkOGI1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlN2JkOGI1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXVkaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3YmQ4YjUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U3YmQ4YjUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9pbnB1dGJhci9zdWl0L2F1ZGlvL2F1ZGlvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2F1ZGlvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lN2JkOGI1MCZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hdWRpby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxubGV0IFdlYklNID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL1dlYklNXCIpW1wiZGVmYXVsdFwiXTtcbmxldCBtc2dUeXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL21zZ3R5cGVcIik7XG5sZXQgUkVDT1JEX0NPTlNUID0gcmVxdWlyZShcIi4vcmVjb3JkX3N0YXR1c1wiKTtcbmxldCBSZWNvcmRTdGF0dXMgPSBSRUNPUkRfQ09OU1QuUmVjb3JkU3RhdHVzO1xubGV0IFJlY29yZERlc2MgPSBSRUNPUkRfQ09OU1QuUmVjb3JkRGVzYztcbmxldCBkaXNwID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2Jyb2FkY2FzdFwiKTtcbmxldCBSdW5BbmltYXRpb24gPSBmYWxzZTtcbmNvbnN0IEluaXRIZWlnaHQgPSBbNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTBdO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWRUb3VjaGVzOiBudWxsLFxuICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuSElERSxcbiAgICAgIFJlY29yZFN0YXR1cyxcbiAgICAgIFJlY29yZERlc2MsXG4gICAgICAvLyDmqKHmnb/kuK3mnInlvJXnlKhcbiAgICAgIHJhZG9taGVpZ2h0OiBJbml0SGVpZ2h0LFxuICAgICAgcmVjb3JkZXJNYW5hZ2VyOiB3eC5nZXRSZWNvcmRlck1hbmFnZXIoKSxcbiAgICAgIHJlY29yZENsaWNrZWQ6IGZhbHNlLFxuICAgICAgaXNMb25nUHJlc3M6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7fSxcbiAgcHJvcHM6IHtcbiAgICB1c2VybmFtZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgY2hhdFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG1zZ1R5cGUuY2hhdFR5cGUuU0lOR0xFX0NIQVRcbiAgICB9XG4gIH0sXG5cbiAgLy8gbGlmZXRpbWVzXG4gIGNyZWF0ZWQoKSB7fSxcblxuICBiZWZvcmVNb3VudCgpIHt9LFxuXG4gIG1vdmVkKCkge30sXG5cbiAgZGVzdHJveWVkKCkge30sXG5cbiAgbW91bnRlZCgpIHt9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVXaXRob3V0QWN0aW9uKGUpIHsvLyDpmLvmraIgdGFwIOWGkuazoVxuICAgIH0sXG5cbiAgICB0b2dnbGVSZWNvcmRNb2RhbCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHJlY29yZFN0YXR1czogdGhpcy5yZWNvcmRTdGF0dXMgPT0gUmVjb3JkU3RhdHVzLkhJREUgPyBSZWNvcmRTdGF0dXMuU0hPVyA6IFJlY29yZFN0YXR1cy5ISURFLFxuICAgICAgICByYWRvbWhlaWdodDogSW5pdEhlaWdodFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVJlY29yZGluZ01vdmUoZSkge1xuICAgICAgdmFyIHRvdWNoZXMgPSBlLnRvdWNoZXNbMF07XG4gICAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSB0aGlzLmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICBpZiAoIWNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmVjb3JkU3RhdHVzID09IFJlY29yZFN0YXR1cy5TV0lQRSkge1xuICAgICAgICBpZiAoY2hhbmdlZFRvdWNoZXMucGFnZVkgLSB0b3VjaGVzLnBhZ2VZIDwgMjApIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuSE9MRFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnJlY29yZFN0YXR1cyA9PSBSZWNvcmRTdGF0dXMuSE9MRCkge1xuICAgICAgICBpZiAoY2hhbmdlZFRvdWNoZXMucGFnZVkgLSB0b3VjaGVzLnBhZ2VZID4gMjApIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuU1dJUEVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVSZWNvcmRpbmcoZSkge1xuICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICByZWNvcmRDbGlja2VkOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAobWUuZGF0YS5yZWNvcmRDbGlja2VkID09IHRydWUpIHtcbiAgICAgICAgICBleGVjdXRlUmVjb3JkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDM1MCk7XG5cbiAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVSZWNvcmQoKSB7XG4gICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVjb3JkQXV0aCA9IHJlcy5hdXRoU2V0dGluZ1snc2NvcGUucmVjb3JkJ107XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmRBdXRoID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8v5bey55Sz6K+36L+H5o6I5p2D77yM5L2G5piv55So5oi35ouS57udXG4gICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkQXV0aCA9IHJlcy5hdXRoU2V0dGluZ1snc2NvcGUucmVjb3JkJ107XG5cbiAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmRBdXRoID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmjojmnYPmiJDlip9cIixcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6K+35o6I5p2D5b2V6Z+zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBpc0xvbmdQcmVzczogZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZEF1dGggPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/mjojmnYNcbiAgICAgICAgICAgICAgc3RhcnRSZWNvcmQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIOesrOS4gOasoei/m+adpe+8jOacquWPkei1t+aOiOadg1xuICAgICAgICAgICAgICB3eC5hdXRob3JpemUoe1xuICAgICAgICAgICAgICAgIHNjb3BlOiAnc2NvcGUucmVjb3JkJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvL+aOiOadg+aIkOWKn1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5o6I5p2D5oiQ5YqfXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6Ym05p2D5aSx6LSl77yM6K+36YeN6K+VXCIsXG4gICAgICAgICAgICAgIGljb246IFwibm9uZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdGFydFJlY29yZCgpIHtcbiAgICAgICAgbWUuZGF0YS5jaGFuZ2VkVG91Y2hlcyA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgbWUuc2V0RGF0YSh7XG4gICAgICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuSE9MRFxuICAgICAgICB9KTtcbiAgICAgICAgUnVuQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgbWUubXlyYWRvbSgpO1xuICAgICAgICBsZXQgcmVjb3JkZXJNYW5hZ2VyID0gbWUuZGF0YS5yZWNvcmRlck1hbmFnZXIgfHwgd3guZ2V0UmVjb3JkZXJNYW5hZ2VyKCk7XG4gICAgICAgIHJlY29yZGVyTWFuYWdlci5vblN0YXJ0KCgpID0+IHsvLyBjb25zb2xlLmxvZyhcIuW8gOWni+W9lemfsy4uLlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlY29yZGVyTWFuYWdlci5zdGFydCh7XG4gICAgICAgICAgZm9ybWF0OiBcIm1wM1wiXG4gICAgICAgIH0pOyAvLyDotoXml7ZcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBtZS5oYW5kbGVSZWNvcmRpbmdDYW5jZWwoKTtcbiAgICAgICAgICBSdW5BbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwMDAwKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlUmVjb3JkaW5nQ2FuY2VsKCkge1xuICAgICAgUnVuQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICBsZXQgcmVjb3JkZXJNYW5hZ2VyID0gdGhpcy5yZWNvcmRlck1hbmFnZXI7IC8vIOWQkeS4iua7keWKqOeKtuaAgeWBnOatou+8muWPlua2iOW9lemfs+WPkeaUvlxuXG4gICAgICBpZiAodGhpcy5yZWNvcmRTdGF0dXMgPT0gUmVjb3JkU3RhdHVzLlNXSVBFKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuUkVMRUFTRVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgcmVjb3JkU3RhdHVzOiBSZWNvcmRTdGF0dXMuSElERSxcbiAgICAgICAgICByZWNvcmRDbGlja2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVjb3JkZXJNYW5hZ2VyLm9uU3RvcChyZXMgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIue7k+adn+W9lemfsy4uLlwiLCByZXMpO1xuICAgICAgICBpZiAodGhpcy5yZWNvcmRTdGF0dXMgPT0gUmVjb3JkU3RhdHVzLlJFTEVBU0UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgY2FuY2VsZWRcIik7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHJlY29yZFN0YXR1czogUmVjb3JkU3RhdHVzLkhJREVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzLmR1cmF0aW9uIDwgMTAwMCkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLlvZXpn7Pml7bpl7TlpKrnn61cIixcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5LiK5LygXG4gICAgICAgICAgdGhpcy51cGxvYWRSZWNvcmQocmVzLnRlbXBGaWxlUGF0aCwgcmVzLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIOWBnOatouW9lemfs1xuXG4gICAgICByZWNvcmRlck1hbmFnZXIuc3RvcCgpO1xuICAgIH0sXG5cbiAgICBpc0dyb3VwQ2hhdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYXRUeXBlID09IG1zZ1R5cGUuY2hhdFR5cGUuQ0hBVF9ST09NO1xuICAgIH0sXG5cbiAgICBnZXRTZW5kVG9QYXJhbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzR3JvdXBDaGF0KCkgPyB0aGlzLnVzZXJuYW1lLmdyb3VwSWQgOiB0aGlzLnVzZXJuYW1lLnlvdXI7XG4gICAgfSxcblxuICAgIHVwbG9hZFJlY29yZCh0ZW1wRmlsZVBhdGgsIGR1cikge1xuICAgICAgdmFyIHN0ciA9IFdlYklNLmNvbmZpZy5hcHBrZXkuc3BsaXQoXCIjXCIpO1xuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIHZhciB0b2tlbiA9IFdlYklNLmNvbm4uY29udGV4dC5hY2Nlc3NUb2tlbjtcbiAgICAgIHd4LnVwbG9hZEZpbGUoe1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hMS5lYXNlbW9iLmNvbS9cIiArIHN0clswXSArIFwiL1wiICsgc3RyWzFdICsgXCIvY2hhdGZpbGVzXCIsXG4gICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGgsXG4gICAgICAgIG5hbWU6IFwiZmlsZVwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAvLyDlj5HpgIEgeG1wcCDmtojmga9cbiAgICAgICAgICB2YXIgaWQgPSBXZWJJTS5jb25uLmdldFVuaXF1ZUlkKCk7XG4gICAgICAgICAgdmFyIG1zZyA9IG5ldyBXZWJJTS5tZXNzYWdlKG1zZ1R5cGUuQVVESU8sIGlkKTtcbiAgICAgICAgICB2YXIgZGF0YU9iaiA9IEpTT04ucGFyc2UocmVzLmRhdGEpOyAvLyDmjqXmlLbmtojmga/lr7nosaFcblxuICAgICAgICAgIG1zZy5zZXQoe1xuICAgICAgICAgICAgYXBpVXJsOiBXZWJJTS5jb25maWcuYXBpVVJMLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHRva2VuLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICB0eXBlOiBtc2dUeXBlLkFVRElPLFxuICAgICAgICAgICAgICB1cmw6IGRhdGFPYmoudXJpICsgXCIvXCIgKyBkYXRhT2JqLmVudGl0aWVzWzBdLnV1aWQsXG4gICAgICAgICAgICAgIGZpbGV0eXBlOiBcIlwiLFxuICAgICAgICAgICAgICBmaWxlbmFtZTogdGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgIGxlbmd0aDogTWF0aC5jZWlsKGR1ciAvIDEwMDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJvbTogbWUuZGF0YS51c2VybmFtZS5teU5hbWUsXG4gICAgICAgICAgICB0bzogbWUuZ2V0U2VuZFRvUGFyYW0oKSxcbiAgICAgICAgICAgIHJvb21UeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIGNoYXRUeXBlOiBtZS5kYXRhLmNoYXRUeXBlLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgIGRpc3AuZmlyZSgnZW0uY2hhdC5zZW5kU3VjY2VzcycsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChtZS5pc0dyb3VwQ2hhdCgpKSB7XG4gICAgICAgICAgICBtc2cuc2V0R3JvdXAoXCJncm91cGNoYXRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbXNnLmJvZHkubGVuZ3RoID0gTWF0aC5jZWlsKGR1ciAvIDEwMDApOyAvL2NvbnNvbGUubG9nKCflj5HpgIHnmoTor63pn7Pmtojmga8nLCBtc2cuYm9keSlcblxuICAgICAgICAgIFdlYklNLmNvbm4uc2VuZChtc2cuYm9keSk7XG4gICAgICAgICAgbWUuJGVtaXQoXCJuZXdBdWRpb01zZ1wiLCB7XG4gICAgICAgICAgICBtc2c6IG1zZyxcbiAgICAgICAgICAgIHR5cGU6IG1zZ1R5cGUuQVVESU9cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbXlyYWRvbSgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIF9yYWRvbWhlaWdodCA9IHRoYXQucmFkb21oZWlnaHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5yYWRvbWhlaWdodC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLysx5piv5Li65LqG6YG/5YWN5Li6MFxuICAgICAgICBfcmFkb21oZWlnaHRbaV0gPSAxMDAgKiBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMikgKyAxMDtcbiAgICAgIH1cblxuICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgcmFkb21oZWlnaHQ6IF9yYWRvbWhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChSdW5BbmltYXRpb24pIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5teXJhZG9tKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNldERhdGE6IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBsZXQga2V5cyA9IFtdO1xuICAgICAgbGV0IHZhbCwgZGF0YTtcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFsID0gb2JqW2tleV07XG4gICAgICAgIGRhdGEgPSB0aGF0LiRkYXRhO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleTIsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGluZGV4ICsgMSA9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhhdC4kc2V0KGRhdGEsIGtleTIsIHZhbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZGF0YVtrZXkyXSkge1xuICAgICAgICAgICAgICB0aGF0LiRzZXQoZGF0YSwga2V5Miwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGEgPSBkYXRhW2tleTJdO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2F1ZGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2F1ZGlvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'comps/chat/inputbar/suit/audio/audio-create-component',
    {
        'comps/chat/inputbar/suit/audio/audio-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(276))
        })
    },
    [['comps/chat/inputbar/suit/audio/audio-create-component']]
]);
