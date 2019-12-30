(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!********************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var txt = function txt() {return __webpack_require__.e(/*! import() | components/txt */ "components/txt").then(__webpack_require__.bind(null, /*! ./components/txt.vue */ 222));};


_vue.default.component("txt", txt);var emoji = function emoji() {return __webpack_require__.e(/*! import() | components/emoji */ "components/emoji").then(__webpack_require__.bind(null, /*! ./components/emoji.vue */ 227));};


_vue.default.component("emoji", emoji);var imgDiy = function imgDiy() {return __webpack_require__.e(/*! import() | components/img-diy */ "components/img-diy").then(__webpack_require__.bind(null, /*! ./components/img-diy.vue */ 232));};


_vue.default.component("img-diy", imgDiy);var videoDiy = function videoDiy() {return __webpack_require__.e(/*! import() | components/video-diy */ "components/video-diy").then(__webpack_require__.bind(null, /*! ./components/video-diy.vue */ 237));};


_vue.default.component("video-diy", videoDiy);var audioDiy = function audioDiy() {return __webpack_require__.e(/*! import() | components/audio-diy */ "components/audio-diy").then(__webpack_require__.bind(null, /*! ./components/audio-diy.vue */ 242));};


_vue.default.component("audio-diy", audioDiy);

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 10:
/*!*********************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 11);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 11:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
// require("sdk/libs/strophe");
var WebIM = __webpack_require__(/*! ./utils/WebIM */ 12)["default"];
var msgStorage = __webpack_require__(/*! ./comps/chat/msgstorage */ 65);
var msgType = __webpack_require__(/*! ./comps/chat/msgtype */ 68);
var ToastPannel = __webpack_require__(/*! ./comps/toast/toast */ 70);
var disp = __webpack_require__(/*! ./utils/broadcast */ 69);
var logout = false;
function ack(receiveMsg) {
  // 处理未读消息回执
  var bodyId = receiveMsg.id; // 需要发送已读回执的消息id

  var ackMsg = new WebIM.message("read", WebIM.conn.getUniqueId());
  ackMsg.set({
    id: bodyId,
    to: receiveMsg.from });

  WebIM.conn.send(ackMsg.body);
}
function onMessageError(err) {
  if (err.type === "error") {
    wx.showToast({
      title: err.errorText });

    return false;
  }

  return true;
}
function getCurrentRoute() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return currentPage.route;
}
function calcUnReadSpot(message) {
  var myName = wx.getStorageSync("myUsername");
  var members = wx.getStorageSync("member") || []; //好友

  var listGroups = wx.getStorageSync('listGroup') || []; //群组

  var allMembers = members.concat(listGroups);
  var count = allMembers.reduce(function (result, curMember, idx) {
    var chatMsgs;

    if (curMember.roomId) {
      chatMsgs = wx.getStorageSync(curMember.roomId + myName.toLowerCase()) || [];
    } else {
      chatMsgs = wx.getStorageSync(curMember.name.toLowerCase() + myName.toLowerCase()) || [];
    }

    return result + chatMsgs.length;
  }, 0);
  getApp().globalData.unReadMessageNum = count;
  disp.fire("em.xmpp.unreadspot", message);
}var _default =

