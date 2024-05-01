export default function makeUpload(maxCount = 999, width = 100, accept = "") {
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
        accept,
        previewFullImage: false,
        clickPreview(img) {
          if (!isImg(img.url)) {
            console.log('这不是一张图片', img)
            return;
          } else {
            const dom = useDom();
            dom.imgIndex = dom.imgDoms.findIndex((n) => n == img.url);
            dom.showPreviewImg = true;
          }
        },
        value: [],
        uploadIcon: "plus",
        class: "mx-auto mt-2",
        beforeDelete(img) {
          if (!isImg(img.url)) return;
          const dom = useDom();
          const index = dom.imgDoms.findIndex((n) => n == img.url);
          dom.imgDoms.splice(index, 1);
          return true;
        },
        beforeRead: (img) => {
          upload(img);
          return true;
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
        inlineForm: [
          {
            // slot: 'preview-cover',
            // formType: '',
            // formType: 'button',
            // onMounted() {
              // console.log(this, 333)

            // }
          }
        ]
      },
    ],
    backfill(data) {
      this.inlineForm[0].value = data[this.name] ? [{ url: sToUrl(data[this.name]) }] : [];
    },
    getParam(param) {
      param[this.name] = this.inlineForm[0].value[0].url;
    },
  };
}

export function makeImgs(data) {
  if (lo.isArray(data[this.name])) {
    this.inlineForm[0].value = data[this.name].map((n) => ({ url: sToUrl(n) }));
  } else if (lo.isString(data[this.name])) {
    if (data[this.name].startsWith("[")) {
      this.inlineForm[0].value = JSON.parse(data[this.name]).map((n) => ({ url: sToUrl(n), ...pickImgName(n) }));
      // file: new File([], '123123')
    } else {
      this.inlineForm[0].value = [{ url: sToUrl(data[this.name]) }];
    }
  }
}



function pickImgName(url, type = 'object') {
  // const name = url.split('/').pop();
  if (type == 'object') {
    return {
      // file : new File([],  url)
    }
  }
}