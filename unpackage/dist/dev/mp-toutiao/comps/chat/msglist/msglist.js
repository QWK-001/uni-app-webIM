(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["comps/chat/msglist/msglist"],{

/***/ 261:
/*!*******************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msglist.vue?vue&type=template&id=a1b8c4b4& */ 262);
/* harmony import */ var _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msglist.vue?vue&type=script&lang=js& */ 264);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msglist.vue?vue&type=style&index=0&lang=css& */ 266);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 262:
/*!**************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=template&id=a1b8c4b4& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=template&id=a1b8c4b4& */ 263);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_a1b8c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 263:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=template&id=a1b8c4b4& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 264:
/*!********************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=script&lang=js& */ 265);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 265:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//

var msgStorage = __webpack_require__(/*! ../msgstorage */ 65);
var disp = __webpack_require__(/*! ../../../utils/broadcast */ 69);
var LIST_STATUS = {
  SHORT: "scroll_view_change",
  NORMAL: "scroll_view" };

var page = 0;
var Index = 0;
var curMsgMid = '';
var isFail = false;var audioMsg = function audioMsg() {return Promise.all(/*! import() | comps/chat/msglist/type/audio/audio */[__webpack_require__.e("common/vendor"), __webpack_require__.e("comps/chat/msglist/type/audio/audio")]).then(__webpack_require__.bind(null, /*! ./type/audio/audio */ 283));};var _default2 =


