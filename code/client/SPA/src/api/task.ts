// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file task.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/14 23:44
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { http } from "@/utils/request";
import type { Task } from "@/types";


export type GetTaskResult = Task[];


export const taskApi = {
    async getTask(params?: undefined) {
        const response = await http.post<GetTaskResult>("/task", { params });

        return response.map(task => ({ ...task, scheduledStart: new Date(task.scheduledStart), scheduledEnd: new Date(task.scheduledEnd), dueDate: new Date(task.dueDate) }))
    }
};
