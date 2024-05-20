export const goods = [
  {
    ...makeTitle("退货信息"),
    onMounted() {
      const query = getQuery();
      this.title += `(${query.title})`;
      onUnmounted(() => {
        this.title = "退货信息";
      });
    },
  },
  {
    formType: "input",
    readonly: true,
    name: "backId",
    label: "退货单号",
    placeholder: "系统自动生成",
    value: "",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
  {
    ...makeDate({ name: "backApplyTime" }),
    required: true,
    label: "退货日期",
    placeholder: "退货日期",
    readonly: true,
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
  {
    ...backSelect(),
    ...makeSelect("backType", [
      { value: "FIRST_TO_SECOND", text: "二级仓库退一级仓库" },
      { value: "FIRST_TO_SITE", text: "现场退一级仓库" },
      { value: "SECOND_TO_SITE", text: "现场退二级仓库" },
    ]),
    name: "backType",
    label: "退货类型",
    required: true,
  },
  {
    formType: "input",
    name: "backName",
    required: true,
    readonly: true,
    label: "退货人",
    placeholder: "退货人",
    value: "",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
    backfill(data) {
      const user = getUserVo();
      this.value = data[this.name] || user.name;
    },
  },
  {
    formType: "input",
    name: "backPhone",
    label: "退货人电话",
    readonly: true,
    placeholder: "退货人电话",
    required: true,
    value: "",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
    backfill(data) {
      const user = getUserVo();
      this.value = data[this.name] || user.phone;
    },
  },
  // 特殊处理: 二级退一级
  {
    formType: "input",
    hidden: computed(() => getQuery()?.backType != "FIRST_TO_SECOND"), // FIRST_TO_SECOND
    name: "backStoName",
    label: "退货仓库",
    placeholder: "退货仓库",
    required: true,
    value: "",
  },
  {
    formType: "input",
    name: "backAddress",
    readonly: true,
    label: "退货地址",
    placeholder: "退货地址",
    required: true,
    value: "",
  },
  {
    formType: "input",
    name: "consigneeName",
    readonly: true,
    label: "收货人",
    placeholder: "收货人",
    required: true,
    value: "",
  },
  {
    formType: "input",
    name: "consigneePhone",
    readonly: true,
    label: "收货人电话",
    placeholder: "收货人电话",
    required: true,
    value: "",
  },
  {
    formType: "input",
    name: "consigneeStoName",
    readonly: true,
    label: "收货仓库",
    placeholder: "收货仓库",
    required: true,
    value: "",
  },
  {
    formType: "input",
    name: "deliveryAddress",
    label: "收货地址",
    readonly: true,
    placeholder: "收货地址",
    required: true,
    value: "",
  },

  /////hidden// formList.backStoName, // 发货电话
  // formList.backAddress, // 发货仓库
  // formList.consigneeName, //收货人
  // formList.consigneePhone, //收货电话
  // formList.consigneeStoName, //收货仓库
  // formList.deliveryAddress, // 收货地址

  // {
  //   ...backSelect(),
  //   ...makeSelect("backStoId", [], "dynamic"),
  //   name: "backStoId",
  //   label: "退货仓库",
  //   placeholder: "退货仓库",
  //   required: true,
  //   async backfill(bData) {
  //     // const { data } = await http.get(queryUrl("/sto/room-sto-type", { stoType: "ZY" }));
  //     // const columns = data.map((n) => ({ text: n.stoName, value: n.stoId }));
  //     // const value = columns.find((n) => n.text == bData[this.name])?.value || "";
  //     // // this.makeSelect(value, columns);
  //     // this.makeSelect(bData[this.name], columns);
  //   },
  // },

  // {
  //   ...backSelect(),
  //   ...makeSelect("companyId", [], "dynamic"),
  //   name: "companyId",
  //   label: "收货组织",
  //   placeholder: "收货组织",
  //   required: true,
  //   async backfill(bData) {
  //     // const query = getQuery();
  //     // const { data } = await http.get(
  //     //   queryUrl("/sto/export-base/company", {
  //     //     type: query.exportType,
  //     //     expStoId: query.backId,
  //     //   })
  //     // );
  //     // const columns = data.map((n) => ({ text: n.name, value: n.companyId }));
  //     // // const value = columns.find((n) => n.text == bData[this.name])?.value || "";
  //     // this.makeSelect(bData[this.name], columns);
  //   },
  // },

  {
    formType: "input",
    label: "备注",
    placeholder: "请输入备注",
    value: "",
    colon: true,
    labelAlign: "top",
    inputAlign: "left",
    name: "remark",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
];

export const exportImages = [
  {
    ...makeTitle("退货单附件"),
  },
  {
    ...makeUpload(999, 100, undefined, undefined, undefined, false),
    label: "退货单签名",
    name: "exportImages",
    required: true,
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = [param[this.name].map((n) => getUploadUrl(n))].flat();
    },
  },
];

export const deviceInfo = [
  {
    ...makeTitle("设备信息"),
  },
  {
    formType: "",
    name: "deviceSlot",
    customSlot: "deviceSlot",
    tab: "ZUJIAN",
    backfill(data, isFirst = true) {
      // console.log(data.deviceResVoMap, 333333);

      if (isFirst) {
        this.tabs.forEach((item) => {
          const values = lo.get(data, "deviceResVoMap." + item.name, []);
          item.data = values;
        });
        this.set(lo.get(data, "deviceResVoMap.ZUJIAN", []));
      } else {
        this.tabs.forEach((item) => {
          const values = lo.get(data, item.name, []);
          item.data.length = 0;
          item.data.push(...values);
        });
        this.set(data[this.tab]);
      }
      // setItem()
    },
    tabs: [
      { title: "组件", name: "ZUJIAN", value: "", data: [] },
      { title: "逆变器", name: "NBQ", value: "", data: [] },
      { title: "采集器", name: "CJQ", value: "", data: [] },
      { title: "配电箱", name: "PDX", value: "", data: [] },
    ],
    getParam(param) {
      param.deviceInfos = this.tabs.map((n) => n.data.map((m) => m.deviceId)).flat(2);
      param.state = getQuery()?.state;
      delete param.orderId;
    },
    add(deviceId) {
      const index = this.tabs.findIndex((n) => n.name == this.tab);
      const value = this.tabs[index].value;
      const values = [deviceId || value].flat().map((n) => ({ deviceId: n }));
      this.tabs[index].data.unshift(...values);
      setItem("table", "data", this.tabs[index].data);
      // this.tabs[index].value = "";
    },
    uniq() {
      const index = this.tabs.findIndex((n) => n.name == this.tab);
      this.tabs[index].data = lo.uniqBy(this.tabs[index].data, "deviceId");
      setItem("table", "data", this.tabs[index].data);
    },
    set(data) {
      const index = this.tabs.findIndex((n) => n.name == this.tab);
      this.tabs[index].data = data;
      setItem("table", "data", this.tabs[index].data);
    },
  },
];

export const deviceContent = [
  {
    formType: "input",
    value: "",
    hidden: computed(() => getQuery()?.backType != "FIRST_TO_SECOND"),
    name: "ZUJIAN",
    label: "设备编号",
    rightIcon: "scan",
    // clearable: true,
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
    getParam(param) {
      delete param[this.name];
    },
    rightIconClick() {
      openCode((code) => {
        setItem("deviceSlot", (v) => {
          const index = v.tabs.findIndex((n) => n.name == this.name);
          v.tabs[index].data.unshift([code].flat());
        });
      });
    },
    updateValue(value) {
      setItem("deviceSlot", (v) => {
        const index = v.tabs.findIndex((n) => n.name == this.name);
        v.tabs[index].value = value;
      });
    },
    change(tab) {
      setItem("deviceSlot", (v) => {
        v.tab = tab;
        const index = v.tabs.findIndex((n) => n.name == tab);
        this.value = v.tabs[index].value;
        this.name = v.tabs[index].name;
        setItem("table", "data", v.tabs[index].data);
      });
    },
  },

  {
    customSlot: "button",
    hidden: computed(() => getQuery()?.backType != "FIRST_TO_SECOND"),
    add() {
      setItem("deviceSlot", (v) => v.add());
    },
    uniq() {
      setItem("deviceSlot", (v) => v.uniq());
    },
    reset() {
      const tab = getItem("deviceSlot", "tab");
      setItem(tab, "value", "");
    },
  },
  {
    formType: "",
    name: "table",
    customSlot: "table",
    data: [],
    remove(row) {
      const index = this.data.findIndex((n) => n.deviceId == row.deviceId);
      this.data.splice(index, 1);
      setItem("deviceSlot", (device) => {
        device.set(this.data);
      });
    },
  },
];
