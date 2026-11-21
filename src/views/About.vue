<template>
    <div id="about">
        <div class="max-w-4xl w-full flex flex-col gap-4 sm:gap-5">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {{ $t('hero.role') }}
            </h1>

            <p class="leading-relaxed sm:leading-8 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {{ $t('hero.introduction') }}
                <span class="font-semibold text-slate-900 dark:text-white">
                    {{ $t('hero.name') }}
                </span>.
                {{ $t('hero.description') }}
            </p>

            <div class="flex flex-wrap items-center gap-4 sm:gap-6 pt-3">
                <a
                    href="#projects"
                    class="bg-slate-900 text-gray-100 px-5 py-2.5 text-sm rounded
                    dark:bg-white dark:text-slate-900 hover:opacity-90 transition font-medium text-center shadow-sm"
                >
                    {{ $t('hero.projects') }}
                </a>

                <a
                    href="/cv.pdf"
                    download="CV_Lazare_Placide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="border border-slate-400 dark:border-slate-600 text-sm px-5 py-2.5 rounded bg-white
                    dark:bg-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition text-center shadow-xs"
                >
                    {{ $t('hero.download_cv') }}
                </a>

                <a 
                    href="https://github.com/Placide02" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    :title="$t('hero.github')"
                    class="hover:scale-110 transition p-1"
                >
                    <Icon icon="logos:github-icon" width="30" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon, addCollection } from '@iconify/vue/offline'
import logos from '@iconify-json/logos/icons.json'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(logos)
addCollection(mdi)
</script>
