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
 * @date 2025/12/09 15:43
 * @desc
 * @copyrigh-t CC BY-NC-SA 2025. All rights reserved.
 * */

/**
 * @desc支持的语言类型
 */
export type LanguageType = 'zh-CN' | 'en-US' | 'ja-JP';


/** @interface LanguageOption
 * @desc 语言选项配置
 *
 * @property label {string} 展示文本（多语言）
 * @property value {LanguageType} 语言标识
 * @property [icon] {string} 语言图标
 */
export interface LanguageOption {
    label: string;
    value: LanguageType;
    icon?: string;
}
