/*
 * @Author: rabbwei
 * @Date: 2024-04-06 14:40:37
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-26 21:52:53
 * @Desc: 回填数据
 */



/**
 * 回填数据
 * @param {Array[Object]} _ 表单数据
 * @param {*} data 后端接口请求数据
 */
export default function backfill(_, data) {
  forForm((item) => {
    if (lo.isFunction(item.backfill)) {
      item.backfill(data);
      return;
    }
    if (lo.has(data, item.name)) {
      // setItem(item.name, 'value', data[item.name])
      item.value = data[item.name];
    }
    
  });

  const dom = useDom();
  dom.imgDoms = [];
  gets(data, "*", (v) => {
    if (lo.isString(v) && isImg(v)) {
      dom.imgDoms.push(sToUrl(v));
    }
  });

  onLongPressImg();
}
