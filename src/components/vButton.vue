<script setup>
const props = defineProps(["bind"]);
</script>

<template>
  <van-button
    :size="props.size ? props.size : 'small'"
    :type="props.type ? props.type : 'success'"
    :round="props.round ? props.round : true"
    class="!border-0 !bg-[#ffab30] !px-[25px] !py-[20px] !text-[14px] shadowC"
    v-bind="props.bind"
  >
    <slot></slot>
  </van-button>
</template>
