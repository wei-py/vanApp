export const goods = [
  {
    ...makeTitle("发货信息"),
    onMounted() {
      const query = getQuery();
      this.title += `(${query.title})`;
      onUnmounted(() => {
        this.title = "发货信息";
      });
    },
  },
  {
    formType: "input",
    readonly: true,
    name: "expId",
    label: "发货单号",
    placeholder: "系统自动生成",
    value: "",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
  {
    ...makeDate({ name: "createTime" }),
    required: true,
    label: "发货日期",
    placeholder: "发货日期",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
  {
    ...backSelect(),
    ...makeSelect("exportType", [
      { value: "FIRST_TO_SECOND", text: "一级仓库发二级仓库" },
      { value: "FIRST_TO_SITE", text: "一级仓库发现场" },
      { value: "SECOND_TO_SITE", text: "二级仓库发现场" },
    ]),
    name: "exportType",
    label: "发货类型",
    required: true,
  },
  {
    formType: "input",
    name: "shipperName",
    required: true,
    label: "发货人",
    placeholder: "发货人",
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
    name: "shipperPhone",
    label: "发货人电话",
    placeholder: "发货人电话",
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
  {
    ...backSelect(),
    ...makeSelect("shipperStoId", [], "dynamic"),
    name: "shipperStoId",
    label: "发货仓库",
    placeholder: "发货仓库",
    required: true,
    async backfill(bData) {
      const { data } = await http.get(queryUrl("/sto/room-sto-type", { stoType: "ZY" }));
      const columns = data.map((n) => ({ text: n.stoName, value: n.stoId }));
      const value = columns.find((n) => n.text == bData[this.name])?.value || "";
      // this.makeSelect(value, columns);
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    ...backSelect(),
    ...makeSelect("companyId", [], "dynamic"),
    name: "companyId",
    label: "收货组织",
    placeholder: "收货组织",
    required: true,
    async backfill(bData) {
      const query = getQuery();
      const { data } = await http.get(
        queryUrl("/sto/export-base/company", {
          type: query.exportType,
          expStoId: query.expId,
        })
      );
      const columns = data.map((n) => ({ text: n.name, value: n.companyId }));
      // const value = columns.find((n) => n.text == bData[this.name])?.value || "";
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    formType: "input",
    label: "备注",
    placeholder: "请输入备注",
    value: "",
    colon: true,
    // labelAlign: "top",
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
    ...makeTitle("发货单附件"),
  },
  {
    ...makeUpload(999, 100, undefined, undefined, undefined, false),
    label: "发货单签名",
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
          item.data.length = 0
          item.data.push(...values)
        });
        this.set(data[this.tab])
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
    name: "ZUJIAN",
    label: "设备编号",
    rightIcon: "scan",
    clearable: true,
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
