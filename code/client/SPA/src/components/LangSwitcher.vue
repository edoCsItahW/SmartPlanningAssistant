<!-- Copyright (c) 2025. All rights reserved. -->
<!-- This source code is licensed under the CC BY-NC-SA -->
<!-- (Creative Commons Attribution-NonCommercial-NoDerivatives) License, By Xiao Songtao. -->
<!-- This software is protected by copyright law. Reproduction, distribution, or use for commercial -->
<!-- purposes is prohibited without the author's permission. If you have any questions or require -->
<!-- permission, please contact the author: 2207150234@st.sziit.edu.cn -->

<script lang='ts'>
/**
 * @file LangSwitcher.vue
 * @author edocsitahw
 * @version 1.1
 * @date 2025/12/09 17:24
 * @desc
 * @copyright CC BY-NC-SA
 * */
import { defineComponent } from "vue";
import { LangStore } from "@/stores/langStore";
import Language from "@/components/svg/Language.vue";
import { LangOptions } from "@/locales/lang";


export default defineComponent({
    data() {
        return {
            language: ''
        };
    },
    setup() {
        const langStore = LangStore();

        return { langStore, LangOptions };
    },
    methods: {
        toggleLanguage() {
            this.langStore.toggleLanguage();
        },

        handleLanguageChange(lang: string) {
            this.langStore.setLanguage(lang);
        }
    },
    watch: {
        language(lang: string) {
            this.langStore.setLanguage(lang);

        }
    },
    components: {
        Language
    }
});
</script>

<template>

    <div class="lang-switcher">

        <el-tooltip :content="$t('langSwitcher.template.switch')">

            <el-button class="lang-switch-btn" circle @click="toggleLanguage" :title="$t('lang.quickSwitch')">

                <template #icon>

                    <language />

                </template>

            </el-button>

        </el-tooltip>

<!--        <el-select v-model="language" class="lang-select" size="small" @change="handleLanguageChange" :placeholder="$t('lang.switch')">-->

<!--            <el-option v-for="option in LangOptions" :key="option.value" :label="$t(`lang.${option.value.replace('-', '')}`)" :value="option.value" />-->

<!--        </el-select>-->

    </div>

</template>

<style lang='sass'>
.lang
    &-switcher
        display: flex
        align-items: center
        gap: 8px
        padding: 0 10px

    &-switch-btn
        transition: all 0.3s ease

    &-switch-btn:hover
        background-color: #66b1ff
        color: #fff

    &-select
        width: 180px

</style>
