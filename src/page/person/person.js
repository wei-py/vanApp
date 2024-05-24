import { useCountDown } from "@vant/use";

export const form = [
  {
    ...makeTitle(""),
    titleClass: "w-full  text-xl center ",
    class: "!h-[90px]",
    backfill() {
      const user = getUserVo();
      this.title = user.name;
    },
  },
  {
    formType: "input",
    leftIcon: "lock",
    label: "更换密码",
    value: "",
    isLink: true,
    name: "onChangePassword",
    readonly: true,
    click() {
      setItem("onChangePasswordPop", "show", true);
    },
  },
  {
    ...backSelect(),
    ...makeSelect("companyId", [], "dymaic"),
    leftIcon: "cluster-o",
    name: "companyId",
    label: "所属组织",
    async backfill() {
      const user = getUserVo();
      const company = getCompany();
      const params = { userId: user.userId };
      const { data } = await http.get(queryUrl("/user-company/get-user-companies", params));
      const columns = data.map((n) => {
        return {
          value: n.company.companyId,
          text: n.company.name,
        };
      });
      this.makeSelect(company.companyId, columns);
      this.inlineForm[0].inlineForm[0].confirm = async (val) => {
        setItem(this.name, "value", val.selectedOptions[0].text);
        setItem(this.name, "realValue", val.selectedOptions[0].value);
        setItem(this.name, "inlineForm.0.show", false);
        const user = useUser();
        // const resp = await http.post(
        //   queryUrl("user-company/update-user-current-company", { companyId: val.selectedOptions[0].value, userId: user.userId })
        // );

        if (resp.code == 200) {
          const appInfo = await getAppInfo();
          const headerInfo = getHeaderInfo();
          const userInfo = user.usernameList[0];
          const param = { ...headerInfo, ...appInfo, ...userInfo, type: "password" };
          const { data } = await http.post("/login", param);
        }
      };
    },
  },
  {
    formType: "input",
    name: "h5",
    label: "版本信息",
    readonly: true,
    value: "",
    onMounted() {
      this.value = appConfig.h5;
    },
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        size: "mini",
        className: "px-3 yCenter !bg-[#ffab30] text-white rounded-2xl",
        text: "刷新",
        click() {
          location.reload();
        },
      },
    ],
  },
  {
    formType: "input",
    name: "coreInfo",
    label: "内核信息",
    readonly: true,
    value: "",
    os: "",
    // show: '',
    async onMounted() {
      const appInfo = await getAppInfo();
      this.show = appInfo.version != appConfig.version;
      this.os = appInfo.os;
      this.value = appInfo.version;
      // postMsg({ func: "getInfo" });
      // window.getDeviceInfo = (info) => {
      //   const appInfo = JSON.parse(info);
      // };
    },
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        size: "mini",
        className: "px-3 yCenter !bg-[#ffab30] text-white rounded-2xl",
        text: "下载 App",
        click() {
          setItem("coreInfo", (v) => {
            if (v.os == "android") {
              openUrl("https://www.btosolarman.com/APP/boGuangAPP/prod/boGuang.prop.apk");
            } else {
              showToast("网页无法下载; ios版, 请到testFlight中更新");
            }
          });
        },
      },
    ],
  },
  {
    ...backSelect(),
    ...makeSelect("env", [
      { text: "开发环境", value: "dev" },
      { text: "生产环境", value: "prod" },
    ]),
    value: "",
    realValue: "prod",
    name: "env",
    label: "当前环境",
    isLink: false,
    readonly: true,
    // disabled: true,
  },
  {
    formType: "input",
    // leftIcon: "lock",
    label: "隐私政策",
    value: "",
    isLink: true,
    name: "private",
    readonly: true,
    value: "点击查看",
    click() {
      openWeb("https://www.btosolarman.com/APP/boGuangAPP/privacy.txt", this.label);
    },
  },
];

