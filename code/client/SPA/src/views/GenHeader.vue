<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file Header.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 14:45
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";
import StdHeader from "@/views/header/StdHeader.vue";
import { Menu } from "@element-plus/icons-vue";


export default defineComponent({
    data() {
        return {
            activeIdx: this.$route.path,
            isMobild: false,
            showMobileMenu: false,
            dropdownVisible: false
        };
    },

    setup() {
        return { Menu }
    },

    props: {
        leftFlag: {
            type: Boolean,
            default: true
        },
        centerFlag: {
            type: Boolean,
            default: true
        },
        rightFlag: {
            type: Boolean,
            default: true
        },
        leftFlex: {
            type: Number,
            default: 3
        },
        centerFlex: {
            type: Number,
            default: 5
        },
        rightFlex: {
            type: Number,
            default: 2
        }
    },

    computed: {
        links() {
            return [
                {
                    label: this.$t("genHeader.script.links.home"),
                    link: "/home",
                    icon: "House"
                },
                {
                    label: this.$t("genHeader.script.links.taskList"),
                    link: "/taskList",
                    icon: "List"
                },
                {
                    label: this.$t("genHeader.script.links.planView"),
                    link: "/planView",
                    icon: "Calendar"
                },
                {
                    label: this.$t("genHeader.script.links.statistics"),
                    link: "/statistics",
                    icon: "PieChart"
                },
                {
                    label: this.$t("genHeader.script.links.settings"),
                    link: "/settings",
                    icon: "Setting"
                }
            ] as { label: string, link: string, icon: string }[];
        },
        currentLinkLabel() {
            return this.links.find(l => l.link === this.activeIdx)?.label || this.$t("genHeader.script.links.home")
        }
    },

    methods: {
        handleChange(link: string) {
            this.$router.push(link);
        },

        checkScreenSize() {
            this.isMobild = window.innerWidth <= 768;

            if (!this.isMobild)
                this.showMobileMenu = false;
        }
    },

    mounted() {
        this.checkScreenSize();
    },

    beforeMount() {
        window.addEventListener("resize", this.checkScreenSize);
    },

    components: {
        ThemeSwitcher,
        LangSwitcher,
        StdHeader
    }
});
</script>

<template>

    <std-header :left-flag="leftFlag" :center-flag="centerFlag" :right-flag="rightFlag"
                :left-flex="leftFlex" :center-flex="centerFlex" :right-flex="rightFlex">

        <template #left>

            <el-space class="header-left-space" :size="20">

                <el-image class="header-left-logo" src="/src/assets/imgs/SPA_Brains.png" />

                <h2 class="header-left-title">{{ $t("home.template.title") }}</h2>

            </el-space>

        </template>

        <template #center>

            <el-segmented v-if="!isMobild" class="header-center-desktop" id="header-segmented" v-model="activeIdx" :options="links" :props="{ label: 'label', value: 'link', disabled: 'disabled' }" @change="handleChange" />

            <el-dropdown v-else v-model="dropdownVisible" class="header-center-mobile" trigger="click" placement="bottom" popper-class="mobile-menu-popper" @visible-change="visible => dropdownVisible = visible">

                <div class="mobile-menu-trigger">

                    <el-button :icon="Menu" circle class="mobile-menu-button" />

                    <span class="current-label">{{ currentLinkLabel }}</span>

                </div>

                <template #dropdown>

                    <el-dropdown-menu class="mobile-dropdown-menu">

                        <el-dropdown-item v-for="link in links" :key="link.link" :class="{ 'is-active': activeIdx === link.link }" @click="handleChange(link.link)">

                            <el-icon v-if="link.icon">

                                <component :is="link.icon" />

                            </el-icon>

                            <span>{{ link.label }}</span>

                        </el-dropdown-item>

                    </el-dropdown-menu>

                </template>

            </el-dropdown>

        </template>

        <template #right>

            <theme-switcher />

            <lang-switcher type="toggle" />

        </template>

    </std-header>

</template>

<style lang='sass'>
@use "@/style/global"

.header
    &-left
        &-title
            margin: 0

            @include global.media-query($from: phone, $until: tablet)
                font-size: 15px
                font-weight: 500
                margin-bottom: 0
                white-space: nowrap

        &-space
            display: flex
            align-items: center
            flex-direction: row

        &-logo
            max-width: 50px
            max-height: 50px

    &-center
        display: flex
        justify-content: center

        &-desktop
            padding: 0 !important

        &-mobile
            display: flex
            justify-content: center
            align-items: center

    &-right
        display: flex
        align-items: center
        justify-content: flex-end

#header-segmented
    --el-segmented-item-selected-color: var(--text-color)
    --el-segmented-item-selected-bg-color: var(--primary-color)
    --el-border-radius-base: 16px

.mobile-menu-trigger
    display: flex
    align-items: center
    cursor: pointer
    padding: 8px
    border-radius: 8px
    transition: background-color 0.3s

    .current-label
        margin-left: 8px
        font-size: 14px
        font-weight: 500
        color: var(--el-text-color-primary)
        max-width: 100px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

        @include global.media-query(phone)
            display: none

.mobile-menu-button
    --el-button-size: 40px


.mobile-menu-popper
    width: 100% !important
    max-width: 100vw !important
    margin-top: 8px !important
    border-radius: 12px !important
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important
    border: 1px solid var(--el-border-color-light) !important

    .el-dropdown-menu
        border-radius: 12px
        padding: 8px 0

    .el-dropdown-menu__item
        display: flex
        align-items: center
        padding: 12px 20px
        font-size: 16px
        color: var(--el-text-color-primary)
        transition: all 0.3s

        &:hover
            background-color: var(--el-fill-color-light)
            color: var(--el-color-primary)

        &.is-active
            color: var(--el-color-primary)
            background-color: var(--el-color-primary-light-9)
            font-weight: 500

        .el-icon
            margin-right: 12px
            font-size: 18px


@include global.media-query(phone, tablet)
    .header-center-desktop
        display: none !important

    .header-center-mobile
        display: flex !important

@include global.media-query(tablet)

    .header-center-mobile
        display: none !important

</style>
