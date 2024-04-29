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

  window.goBack = () => {
    const isPopupShow = [...document.querySelectorAll(".van-popup")].some((n) => n.style.display != "none");
    if (!isPopupShow) {
      router.go(-1);
    }
  };
}