{
  globalData: {
    ToastPannel: ToastPannel,
    unReadMessageNum: 0,
    userInfo: null,
    saveFriendList: [],
    saveGroupInvitedList: [],
    isIPX: false //是否为iphone X
    ,
    conn: {
      closed: false,
      curOpenOpt: {},

      open: function open(opt) {
        wx.showLoading({
          title: '正在初始化客户端...',
          mask: true });

        this.curOpenOpt = opt;
        WebIM.conn.open(opt);
        this.closed = false;
      },

      reopen: function reopen() {
        if (this.closed) {
          //this.open(this.curOpenOpt);
          WebIM.conn.open(this.curOpenOpt);
          this.closed = false;
        }
      } },


    // onShow(){
    // 	WebIM.conn.reconnect();
    // },
    // onHide(){
    // 	WebIM.conn.close();
    // 	WebIM.conn.stopHeartBeat();
    // },
    // onUnload(){
    // 	WebIM.conn.close();
    // 	WebIM.conn.stopHeartBeat();
    // 	wx.redirectTo({
    // 		url: "../login/login?myName=" + myName
    // 	});
    // },
    onLoginSuccess: function onLoginSuccess(myName) {
      wx.hideLoading();
      wx.redirectTo({
        url: "../chat/chat?myName=" + myName });

    },

    getUserInfo: function getUserInfo(cb) {
      var me = this;

      if (this.userInfo) {
        typeof cb == "function" && cb(this.userInfo);
      } else {
        // 调用登录接口
        wx.login({
          success: function success() {
            wx.getUserInfo({
              success: function success(res) {
                me.userInfo = res.userInfo;
                typeof cb == "function" && cb(me.userInfo);
              } });


          } });


      }
    },

    checkIsIPhoneX: function checkIsIPhoneX() {
      var me = this;
      wx.getSystemInfo({
        success: function success(res) {
          // 根据 model 进行判断
          if (res.model.search('iPhone X') != -1) {
            me.isIPX = true;
          }
        } });

    } },


  // getPage(pageName){
  // 	var pages = getCurrentPages();
  // 	return pages.find(function(page){
  // 		return page.__route__ == pageName;
  // 	});
  // },
  onLaunch: function onLaunch() {
    // 调用 API 从本地缓存中获取数据
    wx.setInnerAudioOption({
      obeyMuteSwitch: false });

    var me = this;
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs); // 

    disp.on("em.main.ready", function () {
      calcUnReadSpot();
    });
    disp.on("em.chatroom.leave", function () {
      calcUnReadSpot();
    });
    disp.on("em.chat.session.remove", function () {
      calcUnReadSpot();
    });
    disp.on('em.chat.audio.fileLoaded', function () {
      calcUnReadSpot();
    });
    disp.on('em.main.deleteFriend', function () {
      calcUnReadSpot();
    });
    disp.on('em.chat.audio.fileLoaded', function () {
      calcUnReadSpot();
    }); // 

    WebIM.conn.listen({
      onOpened: function onOpened(message) {
        if (getCurrentRoute() == "pages/login/login" || getCurrentRoute() == "pages/login_token/login_token") {
          me.globalData.onLoginSuccess(wx.getStorageSync("myUsername").toLowerCase());
        }
      },

      onReconnect: function onReconnect() {
        wx.showToast({
          title: "重连中...",
          duration: 2000 });

      },

      onSocketConnected: function onSocketConnected() {
        wx.showToast({
          title: "socket连接成功",
          duration: 2000 });

      },

      onClosed: function onClosed() {
        wx.showToast({
          title: "网络已断开",
          icon: 'none',
          duration: 2000 });

        wx.redirectTo({
          url: "../login/login" });

        me.globalData.conn.closed = true;
        WebIM.conn.close();
      },

      onInviteMessage: function onInviteMessage(message) {
        me.globalData.saveGroupInvitedList.push(message);
        disp.fire("em.xmpp.invite.joingroup", message); // wx.showModal({
        // 	title: message.from + " 已邀你入群 " + message.roomid,
        // 	success(){
        // 		disp.fire("em.xmpp.invite.joingroup", message);
        // 	},
        // 	error(){
        // 		disp.fire("em.xmpp.invite.joingroup", message);
        // 	}
        // });
      },

      onReadMessage: function onReadMessage(message) {//console.log('已读', message)
      },

      onPresence: function onPresence(message) {
        //console.log("onPresence", message);
        switch (message.type) {
          case "unsubscribe":
            // pages[0].moveFriend(message);
            break;
          // 好友邀请列表

          case "subscribe":
            if (message.status === "[resp:true]") {} else {
              // pages[0].handleFriendMsg(message);
              for (var i = 0; i < me.globalData.saveFriendList.length; i++) {
                if (me.globalData.saveFriendList[i].from === message.from) {
                  me.globalData.saveFriendList[i] = message;
                  disp.fire("em.xmpp.subscribe");
                  return;
                }
              }

              me.globalData.saveFriendList.push(message);
              disp.fire("em.xmpp.subscribe");
            }

            break;

          case "subscribed":
            wx.showToast({
              title: "添加成功",
              duration: 1000 });

            disp.fire("em.xmpp.subscribed");
            break;

          case "unsubscribed":
            // wx.showToast({
            // 	title: "已拒绝",
            // 	duration: 1000
            // });
            break;

          case "memberJoinPublicGroupSuccess":
            wx.showToast({
              title: "已进群",
              duration: 1000 });

            break;
          // 好友列表
          // case "subscribed":
          // 	let newFriendList = [];
          // 	for(let i = 0; i < me.globalData.saveFriendList.length; i++){
          // 		if(me.globalData.saveFriendList[i].from != message.from){
          // 			newFriendList.push(me.globalData.saveFriendList[i]);
          // 		}
          // 	}
          // 	me.globalData.saveFriendList = newFriendList;
          // 	break;
          // 删除好友

          case "unavailable":
            disp.fire("em.xmpp.contacts.remove");
            disp.fire("em.xmpp.group.leaveGroup", message);
            break;

          case 'deleteGroupChat':
            disp.fire("em.xmpp.invite.deleteGroup", message);
            break;

          case "leaveGroup":
            disp.fire("em.xmpp.group.leaveGroup", message);
            break;

          case "removedFromGroup":
            disp.fire("em.xmpp.group.leaveGroup", message);
            break;
          // case "joinChatRoomSuccess":
          // 	wx.showToast({
          // 		title: "JoinChatRoomSuccess",
          // 	});
          // 	break;
          // case "memberJoinChatRoomSuccess":
          // 	wx.showToast({
          // 		title: "memberJoinChatRoomSuccess",
          // 	});
          // 	break;
          // case "memberLeaveChatRoomSuccess":
          // 	wx.showToast({
          // 		title: "leaveChatRoomSuccess",
          // 	});
          // 	break;

          default:
            break;}

      },

      onRoster: function onRoster(message) {// let pages = getCurrentPages();
        // if(pages[0]){
        // 	pages[0].onShow();
        // }
      },

      onVideoMessage: function onVideoMessage(message) {
        console.log("onVideoMessage: ", message);

        if (message) {
          msgStorage.saveReceiveMsg(message, msgType.VIDEO);
        }

        calcUnReadSpot(message);
        ack(message);
      },

      onAudioMessage: function onAudioMessage(message) {
        console.log("onAudioMessage", message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.AUDIO);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      onCmdMessage: function onCmdMessage(message) {
        console.log("onCmdMessage", message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.CMD);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      // onLocationMessage(message){
      // 	console.log("Location message: ", message);
      // 	if(message){
      // 		msgStorage.saveReceiveMsg(message, msgType.LOCATION);
      // 	}
      // },
      onTextMessage: function onTextMessage(message) {
        console.log("onTextMessage", message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.TEXT);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      onEmojiMessage: function onEmojiMessage(message) {
        console.log("onEmojiMessage", message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.EMOJI);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      onPictureMessage: function onPictureMessage(message) {
        console.log("onPictureMessage", message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.IMAGE);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      onFileMessage: function onFileMessage(message) {
        console.log('onFileMessage', message);

        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.FILE);
          }

          calcUnReadSpot(message);
          ack(message);
        }
      },

      // 各种异常
      onError: function onError(error) {
        console.log(error); // 16: server-side close the websocket connection

        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED && !logout) {
          if (WebIM.conn.autoReconnectNumTotal < WebIM.conn.autoReconnectNumMax) {
            return;
          }

          wx.showToast({
            title: "server-side close the websocket connection",
            duration: 1000 });

          wx.redirectTo({
            url: "../login/login" });

          logout = true;
          return;
        } // 8: offline by multi login


        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_SERVER_ERROR) {
          wx.showToast({
            title: "offline by multi login",
            duration: 1000 });

          wx.redirectTo({
            url: "../login/login" });

        }

        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_OPEN_ERROR) {
          wx.hideLoading();
          disp.fire("em.xmpp.error.passwordErr"); // wx.showModal({
          // 	title: "用户名或密码错误",
          // 	confirmText: "OK",
          // 	showCancel: false
          // });
        }

        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_AUTH_ERROR) {
          wx.hideLoading();
          disp.fire("em.xmpp.error.tokenErr");
        }

        if (error.type == 'socket_error') {
          ///sendMsgError
          console.log('socket_errorsocket_error', error);
          wx.showToast({
            title: "网络已断开",
            icon: 'none',
            duration: 2000 });

          disp.fire("em.xmpp.error.sendMsgErr", error);
        }
      } });


    this.globalData.checkIsIPhoneX();
  },

  methods: {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 70:
/*!**********************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.vue?vue&type=template&id=41a24ffe& */ 71);
/* harmony import */ var _toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.vue?vue&type=style&index=0&lang=css& */ 73);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);

