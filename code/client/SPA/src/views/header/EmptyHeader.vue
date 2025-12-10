<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file EmptyHeader.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/10 16:13
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {};
    }
});
</script>

<template>

    <el-header class="header">

        <slot></slot>

    </el-header>

</template>

<style lang='sass'>

</style>
