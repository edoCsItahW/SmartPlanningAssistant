// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file zh-CN.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 15:43
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import type { LanguageOption } from "@/locales/types";


export default {
    // 语言选择文案
    lang: {
        switch: "切换语言",
        zhCN: "简体中文",
        enUS: "英语",
        jaJP: "日本语",
        quickSwitch: "快速切换语言"
    },

    // src/views/auth/Auth.vue
    auth: {
        script: {
            carousels: {
                "Smart": "智能",
                "Fast": "快速",
                "Secure": "安全",
                "Efficient": "高效"
            },
            rules: {
                username: {
                    message: "请输入用户名"
                },
                password: {
                    message: "请输入密码"
                },
                confirmPassword: {
                    message: "请确认密码"
                }
            }
        },
        template: {
            login: "登录",
            register: "注册",
            reset: "重置",
            forgotPassword: "忘记密码？",
            createAccount: "创建账号?",
            alreadyHaveAccount: "已有账号？",
            agreementText: "注册和登录即表示您已阅读并同意我们的{agreementLink}和{privacyLink}。",
            userAgreement: "用户协议",
            privacyPolicy: "隐私政策"
        }
    },

    // src/components/ThemeSwitcher.vue
    themeSwitcher: {
        template: {
            light: "浅色模式",
            dark: "深色模式"
        }
    },

    // src/components/LangSwitcher.vue
    langSwitcher: {
        template: {
            switch: "切换语言"
        }
    },

    // src/views/home/Home.vue
    home: {
        script: {
            links: {
                home: "首页",
                taskList: "任务列表",
                planView: "计划视图",
                statistics: "统计",
                settings: "设置"
            }
        }
    }
};


export const zhCNOption: LanguageOption = {
    label: "简体中文",
    value: "zh-CN"
};
