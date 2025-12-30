<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file MonthView.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 16:30
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import { getDayNumber, formatDate, isToday } from "@/utils/date";
import { Task } from "@/types";
import { mapState } from "pinia";
import { TaskStore } from "@/stores/taskStore";


export default defineComponent({
    data() {
        return {
            tasks: [] as Task[],
        };
    },

    setup() {
        const taskStore = TaskStore();

        return { getDayNumber, formatDate, isToday, taskStore };
    },

    props: {
        currentDate: {
            type: Date,
            default: new Date()
        }
    },

    emits: ['task-click', 'date-click', 'update:currentDate'],

    computed: {
        innerCurrentDate: {
            get() { return this.currentDate; },
            set(value: Date) { this.$emit('update:currentDate', value); }
        }
    },

    methods: {
        handleTaskClick(task: unknown) {
            this.$emit('task-click', task);
        },

        handleDayClick(date: string) {
            this.$emit('date-click', new Date(date));
        },

        getDayTasks(date: string) {
            return this.tasks
                .filter(task => date === (task.scheduledStart ? this.formatDate(new Date(task.scheduledStart), 'YYYY-MM-DD') : null))
                .slice(0, 3);
        },

        getTaskTagType(task: Task) {
            if (task.urgencyLevel >= 4) return 'danger';
            if (task.importanceLevel >= 4) return 'warning';

            return 'success';
        }
    },

    beforeMount() {
        this.taskStore.tasks.then(tasks => this.tasks = tasks);
    }

});
</script>

<template>

    <el-calendar class="month-view" v-model="innerCurrentDate">

        <!-- 日历单元格自定义 -->
        <template #date-cell="{ data }">

            <el-badge :value="12">

                <div class="calendar-day" @click="handleDayClick(data.day)">

                        <div class="calendar-day-header">

                            <span class="calendar-day-number">{{ getDayNumber(data.day) }}</span>

                            <el-tag v-if="isToday(data.day)" size="small" type="danger">{{ $t('monthView.template.today') }}</el-tag>

                        </div>

                        <div class="calendar-day-content">

                            <el-space direction="vertical" :size="2">

                                <div v-for="task in getDayTasks(data.day)" :key="task.id" class="task-preview" @click.stop="handleTaskClick(task)">

                                    <el-tag :type="getTaskTagType(task)" size="small" effect="plain" :style="{ width: '100%' }">

                                        <span class="task-title">{{ task.title }}</span>

                                    </el-tag>

                                </div>

                            </el-space>

                        </div>

                </div>

            </el-badge>

        </template>

    </el-calendar>

</template>

<style lang='sass'>

.month-view
    padding: 20px
    height: 100%

.calendar-day
    height: 100%
    padding: 8px
    cursor: pointer
    transition: background-color 0.2s
    border-radius: 4px

    &:hover
        background-color: #F5F7FA

    &-header
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 8px

    &-number
        font-weight: 400

    &-content
        min-height: 60px

.task

    &-preview
        margin-bottom: 4px

    &-title
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        display: block

</style>
