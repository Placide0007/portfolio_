<template>

    <header class="z-400" >

        <a href="" class="font-semibold">
            Portfolio
        </a>

        <nav class="flex gap-5">
            <a href="#about" @click="activeLink = 'about'" :class="activeLink === 'about' ? 'border-b-2 border-slate-800 dark:border-gray-200' : ''">
                {{ t('nav.home') }}
            </a>

            <a href="#skills" @click="activeLink = 'skills'" :class="activeLink === 'skills' ? 'border-b-2 border-black dark:border-gray-200' : ''">
                {{ t('nav.skills') }}
            </a>

            <a href="#projects" @click="activeLink = 'projects'" :class="activeLink === 'projects' ? 'border-b-2 border-black dark:border-gray-200' : ''">
                {{ t('nav.projects') }}
            </a>

            <a href="#footer" @click="activeLink = 'footer'" :class="activeLink === 'footer' ? 'border-b-2 border-black dark:border-gray-200' : ''">
                {{ t('nav.contact') }}
            </a>

            <button @click="toggleDark()">
                <Icon :icon="isDark ? 'mdi:white-balance-sunny' : 'mdi:weather-night'" width="20" />
            </button>
            
        </nav>

        <div class="flex items-center gap-2">
            <Icon icon="mdi:translate" width="22" />

            <button @click="changeLanguage('fr')" :class="locale === 'fr' ? 'text-yellow-400 font-bold' : 'text-gray-400'">
                Fr
            </button>

            <span class="text-gray-300">|</span>

            <button @click="changeLanguage('en')" :class="locale === 'en' ? 'text-yellow-400 font-bold' : 'text-gray-400'">
                En
            </button>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { Icon, addCollection } from '@iconify/vue/offline'
    import mdi from '@iconify-json/mdi/icons.json'
    import { useDark, useToggle } from '@vueuse/core'

    addCollection(mdi)

    const { t, locale } = useI18n()

    const activeLink = ref('about')

    const changeLanguage = (language) => locale.value = language

    const isDark = useDark({
        initialValue: 'dark'
    })

    const toggleDark = useToggle(isDark)

    locale.value = 'en'

</script>