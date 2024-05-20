<script setup>
const dom = useDom();
const imgList = computed(() => dom.imgDoms);
const items = computed(() => {
  if (imgList.value) {
    return imgList.value.map((src) => ({ src, key: src, intro: src }));
  } else {
    return [];
  }
});


function changeImg(key) {
  dom.imgIndex = items.value.findIndex((item) => item.key == key)
}

function downloadMethod({ src }) {
  const srcs = src.split("/");
  const name = srcs[srcs.length - 1];
  // util.toast.error('功能更新中，目前无法下载,请使用浏览器下载')
  // window.open(src)

  postMsg({ func: 'saveImg', src, name })

  window.saveImg = (message) => {
    if (message == "success") showSuccessToast("下载成功, 请到相册查看");
    if (message == "error") showFailToast("下载失败");
    if (message == "downloaded") showSuccessToast("已下载，无需重复下载");
  };
}


</script>

<template>
  <div class="hidden">
    <template v-for="(src, index) in imgList" :key="index">
      <img :src="src" @click="changeImg(src)" class="view-box" />
      <!-- <template v-if="!isVideoFile(src)">
        <img :src="src" @click="() => {}" class="view-box" />
      </template>
      <template v-else>
        <video :src="src" @click="() => {}" class="view-box"></video>
      </template> -->
    </template>
    <photo-slider
      :items="items"
      :visible="dom.showPreviewImg"
      :index="dom.imgIndex"
      :downloadMethod="downloadMethod"
      :default-backdrop-opacity="0.7"
      @changeIndex="(i) => (dom.imgIndex = i)"
      @clickMask="dom.showPreviewImg = false"
      @closeModal="dom.showPreviewImg = false"
    ></photo-slider>
  </div>
</template>
