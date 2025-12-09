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
import zhCn from "element-plus/es/locale/lang/zh-cn";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";


export default defineComponent({
    data() {
        return {};
    },
    setup() {
        return { zhCn };
    },
    components: {
        ThemeSwitcher,
        LangSwitcher
    }
});
</script>

<template>

    <el-config-provider :locale="zhCn">

        <el-container class="full genheader">

            <el-header class="genheader-header">

                <theme-switcher/>

                <lang-switcher/>

            </el-header>

            <slot></slot>

        </el-container>

    </el-config-provider>

</template>

<style lang='sass'>
.genheader
    &-header
        display: flex
        justify-content: center
        align-items: center
        flex-direction: row
</style>
