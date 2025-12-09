// Copyright (c) 2025. All rights reserved.
// This source code is licensed under the CC BY-NC-SA
// (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao.
// This software is protected by copyright law. Reproduction, distribution, or use for commercial
// purposes is prohibited without the author's permission. If you have any questions or require
// permission, please contact the author: 2207150234@st.sziit.edu.cn

import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginOxlint from "eslint-plugin-oxlint";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import eslintPluginPrettier from "eslint-plugin-prettier";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: "app/files-to-lint",
        files: ["**/*.{ts,mts,tsx,vue}"],
    },

    globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

    pluginVue.configs["flat/essential"],
    vueTsConfigs.recommended,

    {
        ...pluginVitest.configs.recommended,
        files: ["src/**/__tests__/*"],
    },
    ...pluginOxlint.configs["flat/recommended"],

    // 基于 clang-format 的自定义规则
    {
        rules: {
            // === 缩进 ===
            "indent": ["error", 4, {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 1,
                "MemberExpression": 1,
                "FunctionDeclaration": { "parameters": 1, "body": 1 },
                "FunctionExpression": { "parameters": 1, "body": 1 },
                "CallExpression": { "arguments": 1 },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "flatTernaryExpressions": false,
                "ignoreComments": false,
                "ignoredNodes": [
                    "TemplateLiteral *",
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild"
                ],
            }],

            // === 分号 ===
            "semi": ["error", "always"],

            // === 引号 ===
            "quotes": ["error", "double", { "avoidEscape": true }],

            // === 大括号风格 === (对应 BreakBeforeBraces: Attach)
            "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

            // === 空格相关 ===
            "space-before-function-paren": ["error", {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }],

            "keyword-spacing": ["error", {
                "before": true,
                "after": true,
                "overrides": {
                    "if": { "after": false },
                    "for": { "after": false },
                    "while": { "after": false },
                    "catch": { "after": false }
                }
            }],

            "space-before-blocks": "error",
            "space-infix-ops": "error",
            "space-in-parens": ["error", "never"],

            // === 换行和空行 ===
            "object-curly-newline": ["error", {
                "multiline": true,
                "consistent": true,
                "minProperties": 3
            }],

            "array-bracket-newline": ["error", "consistent"],

            // === 命名约定 ===
            "camelcase": ["error", {
                "properties": "always",
                "ignoreDestructuring": false,
                "ignoreImports": false,
                "ignoreGlobals": false
            }],

            // === 行长度 === (对应 ColumnLimit: 200)
            "max-len": ["warn", {
                "code": 200,
                "tabWidth": 4,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true,
                "ignoreComments": true,
                "ignoreTrailingComments": true
            }],

            // === 空行规则 === (对应 MaxEmptyLinesToKeep: 1)
            "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],

            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
                { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
                { blankLine: "always", prev: "directive", next: "*" },
                { blankLine: "any", prev: "directive", next: "directive" }
            ],

            // === 其他空格规则 ===
            "arrow-spacing": "error",
            "block-spacing": "error",
            "comma-spacing": ["error", { "before": false, "after": true }],
            "key-spacing": ["error", {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }],
            "no-trailing-spaces": "error",
            "no-multi-spaces": "error",
            "comma-style": ["error", "last"],

            // === 逗号 === (对应 Cpp11BracedListStyle: true)
            "comma-dangle": ["error", "never"],

            // === 对象和数组 ===
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],

            // === 三元运算符 === (对应 BreakBeforeTernaryOperators: true)
            "multiline-ternary": ["error", "always-multiline"],

            // === Vue 特定规则 ===
            "vue/html-indent": ["error", 4],
            "vue/script-indent": ["error", 4, {
                "baseIndent": 1,
                "switchCase": 1,
                "ignores": []
            }],
            "vue/html-closing-bracket-newline": ["error", {
                "singleline": "never",
                "multiline": "always"
            }],
            "vue/max-attributes-per-line": ["error", {
                "singleline": 3,
                "multiline": 1
            }],
            "vue/html-self-closing": ["error", {
                "html": {
                    "void": "always",
                    "normal": "always",
                    "component": "always"
                },
                "svg": "always",
                "math": "always"
            }],
        },
    },

    // Prettier 集成
    {
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            "prettier/prettier": ["error", {
                // 这里保持为空，使用 .prettierrc.json 配置
            }],
        },
    },

    skipFormatting
);
