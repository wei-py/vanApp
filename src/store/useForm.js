/**
 * 缓存表单数据
 */
// export const useForm = defineStore("form", () => {
//   // let gl = ref([]);
//   let source = ref({});

//   // function setForm(_) {}

//   return { source };
// });

// export function bindForm(bindFlag = true) {
//   if (bindFlag) {
//     // root.push(_)
//     // root.value[0] = lo.clone(_, true);
//     // root._.value = lo.clone(_, true)
//     // form.gl.length = 0;
//     // form.gl.push(_);
//     onUnmounted(() => {
//       // root._ = toRaw(root._)
//       // gets(root._, "*", (val, p, k) => {
//       //   lo.set(root._, k, null);
//       // });
//       // root._ = null;
//     });
//     onBeforeUnmount(() => {});
//   }
// }

// export function bindSource(source) {
//   const gl = useForm();
//   gl.source = source;
// }

/**
 * 获取缓存的表单数据
 * @returns
 */
// export function getForm() {
//   return useForm().gl[0];
// }

/**
 * 遍历表单数据
 * @param {*} callback
 */
export function forForm(callback) {
  lo.forIn(root._ || {}, (value, key) => {
    value.forEach(v => {
      callback(v)
    });
    // callback(value)
  });
  // const tmp = Object.entries(root._ || {});
  // for (let i = 0; i < tmp.length; i++) {
  //   const form = tmp[i][1];
  //   for (let j = 0; j < form.length; j++) {
  //     callback(form[j]);
  //   }
  // }
}

/**
 * 获取缓存表单项
 * @param {*} name 表单项
 * @returns
 */
export function getItem(name, path) {
  let result = null;
  forForm((item) => {
    if (item.name == name) {
      result = item;
    }
  });

  if (lo.isFunction(path)) {
    path(result);
    return;
  }

  if (path) {
    result = lo.get(result, path);
  }

  // if (lo.isUndefined(path)) {
  //   result = lo.get(result, 'value') || lo.get(result, 'realValue');
  // }

  return result;

  // if (!lo.isNull(result)) {
  //   return result;
  // } else {
  //   throw new Error(`custom error: not find ${name}`);
  // }
}

/**
 * 设置表单项
 * @param {String} name
 * @param {Function | String | Boolean | Number | Object} handle
 * @param {*} other
 * @returns
 */
export function setItem(name, handle, other = Symbol("other")) {
  const item = getItem(name);

  if (!lo.isSymbol(other)) {
    lo.set(item, handle, other);
    return;
  }

  if (lo.isString(handle) || lo.isBoolean(handle) || lo.isNumber(handle)) {
    lo.set(item, "value", handle);
    return;
  }

  if (lo.isFunction(handle)) {
    handle(item);
    return;
  }

  if (lo.isObject(handle)) {
    lo.forIn(handle, (value, key) => {
      lo.set(item, key, value);
    })
    // const tmp = Object.entries(handle);
    // for (let i = 0; i < tmp.length; i++) {
    //   const [key, value] = tmp[i];
    //   item[key] = value;
    // }
    return;
  }

  throw new Error(`custom error: setItem`);
}

// export function getsForm(path, callback = () => {}) {
//   gets(useForm().gl[0], path, (value, parent, p) => {
//     callback(value, parent, p);
//   });
// }
