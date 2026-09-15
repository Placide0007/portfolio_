<template>
    <div id="about" class="flex justify-center items-center  p-20 bg-linear-to-br from-yellow-50 via-white to-green-100">
        <div class="max-w-250 flex flex-col gap-3">
            
            <h1 class="text-6xl ">{{ $t('hero.role') }}</h1>

            <p class="leading-7 text-sm">
                {{ $t('hero.introduction') }}
                <span class="font-semibold">Lazare Placide Andriatahina</span>.
                {{ $t('hero.description') }}
            </p>

            <div class="flex gap-10">
                <a href="#projects" class="bg-slate-900 text-gray-100 p-2 rounded">{{ $t('hero.projects') }}</a>
                <a href="" class="border border-slate-500 p-2 rounded bg-white">{{ $t('hero.download_cv') }}</a>
                <a href=""><Icon icon="logos:github-icon" width="30" /></a>
            </div>
        </div>
    </div>
</template>

