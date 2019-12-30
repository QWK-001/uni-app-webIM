<template>
<swiper :class="show" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
	<block>
		<swiper-item>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map1" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map2" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map3" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
		</swiper-item>
	</block>
	<block class="second">
		<swiper-item>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map4" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map5" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
			<view class="emoji_item">
				<image v-for="(item, index) in emojiObj.map6" :key="index" :src="( emojiObj.path + item )" @tap="sendEmoji" :data-emoji="index"></image>
			</view>
		</swiper-item>
	</block>
</swiper>
</template>

<script>
let WebIM = require("../../../../../utils/WebIM")["default"];
let msgType = require("../../../msgtype");
let EMOJI_STATUS = {
  OPENED: "showEmoji",
  CLOSED: "emoji_list"
};

export default {
  data() {
    return {
      show: EMOJI_STATUS.CLOSED,
      emoji: WebIM.Emoji,
      emojiObj: WebIM.EmojiObj,
      interval: 5000,
      duration: 1000,
      autoplay: false,
      indicatorDots: true // 显示面板指示点

    };
  },

  components: {},
  props: {},
  methods: {
    openEmoji() {
      this.setData({
        show: EMOJI_STATUS.OPENED
      });
    },

    cancelEmoji() {
      this.setData({
        show: EMOJI_STATUS.CLOSED
      });
    },

    // 输出 emoji
    sendEmoji(event) {
      var emoji = event.target.dataset.emoji;
      this.$emit("newEmojiStr", {
        msg: emoji,
        type: msgType.EMOJI
      }, {
        bubbles: true,
        composed: true
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
@import "./emoji.css";
</style>