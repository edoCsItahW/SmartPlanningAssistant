<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file Auth.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/02 23:58
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import type { FormInstance } from "element-plus";
import { userApi } from "@/api/user";
import GenHeader from "@/views/GenHeader.vue";


enum OperationType {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER"
}


export default defineComponent({
    data() {
        return {
            carousels: Array.from(["Smart", "Fast", "Secure", "Efficient"]).map(d => `auth.script.carousels.${d}`),
            form: {
                username: "",
                password: "",
                confirmPassword: null,
                operationType: OperationType.LOGIN
            }
        };
    },
    setup() {
        const formRef = ref<FormInstance>();

        return {
            OperationType,
            formRef
        };
    },
    computed: {
        transCarousels() {
            return this.carousels.map(d => this.$t(d));
        },

        rules() {
            return {
                username: [
                    {
                        required: true,
                        message: this.$t("auth.script.rules.username.message"),
                        trigger: "blur"
                    },
                    { validator: this.validateUsername, trigger: "blur" }
                ],
                password: [
                    {
                        required: true,
                        message: this.$t("auth.script.rules.password.message"),
                        trigger: "blur"
                    },
                    { validator: this.validatePassword, trigger: "blur" }
                ],
                confirmPassword: [
                    {
                        required: true,
                        message: this.$t("auth.script.rules.confirmPassword.message"),
                        trigger: "blur"
                    },
                    { validator: this.validateConfirmPassword, trigger: "blur" }
                ]
            };
        }
    },
    methods: {
        validateUsername(rule: never, value: string, callback: (error?: Error) => void) {
            if (!value)
                callback(new Error("Please input your username"));

            else if (value.length < 3)
                callback(new Error("Username must be at least 3 characters"));

            else if (value.length > 20)
                callback(new Error("Username must be at most 20 characters"));

            else if (!/^[a-zA-Z0-9_]+$/.test(value))
                callback(new Error("Username must contain only letters, numbers, and underscores"));

            else
                callback();
        },

        validatePassword(rule: never, value: string, callback: (error?: Error) => void) {
            if (!value)
                callback(new Error("Please input your password"));

            else if (value.length < 6)
                callback(new Error("Password must be at least 6 characters"));

            else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value))
                callback(new Error("Password must contain at least one uppercase letter, one lowercase letter, and one number"));

            else
                callback();
        },

        validateConfirmPassword(rule: never, value: string, callback: (error?: Error) => void) {
            if (!value)
                callback(new Error("Please confirm your password"));

            else if (value !== this.form.password)
                callback(new Error("Passwords do not match"));

            else
                callback();
        },

        async handleSubmit() {
            switch (this.form.operationType) {
                case OperationType.LOGIN:
                    userApi.login(this.form).then(
                        response => {
                            if (response.token)
                                this.$router.push("/");
                        }
                    ).catch(error => console.error(error));
                    break;

                case OperationType.REGISTER:
                    userApi.register(this.form).then(() => this.form.operationType = OperationType.LOGIN).catch(error => console.error(error));
                    break;

            }
        },

        handleReset() {
            this.form = {
                username: "",
                password: "",
                confirmPassword: null,
                operationType: this.form.operationType
            };
        }
    },
    components: {
        User,
        Lock,
        GenHeader
    }
});
</script>

