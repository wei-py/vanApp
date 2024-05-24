export const urls = {
  getData: {
    YUEXIU_ZZD: "order/get-customer-info",
    YUEXIU_ZZD_ORG: "order/org/get-customer-info",
    TYZF_ZZD: "general-investor/get-customer-np",
    TYZF_ZZD_ORG: "general-investor/get-customer-org",
  },
  saveData: {
    YUEXIU_ZZD: "order/put-customer-info",
    YUEXIU_ZZD_ORG: "order/org/put-customer-info",
    TYZF_ZZD: "general-investor/put-customer-np",
    TYZF_ZZD_ORG: "general-investor/put-customer-org",
  },

  // const url = isZZD_ORG() ? "order/org/get-customer-info" : "order/get-customer-info";
};

export const lessorInfo = [
  makeTitle("出租人信息"),
  // {
  //   ...makeTitle("出租人信息"),
  // },
  // {
  //   ...makeTitle("出租人信息"),
  //   hidden: computed(() => isZZD_ORG()),
  // },
  {
    formType: "input",
    label: "姓名",
    name: "name",
    value: "",
    hidden: computed(() => isZZD_ORG()),
    required: true,
    placeholder: "带过来的保存的信息",
    readonly: true,
    onMounted() {
      if (isTYZF()) {
        this.placeholder = "手动输入或扫描证件";
        this.readonly = false;
      }
    },
  },
  {
    formType: "input",
    label: "证件类型",
    name: "idCardType",
    hidden: computed(() => !isTYZF() || isZZD_ORG()),
    required: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "身份证",
    ...backSelect(),
    ...makeSelect("idCardType", [
      { text: "身份证", value: "ID_CARD" },
      { text: "护照", value: "PASSPORT" },
      { text: "军官证", value: "MILITARY_ID" },
      { text: "户口簿", value: "RESIDENCE_BOOKLET" },
      { text: "士兵证", value: "SOLDBUCH" },
      { text: "港澳通行证", value: "HM_PASS" },
      { text: "台湾同胞来往内地通行证", value: "TAIWAN_PASS" },
      { text: "外国人居留证", value: "ALIEN_RESIDENCE_PERMIT" },
      { text: "警官证", value: "POLICE_ID" },
    ]),
    onMounted() {
      if (isTYZF()) {
        this.placeholder = "请选择证件类型";
      }
    },
  },
  {
    formType: "input",
    label: "证件号码",
    hidden: computed(() => isZZD_ORG()),
    name: "idNumber",
    value: "",
    required: true,
    readonly: true,
    placeholder: "带过来的保存的信息",
    backfill(data) {
      this.value = data[this.name];
      setItem("cardBukle", (v) => {
        v.tabs[1].inlineForm[2].value = data[this.name];
        v.tabs[1].inlineForm[3].value = lo.get(data, "data.cusBankCardTwo.corpCommSerno");
        v.tabs[1].inlineForm[4].value = lo.get(data, "data.cusBankCardTwo.result");
        v.tabs[2].inlineForm[2].value = data[this.name];
        v.tabs[2].inlineForm[3].value = lo.get(data, "data.cusBankCardTwo.corpCommSerno");
        v.tabs[2].inlineForm[4].value = lo.get(data, "data.cusBankCardTwo.result");
        v.tabs[0].inlineForm.forEach((item) => {
          item.value = lo.get(data, `data.data${item.name}`) || item.value;
          //  data.data[item.name] || item.value;
        });
      });
    },
    onMounted() {
      if (isTYZF()) {
        this.placeholder = "手动输入或扫描证件";
        this.readonly = false;
      }
    },
  },
  {
    formType: "cell",
    title: "证件照片",
    name: "",
    hidden: computed(() => isZZD_ORG()),
    readonly: true,
    titleClass: "xCenter text-[16px]",
  },
  { ...makeUpload(1, 50), required: true, label: "证件正面(头像面)", name: "idCardFront", hidden: computed(() => isZZD_ORG()) },
  { ...makeUpload(1, 50), required: true, label: "证件反面(国徽面)", name: "idCardBack", hidden: computed(() => isZZD_ORG()) },
  {
    formType: "input",
    label: "出租人电话",
    name: "phone",
    value: "",
    required: true,
    hidden: computed(() => isZZD_ORG()),
    readonly: true,
    placeholder: "带过来的保存的信息",
    onMounted() {
      if (isTYZF()) {
        this.placeholder = "请输入";
        this.readonly = false;
      }
    },
  },
  {
    formType: "input",
    label: "婚姻信息",
    value: "",
    name: "maritalStatus",
    placeholder: "请选择婚姻信息",
    hidden: computed(() => isTYZF() || isZZD_ORG()),
    // hidden: computed(() => !isTYZF()),
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
    hidden: computed(() => isTYZF() || isZZD_ORG()),
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
    hidden: computed(() => isTYZF() || isZZD_ORG()),
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
    hidden: computed(() => isTYZF() || isZZD_ORG()),
    ...backSelect(),
    ...makeSelect("economy", arrayToVantColumns(["赤贫", "很穷", "穷", "小康", "中产", "高产", "小富", "中富", "巨富"])),
  },
  {
    formType: "input",
    label: "健康情况",
    name: "health",
    placeholder: "请选择健康情况",
    value: "",
    hidden: computed(() => isTYZF() || isZZD_ORG()),
    ...backSelect(),
    ...makeSelect("health", arrayToVantColumns(["健康", "亚健康", "疾病"])),
  },

  {
    formType: "input",
    label: "组织全称",
    name: "orgName",
    value: "",
    hidden: computed(() => isZZD()),
    required: true,
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "input",
    label: "登记注册码类型",
    name: "regType",
    hidden: computed(() => !isTYZF() || isZZD()),
    required: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "",
    ...backSelect(),
    ...makeSelect("regType", [
      { text: "统一社会信用代码/营业执照", value: "07" },
      { text: "组织机构代码", value: "30" },
    ]),
  },
  {
    formType: "input",
    label: "登记注册码",
    name: "regNo",
    value: "",
    hidden: computed(() => isZZD()),
    required: true,
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "input",
    ...backSelect(),
    ...makeSelect("position", [{ value: "1", text: "法人代表/非法人组织负责人" }]),
    label: "负责人类型",
    name: "position",
    placeholder: "请选择负责人类型",
    required: true,
    hidden: computed(() => !isTYZF() || isZZD()),
  },
  {
    formType: "input",
    label: "负责人姓名",
    name: "name",
    placeholder: "请输入负责人姓名",
    hidden: computed(() => !isTYZF() || isZZD()),
    value: "",
    // rules: [e => isChineseIdCard(e) || '身份证有误'],
    required: true,
  },
  {
    formType: "input",
    label: "负责人证件类型",
    name: "certType",
    hidden: computed(() => !isTYZF() || isZZD()),
    required: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "身份证",
    ...backSelect(),
    ...makeSelect("certType", [
      { text: "身份证", value: "ID_CARD" },
      { text: "护照", value: "PASSPORT" },
      { text: "军官证", value: "MILITARY_ID" },
      { text: "户口簿", value: "RESIDENCE_BOOKLET" },
      { text: "士兵证", value: "SOLDBUCH" },
      { text: "港澳通行证", value: "HM_PASS" },
      { text: "台湾同胞来往内地通行证", value: "TAIWAN_PASS" },
      { text: "外国人居留证", value: "ALIEN_RESIDENCE_PERMIT" },
      { text: "警官证", value: "POLICE_ID" },
    ]),
  },
  {
    formType: "input",
    label: "负责人证件号码",
    name: "certCode",
    placeholder: "扫描证件号码或手动输入",
    hidden: computed(() => !isTYZF() || isZZD()),
    value: "",
    required: true,
  },
  {
    formType: "input",
    label: "法人代表手机号码",
    name: "cellPhone",
    value: "",
    hidden: computed(() => isZZD()),
    required: true,
    placeholder: "带过来的保存的信息",
  },
  {
    formType: "input",
    label: "家庭住址区域",
    name: "houseAddr",
    readonly: true,
    required: true,
    hidden: computed(() => !isTYZF() || isZZD()),
    placeholder: "",
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    isLink: true,
    onMounted() {
      if (isZZD_ORG()) {
        this.label = "注册地址区域";
      }
    },
    click() {
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    // rightIcon: "arrow",
    // clickRightIcon() {
    //   const flag = useFlag()
    // this.inlineForm[0].show = flag.btns.canEdit;
    // },
    getParam(param) {
      const [provinceCode, cityCode, areaCode] = this.middle.value;
      param.houseAddr = { provinceCode: provinceCode || "", cityCode: cityCode || "", areaCode: areaCode || "" };
    },
    async backfill(data) {
      const cascader = getItem(this.name, "inlineForm.0.inlineForm.0");
      const value = data.houseAddr?.areaCode || data.houseAddr?.cityCode;
      cascader.options = await getArea();
      setItem(this.name, "inlineForm.0.inlineForm.0.value", value);
      const tree = searchTree(cascader.options, (n) => n.value == value);
      const arr = toTreeArray(tree);
      cascader.finish({
        selectedOptions: arr,
        value: value,
      });
    },

    inlineForm: [
      {
        slot: "button",
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
            // async onMounted() {
            //   this.options = await getArea();
            // },
            close() {
              setItem("houseAddr", "inlineForm.0.show", false);
            },
            finish(result) {
              const text = result.selectedOptions.map((n) => n.text).join("/");
              const value = result.selectedOptions.map((n) => n.value);
              if (!lo.isObject(result.value)) {
                this.value = result.value;
              }
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
    label: "工商注册地址",
    name: "detailedAddress",
    placeholder:
      "提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",
    required: true,
    hidden: computed(() => !isTYZF() || isZZD()),
    value: "",
    inputAlign: "left",
    errorMessage:
      "提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",
    getParam(params) {
      params.houseAddr.detailedAddress = this.value;
      delete params.detailedAddress;
    },
    backfill(data) {
      this.value = data.houseAddr?.detailedAddress || "";
    },
    // clickRightIcon() {
    //   showToast("扫码功能开发中");
    // },
  },

  {
    formType: "cell",
    title: "法人证件照",
    name: "",
    hidden: computed(() => isZZD()),
    readonly: true,
    titleClass: "xCenter text-[16px]",
  },

  {
    ...makeUpload(1, 50),
    name: "orgLegalIdCardFront",
    label: "法人代表证件正面(头像面)",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    ...makeUpload(1, 50),
    name: "orgLegalIdCardBack",
    label: "法人代表证件反面(国徽面)",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    ...makeUpload(1, 100),
    name: "orgLicense",
    hidden: computed(() => isZZD()),
    label: "统一社会信用代码证/组织机构代码证/营业执照",
    required: true,
    // errorMessage: '提示1: 出租方为村民委员会, 上传统一社会信用代码证/组织机构代码证; 出租方为村经济联合社, 上传农村集体经济组织登记证/营业执照'
  },
  {
    formType: "cell",
    value: "提示1: 出租方为村民委员会, 上传统一社会信用代码证/组织机构代码证; 出租方为村经济联合社, 上传农村集体经济组织登记证/营业执照",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },
  {
    ...makeUpload(999, 100),
    name: "resolutionPaper",
    hidden: computed(() => isZZD()),
    label: "村民代表大会决议书",
    required: true,
    onMounted() {
      if (isTYZF()) {
        this.required = false;
        this.label = "村民代表大会决议书(选填)";
      }
    },
  },
  {
    ...makeUpload(999, 100),
    name: "committeeRegulation",
    hidden: computed(() => isZZD()),
    label: "村委议事章程(选填)",
    required: false,
  },
  {
    ...makeUpload(999, 100),
    name: "orgLandUseCertificate",
    hidden: computed(() => isZZD()),
    label: "集体土地使用证",
    required: true,
    onMounted() {
      if (isTYZF()) {
        this.required = false;
        this.label = "集体土地使用证(选填)";
      }
    },
  },
  {
    ...makeUpload(999, 100),
    name: "orgLandUseCertificateAuthFile",
    hidden: computed(() => isZZD()),
    label: "产权证明",
    required: true,
    // errorMessage: "提示2: 支持不动产证书/不动产登记部门查册证明/国土资源管理部门确权文件(加盖村委章)/上一级政府证明(加盖村委章)",
  },
  {
    formType: "cell",
    value: "提示2: 支持不动产证书/不动产登记部门查册证明/国土资源管理部门确权文件(加盖村委章)/上一级政府证明(加盖村委章)",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },

  {
    formType: "input",
    label: "省市区",
    name: "houseAddr",
    hidden: false,
    isLink: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "",
    required: true,
    placeholder: "请选择所在地区",
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    onMounted() {
      if (isTYZF() && isZZD()) {
        this.placeholder = "请选择房屋所在地区";
      }
      // if (isTYZF() && isZZD_ORG()) {
      //   this.hidden = true;
      // }
    },
    click() {
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    getParam(param) {
      const [provinceCode, cityCode, areaCode] = this.middle.value;
      // param.houseAddr = { provinceCode, cityCode, areaCode };
      lo.merge(param, { provinceCode, cityCode, areaCode });
    },
    async backfill(data) {
      const cascader = getItem(this.name, "inlineForm.0.inlineForm.0");
      cascader.options = await getArea();
      const value = data.areaCode || data.cityCode;
      setItem(this.name, "inlineForm.0.inlineForm.0.value", value);
      const tree = searchTree(cascader.options, (n) => n.value == value);
      const arr = toTreeArray(tree);
      cascader.finish({ selectedOptions: arr, value: value });
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
    // labelAlign: 'top',
    inputAlign: "left",
    placeholder: "(从省/自治区/直辖市/特别行政区 开始写)",
    required: true,
    hidden: false,
    // hidden: () => !(isTYZF() && isZZD()),
    value: "",
    onMounted() {
      // if (isTYZF() && isZZD_ORG()) {
      //   this.hidden = true;
      // }
    },
    // inputAlign: "left",
    // errorMessage: "提示: 若无不动产权证/房产证/宅基地证, 需和村委开具的房屋权属证明地址完全一致(从省/自治区/直辖市/特别行政区 开始写)",
  },
  {
    formType: "cell",
    value: "提示: 若无不动产权证/房产证/宅基地证, 需和村委开具的房屋权属证明地址完全一致(从省/自治区/直辖市/特别行政区 开始写)",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD_ORG()),
  },
  {
    formType: "cell",
    value: "提示: 需对照不动产权证/集体土地使用证/查册证明/确权文件 上的建筑地址填写, 必须从省/自治区/直辖市/特别行政区 开始写",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },
];

export const bankInfo = [
  {
    ...makeTitle("租金收益银行卡"),
    onMounted() {
      this.title = isZZD() ? "租金收益银行卡" : "租金收益对公账户";
    },
  },
  { ...makeUpload(1, 100, "*"), required: true, label: "银行卡-卡号面", name: "bankCardFront", hidden: computed(() => isZZD_ORG()) },
  { ...makeUpload(999, 100), required: true, label: "对公账户信息(盖公章)", name: "publicAccountInformation", hidden: computed(() => isZZD()) },
  { ...makeUpload(999, 100, "*"), required: true, label: "银行印鉴留样原件", name: "bankSealSample", hidden: computed(() => isZZD()) },
  {
    formType: "input",
    name: "bankAccount",
    label: "账户名",
    placeholder: "请输入账户名",
    required: true,
    value: "",
    onMounted() {
      if (isTYZF()) {
        this.placeholder = '自动获取"姓名"/"组织全称"';
        this.readonly = true;

        // this.value = computed(() => {
        //   return getItem(isZZD() ? "name" : "orgName", "value");
        // });
      }
    },
    backfill() {
      watchItem(isZZD() ? "name" : "orgName", (v) => {
        this.value = v;
      });
    },
    // backfill(data) {
    //   // if (isZZD()) {
    //   //   this.readonly = true;
    //   //   this.value = computed(() => getItem("name", "value"));
    //   // } else {
    //   //   setItem("name", (v) => (this.value = v.value));
    //   // }
    // },
  },
  {
    formType: "input",
    name: "bankCardNumber",
    label: isZZD() ? "银行卡号" : "银行账号",
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
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canEdit;
      this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue(this.value);
    },
    backfill(data) {
      this.value = data[this.name];
      setItem("accountOpeningBranch", (v) => {
        v.inlineForm[0].inlineForm[0].inlineForm[0].value = this.value;
      });
      // "inlineForm.0.inlineForm.0.inlineForm.0.value", this.value);
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
    // onMounted() {
    //   this.value = ''
    //   this.realValue = ''
    // },
    click() {
      const flag = useFlag();
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
              setItem("accountOpeningBranch", "value", val.text);
              setItem("accountOpeningBranch", "inlineForm.0.show", false);
              setItem("jointLineNumber", "value", val.value);
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
  // 联行号
  {
    formType: "input",
    label: "联行号",
    // hidden: computed(() => isZZD_ORG()),
    required: true,
    value: "",
    readonly: true,
    // disabled: true,
    placeholder: "自动填充",
    name: "jointLineNumber",
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
      { text: "非项目公司备案(屋顶方备案)", value: "RECORD_NP", disabled: isTYZF() ? true : isZZD_ORG() },
    ]),
    errorMessage: '提示: 必须先选择 "备案类型" 才能选择 "项目公司" 和 "产品地区"',
    onMounted() {
      if (isTYZF()) {
        this.realValue = "RECORD_LEASE_PC";
        this.value = "项目公司备案";
      }
    },
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
      // RECORD_LEASE_PC
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

export const cardBuckle = [
  {
    customSlot: "cardBukle",
    name: "cardBukle",
    // show: false,
    show: computed(() => {
      const recordType = getItem("recordType", "realValue");
      return isZZD() && recordType == "RECORD_NP";
    }),
    tabs: [
      {
        value: "info",
        title: "二类卡信息",
        inlineForm: [
          makeTitle("二类银行卡划扣"),
          {
            formType: "input",
            label: "二类卡号",
            value: "",
            inputAlign: "right",
            name: "accountNo",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            label: "二类卡开户行名称",
            readonly: true,
            inputAlign: "right",
            value: "中国工商银行股份有限公司",
            name: "bankNameTwo",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            label: "二类卡开户支行",
            inputAlign: "right",
            readonly: true,
            value: "中国工商银行股份有限公司广州南方支行",
            name: "bankBranch",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            label: "二类卡联行号",
            inputAlign: "right",
            readonly: true,
            value: "102581000353",
            name: "interBranchNumber",
            placeholder: "申请开户接口返回",
          },
        ],
      },
      {
        value: "openAccount",
        title: "二类卡开户申请",
        inlineForm: [
          makeTitle("二类卡开户申请"),
          {
            formType: "input",
            label: "App直接申请开户",
            inputAlign: "right",
            value: "",
            isLink: true,
            readonly: true,
            name: "link",
            switch: "App直接申请开户",
            placeholder: "若有数据即可点击复制链接",
            async click() {
              const query = getQuery();
              const data = await http.post(queryUrl("/bank_card_two/apply-open", { orderId: query.orderId }));
              this.value = data.data;
              if (data.code == 5000) {
                throw new Error(data.msg);
              }
              showConfirmDialog({
                title: "二类卡开户申请",
                message: "只能二选一 ! \n 只能二选一 ! \n 只能二选一 !",
                confirmButtonText: "App直接申请",
                cancelButtonText: "复制申请链接",
                confirmButtonColor: "#ffab30",
              })
                .then(() => {
                  openUrl(this.value);
                })
                .catch(() => {
                  copyText(this.value);
                });
            },
          },
          {
            formType: "input",
            label: "身份证号",
            value: "",
            inputAlign: "right",
            readonly: true,
            name: "idNumber",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            inputAlign: "right",
            label: "合作方交易单号",
            value: "",
            readonly: true,
            name: "corpCommSerno",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            inputAlign: "right",
            label: "申请结果",
            value: "",
            readonly: true,
            name: "result",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            name: "searchCard",
            inputAlign: "center",
            inlineForm: [
              {
                slot: "input",
                formType: "button",
                class: " !text-[12px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",
                round: true,
                size: "mini",
                text: "查询结果",
                async click() {
                  const query = getQuery();
                  const data = await http.get(queryUrl("/bank_card_two/query-status", { orderId: query.orderId }));
                  setItem("cardBukle", (v) => {
                    v.tabs[1].inlineForm[3].value = data.data.corpCommSerno;
                    v.tabs[1].inlineForm[4].value = data.data.result;
                    v.tabs[0].inlineForm.forEach((item) => {
                      item.value = lo.get(data, `data.data${item.name}`) || item.value;
                    });
                  });

                  if (data.code == 5000) {
                  }
                },
              },
            ],
          },
          {
            formType: "input",
            inlineForm: [
              {
                slot: "input",
                rows: 99,
                formType: "text",
                content:
                  "提示：\n 1、必须先选择项目公司和产品地区, 才能进行二类卡开户申请 \n 2、切勿多次点击“申请开户”按钮。每次点击都会再次产生1条新的、不同的申请链接, 导致屋顶方对旧链接的操作变成无用功, 最终开户失败\n 3、复制开户申请链接发给屋顶方, 或者在App直接申请开户, 链接有效期为30分钟。超过30分钟且未完成开户申请, 需要重新点击“申请开户”按钮, 生成新的开户申请链接再进行操作",
                class: "text-red",
              },
            ],
          },
        ],
      },
      {
        value: "closeAccount",
        title: "二类卡销户申请",
        inlineForm: [
          makeTitle("二类卡销户申请"),
          {
            formType: "input",
            label: "申请销户",
            inputAlign: "right",
            value: "",
            name: "link",
            switch: "App直接申请销户",
            placeholder: "若有数据即可点击复制链接",
            inlineForm: [
              {
                slot: "button",
                formType: "button",
                text: "申请销户",
                size: "mini",
                className: "px-2 center !bg-[#ffab30] text-white rounded-2xl",
                async click() {
                  const flag = await showConfirmDialog({
                    title: "二类卡销户申请",
                    message: "二类卡销户申请",
                    confirmButtonText: "确认申请销户",
                    cancelButtonText: "取消申请",
                    confirmButtonColor: "#ffab30",
                    closeOnClickOverlay: true,
                  });
                  if (flag) {
                    const flag2 = await showConfirmDialog({
                      title: "请再次确认是否销户",
                      message: "请与屋顶方确认后再操作",
                      confirmButtonText: "确认销户",
                      cancelButtonText: "取消销户",
                      confirmButtonColor: "#ffab30",
                      closeOnClickOverlay: true,
                    });
                    if (flag2) {
                      const data = await http.post("/bank_card_two/apply-close", { orderId: getQuery().orderId });
                      if (data.code == 200) {
                        showSuccessToast("销户成功");
                      }
                    }
                  }
                },
              },
            ],
          },
          {
            formType: "input",
            label: "身份证号",
            value: "",
            inputAlign: "right",
            name: "idNumber",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            inputAlign: "right",
            label: "合作方交易单号",
            value: "",
            name: "corpCommSerno",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            inputAlign: "right",
            label: "申请结果",
            value: "",
            name: "result",
            placeholder: "申请开户接口返回",
          },
          {
            formType: "input",
            name: "searchCard",
            inputAlign: "center",
            inlineForm: [
              {
                slot: "input",
                formType: "button",
                class: " !text-[12px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",
                round: true,
                size: "mini",
                text: "查询结果",
                async click() {
                  const query = getQuery();
                  const data = await http.get(queryUrl("/bank_card_two/query-status", { orderId: query.orderId }));
                  setItem("cardBukle", (v) => {
                    v.tabs[2].inlineForm[3].value = data.data.corpCommSerno;
                    v.tabs[2].inlineForm[4].value = data.data.result;
                    v.tabs[0].inlineForm.forEach((item) => {
                      item.value = lo.get(data, `data.data${item.name}`) || item.value;
                    });
                  });
                  if (data.code == 5000) {
                  }
                },
              },
            ],
          },
          {
            formType: "cell",
            value: "提示: 申请销户前提为: 未进件/已取消进件/屋顶租赁合同已履行25年到期结束",
            valueClass: "text-red !text-left",
          },
        ],
      },
    ],
    tab: "info",
    onChangeTab() {},
  },
];

export const salemanInfo = [
  makeTitle("销售人员信息"),
  {
    formType: "input",
    label: "资方名称",
    name: "investorId",
    placeholder: "自动获取",
    readonly: true,
    backfill(data) {
      const query = getQuery();
      const dic = {
        ZSGY: "中山公用事业集团股份有限公司",
      };
      this.value = dic[query.investorId];
      // this.value = data[this.name] || company.type;
    },
  },
  {
    formType: "input",
    label: "销售人员姓名",
    name: "salesman",
    placeholder: "自动获取",
    readonly: true,
    backfill(data) {
      const user = getUserVo();
      this.value = data[this.name] || user.name;
    },
  },
  {
    formType: "input",
    label: "销售人员电话",
    name: "saleTelephone",
    placeholder: "自动获取",
    readonly: true,
    backfill(data) {
      const user = getUserVo();
      this.value = data[this.name] || user.phone;
    },
  },
  {
    formType: "input",
    label: "订单所属组织",
    name: "companyId",
    placeholder: "自动获取",
    readonly: true,
    ...backSelect(),
    ...makeSelect("companyId", [], "dynamic"),
    async backfill(bData) {
      this.click = () => {};
      const query = getQuery();
      const user = getUserVo();
      const userId = query.orderId ? bData.userId : user.userId;
      const url = queryUrl("user-company/get-user-companies", { userId });
      const { data } = await http.get(url);
      const columns = data.map((n) => ({ value: n.company.companyId, text: n.company.name }));
      this.makeSelect(bData[this.name] || columns[0]?.value, columns);
    },
  },
  {
    formType: "",
    name: "userId",
    value: "",
    getParam(param) {
      const user = getUserVo();
      const userId = param.userId || user.userId;
      param.userId = userId;
    },
  },
];
