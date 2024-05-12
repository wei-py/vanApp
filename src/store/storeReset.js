import { clone } from "lodash";

export default function storeReset({ store }) {
  const initState = clone(store.$state, true);
  store.$reset = () => store.$patch(clone(initState, true));
}
