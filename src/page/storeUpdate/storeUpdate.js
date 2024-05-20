const formTemp = [
  {
    ...makeTitle("新增仓库"),
    name: "stoName",
    backfill(data) {
      const query = getQuery();
      if (query.buttonText == "新增") {
        this.title = "新增仓库";
      } else {
        this.title = data[this.name];
      }
    },
  },
  {
    formType: "input",
    value: "",
    name: "stoName",
    label: "仓库名称",
  },
  {
    ...backSelect(),
    ...makeSelect(
      "stoType",
      [
        { text: "一级仓库", value: "ZY" },
        { text: "二级仓库", value: "JMS" },
      ],
      "dymaic"
    ),
    // formType: "input",
    value: "",
    name: "stoType",
    label: "仓库类型",
    backfill(data) {
      this.inlineForm[0].inlineForm[0].confirm = (val) => {
        setItem(this.name, "value", val.selectedOptions[0].text);
        setItem(this.name, "realValue", val.selectedOptions[0].value);
        setItem(this.name, "inlineForm.0.show", false);
      };
      this.makeSelect(data[this.name], this.inlineForm[0].inlineForm[0].columns);
    },
  },
  {
    formType: "input",
    label: "地理区域",
    name: "locals",
    isLink: true,
    // rightIcon: "arrow",
    readonly: true,
    value: "",
    required: true,
    placeholder: "请选择所在地区",
    middle: { value: [], province: "", city: "", area: "" },
    click() {
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    getParam(param) {
      const suffix = this.name.replace("locals", "");
      const [province, city, area] = this.middle.value;
      param[`province${suffix}`] = province;
      param[`city${suffix}`] = city;
      param[`area${suffix}`] = area;
      param[this.name] = param[this.name].split("/");
    },
    async backfill(data) {
      this.inlineForm[0].inlineForm[0].name = this.name;
      const suffix = this.name.replace("locals", "");
      const cascader = getItem(this.name, "inlineForm.0.inlineForm.0");
      cascader.options = await lo.throttle(getArea)();
      cascader.options = mapTree(cascader.options, (n) => ({ ...n, value: n.text }));
      const value = data[`area${suffix}`] || data[`city${suffix}`];
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
        name: "localsPop",
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "cascader",
            title: "请选择所在地区",
            options: [],
            value: "",
            close() {
              setItem(this.name, "inlineForm.0.show", false);
            },
            finish(result) {
              const text = result.selectedOptions.map((n) => n.text).join("/");
              const value = result.selectedOptions.map((n) => n.value);
              this.value = result.value;
              setItem(this.name, text);
              setItem(this.name, "middle.value", value);
              setItem(this.name, "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    value: "",
    name: "address",
    address: "",
    lat: "",
    lng: "",
    loading: autoResetRef(false, 5000),
    label: "仓库定位",
    rightIcon: "location-o",
    clickRightIcon() {
      showFailToast("开发中...");
      // const hasMsg = postMsg({ func: "location" });
      // this.loading = hasMsg;

      // window.getLocation = async (coords, error) => {
      //   if (error) showToast(error);
      //   else {
      //     const message = JSON.parse(coords);
      //     this.loading = false;

      //     const { latitude, longitude } = message;
      //     this.lng = longitude;
      //     this.lat = latitude;
      //     const address = await getCity(this.lng, this.lat);
      //     this.address = address.regeocode.formatted_address;
      //     showSuccessToast("定位成功");
      //   }
      // };
    },
  },
  {
    formType: "input",
    value: "",
    name: "stoCapacity",
    label: "仓库容量",
    ...makeUnit("W"),
  },
  {
    ...backSelect(),
    ...makeSelect("companyId", [], "dymaic"),
    formType: "input",
    value: "",
    name: "companyId",
    label: "所属组织",
    async backfill(data) {
      await wait(1000);
      const columns = getItem("companyIdColumns", "columns");
      // this.inlineForm[0].inlineForm[0].columns = columns
      this.makeSelect(data[this.name], columns);
      this.inlineForm[0].inlineForm[0].confirm = (val) => {
        setItem(this.name, "value", val.selectedOptions[0].text);
        setItem(this.name, "realValue", val.selectedOptions[0].value);
        setItem(this.name, "inlineForm.0.show", false);
      };
    },
    // async backfill(data) {
    //   const columns = getItem("companyIdColumns", "columns");
    //   this.makeSelect(data[this.name], columns);
    // },
  },
  {
    formType: "input",
    labelClass: "!w-0",
    name: "button",
    valueClass: "!w-1/2",
    backfill() {
      const query = getQuery();
      if (query.buttonText) {
        this.inlineForm[1].text = query.buttonText;
      }
      const name = this.name.replace("button", "");
      this.inlineForm[0].name = name;
      this.inlineForm[1].name = name;
    },
    getParam(param) {
      delete param[this.name];
    },
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "取消",
        class: "w-full !rounded-none !border-[white]",
        click() {
          showToast(this.text);
        },
      },
      {
        slot: "extra",
        formType: "button",
        text: "更改",
        class: "w-1/2 !rounded-none !border-[#ffab30] !text-white !bg-[#ffab30]",
        async click(item) {
          let resp = {};
          const name = this.name.replace("button", "");
          const params = lo.pickBy(getParam(), (v, k) => k.includes(name));
          const result = lo.mapKeys(params, (v, k) => k.replace(/(.*?)_\w+/, "$1"));
          if (this.text == "删除") {
            resp = await http.delete(`sto/remove/${result.stoId}`);
            const event = useEvent()
            await event.getData();
          } else if (this.text == "更改") {
            resp = await http.put("/sto/update", result);
          } else if (this.text == "新增") {
            resp = await http.post("sto/create", result);
          }
          if (resp.code == 200) {
            showSuccessToast(this.text + "成功");
          }
        },
      },
    ],
  },
  {
    formType: "input",
    name: "stoId",
    value: "",
    class: "!hidden",
  },
  {
    formType: "input",
    name: "latitude",
    value: "23.001617",
    class: "!hidden",
  },
  {
    formType: "input",
    name: "longitude",
    value: "113.937768",
    class: "!hidden",
  },
];

export const hiddenColumns = [
  {
    formType: "",
    name: "companyIdColumns",
    columns: [],
    async onMounted() {
      const { data } = await http.get(`company/infos?pageNum=1&pageSize=999`);
      this.columns = data.records.map((n) => {
        return { text: n.name, value: n.companyId, ...n };
      });
    },
    async getColumns() {
      if (!this.columns.length) {
        lo.throttle(this.onMounted)();
        // await this.onMounted();
      }
      return this.columns;
    },
  },
];

export function newForm(_, num) {
  lo.range(num).forEach((i) => {
    const temp = lo.cloneDeep(formTemp).map((n) => {
      n.name += "_" + (i + 1);
      // setFormItem(n)
      return n;
    });
    _[i + 1] = temp;
  });
}

export const tableForm = [{}];
