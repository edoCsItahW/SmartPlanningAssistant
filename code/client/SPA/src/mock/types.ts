// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file types.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 09:53
 * @desc
 * @copyright CC BY-NC-SA 2025. All rights reserved.
 * */

/** @interface IApi
 *
 * @template T 返回数据类型
 *
 * @property {T} data 返回数据
 * @property {number} code 状态码
 * @property {string} msg 状态信息
 * */
export interface IApi<T = unknown> {
    data: T;
    code: number;
    msg: string;
    success: boolean;
}

/** @interface IRoute
 *
 * @template T 返回数据类型
 *
 * @property {string} url 路由地址
 * @property {string | string[]} method 请求方法
 * @property {T} response 返回数据
 * */
export interface IRoute<T = unknown> {
    url: string;
    method: string | string[];
    response: T;
}

/** @interface HttpRequest
 *
 * @template T 请求参数类型
 *
 * @property {string} url 请求地址
 * @property {T} body 请求参数
 * @property {Record<string, unknown>} query 请求参数
 * @property {Record<string, string>} headers 请求头
 * @property {Record<string, unknown>} params 请求参数
 * */
export interface HttpRequest<T = unknown> {
    url: string;
    body: T;
    query: Record<string, unknown>;
    headers: Record<string, string>;
    params: Record<string, unknown>;
}

// 具体接口定义

export interface IUserInfo {
    id: number;
    username: string;
    password: string;
    salt: string;
}
