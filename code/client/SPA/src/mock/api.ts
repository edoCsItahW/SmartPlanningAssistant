// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file api.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 09:53
 * @desc
 * @copyright CC BY-NC-SA 2025. All rights reserved.
 * */
import { type HttpRequest, type IUserInfo } from "@/mock/types";
import { route } from "@/mock/common";
import * as crypto from "node:crypto";
import todoData from '@/assets/json/todoData.json';
import taskData from '@/assets/json/taskData.json';
import heatmapData from '@/assets/json/heatmap.json';


const users: IUserInfo[] = [
    {
        id: 0,
        username: 'edocsitahw',
        password: '8f385b8a7bf0b54a1f6e76f587b1b0fbdd70fe5e43fa5d715c02dd514e2e10b7fec897540611e5891f6384e66bff8f07ee80d843e2ac4c99230bca666f359535',
        salt: '804ca22a1c2596f41bdea9a26d05236f'
    }
];

class Api {
    @route("/api/login")
    static users(response: HttpRequest<{ data: { username: string; password: string } }>) {
        const data = response.body.data;

        const result = users.filter(user => user.username === data.username)[0];

        if (
            result
            && result.password === crypto.pbkdf2Sync(data.password, result.salt, 10000, 64, "sha512").toString("hex")
        )
            return {
                userInfo: result,
                token: "xxxxxx"
            };


        return { data: null, msg: "未登录", code: 401 };
    }

    @route("/api/register")
    static register(response: HttpRequest<{ data: { username: string; password: string } }>) {
        const data = response.body.data;

        // 对密码进行加密处理
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto.pbkdf2Sync(data.password, salt, 10000, 64, "sha512").toString("hex");

        if (users.filter(user => user.username === data.username).length > 0) return { data: null, msg: "用户名已存在", code: 400 };

        users.push({ ...data, password: hash, salt, id: users.length });

        return "注册成功";
    }

    @route("/api/todo")
    static getTodoList(response: HttpRequest<{ data: { start: number, limit: number | undefined } }>) {
        const { start, limit } = response.body.data;

        return todoData.slice(start, limit === undefined ? undefined : start + limit);
    }

    @route("/api/todo/:id", "PUT")
    static updateTodoStatus(response: HttpRequest<{ data: null }>) {
        const id = Number.parseInt(response.query.id as string);

        const index = todoData.findIndex(item => item.id === id);

        if (todoData[index]) {
            todoData[index].completed = !todoData[index].completed;

            return todoData[index].completed;
        }

        return { data: null, msg: "未找到该条数据", code: 404 };
    }

    @route("/api/task", "GET")
    static getTaskList(response: HttpRequest<{ data: undefined }>) {
        return taskData;
    }

    @route("/api/heatmap", "GET")
    static getHeatmap(response: HttpRequest<{ data: undefined }>) {
        return heatmapData;
    }

}

export default [
    {
        url: "/api",
        method: "POST",
        response: { data: "mock available", code: 200, msg: "ok" }
    },
    Api.users(),
    Api.register(),
    Api.getTodoList(),
    Api.updateTodoStatus(),
    Api.getTaskList(),
    Api.getHeatmap()
];
