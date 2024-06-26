export const electricStationMaterialForm = [
  makeTitle("来料检验 + 电站基础照"),
  {
    label: "来料检验单(或底板长宽厚、斜撑截面长宽厚)",
    name: "来料检验单",
    imageName: "来料检验单",
    required: true,
    ...makeUpload(999, 100, "*"),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName == this.imageName)?.imageList || [];
      this.inlineForm[0].value = value.map((n) => ({ url: sToUrl(n.imageAddr) }));
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageList: this.inlineForm[0].value.map((n) => {
          return {
            imageAddr: getUploadUrl(n),
            imageName: this.name,
          };
        }),
        imageName: this.name,
      });
    },
  },
  {
    label: "膨胀螺栓长度测量",
    imageName: "膨胀螺栓长度测量",
    name: "膨胀螺栓长度测量",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "立柱/斜梁的截面长或宽",
    imageName: "立柱/斜梁的截面长或宽",
    name: "立柱/斜梁的截面长或宽",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "立柱/斜梁厚",
    imageName: "立柱/斜梁厚",
    name: "立柱/斜梁厚",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "横梁截面长",
    imageName: "横梁截面长",
    name: "横梁截面长",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "横梁截面宽",
    imageName: "横梁截面宽",
    name: "横梁截面宽",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "横梁厚",
    imageName: "横梁厚",
    name: "横梁厚",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "底板防水安装",
    imageName: "底板防水安装",
    name: "底板防水安装",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "完工后周边立柱底板",
    imageName: "完工后周边立柱底板",
    name: "完工后周边立柱底板",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    ...makeUpload(999, 100),
    label: "特殊说明(如联排声明、联排支架分离细节、特殊申请)",
    imageName: "特殊说明",
    name: "特殊说明",
    backfill(data) {
      const value = data?.electricStationMaterial?.find((n) => n.imageName == this.imageName)?.imageList || [];
      this.inlineForm[0].value = value.map((n) => ({ url: sToUrl(n.imageAddr) }));
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.electricStationMaterial)) {
        params.electricStationMaterial = [];
      }
      params.electricStationMaterial.push({
        imageList: this.inlineForm[0].value.map((n) => {
          return {
            imageAddr: getUploadUrl(n),
            imageName: this.name,
          };
        }),
        imageName: this.name,
      });
    },
  },
];

export const trestleDistributionBoxForm = [
  makeTitle("支架 + 防水槽安装"),
  {
    label: "立柱与斜梁焊接",
    name: "立柱与斜梁焊接",
    imageName: "立柱与斜梁焊接",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "斜梁与横梁焊接",
    imageName: "斜梁与横梁焊接",
    name: "斜梁与横梁焊接",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "人字形顶焊接",
    imageName: "人字形顶焊接",
    name: "人字形顶焊接",
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "立柱东西间距",
    imageName: "立柱东西间距",
    name: "立柱东西间距",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "立柱南北间距",
    imageName: "立柱南北间距",
    name: "立柱南北间距",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "西北角拍东南支架",
    imageName: "西北角拍东南支架",
    name: "西北角拍东南支架",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "东北角拍西南支架",
    imageName: "东北角拍西南支架",
    name: "东北角拍西南支架",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "西南角拍东北支架",
    imageName: "西南角拍东北支架",
    name: "西南角拍东北支架",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "东南角拍西北支架",
    imageName: "东南角拍西北支架",
    name: "东南角拍西北支架",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "辅槽与横向集水槽搭接",
    imageName: "辅槽与横向集水槽搭接",
    name: "辅槽与横向集水槽搭接",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },

  {
    label: "横向与竖向集水槽搭接",
    imageName: "横向与竖向集水槽搭接",
    name: "横向与竖向集水槽搭接",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "纵向集水槽与天沟搭接",
    imageName: "纵向集水槽与天沟搭接",
    name: "纵向集水槽与天沟搭接",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "横屏拍摄水槽托架",
    imageName: "横屏拍摄水槽托架",
    name: "横屏拍摄水槽托架",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "下水管接至楼面下水口或接至一楼",
    imageName: "下水管接至楼面下水口或接至一楼",
    name: "下水管接至楼面下水口或接至一楼",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "横排时M型水槽",
    imageName: "横排时M型水槽",
    name: "横排时M型水槽",
    ...makeUpload(1, 100),
    backfill(data) {
      const value = data?.trestleDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.trestleDistributionBox)) {
        params.trestleDistributionBox = [];
      }
      params.trestleDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
];

export const componentInstallationForm = [
  makeTitle("组件安装"),
  {
    label: "组件铭牌",
    name: "组件铭牌",
    imageName: "组件铭牌",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "组件方位角",
    imageName: "组件方位角",
    name: "组件方位角",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "组件倾角",
    imageName: "组件倾角",
    name: "组件倾角",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "组件接地",
    imageName: "组件接地",
    name: "组件接地",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "航拍俯视近景",
    imageName: "航拍俯视近景",
    name: "航拍俯视近景",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "航拍坐北朝南远景",
    imageName: "航拍坐北朝南远景",
    name: "航拍坐北朝南远景",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.componentInstallation?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.componentInstallation)) {
        params.componentInstallation = [];
      }
      params.componentInstallation.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
];

