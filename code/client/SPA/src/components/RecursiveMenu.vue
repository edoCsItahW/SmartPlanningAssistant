<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<template>

    <component :is="_idx ? 'el-sub-menu' : 'el-menu'" :="dyncAttrs">

        <template v-if="_idx" #title>

            <slot name="title" />

        </template>

        <el-menu-item v-if="!_idx" class="menu-item-control" index="-1">

            <fold />

        </el-menu-item>

        <template v-for="(item, index) in menuItems" :key="index">

            <recursive-menu v-if="isSubMenu(item)" :active-index="innerActiveIndex" :menu-items="item.subMenu" :_idx="`${index}`">

                <template #title>

                    <el-icon><component v-if="item.icon" class="icon" :is="item.icon" /></el-icon>

                    <span>{{ item.title }}</span>

                </template>

            </recursive-menu>

            <el-menu-item v-else :disabled="item.disabled" :index="spawnIdx(index, _idx)">

                <el-icon><component v-if="item.icon" class="icon" :is="item.icon" /></el-icon>

                <template #title>
                    {{ item.content }}
                </template>

            </el-menu-item>

        </template>

    </component>

</template>

<script lang='ts'>
/**
 * @file RecursiveMenu.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/30 09:08
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent, PropType } from "vue";
import { MenuItem, Optional, type SubMenuItem } from "@/types";
import { Fold } from "@element-plus/icons-vue";
import { ElMenu } from "element-plus";


export default defineComponent({
    name: "RecursiveMenu",
    components: { Fold, ElMenu },

    data() {
        return {
            idx: this._idx || "",
            collapse: false,
            innerActiveIndex: this.activeIndex
        };
    },

    props: {
        menuItems: {
            type: Array as PropType<MenuItem[]>,
            required: true
        },
        activeIndex: {
            type: String,
            required: true
        },
        _idx: {
            type: String
        }
    },

    emits: ["select", "update:collapse"],

    computed: {
        innerCollapse: {
            get() { return this.collapse; },
            set(val: boolean) { this.collapse = val; this.$emit("update:collapse", val); }
        },

        dyncAttrs() {
            return this._idx ? {
                index: this._idx
            } : {
                collapse: this.collapse,
                defaultActive: this.innerActiveIndex,
                mode: "vertical",
                onSelect: this.handleSelect
            };
        }
    },

    methods: {
        handleSelect(key: string) {
            if (key === "-1") {
                this.innerCollapse = !this.innerCollapse;
                this.innerActiveIndex = this.activeIndex;
            }

            else
                this.$emit("select", key);
        },

        isSubMenu(item: MenuItem): item is SubMenuItem {
            return (item as SubMenuItem).subMenu !== undefined;
        },

        spawnIdx(index: string | number, lastIndex?: Optional<string>) {
            return lastIndex ? `${lastIndex}-${index}` : `${index}`;
        }
    },

    watch: {
        activeIndex(newVal: string) {
            this.innerActiveIndex = newVal;
        }
    }
});
</script>

<style lang='sass' scoped>

.icon
    width: 1.5em

.menu-item-control
    justify-content: center

</style>
