const formTemp = [
  {
    ...makeTitle("..."),
    backfill(data) {
      this.title = data.stoName;
    },
  },
  {
    formType: "input",
    value: "",
    label: "仓库名称",
  },
  {
    formType: "input",
    value: "",
    label: "仓库类型",
  },
  {
    formType: "input",
    value: "",
    label: "地理区域",
  },
  {
    formType: "input",
    value: "",
    label: "仓库定位",
  },
  {
    formType: "input",
    value: "",
    label: "仓库容量",
  },
  {
    formType: "input",
    value: "",
    label: "所属组织",
  },
];

export function newForm(_, num) {
  lo.range(num).forEach((i) => {
    const temp = formTemp.map((n) => {
      n.name += "_" + (i + 1);
      return n;
    });
    _[i + 1] = lo.cloneDeep(temp);
  });
}

export const tableForm = [{}];
