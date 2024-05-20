export const filtrate = [
  {
    name: "stageId",
    value: "",
    columns: [{ text: "项目阶段", value: "" }],
    title: "项目阶段",
    async backfill() {
      const query = getQuery();
      if (query.from != "cysj") {
        this.disabled = true;
        return;
      }
      const { data } = await http.get("/order-state/stage");
      const columns = data.map((n) => {
        return { ...n, text: `${n.stageName} - (${n.count})`, value: n.stageId };
      });
      this.columns = [{ text: "项目阶段", value: "" }, ...columns];
      setItem("stageId-more", (v) => {
        v.makeSelect(this.value, this.columns);
      });
    },
    onMounted() {
      onUnmounted(() => {
        this.disabled = false;
        this.value = "";
      });
    },
  },
  {
    name: "companyId",
    value: "",
    columns: [{ text: "所属组织", value: "" }],
    title: "所属组织",
    async backfill() {
      const { data } = await http.get("/company/auth-list?pageNum=1&pageSize=9999");
      const columns = data.records.map((n) => {
        return { text: n.name, value: n.companyId };
      });
      this.columns = [{ text: "所属组织", value: "" }, ...columns];
      setItem("companyId-more", (v) => {
        v.makeSelect(this.value, this.columns);
      });
    },
  },
  {
    name: "prjCompanyId",
    value: "",
    columns: [{ text: "项目公司", value: "" }],
    title: "项目公司",
    async backfill() {
      const type = isZZD_ORG().value ? "ZZD_ORG" : "ZZD";
      const { data } = await http.get(queryUrl("/leaseLessor/getAuth", { pageNum: 1, pageSize: 9999, type }));
      const columns = data.map((n) => {
        return { value: n.code, text: `${n.code}, ${n.companyName}, ${n.areaId}` };
      });
      this.columns = [{ text: "项目公司", value: "" }, ...columns];
      setItem("prjCompanyId-more", (v) => {
        v.makeSelect(this.value, this.columns);
      });
    },
  },
  {
    name: "leaseProductCode",
    value: "",
    columns: [{ text: "产品地区", value: "" }],
    title: "产品地区",
    async backfill() {
      const type = isZZD_ORG().value ? "ZZD_ORG" : "ZZD";
      const { data } = await http.get(queryUrl(`/leasePrjProjectProduct/get`, { isPage: false, type }));
      const columns = data.map((n) => {
        return { value: n.code, text: `${n.code}, ${n.areaType}, ${n.area}` };
      });
      this.columns = [{ text: "产品地区", value: "" }, ...columns];
      setItem("leaseProductCode-more", (v) => {
        v.makeSelect(this.value, this.columns);
      });
    },
  },
];

