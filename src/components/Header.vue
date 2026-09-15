<template>
    <header class="flex justify-between items-center px-20 py-2 font-semibold sticky bg-white top-0 border-b border-slate-100">
        <a href="" class="font-semibold">
            Placide_dev
        </a>

        <nav class="flex gap-5">
            <a href="#about">
                {{ t('nav.home') }}
            </a>

            <a href="#skills">
                {{ t('nav.skills') }}
            </a>

            <a href="#projects">
                {{ t('nav.projects') }}
            </a>

            <a href="#footer">
                {{ t('nav.contact') }}
            </a>
        </nav>

        <div class="flex items-center gap-2">
            <Icon icon="mdi:translate" width="22" />

            <button
                @click="changeLanguage('fr')"
                :class="locale === 'fr' ? 'text-black font-bold' : 'text-gray-400'"
                class="hover:text-black transition"
            >
                Fr
            </button>

            <span class="text-gray-300">|</span>

            <button
                @click="changeLanguage('en')"
                :class="locale === 'en' ? 'text-black font-bold' : 'text-gray-400'"
                class="hover:text-black transition"
            >
                En
            </button>
        </div>
    </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Icon, addCollection } from '@iconify/vue/offline'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(mdi)

const { t, locale } = useI18n()

const changeLanguage = (language) => {
    locale.value = language
}
</script>

