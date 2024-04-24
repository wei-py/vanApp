<script setup>
import { get } from "lodash";
import { formType } from "@/utils/formType";

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
}

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
      v-bind="omitItem(item)"
      :ref="(el) => setRef(el, item)"
      @click="(...args) => getFunction(item, 'click', ...args)"
      @close="(...args) => getFunction(item, 'close', ...args)"
      @finish="(...args) => getFunction(item, 'finish', ...args)"
    >
      <template v-for="slot of get(item, 'inlineForm', [])" #[slot.slot]>
        <recuDynComponent :form="slot" />
      </template>
    </component>
  </template>
</template>
