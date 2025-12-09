// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file common.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 09:53
 * @desc
 * @copyright CC BY-NC-SA 2025. All rights reserved.
 * */
import { type IApi, type IRoute } from "@/mock/types";


/**
 * @desc 标准返回值
 *
 * @template T 返回数据类型
 *
 * @param data 返回数据
 * @param code 状态码
 * @param msg 信息
 * @param success 是否成功
 * @returns 返回值
 * */
function stdRes<T = unknown>(data: T, code: number = 200, msg: string = "ok", success: boolean = true): IApi<T> {
    return { data, code, msg, success };
}


/**
 * @desc 统一返回值
 *
 * @template Args 装饰器参数类型
 * @template Return 装饰器返回值类型
 *
 * @param fn 被装饰函数
 * @returns 装饰器函数
 * */
export function unifi<Args extends unknown[], Return>(fn: (...args: Args) => Return) {
    return function wrap(this: unknown, ...args: Args) {
        const res = fn.apply(this, args);

        if (typeof res !== "object" || res === null || !["data", "code", "msg"].every(key => key in res))
            return stdRes(res);

        return res;
    };
}


/**
 * @desc 路由装饰器
 *
 * @param rule 路由规则
 * @param method 请求方法
 * @returns 装饰器函数
 * */
//export function route<R = unknown>(rule: string, method: string | string[] = "POST") {
//    return function <T extends object, As extends unknown[]>(value: (this: T, ...args: As) => R, context: ClassMemberDecoratorContext) {
//        if (context.kind !== "method")
//            throw new Error("Only methods can be decorated with @route");
//
//        const wrapper = function(this: T, ...args: As): IRoute<R> {
//            const response = value.length === 0
//                ? unifi(value).apply(this, args)
//                : value.apply(this, args);
//
//            return {
//                url: rule,
//                method,
//                response: response as R
//            };
//        };
//
//        Object.assign(wrapper, value);
//
//        return wrapper as (this: T, ...args: As) => R;
//    };
//}
export function route(rule: string, method: string | string[] = 'POST'): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const orgFn = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            return {url: rule, method, response: orgFn.length === 0 /** 有无参数 */ ? unifi(orgFn).apply(this, args) : unifi(orgFn) /** .apply(this, args) 直接以被装饰函数作为handler */};
        };
    }
}
