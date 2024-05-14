<script setup>
import designGroup from "./designGroup.vue";
const activeNames = ref(["1"]);
const query = getQuery();
const tableData = ref([]);
const deviceTypeDic = {
  ZUJIAN: "组件",
  NBQ: "逆变器",
  CJQ: "采集器",
  PDX: "配电箱",
  ZLDL: "直流电缆",
  ZHIJIA: "支架",
};

onMounted(() => {
  getData();
});

async function getData() {
  const { data } = await http.get(queryUrl("design/record", query));
  tableData.value = data.map((n) => {
    n.structureChart = makeImgsDesign(n.structureChart);
    n.electricalDiagram = makeImgsDesign(n.electricalDiagram);
    n.materialList = makeImgsDesign(n.materialList);
    n.pvData = [];
    return n;
  });
}

async function showDesignGroup(t) {
  const { data } = await http.get(queryUrl("design/get-design-nbq-pv", { designId: t.id || t.designIdByPv }));
  if (!data.length) {
    showFailToast('没有数据')
    return
  }
  data.forEach((n) => {
    const result = [];
    for (let i = 1; i <= 20; i++) {
      result.push(n[`pv${i}`]);
    }
    if (!lo.isArray(t.nbqName)) {
      t.nbqName = [];
    }
    t[n.nbqName] = result;
    t.nbqName.push(n.nbqName);
  });
  t.active = t.nbqName[0];
}
</script>

<template>
  <van-collapse v-model="activeNames">
    <template v-for="(t, i) of tableData" :key="i">
      <van-collapse-item :name="i" class="!p-0">
        <template #title>
          <div>设计变更记录{{ tableData.length - i }}</div>
          <div>{{ t.createTime }}</div>
        </template>
        <van-cell-group inset border class="!p-1 !m-0 border">
          <van-cell title="设计类型" :value="t.designType" />
          <van-cell title="南坡组件数量" :value="t.southModuleNumber" />
          <van-cell title="北坡组件数量" :value="t.northModuleNumber" />
          <van-cell title="东坡组件数量" :value="t.eastModuleNumber" />
          <van-cell title="西坡组件数量" :value="t.westModuleNumber" />
          <van-cell title="是否有天窗" :value="t.skyLight == 0 ? '无' : '有'" />
          <van-cell title="组件朝向" :value="t.moduleTowards" />
          <van-cell title="方位角" :value="t.azimuthAngle" />
          <van-cell title="倾斜角" :value="t.tiltAngle" />
          <van-cell title="基底分类" :value="t.moduleBaseType" />
          <van-cell title="背板分类" :value="t.moduleBackPlateType" />
          <van-cell title="安装最高点(房屋+光伏总高度)" :value="t.installedHeight + ' 米'" />
          <vxe-table :data="t.designDevice" align="center" header-align="center" max-height="400">
            <vxe-column title="设备类型">
              <template #default="{ row }">
                {{ deviceTypeDic[row.deviceType] }}
              </template>
            </vxe-column>
            <vxe-column field="deviceSpec" title="规格标准" />
            <vxe-column field="quantity" title="设备数量" />
          </vxe-table>
          <div class="xCenter py-1 van-hairline--top-bottom flex-col">
            <vButton @click="showDesignGroup(t)" class="!mb-1"> 查看设计组串数量 </vButton>
            <van-tabs v-model:active="t.active">
              <van-tab v-for="n of t.nbqName" :title="n">
                <vxe-table :data="t[n]" align="center" header-align="center" max-height="400">
                  <vxe-column type="seq"  title="PV"></vxe-column>
                  <vxe-column field="dc1" title="DC1" />
                  <vxe-column field="dc2" title="DC2" />
                  <vxe-column field="dc3" title="DC3" />
                  <vxe-column field="dc4" title="DC4" />
                </vxe-table>
              </van-tab>
            </van-tabs>
          </div>
          <van-field name="uploader" label="结构图纸" input-align="right">
            <template #input>
              <van-uploader v-model="t.structureChart" :show-upload="false" :deletable="false" />
            </template>
          </van-field>
          <van-field name="uploader" label="电气图纸" input-align="right">
            <template #input>
              <van-uploader v-model="t.electricalDiagram" :show-upload="false" :deletable="false" />
            </template>
          </van-field>
          <van-field name="uploader" label="物料清单" input-align="right">
            <template #input>
              <van-uploader v-model="t.materialList" :show-upload="false" :deletable="false" />
            </template>
          </van-field>
        </van-cell-group>
      </van-collapse-item>
    </template>
  </van-collapse>
</template>

<style scoped>
:deep(.van-collapse-item__content) {
  padding: 5px 10px !important;
}
</style>
