export default function makeTitle(title) {
  return {
    formType: "cell",
    title,
    titleClass,
    class: "!p-0 h-[50px]",
  };
}

export function makeUnit(unit) {
  return {
    makeUnit(u) {
      // 调用 this.makeUnit('参数') 即可修改单位
      this.inlineForm[0].text = u;
    },
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        size: "mini",
        className: "border-0 p-0 yCenter",
        text: unit, // 单位
      },
    ],
  };
}
