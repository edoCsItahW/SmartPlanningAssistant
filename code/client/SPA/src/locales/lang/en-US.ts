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
                Smart: "Smart",
                Fast: "Fast",
                Secure: "Secure",
                Efficient: "Efficient"
            },
            rules: {
                username: {
                    message: "Please input your username",
                    atLeast: "Username must be at least 3 characters",
                    atMost: "Username must be at most 20 characters",
                    contains: "Username must contain only letters, numbers, and underscores"
                },
                password: {
                    message: "Please input your password",
                    atLeast: "Password must be at least 6 characters",
                    contains: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                },
                confirmPassword: {
                    message: "Please confirm your password",
                    notMatch: "Passwords do not match"
                }
            },
            loginFailed: "Username or password is incorrect, please check and try again!",
            registerFailed: "Failed to register, please check and try again!"
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

    // src/stores/themeStore.ts
    themeStore: {
        script: {
            light: "Light Mode",
            dark: "Dark Mode"
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

    // src/views/home/Home.vue
    home: {
        template: {
            title: "Smart Planning Assistant",
            welcome: "Welcome to Smart Planning Assistant, {username}!"
        }
    },

    // src/views/GenHeader.vue
    genHeader: {
        script: {
            links: {
                home: "Home",
                taskList: "Task List",
                planView: "Plan View",
                statistics: "Statistics",
                settings: "Settings"
            }
        }
    },

    // src/views/taskList/TaskList.vue
    taskList: {
        template: {
            empty: "No task found."
        }
    },

    // src/views/planView/PlanView.vue
    planView: {
        script: {
            options: {
                monthly: "Monthly View",
                weekly: "Weekly View",
                daily: "Daily View"
            },
            actions: {
                add: "Add Task",
                refresh: "Refresh",
                export: "Export"
            }
        },
        template: {
            drawer: {
                title: "Plan Details"
            }
        }
    },

    // src/views/planView/MonthView.vue
    monthView: {
        template: {
            today: "Today",
        }
    },

    // src/views/planView/WeekView.vue
    weekView: {
        script: {
            weekdays: {
                mon: "Monday",
                tue: "Tuesday",
                wed: "Wednesday",
                thu: "Thursday",
                fri: "Friday",
                sat: "Saturday",
                sun: "Sunday"
            }
        },
        template: {}
    },

    // src/views/Statistics.vue
    statistics: {
        template: {
            bottom: {
                daily: "Daily Statistics",
                time: "Time Statistics",
                total: "Total Statistics"
            }
        }
    },

    // src/views/Settings.vue
    settings: {
        template: {
            general: {
                theme: "Theme",
                language: "Language",
            }
        },
        script: {
            menu: {
                general: "General",
                account: "Account",
                accounts: {
                    profile: "Profile",
                    logout: "Logout",
                    changePassword: "Change Password",
                    deleteAccount: "Delete Account"
                },
                language: "Language",
                theme: "Theme",
                about: "About",
            }
        }
    }
};

export const enUSOption: LanguageOption = {
    label: "English",
    value: "en-US"
};
