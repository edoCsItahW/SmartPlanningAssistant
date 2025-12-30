<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file TaskList.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/10 22:42
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import { todoApi } from "@/api/todo";
import { ElMessage } from "element-plus";
import SpaCompleter from "@/components/SpaCompleter.vue";
import GenHeader from "@/views/GenHeader.vue";


type TodoListType = Awaited<ReturnType<typeof todoApi.getTodoList>>;

export default defineComponent({
    data() {
        return {
            todoIdx: 0,
            todoList: [] as TodoListType,
            disabled: false,
            loading: false
        };
    },

    methods: {
        async loadData() {
            this.loading = true;
            const res = await todoApi.getTodoList({ start: this.todoIdx, limit: 5 });

            if (res.length > 0) {
                this.todoIdx += 5;
                this.todoList.push(...res);
            }

            else
                this.disabled = true;

            this.loading = false;
        },

        statusChange(idx: number, id: number) {
            const todo = this.todoList[idx];

            todoApi.updateTodoStatus({ id })
                // 成功
                .then((status: boolean) => {

                    if (todo.completed !== status)
                        todo.completed = status;

                })
                // 失败
                .catch(err => {
                    todo.completed = !todo.completed;

                    ElMessage.error("更新失败：" + (err.message || err));
                });
        }
    },

    beforeMount() {
        this.loadData();
    },

    components: {
        SpaCompleter,
        GenHeader
    }
});
</script>

<template>

    <el-container class="task full" direction="vertical">

        <el-affix>

            <gen-header />

        </el-affix>

        <!-- 未完成任务列表 -->
        <transition-group class="task-list" v-infinite-scroll="loadData" :infinite-scroll-disabled="disabled" tag="ul">

            <template v-for="(todo, idx) in todoList" :key="todo.id">

                <li class="task-item" v-if="!todo.completed">

                    <el-card>

                        <template #header>

                            <span>{{ todo.title }}</span>

                        </template>

                        <div class="task-list-content">

                            <spa-completer v-model="todo.completed" @click="statusChange(idx, todo.id)"
                                           :size="20" :checked-color="'#52c41a'" :border-color="'#d9d9d9'"
                                           :bg-color="'#fafafa'" :border-radius="20" :check-scale="20" />

                            <span>{{ todo.description }}</span>

                        </div>

                    </el-card>

                </li>

            </template>

        </transition-group>

        <!-- 已完成任务列表 -->

        <el-empty class="full" v-if="todoList.length === 0" :description="$t('taskList.template.empty')" />

    </el-container>

</template>

<style lang='sass'>

.task
    display: flex
    flex-direction: column

    &-list
        list-style: none
        padding: 0
        margin: 0
        width: 100%
        overflow-y: auto

</style>
