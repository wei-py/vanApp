export const useDom = defineStore("dom", () => {
  const approvalDoms = ref({});
  const submitDoms = ref([]);
  // const imgDomDic = ref([]);
  // const imgDoms = computed(() => imgDomDic.value.map(n => n.value).flat());
  const imgDoms = ref([]);

  const longPressDom = ref(null);
  const showPreviewImg = ref(false);
  const imgIndex = ref(0);
  return { submitDoms, longPressDom, imgDoms, showPreviewImg, approvalDoms, imgIndex };
});

export async function refreshImg() {
  const dom = useDom();
  await wait(1000)
  dom.imgDoms = lo.uniq([...document.querySelectorAll(".van-image__img")].map(n => n.src))
  console.log(dom.imgDoms)
}

// export const approvalDoms = {};
// export const submitDoms = [];
// export const imgDoms = [];
// export const longPressDom = null;
// export const showPreviewImg = false;
// export const imgIndex = 0;

// export function useDom() {
//   return {
//     approvalDoms,
//     submitDoms,
//     imgDoms,
//     longPressDom,
//     showPreviewImg,
//     imgIndex,
//   };
// }

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

export function pushImg(...imgs) {
  const dom = useDom();
  dom.imgDoms.push(...imgs.filter((n) => isImg(n)));
}

export function getLongDom() {
  const gl = useDom();
  return gl.longPressDom;
}

export function getlongPressUrl() {
  const gl = useDom();
  const src = lo.get(gl, "longPressDom.src", "");
  if (src) {
    return src;
  } else {
    showToast("图片路径还在加载中，请稍后2s后再试");
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
 *
 */
export function onSave() {
  forForm((item) => {
    if (lo.isFunction(item.onSave)) {
      item.onSave();
    }
  });
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
  params.orderId = getQuery()?.orderId;
  params.investorId = getQuery()?.investorId;

  forForm((item) => {
    if (!lo.isUndefined(item.realValue) && !lo.isFunction(item.getParam)) {
      item.getParam = (params) => {
        params[item.name] = item.realValue;
      };
    }
    if (lo.isFunction(item.getParam)) {
      item.getParam(params);
    }
  });

  return params;
}
