import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/types/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(
          new URL("./src/shared/assets", import.meta.url)
        ),
      },
      {
        find: "@cmp",
        replacement: fileURLToPath(
          new URL("./src/shared/cmp", import.meta.url)
        ),
      },
      {
        find: "@stores",
        replacement: fileURLToPath(
          new URL("./src/shared/stores", import.meta.url)
        ),
      },
      {
        find: "@use",
        replacement: fileURLToPath(
          new URL("./src/shared/use", import.meta.url)
        ),
      },
    ],
  },
});