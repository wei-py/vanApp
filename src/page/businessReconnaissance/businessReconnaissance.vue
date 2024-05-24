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
  otherImagesForm,
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
  otherImagesForm,
});

onMounted(() => {
  getData();
});

async function getData() {
  const url = queryUrl("order/get-takan", { orderId: getQuery()?.orderId });
  const { data } = await http.get(url);
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  const url = "order/put-takan";
  const data = await http.post(url, params);
  return data;
}

async function submitData(params) {
  const { data } = await http.post(queryUrl("approval/put-approval/pre/takan", params));
}

async function approvalData(params) {
  const url = params.approvalType == "APPROVAL_BTO" ? "approval/do-approval/bto/takan" : "approval/do-approval/pre/takan";
  const { data } = await http.post(url, params);
}

eventManage({ getData, saveData, submitData, approvalData });
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
      <van-cell title="经纬度" value-class="!text-[#323232] !w-[80%] !flex-none" title-class="!w-[20%] !flex-none my-auto">
        <template #value>
          <div>{{ slot.address || "定位地理位置(自动获取)" }}</div>
          <div>纬度: {{ slot.lat || "未获取" }} 经度: {{ slot.lng || "未获取" }}</div>
          <van-button
            @click="() => slot.getLocation()"
            :loading="slot.loading"
            :disabled="slot.disabled"
            class="!w-[100px] !py-3 !bg-[#ffab30] !text-[white] !border-0 !text-[14px]"
            round
            size="mini"
          >
            获取定位
          </van-button>
        </template>
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
  <vBtn></vBtn>
</template>
