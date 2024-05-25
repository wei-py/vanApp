<script setup>
// import VuePdfApp from "vue3-pdf-app";
// import "vue3-pdf-app/dist/icons/main.css";
const query = getQuery();
const officeUrl = "https://view.officeapps.live.com/op/view.aspx?src=";

const url = query.url.replace("http:", "https:");
const wordUrl = "https://view.xdocin.com/view?src=";

// const event = useEvent();

// function onRefresh() {

// }

eventManage({ onRefresh: () => location.reload() });
</script>

<template>
  <iframe class="flex-1" v-if="url.endsWith('.doc') || url.endsWith('.docx')" :src="wordUrl + encodeURIComponent(url)" :update-title="false" />
  <iframe class="flex-1" v-else-if="url.endsWith('.xls') || url.endsWith('.xlsx')" :src="officeUrl + url" :update-title="false" />
  <!-- <iframe ref="iframe" v-if="!url.endsWith('.pdf')" :src="url" :update-title="false" class=" flex-1 border-0" allowfullscreen allow-scripts /> -->
  <!-- <vue-pdf-app  v-else class="flex-1" theme="dark" :pdf="url"></vue-pdf-app> -->
  <!-- <vue-pdf-app v-else fileName="fileName" page-scale="page-fit" class="flex-1" theme="dark" :pdf="url"></vue-pdf-app> -->
  <PDFViewer class="flex-1" v-else page-scale="page-fit" theme="dark" :src="url" />
</template>
