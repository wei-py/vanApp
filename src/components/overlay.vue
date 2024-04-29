<script setup>
const flag = useFlag();
</script>

<template>
  <van-overlay :show="flag.overlayShow" z-index="99" class="center !bg-[rgba(0,0,0,0.05)]">
    <!-- <van-loading vertical>
      <template #icon>
        <van-icon name="star" size="80" color="#ffab30" />
      </template>
      <span class="text-[#ffab30] text-[20px]">加载中...</span>
    </van-loading> -->
    <van-loading type="spinner" color="#ffab30" />
  </van-overlay>
</template>
