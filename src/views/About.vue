<template>
    <div
        id="about"
        class="flex justify-center items-center p-20
        bg-linear-to-br from-yellow-50 via-white to-green-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
        dark:text-white"
    >
        <div class="max-w-250 flex flex-col gap-3">

            <h1 class="text-6xl">
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
                    class="bg-slate-900 text-gray-100 p-2 rounded
                    dark:bg-white dark:text-slate-900"
                >
                    {{ $t('hero.projects') }}
                </a>

                <a
                    href=""
                    class="border border-slate-500 p-2 rounded bg-white
                    dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                >
                    {{ $t('hero.download_cv') }}
                </a>

                <a href="">
                    <Icon icon="logos:github-icon" width="30" />
                </a>
            </div>

        </div>
    </div>
</template>