{
  data: function data() {
    return {
      view: LIST_STATUS.NORMAL,
      toView: "",
      chatMsg: [],
      __visibility__: false,
      isIPX: false };

  },

  components: {
    audioMsg: audioMsg },

  props: {
    username: {
      type: Object,
      default: function _default() {return {};} } },



  // lifetimes
  created: function created() {},

  beforeMount: function beforeMount() {
    this.__visibility__ = true;
    page = 0;
    Index = 0;
  },

  moved: function moved() {},

  destroyed: function destroyed() {
    this.__visibility__ = false;
  },

  mounted: function mounted(event) {
    var me = this;

    if (getApp().globalData.isIPX) {
      this.setData({
        isIPX: true });

    }

    var username = this.username;
    var myUsername = wx.getStorageSync("myUsername");
    var sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
    var chatMsg = wx.getStorageSync(sessionKey) || [];
    this.renderMsg(null, null, chatMsg, sessionKey);
    wx.setStorageSync(sessionKey, null); // disp.on("em.chat.sendSuccess", function(mid){
    // 	curMsgMid = mid
    // 	console.log('发送过去了', mid)
    // 	let msgList = me.data.chatMsg
    // 	msgList.map((item) =>{
    // 		if (item.mid.substring(item.mid.length - 10) == mid.substring(mid.length - 10)) {
    // 			console.log(111111, item)
    // 			item.msg.data[0].isSuc = true
    // 			item.isSuc = true
    // 			me.setData({
    // 				chatMsg: msgList
    // 			})
    // 		}
    // 	})
    // 	if (me.curChatMsg[0].mid == curMsgMid) {
    // 		me.curChatMsg[0].msg.data[0].isShow = true
    // 		me.curChatMsg[0].isShow = true
    // 	}
    // 	wx.setStorageSync("rendered_" + sessionKey, msgList);
    // 	console.log('msgList', msgList)
    // })

    disp.on('em.xmpp.error.sendMsgErr', function (err) {
      curMsgMid = err.data.mid;
      isFail = true;
      return;
      console.log('发送失败了');
      var msgList = me.chatMsg;
      msgList.map(function (item) {
        if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
          item.msg.data[0].isFail = true;
          item.isFail = true;
          me.setData({
            chatMsg: msgList });

        }
      });

      if (me.curChatMsg[0].mid == curMsgMid) {
        me.curChatMsg[0].msg.data[0].isShow = false;
        me.curChatMsg[0].isShow = false;
      }

      wx.setStorageSync("rendered_" + sessionKey, msgList);
    });
    msgStorage.on("newChatMsg", function (renderableMsg, type, curChatMsg, sesskey) {
      me.curChatMsg = curChatMsg;
      if (!me.__visibility__) return; // 判断是否属于当前会话

      if (username.groupId) {
        // 群消息的 to 是 id，from 是 name
        if (renderableMsg.info.from == username.groupId || renderableMsg.info.to == username.groupId) {
          if (sesskey == sessionKey) {
            me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
          }
        }
      } else if (renderableMsg.info.from == username.your || renderableMsg.info.to == username.your) {
        if (sesskey == sessionKey) {
          me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
        }
      }
    });
  },

  methods: {
    normalScroll: function normalScroll() {
      this.setData({
        view: LIST_STATUS.NORMAL });

    },

    shortScroll: function shortScroll() {
      this.setData({
        view: LIST_STATUS.SHORT });

    },

    onTap: function onTap() {
      this.$emit("msglistTap", null, {
        bubbles: true });

    },

    previewImage: function previewImage(event) {
      var url = event.target.dataset.url;
      wx.previewImage({
        urls: [url] // 需要预览的图片 http 链接列表
      });

    },

    getHistoryMsg: function getHistoryMsg() {
      var me = this;
      var username = this.username;
      var myUsername = wx.getStorageSync("myUsername");
      var sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
      var historyChatMsgs = wx.getStorageSync("rendered_" + sessionKey) || [];

      if (Index < historyChatMsgs.length) {
        var timesMsgList = historyChatMsgs.slice(-Index - 10, -Index);
        this.setData({
          chatMsg: timesMsgList.concat(me.chatMsg),
          toView: timesMsgList[timesMsgList.length - 1].mid });

        Index += timesMsgList.length;

        if (timesMsgList.length == 10) {
          page++;
        }

        wx.stopPullDownRefresh();
      }
    },

    renderMsg: function renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
      var me = this;

      if (curChatMsg.length > 1) {
        this.chatMsg.map(function (elem, index) {
          curChatMsg.map(function (item, i) {
            if (elem.mid == item.mid) {
              //me.data.chatMsg.splice(index, 1)
              curChatMsg.splice(i, 1);
            }
          });
        });
      }

      var historyChatMsgs = wx.getStorageSync("rendered_" + sessionKey) || []; // if (curChatMsg.length) {
      // 	console.log(curMsgMid.substring(curMsgMid.length - 10) , curChatMsg[0].mid.substring(curChatMsg[0].mid.length - 10))
      // }
      // if(curChatMsg.length && curMsgMid.substring(curMsgMid.length - 10) == curChatMsg[curChatMsg.length - 1].mid.substring(curChatMsg[0].mid.length - 10)){
      // 	//curChatMsg[curChatMsg.length - 1].msg.data[0].isSuc = true
      // 	curChatMsg[curChatMsg.length - 1].isSuc = true
      // }

      historyChatMsgs = historyChatMsgs.concat(curChatMsg); //console.log('当前历史',renderableMsg)
      //console.log('历史消息', historyChatMsgs)

      if (!historyChatMsgs.length) return;

      if (isnew == 'newMsg') {
        this.setData({
          chatMsg: this.chatMsg.concat(curChatMsg),
          // 跳到最后一条
          toView: historyChatMsgs[historyChatMsgs.length - 1].mid });

      } else {
        this.setData({
          chatMsg: historyChatMsgs.slice(-10),
          // 跳到最后一条
          toView: historyChatMsgs[historyChatMsgs.length - 1].mid });

      }

      wx.setStorageSync("rendered_" + sessionKey, historyChatMsgs);
      var chatMsg = wx.getStorageSync(sessionKey) || [];
      chatMsg.map(function (item, index) {
        curChatMsg.map(function (item2, index2) {
          if (item2.mid == item.mid) {
            chatMsg.splice(index, 1);
          }
        });
      });
      wx.setStorageSync(sessionKey, chatMsg);
      Index = historyChatMsgs.slice(-10).length;
      wx.pageScrollTo({
        scrollTop: 9999 });


      if (isFail) {
        this.renderFail(sessionKey);
      }
    },

    renderFail: function renderFail(sessionKey) {
      var me = this;
      var msgList = me.chatMsg;
      msgList.map(function (item) {
        if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
          item.msg.data[0].isFail = true;
          item.isFail = true;
          me.setData({
            chatMsg: msgList });

        }
      });

      if (me.curChatMsg[0].mid == curMsgMid) {
        me.curChatMsg[0].msg.data[0].isShow = false;
        me.curChatMsg[0].isShow = false;
      }

      wx.setStorageSync("rendered_" + sessionKey, msgList);
      isFail = false;
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

