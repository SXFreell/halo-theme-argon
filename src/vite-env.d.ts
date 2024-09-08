/// <reference types="vite/client" />

import type { Alpine } from "alpinejs";
import _ from "lodash";

export {};

declare global {
  interface Window {
    Alpine: Alpine;
    _: _;
  }
}
