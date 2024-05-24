export const companyForm = [
  {
    ...makeTitle("选择所属组织"),
    show: false,
    name: "title",
  },
  {
    formType: "",
    name: "userId",
    value: "",
    loginInfo: {},
    backfill(data) {
      this.value = data.userVo.userId;
    },
  },
  {
    formType: "input",
    ...backSelect(),
    ...makeSelect("companyId", [], "dymaic"),
    name: "companyId",
    label: "所属组织",
    async backfill(bData) {
      const { data } = await http.get(queryUrl("user-company/get-user-companies", { userId: bData.userVo.userId }));
      const columns = data.map((n) => {
        return { text: n.company.name, value: n.company.companyId };
      });
      this.makeSelect("", columns);
    },
  },
  {
    formType: "input",
    labelClass: "!w-0",
    name: "button",
    valueClass: "!w-1/2",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "取消",
        size: "small",
        class: "w-full !rounded-none !border-[white]",
        click() {
          setItem("title", "show", false);
        },
      },
      {
        slot: "extra",
        formType: "button",
        text: "确认",
        size: "small",
        class: "w-1/2 !rounded-none !border-[#ffab30] !text-white !bg-[#ffab30]",
        async click(item) {
          const companyId = getItem("companyId", "realValue");
          const userId = getItem("userId", "value");
          const loginInfo = getItem("userId", "loginInfo")
          console.log(companyId, userId, loginInfo);
          const data = await http.post(queryUrl("user-company/update-user-current-company", { companyId, userId }));

          if (data.code == 200) {
            const event = useEvent()
            await event.getData(loginInfo)
            setItem("title", "show", false);
          }
          // setItem("title", 'show', false)
        },
      },
    ],
  },
];