/***/ 266:
/*!****************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=style&index=0&lang=css& */ 267);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 267:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/chat/msglist/msglist.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWU/NGVjZCIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWU/ZGI5NCIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWU/YTZhZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWU/YzhjNSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9tc2dsaXN0L21zZ2xpc3QudnVlP2RlYTAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvY2hhdC9tc2dsaXN0L21zZ2xpc3QudnVlPzczMTIiXSwibmFtZXMiOlsibXNnU3RvcmFnZSIsInJlcXVpcmUiLCJkaXNwIiwiTElTVF9TVEFUVVMiLCJTSE9SVCIsIk5PUk1BTCIsInBhZ2UiLCJJbmRleCIsImN1ck1zZ01pZCIsImlzRmFpbCIsImRhdGEiLCJ2aWV3IiwidG9WaWV3IiwiY2hhdE1zZyIsIl9fdmlzaWJpbGl0eV9fIiwiaXNJUFgiLCJjb21wb25lbnRzIiwiYXVkaW9Nc2ciLCJwcm9wcyIsInVzZXJuYW1lIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjcmVhdGVkIiwiYmVmb3JlTW91bnQiLCJtb3ZlZCIsImRlc3Ryb3llZCIsIm1vdW50ZWQiLCJldmVudCIsIm1lIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsInNldERhdGEiLCJteVVzZXJuYW1lIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInNlc3Npb25LZXkiLCJncm91cElkIiwieW91ciIsInJlbmRlck1zZyIsInNldFN0b3JhZ2VTeW5jIiwib24iLCJlcnIiLCJtaWQiLCJjb25zb2xlIiwibG9nIiwibXNnTGlzdCIsIm1hcCIsIml0ZW0iLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJtc2ciLCJjdXJDaGF0TXNnIiwiaXNTaG93IiwicmVuZGVyYWJsZU1zZyIsInNlc3NrZXkiLCJpbmZvIiwiZnJvbSIsInRvIiwibWV0aG9kcyIsIm5vcm1hbFNjcm9sbCIsInNob3J0U2Nyb2xsIiwib25UYXAiLCIkZW1pdCIsImJ1YmJsZXMiLCJwcmV2aWV3SW1hZ2UiLCJ1cmwiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidXJscyIsImdldEhpc3RvcnlNc2ciLCJoaXN0b3J5Q2hhdE1zZ3MiLCJ0aW1lc01zZ0xpc3QiLCJzbGljZSIsImNvbmNhdCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJpc25ldyIsImVsZW0iLCJpbmRleCIsImkiLCJzcGxpY2UiLCJpdGVtMiIsImluZGV4MiIsInBhZ2VTY3JvbGxUbyIsInNjcm9sbFRvcCIsInJlbmRlckZhaWwiLCJvYmoiLCJjYWxsYmFjayIsInRoYXQiLCJrZXlzIiwidmFsIiwiZm9yRWFjaCIsImtleSIsInNwbGl0IiwiJGRhdGEiLCJrZXkyIiwiJHNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMO0FBQ2E7OztBQUduRTtBQUM2SztBQUM3SyxnQkFBZ0IsNEtBQVU7QUFDMUIs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QUNELFNBVkQ7QUFXRCxPQWZEO0FBZ0JBUixjQUFRLElBQUlBLFFBQVEsRUFBcEI7QUFDRCxLQTFKTSxFQWxISSxFOzs7Ozs7Ozs7Ozs7O0FDakRmO0FBQUE7QUFBQTtBQUFBO0FBQW16QyxDQUFnQixxckNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0F2MEMsdUMiLCJmaWxlIjoiY29tcHMvY2hhdC9tc2dsaXN0L21zZ2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21zZ2xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExYjhjNGI0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21zZ2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tc2dsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9tc2dsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhMWI4YzRiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhMWI4YzRiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbXNnbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTFiOGM0YjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTFiOGM0YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy9jaGF0L21zZ2xpc3QvbXNnbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tc2dsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMWI4YzRiNCZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tc2dsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL21zZ2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5sZXQgbXNnU3RvcmFnZSA9IHJlcXVpcmUoXCIuLi9tc2dzdG9yYWdlXCIpO1xubGV0IGRpc3AgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXRpbHMvYnJvYWRjYXN0XCIpO1xubGV0IExJU1RfU1RBVFVTID0ge1xuICBTSE9SVDogXCJzY3JvbGxfdmlld19jaGFuZ2VcIixcbiAgTk9STUFMOiBcInNjcm9sbF92aWV3XCJcbn07XG5sZXQgcGFnZSA9IDA7XG5sZXQgSW5kZXggPSAwO1xubGV0IGN1ck1zZ01pZCA9ICcnO1xubGV0IGlzRmFpbCA9IGZhbHNlO1xuaW1wb3J0IGF1ZGlvTXNnIGZyb20gXCIuL3R5cGUvYXVkaW8vYXVkaW9cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWV3OiBMSVNUX1NUQVRVUy5OT1JNQUwsXG4gICAgICB0b1ZpZXc6IFwiXCIsXG4gICAgICBjaGF0TXNnOiBbXSxcbiAgICAgIF9fdmlzaWJpbGl0eV9fOiBmYWxzZSxcbiAgICAgIGlzSVBYOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIGF1ZGlvTXNnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gbGlmZXRpbWVzXG4gIGNyZWF0ZWQoKSB7fSxcblxuICBiZWZvcmVNb3VudCgpIHtcbiAgICB0aGlzLl9fdmlzaWJpbGl0eV9fID0gdHJ1ZTtcbiAgICBwYWdlID0gMDtcbiAgICBJbmRleCA9IDA7XG4gIH0sXG5cbiAgbW92ZWQoKSB7fSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy5fX3Zpc2liaWxpdHlfXyA9IGZhbHNlO1xuICB9LFxuXG4gIG1vdW50ZWQoZXZlbnQpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgaWYgKGdldEFwcCgpLmdsb2JhbERhdGEuaXNJUFgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzSVBYOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgdXNlcm5hbWUgPSB0aGlzLnVzZXJuYW1lO1xuICAgIGxldCBteVVzZXJuYW1lID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJteVVzZXJuYW1lXCIpO1xuICAgIGxldCBzZXNzaW9uS2V5ID0gdXNlcm5hbWUuZ3JvdXBJZCA/IHVzZXJuYW1lLmdyb3VwSWQgKyBteVVzZXJuYW1lIDogdXNlcm5hbWUueW91ciArIG15VXNlcm5hbWU7XG4gICAgbGV0IGNoYXRNc2cgPSB3eC5nZXRTdG9yYWdlU3luYyhzZXNzaW9uS2V5KSB8fCBbXTtcbiAgICB0aGlzLnJlbmRlck1zZyhudWxsLCBudWxsLCBjaGF0TXNnLCBzZXNzaW9uS2V5KTtcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhzZXNzaW9uS2V5LCBudWxsKTsgLy8gZGlzcC5vbihcImVtLmNoYXQuc2VuZFN1Y2Nlc3NcIiwgZnVuY3Rpb24obWlkKXtcbiAgICAvLyBcdGN1ck1zZ01pZCA9IG1pZFxuICAgIC8vIFx0Y29uc29sZS5sb2coJ+WPkemAgei/h+WOu+S6hicsIG1pZClcbiAgICAvLyBcdGxldCBtc2dMaXN0ID0gbWUuZGF0YS5jaGF0TXNnXG4gICAgLy8gXHRtc2dMaXN0Lm1hcCgoaXRlbSkgPT57XG4gICAgLy8gXHRcdGlmIChpdGVtLm1pZC5zdWJzdHJpbmcoaXRlbS5taWQubGVuZ3RoIC0gMTApID09IG1pZC5zdWJzdHJpbmcobWlkLmxlbmd0aCAtIDEwKSkge1xuICAgIC8vIFx0XHRcdGNvbnNvbGUubG9nKDExMTExMSwgaXRlbSlcbiAgICAvLyBcdFx0XHRpdGVtLm1zZy5kYXRhWzBdLmlzU3VjID0gdHJ1ZVxuICAgIC8vIFx0XHRcdGl0ZW0uaXNTdWMgPSB0cnVlXG4gICAgLy8gXHRcdFx0bWUuc2V0RGF0YSh7XG4gICAgLy8gXHRcdFx0XHRjaGF0TXNnOiBtc2dMaXN0XG4gICAgLy8gXHRcdFx0fSlcbiAgICAvLyBcdFx0fVxuICAgIC8vIFx0fSlcbiAgICAvLyBcdGlmIChtZS5jdXJDaGF0TXNnWzBdLm1pZCA9PSBjdXJNc2dNaWQpIHtcbiAgICAvLyBcdFx0bWUuY3VyQ2hhdE1zZ1swXS5tc2cuZGF0YVswXS5pc1Nob3cgPSB0cnVlXG4gICAgLy8gXHRcdG1lLmN1ckNoYXRNc2dbMF0uaXNTaG93ID0gdHJ1ZVxuICAgIC8vIFx0fVxuICAgIC8vIFx0d3guc2V0U3RvcmFnZVN5bmMoXCJyZW5kZXJlZF9cIiArIHNlc3Npb25LZXksIG1zZ0xpc3QpO1xuICAgIC8vIFx0Y29uc29sZS5sb2coJ21zZ0xpc3QnLCBtc2dMaXN0KVxuICAgIC8vIH0pXG5cbiAgICBkaXNwLm9uKCdlbS54bXBwLmVycm9yLnNlbmRNc2dFcnInLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjdXJNc2dNaWQgPSBlcnIuZGF0YS5taWQ7XG4gICAgICBpc0ZhaWwgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2coJ+WPkemAgeWksei0peS6hicpO1xuICAgICAgbGV0IG1zZ0xpc3QgPSBtZS5jaGF0TXNnO1xuICAgICAgbXNnTGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLm1pZC5zdWJzdHJpbmcoaXRlbS5taWQubGVuZ3RoIC0gMTApID09IGN1ck1zZ01pZC5zdWJzdHJpbmcoY3VyTXNnTWlkLmxlbmd0aCAtIDEwKSkge1xuICAgICAgICAgIGl0ZW0ubXNnLmRhdGFbMF0uaXNGYWlsID0gdHJ1ZTtcbiAgICAgICAgICBpdGVtLmlzRmFpbCA9IHRydWU7XG4gICAgICAgICAgbWUuc2V0RGF0YSh7XG4gICAgICAgICAgICBjaGF0TXNnOiBtc2dMaXN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWUuY3VyQ2hhdE1zZ1swXS5taWQgPT0gY3VyTXNnTWlkKSB7XG4gICAgICAgIG1lLmN1ckNoYXRNc2dbMF0ubXNnLmRhdGFbMF0uaXNTaG93ID0gZmFsc2U7XG4gICAgICAgIG1lLmN1ckNoYXRNc2dbMF0uaXNTaG93ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwicmVuZGVyZWRfXCIgKyBzZXNzaW9uS2V5LCBtc2dMaXN0KTtcbiAgICB9KTtcbiAgICBtc2dTdG9yYWdlLm9uKFwibmV3Q2hhdE1zZ1wiLCBmdW5jdGlvbiAocmVuZGVyYWJsZU1zZywgdHlwZSwgY3VyQ2hhdE1zZywgc2Vzc2tleSkge1xuICAgICAgbWUuY3VyQ2hhdE1zZyA9IGN1ckNoYXRNc2c7XG4gICAgICBpZiAoIW1lLl9fdmlzaWJpbGl0eV9fKSByZXR1cm47IC8vIOWIpOaWreaYr+WQpuWxnuS6juW9k+WJjeS8muivnVxuXG4gICAgICBpZiAodXNlcm5hbWUuZ3JvdXBJZCkge1xuICAgICAgICAvLyDnvqTmtojmga/nmoQgdG8g5pivIGlk77yMZnJvbSDmmK8gbmFtZVxuICAgICAgICBpZiAocmVuZGVyYWJsZU1zZy5pbmZvLmZyb20gPT0gdXNlcm5hbWUuZ3JvdXBJZCB8fCByZW5kZXJhYmxlTXNnLmluZm8udG8gPT0gdXNlcm5hbWUuZ3JvdXBJZCkge1xuICAgICAgICAgIGlmIChzZXNza2V5ID09IHNlc3Npb25LZXkpIHtcbiAgICAgICAgICAgIG1lLnJlbmRlck1zZyhyZW5kZXJhYmxlTXNnLCB0eXBlLCBjdXJDaGF0TXNnLCBzZXNzaW9uS2V5LCAnbmV3TXNnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlbmRlcmFibGVNc2cuaW5mby5mcm9tID09IHVzZXJuYW1lLnlvdXIgfHwgcmVuZGVyYWJsZU1zZy5pbmZvLnRvID09IHVzZXJuYW1lLnlvdXIpIHtcbiAgICAgICAgaWYgKHNlc3NrZXkgPT0gc2Vzc2lvbktleSkge1xuICAgICAgICAgIG1lLnJlbmRlck1zZyhyZW5kZXJhYmxlTXNnLCB0eXBlLCBjdXJDaGF0TXNnLCBzZXNzaW9uS2V5LCAnbmV3TXNnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbm9ybWFsU2Nyb2xsKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdmlldzogTElTVF9TVEFUVVMuTk9STUFMXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvcnRTY3JvbGwoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB2aWV3OiBMSVNUX1NUQVRVUy5TSE9SVFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uVGFwKCkge1xuICAgICAgdGhpcy4kZW1pdChcIm1zZ2xpc3RUYXBcIiwgbnVsbCwge1xuICAgICAgICBidWJibGVzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcHJldmlld0ltYWdlKGV2ZW50KSB7XG4gICAgICB2YXIgdXJsID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudXJsO1xuICAgICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgICAgdXJsczogW3VybF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHIGh0dHAg6ZO+5o6l5YiX6KGoXG5cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRIaXN0b3J5TXNnKCkge1xuICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICBsZXQgbXlVc2VybmFtZSA9IHd4LmdldFN0b3JhZ2VTeW5jKFwibXlVc2VybmFtZVwiKTtcbiAgICAgIGxldCBzZXNzaW9uS2V5ID0gdXNlcm5hbWUuZ3JvdXBJZCA/IHVzZXJuYW1lLmdyb3VwSWQgKyBteVVzZXJuYW1lIDogdXNlcm5hbWUueW91ciArIG15VXNlcm5hbWU7XG4gICAgICBsZXQgaGlzdG9yeUNoYXRNc2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJyZW5kZXJlZF9cIiArIHNlc3Npb25LZXkpIHx8IFtdO1xuXG4gICAgICBpZiAoSW5kZXggPCBoaXN0b3J5Q2hhdE1zZ3MubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0aW1lc01zZ0xpc3QgPSBoaXN0b3J5Q2hhdE1zZ3Muc2xpY2UoLUluZGV4IC0gMTAsIC1JbmRleCk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgY2hhdE1zZzogdGltZXNNc2dMaXN0LmNvbmNhdChtZS5jaGF0TXNnKSxcbiAgICAgICAgICB0b1ZpZXc6IHRpbWVzTXNnTGlzdFt0aW1lc01zZ0xpc3QubGVuZ3RoIC0gMV0ubWlkXG4gICAgICAgIH0pO1xuICAgICAgICBJbmRleCArPSB0aW1lc01zZ0xpc3QubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aW1lc01zZ0xpc3QubGVuZ3RoID09IDEwKSB7XG4gICAgICAgICAgcGFnZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXJNc2cocmVuZGVyYWJsZU1zZywgdHlwZSwgY3VyQ2hhdE1zZywgc2Vzc2lvbktleSwgaXNuZXcpIHtcbiAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgIGlmIChjdXJDaGF0TXNnLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5jaGF0TXNnLm1hcChmdW5jdGlvbiAoZWxlbSwgaW5kZXgpIHtcbiAgICAgICAgICBjdXJDaGF0TXNnLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgaWYgKGVsZW0ubWlkID09IGl0ZW0ubWlkKSB7XG4gICAgICAgICAgICAgIC8vbWUuZGF0YS5jaGF0TXNnLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgY3VyQ2hhdE1zZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlzdG9yeUNoYXRNc2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJyZW5kZXJlZF9cIiArIHNlc3Npb25LZXkpIHx8IFtdOyAvLyBpZiAoY3VyQ2hhdE1zZy5sZW5ndGgpIHtcbiAgICAgIC8vIFx0Y29uc29sZS5sb2coY3VyTXNnTWlkLnN1YnN0cmluZyhjdXJNc2dNaWQubGVuZ3RoIC0gMTApICwgY3VyQ2hhdE1zZ1swXS5taWQuc3Vic3RyaW5nKGN1ckNoYXRNc2dbMF0ubWlkLmxlbmd0aCAtIDEwKSlcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmKGN1ckNoYXRNc2cubGVuZ3RoICYmIGN1ck1zZ01pZC5zdWJzdHJpbmcoY3VyTXNnTWlkLmxlbmd0aCAtIDEwKSA9PSBjdXJDaGF0TXNnW2N1ckNoYXRNc2cubGVuZ3RoIC0gMV0ubWlkLnN1YnN0cmluZyhjdXJDaGF0TXNnWzBdLm1pZC5sZW5ndGggLSAxMCkpe1xuICAgICAgLy8gXHQvL2N1ckNoYXRNc2dbY3VyQ2hhdE1zZy5sZW5ndGggLSAxXS5tc2cuZGF0YVswXS5pc1N1YyA9IHRydWVcbiAgICAgIC8vIFx0Y3VyQ2hhdE1zZ1tjdXJDaGF0TXNnLmxlbmd0aCAtIDFdLmlzU3VjID0gdHJ1ZVxuICAgICAgLy8gfVxuXG4gICAgICBoaXN0b3J5Q2hhdE1zZ3MgPSBoaXN0b3J5Q2hhdE1zZ3MuY29uY2F0KGN1ckNoYXRNc2cpOyAvL2NvbnNvbGUubG9nKCflvZPliY3ljoblj7InLHJlbmRlcmFibGVNc2cpXG4gICAgICAvL2NvbnNvbGUubG9nKCfljoblj7Lmtojmga8nLCBoaXN0b3J5Q2hhdE1zZ3MpXG5cbiAgICAgIGlmICghaGlzdG9yeUNoYXRNc2dzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICBpZiAoaXNuZXcgPT0gJ25ld01zZycpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBjaGF0TXNnOiB0aGlzLmNoYXRNc2cuY29uY2F0KGN1ckNoYXRNc2cpLFxuICAgICAgICAgIC8vIOi3s+WIsOacgOWQjuS4gOadoVxuICAgICAgICAgIHRvVmlldzogaGlzdG9yeUNoYXRNc2dzW2hpc3RvcnlDaGF0TXNncy5sZW5ndGggLSAxXS5taWRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGNoYXRNc2c6IGhpc3RvcnlDaGF0TXNncy5zbGljZSgtMTApLFxuICAgICAgICAgIC8vIOi3s+WIsOacgOWQjuS4gOadoVxuICAgICAgICAgIHRvVmlldzogaGlzdG9yeUNoYXRNc2dzW2hpc3RvcnlDaGF0TXNncy5sZW5ndGggLSAxXS5taWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwicmVuZGVyZWRfXCIgKyBzZXNzaW9uS2V5LCBoaXN0b3J5Q2hhdE1zZ3MpO1xuICAgICAgbGV0IGNoYXRNc2cgPSB3eC5nZXRTdG9yYWdlU3luYyhzZXNzaW9uS2V5KSB8fCBbXTtcbiAgICAgIGNoYXRNc2cubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICBjdXJDaGF0TXNnLm1hcChmdW5jdGlvbiAoaXRlbTIsIGluZGV4Mikge1xuICAgICAgICAgIGlmIChpdGVtMi5taWQgPT0gaXRlbS5taWQpIHtcbiAgICAgICAgICAgIGNoYXRNc2cuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhzZXNzaW9uS2V5LCBjaGF0TXNnKTtcbiAgICAgIEluZGV4ID0gaGlzdG9yeUNoYXRNc2dzLnNsaWNlKC0xMCkubGVuZ3RoO1xuICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgc2Nyb2xsVG9wOiA5OTk5XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzRmFpbCkge1xuICAgICAgICB0aGlzLnJlbmRlckZhaWwoc2Vzc2lvbktleSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlckZhaWwoc2Vzc2lvbktleSkge1xuICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgIGxldCBtc2dMaXN0ID0gbWUuY2hhdE1zZztcbiAgICAgIG1zZ0xpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5taWQuc3Vic3RyaW5nKGl0ZW0ubWlkLmxlbmd0aCAtIDEwKSA9PSBjdXJNc2dNaWQuc3Vic3RyaW5nKGN1ck1zZ01pZC5sZW5ndGggLSAxMCkpIHtcbiAgICAgICAgICBpdGVtLm1zZy5kYXRhWzBdLmlzRmFpbCA9IHRydWU7XG4gICAgICAgICAgaXRlbS5pc0ZhaWwgPSB0cnVlO1xuICAgICAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICAgICAgY2hhdE1zZzogbXNnTGlzdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1lLmN1ckNoYXRNc2dbMF0ubWlkID09IGN1ck1zZ01pZCkge1xuICAgICAgICBtZS5jdXJDaGF0TXNnWzBdLm1zZy5kYXRhWzBdLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICBtZS5jdXJDaGF0TXNnWzBdLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInJlbmRlcmVkX1wiICsgc2Vzc2lvbktleSwgbXNnTGlzdCk7XG4gICAgICBpc0ZhaWwgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBrZXlzID0gW107XG4gICAgICBsZXQgdmFsLCBkYXRhO1xuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgZGF0YSA9IHRoYXQuJGRhdGE7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5MiwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGF0LiRzZXQoZGF0YSwga2V5MiwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFkYXRhW2tleTJdKSB7XG4gICAgICAgICAgICAgIHRoYXQuJHNldChkYXRhLCBrZXkyLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YSA9IGRhdGFba2V5Ml07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vbXNnbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9tc2dsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'comps/chat/msglist/msglist-create-component',
    {
        'comps/chat/msglist/msglist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(261))
        })
    },
    [['comps/chat/msglist/msglist-create-component']]
]);
