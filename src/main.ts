import "./styles/tailwind.scss";
import "./styles/main.scss";
import "normalize.css/normalize.css";
import Alpine from "alpinejs";
import _ from "lodash";

window.Alpine = Alpine;
window._ = _;

Alpine.start();

export function count(x: number, y: number) {
  return x + y;
}
