export default function clearStore() {
  function clear() {
    const event = useEvent();
    const doms = useDom();
    // const form = useForm();
    event.$reset();
    doms.$reset();
    // form.$reset();
    // let fns = ["getData", "getData", "getData", "onRefresh"];
    // lo.forIn(fns, n => {
    //   event[n] = () => {}
    // })

    // doms.submitDoms.length = 0
    // form.gl.length = 0
  }
  clear();
}
