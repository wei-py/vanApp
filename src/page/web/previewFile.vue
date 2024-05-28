<script setup>
// import VuePdfApp from "vue3-pdf-app";
// import "vue3-pdf-app/dist/icons/main.css";
import VueOfficeDocx from "@vue-office/docx"; //引入VueOfficeDocx组件
import VueOfficePdf from "@vue-office/pdf";
// import VueOfficeExcel from "@vue-office/excel";
import "@vue-office/docx/lib/index.css"; //引入相关样式

const query = getQuery();
const officeUrl = "https://view.officeapps.live.com/op/view.aspx?src=";

const url = query.url.replace("http:", "https:");
const wordUrl = "https://view.xdocin.com/view?src=";

const showShare = ref(false);
const options = [
  [
    { name: "微信", icon: "wechat" },
    // { name: "朋友圈", icon: "wechat-moments" },
    { name: "微博", icon: "weibo" },
    { name: "QQ", icon: "qq" },
  ],
  [
    { name: "复制链接", icon: "link" },
    { name: "分享海报", icon: "poster" },
    { name: "二维码", icon: "qrcode" },
    { name: "小程序码", icon: "weapp-qrcode" },
  ],
];

function onClickRight() {
  showShare.value = true;
}

function onSelect(option) {
  console.log(option, 3333)
}

eventManage({ onRefresh: () => location.reload(), onClickRight });
</script>

<template>
  <!-- <VueOfficeDocx class="flex-1" v-if="url.endsWith('.doc') || url.endsWith('.docx')" :src="url" />
  <VueOfficeExcel class="flex-1" v-else-if="url.endsWith('.xls') || url.endsWith('.xlsx')" :src="url" /> -->
  <!-- <iframe class="flex-1" v-if="url.endsWith('.doc') || url.endsWith('.docx')" :src="wordUrl + encodeURIComponent(url)" :update-title="false" /> -->
  <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
  <VueOfficeDocx class="flex-1" v-if="url.endsWith('.doc') || url.endsWith('.docx')" :src="url" />
  <iframe class="flex-1" v-else-if="url.endsWith('.xls') || url.endsWith('.xlsx')" :src="officeUrl + url" :update-title="false" />
  <iframe class="flex-1" v-else-if="url.endsWith('.ppt') || url.endsWith('.pptx')" :src="officeUrl + url" :update-title="false" />
  <VueOfficePdf class="flex-1" v-else :src="url"></VueOfficePdf>
</template>
