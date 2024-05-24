export const certificate = [
  makeTitle(isZZD_ORG() ? "备案证及权属证明" : ""),
  {
    formType: "input",
    label: "备案证类型",
    name: "recordType",
    required: true,
    ...backSelect(),
    ...makeSelect("recordType", [
      { text: "大备案证", value: 1 },
      { text: "精准备案", value: 2 },
    ]),
  },
  {
    formType: "input",
    label: "项目公司",
    name: "companyId",
    required: true,
    ...backSelect(),
    ...makeSelect("companyId", [], "dynamic"),
    async backfill(bData) {
      if (bData.orderRecordType == "RECORD_NP") {
        this.isLink = false;
        this.clickable = false;
        this.value = "";
        this.value = "非项目公司备案无需填写备案证信息";
        this.reaonly = true;
      } else {
        const url = queryUrl("leaseLessor/getAuth", { pageNum: 1, pageSize: 999, orderId: getQuery()?.orderId, recordType: bData.orderRecordType });
        const { data } = await http.get(url);
        const columns = data.map((item) => ({
          ...item,
          text: `${item.code}, ${item.companyName}, ${item.areaId}`,
          disabled: item.disabled,
          value: item.code,
        }));
        this.makeSelect(bData.companyId, columns);
        this.click = () => {}; // 无需选择
        // this.columns.push(...columns)
      }
    },
  },
  {
    formType: "input",
    name: "recordCertificateId",
    label: "备案证编码",
    realValue: "",
    required: true,
    getParam(param) {
      param[this.name] = this.realValue || this.value;
    },
    isLink: true,
    readonly: true,
    placeholder: "请选择直接输入或选择",
    inlineForm: [
      {
        slot: "right-icon",
        formType: "popup",
        name: "recordCertificateIdPop",
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
              setItem("recordCertificateId", "value", val.selectedOptions[0].text);
              setItem("recordCertificateId", "realValue", val.selectedOptions[0].value);
              setItem("recordCertificateId", "inlineForm.0.show", false);
              setItem("accessory", "inlineForm.0.value", [{ url: sToUrl(val.selectedOptions[0].accessory) }]);
              setItem("recordCertificateCapacity", "value", divide(val.selectedOptions[0].recordCertificateCapacity, 1000));
            },
            columns: [],
          },
        ],
      },
      {
        slot: "button",
        name: "recordCertificateIdRightIcon",
        formType: "popover",
        show: false,
        placement: "bottom-end",
        actions: [],
        style: { width: "250px", height: "40vh" },
        select(action) {
          setItem("recordCertificateId", "value", action.value);
          setItem("recordCertificateCapacity", "value", divide(action.recordCertificateCapacity, 1000));
          setItem("accessory", "inlineForm.0.value", [{ url: sToUrl(action.accessory) }]);
        },
      },
    ],

    async backfill(bData) {
      watchItem(["companyId", "recordType"], async ([companyId, recordType]) => {
        const { data } = await http.post("record/list?isAuth=false", { recordType, companyId });
        if (recordType == 1) {
          // 大备案
          this.value = "";
          this.readonly = true;
          this.isLink = true;
          this.click = () => {
            const flag = useFlag();
            this.inlineForm[0].show = flag.btns.canEdit;
          };
          const columns = data.map((n) => ({ ...n, text: n.recordCertificateId, value: n.recordCertificateId }));
          this.inlineForm[0].inlineForm[0].columns = columns;
          setItem("surplusCapacity", "hidden", false);
          setItem("recordCertificateCapacity", "readonly", true);
        } else {
          const actions = data.map((n) => ({ ...n, text: n.recordCertificateId, value: n.recordCertificateId }));
          this.updateValue = (value) => {
            const filterActions = actions.filter((n) => n.value.includes(value));
            this.inlineForm[1].show = new Boolean(filterActions.length || value.length);
            this.inlineForm[1].actions = filterActions;
          };
          this.value = "";
          this.readonly = false;
          this.isLink = false;
          this.click = () => {};
          setItem("surplusCapacity", "hidden", true);
          setItem("recordCertificateCapacity", "readonly", false);
        }
      });
      await wait(2000);
      setItem("recordCertificateId", "value", bData.recordCertificateId);
      setItem("recordCertificateId", "realValue", bData.recordCertificateId);
    },
  },
  {
    formType: "input",
    label: "备案证容量",
    name: "recordCertificateCapacity",
    value: "",
    required: true,
    ...makeUnit("kW"),
    getParam(param) {
      param[this.name] = multiply(param[this.name], 1000);
    },
    backfill(data) {
      this.value = divide(data.recordCertificateCapacity * 1, 1000);
    },
  },
  {
    formType: "input",
    label: "本项目拟安装容量",
    required: true,
    readonly: true,
    name: "installedCapacityReckon",
    value: "",
    ...makeUnit("kW"),
    backfill(data) {
      this.value = divide(data.installedCapacityReckon * 1, 1000);
    },
    getParam(param) {
      param[this.name] = multiply(param[this.name], 1000);
    },
  },
  {
    formType: "input",
    label: "剩余备案容量",
    name: "surplusCapacity",
    placeholder: "自动计算",
    readonly: true,
    value: "",
    ...makeUnit("kW"),
    backfill(data) {
      this.realValue = data.surplusCapacity;
      this.value = divide(data.surplusCapacity * 1, 1000);
      watchItem(["recordCertificateCapacity", "installedCapacityReckon"], ([recordCertificateCapacity, installedCapacityReckon]) => {
        this.realValue = subtract(recordCertificateCapacity, installedCapacityReckon);
        this.value = this.realValue * 1;
      });
    },
    getParam(param) {
      param[this.name] = multiply(param[this.name], 1000);
    },
  },
  {
    ...makeUpload(1, 100),
    label: "备案证附件",
    name: "accessory",
    required: true,
  },
  {
    ...makeUpload(999, 100),
    label: "房屋权属证明",
    name: "propertyCertificate",
    required: true,
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
  },
];
