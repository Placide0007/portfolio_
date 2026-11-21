<template>
    <footer id="footer" class="border-t border-slate-200 dark:border-slate-800 px-4 py-10 sm:px-8 md:px-12 lg:px-20 bg-white dark:bg-slate-900 transition-colors">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <!-- Brand & Role -->
            <div class="text-center md:text-left">
                <h2 class="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Placide_dev
                </h2>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {{ $t('footer.role') }}
                </p>
            </div>

            <!-- Quick Navigation Anchor Links -->
            <div class="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <a href="#about" class="hover:text-slate-900 dark:hover:text-white transition">
                    {{ $t('nav.home') }}
                </a>
                <a href="#skills" class="hover:text-slate-900 dark:hover:text-white transition">
                    {{ $t('nav.skills') }}
                </a>
                <a href="#projects" class="hover:text-slate-900 dark:hover:text-white transition">
                    {{ $t('nav.projects') }}
                </a>
                <a href="#footer" class="hover:text-slate-900 dark:hover:text-white transition">
                    {{ $t('nav.contact') }}
                </a>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-5">
                <a 
                    href="https://github.com/Placide02" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="GitHub" 
                    class="hover:scale-110 transition"
                >
                    <Icon icon="logos:github-icon" width="24" />
                </a>

                <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn" 
                    class="hover:scale-110 transition"
                >
                    <Icon icon="logos:linkedin-icon" width="24" />
                </a>

                <a 
                    href="mailto:lazareplacide02@gmail.com" 
                    title="Email" 
                    class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:scale-110 transition"
                >
                    <Icon icon="mdi:email-outline" width="24" />
                </a>
            </div>
        </div>

        <!-- Copyright -->
        <div class="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
            <p class="text-xs text-slate-500 dark:text-slate-400">
                &copy; {{ new Date().getFullYear() }} Lazare Placide Andriatahina. {{ $t('footer.rights') }}
            </p>
        </div>
    </footer>
</template>

<script setup>
import { Icon, addCollection } from '@iconify/vue/offline'
import logos from '@iconify-json/logos/icons.json'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(logos)
addCollection(mdi)
</script>
