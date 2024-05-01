<script setup name="recuDynComponent">
import { get } from "lodash";
import { formType } from "@/utils/formType";

const now = Date.now() + lo.random(0, 100);

const props = defineProps({
  form: {}, // 表单
  title: {}, // 标题
  titleClass: {}, // 标题样式
  fullPath: {},
});

function omitItem(item) {
  return lo.omit(item, ["formType", "inlineForm"]);
}

function setRef(el, item) {
  item.ref = el;
  if (item.longPress) {
    onLongPress(el, (e) => {
      item.longPress = e.target.src;
    });
  }
}

onMounted(() => {
  // console.log(props);
});

function getFunction(item, func, ...args) {
  return lo.isFunction(item[func]) ? item[func](...args) : () => {};
}
</script>

<template>
  <template v-for="(item, i) of [props.form].flat()" :key="item.name + '' + i">
    <slot :name="item.customSlot"></slot>
    <!-- {{  formType[item.formType]}} -->
    <component
      v-if="!item.hidden"
      :is="formType[item.formType]"
      v-model="item.value"
      v-model:show="item.show"
      v-bind="omitItem(item)"
      :ref="(el) => setRef(el, item)"
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
      @update:model-value="(...args) => getFunction(item, 'updateValue', ...args)"
    >
      <!-- @touchstart.stop="(...args) => getFunction(item, 'touchstart', ...args)" -->
      <template v-for="slot of get(item, 'inlineForm', [])" #[slot.slot] :key="now">
        <recuDynComponent :form="slot" />
      </template>

      <!-- vant 文件显示处理 -->
      <template #preview-cover="slot">
        <template v-if="!$isImg(slot.url)">
          <van-image src="./background/pdf.png" class="w-[78px] h-[78px] bg-[#f7f8fa]" fit="contain" />
        </template>
        <template v-else>
          <van-image lazy-load  :src="slot.url" class="w-[78px] h-[78px] bg-[#f7f8fa]" fit="cover">
            <template v-slot:error>加载失败</template>
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </template>
      </template>
    </component>
  </template>
</template>
