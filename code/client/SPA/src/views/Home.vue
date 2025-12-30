<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file Home.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 22:20
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import GenHeader from "@/views/GenHeader.vue";


export default defineComponent({
    data() {
        return {
            // TODO: 临时数据
            todoList: [
                {
                    id: 1,
                    title: "任务1",
                    description: "任务1描述",
                    status: "进行中"
                },
                {
                    id: 2,
                    title: "任务2",
                    description: "任务2描述",
                    status: "待办"
                }
            ],
            secheduleList: [
                {
                    id: 1,
                    title: "日程1",
                    description: "日程1描述",
                    time: "2025/12/10 10:00"
                },
                {
                    id: 2,
                    title: "日程2",
                    description: "日程2描述",
                    time: "2025/12/11 10:00"
                }
            ]
        };
    },
    methods: {
        // TODO: 临时方法
        isAFoot(sechedule: any) {
            return sechedule.id === 1;
        }
    },
    components: {
        GenHeader
    }
});
</script>

<template>

    <div class="home full">

        <gen-header />

        <el-main class="home-main">

            <el-container class="home-welcome full">

                <div class="home-welcome-left">

                    <i18n-t keypath="home.template.welcome" tag="h2">

                        <template #username>

                            XXX

                        </template>

                    </i18n-t>

                </div>

                <div class="home-welcome-right">

                    <div class="home-todo">

                        <el-card class="home-todo-card" v-for="todo in todoList" :key="todo.id">

                            <template #header>

                                <span>{{ todo.title }}</span>

                            </template>

                            <div class="home-todo-card-content">

                                <span>{{ todo.description }}</span>

                                <el-button>{{ todo.status }}</el-button>

                            </div>

                        </el-card>

                    </div>

                    <div class="home-sechedule">

                        <el-timeline>

                            <el-timeline-item v-for="sechedule in secheduleList" :center="isAFoot(sechedule)" :key="sechedule.id" :timestamp="sechedule.time" placement="top">

                                <el-card>

                                    <span style="display: block;"><b>{{ sechedule.title }}</b></span>

                                    <span>{{ sechedule.description }}</span>

                                </el-card>

                            </el-timeline-item>

                        </el-timeline>

                    </div>

                </div>

            </el-container>

            <div v-for="i in 2" :class="`circle-${i}`" :key="i" />

        </el-main>

    </div>

</template>

<style lang='sass'>
@use "@/style/variables"
@use "@/style/global" as *

.home
    display: flex
    flex-direction: column

    &-main
        display: flex
        flex-direction: row
        background: linear-gradient(to right bottom, var(--home-bg-left), var(--home-bg-right))
        z-index: -2

    &-welcome
        display: flex

        @include media-query($from: tablet)
            flex-direction: row !important

        @include media-query($from: phone, $until: tablet)
            flex-direction: column !important

        &-left
            flex: 1
            display: flex
            align-items: center

        &-right
            flex: 1
            position: relative
            float: right
            right: 0

            @include media-query($from: tablet)
                max-width: 30%

            @include media-query($from: phone, $until: tablet)
                width: 100%

            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center


    &-todo-card

        &-content
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center


@for $i from 1 through 2
    .circle-#{$i}
        @include perset-circle(var(--home-bg-left), var(--home-bg-right))

</style>
