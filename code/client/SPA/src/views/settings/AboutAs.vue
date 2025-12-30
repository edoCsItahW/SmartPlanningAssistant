<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<template>

    <el-image class="about-img" src="/src/assets/imgs/backside.png" lazy>

        <template #error>

        </template>

    </el-image>

    <div class="about-content">

        <el-image class="avatar-img" src="/src/assets/imgs/about.jpg" fit="fill"></el-image>

        <h2>edocsitahw</h2>

    </div>

</template>

<script lang='ts'>
/**
 * @file AboutAs.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/30 17:07
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

<style lang='sass' scoped>
@use "@/style/global" as *

.about

    &-img
        width: 100%

    &-content
        display: flex

        @include media-query(phone, tablet)
            flex-direction: column

        @include media-query(tablet)
            flex-direction: row

        justify-content: center
        align-items: center

.avatar-img
    max-width: 20%


</style>
