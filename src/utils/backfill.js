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
  const flag = useFlag();
  const dom = useDom();
  const event = useEvent();
  dom.$reset();

  forForm(async (item) => {
    if (lo.isFunction(item.backfill)) {
      await item.backfill(data);
      // if (lo.get(item, 'inlineForm[0].formType') == "upload") {
      //   dom.imgDomDic.push({
      //     name: item.name,
      //     value: item.inlineForm[0].value.map(n => n.url),
      //   });
      // }
      return;
    }
    if (lo.has(data, item.name)) {
      item.value = data[item.name] || item.value;
      // item.value = lo.get(data, item.name) || item.value;
    }
  });

  if (!lo.isUndefined(data.btns)) {
    flag.btns = data.btns;
  }

  flag.orderState = data.orderState;

  if (lo.isFunction(event.approvalBackfill)) {
    event.approvalBackfill();
  }

  onLongPressImg();
}
