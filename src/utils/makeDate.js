export default function makeDate({ ...args }) {
  return {
    formType: "input",
    name: args.name,
    isLink: true,
    readonly: true,
    realValue: "",
    click() {
      this.inlineForm[0].show = true;
      const selectDate = (this.value || dayjs().format(args.formType || "YYYY-MM-DD")).split("-");
      this.inlineForm[0].inlineForm[0].value = selectDate;
      if (args.minDate) {
        this.inlineForm[0].inlineForm[0].minDate = dayjs().add(args.minDate, "year").toDate();
      }
      if (args.maxDate) {
        this.inlineForm[0].inlineForm[0].maxDate = dayjs().add(args.maxDate, "year").toDate();
      }
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: args.name + "Pop",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            columnsType: args.columnsType,
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem(args.name, "value", value);
              setItem(args.name, "realValue", value + " 00:00:00");
              setItem(args.name, "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  };
}
