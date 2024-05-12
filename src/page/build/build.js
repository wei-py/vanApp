export const build = [
  makeTitle("施工信息"),
  {
    formType: "input",
    label: "施工单位",
    required: true,
    value: "",
    name: "organization",
  },
  {
    formType: "input",
    label: "施工负责人",
    value: "",
    required: true,
    placeholder: "自动获取, 可手动修改",
    name: "personLiable",
    backfill(data) {
      this.value = data[this.name];
      const user = getUserVo();
      const permissionList = user.curUserCompanyVo.permissionList;
      const per = lo.find(permissionList, (n) => n.name == "PER_CONSTRUCT");
      if (per.name && !this.value) {
        this.value = user.name;
      }
    },
  },
  {
    formType: "input",
    label: "施工负责人电话",
    type: "number",
    placeholder: "自动获取, 可手动修改",
    name: "phone",
    required: true,
    rightIcon: "phone",
    clickRightIcon() {
      callPhone(this.value);
    },
    backfill(data) {
      this.value = data[this.name];
      const user = getUserVo();
      const permissionList = user.curUserCompanyVo.permissionList;
      const per = lo.find(permissionList, (n) => n.name == "PER_CONSTRUCT");
      if (per.name && !this.value) {
        this.value = user.phone;
      }
    },
  },
  {
    formType: "input",
    label: "开工时间",
    required: true,
    name: "startTime",
    isLink: true,
    readonly: true,
    realValue: "",
    click() {
      this.inlineForm[0].show = true;
      const selectDate = (this.value || dayjs().formType("YYYY-MM-DD")).split("-");
      this.inlineForm[0].inlineForm[0].value = selectDate;
      this.inlineForm[0].inlineForm[0].minDate = dayjs().add(-3, "year").toDate();
      this.inlineForm[0].inlineForm[0].maxDate = dayjs().add(5, "year").toDate();
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: "startTimePop",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem("startTime", "value", value);
              setItem("startTime", "realValue", value + " 00:00:00");
              setItem("startTime", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    label: "完工时间",
    required: true,
    name: "actEndTime",
    isLink: true,
    readonly: true,
    realValue: "",
    click() {
      this.inlineForm[0].show = true;
      const selectDate = (this.value || dayjs().formType("YYYY-MM-DD")).split("-");
      this.inlineForm[0].inlineForm[0].value = selectDate;
      this.inlineForm[0].inlineForm[0].minDate = dayjs().add(-3, "year").toDate();
      this.inlineForm[0].inlineForm[0].maxDate = dayjs().add(5, "year").toDate();
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: "actEndTime",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem("actEndTime", "value", value);
              setItem("actEndTime", "realValue", value + " 00:00:00");
              setItem("actEndTime", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    label: "施工备注(选填)",
    value: "",
    placeholder: "请输入",
    name: "remarks",
  },
  {
    formType: "input",
    label: "完工组件功率",
    required: true,
    value: "",
    readonly: true,
    placeholder: "系统抓取施工设备信息-组件数据",
    name: "modulePower",
    ...makeUnit("W"),
  },
  {
    formType: "input",
    label: "完工组件数量",
    required: true,
    value: "",
    readonly: true,
    placeholder: "系统抓取施工设备信息-组件数据",
    name: "moduleNumberReality",
    ...makeUnit("块"),
  },
  {
    formType: "input",
    label: "完工容量",
    required: true,
    value: "",
    readonly: true,
    placeholder: "系统抓取施工设备信息-组件数据",
    name: "installedCapacityReality",
    ...makeUnit("W"),
    backfill(data) {
      watchItem(["modulePower", "moduleNumberReality"], ([power, number]) => {
        console.log(power, number);
        const capacity = multiply(power * 1, number * 1);
        const result = unitConver(capacity);
        this.value = result.value;
        this.realValue = capacity;
        this.makeUnit(result.unit);
      });
    },
  },
];
