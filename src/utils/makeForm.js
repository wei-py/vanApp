/*
 * @Author: rabbwei
 * @Date: 2024-04-06 14:36:39
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-27 14:44:07
 * @Desc: makeForm -> setForm -> setItem
 */

/**
 * 设置表单项
 * @param {*} setItem
 * @returns
 */
function setItem(item) {
  if (item.required) {
    item.rules = toRaw([...lo.get(item, "rules", []), (val) => !val && `${item.label}必填`]);
    // item.rules = [];
    // item.rules.push((val) => !val && `${item.label}必填`);
  }

  const tmp = Object.entries(item);
  for (let i = 0; i < tmp.length; i++) {
    const key = tmp[i][0];
    if (key == "formType") {
      reform(item);
    }

    if (key == "inlineForm") {
      setForm(item[key]);
    }

    if (key == "rules") {
      item.rules = toRaw([...lo.get(item, "rules", []), ...convertRules(item[key])]);
    }

    if (key == "onMounted") {
      onBeforeMount(async () => {
        await item.onMounted(item);
      });
    }
  }

  // lo.forIn(item, async (attr, key) => {
  //   if (key == "formType") {
  //     reform(item);
  //     // let formAttr = ;
  //     // item[key] = formAttr;
  //   }

  //   if (key == "inlineForm") {
  //     setForm(item[key]);
  //   }

  //   if (key == "rules") {
  //     item.rules = toRaw(convertRules(item[key]));
  //   }

  //   if (key == "onMounted") {
  //     onBeforeMount(async () => {
  //       await item.onMounted(item);
  //     });
  //   }
  // });

  if (!lo.isArray(item.menuRight)) {
    item.menuRight = [];
  }

  item.class = lo.get(item, "class", "");
  const name = lo.get(item, "name", "");
  item.class += ` ${name}`;
}

/**
 * 设置表单
 * @param {*} form
 */
function setForm(form) {
  for (let i = 0; i < form.length; i++) {
    setItem(form[i]);
  }
}

/**
 * 生成表单数据
 * @param {Array} formList
 * @returns
 */
export function makeForm(formList) {
  // lo.forEach(formList, (value) => {
  //   setForm(value);
  // });
  const tmp = Object.entries(formList);
  for (let i = 0; i < tmp.length; i++) {
    const item = tmp[i][1];
    setForm(item);
  }

  const result = reactive(formList);

  bindForm(result);
  // onLongPressImg()
  // bindSource(formList);

  // onUnmounted(() => {
  //   clearStore()
  // })

  return result;
}
