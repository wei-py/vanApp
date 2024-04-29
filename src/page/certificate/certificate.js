export const certificate = [
  makeTitle(isZZD() ? "备案证及权属证明" : ""),
  {
    formType: "input",
    label: "备案证类型",
    name: "recordType",
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
        // this.columns.push(...columns)
      }
    },
  },
  {
    formType: "input",
    name: "recordCertificateId",
    label: "备案证编码",
    realValue: "",
    getParam(param) {
      param[name] = this.realValue;
    },
    isLink: true,
    readonly: true,
    click() {
      this.inlineForm[0].show = true;
    },
    inlineForm: [
      {
        slot: "extra",
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
            },
            columns: [],
          },
        ],
      },
      {
        slot: "right-icon",
        name: "recordCertificateIdRightIcon",
      },
    ],
    backfill(data) {
      watchItem(["companyId", "recordType"], async ([companyId, recordType]) => {
        const { data } = await http.post("record/list?isAuth=false", { recordType, companyId });
        if (recordType == 1) {
          // this.inlineForm[0].inlineForm[0].columns.length = 0
          // this.inlineForm[0].inlineForm[0].columns = [];
          // console.log(recordType, 3333)
          // console.log(data)
        } else {
          // this.inlineForm[0].inlineForm[0].columns = [];
          const columns = data.map((n) => ({ ...n, text: n.recordCertificateId, value: n.recordCertificateId }));
          this.inlineForm[0].inlineForm[0].columns = columns;
        }
      });

    }
  },
];
