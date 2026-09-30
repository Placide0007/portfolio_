<template>
    <div id="about">

        <div class="max-w-220 flex flex-col gap-3">

            <h1 class="text-[45px]">
                {{ $t('hero.role') }}
            </h1>

            <p class="leading-7 text-sm text-slate-600 dark:text-slate-300">
                {{ $t('hero.introduction') }}
                <span class="font-semibold text-slate-900 dark:text-white">
                    Lazare Placide Andriatahina
                </span>.
                {{ $t('hero.description') }}
            </p>

            <div class="flex gap-10">
                <a
                    href="#projects"
                    class="bg-slate-900 text-gray-100 p-2 text-sm rounded
                    dark:bg-white dark:text-slate-900"
                >
                    {{ $t('hero.projects') }}
                </a>

                <a
                    href="../assets/cv.pdf"
                    class="border border-slate-500 text-sm p-2 rounded bg-white
                    dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                >
                    {{ $t('hero.download_cv') }}
                </a>

                <a href="">
                    <Icon icon="logos:github-icon" width="30"/>
                </a>
            </div>

        </div>
    </div>
</template>
<script setup >
    import { Icon, addCollection } from '@iconify/vue/offline'
    import logos from '@iconify-json/logos/icons.json'
    import mdi from '@iconify-json/mdi/icons.json'
    addCollection(logos)
    addCollection(mdi)
</script>