export const moreForm = [
  {
    formType: "input",
    ...makeSelect("stageId-more", [], "dynamic"),
    name: "stageId-more",
    value: "",
    columns: [{ text: "项目阶段", value: "" }],
    label: "项目阶段",
    async backfill() {
      const stageId = getItem("stageId");
      this.makeSelect(stageId.value, stageId.columns);
    },
    getParam(param) {
      const name = this.name.replace("-more", "");
      param[name] = this.realValue;
      delete param[this.name];
      setItem(name, "value", param[name]);
    },
  },
  {
    formType: "input",
    ...makeSelect("companyId-more", [], "dynamic"),
    name: "companyId-more",
    value: "",
    columns: [{ text: "所属组织", value: "" }],
    label: "所属组织",
    async backfill() {
      const companyId = getItem("companyId");
      this.makeSelect(companyId.value, companyId.columns);
    },
    getParam(param) {
      const name = this.name.replace("-more", "");
      param[name] = this.realValue;
      delete param[this.name];
      setItem(name, "value", param[name]);
    },
  },
  {
    formType: "input",
    ...makeSelect("prjCompanyId-more", [], "dynamic"),
    name: "prjCompanyId-more",
    value: "",
    columns: [{ text: "项目公司", value: "" }],
    label: "项目公司",
    async backfill() {
      const prjCompanyId = getItem("prjCompanyId");
      this.makeSelect(prjCompanyId.value, prjCompanyId.columns);
    },
    getParam(param) {
      const name = this.name.replace("-more", "");
      param[name] = this.realValue;
      delete param[this.name];
      setItem(name, "value", param[name]);
    },
  },
  {
    formType: "input",
    ...makeSelect("leaseProductCode-more", [], "dynamic"),
    name: "leaseProductCode-more",
    value: "",
    columns: [{ text: "产品地区", value: "" }],
    label: "产品地区",
    async backfill() {
      const leaseProductCode = getItem("leaseProductCode");
      this.makeSelect(leaseProductCode.value, leaseProductCode.columns);
    },
    getParam(param) {
      const name = this.name.replace("-more", "");
      param[name] = this.realValue;
      delete param[this.name];
      setItem(name, "value", param[name]);
    },
  },
  {
    customSlot: "checkbox",
    name: "checkbox",
    value: "正常",
    columns: [
      { text: "正常", value: "正常" },
      { text: "内审驳回", value: "内审驳回" },
      { text: "资方驳回", value: "资方驳回" },
      { text: "终止", value: "终止" },
    ],
    label: "生命状态",
    getParam(param) {
      const dic = {
        正常: {},
        内审驳回: { stageId: "", stateId: "REJECT", taskId: "", excludeStateIds: "APPROVAL_REJECT_LEASE" },
        资方驳回: { stageId: "", stateId: "APPROVAL_REJECT_LEASE" },
        终止: { stageId: "TERMINATE", stateId: "TERMINATE", taskId: null },
      };
      lo.merge(param, dic[this.value]);
    },
  },
  {
    formType: "input",
    label: "省市区",
    name: "address",
    isLink: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "",
    required: true,
    placeholder: "请选择所在地区",
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    click() {
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    getParam(param) {
      const [provinceCode, cityCode, areaCode] = this.middle.value;
      param.address = { provinceCode: provinceCode || "", cityCode: cityCode || "", areaCode: areaCode || "" };
      delete param.provinceCode;
      delete param.cityCode;
      delete param.areaCode;
      // lo.merge(param, { provinceCode, cityCode, areaCode });
    },
    async backfill(data) {
      runTime(async () => {
        const cascader = getItem(this.name, "inlineForm.0.inlineForm.0");
        cascader.options = await getArea();
        const value = data.areaCode || data.cityCode;
        setItem(this.name, "inlineForm.0.inlineForm.0.value", value);
        const tree = searchTree(cascader.options, (n) => n.value == value);
        const arr = toTreeArray(tree);
        cascader.finish({ selectedOptions: arr, value: value });
      });
    },

    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        show: false,
        round: true,
        name: "addressPop",
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "cascader",
            title: "请选择所在地区",
            options: [],
            value: "",
            close() {
              setItem("address", "inlineForm.0.show", false);
            },
            finish(result) {
              const text = result.selectedOptions.map((n) => n.text).join("/");
              const value = result.selectedOptions.map((n) => n.value);
              this.value = result.value;
              setItem("address", text);
              setItem("address", "middle.value", value);
              setItem("address", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    name: "sellManName",
    value: "",
    label: "销售人员",
    placeholder: "请输入销售人员",
  },
  {
    formType: "",
    customSlot: "timeSortType",
    name: "timeSortType",
    value: "desc",
    columns: [
      { text: "按时间正序", value: "asc" },
      { text: "按时间倒序", value: "desc" },
    ],
    label: "排序方式",
    getParam(param) {
      param[this.name] = this.value;
    },
  },
  {
    formType: "input",
    name: "preApprovalTimeScope",
    value: "",
    label: "预审时段",
    isLink: true,
    realValue: [],
    readonly: true,
    click() {
      this.inlineForm[0].show = true;
    },
    getParam(param) {
      const [beginDateTime, endDateTime] = this.realValue;
      if (beginDateTime) {
        param[this.name] = { beginDateTime: beginDateTime || "", endDateTime: endDateTime || "" };
      } else {
        delete param[this.name];
      }
    },
    inlineForm: [
      {
        slot: "button",
        formType: "calendar",
        allowSameDay: true,
        class: "!z-[2018]",
        show: false,
        type: "range",
        confirm(values) {
          const time = values.map((n) => dayjs(n).format("YYYY-MM-DD"));
          setItem("preApprovalTimeScope", (v) => {
            v.realValue = time;
            v.value = `${time[0]} 至 ${time[1]}`;
            v.inlineForm[0].show = false;
          });
        },
      },
    ],
  },
  {
    formType: "input",
    name: "contractSingedTimeScope",
    value: "",
    columns: [],
    label: "开工时段",
    isLink: true,
    realValue: [],
    readonly: true,
    click() {
      this.inlineForm[0].show = true;
    },
    getParam(param) {
      const [beginDateTime, endDateTime] = this.realValue;
      if (beginDateTime) {
        param[this.name] = { beginDateTime: beginDateTime || "", endDateTime: endDateTime || "" };
      } else {
        delete param[this.name];
      }
    },
    inlineForm: [
      {
        slot: "button",
        formType: "calendar",
        allowSameDay: true,
        show: false,
        type: "range",
        confirm(values) {
          const time = values.map((n) => dayjs(n).format("YYYY-MM-DD"));
          setItem("contractSingedTimeScope", (v) => {
            v.realValue = time;
            v.value = `${time[0]} 至 ${time[1]}`;
            v.inlineForm[0].show = false;
          });
        },
      },
    ],
  },
  {
    formType: "input",
    name: "constructionTimeScope",
    value: "",
    columns: [],
    label: "签约时段",
    isLink: true,
    realValue: [],
    readonly: true,
    click() {
      this.inlineForm[0].show = true;
    },
    getParam(param) {
      const [beginDateTime, endDateTime] = this.realValue;
      if (beginDateTime) {
        param[this.name] = { beginDateTime: beginDateTime || "", endDateTime: endDateTime || "" };
      } else {
        delete param[this.name];
      }
    },
    inlineForm: [
      {
        slot: "button",
        formType: "calendar",
        allowSameDay: true,
        show: false,
        type: "range",
        confirm(values) {
          const time = values.map((n) => dayjs(n).format("YYYY-MM-DD"));
          setItem("constructionTimeScope", (v) => {
            v.realValue = time;
            v.value = `${time[0]} 至 ${time[1]}`;
            v.inlineForm[0].show = false;
          });
        },
      },
    ],
  },
];
