/*
 * @Author: rabbwei 
 * @Date: 2024-04-06 14:44:27 
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-28 10:15:24
 */


export const formType = {
  input: van.Field,
  switch: van.Switch,
  cell: van.Cell,
  popup: van.Popup,
  popover: van.Popover,
  cascader: van.Cascader,
  pick: van.Picker,
  button: van.Button,
  upload: van.Uploader,
  numberKeyboard: van.NumberKeyboard,
  icon: van.Icon,
  date: van.DatePicker
};

export function reform(item) {

  let labelClass = lo.get(item, "labelClass", "");
  labelClass += " !min-w-[30%]";
  // labelClass += ' flex-1'
  labelClass = lo.uniq(labelClass.split(" ")).join(" ")
  lo.set(item, "labelClass", labelClass);

  if (!lo.has(item, 'inputAlign')) {
    item.inputAlign = "right";
  }

  if (item.formType == "input") {
    reformInput(item);
  }

  return formType[item.formType] || item.formType;
}

function reformInput(item) {
  if (lo.isUndefined(item.type)) {
    item.type = 'textarea'
  }
  lo.merge(item, { autosize: true,  rows: "1" });
}
