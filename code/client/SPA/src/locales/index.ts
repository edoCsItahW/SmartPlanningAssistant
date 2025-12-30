// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file index.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 16:02
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { createI18n } from "vue-i18n";
import { messages } from "@/locales/lang";
import { type LanguageType } from "@/locales/types";

import zhCN from "@/locales/lang/zh-CN";
import enUS from "@/locales/lang/en-US";

export const elLangMap: Record<LanguageType, unknown> = {
    "zh-CN": zhCN,
    "en-US": enUS,
    "ja-JP": {}
};

export const i18n = createI18n({
    legacy: false,
    locale: "en-US",
    fallbackLocale: "en-US",
    messages,
    globalInjection: true
    // missingWarn: true,
    // fallbackWarn: true
});

export default i18n;
