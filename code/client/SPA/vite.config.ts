// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

import { fileURLToPath, URL } from "node:url";

import { ConfigEnv, defineConfig, UserConfigExport } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv): UserConfigExport => ({
    oxc: {
        target: "es2020"
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: "modern-compiler"
            }
        }
    },
    plugins: [
        vue({
            script: {
                babelParserPlugins: ["decoratorAutoAccessors"]
            }
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        }),
        vueDevTools(),
        viteMockServe({
            mockPath: "./src/mock",
            enable: command === "serve",
            logger: true
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    assetsInclude: ["**/*.svg"],
    server: {
        host: "0.0.0.0",
        port: 7265,
        open: true
    }
}));
