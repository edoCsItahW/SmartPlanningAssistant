<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file SpaCompleter.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/13 23:23
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {};
    },
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        size: {
            type: [String, Number],
            default: 20
        },
        color: {
            type: String,
            default: "#409EFF"
        },
        checkedColor: {
            type: String,
            default: "#52C41A"
        },
        borderColor: {
            type: String,
            default: "#DCDFE6"
        },
        bgColor: {
            type: String,
            default: "#F5F7FA"
        },
        borderRadius: {
            type: [String, Number],
            default: 6
        },
        checkScale: {
            type: Number,
            default: 0.7
        }
    },
    emits: ['update:modelValue', 'change', 'click'],
    computed: {
        customStyle() {
            return {
                '--spa-completer-size': this.formatPx(this.size),
                '--spa-completer-color': this.color,
                '--spa-completer-checked-color': this.checkedColor,
                '--spa-completer-border-color': this.borderColor,
                '--spa-completer-bg-color': this.bgColor,
                '--spa-completer-border-radius': this.formatPx(this.borderRadius),
                '--spa-completer-check-scale': this.checkScale
            }
        },

        circleStyle() {
            return {
                width: this.formatPx(this.size),
                height: this.formatPx(this.size),
                borderRadius: this.formatPx(this.borderRadius)
            }
        },

        iconStyle() {
            return {
                color: this.checkedColor
            }
        }
    },
    methods: {
        formatPx(value: number | string) {
            return typeof value === 'number' ? `${value}px` : value;
        },

        handleClick(event: MouseEvent) {
            if (this.disabled || this.readonly) return;

            this.$emit('click', event);

            const newValue = !this.modelValue;

            this.$emit('update:modelValue', newValue);

            this.$emit('change', newValue);
        },

        handleKeydown(event: KeyboardEvent) {
            if (event.key === ' ' && !this.disabled && !this.readonly) {
                event.preventDefault();

                this.handleClick(event);
            }
        }
    }
});
</script>

<template>

    <div class="spa-completer" :class="{ checked: modelValue, disabled, readonly }" @click="handleClick" tabindex="0" @keydown.space="handleKeydown" :style="customStyle">

        <div class="radio-circle" :style="circleStyle">

            <svg v-if="modelValue" class="check-icon" viewBox="0 0 24 24" :style="[iconStyle, { opacity: modelValue ? 1 : 0 }]">
                <path d="M8.5 13.5L6 11c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.2 3.2c.2.2.5.3.7.3.3 0 .5-.1.7-.3l8.8-8.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8.5 13.5z" stroke="currentColor" stroke-width="0.5" fill="currentColor" />
            </svg>

        </div>

        <span v-if="$slots.default" class="radio-label">

            <slot />

        </span>

    </div>

</template>

<style lang='sass'>
.spa-completer
    display: inline-flex
    align-items: center
    cursor: pointer
    user-select: none
    transition: all 0.2s ease
    vertical-align: middle

    &:focus
        outline: none

    &:focus-visible
        outline: 2px solid var(--spa-completer-color, #409eff)
        outline-offset: 2px
        border-radius: var(--spa-completer-border-radius, 6px)

    &.disabled
        cursor: not-allowed
        opacity: 0.6

        .radio-circle
            background-color: #f5f5f5
            border-color: #d9d9d9

    &.readonly
        cursor: default

        .radio-circle
            background-color: #fafafa


.radio-circle
    position: relative
    border: 2px solid var(--spa-completer-border-color, #dcdfe6)
    border-radius: 50%
    background-color: var(--spa-completer-bg-color, #f5f7fa)
    transition: all 0.2s ease
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0

    .custom-radio.checked &
        border-color: var(--spa-completer-color, #409eff)
        background-color: rgba(82, 196, 26, 0.1)


    .custom-radio:hover:not(.disabled):not(.readonly) &
        border-color: var(--spa-completer-color, #409eff)
        box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2)


.check-icon
    width: calc(var(--spa-completer-size, 24px) * var(--spa-completer-check-scale, 0.7))
    height: calc(var(--spa-completer-size, 24px) * var(--spa-completer-check-scale, 0.7))
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)

    .custom-radio.checked &
        animation: check-appear 0.3s ease


.radio-label
    margin-left: 8px
    font-size: 14px
    line-height: var(--spa-completer-size, 24px)
    color: #606266

    .custom-radio.checked &
        color: #303133


    .custom-radio.disabled &
        color: #c0c4cc


@keyframes check-appear
    0%
        opacity: 0
        transform: scale(0.3) rotate(-45deg)

    50%
        transform: scale(1.1) rotate(0deg)

    70%
        transform: scale(0.9) rotate(0deg)

    100%
        opacity: 1
        transform: scale(1) rotate(0deg)



</style>
