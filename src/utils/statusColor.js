export default function statusColor(status) {
  if (lo.isUndefined(status)) {
    return 'gray'
  }

  if (status.includes("通过") || status.includes("完毕") || status.includes("已签约") || status == "起租") {
    return "green";
  }

  if (status.includes("拒绝") || status.includes("终止") || status.includes("锁定")) {
    return "red";
  }
  if (status.includes("审")) {
    return "blue";
  }
  if (status.includes("填写") || status.includes("待")) {
    return "yellow";
  }

  if (status.includes("未")) {
    return "gray";
  }

  
}
