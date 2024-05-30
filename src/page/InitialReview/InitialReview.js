export const show = [
  {
    formType: "",
    name: "designGroupShow",
    value: false,
    backfill(data) {
      this.value = false;
    },
    getParam(param) {
      delete param[this.name];
    },
  },
  {
    formType: "",
    name: "completeNbqPv",
    value: false,
    backfill(data) {
      this.value = data[this.name];
    },
    getParam(param) {
      param[this.name] = this.value;
    },
  },
  {
    name: "id",
    value: "",
    backfill(data) {
      this.value = data.id;
    },
    getParam(param) {
      param.id = this.value;
    },
  },
  {
    name: "designIdByPv",
    value: "",
    backfill(data) {
      this.value = data.designIdByPv;
    },
    getParam(param) {
      param.designIdByPv = this.value;
    },
  },
];

export const basicInfoForm = [
  {
    customSlot: "title",
    title: "基本信息",
    show: false,
    click() {
      router.push({
        path: "/designChangeLog",
        query: {
          orderId: getQuery().orderId,
        },
      });
    },
    onMounted() {
      this.show = getQuery().title == "设计变更信息";
    },
  },
  // makeTitle("基本信息"),
  {
    formType: "input",
    label: "设计类型",
    required: true,
    value: "",
    name: "designType",
    ...backSelect(),
    ...makeSelect("designType", arrayToVantColumns(["一字型", "人字型", "阵列式", "一字型+人字型", "一字型+阵列式", "人字型+阵列式"])),
    // backfill(data) {
    //   this.value = data.designType || "";
    //   this.realValue = data.designType || "";
    // },
    // getParam(params) {
    //   params.designType = "";
    // },
  },
  {
    formType: "input",
    label: "南坡组件数量",
    type: "digit",
    value: "",
    placeholder: "请输入",
    name: "southModuleNumber",
    rules: [(val) => val < 0 && "请输入正整数或 0"],
  },
  {
    formType: "input",
    label: "北坡组件数量",
    type: "digit",
    value: "",
    placeholder: "请输入",
    name: "northModuleNumber",
    rules: [(val) => val < 0 && "请输入正整数或 0"],
  },
  {
    formType: "input",
    label: "东坡组件数量",
    type: "digit",
    value: "",
    placeholder: "请输入",
    name: "eastModuleNumber",
    rules: [(val) => val < 0 && "请输入正整数或 0"],
  },
  {
    formType: "input",
    label: "西坡组件数量",
    type: "digit",
    value: "",
    placeholder: "请输入",
    name: "westModuleNumber",
    rules: [(val) => val < 0 && "请输入正整数或 0"],
  },
  {
    formType: "input",
    label: "是否有天窗",
    required: true,
    value: "",
    name: "skyLight",
    ...backSelect(),
    ...makeSelect("skyLight", [
      { text: "无", value: 0 },
      { text: "有", value: 1 },
    ]),
  },
  {
    formType: "input",
    label: "组件朝向",
    // required: true,
    value: "",
    name: "moduleTowards",
    ...backSelect(),
    ...makeSelect("moduleTowards", arrayToVantColumns(["正南", "东南", "西南", "正西", "正东", "正北", "东北", "西北"])),
  },
  {
    formType: "input",
    label: "方位角",
    required: true,
    value: "",
    type: "digit",
    name: "azimuthAngle",
    rules: [(val) => (val * 1 > 359 || val * 1 < 0) && "只允许输入 0-360 (含0, 不含360) 之间的数字, 不允许输入小数点, 不允许输入其他字符或中文"],
    ...makeUnit("度"),
  },
  {
    formType: "input",
    label: "倾斜角",
    required: true,
    value: "",
    type: "digit",
    name: "tiltAngle",
    rules: [(val) => (val * 1 > 89 || val * 1 < 0) && "只允许输入 0-89 (含0, 不含89) 之间的数字, 不允许输入小数点, 不允许输入其他字符或中文"],
    ...makeUnit("度"),
  },
  {
    formType: "input",
    label: "安装最高点(房屋+光伏总高度)",
    required: true,
    value: "",
    // type: "digit",
    name: "installedHeight",
    rules: [(val) => val < 0 && "高度不能为负数"],
    ...makeUnit("米"),
  },
];

