import set from "./set";
import clear from "./clear";
import get from "./get";
export default class {
  add(strogeData) {
    set(strogeData);
  }
  clear(param) {
    clear(param);
  }
  get(key) {
    return get(key);
  }
}
