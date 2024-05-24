import {get} from "lodash"

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
  app.use(createInstall(unitConver, "unitConver"));
  app.use(createInstall(investorIdDic, "investorIdDic"));

  window.goBack = () => {
    const isPopupShow = [...document.querySelectorAll(".van-popup")].some((n) => n.style.display != "none");
    if (!isPopupShow) {
      router.go(-1);
    }
  };
}