export const zj = [
  makeTitle("组件"),
  {
    formType: "input",
    label: "设计组件功率",
    type: "digit",
    name: "deviceSpec",
    required: true,
    ...makeUnit("W"),
    backfill(data) {
      const value = lo.find(data.designDevice, ["deviceType", "ZUJIAN"]);
      this.value = lo.get(value, this.name);
    },
  },
  {
    formType: "input",
    label: "设计组件数量",
    value: "",
    required: true,
    type: "digit",
    name: "quantity",
    ...makeUnit("块"),
    backfill(data) {
      const value = lo.find(data.designDevice, ["deviceType", "ZUJIAN"]);
      this.value = lo.get(value, this.name);
    },
  },
  {
    formType: "input",
    label: "设计容量",
    placeholder: "自动计算",
    value: "",
    required: true,
    readonly: true,
    // type: "",
    name: "installedCapacityDesign",
    ...makeUnit("W", "dynamic"),
    backfill() {
      watchItem(["deviceSpec", "quantity"], ([deviceSpec, quantity]) => {
        const value = multiply(deviceSpec, quantity);
        this.realValue = value;
        const result = unitConver(value);
        console.log(result, 3333);
        this.value = result.realValue;
        this.makeUnit(result.unit);
      });
    },
  },
  {
    formType: "input",
    label: "基底分类",
    required: true,
    value: "",
    name: "moduleBaseType",
    ...backSelect(),
    ...makeSelect("moduleBaseType", arrayToVantColumns(["N型组件", "P型组件"])),
    // backfill(data) {
    //   const value = lo.find(data.designDevice, ['deviceType', "ZUJIAN"])
    //   this.value =lo.get(value, this.name)
    // },
  },
  {
    formType: "input",
    label: "背板分类",
    required: true,
    value: "",
    name: "moduleBackPlateType",
    ...backSelect(),
    ...makeSelect("moduleBackPlateType", arrayToVantColumns(["双玻双面", "单玻单面"])),
  },
  {
    name: "zj",
    getParam(params) {
      if (!lo.isArray(params.designDevice)) {
        params.designDevice = [];
      }
      const result = {
        deviceSpec: params.deviceSpec,
        quantity: params.quantity,
        deviceType: "ZUJIAN",
        // ...lo.pick(params, ["installedCapacityDesign", "moduleBaseType", "moduleBackPlateType"]),
      };
      params.designDevice.push(result);
      delete params.deviceSpec;
      delete params.quantity;
      // delete params.installedCapacityDesign;
      // delete params.moduleBaseType;
      // delete params.moduleBackPlateType;
    },
  },
];

