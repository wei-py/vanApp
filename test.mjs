const previewUrl = "http://workorder.btosolarman.com:30640/onlinePreview?url=";
const url = "https://qiniu.btowork.top/prod/2024-05/202405181139039012/1a3447f213_20240518114144.pdf";
const matUrl = encodeURIComponent(btoa(url));

console.log(previewUrl + matUrl);

const a = ["deviceId", "manufacturer", "manufacturerShortName", "manufacturerShortCode", "supplier", "specificationsModel", "specs", "deviceType"];
