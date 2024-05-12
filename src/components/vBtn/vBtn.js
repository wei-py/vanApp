export default [
  makeTitle("审核"),
  {
    formType: "input",
    label: "订单",
    readonly: true,
    name: "orderId",
    value: "",
  },
  {
    formType: "input",
    label: "审核方式",
    name: "approvalType",
    readonly: true,
    value: "",
    realValue: "",
    backfill(data) {
      const dic = {
        APPROVAL_INNER: "内部审核",
        APPROVAL_BTO: "博通审核",
        APPROVAL_LEASE: "资方审核",
      };
      const stateId = data.stateId == "WAITING_APPROVAL_BTO" ? "APPROVAL_BTO" : "APPROVAL_INNER";
      this.realValue = data[this.name] || stateId;
      this.value = dic[data[this.name] || stateId];
    },
  },
  {
    formType: "input",
    label: "审核结果",
    name: "result",
    value: "",
    realValue: "",
    readonly: true,
    required: true,
    isLink: true,
    backfill(data) {
      const dic = { PASS: "通过", REJECT: "拒绝" };
      this.realValue = data[this.name];
      this.value = dic[data[this.name]];
    },
    // getParam(param) {
    // param[name] = this.realValue || "";
    // },
    click() {
      const flag = useFlag();
      this.inlineForm[0].show = flag.btns.canApproval;
    },
    onMounted() {
      const that = this;
      this.inlineForm = [
        {
          slot: "extra",
          name: "Pop",
          formType: "popup",
          show: false,
          round: true,
          position: "bottom",
          class: "h-[40vh] !w-screen",
          closeOnClickOverlay: true,
          inlineForm: [
            {
              slot: "default",
              formType: "pick",
              confirm(val) {
                that.value = val.selectedOptions[0].text;
                that.realValue = val.selectedOptions[0].value;
                that.inlineForm[0].show = false;
              },
              columns: [
                { value: "PASS", text: "通过" },
                { value: "REJECT", text: "拒绝" },
              ],
            },
          ],
        },
      ];
    },
    // backfill(data) {
    // const text = this.inlineForm[0].inlineForm[0].columns.find((n) => n.value == data[this.name] || n.value == this.realValue)?.text || this.value;
    // const realValue = this.inlineForm[0].inlineForm[0].columns.find((n) => n.value == data[this.name] || n.text == text)?.value;
    // this.value = text;
    // this.realValue = data[this.name] || realValue;
    // },
  },
  {
    formType: "input",
    label: "原因",
    value: "",
    error: true,
    placeholder: "请输入原因",
    name: "rejectReason",
  },
  {
    formType: "input",
    name: "rejectFiles",
    label: "附件",
    ...makeUpload(999, 100, "*", false, false),
    async backfill(data) {
      this.inlineForm[0].value = (data[this.name] || []).map((n) => {
        return {
          url: sToUrl(n.fileSrc),
        };
      });
      await wait(2000);
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
  },
];
