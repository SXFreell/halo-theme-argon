import "./styles/tailwind.scss";
import "./styles/main.scss";
import "normalize.css/normalize.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

export function count(x: number, y: number) {
  return x + y;
}
