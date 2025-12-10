<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file StdHeader.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/10 16:17
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import EmptyHeader from "@/views/header/EmptyHeader.vue";


export default defineComponent({
    data() {
        return {};
    },
    props: {
        leftFlex: {
            type: Number,
            default: 1
        },
        centerFlex: {
            type: Number,
            default: 1
        },
        rightFlex: {
            type: Number,
            default: 1
        },
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
    components: { EmptyHeader }
});
</script>

<template>

    <empty-header>

        <div class="header-left" v-if="leftFlag" :style="{ flex: leftFlex }">

            <slot name="left"></slot>

        </div>

        <div class="header-center" v-if="centerFlag" :style="{ flex: centerFlex }">

            <slot name="center"></slot>

        </div>

        <div class="header-right" v-if="rightFlag" :style="{ flex: rightFlex }">

            <slot name="right" v-if="rightFlag" :style="{ flex: rightFlex }"></slot>

        </div>

    </empty-header>

</template>

<style lang='sass'>
.header
    display: flex
    align-items: center
</style>
