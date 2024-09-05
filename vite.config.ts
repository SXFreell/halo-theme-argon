import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { globSync } from "glob";
import path from "path";

const entryFiles = globSync(["src/main.ts", "src/libs/**/*.*", "src/page/**/*.*"]).map((file) => [
  path.relative("src", file.slice(0, file.length - path.extname(file).length)),
  fileURLToPath(new URL(file, import.meta.url)),
]);

console.log(Object.fromEntries(entryFiles));

export default defineConfig({
  plugins: [],
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(entryFiles),
      output: {
        format: "es",
        entryFileNames: "[name].min.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/[name].min.[ext]";
          }
          return "[name].min.[ext]";
        },
      },
    },
  },
});
