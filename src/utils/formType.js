/*
 * @Author: rabbwei 
 * @Date: 2024-04-06 14:44:27 
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-18 23:39:27
 */

export const formType = {
  input: van.Field,
  switch: van.Switch,
  cell: van.Cell,
  popup: van.Popup,
  cascader: van.Cascader,
  // pick: van.Picker,
};

export function reform(item) {

  let labelClass = lo.get(item, "labelClass", "");
  labelClass += " !w-[auto]";
  lo.set(item, "labelClass", labelClass);
  item.inputAlign = "right";

  if (item.formType == "input") {
    reformInput(item);
  }

  return formType[item.formType];
}

function reformInput(item) {
  lo.merge(item, { autosize: true, type: "textarea", rows: "1" });
}
