<script setup>
const props = defineProps({
  title: { default: "" },
  value: { default: "" },
});
</script>

<template>
  <van-cell v-show="props.value" :title="props.title" :value="props.value" class="!p-0" title-class="!w-auto !flex-none" value-class="!w-auto !text-[#323233]" />
</template>
