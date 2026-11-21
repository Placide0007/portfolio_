<template>
    <header class="relative">
        <a href="#about" @click="navigateSection('about')" class="font-semibold text-base sm:text-lg tracking-wider hover:opacity-80 transition">
            Portfolio
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
                href="#about" 
                @click="navigateSection('about')" 
                class="py-1 hover:text-slate-600 dark:hover:text-slate-300 transition"
                :class="activeLink === 'about' ? 'border-b-2 border-slate-800 dark:border-gray-200 font-semibold' : ''"
            >
                {{ t('nav.home') }}
            </a>

            <a 
                href="#skills" 
                @click="navigateSection('skills')" 
                class="py-1 hover:text-slate-600 dark:hover:text-slate-300 transition"
                :class="activeLink === 'skills' ? 'border-b-2 border-slate-800 dark:border-gray-200 font-semibold' : ''"
            >
                {{ t('nav.skills') }}
            </a>

            <a 
                href="#projects" 
                @click="navigateSection('projects')" 
                class="py-1 hover:text-slate-600 dark:hover:text-slate-300 transition"
                :class="activeLink === 'projects' ? 'border-b-2 border-slate-800 dark:border-gray-200 font-semibold' : ''"
            >
                {{ t('nav.projects') }}
            </a>

            <a 
                href="#footer" 
                @click="navigateSection('footer')" 
                class="py-1 hover:text-slate-600 dark:hover:text-slate-300 transition"
                :class="activeLink === 'footer' ? 'border-b-2 border-slate-800 dark:border-gray-200 font-semibold' : ''"
            >
                {{ t('nav.contact') }}
            </a>

            <button 
                @click="toggleDark()" 
                class="p-1 hover:opacity-80 transition cursor-pointer"
                :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
                aria-label="Toggle dark mode"
            >
                <Icon :icon="isDark ? 'mdi:white-balance-sunny' : 'mdi:weather-night'" width="20" />
            </button>
        </nav>

        <!-- Controls: Language switch & Mobile Hamburger -->
        <div class="flex items-center gap-3">
            <!-- Language switcher -->
            <div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs sm:text-sm">
                <Icon icon="mdi:translate" width="18" class="text-slate-600 dark:text-slate-300" />

                <button 
                    @click="changeLanguage('fr')" 
                    class="cursor-pointer transition px-1"
                    :class="locale === 'fr' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'"
                >
                    Fr
                </button>

                <span class="text-gray-300 dark:text-gray-600">|</span>

                <button 
                    @click="changeLanguage('en')" 
                    class="cursor-pointer transition px-1"
                    :class="locale === 'en' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'"
                >
                    En
                </button>
            </div>

            <!-- Mobile dark mode toggle -->
            <button 
                @click="toggleDark()" 
                class="md:hidden p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                aria-label="Toggle dark mode"
            >
                <Icon :icon="isDark ? 'mdi:white-balance-sunny' : 'mdi:weather-night'" width="20" />
            </button>

            <!-- Mobile Menu Toggle Button -->
            <button 
                @click="isMobileMenuOpen = !isMobileMenuOpen" 
                class="md:hidden p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer text-slate-800 dark:text-slate-100"
                aria-label="Toggle navigation menu"
            >
                <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" width="24" />
            </button>
        </div>

        <!-- Mobile Navigation Dropdown -->
        <div 
            v-if="isMobileMenuOpen" 
            class="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg md:hidden flex flex-col py-4 px-6 gap-3 z-50 animate-fadeIn"
        >
            <a 
                href="#about" 
                @click="navigateSection('about')"
                class="py-2 text-base font-medium border-b border-slate-100 dark:border-slate-800"
                :class="activeLink === 'about' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-slate-700 dark:text-slate-200'"
            >
                {{ t('nav.home') }}
            </a>

            <a 
                href="#skills" 
                @click="navigateSection('skills')"
                class="py-2 text-base font-medium border-b border-slate-100 dark:border-slate-800"
                :class="activeLink === 'skills' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-slate-700 dark:text-slate-200'"
            >
                {{ t('nav.skills') }}
            </a>

            <a 
                href="#projects" 
                @click="navigateSection('projects')"
                class="py-2 text-base font-medium border-b border-slate-100 dark:border-slate-800"
                :class="activeLink === 'projects' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-slate-700 dark:text-slate-200'"
            >
                {{ t('nav.projects') }}
            </a>

            <a 
                href="#footer" 
                @click="navigateSection('footer')"
                class="py-2 text-base font-medium"
                :class="activeLink === 'footer' ? 'text-yellow-500 dark:text-yellow-400 font-bold' : 'text-slate-700 dark:text-slate-200'"
            >
                {{ t('nav.contact') }}
            </a>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Icon, addCollection } from '@iconify/vue/offline'
import mdi from '@iconify-json/mdi/icons.json'
import { useDark, useToggle } from '@vueuse/core'

addCollection(mdi)

const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()

const activeLink = ref('about')
const isMobileMenuOpen = ref(false)

const isDark = useDark({
    initialValue: 'dark'
})
const toggleDark = useToggle(isDark)

const changeLanguage = (language) => {
    locale.value = language
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', language)
    }
}

const navigateSection = (sectionId) => {
    activeLink.value = sectionId
    isMobileMenuOpen.value = false

    if (route.path !== '/') {
        router.push(`/#${sectionId}`)
    } else {
        const el = document.getElementById(sectionId)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>
