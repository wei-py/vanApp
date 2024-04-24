export default async function getArea() {
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
  return options
}
