<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file WeekView.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 16:30
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent, ref } from "vue";
import { taskApi } from "@/api/task";
import type { Optional, Task } from "@/types";


export default defineComponent({
    data() {
        return {
            helightCol: undefined as Optional<number>,
            timeList: Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`),
            taskList: [] as Task[],
            weekdaysSlots: Array.from({ length: 7 }, () => ({}))
        };
    },

    setup() {
        const scheduleRef = ref<HTMLDivElement>();

        return { scheduleRef };
    },

    props: {
        hourHeight: {
            type: Number,
            default: 60
        },
        timeAxisWidth: {
            type: Number,
            default: 80
        }
    },

    computed: {
        weekdays() {
            return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map(weekday => this.$t(`weekView.script.weekdays.${weekday}`));
        },

        scheduledWidth() {
            return this.scheduleRef ? this.scheduleRef.clientWidth : 1200;
        },

        columnWidth() {
            return (this.scheduledWidth - this.timeAxisWidth) / 7;
        }
    },

    methods: {
        async fetchTasks() {
            this.taskList = (await taskApi.getTask()).map(task => ({ ...task, scheduledStart: new Date(task.scheduledStart), scheduledEnd: new Date(task.scheduledEnd) }));
        },

        getWeekdayIndex(date: Date) {
            const day = date.getDay();

            return day ? day - 1 : 6;
        },

        taskTop(task: Task): number {
            const hour = task.scheduledStart.getHours();
            const minute = task.scheduledStart.getMinutes();

            return (hour + minute / 60) * this.hourHeight;
        },

        taskLeft(task: Task): number {
            return this.getWeekdayIndex(task.scheduledStart) * this.columnWidth;
        },

        taskWidth(task: Task): number {
            const duration = task.scheduledEnd.getTime() - task.scheduledStart.getTime();

            // 除以24算出跨天
            const days = Math.ceil(duration / (1000 * 60 * 60 * 24));

            return days * this.columnWidth - 2;  // 减去2px避免与分隔符重叠
        },

        taskHeight(task: Task): number {
            const duration = task.scheduledEnd.getTime() - task.scheduledStart.getTime();

            return duration * this.hourHeight;
        },

        handleTaskClick(task: Task) {
            // TODO: 跳转到任务详情页面
        },

        hlightColumn(idx: number) {
            this.helightCol = idx;
        },

        unhlightColumn() {
            this.helightCol = undefined;
        }
    },

    created() {
        this.fetchTasks();
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.scheduledWidth;
        });
    }
});
</script>

<template>

    <div class="week-view full" ref="scheduleRef">

        <table class="wv-table full">

            <thead class="wv-header">

                <tr>

                    <th></th>
                    <th
                        class="wv-header-item"
                        :class="{ 'highlight-column': helightCol === index }"
                        v-for="(weekday, index) in weekdays"
                        :key="index"
                        :tabindex="index"
                        @focusin="hlightColumn(index)"
                        @focusout="unhlightColumn()">
                        {{ weekday }}
                    </th>

                </tr>

            </thead>

            <tbody class="wv-content">

                <tr v-for="(time, index) in timeList" :key="index">

                    <td class="wv-content-time-axios">{{ time }}</td>

                    <template v-if="index === 0">

                        <td
                            v-for="(weekday, index) in weekdays"
                            :class="{ 'highlight-column': helightCol === index }"
                            :key="index"
                            :tabindex="index"
                            rowspan="23"
                            @focusin="hlightColumn(index)"
                            @focusout="unhlightColumn()"
                        ></td>

                    </template>

                </tr>

            </tbody>

        </table>

    </div>

</template>

<style lang='sass'>

.week-view
    display: flex
    flex-direction: row
    overflow: hidden

.wv
    &-table
        background-color: var(--highlight-color)
        border-collapse: collapse
        cursor: pointer

        th, td
            padding: 12px 16px
            transition: all 0.3s ease
            position: relative

            &:not(:last-child)
                border-right: 1px solid var(--border-color)

    &-header
        border-bottom: 2px solid var(--border-color)

        th
            background-color: var(--highlight-color)
            padding: 12px 16px
            font-weight: 600
            user-select: none

            &:hover
                background-color: var(--border-color)

    &-body
        overflow-x: auto
        overflow-y: hidden

.highlight-column
    background-color: rgba(24, 144, 255, 0.1) !important
    color: #1890ff !important
    font-weight: 600 !important

</style>
