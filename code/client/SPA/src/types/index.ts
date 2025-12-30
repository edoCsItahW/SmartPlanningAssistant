// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

/**
 * @file lib.ts
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/08 21:48
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

type _Digit<T extends string, Acc extends string = ""> = T extends `${infer Head}${infer Tail}` ? _Digit<Tail, Acc | Head> : Acc;

type Digit = Exclude<_Digit<"0123456789">, "">;

type NonZeroDigit = Exclude<Digit, "0">;

export type ValidInteger<T extends string = ""> = T extends `${NonZeroDigit}${infer Rest}`
    ? Rest extends ""
        ? T
        : `${T}`
    : T extends Digit
        ? T extends "0"
            ? "0"
            : never
        : never;

export type ValidIndex<T extends string = ""> = T extends `${infer Part}-${infer Rest}`
    ? Part extends ValidInteger<Part>
        ? Rest extends ValidIndex<Rest>
            ? T
            : never
         : never
    : T extends ValidInteger<T>
        ? T
        : never;


export type ValidIndexDebug<T extends string, Mode extends "error" | "success" = "success"> =
    T extends `${infer FirstPart}-${infer Rest}`
        ? FirstPart extends ValidInteger<FirstPart>
            ? ValidIndexDebug<Rest> extends never
                ? Mode extends "error"
                    ? `错误：部分 "${Rest}" 不是有效的索引`
                    : never
                : Mode extends "success"
                    ? T
                    : "有效索引"
            : Mode extends "error"
                ? `错误：部分 "${FirstPart}" 不是有效的整数`
                : never
        : T extends ValidInteger<T>
            ? Mode extends "success"
                ? T
                : "有效索引"
            : Mode extends "error"
                ? `错误：部分 "${T}" 不是有效的整数`
                : never;


export interface Task {
    id: number;
    title: string;
    description?: string;
    taskType: "creative" | "repetitive" | "learning" | "administrative";
    urgencyLevel: number;
    importanceLevel: number;
    estimatedDuration: number;
    cognitiveLoadScore: number;
    energyCostScore: number;
    status: "pending" | "in-progress" | "completed";
    scheduledStart?: Date;
    scheduledEnd?: Date;
    dueDate?: Date;
    progress?: number;
    tags?: string[];
}


export interface Plan {
    id: string;
    userId: string;
    date: Date;
    strategy: StrategyType;
    tasksSchedule: ScheduledTask[];
    qualityScore: number;
    createdAt: Date;
    updatedAt: Date;
}


export interface ScheduledTask {
    taskId: string;
    scheduledStart: Date;
    scheduledEnd: Date;
    order: number;
}


export type StrategyType = "efficiency" | "health" | "flow" | "motivation"


export interface PlanStats {
    totalTasks: number;
    completedTasks: number;
    completionRate: number;
    avgEnergyScore: number;
    avgCognitiveLoad: number;
}


export interface PlanFilter {
    showCompleted: boolean;
    taskTypes: string[];
    minUrgency: number;
    maxEnergyCost: number;
    dateRange?: [Date, Date];
}


interface MenuItemBase {
    disabled?: boolean;
    icon?: unknown;
}


export interface DefaultMenuItem extends MenuItemBase {
    content: string;
}


export interface SubMenuItem extends MenuItemBase {
    title: string;
    subMenu?: MenuItem[];
}


export type MenuItem = DefaultMenuItem | SubMenuItem;
