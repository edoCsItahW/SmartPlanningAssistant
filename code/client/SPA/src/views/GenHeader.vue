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


export default defineComponent({
    data() {
        return {
            activeIdx: 0
        };
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
        }
    },
    computed: {
        links() {
            return [
                [this.$t("home.script.links.home"), "/"],
                [this.$t("home.script.links.taskList"), "/taskList"],
                [this.$t("home.script.links.planView"), "/planView"],
                [this.$t("home.script.links.statistics"), "/statistics"],
                [this.$t("home.script.links.settings"), "/settings"]
            ];
        }
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
                :left-flex="3" :center-flex="5" :right-flex="2">

        <template #left>

            <el-image class="header-left-logo" src="/src/assets/imgs/SPA_Brains.png" />

        </template>

        <template #center>

<!--            <el-tabs default-value="/" :model-value="activeUrl">-->

<!--                <el-tab-pane v-for="([label, link], index) in links" :key="index" :label="label" :name="link">-->

<!--                    <router-view :ref="link" />-->

<!--                </el-tab-pane>-->

<!--            </el-tabs>-->

            <el-segmented v-model="activeIdx" :options="links.map(t => t[0])" />

        </template>

        <template #right>

            <theme-switcher />

            <lang-switcher />

        </template>

    </std-header>

</template>

<style lang='sass'>
.header
    &-left
        &-logo
            max-width: 50px
            max-height: 50px

    &-right
        display: flex
        align-items: center
        justify-content: flex-end

</style>
