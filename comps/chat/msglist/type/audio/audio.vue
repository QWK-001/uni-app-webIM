<template>
<view class="audio-player" @tap="audioPlay" :style="'opacity: ' + opcity">
	<text class="time">语音消息 {{ time }}</text>
	<view class="controls play-btn" @tap="audioPlay">
		<image :src="(style == 'self'? '../../../../../static/images/voicemsgmy.png' : '../../../../../static/images/voicemsg.png')"></image>
	</view>
	<!-- <view
		class="controls pause-btn"
		wx:if="{{ curStatus == playStatus.PLAYING }}"
		bind:tap="audioPause">
		<image bind:tap="audioPause" src="../../../../../images/audioPause.png"></image>
	</view> -->
</view>
</template>

<script>
let audioCtxFc = require("./audioCtxFactory");
let playStatus = require("./playStatus");

export default {
  data() {
    return {
      playStatus: playStatus,
      curStatus: playStatus.STOP,
      time: "0'",
      opcity: 1,
      __comps__: {
        audioCtx: null
      },
      style: ""
    };
  },

  components: {},
  props: {
    msg: {
      type: Object,
      val: {}
    }
  },
  obeyMuteSwitch: false,
  autoplay: true,

  // lifetimes
  created() {},

  beforeMount() {
    this.setData({
      time: this.properties.msg.msg.length + "''",
      style: this.properties.msg.style
    });
  },

  moved() {},

  destroyed() {
    let audioCtx = this.$data.__comps__.audioCtx = audioCtxFc.getCtx(this.msg.mid);
    this.audioPause(audioCtx);
    this.delEvent(); //audioCtx.destroy();
  },

  mounted() {
    let self = this;
    let curl = '';
    let audioCtx = this.$data.__comps__.audioCtx = audioCtxFc.getCtx(this.msg.mid);
    audioCtx.autoplay = false;
    audioCtx.loop = false; //

    this.onPlaying = () => {
      //console.log("onPlaying", JSON.stringify(this.data));
      this.setData({
        curStatus: playStatus.PLAYING
      });
      wx.inter && clearInterval(wx.inter);
      wx.inter = setInterval(() => {
        let opcity = this.opcity;
        this.setData({
          opcity: opcity == 1 ? 0.4 : 1
        });
      }, 500);
    };

    this.onPause = () => {
      // console.log("onPause", JSON.stringify(this.data));
      // 第二次播放会立即抛出一个异常的 onPause
      if (parseInt(this.time, 10) < 1) {
        return;
      }

      this.setData({
        curStatus: playStatus.PAUSE,
        opcity: 1 //time: "0'",

      });
    };

    this.onDone = () => {
      // console.log("onDone", JSON.stringify(this.data));
      this.setData({
        curStatus: playStatus.STOP,
        opcity: 1 //time: "0'",

      });
      clearInterval(wx.inter);
    }; // 多次播放会丢失这个回调


    this.onTimeUpdate = () => {
      this.setData({
        time: (audioCtx.currentTime >> 0) + "'"
      });
    };

    this.onWait = () => {
      wx.showToast({
        title: "下载中...",
        duration: 1000
      });
    };

    this.addEvent();
  },

  methods: {
    audioPlay() {
      wx.inter && clearInterval(wx.inter);
      let audioCtx = this.$data.__comps__.audioCtx;
      var curl = '';
      wx.downloadFile({
        url: this.msg.msg.data,
        header: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "audio/mp3",
          Authorization: "Bearer " + this.msg.msg.token
        },

        success(res) {
          curl = res.tempFilePath;
          console.log('音频本地', audioCtx); //renderableMsg.msg.url = res.tempFilePath;

          audioCtx.src = curl;
          audioCtx.play();
        },

        fail(e) {
          console.log("downloadFile failed", e);
          wx.showToast({
            title: "下载失败",
            duration: 1000
          });
        }

      });
    },

    audioPause(auCtx) {
      //let audioCtx = this.data.$data.__comps__.audioCtx;
      let audioCtx = this.$data.__comps__.audioCtx = audioCtxFc.getCtx(this.msg.mid) || auCtx;
      audioCtx && audioCtx.pause();
    },

    addEvent() {
      let audioCtx = this.$data.__comps__.audioCtx;
      audioCtx.onPlay(this.onPlaying);
      audioCtx.onPause(this.onPause);
      audioCtx.onWaiting(this.onPause);
      audioCtx.onStop(this.onDone);
      audioCtx.onEnded(this.onDone);
      audioCtx.onError(this.onDone);
      audioCtx.onWaiting(this.onWait); //audioCtx.onTimeUpdate(this.onTimeUpdate);
    },

    delEvent() {
      let audioCtx = this.$data.__comps__.audioCtx;
      audioCtx.offPlay(this.onPlaying);
      audioCtx.offPause(this.onPause);
      audioCtx.offWaiting(this.onPause);
      audioCtx.offStop(this.onDone);
      audioCtx.offEnded(this.onDone);
      audioCtx.offError(this.onDone);
      audioCtx.offWaiting(this.onWait); // 多次播放会丢失这个回调，所以不用卸载
      // audioCtx.offTimeUpdate(this.onTimeUpdate);
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
@import "./audio.css";
</style>