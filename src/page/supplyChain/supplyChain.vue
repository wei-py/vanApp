<script setup>
import { sceneTask, oneLevelTask, twoLevelTask, warehouseTask } from "./supplyChain.js";
const tasks = ref([
  { title: "现场扫码退货(直营+供应商)", task: sceneTask },
  { title: "一级仓库任务(博通新能源)", task: oneLevelTask },
  { title: "二级仓库任务(供应商)", task: twoLevelTask },
  { title: "仓库管理", task: warehouseTask },
]);
</script>

<template>
  <van-cell-group inset class="!mt-2 shadowC" v-for="(item, i) in tasks" :key="item.title" v-skeleton-item>
    <van-cell :title="item.title" title-class="font-bold text-[20px] h-[30px]  leading-[30px]" />
    <van-grid :border="false" :column-num="5" class="mx-[5px] pb-[10px]">
      <van-grid-item v-for="task in item.task" @click="() => task.tap()" class="!py-0">
        <van-badge :offset="[-9, 9]" class="p-3" :show-zero="false" max="99" :content="0">
          <img :src="task.icon" fit="contain" class="bg-[#ffcf48] rounded-xl shadowC van-haptics-feedback p-1" alt="" />
        </van-badge>
        <p class="text-center text-[14px] h-[28px] leading-[14px]">{{ task.text }}</p>
      </van-grid-item>
    </van-grid>
  </van-cell-group>
</template>

<style scoped lang="scss">
:deep(.van-grid-item__content) {
  padding: 10px 0px 0px !important;
}

:deep(.van-badge) {
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

:deep(.van-tabs__line) {
  background: #ffab30;
}
:deep(.van-tab__text) {
  font-size: 16px;
}
:deep(.van-badge) {
  z-index: 2;
}
</style>

