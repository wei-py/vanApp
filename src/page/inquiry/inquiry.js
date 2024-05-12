// import { gets } from "../../utils/gets";
// rules hidden inlineForm backfill formType middle
export const lessorInfo = [
  makeTitle("出租人信息"),
  {
    formType: "input",
    label: "姓名",
    name: "name",
    required: true,
    value: "",
    rightIcon: "scan",
    onMounted() {
      this.value = "";
    },
    onSave() {
      if (!this.value) {
        showFailToast("请输入姓名");
        // throw new Error('请输入姓名')
      }
    },
    clickRightIcon() {
      showToast({
        message: "扫码功能开发中",
        className: "shadowC",
      });
    },
  },
  {
    formType: "input",
    label: "证件类型",
    name: "idCardType",
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
  },
  {
    formType: "input",
    label: "证件号码",
    name: "idNumber",
    placeholder: "扫描证件或手动输入",
    required: true,
    value: "",
    hidden: isZZD_ORG(),
    rightIcon: "scan",
    onMounted() {
      this.value = "";
    },
    clickRightIcon() {
      showToast({
        message: "扫码功能开发中",
        className: "shadowC",
      });
    },
  },
  {
    formType: "input",
    label: "出租人电话",
    name: "phone",
    placeholder: "请输入出租人电话",
    type: "tel",
    required: true,
    value: "",
    rightIcon: "phone",
    onMounted() {
      this.value = "";
    },
    clickRightIcon() {
      callPhone(this.value);
    },
  },

  {
    formType: "input",
    label: "家庭住址区域",
    name: "houseAddr",
    readonly: true,
    required: true,
    placeholder: "请选择所在地区",
    middle: { value: [], provinceCode: "", cityCode: "", areaCode: "" },
    isLink: true,
    click() {
      const flag = useFlag()
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
    label: "家庭住址",
    name: "detailedAddress",
    placeholder: "(此地址是屋顶业主本人现在的家庭住址, 所以可能和需要安装光伏的房屋地址不一致。从省/自治区/直辖市/特别行政区 开始写)",
    required: true,
    hidden: isZZD_ORG(),
    value: "",
    inputAlign: "left",
    errorMessage: "提示: 此地址是屋顶业主本人现在的家庭住址, 所以可能和需要安装光伏的房屋地址不一致。从省/自治区/直辖市/特别行政区 开始写",
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
];

export const salespersonInfo = [
  {
    formType: "cell",
    title: "销售人员信息",
    titleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "input",
    label: "销售人员姓名",
    name: "salesman",
    placeholder: "系统自动获取",
    value: "",
    readonly: true,
    async onMounted() {
      const user = getUserVo();
      setItem("salesman", "value", user.name);
    },
  },
  {
    formType: "input",
    label: "销售人员电话",
    name: "saleTelephone",
    type: "tel",
    placeholder: "请输入销售人员电话",
    value: "",
    rightIcon: "phone",
    clickRightIcon() {
      callPhone(this.value);
    },
    async onMounted() {
      const user = getUserVo();
      setItem("saleTelephone", "value", user.phone);
    },
  },
  {
    formType: "input",
    label: "订单所属组织",
    name: "companyId",
    required: true,
    value: "",
    ...backSelect(),
    ...makeSelect("companyId", [], "dynamic"),
    async backfill(bData) {
      const query = getQuery();
      const user = getUserVo();
      const userId = query.orderId ? bData.userId : user.userId;
      const url = queryUrl("user-company/get-user-companies", { userId });
      const { data } = await http.get(url);
      const columns = data.map((n) => ({ value: n.company.companyId, text: n.company.name }));
      this.makeSelect(bData[this.name] || columns[0]?.value, columns);
    },
  },
];

export const guarantor = [
  makeTitle("保证人"),
  {
    formType: "input",
    label: "是否有保证人",
    name: "isSurety",
    value: "",
    hidden: isZZD_ORG(),
    onMounted() {
      this.value = "";
    },
    ...backSelect(),
    ...makeSelect("companyId", [
      { text: "无", value: 0 },
      { text: "有", value: 1 },
    ]),
  },
];

export const signInfo = [
  {
    customSlot: "title",
    title: "授权协议签署",
    click() {
      // 重签按钮
      setItem("fddSignTaskId", "value", "未签署");
      setItem("fddSignTaskId", "realValue", "");
      setItem("authorizationLetter", "value", "暂无数据");
      setItem("authorizationLetter", "realValue", "");
    },
  },
  // makeTitle("授权协议签署"),
  {
    formType: "input",
    label: "信息使用授权协议",
    name: "fddSignTaskId",
    readonly: true,
    value: "",
    realValue: "",
    backfill(data) {
      const dic = { "": "未签署", 0: "未签署", null: "未签署", revoked: "已作废", undefined: "未签署" };
      this.value = dic[data[this.name]] || "已签署";
      this.realValue = this.value.length > 3 ? data[this.name] : "";
    },
  },
  {
    formType: "input",
    label: "签署方式",
    value: "",
    name: "signeType",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "短信签署",
        size: "mini",
        round: true,
        class: "!mr-[10px] !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",
        click() {
          setItem("signeType", (v) => {
            v.inlineForm[0].text = "发送短信";
          });
        },
      },
      {
        slot: "extra",
        formType: "button",
        text: "App",
        round: true,
        size: "mini",
        class: " !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",
        click() {
          setItem("signeType", (v) => {
            v.inlineForm[0].text = "开始签署";
          });
        },
      },
    ],
  },
  {
    formType: "input",
    inputAlign: "center",
    name: "signeType",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        class: " !text-[14px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",
        round: true,
        size: "mini",
        text: "发送短信",
        async click() {
          glSave(); // 保存
          const params = getParam();
          const valid = ["name", "idNumber", "phone"].every((n) => params[n]);
          if (!valid) {
            showFailToast("姓名、身份证、手机号为必填项");
            return;
          }

          const { data } = await http.get(queryUrl("customer/fdd-signed", lo.pick(params, ["idNumber"])));
          const hasAuthorizationLetter = lo.get(data, "authorizationLetter"); // 是否已有授权协议

          if (this.text == "发送短信") {
            params.signeType = "sms";
            if (!hasAuthorizationLetter) {
              const { data } = await http.get(queryUrl("fdd/get-actor-url", { ...getQuery(), ...lo.pick(params, ["signeType"]) }));
              showSuccessToast("短信发送成功");
              return;
            }
            showConfirmDialog({
              message: "该出租人已签署信息使用授权协议书, 是否使用已有的授权协议书?",
              confirmButtonText: "使用",
              cancelButtonText: "不使用",
              confirmButtonColor: "#ffab30",
            })
              .then(() => {
                setItem("signeType", "value", data.signeType);
                setItem("fddSignTaskId", "value", "已签署");
                setItem("fddSignTaskId", "realValue", data.fddSignTaskId);
                setItem("authorizationLetter", "realValue", data.authorizationLetter);
                setItem("authorizationLetter", "value", "协议查看");
              })
              .catch(async () => {
                setItem("fddSignTaskId", "value", "未签署");
                setItem("fddSignTaskId", "realValue", "");
                setItem("authorizationLetter", "value", "暂无数据");
                setItem("authorizationLetter", "realValue", "");
                await glSave();
                const { data } = await http.get(queryUrl("fdd/get-actor-url", { ...getQuery(), ...lo.pick(params, ["signeType"]) }));
                showSuccessToast("短信发送成功");
              });
          }

          if (this.text == "开始签署") {
            params.signeType = "app";
            if (!hasAuthorizationLetter) {
              const { data } = await http.get(queryUrl("fdd/get-actor-url", { ...getQuery(), ...lo.pick(params, ["signeType"]) }));
              showConfirmDialog({
                message: "是否跳转至签署页面",
                confirmButtonColor: "#ffab30",
              })
                .then(() => {
                  openUrl(data.actorSignTaskEmbedUrl);
                })
                .catch(() => {
                  setItem("authorizationLetter", "value", "协议查看");
                  setItem("authorizationLetter", "realValue", data.authorizationLetter);
                });
              return;
            }
            showConfirmDialog({
              message: "该出租人已签署信息使用授权协议书, 是否使用已有的授权协议书?",
              confirmButtonText: "使用",
              cancelButtonText: "不使用",
              confirmButtonColor: "#ffab30",
            })
              .then(() => {
                setItem("signeType", "value", data.signeType);
                setItem("fddSignTaskId", "value", "已签署");
                setItem("fddSignTaskId", "realValue", data.fddSignTaskId);
                setItem("authorizationLetter", "realValue", data.authorizationLetter);
                setItem("authorizationLetter", "value", "协议查看");
              })
              .catch(async () => {
                setItem("fddSignTaskId", "value", "未签署");
                setItem("fddSignTaskId", "realValue", "");
                setItem("authorizationLetter", "value", "暂无数据");
                setItem("authorizationLetter", "realValue", "");
                await glSave();
                const { data } = await http.get(queryUrl("fdd/get-actor-url", { ...getQuery(), ...lo.pick(params, ["signeType"]) }));
                showConfirmDialog({
                  message: "是否跳转至签署页面",
                  confirmButtonColor: "#ffab30",
                })
                  .then(() => {
                    openUrl(data.actorSignTaskEmbedUrl);
                  })
                  .catch(() => {
                    setItem("authorizationLetter", "value", "协议查看");
                    setItem("authorizationLetter", "realValue", data.authorizationLetter);
                  });
              });
          }
          // 440181199811061816
          // 15817059864
        },
      },
    ],
  },
  {
    formType: "input",
    label: "已签署协议查看",
    required: true,
    placeholder: "暂无数据",
    name: "authorizationLetter",
    hidden: isZZD_ORG(),
    realValue: "",
    readonly: true,
    isLink: true,
    value: "",
    click() {
      if (this.realValue) {
        glSave();
        router.push({ path: "/web", query: { src: this.realValue, title: "信息使用协议" } });
      } else {
        showFailToast({
          message: "暂无数据",
          className: "shadowC !bg-[red]",
        });
      }
    },
    backfill(data) {
      this.realValue = data[this.name];
      this.value = data[this.name] ? "协议查看" : "";
    },
  },
];
