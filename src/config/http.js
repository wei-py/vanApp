import axios from "axios";

const baseURLDic = {
  boge: { app: "http://192.168.30.15:30600", web: "/dev" }, // 波哥
  bogeSto: { app: "http://192.168.30.15:30610", web: "/devSto" }, // 波哥 供应链
  mingjie: { app: "http://192.168.30.11:30600", web: "/mj" }, // 铭杰
  mingjieSto: { app: "http://192.168.30.11:30610", web: "/mjSto" }, // 铭杰 供应链
  sit: { app: "http://192.168.150.252:30600", web: "/sit" }, // 测试
  uat: { app: "https://7k20s48526.zicp.fun", web: "/uat" }, // 打包测试环境
  prod: { app: "http://workorder.btosolarman.com:30600", web: "/prod/order" },
  prodSto: { app: "http://workorder.btosolarman.com:30610", web: "/prodSto" },
};

const http = axios.create({
  baseURL: baseURLDic.prod.web,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    const headerInfo = getHeaderInfo();
    const flag = useFlag();
    flag.overlayShow = true;

    if (!lo.isUndefined(headerInfo.Uid)) {
      lo.merge(config.headers, headerInfo);
      lo.merge(config.headers, flag.headers);
    }

    return config;
  },
  (error) => {
    const flag = useFlag();
    flag.overlayShow = false;
    showToast(JSON.stringify(error));
    return Promise.reject(new Error(error));
  }
);

http.interceptors.response.use(
  (response) => {
    const data = response.data;

    // 接口错误处理
    if (lo.isUndefined(data)) return;
    // 错误处理 ❌
    if (data.code != 200) {
      showFailToast({
        message: data.msg || `接口错误:${data.code}`,
        className: "!bg-red-500",
      });
      throw new Error(data.msg);
    }
    const flag = useFlag();
    flag.overlayShow = false;
    return response.data;
  },
  (error) => {
    const flag = useFlag();
    flag.overlayShow = false;
    return Promise.reject(new Error(error));
  }
);

export default http;
