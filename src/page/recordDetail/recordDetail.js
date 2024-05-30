export const record = [
  makeTitle("备案证详情"),
  {
    formType: "input",
    label: "项目公司",
    required: true,
    name: "companyId",
    ...backSelect(),
    ...makeSelect("companyId", [], "dynamic"),
    async backfill(bData) {
      const { data } = await http.get(queryUrl(`leaseLessor/getAuth`, { pageNum: 1, pageSize: 999 }));
      const columns = data.map((n) => ({ ...n, text: `${n.code}, ${n.companyName}, ${n.areaId}`, value: n.code }));
      this.makeSelect(bData[this.name] || columns[0]?.value, columns);
    },
  },
  {
    formType: "input",
    label: "备案类型",
    required: true,
    readonly: true,
    // disabled: true,
    value: "",
    name: "recordType",
    ...backSelect(),
    ...makeSelect("recordType", [
      { text: "大备案证", value: 1 },
      { text: "精准备案", value: 2 },
    ]),
  },
  {
    customSlot: "accreditCompanyIds",
    label: "可用组织",
    required: true,
    show: false,
    name: "accreditCompanyIds",
    value: [],
    columns: [],
    middleColumns: [],
    checkColumns: [],
    confirm() {
      this.show = false;
      this.checkColumns = lo.clone(this.middleColumns);
      this.checkColumns = lo.uniqBy(this.checkColumns, "value");
    },
    getParam(params) {
      params[this.name] = `[${this.checkColumns.map((n) => n.value + "")}]`;
      // .replace(/\//g, '')
    },
    check(n) {
      if (n.checked) {
        this.middleColumns.push(n);
      } else {
        const idx = this.middleColumns.findIndex((m) => m == n.value);
        this.middleColumns.splice(idx, 1);
      }
    },
    async backfill(bData) {
      const { data } = await http.get(queryUrl(`/company/infos`, { currentPage: 1, pageSize: 999 }));
      this.columns = data.records.map((n) => {
        return {
          ...n,
          text: n.name,
          value: n.companyId,
        };
      });
      JSON.parse(bData[this.name] || '[]').forEach((n) => {
        const item = this.columns.find((m) => m.value == n);
        if (item) {
          lo.set(item, "checked", true);
          this.check(item);
        }
      });
      this.confirm();
    },
    onMounted() {
      onUnmounted(() => {
        this.columns = [];
        this.middleColumns = [];
        this.checkColumns = [];
      });
    },
  },
  {
    formType: "input",
    label: "备案证编码",
    required: true,
    value: "",
    placeholder: "请输入",
    name: "recordCertificateId",
  },
  {
    formType: "input",
    label: "备案证容量",
    required: true,
    value: "",
    placeholder: "请输入",
    name: "recordCertificateCapacity",
    type: "digit",
    ...makeUnit("kW"),
    getParam(params) {
      params.recordCertificateCapacity = multiply(params.recordCertificateCapacity, 1000);
    },
    backfill(data) {
      this.value = divide(data.recordCertificateCapacity, 1000);
    },
  },
  {
    formType: "input",
    label: "备案证剩余容量",
    value: "",
    placeholder: "请输入",
    name: "surplusCapacity",
    type: "digit",
    hidden: computed(() => getItem("recordType", "realValue") != 1),
    ...makeUnit("kW"),
    getParam(params) {
      params.surplusCapacity = multiply(params.surplusCapacity, 1000);
    },
    backfill(data) {
      this.value = divide(data.surplusCapacity, 1000);
    },
  },
  {
    ...makeUpload(1, 100, "*", true, undefined, "accessory"),
    label: "备案证附件",
    required: true,
    name: "accessory",
    getParam(params) {
      params[this.name] = getUploadUrl(params[this.name][0]);
      const user = getUserVo()
      params.userId = user.userId
      // params.accessory = JSON.stringify(lo.get(params, 'accessory', []))
    },
  },
];
