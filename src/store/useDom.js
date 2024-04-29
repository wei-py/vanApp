export const useDom = defineStore("dom", () => {
  const submitDoms = ref([]);
  const longPressDom = ref(null)

  const imgDoms = ref([])
  const showPreviewImg = ref(false)
  const imgIndex = ref(0)
  return { submitDoms, longPressDom, imgDoms, showPreviewImg, imgIndex };
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

export function getLongDom() {
  const gl = useDom();
  return gl.longPressDom
}

export function getlongPressUrl() {
  const gl = useDom();
  const src = lo.get(gl, 'longPressDom.src', '')
  if (src) {
    return src
  } else {
    showToast('图片路径还在加载中，请稍后2s后再试')
  }
}

/**
 * 执行表单校验
 * @returns 
 */
export async function validate() {
  const gl = useDom();
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
    if (!lo.isUndefined(item.realValue)) {
      item.getParam = (params) => {
        params[item.name] = item.realValue
      }
    }
    if (lo.isFunction(item.getParam)) {
      item.getParam(params)
    }
    
  })

  return params
}