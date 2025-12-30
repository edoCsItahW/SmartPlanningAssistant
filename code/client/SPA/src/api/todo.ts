// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file todo.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/11 19:42
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */
import { http } from "@/utils/request";
import { type Nullable } from "@/types";


export interface GetTodoParams {
    start: number;
    limit: Nullable<number>;
}


export interface UpdateTodoParams {
    id: number;
}


export type GetTodoResult = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    date: string;
}[]


export const todoApi = {
    async getTodoList(data: GetTodoParams) {
        return http.post<GetTodoResult>("/todo", { data });
    },

    async updateTodoStatus(data: UpdateTodoParams) {
        return http.put<boolean>(`/todo/${data.id}`);
    }
};
