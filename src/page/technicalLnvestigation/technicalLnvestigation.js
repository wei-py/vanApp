export const reconnaissanceUserForm = [
  makeTitle("指派技术勘察员"),
  {
    formType: "input",
    label: "技术勘察员",
    name: "userId",
    required: true,
    value: "",
    ...backSelect(),
    ...makeSelect("userId", [], "dynamic"),
    async backfill(bData) {
      const url = queryUrl("user/get-by-permission", { permissions: "PER_JSKC", orderId: getQuery()?.orderId });
      const { data } = await http.get(url);
      const columns = data.map((item) => {
        return { ...item, text: item.name, value: item.userId };
      });
      watchItem("userId", (v) => {
        setItem("phone", "value", lo.find(columns, ["value", v]).phone);
      });
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    formType: "input",
    label: "技术勘察员手机号码",
    value: "",
    readonly: true,
    placeholder: "系统抓取技术勘察员手机号码",
    name: "phone",
    rightIcon: "phone",
    clickRightIcon() {
      callPhone(this.value);
    },
  },
  {
    formType: "cell",
    titleClass: " xCenter",
    // name: 'appointBtn',
    inlineForm: [
      {
        slot: "title",
        formType: "button",
        text: "指派",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[30%]",
        click() {
          console.log(33333);
        },
      },
    ],
    backfill(bData) {
      const stageId = bData.orderState.stageId;
      const stateId = bData.orderState.stateId;
      const userId = getUserVo().userId;
      if (stageId == "KAN_CHA") {
        this.inlineForm[0].text = stateId == "WAITING_APPOINT" ? "指派" : "重新指派";
      }
      // this.inlineForm[0].disabled = !(orderBaseUserId == userId || userId == util._.name('userId').value) || !util._.btns.canSave
    },
  },
];

export const basicMessageForm = [
  makeTitle("基本信息"),
  {
    formType: "input",
    label: "拟安装逆变器品牌",
    name: "inverterBrand",
    required: true,
    ...backSelect(),
    ...makeSelect("inverterBrand", [], "dymatic"),

    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=manufacturerShortName", { deviceType: "NBQ" });
      this.makeSelect(bData[this.name], arrayToVantColumns(data));
    },
  },
  {
    formType: "input",
    label: "拟安装组件功率(W)",
    value: "",
    placeholder: "请输入",
    type: "digit",
    name: "modulePower",
  },
  {
    formType: "input",
    label: "拟安装组件数量(块)",
    value: "",
    placeholder: "请输入",
    name: "moduleNumberReckon",
    type: "number",
  },
  {
    formType: "input",
    label: "拟安装容量",
    realValue: "",
    value: "",
    readonly: true,
    placeholder: "自动计算",
    realValue: 0,
    name: "installedCapacityReckon",
    backfill(bData) {
      computedAsync(() => {
        const value = getItem("modulePower").value * getItem("moduleNumberReckon").value;
        this.realValue = value;
        const result = unitConver(value, 2);
        this.value = result.result;
        return value;
      });
    },
  },
];

export const aerophotographForm = [
  makeTitle("屋顶无人机航拍图"),
  {
    ...makeUpload(1, 100),
    label: "无人机全景俯视图(必填)",
    required: true,
    name: "aerophotographWhole",
  },
  {
    ...makeUpload(1, 100),
    label: "无人机(西北角往东南拍)(必填)",
    required: true,
    name: "aerophotographNorthwest",
  },
  {
    ...makeUpload(1, 100),
    label: "无人机(东北角往西南拍)(必填)",
    name: "aerophotographNortheast",
    required: true,
  },
];

export const inverterPositionForm = [
  makeTitle("逆变器安装位置"),
  {
    ...makeUpload(1, 100),
    label: "逆变器安装位置",
    name: "inverterPosition",
    required: true,
  },
];

export const distributionBoxPositionForm = [
  makeTitle("配电箱安装位置"),
  {
    ...makeUpload(1, 100),
    label: "配电箱安装位置",
    name: "distributionBoxPosition",
    required: true,
  },
];

export const junctionLocationForm = [
  makeTitle("并网点位置"),
  {
    ...makeUpload(1, 100),
    label: "并网点位置水印相机定位照(选填)",
    name: "junctionLocation",
    required: true,
  },
  {
    formType: "input",
    label: "能否进随车吊",
    value: "",
    required: true,
    name: "allowCrane",
    ...backSelect(),
    ...makeSelect("allowCrane", arrayToVantColumns(["能", "不能", "不确定"])),
  },
];

// export const multiConfluence = [
//   {
//     formType: "input",
//     label: "汇流组人工编号",
//     value: "",
//     name: "confluenceGroupNumber",
//   },
// ];
