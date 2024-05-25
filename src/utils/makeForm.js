// import root from "@/utils/root";
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
export function setFormItem(item) {
  if (item.required) {
    const label = item.label;
    item.rules = [...lo.get(item, "rules", []), (val) => val.length || `${label}必填`];
    // item.rules = [...lo.get(item, "rules", []), (val) => val.length || `${item.label}必填`];
  }

  // const tmp = Object.entries(item);
  // for (let i = 0; i < tmp.length; i++) {
  //   const key = tmp[i][0];
  //   if (key == "formType") {
  //     reform(item);
  //   }

  //   if (key == "inlineForm") {
  //     setForm(item[key]);
  //   }

  //   if (key == "rules") {
  //     item.rules = toRaw([...lo.get(item, "rules", []), ...convertRules(item[key])]);
  //   }

  //   if (key == "onMounted") {
  //     onBeforeMount(async () => {
  //       await item.onMounted(item);
  //     });
  //   }
  // }

  lo.forIn(item, async (attr, key) => {
    if (key == "formType") {
      reform(item);
    }

    if (key == "inlineForm") {
      setForm(item[key]);
    }

    if (key == "rules" && item.rules.length && !item.rulesFlag) {
      item.rulesFlag = true;
      item.rules = [...convertRules(item[key])];
    }

    if (key == "onMounted") {
      onBeforeMount(async () => {
        await item.onMounted(item);
      });
    }
  });

  if (!lo.isArray(item.menuRight)) {
    item.menuRight = [];
  }

  item.class = lo.get(item, "class", "");
  const name = lo.get(item, "name", "");
  item.class += ` ${name}`;
  return item;
}

/**
 * 设置表单
 * @param {*} form
 */
function setForm(form) {
  for (let i = 0; i < form.length; i++) {
    if (lo.isFunction(form[i])) {
      form[i] = form[i]()
      form[i].forEach((n) => {
        setFormItem(n);
      });
    } else {
      form[i] = setFormItem(form[i]);
    }
  }
  return form;
}

/**
 * 生成表单数据
 * @param {Array} formList
 * @returns
 */
export function makeForm(formList, bindFlag = true) {
  formList = lo.mapValues(formList, (value) => {
    return setForm(value).flat();
  });

  const result = reactive(formList);

  if (bindFlag) {
    // root._.value = undefined;
    // syncRef(root._, result)
    root._ = result;
  }
  onBeforeUnmount(() => {
    const dom = useDom();
    dom.$reset();
    const event = useEvent();
    event.approvalBackfill = () => {};
    event.$reset();
  });

  // bindForm(bindFlag);
  // onLongPressImg()
  // bindSource(formList);

  return result;
}