export const nbq = [
  makeTitle("逆变器"),
  {
    formType: "input",
    label: "逆变器规格型号",
    type: "digit",
    name: "deviceSpec-nbq",
    value: "",
    ...makeUnit("kW"),
  },
  {
    formType: "input",
    label: "逆变器个数",
    type: "digit",
    name: "quantity-nbq",
    value: "",
    ...makeUnit("个"),
  },
  {
    formType: "cell",
    inputAlign: "center",
    titleClass: "xCenter",
    valueClass: "xCenter",
    name: "button-nbq",
    inlineForm: [
      {
        slot: "title",
        text: "添加",
        formType: "button",
        className: "bg-[#ddd] text-white h-8 w-[60%] rounded-2xl van-haptics-feedback ",
        disabled: true,
        click() {
          const deviceSpec = getItem("deviceSpec-nbq").value;
          const quantity = getItem("quantity-nbq").value;
          setItem("table-nbq", (v) => {
            v.value.push({ deviceSpec: deviceSpec + " kW", quantity });
            const group = lo.groupBy(v.value, "deviceSpec");
            const sums = lo.mapValues(group, (n) => lo.sumBy(n, (o) => o.quantity * 1));
            const result = [];
            lo.forIn(sums, (val, key) => {
              result.push({ deviceSpec: key, quantity: val });
            });
            v.value = result;
            setItem("deviceSpec-nbq", "value", "");
            setItem("quantity-nbq", "value", "");
            setItem("completeNbqPv", "value", false);
          });
        },
      },
      {
        slot: "value",
        text: "设计组串数量",
        formType: "button",
        className: "bg-[#ddd] text-white h-8 w-[60%] rounded-2xl van-haptics-feedback ",
        async click() {
          const event = useEvent();
          await event.saveData();
          await event.getData();
          setItem("designGroupShow", "value", true);
          const param = getParam();
          const query = lo.pick(param, ["id", "orderId", "designIdByPv"]);
          const table = lo.filter(param.designDevice, ["deviceType", "NBQ"]);
          const tableQ = table.reduce((pre, cur) => {
            cur = `${cur.deviceSpec}*${cur.quantity} `;
            pre += cur;
            return pre;
          }, "");
          setItem("designGroupShow", "query", { ...query, table: tableQ });

          // router.push({
          //   path: "/designGroup",
          //   query: {
          //     ...query,
          //     table: tableQ,
          //   },
          // });
        },
      },
    ],
    backfill() {
      watchItem(["deviceSpec-nbq", "quantity-nbq"], ([deviceSpec, quantity]) => {
        const flag = new Boolean(deviceSpec?.length && quantity?.length).valueOf();
        const color = flag ? "yellow" : "disabled";
        this.inlineForm[0].disabled = !flag;
        this.inlineForm[0].className = this.inlineForm[0].className.replace(/bg-[^ ]+/, `bg-${color}`);
      });
    },
  },
  {
    customSlot: "table-nbq",
    formType: "",
    name: "table-nbq",
    value: [],
    backfill(data) {
      this.value = (data.designDevice || []).filter((n) => n.deviceType == "NBQ");
      this.value.forEach((n) => {
        n.deviceSpec = n.deviceSpec + " kW";
      });
      computedAsync(() => {
        const v = this.value;
        const flag = new Boolean(v?.length).valueOf();
        const color = flag ? "yellow" : "disabled";
        setItem("button-nbq", (v) => {
          v.inlineForm[1].className = v.inlineForm[1].className.replace(/bg-[^ ]+/, `bg-${color}`);
        });
        return this.value;
      });
    },

    getParam(params) {
      if (!lo.isArray(params.designDevice)) {
        params.designDevice = [];
      }
      const result = this.value.map((v) => {
        const val = lo.clone(v);
        val.deviceSpec = val.deviceSpec.replace(/(\d+).*/, "$1");
        val.deviceType = "NBQ";
        delete val._X_ROW_KEY;
        return val;
      });
      params.designDevice.push(...result);
      delete params["deviceSpec-nbq"];
      delete params["quantity-nbq"];
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceSpec == row.deviceSpec);
      this.value.splice(index, 1);
      setItem("completeNbqPv", "value", false);
    },
  },
];

export const cjq = [
  makeTitle("采集器"),
  {
    formType: "input",
    label: "采集器个数",
    type: "digit",
    name: "deviceSpec-cjq",
    required: true,
    value: "",
    ...makeUnit("个"),
    backfill(data) {
      const value = lo.find(data.designDevice, ["deviceType", "CJQ"]);
      this.value = lo.get(value, "quantity");
    },
    getParam(params) {
      if (!lo.isArray(params.designDevice)) {
        params.designDevice = [];
      }
      const result = {
        quantity: this.value,
        deviceType: "CJQ",
      };
      params.designDevice.push(result);
      delete params["deviceSpec-cjq"];
    },
  },
];

