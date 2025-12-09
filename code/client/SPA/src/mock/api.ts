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
//import respData from '@/assets/data.json';

const users: IUserInfo[] = [];


class Api {
    @route("/api/login")
    static users(response: HttpRequest<{ data: { username: string, password: string } }>) {
        const data = response.body.data;

        const result = users.filter(user => user.username === data.username)[0];

        if (result)
            return {
                userInfo: result,
                token: "xxxxxx"
            };

        return { data: null, msg: "未登录", code: 401 };
    }

    @route("/api/register")
    static register(response: HttpRequest<{ data: { username: string, password: string } }>) {
        const data = response.body.data;

        // 对密码进行加密处理
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto.pbkdf2Sync(data.password, salt, 10000, 64, "sha512").toString("hex");

        if (users.filter(user => user.username === data.username).length > 0)
            return { data: null, msg: "用户名已存在", code: 400 };

        users.push({ ...data, password: hash, salt, id: users.length });

        return { data: "注册成功", code: 200, msg: "ok" };
    }
}


export default [
    {
        url: "/api",
        method: "POST",
        response: { data: "mock available", code: 200, msg: "ok" }
    },
    Api.users(),
    Api.register()
];