var script = {}



/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/*!*****************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue?vue&type=template&id=41a24ffe& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./toast.vue?vue&type=template&id=41a24ffe& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_template_id_41a24ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 72:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue?vue&type=template&id=41a24ffe& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 73:
/*!*******************************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./toast.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_toast_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/comps/toast/toast.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 76:
/*!*****************************************************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 77);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!********************************************************************!*\
  !*** /Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 76);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 75);
var render, staticRenderFns





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/lr/Documents/work/webim-weixin-xcx-ectype_uni/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL0FwcC52dWU/YjcyOSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9BcHAudnVlIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL2NvbXBzL3RvYXN0L3RvYXN0LnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy90b2FzdC90b2FzdC52dWU/NGI1NCIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy90b2FzdC90b2FzdC52dWU/YWJlZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy90b2FzdC90b2FzdC52dWU/YjMwZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9jb21wcy90b2FzdC90b2FzdC52dWU/NzE5NiIsIndlYnBhY2s6Ly8vL1VzZXJzL2xyL0RvY3VtZW50cy93b3JrL3dlYmltLXdlaXhpbi14Y3gtZWN0eXBlX3VuaS9BcHAudnVlPzhkZjMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvQXBwLnZ1ZT9iZjEwIiwid2VicGFjazovLy8vVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL0FwcC52dWU/NGRkOSJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJ0eHQiLCJlbW9qaSIsImltZ0RpeSIsInZpZGVvRGl5IiwiYXVkaW9EaXkiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50IiwiV2ViSU0iLCJyZXF1aXJlIiwibXNnU3RvcmFnZSIsIm1zZ1R5cGUiLCJUb2FzdFBhbm5lbCIsImRpc3AiLCJsb2dvdXQiLCJhY2siLCJyZWNlaXZlTXNnIiwiYm9keUlkIiwiaWQiLCJhY2tNc2ciLCJtZXNzYWdlIiwiY29ubiIsImdldFVuaXF1ZUlkIiwic2V0IiwidG8iLCJmcm9tIiwic2VuZCIsImJvZHkiLCJvbk1lc3NhZ2VFcnJvciIsImVyciIsInR5cGUiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiZXJyb3JUZXh0IiwiZ2V0Q3VycmVudFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJjdXJyZW50UGFnZSIsImxlbmd0aCIsInJvdXRlIiwiY2FsY1VuUmVhZFNwb3QiLCJteU5hbWUiLCJnZXRTdG9yYWdlU3luYyIsIm1lbWJlcnMiLCJsaXN0R3JvdXBzIiwiYWxsTWVtYmVycyIsImNvbmNhdCIsImNvdW50IiwicmVkdWNlIiwicmVzdWx0IiwiY3VyTWVtYmVyIiwiaWR4IiwiY2hhdE1zZ3MiLCJyb29tSWQiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJnZXRBcHAiLCJnbG9iYWxEYXRhIiwidW5SZWFkTWVzc2FnZU51bSIsImZpcmUiLCJ1c2VySW5mbyIsInNhdmVGcmllbmRMaXN0Iiwic2F2ZUdyb3VwSW52aXRlZExpc3QiLCJpc0lQWCIsImNsb3NlZCIsImN1ck9wZW5PcHQiLCJvcGVuIiwib3B0Iiwic2hvd0xvYWRpbmciLCJtYXNrIiwicmVvcGVuIiwib25Mb2dpblN1Y2Nlc3MiLCJoaWRlTG9hZGluZyIsInJlZGlyZWN0VG8iLCJ1cmwiLCJnZXRVc2VySW5mbyIsImNiIiwibWUiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjaGVja0lzSVBob25lWCIsImdldFN5c3RlbUluZm8iLCJtb2RlbCIsInNlYXJjaCIsIm9uTGF1bmNoIiwic2V0SW5uZXJBdWRpb09wdGlvbiIsIm9iZXlNdXRlU3dpdGNoIiwibG9ncyIsInVuc2hpZnQiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJvbiIsImxpc3RlbiIsIm9uT3BlbmVkIiwib25SZWNvbm5lY3QiLCJkdXJhdGlvbiIsIm9uU29ja2V0Q29ubmVjdGVkIiwib25DbG9zZWQiLCJpY29uIiwiY2xvc2UiLCJvbkludml0ZU1lc3NhZ2UiLCJwdXNoIiwib25SZWFkTWVzc2FnZSIsIm9uUHJlc2VuY2UiLCJzdGF0dXMiLCJpIiwib25Sb3N0ZXIiLCJvblZpZGVvTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzYXZlUmVjZWl2ZU1zZyIsIlZJREVPIiwib25BdWRpb01lc3NhZ2UiLCJBVURJTyIsIm9uQ21kTWVzc2FnZSIsIkNNRCIsIm9uVGV4dE1lc3NhZ2UiLCJURVhUIiwib25FbW9qaU1lc3NhZ2UiLCJFTU9KSSIsIm9uUGljdHVyZU1lc3NhZ2UiLCJJTUFHRSIsIm9uRmlsZU1lc3NhZ2UiLCJGSUxFIiwib25FcnJvciIsImVycm9yIiwic3RhdHVzQ29kZSIsIldFQklNX0NPTk5DVElPTl9ESVNDT05ORUNURUQiLCJhdXRvUmVjb25uZWN0TnVtVG90YWwiLCJhdXRvUmVjb25uZWN0TnVtTWF4IiwiV0VCSU1fQ09OTkNUSU9OX1NFUlZFUl9FUlJPUiIsIldFQklNX0NPTk5DVElPTl9PUEVOX0VSUk9SIiwiV0VCSU1fQ09OTkNUSU9OX0FVVEhfRVJST1IiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2lEQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHVFOzs7QUFHQUEsYUFBSUMsU0FBSixDQUFjLEtBQWQsRUFBcUJDLEdBQXJCLEU7OztBQUdBRixhQUFJQyxTQUFKLENBQWMsT0FBZCxFQUF1QkUsS0FB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LDRLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQVlmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuaW1wb3J0IHR4dCBmcm9tIFwiLi9jb21wb25lbnRzL3R4dC52dWVcIjtcblZ1ZS5jb21wb25lbnQoXCJ0eHRcIiwgdHh0KTtcblxuaW1wb3J0IGVtb2ppIGZyb20gXCIuL2NvbXBvbmVudHMvZW1vamkudnVlXCI7XG5WdWUuY29tcG9uZW50KFwiZW1vamlcIiwgZW1vamkpO1xuXG5pbXBvcnQgaW1nRGl5IGZyb20gXCIuL2NvbXBvbmVudHMvaW1nLWRpeS52dWVcIjtcblZ1ZS5jb21wb25lbnQoXCJpbWctZGl5XCIsIGltZ0RpeSk7XG5cbmltcG9ydCB2aWRlb0RpeSBmcm9tIFwiLi9jb21wb25lbnRzL3ZpZGVvLWRpeS52dWVcIjtcblZ1ZS5jb21wb25lbnQoXCJ2aWRlby1kaXlcIiwgdmlkZW9EaXkpO1xuXG5pbXBvcnQgYXVkaW9EaXkgZnJvbSBcIi4vY29tcG9uZW50cy9hdWRpby1kaXkudnVlXCI7XG5WdWUuY29tcG9uZW50KFwiYXVkaW8tZGl5XCIsIGF1ZGlvRGl5KTtcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cbkFwcC5tcFR5cGUgPSAnYXBwJztcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgLi4uQXBwXG59KTtcbmFwcC4kbW91bnQoKTsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJcbi8vIHJlcXVpcmUoXCJzZGsvbGlicy9zdHJvcGhlXCIpO1xubGV0IFdlYklNID0gcmVxdWlyZShcIi4vdXRpbHMvV2ViSU1cIilbXCJkZWZhdWx0XCJdO1xubGV0IG1zZ1N0b3JhZ2UgPSByZXF1aXJlKFwiLi9jb21wcy9jaGF0L21zZ3N0b3JhZ2VcIik7XG5sZXQgbXNnVHlwZSA9IHJlcXVpcmUoXCIuL2NvbXBzL2NoYXQvbXNndHlwZVwiKTtcbmxldCBUb2FzdFBhbm5lbCA9IHJlcXVpcmUoXCIuL2NvbXBzL3RvYXN0L3RvYXN0XCIpO1xubGV0IGRpc3AgPSByZXF1aXJlKFwiLi91dGlscy9icm9hZGNhc3RcIik7XG5sZXQgbG9nb3V0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY2socmVjZWl2ZU1zZykge1xuICAvLyDlpITnkIbmnKror7vmtojmga/lm57miadcbiAgdmFyIGJvZHlJZCA9IHJlY2VpdmVNc2cuaWQ7IC8vIOmcgOimgeWPkemAgeW3suivu+WbnuaJp+eahOa2iOaBr2lkXG5cbiAgdmFyIGFja01zZyA9IG5ldyBXZWJJTS5tZXNzYWdlKFwicmVhZFwiLCBXZWJJTS5jb25uLmdldFVuaXF1ZUlkKCkpO1xuICBhY2tNc2cuc2V0KHtcbiAgICBpZDogYm9keUlkLFxuICAgIHRvOiByZWNlaXZlTXNnLmZyb21cbiAgfSk7XG4gIFdlYklNLmNvbm4uc2VuZChhY2tNc2cuYm9keSk7XG59XG5mdW5jdGlvbiBvbk1lc3NhZ2VFcnJvcihlcnIpIHtcbiAgaWYgKGVyci50eXBlID09PSBcImVycm9yXCIpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IGVyci5lcnJvclRleHRcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRSb3V0ZSgpIHtcbiAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIGxldCBjdXJyZW50UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gY3VycmVudFBhZ2Uucm91dGU7XG59XG5mdW5jdGlvbiBjYWxjVW5SZWFkU3BvdChtZXNzYWdlKSB7XG4gIGxldCBteU5hbWUgPSB3eC5nZXRTdG9yYWdlU3luYyhcIm15VXNlcm5hbWVcIik7XG4gIGxldCBtZW1iZXJzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJtZW1iZXJcIikgfHwgW107IC8v5aW95Y+LXG5cbiAgdmFyIGxpc3RHcm91cHMgPSB3eC5nZXRTdG9yYWdlU3luYygnbGlzdEdyb3VwJykgfHwgW107IC8v576k57uEXG5cbiAgbGV0IGFsbE1lbWJlcnMgPSBtZW1iZXJzLmNvbmNhdChsaXN0R3JvdXBzKTtcbiAgbGV0IGNvdW50ID0gYWxsTWVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgY3VyTWVtYmVyLCBpZHgpIHtcbiAgICBsZXQgY2hhdE1zZ3M7XG5cbiAgICBpZiAoY3VyTWVtYmVyLnJvb21JZCkge1xuICAgICAgY2hhdE1zZ3MgPSB3eC5nZXRTdG9yYWdlU3luYyhjdXJNZW1iZXIucm9vbUlkICsgbXlOYW1lLnRvTG93ZXJDYXNlKCkpIHx8IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGF0TXNncyA9IHd4LmdldFN0b3JhZ2VTeW5jKGN1ck1lbWJlci5uYW1lLnRvTG93ZXJDYXNlKCkgKyBteU5hbWUudG9Mb3dlckNhc2UoKSkgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdCArIGNoYXRNc2dzLmxlbmd0aDtcbiAgfSwgMCk7XG4gIGdldEFwcCgpLmdsb2JhbERhdGEudW5SZWFkTWVzc2FnZU51bSA9IGNvdW50O1xuICBkaXNwLmZpcmUoXCJlbS54bXBwLnVucmVhZHNwb3RcIiwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIFRvYXN0UGFubmVsLFxuICAgIHVuUmVhZE1lc3NhZ2VOdW06IDAsXG4gICAgdXNlckluZm86IG51bGwsXG4gICAgc2F2ZUZyaWVuZExpc3Q6IFtdLFxuICAgIHNhdmVHcm91cEludml0ZWRMaXN0OiBbXSxcbiAgICBpc0lQWDogZmFsc2UgLy/mmK/lkKbkuLppcGhvbmUgWFxuICAgICxcbiAgICBjb25uOiB7XG4gICAgICBjbG9zZWQ6IGZhbHNlLFxuICAgICAgY3VyT3Blbk9wdDoge30sXG5cbiAgICAgIG9wZW4ob3B0KSB7XG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICB0aXRsZTogJ+ato+WcqOWIneWni+WMluWuouaIt+erry4uLicsXG4gICAgICAgICAgbWFzazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJPcGVuT3B0ID0gb3B0O1xuICAgICAgICBXZWJJTS5jb25uLm9wZW4ob3B0KTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIHJlb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgLy90aGlzLm9wZW4odGhpcy5jdXJPcGVuT3B0KTtcbiAgICAgICAgICBXZWJJTS5jb25uLm9wZW4odGhpcy5jdXJPcGVuT3B0KTtcbiAgICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LFxuICAgIC8vIG9uU2hvdygpe1xuICAgIC8vIFx0V2ViSU0uY29ubi5yZWNvbm5lY3QoKTtcbiAgICAvLyB9LFxuICAgIC8vIG9uSGlkZSgpe1xuICAgIC8vIFx0V2ViSU0uY29ubi5jbG9zZSgpO1xuICAgIC8vIFx0V2ViSU0uY29ubi5zdG9wSGVhcnRCZWF0KCk7XG4gICAgLy8gfSxcbiAgICAvLyBvblVubG9hZCgpe1xuICAgIC8vIFx0V2ViSU0uY29ubi5jbG9zZSgpO1xuICAgIC8vIFx0V2ViSU0uY29ubi5zdG9wSGVhcnRCZWF0KCk7XG4gICAgLy8gXHR3eC5yZWRpcmVjdFRvKHtcbiAgICAvLyBcdFx0dXJsOiBcIi4uL2xvZ2luL2xvZ2luP215TmFtZT1cIiArIG15TmFtZVxuICAgIC8vIFx0fSk7XG4gICAgLy8gfSxcbiAgICBvbkxvZ2luU3VjY2VzczogZnVuY3Rpb24gKG15TmFtZSkge1xuICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICB1cmw6IFwiLi4vY2hhdC9jaGF0P215TmFtZT1cIiArIG15TmFtZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy51c2VySW5mbykge1xuICAgICAgICB0eXBlb2YgY2IgPT0gXCJmdW5jdGlvblwiICYmIGNiKHRoaXMudXNlckluZm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6LCD55So55m75b2V5o6l5Y+jXG4gICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIG1lLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHR5cGVvZiBjYiA9PSBcImZ1bmN0aW9uXCIgJiYgY2IobWUudXNlckluZm8pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hlY2tJc0lQaG9uZVg6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgLy8g5qC55o2uIG1vZGVsIOi/m+ihjOWIpOaWrVxuICAgICAgICAgIGlmIChyZXMubW9kZWwuc2VhcmNoKCdpUGhvbmUgWCcpICE9IC0xKSB7XG4gICAgICAgICAgICBtZS5pc0lQWCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gZ2V0UGFnZShwYWdlTmFtZSl7XG4gIC8vIFx0dmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIC8vIFx0cmV0dXJuIHBhZ2VzLmZpbmQoZnVuY3Rpb24ocGFnZSl7XG4gIC8vIFx0XHRyZXR1cm4gcGFnZS5fX3JvdXRlX18gPT0gcGFnZU5hbWU7XG4gIC8vIFx0fSk7XG4gIC8vIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOiwg+eUqCBBUEkg5LuO5pys5Zyw57yT5a2Y5Lit6I635Y+W5pWw5o2uXG4gICAgd3guc2V0SW5uZXJBdWRpb09wdGlvbih7XG4gICAgICBvYmV5TXV0ZVN3aXRjaDogZmFsc2VcbiAgICB9KTtcbiAgICB2YXIgbWUgPSB0aGlzO1xuICAgIHZhciBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJsb2dzXCIpIHx8IFtdO1xuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKTtcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhcImxvZ3NcIiwgbG9ncyk7IC8vIFxuXG4gICAgZGlzcC5vbihcImVtLm1haW4ucmVhZHlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsY1VuUmVhZFNwb3QoKTtcbiAgICB9KTtcbiAgICBkaXNwLm9uKFwiZW0uY2hhdHJvb20ubGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsY1VuUmVhZFNwb3QoKTtcbiAgICB9KTtcbiAgICBkaXNwLm9uKFwiZW0uY2hhdC5zZXNzaW9uLnJlbW92ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxjVW5SZWFkU3BvdCgpO1xuICAgIH0pO1xuICAgIGRpc3Aub24oJ2VtLmNoYXQuYXVkaW8uZmlsZUxvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGNVblJlYWRTcG90KCk7XG4gICAgfSk7XG4gICAgZGlzcC5vbignZW0ubWFpbi5kZWxldGVGcmllbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxjVW5SZWFkU3BvdCgpO1xuICAgIH0pO1xuICAgIGRpc3Aub24oJ2VtLmNoYXQuYXVkaW8uZmlsZUxvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGNVblJlYWRTcG90KCk7XG4gICAgfSk7IC8vIFxuXG4gICAgV2ViSU0uY29ubi5saXN0ZW4oe1xuICAgICAgb25PcGVuZWQobWVzc2FnZSkge1xuICAgICAgICBpZiAoZ2V0Q3VycmVudFJvdXRlKCkgPT0gXCJwYWdlcy9sb2dpbi9sb2dpblwiIHx8IGdldEN1cnJlbnRSb3V0ZSgpID09IFwicGFnZXMvbG9naW5fdG9rZW4vbG9naW5fdG9rZW5cIikge1xuICAgICAgICAgIG1lLmdsb2JhbERhdGEub25Mb2dpblN1Y2Nlc3Mod3guZ2V0U3RvcmFnZVN5bmMoXCJteVVzZXJuYW1lXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvblJlY29ubmVjdCgpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCLph43ov57kuK0uLi5cIixcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIG9uU29ja2V0Q29ubmVjdGVkKCkge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcInNvY2tldOi/nuaOpeaIkOWKn1wiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgb25DbG9zZWQoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwi572R57uc5bey5pat5byAXCIsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICB1cmw6IFwiLi4vbG9naW4vbG9naW5cIlxuICAgICAgICB9KTtcbiAgICAgICAgbWUuZ2xvYmFsRGF0YS5jb25uLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIFdlYklNLmNvbm4uY2xvc2UoKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uSW52aXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIG1lLmdsb2JhbERhdGEuc2F2ZUdyb3VwSW52aXRlZExpc3QucHVzaChtZXNzYWdlKTtcbiAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5pbnZpdGUuam9pbmdyb3VwXCIsIG1lc3NhZ2UpOyAvLyB3eC5zaG93TW9kYWwoe1xuICAgICAgICAvLyBcdHRpdGxlOiBtZXNzYWdlLmZyb20gKyBcIiDlt7LpgoDkvaDlhaXnvqQgXCIgKyBtZXNzYWdlLnJvb21pZCxcbiAgICAgICAgLy8gXHRzdWNjZXNzKCl7XG4gICAgICAgIC8vIFx0XHRkaXNwLmZpcmUoXCJlbS54bXBwLmludml0ZS5qb2luZ3JvdXBcIiwgbWVzc2FnZSk7XG4gICAgICAgIC8vIFx0fSxcbiAgICAgICAgLy8gXHRlcnJvcigpe1xuICAgICAgICAvLyBcdFx0ZGlzcC5maXJlKFwiZW0ueG1wcC5pbnZpdGUuam9pbmdyb3VwXCIsIG1lc3NhZ2UpO1xuICAgICAgICAvLyBcdH1cbiAgICAgICAgLy8gfSk7XG4gICAgICB9LFxuXG4gICAgICBvblJlYWRNZXNzYWdlKG1lc3NhZ2UpIHsvL2NvbnNvbGUubG9nKCflt7Lor7snLCBtZXNzYWdlKVxuICAgICAgfSxcblxuICAgICAgb25QcmVzZW5jZShtZXNzYWdlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJvblByZXNlbmNlXCIsIG1lc3NhZ2UpO1xuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJ1bnN1YnNjcmliZVwiOlxuICAgICAgICAgICAgLy8gcGFnZXNbMF0ubW92ZUZyaWVuZChtZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIOWlveWPi+mCgOivt+WIl+ihqFxuXG4gICAgICAgICAgY2FzZSBcInN1YnNjcmliZVwiOlxuICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSBcIltyZXNwOnRydWVdXCIpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwYWdlc1swXS5oYW5kbGVGcmllbmRNc2cobWVzc2FnZSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWUuZ2xvYmFsRGF0YS5zYXZlRnJpZW5kTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChtZS5nbG9iYWxEYXRhLnNhdmVGcmllbmRMaXN0W2ldLmZyb20gPT09IG1lc3NhZ2UuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgbWUuZ2xvYmFsRGF0YS5zYXZlRnJpZW5kTGlzdFtpXSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICBkaXNwLmZpcmUoXCJlbS54bXBwLnN1YnNjcmliZVwiKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtZS5nbG9iYWxEYXRhLnNhdmVGcmllbmRMaXN0LnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICAgIGRpc3AuZmlyZShcImVtLnhtcHAuc3Vic2NyaWJlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJzdWJzY3JpYmVkXCI6XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLmt7vliqDmiJDlip9cIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5zdWJzY3JpYmVkXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwidW5zdWJzY3JpYmVkXCI6XG4gICAgICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgLy8gXHR0aXRsZTogXCLlt7Lmi5Lnu51cIixcbiAgICAgICAgICAgIC8vIFx0ZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibWVtYmVySm9pblB1YmxpY0dyb3VwU3VjY2Vzc1wiOlxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5bey6L+b576kXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIOWlveWPi+WIl+ihqFxuICAgICAgICAgIC8vIGNhc2UgXCJzdWJzY3JpYmVkXCI6XG4gICAgICAgICAgLy8gXHRsZXQgbmV3RnJpZW5kTGlzdCA9IFtdO1xuICAgICAgICAgIC8vIFx0Zm9yKGxldCBpID0gMDsgaSA8IG1lLmdsb2JhbERhdGEuc2F2ZUZyaWVuZExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIC8vIFx0XHRpZihtZS5nbG9iYWxEYXRhLnNhdmVGcmllbmRMaXN0W2ldLmZyb20gIT0gbWVzc2FnZS5mcm9tKXtcbiAgICAgICAgICAvLyBcdFx0XHRuZXdGcmllbmRMaXN0LnB1c2gobWUuZ2xvYmFsRGF0YS5zYXZlRnJpZW5kTGlzdFtpXSk7XG4gICAgICAgICAgLy8gXHRcdH1cbiAgICAgICAgICAvLyBcdH1cbiAgICAgICAgICAvLyBcdG1lLmdsb2JhbERhdGEuc2F2ZUZyaWVuZExpc3QgPSBuZXdGcmllbmRMaXN0O1xuICAgICAgICAgIC8vIFx0YnJlYWs7XG4gICAgICAgICAgLy8g5Yig6Zmk5aW95Y+LXG5cbiAgICAgICAgICBjYXNlIFwidW5hdmFpbGFibGVcIjpcbiAgICAgICAgICAgIGRpc3AuZmlyZShcImVtLnhtcHAuY29udGFjdHMucmVtb3ZlXCIpO1xuICAgICAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5ncm91cC5sZWF2ZUdyb3VwXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdkZWxldGVHcm91cENoYXQnOlxuICAgICAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5pbnZpdGUuZGVsZXRlR3JvdXBcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJsZWF2ZUdyb3VwXCI6XG4gICAgICAgICAgICBkaXNwLmZpcmUoXCJlbS54bXBwLmdyb3VwLmxlYXZlR3JvdXBcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJyZW1vdmVkRnJvbUdyb3VwXCI6XG4gICAgICAgICAgICBkaXNwLmZpcmUoXCJlbS54bXBwLmdyb3VwLmxlYXZlR3JvdXBcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBjYXNlIFwiam9pbkNoYXRSb29tU3VjY2Vzc1wiOlxuICAgICAgICAgIC8vIFx0d3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAvLyBcdFx0dGl0bGU6IFwiSm9pbkNoYXRSb29tU3VjY2Vzc1wiLFxuICAgICAgICAgIC8vIFx0fSk7XG4gICAgICAgICAgLy8gXHRicmVhaztcbiAgICAgICAgICAvLyBjYXNlIFwibWVtYmVySm9pbkNoYXRSb29tU3VjY2Vzc1wiOlxuICAgICAgICAgIC8vIFx0d3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAvLyBcdFx0dGl0bGU6IFwibWVtYmVySm9pbkNoYXRSb29tU3VjY2Vzc1wiLFxuICAgICAgICAgIC8vIFx0fSk7XG4gICAgICAgICAgLy8gXHRicmVhaztcbiAgICAgICAgICAvLyBjYXNlIFwibWVtYmVyTGVhdmVDaGF0Um9vbVN1Y2Nlc3NcIjpcbiAgICAgICAgICAvLyBcdHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgLy8gXHRcdHRpdGxlOiBcImxlYXZlQ2hhdFJvb21TdWNjZXNzXCIsXG4gICAgICAgICAgLy8gXHR9KTtcbiAgICAgICAgICAvLyBcdGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvblJvc3RlcihtZXNzYWdlKSB7Ly8gbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICAgIC8vIGlmKHBhZ2VzWzBdKXtcbiAgICAgICAgLy8gXHRwYWdlc1swXS5vblNob3coKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSxcblxuICAgICAgb25WaWRlb01lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVmlkZW9NZXNzYWdlOiBcIiwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBtc2dTdG9yYWdlLnNhdmVSZWNlaXZlTXNnKG1lc3NhZ2UsIG1zZ1R5cGUuVklERU8pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsY1VuUmVhZFNwb3QobWVzc2FnZSk7XG4gICAgICAgIGFjayhtZXNzYWdlKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uQXVkaW9NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkF1ZGlvTWVzc2FnZVwiLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmIChvbk1lc3NhZ2VFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgbXNnU3RvcmFnZS5zYXZlUmVjZWl2ZU1zZyhtZXNzYWdlLCBtc2dUeXBlLkFVRElPKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxjVW5SZWFkU3BvdChtZXNzYWdlKTtcbiAgICAgICAgICBhY2sobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uQ21kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DbWRNZXNzYWdlXCIsIG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKG9uTWVzc2FnZUVycm9yKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtc2dTdG9yYWdlLnNhdmVSZWNlaXZlTXNnKG1lc3NhZ2UsIG1zZ1R5cGUuQ01EKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxjVW5SZWFkU3BvdChtZXNzYWdlKTtcbiAgICAgICAgICBhY2sobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIG9uTG9jYXRpb25NZXNzYWdlKG1lc3NhZ2Upe1xuICAgICAgLy8gXHRjb25zb2xlLmxvZyhcIkxvY2F0aW9uIG1lc3NhZ2U6IFwiLCBtZXNzYWdlKTtcbiAgICAgIC8vIFx0aWYobWVzc2FnZSl7XG4gICAgICAvLyBcdFx0bXNnU3RvcmFnZS5zYXZlUmVjZWl2ZU1zZyhtZXNzYWdlLCBtc2dUeXBlLkxPQ0FUSU9OKTtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gfSxcbiAgICAgIG9uVGV4dE1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVGV4dE1lc3NhZ2VcIiwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBpZiAob25NZXNzYWdlRXJyb3IobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1zZ1N0b3JhZ2Uuc2F2ZVJlY2VpdmVNc2cobWVzc2FnZSwgbXNnVHlwZS5URVhUKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxjVW5SZWFkU3BvdChtZXNzYWdlKTtcbiAgICAgICAgICBhY2sobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uRW1vamlNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkVtb2ppTWVzc2FnZVwiLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmIChvbk1lc3NhZ2VFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgbXNnU3RvcmFnZS5zYXZlUmVjZWl2ZU1zZyhtZXNzYWdlLCBtc2dUeXBlLkVNT0pJKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxjVW5SZWFkU3BvdChtZXNzYWdlKTtcbiAgICAgICAgICBhY2sobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uUGljdHVyZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uUGljdHVyZU1lc3NhZ2VcIiwgbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICBpZiAob25NZXNzYWdlRXJyb3IobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1zZ1N0b3JhZ2Uuc2F2ZVJlY2VpdmVNc2cobWVzc2FnZSwgbXNnVHlwZS5JTUFHRSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsY1VuUmVhZFNwb3QobWVzc2FnZSk7XG4gICAgICAgICAgYWNrKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBvbkZpbGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRmlsZU1lc3NhZ2UnLCBtZXNzYWdlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgIGlmIChvbk1lc3NhZ2VFcnJvcihtZXNzYWdlKSkge1xuICAgICAgICAgICAgbXNnU3RvcmFnZS5zYXZlUmVjZWl2ZU1zZyhtZXNzYWdlLCBtc2dUeXBlLkZJTEUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGNVblJlYWRTcG90KG1lc3NhZ2UpO1xuICAgICAgICAgIGFjayhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8g5ZCE56eN5byC5bi4XG4gICAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gMTY6IHNlcnZlci1zaWRlIGNsb3NlIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvblxuXG4gICAgICAgIGlmIChlcnJvci50eXBlID09IFdlYklNLnN0YXR1c0NvZGUuV0VCSU1fQ09OTkNUSU9OX0RJU0NPTk5FQ1RFRCAmJiAhbG9nb3V0KSB7XG4gICAgICAgICAgaWYgKFdlYklNLmNvbm4uYXV0b1JlY29ubmVjdE51bVRvdGFsIDwgV2ViSU0uY29ubi5hdXRvUmVjb25uZWN0TnVtTWF4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcInNlcnZlci1zaWRlIGNsb3NlIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvblwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogXCIuLi9sb2dpbi9sb2dpblwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbG9nb3V0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gODogb2ZmbGluZSBieSBtdWx0aSBsb2dpblxuXG5cbiAgICAgICAgaWYgKGVycm9yLnR5cGUgPT0gV2ViSU0uc3RhdHVzQ29kZS5XRUJJTV9DT05OQ1RJT05fU0VSVkVSX0VSUk9SKSB7XG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIm9mZmxpbmUgYnkgbXVsdGkgbG9naW5cIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICB1cmw6IFwiLi4vbG9naW4vbG9naW5cIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnR5cGUgPT0gV2ViSU0uc3RhdHVzQ29kZS5XRUJJTV9DT05OQ1RJT05fT1BFTl9FUlJPUikge1xuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5lcnJvci5wYXNzd29yZEVyclwiKTsgLy8gd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAvLyBcdHRpdGxlOiBcIueUqOaIt+WQjeaIluWvhueggemUmeivr1wiLFxuICAgICAgICAgIC8vIFx0Y29uZmlybVRleHQ6IFwiT0tcIixcbiAgICAgICAgICAvLyBcdHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IudHlwZSA9PSBXZWJJTS5zdGF0dXNDb2RlLldFQklNX0NPTk5DVElPTl9BVVRIX0VSUk9SKSB7XG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBkaXNwLmZpcmUoXCJlbS54bXBwLmVycm9yLnRva2VuRXJyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yLnR5cGUgPT0gJ3NvY2tldF9lcnJvcicpIHtcbiAgICAgICAgICAvLy9zZW5kTXNnRXJyb3JcbiAgICAgICAgICBjb25zb2xlLmxvZygnc29ja2V0X2Vycm9yc29ja2V0X2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLnvZHnu5zlt7Lmlq3lvIBcIixcbiAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzcC5maXJlKFwiZW0ueG1wcC5lcnJvci5zZW5kTXNnRXJyXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgdGhpcy5nbG9iYWxEYXRhLmNoZWNrSXNJUGhvbmVYKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge31cbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RvYXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWEyNGZmZSZcIlxudmFyIHNjcmlwdCA9IHt9XG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RvYXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MWEyNGZmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MWEyNGZmZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdG9hc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxYTI0ZmZlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQxYTI0ZmZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9sci9Eb2N1bWVudHMvd29yay93ZWJpbS13ZWl4aW4teGN4LWVjdHlwZV91bmkvY29tcHMvdG9hc3QvdG9hc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdG9hc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxYTI0ZmZlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90b2FzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stY3VzdG9tLWJsb2NrLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90b2FzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLWN1c3RvbS1ibG9jay1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1jdXN0b20tYmxvY2stbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NjNTRhNGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NjNTRhNGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvbHIvRG9jdW1lbnRzL3dvcmsvd2ViaW0td2VpeGluLXhjeC1lY3R5cGVfdW5pL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9