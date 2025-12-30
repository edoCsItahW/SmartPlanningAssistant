<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file PlanView.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 14:34
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import GenHeader from "@/views/GenHeader.vue";
import { Calendar, Grid, Clock, Plus, Refresh, Download } from "@element-plus/icons-vue";
import MonthView from "@/views/planView/MonthView.vue";
import WeekView from "@/views/planView/WeekView.vue";
import DayView from "@/views/planView/DayView.vue";


export default defineComponent({
    data() {
        return {
            activeOpt: "monthly",
            activeAct: "",
            drawer: false
        };
    },

    computed: {
        options() {
            return [
                {
                    label: this.$t("planView.script.options.monthly"),
                    value: "monthly",
                    icon: Calendar
                },
                {
                    label: this.$t("planView.script.options.weekly"),
                    value: "weekly",
                    icon: Grid
                },
                {
                    label: this.$t("planView.script.options.daily"),
                    value: "daily",
                    icon: Clock
                }
            ] as { label: string, value: string, icon: typeof Calendar }[];
        },

        actions() {
            return [
                {
                    label: this.$t("planView.script.actions.add"),
                    value: "add",
                    icon: Plus
                },
                {
                    label: this.$t("planView.script.actions.refresh"),
                    value: "refresh",
                    icon: Refresh
                },
                {
                    label: this.$t("planView.script.actions.export"),
                    value: "export",
                    icon: Download
                }
            ] as { label: string, value: string, icon: typeof Plus }[];
        },

        mainView() {
            switch (this.activeOpt) {
                case "monthly":
                    return MonthView;
                case "weekly":
                    return WeekView;
                case "daily":
                    return DayView;
                default:
                    return MonthView;
            }
        }
    },

    components: {
        GenHeader,
        MonthView,
        WeekView,
        DayView
    }
});
</script>

<template>

    <el-container class="plan-view full" direction="vertical">

        <gen-header class="full" />

        <!-- <DateNavigator /> -->

        <el-main class="plan-view-main">

            <el-segmented v-model="activeOpt" :options="options" :props="{ label: 'label', value: 'value' }" class="plan-view-segment">

                <template #default="opt">

                    <div class="plan-view-segment-item">

                        <el-icon :size="20">

                            <component :is="opt.item.icon" />

                        </el-icon>

                        <span>{{ opt.item.label }}</span>

                    </div>

                </template>

            </el-segmented>

            <el-container class="plan-view-content">

                <component :is="mainView" />

            </el-container>

            <el-segmented v-model="activeAct" :options="actions" :props="{ label: 'label', value: 'value' }" class="plan-view-segment">

                <template #default="act">

                    <div class="plan-view-segment-item">

                        <el-icon :size="20">

                            <component :is="act.item.icon" />

                        </el-icon>

                        <span>{{ act.item.label }}</span>

                    </div>

                </template>

            </el-segmented>

            <!-- StrategySelector -->

        </el-main>

        <el-drawer v-model="drawer" :title="$t('planView.template.drawer.title')" direction="rtl"></el-drawer>

    </el-container>

</template>

<style lang='sass'>

.plan-view
    display: flex
    flex-direction: column

    &-main
        display: flex !important
        flex-direction: column

    &-segment
        display: flex
        align-items: center
        justify-content: center

        &-item
            display: flex
            align-items: center
            justify-content: center

</style>
