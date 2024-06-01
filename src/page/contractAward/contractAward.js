// export const urls = {
//   YUEXIU_ZZD: "order/get-lease-contract",
//   YUEXIU_ZZD_ORG: "order/org/get-contract",
//   TYZF_ZZD: "",
//   TYZF_ZZD_ORG: "",
// }

import { errorMessages } from "vue/compiler-sfc";

async function getContractUrl() {
  const url = query.online ? "general-investor/get-online-sign-rent-contract" : "general-investor/get-offline-sign-rent-contract";
  const data = await http.get(queryUrl(url, lo.omit(query, "title")));
  setItem("contractUrl", "value", data.contractUrl);
}

export const contractAward = [
  ///// 线上电子合同签约 /////
  () => {
    const query = getQuery();
    if (!lo.has(query, "online")) {
      return [
        {
          ...makeTitle("合同签约"),
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD"),
        },
        {
          formType: "input",
          name: "leaseSigneUrl",
          label: "线上签约(跳转资方H5)",
          readonly: true,
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD"),
          realValue: "",
          backfill(data) {
            this.realValue = data.leaseSigneUrl;
            this.value = "";
          },
        },
        {
          formType: "cell",
          titleClass: " xCenter",
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD"),
          inlineForm: [
            {
              slot: "title",
              formType: "button",
              url: "",
              text: "复制链接",
              round: true,
              size: "small",
              type: "primary",
              class: " !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",
              click() {
                copyText(getItem("leaseSigneUrl").realValue);
              },
            },
          ],
        },
        {
          ...makeTitle("电子合同下载"),
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD_ORG"),
        },

        {
          formType: "input",
          name: "leaseSigneUrl",
          label: "线上签约(跳转资方H5)",
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD_ORG"),
          isLink: true,
          realValue: "",
          click() {
            openUrl(this.realValue);
          },
          backfill(data) {
            this.realValue = data.leaseSigneUrl;
            if (this.realValue) {
              this.value = "一键下载";
            }
          },
        },
        {
          formType: "cell",
          titleClass: " xCenter",
          hidden: computed(() => viewOrg() != "YUEXIU_ZZD_ORG"),
          inlineForm: [
            {
              slot: "title",
              formType: "button",
              url: "",
              text: "复制下载链接",
              round: true,
              size: "small",
              type: "primary",
              class: " !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",
              click() {
                showFailToast("资方暂未支持此功能, 请联系博通总部商务中心, 获取合同");
                // util.toast.error('资方暂未支持此功能, 请联系博通总部商务中心, 获取合同')
                return;
                // copyText(getItem("leaseSigneUrl").realValue);
              },
            },
          ],
        },
      ];
    } else {
      if (query.online == "true") {
        return [
          makeTitle("屋顶租赁合同签约"),
          {
            formType: "input",
            name: "actorStatus",
            label: "屋顶租赁合同",
            value: "",
            backfill(data) {
              const dic = { A: "甲方", B: "乙方", W: "待签约", S: "已签约", ["-"]: "-" };
              this.value = lo
                .get(data, `data.${this.name}`, "")
                .split("")
                .reduce((pre, cur) => (pre += dic[cur]), "");
            },
          },
          {
            formType: "input",
            label: "签署方式",
            value: "",
            name: "signeType",
            inputAlign: "right",
            onMounted() {
              this.label = viewOrg().includes("TYZF") ? "签约方式" : "签署方式";
            },
            backfill(data) {
              // if (!lo.isNull(data.data)) {
              //   this.inlineForm[0].disabled = true;
              //   this.inlineForm[1].disabled = true;
              // }
            },

            inlineForm: [
              {
                slot: "input",
                formType: "button",
                text: "短信签约",
                size: "mini",
                round: true,
                class: "!mr-[10px] !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",
                async click() {
                  const data = await http.get(
                    queryUrl("general-investor/get-actor-rent-sign-url", { signer: "A", signType: "sms", orderId: query.orderId })
                  );
                  if (data.code == 200) {
                    showSuccessToast("已发送");
                  }
                },
              },
              {
                slot: "extra",
                formType: "button",
                text: "App签约",
                round: true,
                size: "mini",
                class: " !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",
                async click() {
                  const data = await http.get(
                    queryUrl("general-investor/get-actor-rent-sign-url", { signer: "A", signType: "app", orderId: query.orderId })
                  );
                  if (data.code == 200) {
                    openWeb(data.data.actorSignTaskEmbedUrl);
                  }
                },
              },
            ],
          },
          {
            formType: "input",
            name: "contractUrl",
            label: "已签约合同查看",
            value: "合同查看",
            realValue: "",
            inputAlign: "right",
            readonly: true,
            isLink: true,
            click() {
              if (!this.realValue) {
                const actorStatus = getItem("actorStatus", "value");
                showFailToast(actorStatus || "没有合同可以查看");
                // showFailToast({
                //   className: "!bg-[red] !text-white",
                //   message: getItem("actorStatus", "value"),
                // });
              } else {
                router.push({
                  path: "/previewFile",
                  query: {
                    url: this.realValue,
                    title: this.label,
                    type: "pdf",
                  },
                });
                // openUrl(this.realValue, this.label);
              }
            },
            backfill(data) {
              this.realValue = lo.get(data, `data.${this.name}.0`);
            },
          },
        ];
      } else {
        return [
          makeTitle("纸质合同电子模板下载"),
          {
            formType: "input",
            label: "下载纸质合同电子模板",
            name: "",
            value: "一键下载",
            isLink: true,
            readonly: true,
            click() {
              showSuccessToast(this.value);
            },
          },
          {
            formType: "input",
            name: "",
            labelClass: "hidden",
            inputAlign: "center",
            inlineForm: [
              {
                slot: "input",
                formType: "button",
                text: "复制下载链接",
                round: true,
                size: "mini",
                class: " !text-[14px] !px-5 !py-2 !bg-[#ffab30] !text-white !border-0",
                click() {
                  showSuccessToast(this.text);
                },
              },
            ],
          },
        ];
      }
    }
  },
];

