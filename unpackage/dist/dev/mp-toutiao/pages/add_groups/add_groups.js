(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add_groups/add_groups"],{

/***/ 198:
/*!***************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/main.js?{"page":"pages%2Fadd_groups%2Fadd_groups"} ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _add_groups = _interopRequireDefault(__webpack_require__(/*! ./pages/add_groups/add_groups.vue */ 199));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_add_groups.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 199:
/*!********************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_groups.vue?vue&type=template&id=59bd141e& */ 200);
/* harmony import */ var _add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_groups.vue?vue&type=script&lang=js& */ 202);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_groups.vue?vue&type=style&index=0&lang=css& */ 204);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 200:
/*!***************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=template&id=59bd141e& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_groups.vue?vue&type=template&id=59bd141e& */ 201);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_template_id_59bd141e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 201:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=template&id=59bd141e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 202:
/*!*********************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_groups.vue?vue&type=script&lang=js& */ 203);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 203:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var WebIM = __webpack_require__(/*! ../../utils/WebIM */ 12)["default"];var _default =

{
  data: function data() {
    return {
      friendList: [],
      // 好友列表
      groupName: "",
      // 群名称
      groupDec: "",
      // 群简介
      allowJoin: true,
      // 是否允许任何人加入
      allowApprove: false,
      // 加入需要审批
      noAllowJoin: false,
      // 不允许任何人加入
      allowInvite: false,
      // 允许群人员邀请
      inviteFriend: [],
      // 需要加好友ID
      owner: "" // = myName
    };

  },

  components: {},
  props: {},
  onLoad: function onLoad(options) {
    this.setData({
      owner: JSON.parse(options.owner).myName });

  },
  onShow: function onShow() {
    var me = this; // 获取当前用户的好友信息

    WebIM.conn.getRoster({
      success: function success(roster) {
        var member = [];

        for (var i = 0; i < roster.length; i++) {
          if (roster[i].subscription == "both") {
            member.push(roster[i]);
          }
        }

        me.setData({
          friendList: member });

      } });

  },
  methods: {
    getGroupName: function getGroupName(e) {
      this.setData({
        groupName: e.detail.value });

    },
    getGroupDec: function getGroupDec(e) {
      this.setData({
        groupDec: e.detail.value });

    },
    allowJoinFun: function allowJoinFun(e) {
      this.setData({
        allowJoin: Boolean(e.detail.value) || false });

    },
    allowApproveFun: function allowApproveFun(e) {
      this.setData({
        allowApprove: Boolean(e.detail.value) || false });

    },
    noAllowJoinFun: function noAllowJoinFun(e) {
      this.setData({
        noAllowJoin: Boolean(e.detail.value) || false });

    },
    allowInviteFun: function allowInviteFun(e) {
      this.setData({
        allowInvite: Boolean(e.detail.value) || false });

    },
    inviteFriendFun: function inviteFriendFun(e) {
      this.setData({
        inviteFriend: e.detail.value });

    },
    // 创建群组
    createGroup: function createGroup() {
      var me = this;
      var allGroups = getApp().globalData.groupList;

      if (!this.groupName.trim()) {
        wx.showModal({
          title: "请输入群名",
          confirmText: "OK",
          showCancel: false });

        return;
      }

      if (allGroups.reduce(function (result, v, k) {
        return result || v.name == me.groupName;
      }, false)) {
        wx.showModal({
          title: "群名被占用",
          confirmText: "OK",
          showCancel: false });

        return;
      }

      var options = {
        data: {
          groupname: this.groupName,
          desc: this.groupDec,
          members: this.inviteFriend,
          "public": this.allowJoin,
          // approval: this.data.allowApprove,
          // allowinvites: this.data.allowInvite,
          owner: this.owner },

        success: function success(respData) {
          wx.showToast({
            title: "添加成功",
            duration: 2000,
            success: function success(res) {
              setTimeout(function () {return wx.navigateTo({
                  url: "../groups/groups?myName=" + me.owner });},
              2000);
            } });

        },
        error: function error(err) {
          wx.showToast({
            title: err.data.error_description });

        } };

      WebIM.conn.createGroupNew(options);
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

/***/ 204:
/*!*****************************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add_groups.vue?vue&type=style&index=0&lang=css& */ 205);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_groups_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 205:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/pages/add_groups/add_groups.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[198,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2FkZF9ncm91cHMvYWRkX2dyb3Vwcy52dWU/MjNhNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9hZGRfZ3JvdXBzL2FkZF9ncm91cHMudnVlPzg3YzUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvcGFnZXMvYWRkX2dyb3Vwcy9hZGRfZ3JvdXBzLnZ1ZT8wZmQ5Iiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2FkZF9ncm91cHMvYWRkX2dyb3Vwcy52dWU/M2JmYyIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9hZGRfZ3JvdXBzL2FkZF9ncm91cHMudnVlIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL3BhZ2VzL2FkZF9ncm91cHMvYWRkX2dyb3Vwcy52dWU/MmIwOCIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9wYWdlcy9hZGRfZ3JvdXBzL2FkZF9ncm91cHMudnVlP2U3NzEiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJXZWJJTSIsInJlcXVpcmUiLCJkYXRhIiwiZnJpZW5kTGlzdCIsImdyb3VwTmFtZSIsImdyb3VwRGVjIiwiYWxsb3dKb2luIiwiYWxsb3dBcHByb3ZlIiwibm9BbGxvd0pvaW4iLCJhbGxvd0ludml0ZSIsImludml0ZUZyaWVuZCIsIm93bmVyIiwiY29tcG9uZW50cyIsInByb3BzIiwib25Mb2FkIiwib3B0aW9ucyIsInNldERhdGEiLCJKU09OIiwicGFyc2UiLCJteU5hbWUiLCJvblNob3ciLCJtZSIsImNvbm4iLCJnZXRSb3N0ZXIiLCJzdWNjZXNzIiwicm9zdGVyIiwibWVtYmVyIiwiaSIsImxlbmd0aCIsInN1YnNjcmlwdGlvbiIsInB1c2giLCJtZXRob2RzIiwiZ2V0R3JvdXBOYW1lIiwiZSIsImRldGFpbCIsInZhbHVlIiwiZ2V0R3JvdXBEZWMiLCJhbGxvd0pvaW5GdW4iLCJCb29sZWFuIiwiYWxsb3dBcHByb3ZlRnVuIiwibm9BbGxvd0pvaW5GdW4iLCJhbGxvd0ludml0ZUZ1biIsImludml0ZUZyaWVuZEZ1biIsImNyZWF0ZUdyb3VwIiwiYWxsR3JvdXBzIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsImdyb3VwTGlzdCIsInRyaW0iLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29uZmlybVRleHQiLCJzaG93Q2FuY2VsIiwicmVkdWNlIiwicmVzdWx0IiwidiIsImsiLCJuYW1lIiwiZ3JvdXBuYW1lIiwiZGVzYyIsIm1lbWJlcnMiLCJyZXNwRGF0YSIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwicmVzIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJlcnJvciIsImVyciIsImVycm9yX2Rlc2NyaXB0aW9uIiwiY3JlYXRlR3JvdXBOZXciLCJvYmoiLCJjYWxsYmFjayIsInRoYXQiLCJrZXlzIiwidmFsIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInNwbGl0IiwiJGRhdGEiLCJrZXkyIiwiaW5kZXgiLCIkc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBLHdDQUFtQjs7QUFFbkI7QUFDQSw0RztBQUNBQSxVQUFVLENBQUNDLG1CQUFELENBQVYsQzs7Ozs7Ozs7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QUFoQixFQUFzQixFQUF0QjtBQUNEO0FBQ0Y7O0FBRURqRixjQUFJLEdBQUdBLElBQUksQ0FBQ2lGLElBQUQsQ0FBWDtBQUNELFNBVkQ7QUFXRCxPQWZEO0FBZ0JBVCxjQUFRLElBQUlBLFFBQVEsRUFBcEI7QUFDRCxLQS9HTSxFQWxESSxFOzs7Ozs7Ozs7Ozs7O0FDN0RmO0FBQUE7QUFBQTtBQUFBO0FBQTh4QyxDQUFnQix3ckNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FsekMsdUMiLCJmaWxlIjoicGFnZXMvYWRkX2dyb3Vwcy9hZGRfZ3JvdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnICAgICAgICAgICAgXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2FkZF9ncm91cHMvYWRkX2dyb3Vwcy52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9hZGRfZ3JvdXBzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OWJkMTQxZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hZGRfZ3JvdXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYWRkX2dyb3Vwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWRkX2dyb3Vwcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTliZDE0MWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTliZDE0MWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FkZF9ncm91cHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5YmQxNDFlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU5YmQxNDFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvcGFnZXMvYWRkX2dyb3Vwcy9hZGRfZ3JvdXBzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2FkZF9ncm91cHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5YmQxNDFlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2FkZF9ncm91cHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYWRkX2dyb3Vwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG52YXIgV2ViSU0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvV2ViSU1cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyaWVuZExpc3Q6IFtdLFxuICAgICAgLy8g5aW95Y+L5YiX6KGoXG4gICAgICBncm91cE5hbWU6IFwiXCIsXG4gICAgICAvLyDnvqTlkI3np7BcbiAgICAgIGdyb3VwRGVjOiBcIlwiLFxuICAgICAgLy8g576k566A5LuLXG4gICAgICBhbGxvd0pvaW46IHRydWUsXG4gICAgICAvLyDmmK/lkKblhYHorrjku7vkvZXkurrliqDlhaVcbiAgICAgIGFsbG93QXBwcm92ZTogZmFsc2UsXG4gICAgICAvLyDliqDlhaXpnIDopoHlrqHmiblcbiAgICAgIG5vQWxsb3dKb2luOiBmYWxzZSxcbiAgICAgIC8vIOS4jeWFgeiuuOS7u+S9leS6uuWKoOWFpVxuICAgICAgYWxsb3dJbnZpdGU6IGZhbHNlLFxuICAgICAgLy8g5YWB6K64576k5Lq65ZGY6YKA6K+3XG4gICAgICBpbnZpdGVGcmllbmQ6IFtdLFxuICAgICAgLy8g6ZyA6KaB5Yqg5aW95Y+LSURcbiAgICAgIG93bmVyOiBcIlwiIC8vID0gbXlOYW1lXG5cbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHt9LFxuICBwcm9wczoge30sXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgb3duZXI6IEpTT04ucGFyc2Uob3B0aW9ucy5vd25lcikubXlOYW1lXG4gICAgfSk7XG4gIH0sXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZSA9IHRoaXM7IC8vIOiOt+WPluW9k+WJjeeUqOaIt+eahOWlveWPi+S/oeaBr1xuXG4gICAgV2ViSU0uY29ubi5nZXRSb3N0ZXIoe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJvc3Rlcikge1xuICAgICAgICB2YXIgbWVtYmVyID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3N0ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocm9zdGVyW2ldLnN1YnNjcmlwdGlvbiA9PSBcImJvdGhcIikge1xuICAgICAgICAgICAgbWVtYmVyLnB1c2gocm9zdGVyW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5zZXREYXRhKHtcbiAgICAgICAgICBmcmllbmRMaXN0OiBtZW1iZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRHcm91cE5hbWU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBncm91cE5hbWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldEdyb3VwRGVjOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZ3JvdXBEZWM6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFsbG93Sm9pbkZ1bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFsbG93Sm9pbjogQm9vbGVhbihlLmRldGFpbC52YWx1ZSkgfHwgZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWxsb3dBcHByb3ZlRnVuOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYWxsb3dBcHByb3ZlOiBCb29sZWFuKGUuZGV0YWlsLnZhbHVlKSB8fCBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBub0FsbG93Sm9pbkZ1bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIG5vQWxsb3dKb2luOiBCb29sZWFuKGUuZGV0YWlsLnZhbHVlKSB8fCBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhbGxvd0ludml0ZUZ1bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFsbG93SW52aXRlOiBCb29sZWFuKGUuZGV0YWlsLnZhbHVlKSB8fCBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBpbnZpdGVGcmllbmRGdW46IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpbnZpdGVGcmllbmQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOWIm+W7uue+pOe7hFxuICAgIGNyZWF0ZUdyb3VwOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgbGV0IGFsbEdyb3VwcyA9IGdldEFwcCgpLmdsb2JhbERhdGEuZ3JvdXBMaXN0O1xuXG4gICAgICBpZiAoIXRoaXMuZ3JvdXBOYW1lLnRyaW0oKSkge1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiBcIuivt+i+k+WFpee+pOWQjVwiLFxuICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsbEdyb3Vwcy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgdiwgaykge1xuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IHYubmFtZSA9PSBtZS5ncm91cE5hbWU7XG4gICAgICB9LCBmYWxzZSkpIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogXCLnvqTlkI3ooqvljaDnlKhcIixcbiAgICAgICAgICBjb25maXJtVGV4dDogXCJPS1wiLFxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZ3JvdXBuYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICBkZXNjOiB0aGlzLmdyb3VwRGVjLFxuICAgICAgICAgIG1lbWJlcnM6IHRoaXMuaW52aXRlRnJpZW5kLFxuICAgICAgICAgIFwicHVibGljXCI6IHRoaXMuYWxsb3dKb2luLFxuICAgICAgICAgIC8vIGFwcHJvdmFsOiB0aGlzLmRhdGEuYWxsb3dBcHByb3ZlLFxuICAgICAgICAgIC8vIGFsbG93aW52aXRlczogdGhpcy5kYXRhLmFsbG93SW52aXRlLFxuICAgICAgICAgIG93bmVyOiB0aGlzLm93bmVyXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwRGF0YSkge1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLmt7vliqDmiJDlip9cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCIuLi9ncm91cHMvZ3JvdXBzP215TmFtZT1cIiArIG1lLm93bmVyXG4gICAgICAgICAgICAgIH0pLCAyMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IGVyci5kYXRhLmVycm9yX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBXZWJJTS5jb25uLmNyZWF0ZUdyb3VwTmV3KG9wdGlvbnMpO1xuICAgIH0sXG4gICAgc2V0RGF0YTogZnVuY3Rpb24gKG9iaiwgY2FsbGJhY2spIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCBrZXlzID0gW107XG4gICAgICBsZXQgdmFsLCBkYXRhO1xuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgZGF0YSA9IHRoYXQuJGRhdGE7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5MiwgaW5kZXgpIHtcbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGF0LiRzZXQoZGF0YSwga2V5MiwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFkYXRhW2tleTJdKSB7XG4gICAgICAgICAgICAgIHRoYXQuJHNldChkYXRhLCBrZXkyLCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YSA9IGRhdGFba2V5Ml07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYWRkX2dyb3Vwcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hZGRfZ3JvdXBzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==