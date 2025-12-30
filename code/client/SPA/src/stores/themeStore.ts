// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file themeStore.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 12:36
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { defineStore } from "pinia";
import type { ThemeType, ThemeConfig } from "@/types/theme";
import { type Nullable } from "@/types";

export const ThemeConfigs: ThemeConfig[] = [
    {
        name: "light",
        label: "明亮主题",
        i18nLabelKey: "themeStore.script.light",
        colors: {
            primary: "#409EFF",
            background: "#ffffff",
            text: "#303133"
        }
    },
    {
        name: "dark",
        label: "暗黑主题",
        i18nLabelKey: "themeStore.script.dark",
        colors: {
            primary: "#409EFF",
            background: "#141414",
            text: "#e5eaf3"
        }
    }
];

export const ThemeStore = defineStore("theme", {
    state() {
        return {
            theme: "light" as ThemeType
        };
    },

    getters: {
        currentConfig(state) {
            return ThemeConfigs.find(cfg => cfg.name === state.theme) || ThemeConfigs[0];
        }
    },

    actions: {
        setTheme(theme: ThemeType) {
            this.theme = theme;

            this.applyTheme(theme);

            localStorage.setItem("theme", theme);
        },

        toggleTheme() {
            this.setTheme(this.theme === "light" ? "dark" : "light");
        },

        initTheme() {
            const savedTheme = localStorage.getItem("theme") as Nullable<ThemeType>;

            if (savedTheme) this.setTheme(savedTheme);
            else if (window.matchMedia("(prefers-color-scheme: dark)").matches) this.setTheme("dark");
        },

        applyTheme(theme: ThemeType) {
            document.documentElement.setAttribute("data-theme", theme);
            document.documentElement.className = `theme-${theme}`;

            const htmlElement = document.documentElement;

            if (theme === "dark") htmlElement.classList.add("dark");
            else htmlElement.classList.remove("dark");
        }
    }

});
