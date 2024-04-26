/*
 * @Author: rabbwei
 * @Date: 2024-04-06 14:36:39
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-26 01:13:49
 * @Desc: makeForm -> setForm -> setItem
 */

/**
 * 设置表单项
 * @param {*} setItem
 * @returns
 */
function setItem(item) {
  if (item.required) {
    item.rules = [];
    item.rules.push((val) => !val && `${item.label}必填`);
  }

  lo.forIn(item, async (attr, key) => {
    if (key == "formType") {
      reform(item);
      // let formAttr = ;
      // item[key] = formAttr;
    }

    if (key == "inlineForm") {
      setForm(item[key]);
    }

    if (key == "rules") {
      item.rules = toRaw(convertRules(item[key]));
    }

    if (key == "onMounted") {
      onBeforeMount(async () => {
        await item.onMounted(item);
      });
    }
  });

  item.class = lo.get(item, "class", "");
  const name = lo.get(item, "name", "");
  item.class += ` ${name}`;
}

/**
 * 设置表单
 * @param {*} form
 */
function setForm(form) {
  lo.forEach(form, (item) => {
    setItem(item);
  });
}

/**
 * 生成表单数据
 * @param {Array} formList
 * @returns
 */
export function makeForm(formList) {
  lo.forEach(formList, (value, key) => {
    setForm(value);
  });

  const result = reactive(formList);

  bindForm(result);
  // bindSource(formList);

  // onUnmounted(() => {
  //   clearStore()
  // })

  return result;
}
