<script setup>
import { record } from "./recordDetail";
const query = getQuery();
const _ = makeForm({ record });

onMounted(() => {
  if (query.recordCertificateId) {
    getData();
  }
});

async function getData() {
  const { data } = await http.get(queryUrl("record/one", query));
  openBtns();
  backfill(_, data);
}

async function saveData() {
  await validate();
  const params = getParam();
  const data = await http.post("/record/update", params);
  return data;
}
</script>

<template>
  <vantForm :form="_.record" class="pt-3" group-class="shadowC">
    <template #accreditCompanyIds="{ slot }">
      <van-field :name="slot.name" :label="slot.label" input-align="right" :required="slot.required" isLink @click="slot.show = true" valueClass="">
        <template #input>
          <div>
            <van-tag v-for="tag of slot.checkColumns" round type="primary" class="!py-1 !w-full xCenter" color="#ffab30">
              <div class="!text-center">
                {{ tag.name }}
              </div>
            </van-tag>
          </div>

          <van-popup
            v-model:show="slot.show"
            round
            position="bottom"
            class="h-[50vh]"
            closeable
            @click-close-icon.stop="slot.show = false"
            @click-overlay.stop="slot.show = false"
          >
            <!-- {{ slot.columns }} -->
            <vxe-table :data="slot.columns" align="left" header-align="center" max-height="90%">
              <vxe-column field="name">
                <template #default="{ row }">
                  <van-checkbox checked-color="#ffab30" class="van-haptics-feedback w-full" v-model="row.checked" @click="() => slot.check(row)">
                    {{ row.name }}
                  </van-checkbox>
                </template>
              </vxe-column>
            </vxe-table>
            <div class="xCenter">
              <van-button
                round
                block
                class="!my-1 !border-none !w-[50%] !bg-[#ffab30]"
                size="small"
                type="primary"
                @click.stop="() => slot.confirm()"
              >
                确认
              </van-button>
            </div>
          </van-popup>
        </template>
      </van-field>
    </template>
  </vantForm>
  <div class="xCenter pt-2">
    <van-button block type="warning" round size="small" class="!w-[100px] !bg-[#ffab30] !mr-8" @click="$router.back()">取消</van-button>
    <van-button block type="warning" round size="small" class="!w-[100px] !bg-[#ffab30]" @click="saveData">保存</van-button>
  </div>
</template>
