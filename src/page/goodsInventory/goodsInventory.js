export const form = [
  makeTitle("仓库"),
  {
    ...backSelect(),
    ...makeSelect("stoId", [], "dynamic"),
    label: "仓库",
    name: "stoId",
    required: true,
    async backfill() {
      const query = getQuery();
      const params = {};
      params.stoType = query.deliveryType == "FIRST" ? "ZY" : "JMS";
      const { data } = await http.get(queryUrl(`sto/room-sto-type`, params));
      const columns = data.map((n) => {
        return { ...n, text: n.stoName, value: n.stoId };
      });
      this.makeSelect("", columns);
    },
  },
  {
    label: "仓库类型",
    readonly: true,
    name: "type",
    formType: "input",
    value: "",
    realValue: "",
    backfill() {
      const dic = {
        ZY: "一级仓库(直营)",
        JMS: "二级仓库(供应商)",
      };
      const query = getQuery();
      this.realValue = query.deliveryType == "FIRST" ? "ZY" : "JMS";
      this.value = dic[this.realValue];
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "查询",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[50%]",
        round: true,
        size: "small",
        click() {
          const stoId = getItem("stoId", "realValue");
          if (!stoId.length) {
            showFailToast("仓库必选");
            return;
          }
          setItem("tableTitle", "hidden", false);
          setItem("tabs", (v) => {
            v.hidden = false;
            v.search();
          });
        },
      },
    ],
  },
];

export const tableForm = [
  {
    ...makeTitle("设备"),
    hidden: true,
    name: "tableTitle",
    onMounted() {
      onUnmounted(() => {
        this.hidden = true;
      });
    },
  },
  {
    formType: "",
    name: "tabs",
    hidden: true,
    onMounted() {
      onUnmounted(() => {
        this.hidden = true;
      });
    },
    customSlot: "tabs",
    page: {
      pageSize: 1,
      pageNum: 10,
      total: "",
    },
    params: {
      stoId: "",
      deviceType: "ZUJIAN",
    },
    tabs: [
      { title: "组件", name: "ZUJIAN", value: "", data: [], header: [] },
      { title: "逆变器", name: "NBQ", value: "", data: [], header: [] },
      { title: "采集器", name: "CJQ", value: "", data: [], header: [] },
      { title: "配电箱", name: "PDX", value: "", data: [], header: [] },
    ],
    async changeTab(tab) {
      this.params.stoId = getItem("stoId", "realValue") || this.params.stoId;
      this.params.deviceType = tab || this.params.deviceType;
      const params = { ...this.params, ...this.page };
      {
        const { data } = await http.get(queryUrl(`sto/sto-device/show-device`, params));
        this.tabs.find((n) => n.name == this.params.deviceType).data = data.records;
        this.page.total = data.totalRow;
      }
      {
        const { data } = await http.get(queryUrl(`sto/sto-device/show-count`, params));
        this.tabs.find((n) => n.name == this.params.deviceType).header = data;
      }
    },
    async search() {
      this.page.pageSize = 1;
      this.page.pageNum = 10;
      this.changeTab();
    },
  },
];