<template>

    <gen-header :left-flag="false" :center-flag="false" />

    <div class="login">

        <div class="login-wrapper">

            <div class="login-left">

                <el-carousel class="login-left-carousel" direction="vertical" type="card"
                             motion-blur>

                    <el-carousel-item v-for="desc in transCarousels" :key="desc">

                        <div class="login-left-carousel-item">

                            <h3>{{ desc }}</h3>

                        </div>

                    </el-carousel-item>

                </el-carousel>

            </div>

            <div class="login-right">

                <div class="login-right-wrapper">

                    <el-space class="login-right-title" :size="20">

                        <el-image class="login-right-logo"
                                  src="/src/assets/imgs/SPA_Brains.png" />

                        <h2 style="margin-right: 150px;">{{
                                form.operationType === OperationType.LOGIN ? $t("auth.template.login") : $t("auth.template.register")
                            }}</h2>

                    </el-space>

                    <el-form class="login-form" :model="form" :rules="rules" ref="formRef"
                             @submit.prevent="handleSubmit">

                        <el-form-item prop="username">

                            <el-input v-model="form.username" :placeholder="$t('auth.script.rules.username.message')" maxlength="20" show-word-limit clearable>

                                <template #prefix>

                                    <el-icon>
                                        <User />
                                    </el-icon>

                                </template>

                            </el-input>

                        </el-form-item>

                        <el-form-item prop="password">

                            <el-input type="password" v-model="form.password" :placeholder="$t('auth.script.rules.password.message')" show-password clearable>

                                <template #prefix>

                                    <el-icon>
                                        <Lock />
                                    </el-icon>

                                </template>

                            </el-input>

                        </el-form-item>

                        <Transition>

                            <el-form-item v-if="form.operationType === OperationType.REGISTER" prop="confirmPassword">

                                <el-input type="password" v-model="form.confirmPassword" :placeholder="$t('auth.script.rules.confirmPassword.message')" show-password clearable>

                                    <template #prefix>

                                        <el-icon>
                                            <Lock />
                                        </el-icon>

                                    </template>

                                </el-input>

                            </el-form-item>

                        </Transition>

                        <el-form-item>

                            <i18n-t keypath="auth.template.agreementText" tag="span">

                                <template #agreementLink>

                                    <el-link type="primary" underline="never">{{ $t("auth.template.userAgreement") }}</el-link>

                                </template>

                                <template #privacyLink>

                                    <el-link type="primary" underline="never">{{ $t("auth.template.privacyPolicy") }}</el-link>

                                </template>

                            </i18n-t>

                        </el-form-item>

                        <el-form-item>

                            <el-button-group class="login-control" direction="horizontal">

                                <el-button class="login-control-login" type="primary" :loading="false" @click="handleSubmit">{{ form.operationType === OperationType.LOGIN ? $t("auth.template.login") : $t("auth.template.register") }}</el-button>

                                <el-button class="login-control-reset" type="info" plain @click="handleReset">{{ $t("auth.template.reset") }}</el-button>

                            </el-button-group>

                        </el-form-item>

                        <div class="login-links">

                            <Transition>

                                <el-link v-if="form.operationType === OperationType.LOGIN" type="primary">{{ $t("auth.template.forgotPassword") }}</el-link>

                            </Transition>

                            <el-link type="primary" @click="form.operationType = form.operationType === OperationType.LOGIN ? OperationType.REGISTER : OperationType.LOGIN">
                                {{
                                    form.operationType === OperationType.LOGIN ? $t("auth.template.createAccount") : $t("auth.template.alreadyHaveAccount")
                                }}
                            </el-link>

                        </div>

                    </el-form>

                </div>

            </div>

        </div>

    </div>

</template>

<style lang='sass'>
@use "../style/global" as *

.login
    display: flex
    height: 100%
    width: 100%
    justify-content: center
    align-items: center
    flex-direction: column

    &-wrapper
        display: flex
        flex-direction: row
        justify-content: center

        @include media-query($from: tablet)
            height: 70%
            width: 70%

        @include media-query($from: phone, $until: tablet)
            height: 100%
            width: 100%

    &-left
        height: 100%
        width: 100%
        padding: 0 20px
        display: flex
        flex: 1

        @include media-query($from: phone, $until: tablet)
            display: none

        &-carousel
            flex: 1

            &-item
                height: 100% !important
                width: 100% !important
                display: flex
                justify-content: center
                align-items: center

    &-form
        width: 100%

    &-right
        flex: 1
        padding: 20px

        &-logo
            max-height: 100px
            max-width: 100px

        &-wrapper
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center

        &-title
            display: flex
            align-items: center

    &-control
        width: 100%

        &-login
            width: 50%

        &-reset
            width: 50%

    &-links
        display: flex
        justify-content: space-between
        flex-direction: row

/// ------------

.el-carousel__container
    width: 100% !important
    height: 100% !important

.el-carousel__item:nth-child(2n)
    background-color: #1f2937

.el-carousel__item:nth-child(2n+1)
    background-color: #ff9a9a

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active, .v-leave-active
    transition: opacity 0.5s ease

.v-enter-from, .v-leave-to
    opacity: 0

/// ------------
</style>
