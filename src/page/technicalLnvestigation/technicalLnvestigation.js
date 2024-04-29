export const reconnaissanceUserForm = [
  makeTitle("指派技术勘察员"),
  {
    formType: "input",
    label: "技术勘察员",
    name: "userId",
    required: true,
    value: "",
    ...backSelect(),
    ...makeSelect("userId", [], "dynamic"),
    async backfill(bData) {
      const url = queryUrl("user/get-by-permission", { permissions: "PER_JSKC", orderId: getQuery()?.orderId });
      const { data } = await http.get(url);
      const columns = data.map((item) => {
        return { ...item, text: item.name, value: item.userId };
      });
      watchItem("userId", (v) => {
        setItem("phone", "value", lo.find(columns, ["value", v]).phone);
      });
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    formType: "input",
    label: "技术勘察员手机号码",
    value: "",
    readonly: true,
    placeholder: "系统抓取技术勘察员手机号码",
    name: "phone",
    rightIcon: "phone",
    clickRightIcon() {
      callPhone(this.value);
    },
  },
  {
    formType: "cell",
    titleClass: ' xCenter',
    // name: 'appointBtn',
    inlineForm: [
      {
        slot: 'title',
        formType: 'button',
        text: '指派',
        round: true,
        size: 'small',
        type: 'primary',
        class: ' !py-1 !bg-[#ffab30] text-white !border-0 w-[30%]',
        click() {
          console.log(33333)
        }
      }
    ],
    backfill(bData) {
      const stageId = bData.orderState.stageId
      const stateId = bData.orderState.stateId
      const userId = getUserVo().userId
      if (stageId == 'KAN_CHA') {
        this.inlineForm[0].text = stateId == 'WAITING_APPOINT' ? '指派' : '重新指派'
      }
      // this.inlineForm[0].disabled = !(orderBaseUserId == userId || userId == util._.name('userId').value) || !util._.btns.canSave
    }
  }
];

export const basicMessageForm = [
  makeTitle('基本信息'),
  {
    formType: 'input',
    label: '拟安装逆变器品牌',
    name: 'inverterBrand',
    ...backSelect(),
    ...makeSelect('inverterBrand', [], 'dymatic'),
    async backfill(bData) {
      const { data } = await http.post('sto/device-args/list?option=manufacturerShortName', { deviceType: 'NBQ' })
      console.log(data, 333)
    }
  },
]