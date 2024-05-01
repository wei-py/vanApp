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
  const dom = useDom();
  dom.imgDoms = [];
  forForm((item) => {
    if (lo.isFunction(item.backfill)) {
      item.backfill(data);
      return;
    }
    if (lo.has(data, item.name)) {
      item.value = data[item.name];
    }
  });

  wait(1000).then(() => {
    dom.imgDoms = [...document.querySelectorAll(".van-image__img")].map((n) => n.src);
  });

  onLongPressImg();
}
