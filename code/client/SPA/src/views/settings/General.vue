<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<template>

    <el-form>

        <el-form-item :label="$t('settings.template.general.theme')">

            <theme-switcher mode="dropdown" />

        </el-form-item>

        <el-form-item :label="$t('settings.template.general.language')">

            <lang-switcher type="select" />

        </el-form-item>

    </el-form>

</template>

<script lang='ts'>
/**
 * @file General.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/30 15:39
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import LangSwitcher from "@/components/LangSwitcher.vue";


export default defineComponent({
    data() {
        return {};
    },

    components: {
        ThemeSwitcher,
        LangSwitcher
    }
});
</script>

<style lang='sass' scoped>

</style>
