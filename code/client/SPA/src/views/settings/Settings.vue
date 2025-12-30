<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file Settings.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 21:32
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import type { MenuItem } from "@/types";
import { Tools, UserFilled, Connection } from "@element-plus/icons-vue";
import GenHeader from "@/views/GenHeader.vue";
import RecursiveMenu from "@/components/RecursiveMenu.vue";
import General from "@/views/settings/General.vue";
import AboutAs from "@/views/settings/AboutAs.vue";


export default defineComponent({
    components: { GenHeader, RecursiveMenu, AboutAs },
    data() {
        return {
            activeIdx: "1",
            collapse: false
        };
    },
    computed: {
        menuList() {
            return [
                {
                    content: this.$t("settings.script.menu.general"),
                    icon: Tools
                },
                {
                    title: this.$t("settings.script.menu.account"),
                    icon: UserFilled,
                    subMenu: [
                        {
                            content: this.$t("settings.script.menu.accounts.profile")
                        },
                        {
                            content: this.$t("settings.script.menu.accounts.logout")
                        },
                        {
                            content: this.$t("settings.script.menu.accounts.changePassword")
                        },
                        {
                            content: this.$t("settings.script.menu.accounts.deleteAccount")
                        }
                    ]
                },
                {
                    content: this.$t("settings.script.menu.about"),
                    icon: Connection
                }
            ] as MenuItem[];
        }
    },

    methods: {
        handleSelect(index: string) {
            this.activeIdx = index;
        },

        mainView(index: string) {
            switch (index) {
                case "0":
                    return General;
                case "2":
                    return AboutAs;
            }
        }
    }
});
</script>

<template>

    <el-container class="settings full" direction="vertical">

        <gen-header />

        <el-container class="s-container">

            <recursive-menu v-model="collapse" :activeIndex="activeIdx" :menuItems="menuList" @select="handleSelect" />

            <el-main>

                <component :is="mainView(activeIdx)" />

            </el-main>

        </el-container>

    </el-container>

</template>

<style lang='sass'>

//.settings


</style>
