<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file ThemeSwitcher.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 13:18
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import { Setting, Check, Sunny, Moon } from "@element-plus/icons-vue";
import { ThemeStore } from "@/stores/themeStore";
import { mapState } from "pinia";
import { ThemeConfigs } from "@/stores/themeStore";


export default defineComponent({
    data() {
        return {};
    },
    setup() {
        const themeStore = ThemeStore();

        return { themeStore, ThemeConfigs };
    },
    computed: {
        ...mapState(ThemeStore, {
            theme: state => state.theme
        }),
    },
    methods: {
        handleThemeToggle() {
            this.themeStore.toggleTheme();
        },

        handleThemeSelect(theme: string) {
            this.themeStore.setTheme(theme);
        }
    },
    components: {
        Setting, Check, Sunny, Moon
    }
});
</script>

<template>

    <div :class="{ 'theme-switcher': true, [`theme-${theme}`]: true }">

        <el-tooltip :content="themeStore.theme === 'light' ? $t('themeSwitcher.template.dark') : $t('themeSwitcher.template.light')">

            <el-button class="theme-toggle-btn" circle @click="handleThemeToggle">

                <template #icon>

                    <sunny v-if="theme === 'dark'" />

                    <moon v-else />

                </template>

            </el-button>

        </el-tooltip>

<!--        <el-dropdown @command="handleThemeSelect" trigger="click" class="theme-dropdown">-->

<!--            <el-button circle>-->

<!--                <template #icon>-->

<!--                    <setting />-->

<!--                </template>-->

<!--            </el-button>-->

<!--            <template #dropdown>-->

<!--                <el-dropdown-menu>-->

<!--                    <el-dropdown-item v-for="t in ThemeConfigs" :key="t.name" :command="t.name" :class="{ active: theme === t.name }">-->

<!--                        <div class="theme-option">-->

<!--                            <span class="color-dot" :style="{ backgroundColor: t.colors.primary }" />-->

<!--                            <span>{{ t.label }}</span>-->

<!--                            <el-icon v-if="theme === t.name" class="check-icon">-->

<!--                                <check />-->

<!--                            </el-icon>-->

<!--                        </div>-->

<!--                    </el-dropdown-item>-->

<!--                </el-dropdown-menu>-->

<!--            </template>-->

<!--        </el-dropdown>-->

    </div>

</template>

<style lang='sass'>
.theme

    &-switcher
        display: flex
        align-items: center
        gap: 10px

    &-toggle-btn
        font-size: 18px
        /* TODO: 取反色 */
        // background-color: var(--background-color)


    &-option
        display: flex
        align-items: center
        gap: 8px
        width: 120px

        .color-dot
            width: 12px
            height: 12px
            border-radius: 50%
            display: inline-block


        .check-icon
            margin-left: auto
            color: var(--el-color-primary)


    &-preview
        display: flex
        gap: 8px
        margin-left: 10px

        .preview-item
            width: 24px
            height: 24px
            border-radius: 4px
            cursor: pointer
            position: relative
            overflow: hidden
            border: 2px solid transparent
            transition: border-color 0.3s

            &.active
                border-color: var(--el-color-primary)


            &:hover
                transform: scale(1.1)


            .preview-color
                position: absolute
                bottom: 0
                left: 0
                right: 0
                height: 6px
</style>
