<script setup>
const flag = useFlag();
</script>

<template>
  <van-overlay :show="flag.overlayShow" z-index="99" class="center !bg-[rgba(0,0,0,0)]" >
    <van-loading type="spinner" color="#1989fa" />
  </van-overlay>
</template>