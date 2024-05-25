<script setup name="recuDynComponent">
import isImg, { isImgSlot, getUploadUrl } from "@/utils/isImg";
import { get } from "lodash";
import { formType } from "@/utils/formType";

const now = Date.now() + lo.random(0, 100);
const orderh5 = location.port == 2222 ? "/orderh5" : "";

const props = defineProps({
  form: {}, // 表单
  title: {}, // 标题
  titleClass: {}, // 标题样式
  fullPath: {},
});

function omitItem(item) {
  const func = [];
  // lo.forIn(item, (value, key) => {
  //   const excludes = ["beforeRead", 'beforeDelete']
  //   if (lo.isFunction(value) && !excludes.includes(key)) {
  //     func.push(key);
  //   }

  // });
  return lo.omit(item, ["formType", "inlineForm", "realValue", ...func]);
}

function hidden(item) {
  let result = false;
  if (lo.isBoolean(item.hidden)) {
    result = item.hidden;
  }
  if (lo.isFunction(item.hidden)) {
    result = item.hidden();
  }
  if (isRef(item.hidden)) {
    result = item.hidden;
  }
  return result;
}
// function setRef(el, item) {
//   item.ref = el;
//   if (item.longPress) {
//     onLongPress(el, (e) => {
//       item.longPress = e.target.src;
//     });
//   }
// }

onMounted(() => {});

onBeforeUnmount(() => {
  // gets(props.form, "*", (val, p, k) => {
  // console.log(k)
  // lo.set(props.form, k, null);
  // })
});

function getFunction(item, func, ...args) {
  return lo.isFunction(item[func]) ? item[func](...args) : () => {};
}
</script>

<template>
  <template v-for="(item, i) of [props.form].flat()" :key="i">
    <slot :name="item.customSlot"></slot>
    <!-- {{  formType[item.formType]}} -->
    <!-- :ref="(el) => setRef(el, item)" -->
    <component
      v-if="!hidden(item)"
      :is="formType[item.formType]"
      v-model="item.value"
      v-model:show="item.show"
      v-bind="omitItem(item)"
      @click.stop="(...args) => getFunction(item, 'click', ...args)"
      @close="(...args) => getFunction(item, 'close', ...args)"
      @finish="(...args) => getFunction(item, 'finish', ...args)"
      @clickRightIcon="(...args) => getFunction(item, 'clickRightIcon', ...args)"
      @clickLeftIcon="(...args) => getFunction(item, 'clickLeftIcon', ...args)"
      @clickOverlay.stop="(...args) => getFunction(item, 'clickOverlay', ...args)"
      @confirm="(...args) => getFunction(item, 'confirm', ...args)"
      @input="(...args) => getFunction(item, 'input', ...args)"
      @blur="(...args) => getFunction(item, 'blur', ...args)"
      @select="(...args) => getFunction(item, 'select', ...args)"
      @clickPreview="(...args) => getFunction(item, 'clickPreview', ...args)"
      @cancel="(...args) => getFunction(item, 'cancel', ...args)"
      @update:model-value="(...args) => getFunction(item, 'updateValue', ...args)"
    >
      <!-- @touchstart.stop="(...args) => getFunction(item, 'touchstart', ...args)" -->
      <template v-for="slot of get(item, 'inlineForm', [])" #[slot.slot] :key="now">
        <recuDynComponent :form="slot" />
      </template>

      <!-- vant 文件显示处理 -->
      <template #preview-cover="slot">
        <template v-if="!isImgSlot(slot)">
          <van-image :src="`.${orderh5}/background/pdf.png`" class="w-[80px] h-[80px] !rounded-[8px] bg-[#f7f8fa]" fit="contain" />
        </template>
        <template v-else>
          <van-image :src="slot.url || slot.objectUrl" class="w-[80px] h-[80px] bg-[#f7f8fa]" fit="cover">
            <!-- lazy-load -->
            <template #error>加载失败</template>
            <template #loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </template>
      </template>
    </component>
  </template>
</template>
