export function makeSelect(name, columns, type = "static") {
  // type = 'dynamic'
  const item = {
    readonly: true,
    realValue: "",
    getParam(param) {
      param[name] = this.realValue;
    },
    isLink: true,
    click() {
      this.inlineForm[0].show = true;
    },
    // rightIcon: "arrow",
    // clickRightIcon() {
    //   this.inlineForm[0].show = true;
    // },
    inlineForm: [
      {
        slot: "extra",
        name: name + "Pop",
        formType: "popup",
        show: false,
        round: true,
        position: "bottom",
        class: "h-[40vh]",
        closeOnClickOverlay: true,
        inlineForm: [
          {
            slot: "default",
            formType: "pick",
            confirm(val) {
              setItem(name, "value", val.selectedOptions[0].text);
              setItem(name, "realValue", val.selectedOptions[0].value);
              setItem(name, "inlineForm.0.show", false);
            },
            columns,
          },
        ],
      },
    ],
  };

  if (type == "static") {
    return item;
  } else {
    item.makeSelect = function (value, columns) {
      this.value = value;
      this.inlineForm[0].inlineForm[0].columns = columns;
      const text = columns.find((n) => n.value == value)?.text;
      this.realValue = this.value;
      this.value = text;
    };
    return item;
  }
}

export function backSelect() {
  return {
    backfill(data) {
      const text = this.inlineForm[0].inlineForm[0].columns.find((n) => n.value == data[this.name] || n.value == this.realValue)?.text;
      this.value = text;
      this.realValue = data[this.name];
    },
  };
}

export function setSelectValue(item, columns) {
  const text = columns.find((n) => n.value == item.value).text;
  setItem(item.name, "realValue", item.value);
  setItem(item.name, "value", text);

  // const text = columns.find((n) => n.value == value).text;
  // setItem(name, "realValue", value);
  // setItem(name, "value", text);
}