export const wireRiggingForm = [
  makeTitle("线缆安装"),
  {
    label: "线缆品牌与型号",
    imageName: "线缆品牌与型号",
    name: "线缆品牌与型号",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.wireRigging?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.wireRigging)) {
        params.wireRigging = [];
      }
      params.wireRigging.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "线缆屋面走线管照片",
    imageName: "线缆屋面走线管照片",
    name: "线缆屋面走线管照片",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.wireRigging?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.wireRigging)) {
        params.wireRigging = [];
      }
      params.wireRigging.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "线缆下墙走线管照片",
    imageName: "线缆下墙走线管照片",
    name: "线缆下墙走线管照片",
    required: true,
    ...makeUpload(1, 100),
    backfill(data) {
      const value = data?.wireRigging?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.wireRigging)) {
        params.wireRigging = [];
      }
      params.wireRigging.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
];

export const groundingSystemForm = [
  makeTitle("接地系统"),
  {
    label: "支架与接地扁铁",
    imageName: "支架与接地扁铁",
    name: "支架与接地扁铁",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.groundingSystem?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.groundingSystem)) {
        params.groundingSystem = [];
      }
      params.groundingSystem.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "接地扁铁与接地极",
    imageName: "接地扁铁与接地极",
    name: "接地扁铁与接地极",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.groundingSystem?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.groundingSystem)) {
        params.groundingSystem = [];
      }
      params.groundingSystem.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
];

export const inverterDistributionBoxForm = [
  makeTitle("逆变器和配电箱"),
  {
    label: "逆变器和配电箱整体照",
    imageName: "逆变器和配电箱整体照",
    name: "逆变器和配电箱整体照",
    required: true,
    ...makeUpload(999, 100),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageList || "";
      this.inlineForm[0].value = value.map((n) => ({ url: sToUrl(n.imageAddr) }));
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageList: this.inlineForm[0].value.map((n) => {
          return {
            imageAddr: getUploadUrl(n),
            imageName: this.name,
          };
        }),
        imageName: this.name,
      });
    },
  },
  {
    label: "配电箱内部照",
    imageName: "配电箱内部照",
    name: "配电箱内部照",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "逆变器铭牌照",
    imageName: "逆变器铭牌照",
    name: "逆变器铭牌照",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "光精灵或采集器二维码",
    imageName: "光精灵或采集器二维码",
    name: "光精灵或采集器二维码",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "支架系统接地阻值(<10Ω)",
    imageName: "支架系统接地阻",
    name: "支架系统接地阻",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "电气系统接地阻值(<4Ω)",
    imageName: "电气系统接地阻值",
    name: "电气系统接地阻值",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "开路电压照片1",
    imageName: "开路电压照片1",
    name: "开路电压照片1",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "开路电压照片2",
    imageName: "开路电压照片2",
    name: "开路电压照片2",
    required: true,
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "开路电压照片3",
    imageName: "开路电压照片3",
    name: "开路电压照片3",
    ...makeUpload(1, 50),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "开路电压照片4",
    imageName: "开路电压照片4",
    name: "开路电压照片4",
    ...makeUpload(1, 100),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
  {
    label: "开路电压照片",
    imageName: "开路电压照片",
    name: "开路电压照片",
    ...makeUpload(999, 100),
    backfill(data) {
      const value = data?.inverterDistributionBox?.find((n) => n.imageName == this.imageName)?.imageList || [];
      this.inlineForm[0].value = value.map((n) => ({ url: sToUrl(n.imageAddr) }));
      // this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.inverterDistributionBox)) {
        params.inverterDistributionBox = [];
      }
      params.inverterDistributionBox.push({
        imageList: this.inlineForm[0].value.map((n) => {
          return {
            imageAddr: getUploadUrl(n),
            imageName: this.name,
          };
        }),
        imageName: this.name,
      });
    },
  },
];

export const completionInspectionForm = [
  makeTitle("施工自检单"),
  {
    label: "施工自检单",
    imageName: "施工自检单",
    name: "施工自检单",
    required: true,
    ...makeUpload(1, 100),
    backfill(data) {
      const value = data?.completionInspection?.find((n) => n.imageName.includes(this.imageName))?.imageAddr || "";
      this.inlineForm[0].value = value ? [{ url: sToUrl(value) }] : [];
      const dom = useDom();
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
    },
    getParam(params) {
      delete params[this.name];
      if (!lo.isArray(params.completionInspection)) {
        params.completionInspection = [];
      }
      params.completionInspection.push({
        imageAddr: this.inlineForm[0].value.map((n) => getUploadUrl(n))[0],
        imageName: this.name,
      });
    },
  },
];
