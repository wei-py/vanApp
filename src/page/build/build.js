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
    ...makeDate({ name: "startTime" }),
    label: "开工时间",
    required: true,
  },
  {
    ...makeDate({ name: "actEndTime" }),
    label: "完工时间",
    required: true,
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
        const capacity = multiply(power * 1, number * 1);
        const result = unitConver(capacity);
        this.value = result.value;
        this.realValue = capacity;
        this.makeUnit(result.unit);
      });
    },
  },
];
