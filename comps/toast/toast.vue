<template>
<view name="toast">
	<view class="toast_content_box">
		<view class="toast_content" v-if="isHidefil">
			<view class="toast_content_border"></view>
			<view class="toast_content_icon">
				<image class="toast_icon_img" src="../../static/images/filled@2x.png"></image>
			</view>
			<view class="toast_content_text">
				{{content}}
			</view>
		</view>

		<view class="toast_content_box">
			<view class="toast_content" v-if="isHidescss">
				<view class="toast_content_border toast_success"></view>
				<view class="toast_content_icon">
					<image class="toast_icon_img" src="../../static/images/success@2x.png"></image>
				</view>
				<view class="toast_content_text">
					{{content}}
				</view>
			</view>
		</view>
	</view>
</view>

<!-- <template name="toast_success">
	<view class='toast_content_box'>
		<view class="toast_content" wx:if="{{ isHide }}">
			<view class="toast_content_border"></view>
			<view class="toast_content_icon">
				<image class="toast_icon_img" src="../../images/success@2x.png"/>
			</view>
			<view class="toast_content_text">
				{{content}}
			</view>
		</view>
	</view>
</template> -->
</template>

<script>
let _compData = {
  '_toast_.isHide': false,
  // 控制组件显示隐藏
  '_toast_.content': '' // 显示的内容

};
let toastPannel = {
  // toast显示的方法
  toastSuccess: function (data) {
    let self = this;
    this.setData({
      '_toast_.isHidescss': true,
      '_toast_.content': data
    });
    setTimeout(function () {
      self.setData({
        '_toast_.isHidescss': false
      }); //自定义方法，根据编辑需求
    }, 2000);
  },
  toastFilled: function (data) {
    let self = this;
    this.setData({
      '_toast_.isHidefil': true,
      '_toast_.content': data
    });
    setTimeout(function () {
      self.setData({
        '_toast_.isHidefil': false
      }); //自定义方法，根据编辑需求
    }, 2000);
  }
};

function ToastPannel() {
  //构造方法关联了当前页的方法及相关代码
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage; // 小程序最新版把原型链干掉了。。。换种写法

  Object.assign(curPage, toastPannel); // 附加到page上，方便访问

  curPage.toastPannel = this; // 把组件的数据合并到页面的data对象中

  curPage.setData(_compData);
  return this;
}

module.exports = {
  ToastPannel
}
</script>
<style>
@import "./toast.css";
</style>