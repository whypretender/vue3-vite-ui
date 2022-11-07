import { defineConfig, UserConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import Unocss from "./config/unocss";
import path from "path";
import dts from "vite-plugin-dts"; ///向打包后的库里加入声明文件只需要引入vite-plugin-dts

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
};
export const config = {
  plugins: [
    vue(),
    // 添加jsx插件
    vueJsx({}),
    // 添加unocss插件
    Unocss(),
    dts({
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "./tsconfig.json"
    })
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: "terser", // boolean | 'terser' | 'esbuild' | false
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    // target: "es2015",
    lib: {
      entry: "./src/entry.ts",
      name: "vue3ViteUi",
      fileName: "vue3-vite-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife", "cjs"]
    },
    outDir: "./dist"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components")
    }
  }
};
export default defineConfig(config as UserConfig);
