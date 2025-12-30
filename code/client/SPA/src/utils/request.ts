// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file request.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/08 15:28
 * @desc
 * @copyright CC BY-NC-SA 2025. All rights reserved.
 * */
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

/** @interface HttpResponse
 *
 * @desc 接口返回数据格式
 *
 * @template T 返回数据类型
 *
 * @property {number} code 状态码
 * @property {string} message 信息
 * @property {T} data 返回数据
 * @property {boolean} success 是否成功
 * */
export interface HttpResponse<T = unknown> {
    code: number;
    message: string;
    data: T;
    success: boolean;
}

/**
 * @desc axios实例
 * */
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");

        if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;

        if (res.code === 200 || res.success) return res.data;
        else return Promise.reject(new Error(res.msg || "Error"));
    },
    error => Promise.reject(error)
);

export const http = {
    get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.get(url, config);
    },

    post<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.post(url, config);
    },

    put<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.put(url, config);
    },

    delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.delete(url, config);
    },

    patch<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return service.patch(url, config);
    }
};

export default service;
