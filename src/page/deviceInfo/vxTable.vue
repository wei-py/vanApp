<script setup>
const props = defineProps({
  title: { default: "" },
  slot: {
    default: {
      value: [],
      remove: (row) => {},
    },
  },
});

const seqConfig = reactive({
  seqMethod(row) {
    return `${row.data.length - row.rowIndex}`;
  },
});
</script>

<template>
  <vxe-table :data="props.slot.value" :seq-config="seqConfig" align="center" header-align="center" max-height="400">
    <vxe-column type="seq" width="50" title="序号"></vxe-column>
    <vxe-column field="" title="详细信息">
      <template #default="{ row }">
        <cell :title="props.title + '名称'" :value="row.deviceNumber" />
        <cell :title="props.title + '厂家'" :value="row.manufacturer" />
        <cell :title="props.title + '型号'" :value="row.specificationsModel" />
        <cell title="采集时间" :value="row.createTime" />
        <cell v-if="row.valid" title="错误信息" :value="row.valid" />
      </template>
    </vxe-column>
    <vxe-column field="" title="操作" width="50">
      <template #default="{ row }">
        <van-icon name="cross" color="red" @click="props.slot.remove(row)" />
      </template>
    </vxe-column>
  </vxe-table>
</template>
