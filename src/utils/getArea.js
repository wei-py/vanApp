let area = [];
export default async function getArea() {
  if (area.length) {
    return area;
  }
  const { data } = await http.get("/area");
  const options = mapTree(
    data,
    (item) => {
      return {
        text: item.name,
        value: item.code,
      };
    },
    { children: "childList", mapChildren: "children" }
  );
  area = options;
  return options;
}
