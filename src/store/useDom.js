export const useDom = defineStore("dom", () => {
  const submitDoms = ref([]);
  return { submitDoms };
});


/**
 * 获取每个表单的参数 未聚合
 * @returns 
 */
export function getParamList() {
  const gl = useDom();
  return gl.submitDoms.map((dom) => {
    return dom.getValues();
  });
}

/**
 * 执行表单校验
 * @returns 
 */
export async function validate() {
  const gl = useDom();
  console.log(gl.submitDoms, 3333)
  return await Promise.all(
    gl.submitDoms.map(async (dom) => {
      await dom.validate();
    })
  );
}

/**
 * 获取接口所需参数 已聚合
 * @returns 
 */
export function getParam() {
  const paramList = getParamList();
  const params = paramList.reduce((pre, cur) => {
    return { ...pre, ...cur };
  }, {});

  forForm(item => {
    if (lo.isFunction(item.getParam)) {
      item.getParam(params)
    }
  })

  return params
}