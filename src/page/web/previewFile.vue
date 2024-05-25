<script setup>
// import VuePdfApp from "vue3-pdf-app";
// import "vue3-pdf-app/dist/icons/main.css";
const query = getQuery();
const url = ref(query.url.replace("http:", "https:"));
const officeUrl = ref("https://view.officeapps.live.com/op/view.aspx?src=");
</script>

<template>
  <iframe v-if="!url.endsWith('.pdf')" :src="officeUrl + url" :update-title="false" />
  <!-- <iframe ref="iframe" v-if="!url.endsWith('.pdf')" :src="url" :update-title="false" class=" flex-1 border-0" allowfullscreen allow-scripts /> -->
  <!-- <vue-pdf-app  v-else class="flex-1" theme="dark" :pdf="url"></vue-pdf-app> -->
  <!-- <vue-pdf-app v-else fileName="fileName" page-scale="page-fit" class="flex-1" theme="dark" :pdf="url"></vue-pdf-app> -->
  <PDFViewer v-else page-scale="page-fit" theme="dark" :src="url" />
</template>
