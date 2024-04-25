import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VantResolver } from "@vant/auto-import-resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";


import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: "./src/assets",
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        // 'uni-app',
        "pinia",
        "@vueuse/core",
        {
          lodash: [["default", "lo"]],
        },
        {
          vant: [["*", "van"]],
        },
        // {
        //   'xe-utils': [['*', 'xe']]
        // },
        // {
        //   dayjs: [['default', 'dayjs']]
        // },

        // {
        //   rxjs: [['*', 'rx']]
        // },
        // {
        //   'wot-design-uni': [['*', 'wot']]
        // }
      ],
      dirs: ["./src/utils/**/*", "./src/config/**/*", "./src/store/**/*", "./src/router/**/*"],
      dts: "./src/auto-imports.d.ts",
      resolvers: [VantResolver()],
      eslintrc: {
        enabled: true,
      },
    }),

    Components({
      resolvers: [VantResolver()],
    }),
    mkcert(),
  ],

   resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 2222, // 端口号
    https: true,
    proxy: {
      "/amap": {
        target: "https://restapi.amap.com/v3/",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/amap/, ""),
      },
      "/devSto": {
        target: "http://192.168.30.15:30610/sto",
        // target: 'http://192.168.150.250:30600',
        rewrite: (path) => path.replace(/^\/devSto/, ""),
        changeOrigin: true,
      },
      "/dev": {
        target: "http://192.168.30.15:30600",
        // target: 'http://192.168.150.250:30600',
        rewrite: (path) => path.replace(/^\/dev/, ""),
        changeOrigin: true,
      },
      "/mjSto": {
        target: "http://192.168.30.11:30610/sto",
        rewrite: (path) => path.replace(/^\/mjSto/, ""),
        changeOrigin: true,
      },
      "/prodSto": {
        target: "http://workorder.btosolarman.com:30610/sto",
        rewrite: (path) => path.replace(/^\/prodSto/, ""),
        changeOrigin: true,
      },
      "/mj": {
        target: "http://192.168.30.11:30600",
        rewrite: (path) => path.replace(/^\/mj/, ""),
        changeOrigin: true,
      },
      "/uat": {
        target: "https://7k20s48526.zicp.fun",
        rewrite: (path) => path.replace(/^\/uat/, ""),
        changeOrigin: true,
      },
      "/prod": {
        target: "http://workorder.btosolarman.com:30600",
        rewrite: (path) => path.replace(/^\/prod/, ""),
        changeOrigin: true,
      },
      "/sit": {
        target: "http://192.168.150.250:30600/order",
        rewrite: (path) => path.replace(/^\/sit/, ""),
        changeOrigin: true,
      },
    },
  },

  config: {
    output: {
      // 最小化拆分包
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return id.toString().split("node_modules/")[1].split("/")[0].toString();
        }
      },
    },
  },
  esbuild: {
    pure: [], // 删除 console.log
    drop: [], // 删除 debugger
  },
});
