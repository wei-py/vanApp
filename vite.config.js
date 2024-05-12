import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VantResolver } from "@vant/auto-import-resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import viteCompression from 'vite-plugin-compression'

import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/orderh5',
  publicDir: "./public",
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
        {
          dayjs: [['default', 'dayjs']]
        },
        // {
        //   'xe-utils': [['*', 'xe']]
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
      resolvers: [VantResolver() ],
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
        target: "http://192.168.150.250:30600",
        rewrite: (path) => path.replace(/^\/sit/, ""),
        changeOrigin: true,
      },
    },
  },

   build: {
      target: 'es2020',
      // minify: 'terser',
      // rollup 配置
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          manualChunks(id) {
            const exList = ['@climblee', '@dcloudio']
            if (id.includes('node_modules') && !exList.some((i) => id.includes(i))) {
              // return 'vendor'
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        },
        //  告诉打包工具 在external配置的 都是外部依赖项  不需要打包
        // external: ['vue'],
        plugins: [
          // externalGlobals({
          //   vue: 'Vue'
          // }),
          viteCompression({
            verbose: true, // 是否在控制台中输出压缩结果
            disable: false,
            threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
            algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
            ext: '.gz',
            deleteOriginFile: false // 源文件压缩后是否删除
          })
        ]
      },
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      }
    }
});