export const modifyForm = [
  {
    ...makeTitle("修改密码"),
    name: "onChangePasswordPop",
    titleClass: "w-full center text-xl",
    show: false,
  },
  {
    customSlot: "tabs",
    tab: "",
    tabs: ["原密码修改", "验证码修改"],
    name: "tab",
    // changeTab() {
    //   console.log(this.tab)
    // }
  },
  {
    formType: "input",
    name: "phone",
    label: "手机号码",
    inputAlign: "left",
    value: "",
    required: true,
    backfill() {
      const user = getUserVo();
      this.value = user.phone;
    },
  },
  {
    formType: "input",
    name: "code",
    inputAlign: "left",
    label: "验证码",
    value: "",
    required: true,
    show: false,
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        size: "mini",
        className: "px-3 yCenter !bg-[#ffab30] text-white rounded-2xl",
        text: "获取验证码",
        async click() {
          if (this.text.includes("后重新获取")) {
            showFailToast(this.text);
            return;
          }
          const user = getUserVo();
          const param = { phone: user.phone };
          // const resp = await http.post(queryUrl("/user/send-password-sms", param));
          // showToast(lo.get(resp, "data"));

          setItem("code", (v) => {
            v.count.start();
            this.text = computed(() => {
              if (v.count.current.seconds) {
                return v.count.current.seconds + "s 后重新获取";
              } else {
                return "获取验证码";
              }
            });
          });
        },
      },
    ],
    backfill() {
      this.count = useCountDown({ time: 60 * 1000, seconds: true });
      this.hidden = computed(() => !getItem("tab", "tab"));
    },
  },
  {
    formType: "input",
    labelClass: "hidden",
    name: "checkCode",
    pass: false,
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        size: "mini",
        className: "px-7  yCenter !bg-[#ffab30] text-white rounded-2xl",
        text: "校验验证码",
        async click() {
          const code = getItem("code", "value");
          const phone = getItem("phone", "value");
          const resp = { code: 200 };
          // const resp = await http.post("user/check-password-code", { phone, code });
          setItem("checkCode", (v) => {
            console.log(v, 333333);
            v.pass = resp.code ? true : false;
          });
        },
      },
    ],
    backfill() {
      this.hidden = computed(() => !getItem("tab", "tab"));
    },
  },
  {
    formType: "input",
    name: "password",
    label: "原密码",
    inputAlign: "left",
    type: "password",
    value: "",
    required: true,
    show: false,
    rightIcon: "closed-eye",
    clickRightIcon() {
      this.show = !this.show;
    },
    backfill() {
      this.hidden = computed(() => getItem("tab", "tab") && !getItem("checkCode", "pass"));
      this.type = computed(() => (this.show ? "input" : "password"));
      this.rightIcon = computed(() => (this.show ? "eye-o" : "closed-eye"));
    },
  },
  {
    formType: "input",
    name: "newPassword",
    label: "新密码",
    inputAlign: "left",
    type: "password",
    value: "",
    required: true,
    show: false,
    rightIcon: "closed-eye",
    clickRightIcon() {
      this.show = !this.show;
    },
    backfill() {
      this.hidden = computed(() => getItem("tab", "tab") && !getItem("checkCode", "pass"));
      this.type = computed(() => (this.show ? "input" : "password"));
      this.rightIcon = computed(() => (this.show ? "eye-o" : "closed-eye"));
    },
  },

  {
    formType: "input",
    name: "confirmPassword",
    label: "确认密码",
    inputAlign: "left",
    type: "password",
    value: "",
    required: true,
    show: false,
    rightIcon: "closed-eye",
    clickRightIcon() {
      this.show = !this.show;
    },
    backfill() {
      this.hidden = computed(() => getItem("tab", "tab") && !getItem("checkCode", "pass"));
      this.type = computed(() => (this.show ? "input" : "password"));
      this.rightIcon = computed(() => (this.show ? "eye-o" : "closed-eye"));
    },
  },
  {
    formType: "input",
    name: "button",
    labelClass: "!w-1/2 xCenter",
    valueClass: "!w-1/2 xCenter",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "label",
        formType: "button",
        size: "mini",
        className: "px-10 yCenter !bg-[#f3f3f3] text-[#232323] rounded-2xl",
        text: "取消",
        click() {
          setItem("onChangePasswordPop", "show", false);
        },
      },
      {
        slot: "input",
        formType: "button",
        size: "mini",
        className: "px-10 center !bg-[#ffab30] text-white rounded-2xl",
        text: "确认",
        async click() {
          const tab = getItem("tab", "tab");
          if (tab) {
            // 验证码修改
          } else {
            // 原密码修改
          }
        },
      },
    ],
  },
];
