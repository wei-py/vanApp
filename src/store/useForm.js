/**
 * 缓存表单数据
 */
export const useForm = defineStore("form", () => {
  let gl = ref([]);
  let source = ref({});
  // function setForm(_) {}

  return { gl, source };
});

export function bindForm(_) {
  const form = useForm();
  form.gl.length = 0;
  form.gl.push(_);
  onUnmounted(() => {
    form.gl.pop()
    form.gl.length = 0;
  });
}

export function bindSource(source) {
  const gl = useForm();
  gl.source = source
}

/**
 * 获取缓存的表单数据
 * @returns
 */
export function getForm() {
  return useForm().gl[0];
}

/**
 * 遍历表单数据
 * @param {*} callback
 */
export function forForm(callback) {
  const formList = getForm();
  lo.forIn(formList, (form, key) => {
    lo.forEach(form, (item) => {
      callback(item);
    });
  });
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
  if (path) {
    result = lo.get(result, path);
  }
  if (!lo.isNull(result)) {
    return result;
  } else {
    throw new Error(`custom error: not find ${name}`);
  }
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
    item.value = handle;
    return;
  }

  if (lo.isFunction(handle)) {
    handle(item);
    return;
  }

  if (lo.isObject(handle)) {
    lo.forIn(handle, (value, key) => {
      item[key] = value;
    });
    return;
  }

  throw new Error(`custom error: setItem`);
}
