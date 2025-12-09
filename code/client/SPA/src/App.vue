<!--
  - Copyright (c) 2024. All rights reserved.
  - This source code is licensed under the CC BY-NC-SA
  - (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
  - This software is protected by copyright law. Reproduction, distribution, or use for commercial
  - purposes is prohibited without the author's permission. If you have any questions or require
  - permission, please contact the author: 2207150234@st.sziit.edu.cn
  -->
<script lang="ts">
/**
 * @file App.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/02 23:11:02
 * @description
 * */
import { defineComponent } from "vue";
import router from "@/router/router";

onload = () => {
    router.push("/auth");
};

export default defineComponent({
    name: "App"
});
</script>

<template>

    <router-view></router-view>

</template>

<style lang="sass">

html, body, #app
    margin: 0
    padding: 0
    height: 100%

.description
    font-size: 14px
    color: #333

</style>