export const signedContractForm = [
  {
    ...makeTitle("屋顶方已盖章合同扫描件上传"),
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  {
    ...makeUpload(999, 100, "*"),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = param[this.name].map((n) => getUploadUrl(n));
    },
    name: "orgLegalIdAuthFile",
    label: "法人代表/负责人身份证明书(盖公章)",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
    onMounted() {
      if (viewOrg() == "TYZF_ZZD_ORG") {
        this.required = false;
        this.label = "法人代表/负责人身份证明书(选填)";
      } else {
        this.label = "法人代表/负责人身份证明书(盖公章)";
        this.required = true;
      }
    },
  },
  {
    ...makeUpload(999, 100, "*"),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = param[this.name].map((n) => getUploadUrl(n));
    },
    name: "orgSignatureChop",
    label: "法人组织预留印鉴",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
    onMounted() {
      if (viewOrg() == "TYZF_ZZD_ORG") {
        this.required = false;
        this.label = "法人组织预留印鉴(选填)";
      } else {
        this.label = "法人组织预留印鉴";
        this.required = true;
      }
    },
  },
  {
    formType: "cell",
    value: "提示: 盖公章、法人代表名字章、财务专用章。若确无财务专用章可不盖；若无法人代表名字章可手写签名",
    valueClass: "text-red !text-left",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "contract",
    label: "屋顶方已盖章合同扫描件",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
  },
  {
    formType: "cell",
    value:
      "提示: 上传 “法人代表/负责人身份证明书”、“法人组织预留印鉴”、“屋顶方已盖章合同扫描件” 及签约现场系列照片成功后，项目详情里的 “合同签约” 环节右侧将显示绿色的 “已签约”",
    valueClass: "text-red !text-left",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    onMounted() {
      if (viewOrg() == "YUEXIU_ZZD_ORG") {
        this.value =
          "提示: 上传 “法人代表/负责人身份证明书”、“法人组织预留印鉴”、“屋顶方已盖章合同扫描件” 及签约现场系列照片成功后，项目详情里的 “合同签约” 环节右侧将显示绿色的 “已签约”";
      } else {
        this.value = "提示：上传“屋顶方已盖章合同扫描件”及签约现场系列照片成功后，项目详情里的“合同签约”环节右侧将显示绿色的“已签约”";
      }
    },
  },
];

