<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file Statistics.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 21:32
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent, ref } from "vue";
import { Pie, Column, Heatmap } from "@antv/g2plot";
import GenHeader from "@/views/GenHeader.vue";
import { ThemeStore } from "@/stores/themeStore";
import { heatmapApi, type HeatmapResult } from "@/api/heatmap";


export default defineComponent({
    data() {
        return {
            donutData: [
                { type: "分类一", value: 27 },
                { type: "分类二", value: 25 },
                { type: "分类三", value: 18 },
                { type: "分类四", value: 15 },
                { type: "分类五", value: 10 },
                { type: "其他", value: 5 }
            ],
            columnData: [
                { type: "分类一", sales: 27 },
                { type: "分类二", sales: 25 },
                { type: "分类三", sales: 18 },
                { type: "分类四", sales: 15 },
                { type: "分类五", sales: 10 },
                { type: "其他", sales: 5 }
            ],
            heatmapData: [] as Array<HeatmapResult>
        };
    },

    computed: {
        total() {
            return this.donutData.reduce((sum, item) => sum + item.value, 0);
        }
    },

    setup() {
        const DonutRef = ref(null);
        const ColumnRef = ref(null);
        const HeatmapRef = ref(null);
        const themeStore = ThemeStore();

        return {
            DonutRef,
            ColumnRef,
            HeatmapRef,
            themeStore
        };
    },

    methods: {
        initDonut() {
            if (!this.DonutRef)
                return;

            const ins = new Pie(this.DonutRef, {
                appendPadding: 10,
                data: this.donutData,
                angleField: "value",
                colorField: "type",
                radius: 1,
                innerRadius: 0.64,
                meta: {
                    value: {
                        formatter: v => `${(v / this.total * 100).toFixed(2)}%`
                    }
                },
                label: {
                    type: "inner",
                    offset: "-50%",
                    autoRotate: false,
                    style: { textAlign: "center" },
                    formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`
                },
                statistic: {
                    title: {
                        offsetY: -8
                    },
                    content: {
                        offsetY: -4
                    }
                },
                interactions: [
                    { type: "element-selected" },
                    { type: "element-active" },
                    {
                        type: "pie-statistic-active",
                        cfg: {
                            start: [
                                { trigger: "element:mouseenter", action: "pie-statistic:change" },
                                {
                                    trigger: "legend-item:mouseenter",
                                    action: "pie-statistic:change"
                                }
                            ],
                            end: [
                                { trigger: "element:mouseleave", action: "pie-statistic:reset" },
                                {
                                    trigger: "legend-item:mouseleave",
                                    action: "pie-statistic:reset"
                                }
                            ]
                        }
                    }
                ]
            });

            ins.render();

            return ins;
        },

        initColumn() {
            if (!this.ColumnRef)
                return;

            const column = new Column(this.ColumnRef, {
                data: this.columnData,
                xField: "type",
                yField: "sales",
                label: {
                    position: "middle",
                    style: {
                        fill: "#FFFFFF",
                        opacity: 0.6
                    }
                },
                xAxis: {
                    label: {
                        autoHide: true,
                        autoRotate: false
                    }
                },
                meta: {
                    type: {
                        alias: "类别"
                    },
                    sales: {
                        alias: "值"
                    }
                }
            });

            column.render();

            return column;
        },

        async initHeatmap() {
            if (!this.HeatmapRef)
                return;

            this.heatmapData = await heatmapApi.getHeatmap();

            const heatmap = new Heatmap(this.HeatmapRef, {
                data: this.heatmapData,
                height: 400,
                autoFit: false,
                xField: "week",
                yField: "day",
                colorField: "commits",
                reflect: "y",
                shape: "boundary-polygon",
                meta: {
                    day: {
                        type: "cat",
                        values: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                    },
                    week: {
                        type: "cat"
                    },
                    commits: {
                        sync: true
                    },
                    date: {
                        type: "cat"
                    }
                },
                yAxis: {
                    grid: null
                },
                tooltip: {
                    title: "date",
                    showMarkers: false
                },
                interactions: [{ type: "element-active" }],
                xAxis: {
                    position: "top",
                    tickLine: null,
                    line: null,
                    label: {
                        offset: 12,
                        style: {
                            fontSize: 12,
                            fill: "#666",
                            textBaseline: "top"
                        },
                        formatter: (val) => {
                            if (val === "2") {
                                return "MAY";
                            } else if (val === "6") {
                                return "JUN";
                            } else if (val === "10") {
                                return "JUL";
                            } else if (val === "15") {
                                return "AUG";
                            } else if (val === "19") {
                                return "SEP";
                            } else if (val === "24") {
                                return "OCT";
                            }

                            return "";
                        }
                    }
                }
            });

            heatmap.render();

            return heatmap;
        }

    },

    watch: {
        "themeStore.theme"(newVal) {
            if (this.dount)
                this.dount.update({ theme: newVal === "dark" ? "dark" : "default" });

            if (this.column)
                this.column.update({ theme: newVal === "dark" ? "dark" : "default" });
        }
    },

    mounted() {
        this.dount = this.initDonut();
        this.column = this.initColumn();
        this.initHeatmap();
    },

    unmounted() {
        this.dount.destroy();
        this.column.destroy();
    },

    components: {
        GenHeader
    }
});
</script>

<template>

    <el-container class="statistics" direction="vertical">

        <gen-header />

        <div class="s-content">

            <div class="s-top">

                <div class="s-top-left">

                    <div class="s-donut" ref="DonutRef" />

                </div>

                <div class="s-top-right">

                    <div class="s-column" ref="ColumnRef" />

                </div>

            </div>

            <div class="s-bottom">

                <el-row :gutter="16" class="s-bottom-row">

                    <el-col :xs="24" :sm="12" :md="6">

                        <el-statistic :title="$t('statistics.template.bottom.daily')" />

                    </el-col>

                    <el-col :xs="24" :sm="12" :md="6">

                        <el-statistic :title="$t('statistics.template.bottom.time')" />

                    </el-col>

                    <el-col :xs="24" :sm="12" :md="6">

                        <el-statistic :title="$t('statistics.template.bottom.total')" />

                    </el-col>

                </el-row>

                <div class="s-bottom-hashmap" ref="HeatmapRef" />

            </div>

        </div>

    </el-container>

</template>

<style lang='sass'>

.statistics
    .s
        &-content
            display: flex
            flex-direction: column
            align-items: center
            padding: 5%

        &-top
            display: flex
            flex-direction: row
            justify-content: space-around
            width: 100%

        &-bottom
            display: flex
            flex-direction: column
            padding: 5%
            width: 100%

            &-row
                width: 100%
                display: flex
                flex-direction: row
                justify-content: space-around
                text-align: center
                margin-bottom: 5%

            &-hashmap
                width: 100%

</style>
