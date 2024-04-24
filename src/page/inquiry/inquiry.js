// import { gets } from "../../utils/gets";
// rules hidden inlineForm backfill formType middle
export const form = [
  {
    formType: "cell",
    title: "出租人信息",
    titleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "input",
    label: "姓名",
    name: "name",
    rules: [(val) => val || "只能选择 true"],
    inlineForm: [
      {
        slot: "input",
        formType: "switch",
        disabled: false,
        activeColor: "red",
        value: true,
      },
    ],
    onMounted(item) {},
  },
  {
    customSlot: "aa",
  },
  {
    formType: "input",
    label: "组织全称",
    name: "orgName",
    value: "",
    required: true,
    // hidden: isZZD(),
  },
  {
    formType: "popup",
    show: false,
    round: true,
    name: "regAddressPop",
    position: "bottom",
    hidden: true,
    inlineForm: [
      {
        slot: "default",
        formType: "cascader",
        title: "请选择所在地区",
        options: undefined,
        value: "",
        async onMounted() {
          this.options = await getArea();
        },
        close() {
          setItem("regAddressPop", "show", false);
        },
        finish(result) {
          const text = result.selectedOptions.map((n) => n.text).join("/");
          const value = result.selectedOptions.map((n) => n.value);
          this.value = result.value;
          setItem("regAddress", text);
          setItem("regAddress", "middle.value", value);
          setItem("regAddressPop", "show", false);
        },
      },
    ],
  },
  {
    formType: "input",
    label: "注册地址区域",
    name: "regAddress",
    show: false,
    placeholder: "请选择所在地区",
    // hidden: isZZD(),
    hidden: true,
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    getParam(param) {
      const [provinceCode, cityCode, areaCode] = this.middle.value;
      param.regAddress = { provinceCode, cityCode, areaCode };
    },
    async backfill(data) {
      const cascader = getItem("regAddressPop", "inlineForm.0");
      await waitValue(cascader, "options");
      const value = data.regAddress.areaCode || data.regAddress.cityCode;
      setItem("regAddressPop", "inlineForm.0.value", value);
      const tree = searchTree(cascader.options, (n) => n.value == value);
      const arr = toTreeArray(tree);
      cascader.finish({
        selectedOptions: arr,
        value: value,
      });
    },
    click() {
      setItem("regAddressPop", "show", true);
    },
    value: "",
    required: true,
  },
];



export const form2 = [
  {
    formType: "cell",
    title: "出租人信息2",
    // titleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "input",
    label: "地址2",
    name: "address2",
    value: "",
    required: true,
    // readonly: true,
    // disabled: true
  },
];