export const bothSignedContractForm = [
  {
    ...makeTitle("双方已盖章合同扫描件上传"),
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "bothStampedContact",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    label: "双方已盖章合同扫描件",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  {
    formType: "cell",
    value: "提示：业务人员拿到资方+屋顶方已盖章合同扫描件后，需上传至“双方已盖章合同扫描件”中，否则后期施工上传员无法提交施工审核",
    valueClass: "text-red !text-left",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    // onMounted() {
    //   if (viewOrg() == 'YUEXIU_ZZD_ORG') {
    //   } else {
    //     this.value = "提示：业务人员拿到资方+屋顶方已盖章合同扫描件后，需上传至“双方已盖章合同扫描件”中，否则后期施工上传员无法提交施工审核"
    //   }
    // }
  },
];

export const signedSiteForm = [
  {
    ...makeTitle("签约现场照片"),
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  //

  {
    ...makeUpload(1, 100, "*"),
    name: "signPhoto",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    label: "现场签字照",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "stampUsedPhoto",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    label: "现场用印照",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
  },
  {
    ...makeUpload(1, 100, "*"),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    name: "signOverPhoto",
    label: "签约完成照",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    required: true,
  },
  {
    formType: "cell",
    value:
      "提示:1, 现场签字照: 法人代表/负责人正脸、持笔或持法人代表章, 与合同签署页同框拍摄; 2, 现场用印照: 法人代表/负责人正脸、持印, 与合同签署页同框拍摄; 3, 签署完成照: 法人代表/负责人正脸, 与合同、身份证、统一社会信用代码证/组织机构代码证（村委）或营业执照（集体经济组织）同框拍摄”",
    valueClass: "text-red !text-left",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
  },
  {
    formType: "input",
    name: "",
    labelClass: "hidden",
    inputAlign: "center",
    hidden: computed(() => !viewOrg().includes("ZZD_ORG")),
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "保存",
        round: true,
        size: "small",
        class: " !text-[14px] !px-10 !py-2 !bg-[#ffab30] !text-white !border-0",
        async click() {
          const params = getParam();
          if (viewOrg().includes("ZZD_ORG")) {
            const { data } = await http.post("order/org/put-contract", params);
          }
          // general-investor/put-offline-sign-rent-contract
          // const { data } = await http.post("order/org/put-contract", params);
          // showSuccessToast(this.text);
        },
      },
    ],
  },
];

export const button = [
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    class: "!bg-[#f3f3f3] !pt-0",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "屋顶租赁合同下载",
        round: true,
        size: "small",
        realValue: "TENANT",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };

          const downUrl = viewOrg() == "TYZF" ? "/order/general-investor/download-rent-contract" : "/order/leaseContract/get-pdf";
          const baseUrl = baseURLDic.mingjie.web;
          const url = queryUrl(`${baseUrl}${downUrl}`, params);
          // TODO
          // console.log(url, 333)
          // postMsg({ func: "openPdf", url });
          // window.open(url);
        },
      },
    ],
    onMounted() {
      const query = getQuery();
      if (query.online == "true") {
        this.inlineForm[0].text = "屋顶租赁合同下载";
      } else {
        this.inlineForm[0].text = "双方盖章租赁合同下载";
      }
    },
    backfill(data) {
      this.inlineForm[0].disabled = !data.TENANT;
    },
  },
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    hidden: computed(() => !viewOrg().includes("YUEXIU")),
    class: "!bg-[#f3f3f3] !pt-0",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "买卖合同下载",
        realValue: "SELLER",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app;
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params);
          window.open(url);
        },
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.SELLER;
    },
  },
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    realValue: "FACTORY",
    class: "!bg-[#f3f3f3] !pt-0",
    hidden: computed(() => !viewOrg().includes("YUEXIU")),
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "运维合同下载",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app;
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params);
          window.open(url);
        },
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.FACTORY;
    },
  },
];
