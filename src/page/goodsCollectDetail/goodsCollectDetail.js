const options = ["manufacturer", "supplier", "specificationsModel"];

export const impGoods = [
  {
    ...makeTitle("收货信息"),
    onMounted() {
      const query = getQuery();
      this.title += `(${query.title})`;
      onUnmounted(() => {
        this.title = "收货信息";
      });
    },
  },
  {
    formType: "input",
    readonly: true,
    name: "impId",
    label: "收货单号",
    placeholder: "系统自动生成",
    value: "",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
    },
  },
  {
    ...backSelect(),
    ...makeSelect("consigneeStoId", [], "dynamic"),
    name: "consigneeStoId",
    label: "收货仓库",
    placeholder: "收货仓库",
    required: true,
    async backfill(bData) {
      const query = getQuery();
      const param = { stoType: query.deliveryType == "ORIGIN_TO_FIRST" ? "ZY" : "JMS" };
      const { data } = await http.get(queryUrl(`sto/room-sto-type`, param));
      const columns = data.map((n) => ({ text: n.stoName, value: n.stoId }));
      const value = columns.find((n) => n.text == bData[this.name])?.value || "";
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    ...backSelect(),
    ...makeSelect("importType", [
      { value: "ORIGIN_TO_FIRST", text: "一级仓库入库供应商设备" },
      // { value: 'FIRST_TO_SITE', text: '现场验收一级仓库设备' },
      // { value: 'SECOND_TO_SITE', text: '现场验收一级仓库设备' },
      { value: "FIRST_TO_SECOND", text: "二级仓库收一级仓库设备" },
      // { value: "FIRST_TO_SECOND", text: "一级仓库发二级仓库" },
      // { value: "FIRST_TO_SITE", text: "一级仓库发现场" },
      // { value: "SECOND_TO_SITE", text: "二级仓库发现场" },
    ]),
    name: "importType",
    label: "收货类型",
    required: true,
  },
  {
    formType: "input",
    name: "consigneeName",
    required: true,
    label: "收货人",
    placeholder: "收货人",
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
    name: "consigneePhone",
    label: "收货人电话",
    placeholder: "收货人电话",
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
    ...makeDate({ name: "impTime" }),
    required: true,
    label: "收货日期",
    placeholder: "收货日期",
    onMounted() {
      onUnmounted(() => {
        this.value = "";
      });
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

export const importImages = [
  {
    ...makeTitle("收货单附件"),
  },
  {
    ...makeUpload(999, 100, undefined, undefined, undefined, false),
    label: "收货单签名",
    name: "importImages",
    required: true,
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = [param[this.name].map((n) => getUploadUrl(n))].flat();
    },
  },
];

export const impDeviceInfo = [
  {
    ...makeTitle("设备信息"),
  },
  {
    formType: "",
    name: "deviceSlot",
    customSlot: "deviceSlot",
    tab: "ZUJIAN",
    async backfill(data, isFirst = true) {
      if (isFirst) {
        this.tabs.forEach((item) => {
          const values = lo.get(data, "stoDeviceMap." + item.name, []);
          item.data = values;
        });
        this.set(lo.get(data, "stoDeviceMap.ZUJIAN", []));

        for (const tab of this.tabs) {
          for (const op of options) {
            const { data } = await http.post(queryUrl("/sto/device-args/list", { option: op }), { deviceType: tab.name });
            tab[op].columns = data.map((n) => ({ text: lo.get(n, op, n), value: lo.get(n, op, n), ...n }));
            setItem(op, (v) => v.set(tab[op]));
          }
        }
      } else {
        this.tabs.forEach((item) => {
          const values = lo.get(data, item.name, []);
          item.data.length = 0;
          item.data.push(...values);
        });
        this.set(lo.get(data, this.tab, []));
      }
    },
    tabs: [
      {
        title: "组件",
        name: "ZUJIAN",
        value: "",
        data: [],
        manufacturer: { value: "", columns: [] },
        supplier: { value: "", columns: [] },
        specificationsModel: { value: "", columns: [] },
      },
      {
        title: "逆变器",
        name: "NBQ",
        value: "",
        data: [],
        manufacturer: { value: "", columns: [] },
        supplier: { value: "", columns: [] },
        specificationsModel: { value: "", columns: [] },
      },
      {
        title: "采集器",
        name: "CJQ",
        value: "",
        data: [],
        manufacturer: { value: "", columns: [] },
        supplier: { value: "", columns: [] },
        specificationsModel: { value: "", columns: [] },
      },
      {
        title: "配电箱",
        name: "PDX",
        value: "",
        data: [],
        manufacturer: { value: "", columns: [] },
        supplier: { value: "", columns: [] },
        specificationsModel: { value: "", columns: [] },
      },
    ],
    getParam(param) {
      const query = getQuery();
      const isORIGIN_TO_FIRST = query.deliveryType == "ORIGIN_TO_FIRST";
      const deviceField = isORIGIN_TO_FIRST ? "deviceList" : "deviceInfos";
      const pickFields = [
        "deviceId",
        "manufacturer",
        "manufacturerShortName",
        "manufacturerShortCode",
        "supplier",
        "specificationsModel",
        "specs",
        "deviceType",
      ];
      param[deviceField] = this.tabs.map((data) => data.data.map((n) => lo.pick(n, pickFields))).flat();

      param.state = getQuery()?.state;
    },
    add(deviceId) {
      const result = {};
      const index = this.tabs.findIndex((n) => n.name == this.tab);
      // const value = this.tabs[index].value;
      result.deviceId = this.tabs[index].value;

      for (const op of options) {
        result[op] = this.tabs[index][op].value;
        const other = this.tabs[index][op].columns.find((n) => n[op] == result[op]);
        lo.merge(result, other);
      }
      result.deviceType = this.tab;

      const values = [deviceId || result].flat();
      this.tabs[index].data.unshift(...values);
      setItem("table", "data", this.tabs[index].data);
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

export const impDeviceContent = [
  {
    ...backSelect(),
    ...makeSelect("manufacturer", [], "dynamic"),
    name: "manufacturer",
    label: "生产厂家",
    placeholder: "请选择",
    set(item) {
      this.makeSelect(item.value, item.columns);
    },
    // updateValue(value) {
    //   setItem("deviceSlot", (v) => {
    //     const index = v.tabs.findIndex((n) => n.name == this.name);
    //     v.tabs[index][this.name].value = value;
    //   });
    // },
    backfill() {
      watchItem(this.name, (value) => {
        setItem("deviceSlot", (v) => {
          const index = v.tabs.findIndex((n) => n.name == v.tab);
          v.tabs[index][this.name].value = value;
        });
      });
    },
  },
  {
    ...backSelect(),
    ...makeSelect("supplier", [], "dynamic"),
    name: "supplier",
    label: "供应商",
    placeholder: "请选择",
    set(item) {
      this.makeSelect(item.value, item.columns);
    },
    // updateValue(value) {
    //   setItem("deviceSlot", (v) => {
    //     const index = v.tabs.findIndex((n) => n.name == this.name);
    //     v.tabs[index][this.name].value = value;
    //   });
    // },
    backfill() {
      watchItem(this.name, (value) => {
        setItem("deviceSlot", (v) => {
          const index = v.tabs.findIndex((n) => n.name == v.tab);
          v.tabs[index][this.name].value = value;
        });
      });
    },
  },
  {
    ...backSelect(),
    ...makeSelect("specificationsModel", [], "dynamic"),
    name: "specificationsModel",
    label: "规格型号",
    placeholder: "请选择",
    set(item) {
      this.makeSelect(item.value, item.columns);
    },
    // updateValue(value) {
    //   setItem("deviceSlot", (v) => {
    //     const index = v.tabs.findIndex((n) => n.name == this.name);
    //     v.tabs[index][this.name].value = value;
    //   });
    // },
    backfill() {
      watchItem(this.name, (value) => {
        setItem("deviceSlot", (v) => {
          const index = v.tabs.findIndex((n) => n.name == v.tab);
          v.tabs[index][this.name].value = value;
        });
      });
    },
  },
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
      delete param.orderId;
      delete param.manufacturer;
      delete param.supplier;
      delete param.specificationsModel;
      delete param[this.name];
    },
    clickRightIcon() {
      const opFlag = options.every((op) => getItem(op, "value"));
      if (!opFlag) {
        showFailToast({
          message: "请先填写生产厂家、供应商、规格型号",
          className: "!bg-[red]",
        });
        return;
      }
      let value = {};
      setItem("deviceSlot", (v) => {
        const index = v.tabs.findIndex((n) => n.name == this.name);
        for (const op of options) {
          value[op] = v.tabs[index][op].value;
        }
      });
      openCode((code) => {
        setItem("deviceSlot", (v) => {
          const index = v.tabs.findIndex((n) => n.name == this.name);
          v.tabs[index].data.unshift([code].flat().map((n) => ({ deviceId: n, ...value })));
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

        for (const op of options) {
          setItem(op, (o) => {
            o.set(v.tabs[index][op]);
          });
        }
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

/**
 * 接口管理
 * @description query.state  0: 待发货('no') 1: 已发货('')
 * @description query.acceptType 0:
 */
export const urlDic = {
  show: {
    ORIGIN_TO_FIRST: {
      getDataUrl: "sto/import-base/origin-firststockroom",
      saveUrl: "sto/import-base/origin-firststockroom",
      deliveryType: "ORIGIN_TO_FIRST",
    },
    FIRST_TO_SITE: {
      getDataUrl: "sto/import-base/show/import-part",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "FIRST_TO_SITE",
    },
    FIRST_TO_SECOND: {
      getDataUrl: "sto/import-base/show/import-part",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "FIRST_TO_SECOND",
    },
    SECOND_TO_SITE: {
      getDataUrl: "sto/import-base/show/import-part",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "SECOND_TO_SITE",
    },
  },
  noshow: {
    ORIGIN_TO_FIRST: {
      getDataUrl: "sto/import-base/origin-firststockroom",
      saveUrl: "sto/import-base/origin-firststockroom",
      deliveryType: "ORIGIN_TO_FIRST",
    },
    FIRST_TO_SITE: {
      getDataUrl: "sto/import-base/show/import-part-init",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "FIRST_TO_SITE",
    },
    FIRST_TO_SECOND: {
      getDataUrl: "sto/import-base/show/import-part-init",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "FIRST_TO_SECOND",
    },
    SECOND_TO_SITE: {
      getDataUrl: "sto/import-base/show/import-part-init",
      saveUrl: "sto/import-base/add/import-part",
      deliveryType: "SECOND_TO_SITE",
    },
  },
  detail: {
    // 收货详情
    ORIGIN_TO_FIRST: {
      getDataUrl: "sto/import-base/origin-firststockroom",
      saveUrl: "sto/import-base/origin-firststockroom",
      deliveryType: "ORIGIN_TO_FIRST",
    },
    FIRST_TO_SITE: {
      getDataUrl: "sto/import-base/show/direct-import",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "FIRST_TO_SITE",
    },
    FIRST_TO_SECOND: {
      getDataUrl: "sto/import-base/show/direct-import",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "FIRST_TO_SECOND",
    },
    SECOND_TO_SITE: {
      getDataUrl: "sto/import-base/show/direct-import",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "SECOND_TO_SITE",
    },
  },
  nodetail: {
    ORIGIN_TO_FIRST: {
      getDataUrl: "sto/import-base/origin-firststockroom",
      saveUrl: "sto/import-base/origin-firststockroom",
      deliveryType: "ORIGIN_TO_FIRST",
    },
    FIRST_TO_SITE: {
      getDataUrl: "sto/import-base/show/direct-import-init",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "FIRST_TO_SITE",
    },
    FIRST_TO_SECOND: {
      getDataUrl: "sto/import-base/show/direct-import-init",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "FIRST_TO_SECOND",
    },
    SECOND_TO_SITE: {
      getDataUrl: "sto/import-base/show/direct-import-init",
      saveUrl: "sto/import-base/add/direct-import",
      deliveryType: "SECOND_TO_SITE",
    },
  },
};