export const pdx = [
  makeTitle("配电箱"),
  {
    formType: "input",
    label: "配电箱规格型号",
    type: "digit",
    name: "deviceSpec-pdx",
    value: "",
    ...makeUnit("A"),
  },
  {
    formType: "input",
    label: "配电箱个数",
    type: "digit",
    name: "quantity-pdx",
    value: "",
    ...makeUnit("个"),
  },
  {
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        text: "添加",
        formType: "button",
        className: "bg-[#ddd] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
        disabled: true,
        click() {
          const deviceSpec = getItem("deviceSpec-pdx").value;
          const quantity = getItem("quantity-pdx").value;
          setItem("table-pdx", (v) => {
            v.value.push({ deviceSpec: deviceSpec + " A", quantity });
            const group = lo.groupBy(v.value, "deviceSpec");
            const sums = lo.mapValues(group, (n) => lo.sumBy(n, (o) => o.quantity * 1));
            const result = [];
            lo.forIn(sums, (val, key) => {
              result.push({ deviceSpec: key, quantity: val });
            });
            v.value = result;

            setItem("deviceSpec-pdx", "value", "");
            setItem("quantity-pdx", "value", "");
          });
        },
      },
    ],
    backfill() {
      watchItem(["deviceSpec-pdx", "quantity-pdx"], ([deviceSpec, quantity]) => {
        const flag = new Boolean(deviceSpec?.length && quantity?.length).valueOf();
        const color = flag ? "yellow" : "disabled";
        this.inlineForm[0].disabled = !flag;
        this.inlineForm[0].className = this.inlineForm[0].className.replace(/bg-[^ ]+/, `bg-${color}`);
      });
    },
  },
  {
    customSlot: "table-pdx",
    formType: "",
    name: "table-pdx",
    value: [],
    backfill(data) {
      this.value = (data.designDevice || []).filter((n) => n.deviceType == "PDX");
      this.value.forEach((n) => {
        n.deviceSpec = n.deviceSpec + " A";
      });
    },
    getParam(params) {
      if (!lo.isArray(params.designDevice)) {
        params.designDevice = [];
      }
      const result = this.value.map((v) => {
        const val = lo.clone(v);
        val.deviceSpec = val.deviceSpec.replace(/(\d+).*/, "$1");
        val.deviceType = "PDX";
        delete val._X_ROW_KEY;
        return val;
      });
      params.designDevice.push(...result);
      delete params["deviceSpec-pdx"];
      delete params["quantity-pdx"];
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceSpec == row.deviceSpec);
      this.value.splice(index, 1);
    },
  },
];

export const structureChartForm = [
  makeTitle("结构图纸"),
  {
    ...makeUpload(999, 100, "*"),
    formType: "input",
    label: "结构图纸",
    required: true,
    name: "structureChart",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = JSON.stringify(param[this.name].map((n) => getUploadUrl(n)));
    },
  },
];

export const electricalDiagramForm = [
  makeTitle("电气图纸"),
  {
    ...makeUpload(999, 100, "*"),
    formType: "input",
    label: "电气图纸",
    required: true,
    name: "electricalDiagram",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = JSON.stringify(param[this.name].map((n) => getUploadUrl(n)));
    },
  },
];

export const billMaterials = [
  makeTitle("物料清单"),
  {
    label: "(BOM) 物料清单",
    name: "materialList",
    ...makeUpload(999, 100, "*", false, false),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = param[this.name].map((n) => getUploadUrl(n));
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    name: "saveMaterial",
    inlineForm: [
      {
        slot: "input",
        text: "只保存物料清单",
        formType: "button",
        className: "bg-yellow text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
        async click(show = true) {
          const param = lo.pick(getParam(), ["id", "orderId", "materialList"]);
          const data = await http.post("design/update-material", param);
          if (data.code == 200 && show) {
            showSuccessToast("保存物料清单成功");
          }
        },
      },
    ],
  },
];
