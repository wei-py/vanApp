export const lessorInfo = [
  makeTitle("客户信息"),
  {
    formType: "input",
    label: "姓名",
    name: "name",
    value: "",
    required: true,
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "input",
    label: "证件号码",
    name: "idNumber",
    value: "",
    required: true,
    hidden: isZZD_ORG(),
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "cell",
    title: "证件照片",
    name: "",
    readonly: true,
    titleClass: "xCenter text-[16px]",
  },
  { ...makeUpload(1, 50), required: true, label: "证件正面(头像面)", name: "idCardFront" },
  { ...makeUpload(1, 50), required: true, label: "证件反面(国徽面)", name: "idCardBack" },
  {
    formType: "input",
    label: "出租人电话",
    name: "phone",
    value: "",
    required: true,
    hidden: isZZD_ORG(),
    readonly: true,
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "input",
    label: "婚姻信息",
    value: "",
    name: "maritalStatus",
    placeholder: "请选择婚姻信息",
    hidden: isZZD_ORG(),
    ...backSelect(),
    ...makeSelect("maritalStatus", [
      { text: "已婚", value: "已婚" },
      { text: "未婚", value: "未婚" },
    ]),
  },
  {
    formType: "input",
    label: "教育程度",
    name: "educationalBackground",
    placeholder: "请选择教育程度",
    value: "",
    hidden: isZZD_ORG(),
    ...backSelect(),
    ...makeSelect("educationalBackground", [
      { text: "初等教育", value: "初等教育" },
      { text: "中等教育", value: "中等教育" },
      { text: "高等教育", value: "高等教育" },
    ]),
  },
  {
    formType: "input",
    label: "职业",
    name: "career",
    placeholder: "请选择职业",
    value: "",
    hidden: isZZD_ORG(),
    ...backSelect(),
    ...makeSelect(
      "career",
      arrayToVantColumns([
        "国家机关、党群组织、企业、事业单位负责人",
        "专业技术人员",
        "办事人员和有关人员",
        "商业、服务业人员",
        "农、林、牧、渔、水利业生产人员",
        "生产、运输设备操作人员及有关人员",
        "军人",
        "不便分类的其他从业人员",
      ])
    ),
  },
  {
    formType: "input",
    label: "家庭经济情况",
    name: "economy",
    placeholder: "请选择家庭经济情况",
    value: "",
    hidden: isZZD_ORG(),
    ...backSelect(),
    ...makeSelect("economy", arrayToVantColumns(["赤贫", "很穷", "穷", "小康", "中产", "高产", "小富", "中富", "巨富"])),
  },
  {
    formType: "input",
    label: "健康情况",
    name: "health",
    placeholder: "请选择健康情况",
    value: "",
    hidden: isZZD_ORG(),
    ...backSelect(),
    ...makeSelect("health", arrayToVantColumns(["健康", "亚健康", "疾病"])),
  },
  {
    formType: "input",
    label: "省市区",
    name: "houseAddr",
    // isLink: true,
    rightIcon: "arrow",
    readonly: true,
    value: "",
    required: true,
    placeholder: "请选择所在地区",
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    clickRightIcon() {
      const flag = useFlag()
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    getParam(param) {
      const [provinceCode, cityCode, areaCode] = this.middle.value;
      // param.houseAddr = { provinceCode, cityCode, areaCode };
      lo.merge(param, { provinceCode, cityCode, areaCode });
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
        name: "houseAddrPop",
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "cascader",
            title: "请选择所在地区",
            options: [],
            value: "",
            close() {
              setItem("houseAddr", "inlineForm.0.show", false);
            },
            finish(result) {
              const text = result.selectedOptions.map((n) => n.text).join("/");
              const value = result.selectedOptions.map((n) => n.value);
              this.value = result.value;
              setItem("houseAddr", text);
              setItem("houseAddr", "middle.value", value);
              setItem("houseAddr", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },

  {
    formType: "input",
    label: "详细地址",
    name: "installationAddress",
    placeholder: "(从省/自治区/直辖市/特别行政区 开始写)",
    required: true,
    hidden: isZZD_ORG(),
    value: "",
    inputAlign: "left",
    errorMessage: "提示: 若无不动产权证/房产证/宅基地证, 需和村委开具的房屋权属证明地址完全一致(从省/自治区/直辖市/特别行政区 开始写)",
  },
];

export const bankInfo = [
  makeTitle("租金收益银行卡"),
  { ...makeUpload(1, 100, "*"), required: true, label: "银行卡-卡号面", name: "bankCardFront" },
  {
    formType: "input",
    name: "bankAccount",
    label: "账户名",
    placeholder: "请输入账户名",
    required: true,
    value: "",
    backfill(data) {
      setItem("name", (v) => (this.value = v.value));
    },
  },
  {
    formType: "input",
    name: "bankCardNumber",
    label: "银行卡号",
    placeholder: "识别引擎自动填写或手动输入",
    required: true,
    // type: "digit",
    value: "",
    // click() {
    //   const flag = useFlag()
      // this.inlineForm[0].show = flag.btns.canEdit;
    // },
    input(e) {
      const value = e.target.value.replace(/ /g, "");
      this.value = value.replace(/(.{4})/g, "$1 ");
      const length = this.value.length;
      e.target.focus();
      e.target.selectionStart = length;
      e.target.selectionEnd = length;
    },
  },
  {
    formType: "input",
    name: "bankName",
    label: "开户行名称",
    placeholder: "识别引擎自动填写或手动选择",
    required: true,
    value: "",
    readonly: true,
    isLink: true,
    click() {
      const flag = useFlag()
      this.inlineForm[0].show = flag.btns.canEdit;
      this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue(this.value);
    },
    backfill(data) {
      this.value = data[this.name];
      setItem("accountOpeningBranch", "inlineForm.0.inlineForm.0.inlineForm.0.value", this.value);
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        class: "h-[100vh] w-[100vw]",
        position: "left",
        closeable: true,
        show: false,
        inlineForm: [
          {
            slot: "default",
            formType: "cascader",
            title: "银行",
            options: [],
            closeable: false,
            className: "border-b h-full flex flex-col",
            value: "",
            finish(result) {
              setItem("bankName", result.value);
              setItem("bankName", "inlineForm.0.show", false);
            },
            inlineForm: [
              {
                slot: "options-top",
                formType: "input",
                inputAlign: "left",
                placeholder: "搜索",
                rightIcon: "search",
                clearable: true,
                async updateValue(val) {
                  let url = val ? `lease-bank/bank?queryTag=${val}` : "lease-bank/bank";
                  const { data } = await http.get(url);
                  setItem("bankName", "inlineForm.0.inlineForm.0.options", arrayToVantColumns(data));
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    name: "accountOpeningBranch",
    label: "开户支行",
    placeholder: "请选择开户支行",
    required: true,
    value: "",
    realValue: "",
    readonly: true,
    isLink: true,
    click() {
      const flag = useFlag()
      this.inlineForm[0].show = flag.btns.canEdit;
      setItem("bankName", (v) => {
        this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue(v.value);
      });
      // this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue("");
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        class: "h-[100vh] w-[100vw]",
        position: "left",
        closeable: true,
        show: false,
        inlineForm: [
          {
            slot: "default",
            formType: "cascader",
            title: "选择开户支行",
            options: [],
            closeable: false,
            className: "border-b h-full flex flex-col",
            value: "",
            finish(result) {
              const val = result.selectedOptions[0];
              setItem("accountOpeningBranch", "realValue", val.text);
              setItem("accountOpeningBranch", val.text);
              setItem("accountOpeningBranch", "inlineForm.0.show", false);
            },
            inlineForm: [
              {
                slot: "options-top",
                formType: "input",
                inputAlign: "left",
                placeholder: "搜索",
                rightIcon: "search",
                clearable: true,
                async updateValue(val) {
                  const bankName = getItem("bankName").value;
                  let url = val ? `lease-bank/sub-bank?queryTag=${val}&name=${bankName}` : `lease-bank/sub-bank?name=${bankName}`;
                  // let url = val ? `lease-bank/bank?queryTag=${val}` : "lease-bank/bank";
                  const { data } = await http.get(url);
                  setItem(
                    "accountOpeningBranch",
                    "inlineForm.0.inlineForm.0.options",
                    data.map((n) => ({ text: n.bankFullName, value: n.bankNum }))
                  );
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export const certificateType = [
  makeTitle("备案类型"),
  {
    formType: "input",
    label: "备案类型",
    name: "recordType",
    required: true,
    placeholder: "请选择备案类型",
    value: "",
    ...backSelect(),
    ...makeSelect("recordType", [
      { text: "项目公司备案", value: "RECORD_LEASE_PC" },
      { text: "非项目公司备案(屋顶方备案)", value: "RECORD_NP", disabled: true },
    ]),
    errorMessage: '提示: 必须先选择 "备案类型" 才能选择 "项目公司" 和 "产品地区"',
  },
];

export const lesseeInfo = [
  makeTitle("承租人"),
  {
    formType: "input",
    label: "项目公司",
    name: "projectCompany",
    value: "",
    required: true,
    placeholder: "请选择项目公司",
    ...backSelect(),
    ...makeSelect("projectCompany", [], "dynamic"),
    backfill(bData) {
      watchItem("recordType", async (v) => {
        const url = queryUrl("leaseLessor/getAuth", { pageNum: 1, pageSize: 999, orderId: getQuery()?.orderId, recordType: v });
        const { data } = await http.get(url);
        const columns = data.map((n) => ({
          text: `${n.code}, ${n.companyName}, ${n.areaId}`,
          value: n.code,
          disabled: n.disabled,
        }));
        this.makeSelect(bData[this.name], columns);
      });
    },
  },
];

export const productWithArea = [
  makeTitle("安装地区"),
  {
    formType: "input",
    label: "产品地区",
    name: "productWithArea",
    value: "",
    realValue: "",
    required: true,
    placeholder: "请选择产品方案",
    columns: [],
    ...backSelect(),
    ...makeSelect("productWithArea", [], "dynamic"),
    async backfill(bData) {
      watchItem("recordType", async (v) => {
        const url = queryUrl("/leasePrjProjectProduct/get", {
          isPage: false,
          type: v,
          orderId: getQuery()?.orderId,
        });
        const { data } = await http.get(url);
        const columns = data.map((n) => {
          return {
            text: `${n.code}, ${n.areaType}, ${n.area}`,
            value: n.code,
            disabled: n.disabled,
          };
        });
        this.makeSelect(bData[this.name], columns);
      });
    },
  },
];
