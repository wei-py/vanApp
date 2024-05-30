<script setup>
const flag = useFlag();
const loading = ref(false); // 触底请求加载
const props = defineProps({
  loading: {},
  finished: {},
  list: {},
});

const dic = ref({
  FIRST_TO_SECOND: "一级仓库发二级仓库",
  FIRST_TO_SITE: "一级仓库发现场",
  SECOND_TO_SITE: "二级仓库发现场",
});

const emits = defineEmits(["getData"]);

function getData(...args) {
  emits("getData", ...args);
}

function changeLoading(isLoading) {
  loading.value = isLoading;
}

defineExpose({ changeLoading });
</script>
<template>
  <van-list v-model:loading="loading" :finished="props.finished" finished-text="没有更多了" @load="getData" class="!pt-2">
    <template v-for="item in props.list" :key="item.index">
      <!-- van-haptics-feedback -->
      <van-cell-group inset class="px-2 py-4 !mb-2 shadowC !rounded-xl" v-skeleton="flag.overlayShow">
        <van-cell
          valueClass="valueClass yellowText"
          titleClass="titleClass"
          :border="false"
          title="发货编码: "
          :value="item.stoExportBase.expId || '-'"
        >
          <template #right-icon>
            <plainButton class="!h-[24px]" @click.stop="$copyText(item.stoExportBase.expId)"> 复制 </plainButton>
          </template>
        </van-cell>
        <van-cell valueClass="valueClass" titleClass="titleClass" :border="false" title="发货方: " :value="item.stoExportBase.shipperName || '-'" />
        <van-cell
          valueClass="valueClass"
          titleClass="titleClass"
          :border="false"
          title="发货类型: "
          :value="item.stoExportBase.exportType && dic[item.stoExportBase.exportType] ? dic[item.stoExportBase.exportType] : '-'"
        />
        <van-cell
          valueClass="valueClass"
          titleClass="titleClass"
          :border="false"
          title="收货组织: "
          :value="item.company && item.company.name ? item.company.name : '-'"
        />
        <van-cell valueClass="valueClass" titleClass="titleClass" :border="false" title="备注: " :value="item.stoExportBase.remark || '-'" />
      </van-cell-group>
    </template>
  </van-list>
  <van-back-top class="!bg-[#fed38c]" />
</template>
