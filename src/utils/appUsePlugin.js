import { get } from "lodash";

function createInstall(callback, fname) {
  return {
    install(app) {
      app.config.globalProperties[`$${fname}`] = callback;
    },
  };
}

export default function appUsePlugin(app) {
  app.use(createInstall(copyText, "copyText"));
  app.use(createInstall(statusColor, "statusColor"));
  app.use(createInstall(openUrl, "openUrl"));
  app.use(createInstall(openWeb, "openWeb"));
  app.use(createInstall(log, "log"));
  app.use(createInstall(isImg, "isImg"));
  app.use(createInstall(get, "get"));
  app.use(createInstall(viewFileType, "viewFileType"));
  app.use(createInstall(unitConver, "unitConver"));
  app.use(createInstall(investorIdDic, "investorIdDic"));
  app.use(createInstall(appConfig, "appConfig"));
  app.use(createInstall(lo.debounce, "debounce"));
  window.goBack = () => {
    // const isPopupShow = [...document.querySelectorAll(".van-popup")].some((n) => n.style.display != "none");
    const overlayDom = [...document.querySelectorAll(".van-overlay")];
    const isOverlayShow = overlayDom.some((n) => n.style.display != "none");

    const dom = useDom();

    if (dom.showPreviewImg) {
      dom.showPreviewImg = false;
      return;
    }

    if (!isOverlayShow) {
      router.go(-1);
    } else {
      for (const dom of overlayDom) {
        if (dom.style.display != "none") {
          dom.click();
          break;
        }
      }
    }
  };
}
