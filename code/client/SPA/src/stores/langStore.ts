// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file langStore.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 15:45
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { defineStore } from "pinia";
import i18n, { elLangMap } from "@/locales";
import { type LanguageType } from "@/locales/types";


export const LangStore = defineStore("language", {
    state() {
        return {
            language: "en-US" as LanguageType,
            defaultLanguage: "en-US" as LanguageType,
        }
    },
    getters: {
        getRencentLanguage() {
            return localStorage.getItem("language") as LanguageType || "en-US";
        }
    },
    actions: {
        setRencentLanguage(lang: LanguageType) {
            localStorage.setItem("language", lang);
        },

        setLanguage(lang: LanguageType) {
            if (this.language !== lang && lang !== this.defaultLanguage)
                this.setRencentLanguage(lang);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            i18n.global.locale.value = lang;  // 确为ref，但value没有被识别

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).$elLocale = elLangMap[lang];

            this.language = lang;
        },

        toggleLanguage() {
            this.setLanguage(this.language === this.defaultLanguage
                ? this.getRencentLanguage
                 : this.defaultLanguage);
        }
    }
});

