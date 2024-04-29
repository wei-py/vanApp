export const businessReconnaissanceForm = [
  {
    customSlot: "title",
    titleClass: titleClass,
  },
  {
    customSlot: "location",
  },
];

export const panoramaForm = [
  makeTitle("房屋外观照"),
  {
    ...makeUpload(1, 100),
    required: true,
    name: "panorama",
    label: "房屋外观全景水印相机定位(必填)",
  },
];

export const innerStructureForm = [
  makeTitle("房屋内部结构"),
  {
    ...makeUpload(1, 100),
    required: true,
    label: "内部横梁立柱(必填)",
    name: "innerStructure",
  },
];

export const interneMilieuForm = [
  makeTitle("房屋内部环境"),
  {
    ...makeUpload(1, 100),
    required: true,
    label: "生活/工作/生产环境(必填)",
    name: "interneMilieu",
  },
];

export const roofForm = [
  makeTitle("屋顶连贯照"),
  {
    formType: "cell",
    title: "站东南角往西北拍、站北往正南拍、站西南角往东北拍、站东北角往西南拍、站南往正北拍、站西北角往东南拍(必填)",
    titleClass: "text-center",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站东南角往西北拍",
    name: "roofSoutheast",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站北往正南拍",
    name: "roofNorth",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站西南角往东北拍",
    name: "roofSouthwest",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站东北角往西南拍",
    name: "roofDBToXN",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站南往正北拍",
    name: "roofNToB",
  },
  {
    ...makeUpload(999, 100),
    required: true,
    label: "站西北角往东南拍",
    name: "roofXBToDN",
  },
];

export const roofWholeForm = [
  makeTitle("屋顶面整体照"),
  {
    ...makeUpload(1, 100),
    required: true,
    label: "风化和防水(必填)",
    name: "roofWhole",
  },
];

export const dimensionalDrawingForm = [
  makeTitle("楼板厚度照"),
  {
    ...makeUpload(999, 100),
    required: true,
    label: "楼板厚度照",
    name: "floorThickness",
    backfill(data) {
      this.inlineForm[0].value = data[this.name] ? data[this.name].map(n => ({url: sToUrl(n)})) : [];
    }
  },
];

export const explorationTableForm = [
  makeTitle("光伏勘察表"),
  {
    ...makeUpload(1, 50),
    required: true,
    label: "勘察表正面",
    name: "front",
    backfill(data) {
      const imgs = lo.get(data, `explorationTable.${this.name}`)
      this.inlineForm[0].value = imgs ? [{url: sToUrl(imgs)}] : [];
    }
  },
  {
    ...makeUpload(1, 50),
    required: true,
    label: "屋面尺寸图",
    name: "back",
    backfill(data) {
      const imgs = lo.get(data, `explorationTable.${this.name}`)
      this.inlineForm[0].value = imgs ? [{url: sToUrl(imgs)}] : [];
    }
  },
];

export const otherImagesForm = [
  makeTitle("其他踏勘影像件"),
  {
    ...makeUpload(999, 100),
    label: "其他踏勘影像件",
    name: "imageAddr",
    required: true,
  },
];

// export const = kjl

