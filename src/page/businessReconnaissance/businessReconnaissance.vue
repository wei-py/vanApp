<script setup>
import {
  businessReconnaissanceForm,
  panoramaForm,
  innerStructureForm,
  interneMilieuForm,
  roofForm,
  roofWholeForm,
  dimensionalDrawingForm,
  explorationTableForm,
  otherImagesForm
} from "./businessReconnaissance.js";
const _ = makeForm({
  businessReconnaissanceForm,
  panoramaForm,
  innerStructureForm,
  interneMilieuForm,
  roofForm,
  roofWholeForm,
  dimensionalDrawingForm,
  explorationTableForm,
  otherImagesForm
});

onMounted(() => {
  getData()
})

async function getData() {
  const url = queryUrl('order/get-takan', { orderId: getQuery()?.orderId})
  const { data } = await http.get(url)
  backfill(_, data)
}
</script>

<template>
  <vantForm :form="_.businessReconnaissanceForm" group-class="shadowC" class="pt-3">
    <template #title="{ slot }">
      <van-cell :titleClass="slot.titleClass + ' py-2'" class="!p-0">
        <template #title>
          <div>
            <div>安装地址</div>
            <div>确保项目定位准确否则施工无法扫码收货</div>
          </div>
        </template>
      </van-cell>
    </template>
    <template #location="{ slot }">
      <van-cell title="经纬度">
        <template #value> 123123123 </template>
      </van-cell>
    </template>
  </vantForm>
  <vantForm :form="_.panoramaForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.innerStructureForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.interneMilieuForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.roofForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.roofWholeForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.dimensionalDrawingForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.explorationTableForm" group-class="shadowC" class="pt-3" />
  <vantForm :form="_.otherImagesForm" group-class="shadowC" class="py-3" />
</template>
