(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 150:
/*!***************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ 151));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 151:
/*!********************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=0434ce71& */ 152);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 154);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=css& */ 156);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/*!***************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=template&id=0434ce71& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=0434ce71& */ 153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_0434ce71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 153:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=template&id=0434ce71& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 154:
/*!*********************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 155);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var disp = __webpack_require__(/*! ../../utils/broadcast */ 69);
var WebIM = __webpack_require__(/*! ../../utils/WebIM */ 12)["default"];
var isfirstTime = true;var swipeDelete = function swipeDelete() {return __webpack_require__.e(/*! import() | comps/swipedelete/swipedelete */ "comps/swipedelete/swipedelete").then(__webpack_require__.bind(null, /*! ../../comps/swipedelete/swipedelete */ 247));};var _default =


{
  data: function data() {
    return {
      search_btn: true,
      search_chats: false,
      show_mask: false,
      yourname: "",
      unReadSpotNum: 0,
      unReadNoticeNum: 0,
      messageNum: 0,
      unReadTotalNotNum: 0,
      arr: [],
      show_clear: false,
      member: "",
      isIPX: false,
      gotop: false,
      input_code: "" };

  },

  components: {
    swipeDelete: swipeDelete },

  props: {},

  onLoad: function onLoad() {
    var me = this; //监听加好友申请

    disp.on("em.xmpp.subscribe", function () {
      me.setData({
        messageNum: getApp().globalData.saveFriendList.length,
        unReadTotalNotNum: getApp().globalData.saveFriendList.length + getApp().globalData.saveGroupInvitedList.length });

    }); //监听解散群

    disp.on("em.xmpp.invite.deleteGroup", function () {
      me.listGroups();
      me.getRoster();
      me.setData({
        arr: me.getChatList(),
        messageNum: getApp().globalData.saveFriendList.length });

    }); //监听未读消息数

    disp.on("em.xmpp.unreadspot", function (message) {
      me.setData({
        arr: me.getChatList(),
        unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? '99+' : getApp().globalData.unReadMessageNum });

    }); //监听未读加群“通知”

    disp.on("em.xmpp.invite.joingroup", function () {
      me.setData({
        unReadNoticeNum: getApp().globalData.saveGroupInvitedList.length,
        unReadTotalNotNum: getApp().globalData.saveFriendList.length + getApp().globalData.saveGroupInvitedList.length });

    });
    disp.on("em.xmpp.contacts.remove", function () {
      me.getRoster(); // me.setData({
      // 	arr: me.getChatList(),
      // 	unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? '99+' : getApp().globalData.unReadMessageNum,
      // });
    });
    this.getRoster();
  },

  onShow: function onShow() {
    this.setData({
      arr: this.getChatList(),
      unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? '99+' : getApp().globalData.unReadMessageNum,
      messageNum: getApp().globalData.saveFriendList.length,
      unReadNoticeNum: getApp().globalData.saveGroupInvitedList.length,
      unReadTotalNotNum: getApp().globalData.saveFriendList.length + getApp().globalData.saveGroupInvitedList.length });


    if (getApp().globalData.isIPX) {
      this.setData({
        isIPX: true });

    }
  },
  methods: {
    listGroups: function listGroups() {
      var me = this;
      return WebIM.conn.listRooms({
        success: function success(rooms) {
          wx.setStorage({
            key: "listGroup",
            data: rooms });

          me.getChatList();
        },
        error: function error(err) {
          console.log(err);
        } });

    },

    getRoster: function getRoster() {
      var me = this;
      var rosters = {
        success: function success(roster) {
          var member = [];

          for (var i = 0; i < roster.length; i++) {
            if (roster[i].subscription == "both") {
              member.push(roster[i]);
            }
          }

          wx.setStorage({
            key: "member",
            data: member });

          me.setData({
            member: member });

          me.listGroups(); //if(!systemReady){

          disp.fire("em.main.ready"); //systemReady = true;
          //}

          me.setData({
            arr: me.getChatList(),
            unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? '99+' : getApp().globalData.unReadMessageNum });

        },

        error: function error(err) {
          console.log(err);
        } };


      WebIM.conn.getRoster(rosters);
    },

    getChatList: function getChatList() {
      var array = [];
      var member = wx.getStorageSync("member");
      var myName = wx.getStorageSync("myUsername");
      var listGroups = wx.getStorageSync('listGroup') || [];

      for (var i = 0; i < member.length; i++) {
        var newChatMsgs = wx.getStorageSync(member[i].name + myName) || [];
        var historyChatMsgs = wx.getStorageSync("rendered_" + member[i].name + myName) || [];
        var curChatMsgs = historyChatMsgs.concat(newChatMsgs);

        if (curChatMsgs.length) {
          var lastChatMsg = curChatMsgs[curChatMsgs.length - 1];
          lastChatMsg.unReadCount = newChatMsgs.length;

          if (lastChatMsg.unReadCount > 99) {
            lastChatMsg.unReadCount = "99+";
          }

          var dateArr = lastChatMsg.time.split(' ')[0].split('-');
          var timeArr = lastChatMsg.time.split(' ')[1].split(':');
          var month = dateArr[2] < 10 ? '0' + dateArr[2] : dateArr[2];
          lastChatMsg.dateTimeNum = "".concat(dateArr[1]).concat(month).concat(timeArr[0]).concat(timeArr[1]).concat(timeArr[2]);
          lastChatMsg.time = "".concat(dateArr[1], "\u6708").concat(dateArr[2], "\u65E5 ").concat(timeArr[0], "\u65F6").concat(timeArr[1], "\u5206");
          array.push(lastChatMsg);
        }
      }

      for (var _i = 0; _i < listGroups.length; _i++) {
        var _newChatMsgs = wx.getStorageSync(listGroups[_i].roomId + myName) || [];
        var _historyChatMsgs = wx.getStorageSync("rendered_" + listGroups[_i].roomId + myName) || [];
        var _curChatMsgs = _historyChatMsgs.concat(_newChatMsgs);

        if (_curChatMsgs.length) {
          var _lastChatMsg = _curChatMsgs[_curChatMsgs.length - 1];
          _lastChatMsg.unReadCount = _newChatMsgs.length;

          if (_lastChatMsg.unReadCount > 99) {
            _lastChatMsg.unReadCount = "99+";
          }

          var _dateArr = _lastChatMsg.time.split(' ')[0].split('-');
          var _timeArr = _lastChatMsg.time.split(' ')[1].split(':');
          var _month = _dateArr[2] < 10 ? '0' + _dateArr[2] : _dateArr[2];
          _lastChatMsg.time = "".concat(_dateArr[1], "\u6708").concat(_dateArr[2], "\u65E5 ").concat(_timeArr[0], "\u65F6").concat(_timeArr[1], "\u5206");
          _lastChatMsg.dateTimeNum = "".concat(_dateArr[1]).concat(_month).concat(_timeArr[0]).concat(_timeArr[1]).concat(_timeArr[2]);
          _lastChatMsg.groupName = listGroups[_i].name;
          array.push(_lastChatMsg);
        }
      } //	测试列表
      // for (let i = 0; i < 12; i++) {
      // 	let newSESSION = {
      // 		info: {from: "zdtest", to: "zdtest2"},
      // 		mid: "txtWEBIM_427ab8b10c",
      // 		msg: {type: "txt", data: [{data: "丢晚高峰阿精高峰阿精神焕高峰阿精神焕高峰阿精神焕神焕发丢完", type: "txt"}]},
      // 		style: "self",
      // 		time: "2019-2-18 16:59:25",
      // 		username: "zdtest" + i,
      // 		yourname: "zdtest"
      // 	}
      // 	let dateArr = newSESSION.time.split(' ')[0].split('-')
      // 	let timeArr = newSESSION.time.split(' ')[1].split(':')
      // 	newSESSION.time = `${dateArr[1]}月${dateArr[2]}日 ${timeArr[0]}时${timeArr[1]}分`
      // 	array.push(newSESSION)
      // }


      array.sort(function (a, b) {
        return b.dateTimeNum - a.dateTimeNum;
      });
      return array;
    },

    openSearch: function openSearch() {
      this.setData({
        search_btn: false,
        search_chats: true,
        gotop: true });

    },
    onSearch: function onSearch(val) {
      var searchValue = val.detail.value;
      var chartList = this.getChatList();
      var serchList = [];
      chartList.forEach(function (item, index) {
        if (String(item.username).indexOf(searchValue) != -1) {
          serchList.push(item);
        }
      });
      this.setData({
        arr: serchList });

    },
    cancel: function cancel() {
      this.setData({
        search_btn: true,
        search_chats: false,
        arr: this.getChatList(),
        unReadSpotNum: getApp().globalData.unReadMessageNum > 99 ? '99+' : getApp().globalData.unReadMessageNum,
        gotop: false });

    },
    clearInput: function clearInput() {
      this.setData({
        input_code: '',
        show_clear: false });

    },
    onInput: function onInput(e) {
      var inputValue = e.detail.value;

      if (inputValue) {
        this.setData({
          show_clear: true });

      } else {
        this.setData({
          show_clear: false });

      }
    },
    tab_contacts: function tab_contacts() {
      wx.redirectTo({
        url: "../main/main?myName=" + wx.getStorageSync("myUsername") });

    },
    close_mask: function close_mask() {
      this.setData({
        search_btn: true,
        search_chats: false,
        show_mask: false });

    },
    tab_setting: function tab_setting() {
      wx.redirectTo({
        url: "../setting/setting" });

    },
    tab_notification: function tab_notification() {
      wx.redirectTo({
        url: "../notification/notification" });

    },
    into_chatRoom: function into_chatRoom(event) {
      var detail = event.currentTarget.dataset.item; //群聊的chatType居然是singlechat？脏数据？ 等sdk重写后整理一下字段

      if (detail.chatType == 'groupchat' || detail.chatType == 'chatRoom' || detail.groupName) {
        this.into_groupChatRoom(detail);
      } else {
        this.into_singleChatRoom(detail);
      }
    },
    //	单聊
    into_singleChatRoom: function into_singleChatRoom(detail) {
      var my = wx.getStorageSync("myUsername");
      var nameList = {
        myName: my,
        your: detail.username };

      wx.navigateTo({
        url: "../chatroom/chatroom?username=" + JSON.stringify(nameList) });

    },
    //	群聊 和 聊天室 （两个概念）
    into_groupChatRoom: function into_groupChatRoom(detail) {
      var my = wx.getStorageSync("myUsername");
      var nameList = {
        myName: my,
        your: detail.groupName,
        groupId: detail.info.to };

      wx.navigateTo({
        url: "../groupChatRoom/groupChatRoom?username=" + JSON.stringify(nameList) });

    },
    del_chat: function del_chat(event) {
      var detail = event.currentTarget.dataset.item;
      var nameList;

      if (detail.chatType == 'groupchat' || detail.chatType == 'chatRoom') {
        nameList = {
          your: detail.info.to };

      } else {
        nameList = {
          your: detail.username };

      }

      var myName = wx.getStorageSync("myUsername");
      var currentPage = getCurrentPages();
      wx.showModal({
        title: "删除该聊天记录",
        confirmText: "删除",
        success: function success(res) {
          if (res.confirm) {
            wx.setStorageSync(nameList.your + myName, "");
            wx.setStorageSync("rendered_" + nameList.your + myName, "");

            if (currentPage[0]) {
              currentPage[0].onShow();
            }

            disp.fire("em.chat.session.remove");
          }
        },
        fail: function fail(err) {} });

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
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 156:
/*!*****************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=css& */ 157);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/chat/chat.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[150,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2NoYXQvY2hhdC52dWU/MDBjMiIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9jaGF0L2NoYXQudnVlPzFjNTUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvcGFnZXMvY2hhdC9jaGF0LnZ1ZT8yNTI0Iiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2NoYXQvY2hhdC52dWU/NDkyYyIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9jaGF0L2NoYXQudnVlIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2NoYXQvY2hhdC52dWU/ZjgwZCIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9jaGF0L2NoYXQudnVlPzUyOTYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJkaXNwIiwicmVxdWlyZSIsIldlYklNIiwiaXNmaXJzdFRpbWUiLCJkYXRhIiwic2VhcmNoX2J0biIsInNlYXJjaF9jaGF0cyIsInNob3dfbWFzayIsInlvdXJuYW1lIiwidW5SZWFkU3BvdE51bSIsInVuUmVhZE5vdGljZU51bSIsIm1lc3NhZ2VOdW0iLCJ1blJlYWRUb3RhbE5vdE51bSIsImFyciIsInNob3dfY2xlYXIiLCJtZW1iZXIiLCJpc0lQWCIsImdvdG9wIiwiaW5wdXRfY29kZSIsImNvbXBvbmVudHMiLCJzd2lwZURlbGV0ZSIsInByb3BzIiwib25Mb2FkIiwibWUiLCJvbiIsInNldERhdGEiLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwic2F2ZUZyaWVuZExpc3QiLCJsZW5ndGgiLCJzYXZlR3JvdXBJbnZpdGVkTGlzdCIsImxpc3RHcm91cHMiLCJnZXRSb3N0ZXIiLCJnZXRDaGF0TGlzdCIsIm1lc3NhZ2UiLCJ1blJlYWRNZXNzYWdlTnVtIiwib25TaG93IiwibWV0aG9kcyIsImNvbm4iLCJsaXN0Um9vbXMiLCJzdWNjZXNzIiwicm9vbXMiLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJlcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyb3N0ZXJzIiwicm9zdGVyIiwiaSIsInN1YnNjcmlwdGlvbiIsInB1c2giLCJmaXJlIiwiYXJyYXkiLCJnZXRTdG9yYWdlU3luYyIsIm15TmFtZSIsIm5ld0NoYXRNc2dzIiwibmFtZSIsImhpc3RvcnlDaGF0TXNncyIsImN1ckNoYXRNc2dzIiwiY29uY2F0IiwibGFzdENoYXRNc2ciLCJ1blJlYWRDb3VudCIsImRhdGVBcnIiLCJ0aW1lIiwic3BsaXQiLCJ0aW1lQXJyIiwibW9udGgiLCJkYXRlVGltZU51bSIsInJvb21JZCIsImdyb3VwTmFtZSIsInNvcnQiLCJhIiwiYiIsIm9wZW5TZWFyY2giLCJvblNlYXJjaCIsInZhbCIsInNlYXJjaFZhbHVlIiwiZGV0YWlsIiwidmFsdWUiLCJjaGFydExpc3QiLCJzZXJjaExpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiU3RyaW5nIiwidXNlcm5hbWUiLCJpbmRleE9mIiwiY2FuY2VsIiwiY2xlYXJJbnB1dCIsIm9uSW5wdXQiLCJlIiwiaW5wdXRWYWx1ZSIsInRhYl9jb250YWN0cyIsInJlZGlyZWN0VG8iLCJ1cmwiLCJjbG9zZV9tYXNrIiwidGFiX3NldHRpbmciLCJ0YWJfbm90aWZpY2F0aW9uIiwiaW50b19jaGF0Um9vbSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjaGF0VHlwZSIsImludG9fZ3JvdXBDaGF0Um9vbSIsImludG9fc2luZ2xlQ2hhdFJvb20iLCJteSIsIm5hbWVMaXN0IiwieW91ciIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JvdXBJZCIsImluZm8iLCJ0byIsImRlbF9jaGF0IiwiY3VycmVudFBhZ2UiLCJnZXRDdXJyZW50UGFnZXMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbmZpcm1UZXh0IiwicmVzIiwiY29uZmlybSIsInNldFN0b3JhZ2VTeW5jIiwiZmFpbCIsIm9iaiIsImNhbGxiYWNrIiwidGhhdCIsImtleXMiLCJPYmplY3QiLCIkZGF0YSIsImtleTIiLCIkc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSwwRjtBQUNBQSxVQUFVLENBQUNDLGFBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR2hFO0FBQzBLO0FBQzFLLGdCQUFnQiw0S0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFvOUIsQ0FBZ0IsNjVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O2tJQ0F4K0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LENBQUN1QixLQUFKLENBQVUsR0FBVixDQUFQO0FBQ0FXLFdBQUcsR0FBR2lELEdBQUcsQ0FBQ25GLEdBQUQsQ0FBVDtBQUNBeEMsWUFBSSxHQUFHNkgsSUFBSSxDQUFDRyxLQUFaO0FBQ0FGLFlBQUksQ0FBQzlDLE9BQUwsQ0FBYSxVQUFVaUQsSUFBVixFQUFnQi9DLEtBQWhCLEVBQXVCO0FBQ2xDLGNBQUlBLEtBQUssR0FBRyxDQUFSLElBQWE0QyxJQUFJLENBQUNyRyxNQUF0QixFQUE4QjtBQUM1Qm9HLGdCQUFJLENBQUNLLElBQUwsQ0FBVWxJLElBQVYsRUFBZ0JpSSxJQUFoQixFQUFzQnZELEdBQXRCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsZ0JBQUksQ0FBQzFFLElBQUksQ0FBQ2lJLElBQUQsQ0FBVCxFQUFpQjtBQUNmSixrQkFBSSxDQUFDSyxJQUFMLENBQVVsSSxJQUFWLEVBQWdCaUksSUFBaEIsRUFBc0IsRUFBdEI7QUFDRDtBQUNGOztBQUVEakksY0FBSSxHQUFHQSxJQUFJLENBQUNpSSxJQUFELENBQVg7QUFDRCxTQVZEO0FBV0QsT0FmRDtBQWdCQUwsY0FBUSxJQUFJQSxRQUFRLEVBQXBCO0FBQ0QsS0E3Uk0sRUFqRkksRTs7Ozs7Ozs7Ozs7OztBQzlGZjtBQUFBO0FBQUE7QUFBQTtBQUF3eEMsQ0FBZ0Isa3JDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNXlDLHVDIiwiZmlsZSI6InBhZ2VzL2NoYXQvY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJyAgICAgICAgICAgIFxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9jaGF0L2NoYXQudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQzNGNlNzEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NoYXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0MzRjZTcxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0MzRjZTcxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM0Y2U3MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNDM0Y2U3MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2NoYXQvY2hhdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jaGF0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM0Y2U3MSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxubGV0IGRpc3AgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvYnJvYWRjYXN0XCIpO1xudmFyIFdlYklNID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL1dlYklNXCIpW1wiZGVmYXVsdFwiXTtcbmxldCBpc2ZpcnN0VGltZSA9IHRydWU7XG5pbXBvcnQgc3dpcGVEZWxldGUgZnJvbSBcIi4uLy4uL2NvbXBzL3N3aXBlZGVsZXRlL3N3aXBlZGVsZXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoX2J0bjogdHJ1ZSxcbiAgICAgIHNlYXJjaF9jaGF0czogZmFsc2UsXG4gICAgICBzaG93X21hc2s6IGZhbHNlLFxuICAgICAgeW91cm5hbWU6IFwiXCIsXG4gICAgICB1blJlYWRTcG90TnVtOiAwLFxuICAgICAgdW5SZWFkTm90aWNlTnVtOiAwLFxuICAgICAgbWVzc2FnZU51bTogMCxcbiAgICAgIHVuUmVhZFRvdGFsTm90TnVtOiAwLFxuICAgICAgYXJyOiBbXSxcbiAgICAgIHNob3dfY2xlYXI6IGZhbHNlLFxuICAgICAgbWVtYmVyOiBcIlwiLFxuICAgICAgaXNJUFg6IGZhbHNlLFxuICAgICAgZ290b3A6IGZhbHNlLFxuICAgICAgaW5wdXRfY29kZTogXCJcIlxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIHN3aXBlRGVsZXRlXG4gIH0sXG4gIHByb3BzOiB7fSxcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IG1lID0gdGhpczsgLy/nm5HlkKzliqDlpb3lj4vnlLPor7dcblxuICAgIGRpc3Aub24oXCJlbS54bXBwLnN1YnNjcmliZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZS5zZXREYXRhKHtcbiAgICAgICAgbWVzc2FnZU51bTogZ2V0QXBwKCkuZ2xvYmFsRGF0YS5zYXZlRnJpZW5kTGlzdC5sZW5ndGgsXG4gICAgICAgIHVuUmVhZFRvdGFsTm90TnVtOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnNhdmVGcmllbmRMaXN0Lmxlbmd0aCArIGdldEFwcCgpLmdsb2JhbERhdGEuc2F2ZUdyb3VwSW52aXRlZExpc3QubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9KTsgLy/nm5HlkKzop6PmlaPnvqRcblxuICAgIGRpc3Aub24oXCJlbS54bXBwLmludml0ZS5kZWxldGVHcm91cFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZS5saXN0R3JvdXBzKCk7XG4gICAgICBtZS5nZXRSb3N0ZXIoKTtcbiAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICBhcnI6IG1lLmdldENoYXRMaXN0KCksXG4gICAgICAgIG1lc3NhZ2VOdW06IGdldEFwcCgpLmdsb2JhbERhdGEuc2F2ZUZyaWVuZExpc3QubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9KTsgLy/nm5HlkKzmnKror7vmtojmga/mlbBcblxuICAgIGRpc3Aub24oXCJlbS54bXBwLnVucmVhZHNwb3RcIiwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICBhcnI6IG1lLmdldENoYXRMaXN0KCksXG4gICAgICAgIHVuUmVhZFNwb3ROdW06IGdldEFwcCgpLmdsb2JhbERhdGEudW5SZWFkTWVzc2FnZU51bSA+IDk5ID8gJzk5KycgOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnVuUmVhZE1lc3NhZ2VOdW1cbiAgICAgIH0pO1xuICAgIH0pOyAvL+ebkeWQrOacquivu+WKoOe+pOKAnOmAmuefpeKAnVxuXG4gICAgZGlzcC5vbihcImVtLnhtcHAuaW52aXRlLmpvaW5ncm91cFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZS5zZXREYXRhKHtcbiAgICAgICAgdW5SZWFkTm90aWNlTnVtOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnNhdmVHcm91cEludml0ZWRMaXN0Lmxlbmd0aCxcbiAgICAgICAgdW5SZWFkVG90YWxOb3ROdW06IGdldEFwcCgpLmdsb2JhbERhdGEuc2F2ZUZyaWVuZExpc3QubGVuZ3RoICsgZ2V0QXBwKCkuZ2xvYmFsRGF0YS5zYXZlR3JvdXBJbnZpdGVkTGlzdC5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRpc3Aub24oXCJlbS54bXBwLmNvbnRhY3RzLnJlbW92ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZS5nZXRSb3N0ZXIoKTsgLy8gbWUuc2V0RGF0YSh7XG4gICAgICAvLyBcdGFycjogbWUuZ2V0Q2hhdExpc3QoKSxcbiAgICAgIC8vIFx0dW5SZWFkU3BvdE51bTogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51blJlYWRNZXNzYWdlTnVtID4gOTkgPyAnOTkrJyA6IGdldEFwcCgpLmdsb2JhbERhdGEudW5SZWFkTWVzc2FnZU51bSxcbiAgICAgIC8vIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuZ2V0Um9zdGVyKCk7XG4gIH0sXG5cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGFycjogdGhpcy5nZXRDaGF0TGlzdCgpLFxuICAgICAgdW5SZWFkU3BvdE51bTogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51blJlYWRNZXNzYWdlTnVtID4gOTkgPyAnOTkrJyA6IGdldEFwcCgpLmdsb2JhbERhdGEudW5SZWFkTWVzc2FnZU51bSxcbiAgICAgIG1lc3NhZ2VOdW06IGdldEFwcCgpLmdsb2JhbERhdGEuc2F2ZUZyaWVuZExpc3QubGVuZ3RoLFxuICAgICAgdW5SZWFkTm90aWNlTnVtOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnNhdmVHcm91cEludml0ZWRMaXN0Lmxlbmd0aCxcbiAgICAgIHVuUmVhZFRvdGFsTm90TnVtOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnNhdmVGcmllbmRMaXN0Lmxlbmd0aCArIGdldEFwcCgpLmdsb2JhbERhdGEuc2F2ZUdyb3VwSW52aXRlZExpc3QubGVuZ3RoXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0QXBwKCkuZ2xvYmFsRGF0YS5pc0lQWCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNJUFg6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxpc3RHcm91cHMoKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgcmV0dXJuIFdlYklNLmNvbm4ubGlzdFJvb21zKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJvb21zKSB7XG4gICAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAgICBrZXk6IFwibGlzdEdyb3VwXCIsXG4gICAgICAgICAgICBkYXRhOiByb29tc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1lLmdldENoYXRMaXN0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldFJvc3RlcigpIHtcbiAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICBsZXQgcm9zdGVycyA9IHtcbiAgICAgICAgc3VjY2Vzcyhyb3N0ZXIpIHtcbiAgICAgICAgICB2YXIgbWVtYmVyID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvc3Rlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHJvc3RlcltpXS5zdWJzY3JpcHRpb24gPT0gXCJib3RoXCIpIHtcbiAgICAgICAgICAgICAgbWVtYmVyLnB1c2gocm9zdGVyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgIGtleTogXCJtZW1iZXJcIixcbiAgICAgICAgICAgIGRhdGE6IG1lbWJlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1lLnNldERhdGEoe1xuICAgICAgICAgICAgbWVtYmVyOiBtZW1iZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZS5saXN0R3JvdXBzKCk7IC8vaWYoIXN5c3RlbVJlYWR5KXtcblxuICAgICAgICAgIGRpc3AuZmlyZShcImVtLm1haW4ucmVhZHlcIik7IC8vc3lzdGVtUmVhZHkgPSB0cnVlO1xuICAgICAgICAgIC8vfVxuXG4gICAgICAgICAgbWUuc2V0RGF0YSh7XG4gICAgICAgICAgICBhcnI6IG1lLmdldENoYXRMaXN0KCksXG4gICAgICAgICAgICB1blJlYWRTcG90TnVtOiBnZXRBcHAoKS5nbG9iYWxEYXRhLnVuUmVhZE1lc3NhZ2VOdW0gPiA5OSA/ICc5OSsnIDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51blJlYWRNZXNzYWdlTnVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXJyb3IoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgICAgV2ViSU0uY29ubi5nZXRSb3N0ZXIocm9zdGVycyk7XG4gICAgfSxcblxuICAgIGdldENoYXRMaXN0KCkge1xuICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICB2YXIgbWVtYmVyID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJtZW1iZXJcIik7XG4gICAgICB2YXIgbXlOYW1lID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJteVVzZXJuYW1lXCIpO1xuICAgICAgdmFyIGxpc3RHcm91cHMgPSB3eC5nZXRTdG9yYWdlU3luYygnbGlzdEdyb3VwJykgfHwgW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdDaGF0TXNncyA9IHd4LmdldFN0b3JhZ2VTeW5jKG1lbWJlcltpXS5uYW1lICsgbXlOYW1lKSB8fCBbXTtcbiAgICAgICAgbGV0IGhpc3RvcnlDaGF0TXNncyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwicmVuZGVyZWRfXCIgKyBtZW1iZXJbaV0ubmFtZSArIG15TmFtZSkgfHwgW107XG4gICAgICAgIGxldCBjdXJDaGF0TXNncyA9IGhpc3RvcnlDaGF0TXNncy5jb25jYXQobmV3Q2hhdE1zZ3MpO1xuXG4gICAgICAgIGlmIChjdXJDaGF0TXNncy5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgbGFzdENoYXRNc2cgPSBjdXJDaGF0TXNnc1tjdXJDaGF0TXNncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA9IG5ld0NoYXRNc2dzLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA+IDk5KSB7XG4gICAgICAgICAgICBsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA9IFwiOTkrXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGRhdGVBcnIgPSBsYXN0Q2hhdE1zZy50aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKTtcbiAgICAgICAgICBsZXQgdGltZUFyciA9IGxhc3RDaGF0TXNnLnRpbWUuc3BsaXQoJyAnKVsxXS5zcGxpdCgnOicpO1xuICAgICAgICAgIGxldCBtb250aCA9IGRhdGVBcnJbMl0gPCAxMCA/ICcwJyArIGRhdGVBcnJbMl0gOiBkYXRlQXJyWzJdO1xuICAgICAgICAgIGxhc3RDaGF0TXNnLmRhdGVUaW1lTnVtID0gYCR7ZGF0ZUFyclsxXX0ke21vbnRofSR7dGltZUFyclswXX0ke3RpbWVBcnJbMV19JHt0aW1lQXJyWzJdfWA7XG4gICAgICAgICAgbGFzdENoYXRNc2cudGltZSA9IGAke2RhdGVBcnJbMV195pyIJHtkYXRlQXJyWzJdfeaXpSAke3RpbWVBcnJbMF195pe2JHt0aW1lQXJyWzFdfeWIhmA7XG4gICAgICAgICAgYXJyYXkucHVzaChsYXN0Q2hhdE1zZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0R3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdDaGF0TXNncyA9IHd4LmdldFN0b3JhZ2VTeW5jKGxpc3RHcm91cHNbaV0ucm9vbUlkICsgbXlOYW1lKSB8fCBbXTtcbiAgICAgICAgbGV0IGhpc3RvcnlDaGF0TXNncyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwicmVuZGVyZWRfXCIgKyBsaXN0R3JvdXBzW2ldLnJvb21JZCArIG15TmFtZSkgfHwgW107XG4gICAgICAgIGxldCBjdXJDaGF0TXNncyA9IGhpc3RvcnlDaGF0TXNncy5jb25jYXQobmV3Q2hhdE1zZ3MpO1xuXG4gICAgICAgIGlmIChjdXJDaGF0TXNncy5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgbGFzdENoYXRNc2cgPSBjdXJDaGF0TXNnc1tjdXJDaGF0TXNncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA9IG5ld0NoYXRNc2dzLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA+IDk5KSB7XG4gICAgICAgICAgICBsYXN0Q2hhdE1zZy51blJlYWRDb3VudCA9IFwiOTkrXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGRhdGVBcnIgPSBsYXN0Q2hhdE1zZy50aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKTtcbiAgICAgICAgICBsZXQgdGltZUFyciA9IGxhc3RDaGF0TXNnLnRpbWUuc3BsaXQoJyAnKVsxXS5zcGxpdCgnOicpO1xuICAgICAgICAgIGxldCBtb250aCA9IGRhdGVBcnJbMl0gPCAxMCA/ICcwJyArIGRhdGVBcnJbMl0gOiBkYXRlQXJyWzJdO1xuICAgICAgICAgIGxhc3RDaGF0TXNnLnRpbWUgPSBgJHtkYXRlQXJyWzFdfeaciCR7ZGF0ZUFyclsyXX3ml6UgJHt0aW1lQXJyWzBdfeaXtiR7dGltZUFyclsxXX3liIZgO1xuICAgICAgICAgIGxhc3RDaGF0TXNnLmRhdGVUaW1lTnVtID0gYCR7ZGF0ZUFyclsxXX0ke21vbnRofSR7dGltZUFyclswXX0ke3RpbWVBcnJbMV19JHt0aW1lQXJyWzJdfWA7XG4gICAgICAgICAgbGFzdENoYXRNc2cuZ3JvdXBOYW1lID0gbGlzdEdyb3Vwc1tpXS5uYW1lO1xuICAgICAgICAgIGFycmF5LnB1c2gobGFzdENoYXRNc2cpO1xuICAgICAgICB9XG4gICAgICB9IC8vXHTmtYvor5XliJfooahcbiAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gXHRsZXQgbmV3U0VTU0lPTiA9IHtcbiAgICAgIC8vIFx0XHRpbmZvOiB7ZnJvbTogXCJ6ZHRlc3RcIiwgdG86IFwiemR0ZXN0MlwifSxcbiAgICAgIC8vIFx0XHRtaWQ6IFwidHh0V0VCSU1fNDI3YWI4YjEwY1wiLFxuICAgICAgLy8gXHRcdG1zZzoge3R5cGU6IFwidHh0XCIsIGRhdGE6IFt7ZGF0YTogXCLkuKLmmZrpq5jls7DpmL/nsr7pq5jls7DpmL/nsr7npZ7nhJXpq5jls7DpmL/nsr7npZ7nhJXpq5jls7DpmL/nsr7npZ7nhJXnpZ7nhJXlj5HkuKLlroxcIiwgdHlwZTogXCJ0eHRcIn1dfSxcbiAgICAgIC8vIFx0XHRzdHlsZTogXCJzZWxmXCIsXG4gICAgICAvLyBcdFx0dGltZTogXCIyMDE5LTItMTggMTY6NTk6MjVcIixcbiAgICAgIC8vIFx0XHR1c2VybmFtZTogXCJ6ZHRlc3RcIiArIGksXG4gICAgICAvLyBcdFx0eW91cm5hbWU6IFwiemR0ZXN0XCJcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHRsZXQgZGF0ZUFyciA9IG5ld1NFU1NJT04udGltZS5zcGxpdCgnICcpWzBdLnNwbGl0KCctJylcbiAgICAgIC8vIFx0bGV0IHRpbWVBcnIgPSBuZXdTRVNTSU9OLnRpbWUuc3BsaXQoJyAnKVsxXS5zcGxpdCgnOicpXG4gICAgICAvLyBcdG5ld1NFU1NJT04udGltZSA9IGAke2RhdGVBcnJbMV195pyIJHtkYXRlQXJyWzJdfeaXpSAke3RpbWVBcnJbMF195pe2JHt0aW1lQXJyWzFdfeWIhmBcbiAgICAgIC8vIFx0YXJyYXkucHVzaChuZXdTRVNTSU9OKVxuICAgICAgLy8gfVxuXG5cbiAgICAgIGFycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGIuZGF0ZVRpbWVOdW0gLSBhLmRhdGVUaW1lTnVtO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSxcblxuICAgIG9wZW5TZWFyY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaF9idG46IGZhbHNlLFxuICAgICAgICBzZWFyY2hfY2hhdHM6IHRydWUsXG4gICAgICAgIGdvdG9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uU2VhcmNoOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBsZXQgc2VhcmNoVmFsdWUgPSB2YWwuZGV0YWlsLnZhbHVlO1xuICAgICAgbGV0IGNoYXJ0TGlzdCA9IHRoaXMuZ2V0Q2hhdExpc3QoKTtcbiAgICAgIGxldCBzZXJjaExpc3QgPSBbXTtcbiAgICAgIGNoYXJ0TGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoU3RyaW5nKGl0ZW0udXNlcm5hbWUpLmluZGV4T2Yoc2VhcmNoVmFsdWUpICE9IC0xKSB7XG4gICAgICAgICAgc2VyY2hMaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYXJyOiBzZXJjaExpc3RcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hfYnRuOiB0cnVlLFxuICAgICAgICBzZWFyY2hfY2hhdHM6IGZhbHNlLFxuICAgICAgICBhcnI6IHRoaXMuZ2V0Q2hhdExpc3QoKSxcbiAgICAgICAgdW5SZWFkU3BvdE51bTogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51blJlYWRNZXNzYWdlTnVtID4gOTkgPyAnOTkrJyA6IGdldEFwcCgpLmdsb2JhbERhdGEudW5SZWFkTWVzc2FnZU51bSxcbiAgICAgICAgZ290b3A6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsZWFySW5wdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlucHV0X2NvZGU6ICcnLFxuICAgICAgICBzaG93X2NsZWFyOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbklucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IGlucHV0VmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcblxuICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzaG93X2NsZWFyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzaG93X2NsZWFyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhYl9jb250YWN0czogZnVuY3Rpb24gKCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi9tYWluL21haW4/bXlOYW1lPVwiICsgd3guZ2V0U3RvcmFnZVN5bmMoXCJteVVzZXJuYW1lXCIpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3NlX21hc2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaF9idG46IHRydWUsXG4gICAgICAgIHNlYXJjaF9jaGF0czogZmFsc2UsXG4gICAgICAgIHNob3dfbWFzazogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdGFiX3NldHRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiLi4vc2V0dGluZy9zZXR0aW5nXCJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdGFiX25vdGlmaWNhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgIHVybDogXCIuLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uXCJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaW50b19jaGF0Um9vbTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgZGV0YWlsID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07IC8v576k6IGK55qEY2hhdFR5cGXlsYXnhLbmmK9zaW5nbGVjaGF077yf6ISP5pWw5o2u77yfIOetiXNka+mHjeWGmeWQjuaVtOeQhuS4gOS4i+Wtl+autVxuXG4gICAgICBpZiAoZGV0YWlsLmNoYXRUeXBlID09ICdncm91cGNoYXQnIHx8IGRldGFpbC5jaGF0VHlwZSA9PSAnY2hhdFJvb20nIHx8IGRldGFpbC5ncm91cE5hbWUpIHtcbiAgICAgICAgdGhpcy5pbnRvX2dyb3VwQ2hhdFJvb20oZGV0YWlsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW50b19zaW5nbGVDaGF0Um9vbShkZXRhaWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy9cdOWNleiBilxuICAgIGludG9fc2luZ2xlQ2hhdFJvb206IGZ1bmN0aW9uIChkZXRhaWwpIHtcbiAgICAgIHZhciBteSA9IHd4LmdldFN0b3JhZ2VTeW5jKFwibXlVc2VybmFtZVwiKTtcbiAgICAgIHZhciBuYW1lTGlzdCA9IHtcbiAgICAgICAgbXlOYW1lOiBteSxcbiAgICAgICAgeW91cjogZGV0YWlsLnVzZXJuYW1lXG4gICAgICB9O1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCIuLi9jaGF0cm9vbS9jaGF0cm9vbT91c2VybmFtZT1cIiArIEpTT04uc3RyaW5naWZ5KG5hbWVMaXN0KVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvL1x0576k6IGKIOWSjCDogYrlpKnlrqQg77yI5Lik5Liq5qaC5b+177yJXG4gICAgaW50b19ncm91cENoYXRSb29tOiBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICB2YXIgbXkgPSB3eC5nZXRTdG9yYWdlU3luYyhcIm15VXNlcm5hbWVcIik7XG4gICAgICB2YXIgbmFtZUxpc3QgPSB7XG4gICAgICAgIG15TmFtZTogbXksXG4gICAgICAgIHlvdXI6IGRldGFpbC5ncm91cE5hbWUsXG4gICAgICAgIGdyb3VwSWQ6IGRldGFpbC5pbmZvLnRvXG4gICAgICB9O1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCIuLi9ncm91cENoYXRSb29tL2dyb3VwQ2hhdFJvb20/dXNlcm5hbWU9XCIgKyBKU09OLnN0cmluZ2lmeShuYW1lTGlzdClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsX2NoYXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGRldGFpbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtO1xuICAgICAgbGV0IG5hbWVMaXN0O1xuXG4gICAgICBpZiAoZGV0YWlsLmNoYXRUeXBlID09ICdncm91cGNoYXQnIHx8IGRldGFpbC5jaGF0VHlwZSA9PSAnY2hhdFJvb20nKSB7XG4gICAgICAgIG5hbWVMaXN0ID0ge1xuICAgICAgICAgIHlvdXI6IGRldGFpbC5pbmZvLnRvXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lTGlzdCA9IHtcbiAgICAgICAgICB5b3VyOiBkZXRhaWwudXNlcm5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIG15TmFtZSA9IHd4LmdldFN0b3JhZ2VTeW5jKFwibXlVc2VybmFtZVwiKTtcbiAgICAgIHZhciBjdXJyZW50UGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IFwi5Yig6Zmk6K+l6IGK5aSp6K6w5b2VXCIsXG4gICAgICAgIGNvbmZpcm1UZXh0OiBcIuWIoOmZpFwiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhuYW1lTGlzdC55b3VyICsgbXlOYW1lLCBcIlwiKTtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwicmVuZGVyZWRfXCIgKyBuYW1lTGlzdC55b3VyICsgbXlOYW1lLCBcIlwiKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlWzBdKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlWzBdLm9uU2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwLmZpcmUoXCJlbS5jaGF0LnNlc3Npb24ucmVtb3ZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge31cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBrZXlzID0gW107XG4gICAgICBsZXQgdmFsLCBkYXRhO1xuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgZGF0YSA9IHRoYXQuJGRhdGE7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5MiwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGF0LiRzZXQoZGF0YSwga2V5MiwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFkYXRhW2tleTJdKSB7XG4gICAgICAgICAgICAgIHRoYXQuJHNldChkYXRhLCBrZXkyLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YSA9IGRhdGFba2V5Ml07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2hhdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jaGF0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==