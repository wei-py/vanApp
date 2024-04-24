export default function openWeb(src, title = "") {
  router.push({
    path: "/web",
    query: { src, title, hiddenLeftArrow: title ? true : false },
  });
}
