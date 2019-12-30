import Vue from 'vue';
import App from './App';

import txt from "./components/txt.vue";
Vue.component("txt", txt);

import emoji from "./components/emoji.vue";
Vue.component("emoji", emoji);

import imgDiy from "./components/img-diy.vue";
Vue.component("img-diy", imgDiy);

import videoDiy from "./components/video-diy.vue";
Vue.component("video-diy", videoDiy);

import audioDiy from "./components/audio-diy.vue";
Vue.component("audio-diy", audioDiy);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
});
app.$mount();
