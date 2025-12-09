// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file en-US.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 15:49
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import type { LanguageOption } from "@/locales/types";


export default {
    lang: {
        switch: "Switch Language",
        zhCN: "Simplified Chinese",
        enUS: "English",
        jaJP: "Japanse",
        quickSwitch: "Quick Switch Language"
    },

    // src/views/auth/Auth.vue
    auth: {
        script: {
            carousels: {
                "Smart": "Smart",
                "Fast": "Fast",
                "Secure": "Secure",
                "Efficient": "Efficient"
            },
            rules: {
                username: {
                    message: "Please input your username"
                },
                password: {
                    message: "Please input your password"
                },
                confirmPassword: {
                    message: "Please confirm your password"
                }
            }
        },
        template: {
            login: "Login",
            register: "Register",
            reset: "Reset",
            forgotPassword: "Forget Password?",
            createAccount: "Create Account?",
            alreadyHaveAccount: "Already have account?",
            agreementText: "By registering and logging in, you acknowledge that you have read and agree to our {agreementLink} and {privacyLink}.",
            userAgreement: "User Agreement",
            privacyPolicy: "Privacy Policy"
        }
    },

    // src/components/ThemeSwitcher.vue
    themeSwitcher: {
        template: {
            light: "Light Mode",
            dark: "Dark Mode"
        }
    },

    // src/components/LangSwitcher.vue
    langSwitcher: {
        template: {
            switch: "Switch Language"
        }
    },
};

export const enUSOption: LanguageOption = {
    label: "English",
    value: "en-US"
};
