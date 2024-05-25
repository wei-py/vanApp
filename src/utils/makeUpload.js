export default function makeUpload(maxCount = 999, width = 100, accept = "", required = false, disabledFlag, orderId) {
  const flag = useFlag();
  const canEdit = computed(() => flag.btns.canEdit);
  let deletable = canEdit;
  let disabled = computed(() => !canEdit.value);
  if (!lo.isUndefined(disabledFlag)) {
    disabled = disabledFlag;
    deletable = !disabledFlag;
  }
  // dom.imgDomDic.push({name: })
  return {
    formType: "input",
    // label,
    // name,
    value: "",
    longPress: true,
    class: `flex-col-reverse  float-start !w-[${width}%]`,
    labelClass: "xCenter !w-full !m-0",
    inlineForm: [
      {
        slot: "input",
        formType: "upload",
        maxCount,
        multiple: maxCount > 1,
        accept,
        required,
        deletable: deletable,
        disabled: disabled,
        previewFullImage: false,
        clickPreview(img) {
          if (!isImgSlot(img)) {
            const url = img.objectUrl || getUploadUrl(img);
            router.push({
              path: "/previewFile",
              query: { url },
            });
            return;
          } else {
            const dom = useDom();
            dom.imgIndex = dom.imgDoms.findIndex((n) => n == (img.objectUrl || getUploadUrl(img)));
            dom.showPreviewImg = true;
          }
        },
        value: [],
        uploadIcon: "plus",
        class: "mx-auto mt-2",
        beforeDelete(img) {
          if (!isImgSlot(img)) return true;
          const dom = useDom();
          // dom.imgDomDic.forEach(item => {
          //   const idx = item.value.findIndex(n => n == getUploadUrl(img))
          //   if (idx != -1) {
          //     item.value.splice(idx, 1)
          //   }
          // })
          const index = dom.imgDoms.findIndex((n) => n == getUploadUrl(img));
          dom.imgDoms.splice(index, 1);
          return true;
        },
        beforeRead(img) {
          return new Promise(async (resolve, reject) => {
            const src = await upload(img, getQuery()?.orderId || orderId);
            // const imgs = [img].flat().map((im, idx) => {
            //   im.src = src[idx].src
            //   im.url = src[idx].url
            //   return im
            // })
            img.src = src;
            img.url = src;
            await wait(500);

            // const dom = useDom();
            // dom.imgDoms = [...document.querySelectorAll(".van-image__img")].map((n) => n.src);
            resolve(img);
            refreshImg();
          });
        },
        menuRight: [
          {
            label: "下载图片到相册",
            click: (...args) => {
              const src = getlongPressUrl();
              console.log(src);
            },
          },
        ],
      },
    ],
    backfill(data) {
      this.inlineForm[0].value = data[this.name] ? [{ url: sToUrl(data[this.name]) }] : [];
      // const dom = useDom();
      pushImg(sToUrl(data[this.name]));
    },
    onMounted() {
      this.inlineForm[0].value.length = 0;
    },
    getParam(param) {
      const url = lo.get(this, "inlineForm.0.value.0.file.url") || lo.get(this, "inlineForm.0.value.0.url", "");
      param[this.name] = url;
    },
  };
}

export function makeImgs(data) {
  if (lo.isArray(data[this.name])) {
    this.inlineForm[0].value = data[this.name].map((n) => ({ url: sToUrl(n) }));
    pushImg(...this.inlineForm[0].value.map((n) => n.url));
  } else if (lo.isString(data[this.name])) {
    if (data[this.name].startsWith("[")) {
      this.inlineForm[0].value = JSON.parse(data[this.name]).map((n) => ({ url: sToUrl(n), ...pickImgName(n) }));
      console.log(this.inlineForm[0].value, this.name);
      pushImg(...this.inlineForm[0].value.map((n) => n.url));
      // file: new File([], '123123')
    } else if (isImg(data[this.name])) {
      this.inlineForm[0].value = [{ url: sToUrl(data[this.name]) }];
      pushImg(sToUrl(data[this.name]));
    }
  }
}

export function makeImgsDesign(data) {
  let result = [];
  if (lo.isArray(data)) {
    result = data.map((n) => ({ url: sToUrl(n) }));
    // pushImg(...this.inlineForm[0].value.map((n) => n.url));
  } else if (lo.isString(data)) {
    if (data.startsWith("[")) {
      result = JSON.parse(data).map((n) => ({ url: sToUrl(n), ...pickImgName(n) }));
      // pushImg(...this.inlineForm[0].value.map((n) => n.url));
      // file: new File([], '123123')
    } else if (isImg(data)) {
      result = [{ url: sToUrl(data) }];
      // pushImg(sToUrl(data));
    }
  }
  pushImg(...result.map((n) => n.url));
  return result;
}

function pickImgName(url, type = "object") {
  // const name = url.split('/').pop();
  if (type == "object") {
    return {
      // file : new File([],  url)
    };
  }
}
