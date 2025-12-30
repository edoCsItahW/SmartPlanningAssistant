// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

import { http } from "@/utils/request";

/** @interface LoginParams
 *
 * @desc 登录参数接口
 *
 * @property {string} username 用户名
 * @property {string} password 密码，加密后传输
 * */
export interface LoginParams {
    username: string;
    password: string;
}

/** @interface UserInfo
 *
 * @desc 用户信息接口
 *
 * @property {number} id 用户ID
 * @property {string} username 用户名
 * @property {string} email 用户邮箱
 * @property {string} [avatar] 用户头像
 * */
export interface UserInfo {
    id: number;
    username: string;
    email: string;
    avatar?: string;
}

/** @interface LoginResult
 *
 * @desc 登录结果接口
 *
 * @property {string} token 登录令牌
 * @property {UserInfo} userInfo 用户信息
 * */
export interface LoginResult {
    token: string;
    userInfo: UserInfo;
}

export const userApi = {
    /**
     * @desc 登录接口
     * @param {LoginParams} data 登录参数
     * @returns {Promise<LoginResult>} 登录结果
     */
    async login(data: LoginParams): Promise<LoginResult> {
        return http.post<LoginResult>("/login", { data });
    },

    /**
     * @desc 注册接口
     * @param {LoginParams} data 注册参数
     * @returns {Promise<LoginResult>} 注册结果
     */
    async register(data: LoginParams): Promise<null> {
        return http.post<null>("/register", { data });
    },

    /**
     * @desc 获取用户信息接口
     * @returns {Promise<UserInfo>} 用户信息
     */
    getUserInfo(): Promise<UserInfo> {
        return http.get<UserInfo>("/user/info");
    },

    /**
     * @desc 更新用户信息接口
     * @param {Partial<UserInfo>} data 用户信息
     * @returns {Promise<UserInfo>} 用户信息
     */
    updateUserInfo(data: Partial<UserInfo>): Promise<UserInfo> {
        return http.put<UserInfo>("/user/info", { data });
    },

    /**
     * @desc 删除用户
     *
     * @returns {Promise<void>}
     */
    deleteUser(): Promise<void> {
        return http.delete("/user");
    }
};
