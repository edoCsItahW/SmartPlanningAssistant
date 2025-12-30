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
    // src/components/LangSwitcher.vue
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
                Smart: "智能",
                Fast: "快速",
                Secure: "安全",
                Efficient: "高效"
            },
            rules: {
                username: {
                    message: "请输入用户名",
                    atLeast: "用户名不得少于3个字符",
                    atMost: "用户名不得多于20个字符",
                    contains: "用户名只能包含字母、数字、下划线"
                },
                password: {
                    message: "请输入密码",
                    atLeast: "密码不得少于6个字符",
                    contains: "密码至少包含1个大写字母、1个小写字母、1个数字"
                },
                confirmPassword: {
                    message: "请确认密码",
                    notMatch: "两次输入的密码不一致"
                }
            },
            loginFailed: "用户名或密码错误，请检查并重试！",
            registerFailed: "注册失败，请检查并重试！"
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

    // src/stores/themeStore.ts
    themeStore: {
        script: {
            light: "明亮模式",
            dark: "暗黑模式"
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
        template: {
            title: "智能计划助手",
            welcome: "欢迎使用智能计划助手，{username}！"
        }
    },

    // src/views/GenHeader.vue
    genHeader: {
        script: {
            links: {
                home: "首页",
                taskList: "任务列表",
                planView: "计划视图",
                statistics: "统计",
                settings: "设置"
            }
        }
    },

    // src/views/TaskList.vue
    taskList: {
        template: {
            empty: "暂无任务"
        }
    },

    // src/views/planView/PlanView.vue
    planView: {
        script: {
            options: {
                monthly: "月视图",
                weekly: "周视图",
                daily: "日视图"
            },
            actions: {
                add: "添加任务",
                refresh: "刷新计划",
                export: "导出"
            }
        },
        template: {
            drawer: {
                title: "计划详情"
            }
        }
    },

    // src/views/planView/MonthView.vue
    monthView: {
        template: {
            today: "今天",
        }
    },

    // src/views/planView/WeekView.vue
    weekView: {
        script: {
            weekdays: {
                mon: "星期一",
                tue: "星期二",
                wed: "星期三",
                thu: "星期四",
                fri: "星期五",
                sat: "星期六",
                sun: "星期日"
            }
        },
        template: {
            header: ""
        }
    },

    // src/views/Statistics.vue
    statistics: {
        template: {
            bottom: {
                daily: "日统计",
                time: "时间统计",
                total: "总计"
            }
        }
    },

    // src/views/Settings.vue
    settings: {
        template: {
            general: {
                theme: "主题",
                language: "语言"
            }
        },
        script: {
            menu: {
                general: "常规",
                account: "账号",
                accounts: {
                    profile: "个人资料",
                    logout: "登出",
                    changePassword: "修改密码",
                    deleteAccount: "删除账号"
                },
                language: "语言",
                theme: "主题",
                about: "关于"
            }
        }
    },

};

export const zhCNOption: LanguageOption = {
    label: "简体中文",
    value: "zh-CN"
};
