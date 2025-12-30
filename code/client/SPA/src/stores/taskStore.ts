// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file planStore.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 19:38
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { defineStore } from "pinia";
import type { Nullable, Plan, Task } from "@/types";
import { taskApi } from "@/api/task";


export const TaskStore = defineStore("TaskStore", {
    state() {
        return {
            innerTasks: [] as Task[],
            loaded: false
        };
    },

    getters: {
        tasks(state): Promise<Task[]> {
            if (!state.loaded)
                taskApi.getTask().then(tasks => {
                    this.innerTasks = tasks;
                    this.loaded = true;
                });

            return Promise.resolve(state.innerTasks);
        }
    },

    actions: {
    }
});
