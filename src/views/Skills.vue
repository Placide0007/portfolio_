<template>
    <div id="skills" class="px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:p-20 max-w-7xl mx-auto">
        <div class="mb-10 text-left">
            <h2 class="inline-block text-3xl sm:text-4xl font-bold underline decoration-slate-300 dark:decoration-slate-600 underline-offset-8">
                {{ $t('skills.title') }}
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <!-- Frameworks & Bibliothèques -->
            <div class="py-2">
                <h3 class="my-4 font-semibold text-lg sm:text-xl text-left underline border-slate-200 dark:border-slate-700 decoration-slate-300">
                    {{ $t('skills.frameworks') }}
                </h3>

                <div class="grid grid-cols-3 gap-6 sm:gap-8 justify-items-start">
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:laravel" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Laravel</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:vue" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Vue.js</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:qt" width="35" />
                        <p class="text-xs sm:text-sm font-medium">PySide6</p>
                    </div>
                    
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:django-icon" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Django</p>
                    </div>
                    
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:tailwindcss-icon" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Tailwind CSS</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:react" width="35" />
                        <p class="text-xs sm:text-sm font-medium">React</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:bootstrap" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Bootstrap</p>
                    </div>
                </div>
            </div>

            <!-- Langages de programmation -->
            <div class="py-2">
                <h3 class="my-4 font-semibold text-lg sm:text-xl text-left md:text-right underline border-slate-200 dark:border-slate-700 decoration-slate-300">
                    {{ $t('skills.languages') }}
                </h3>

                <div class="grid grid-cols-3 gap-6 sm:gap-8 justify-items-start md:justify-items-end">
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:html-5" width="35" />
                        <p class="text-xs sm:text-sm font-medium">HTML5</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:css-3" width="35" />
                        <p class="text-xs sm:text-sm font-medium">CSS3</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:javascript" width="35" />
                        <p class="text-xs sm:text-sm font-medium">JavaScript</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:python" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Python</p>
                    </div>
                    
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:php" width="40" />
                        <p class="text-xs sm:text-sm font-medium">PHP</p>
                    </div>
                </div>
            </div>

            <!-- Outils de développement & base de données -->
            <div class="py-2">
                <h3 class="my-4 font-semibold text-lg sm:text-xl text-left underline border-slate-200 dark:border-slate-700 decoration-slate-300">
                    {{ $t('skills.tools') }}
                </h3>

                <div class="grid grid-cols-3 gap-6 sm:gap-8 justify-items-start">
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:git-icon" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Git</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:mysql" width="45" />
                        <p class="text-xs sm:text-sm font-medium">MySQL</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:github-icon" width="35" />
                        <p class="text-xs sm:text-sm font-medium">GitHub</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:visual-studio-code" width="35" />
                        <p class="text-xs sm:text-sm font-medium">VS Code</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="logos:insomnia" width="35" />
                        <p class="text-xs sm:text-sm font-medium">Insomnia</p>
                    </div>
                </div>
            </div>

            <!-- Conception & modélisation -->
            <div class="py-2">
                <h3 class="my-4 font-semibold text-lg sm:text-xl text-left md:text-right underline border-slate-200 dark:border-slate-700 decoration-slate-300">
                    {{ $t('skills.design') }}
                </h3>

                <div class="grid grid-cols-3 gap-6 sm:gap-8 justify-items-start md:justify-items-end">
                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="mdi:sitemap-outline" width="35" class="text-slate-800 dark:text-slate-200" />
                        <p class="text-xs sm:text-sm font-medium">UML</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="mdi:database-cog-outline" width="35" class="text-slate-800 dark:text-slate-200" />
                        <p class="text-xs sm:text-sm font-medium">MERISE</p>
                    </div>

                    <div class="flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
                        <Icon icon="mdi:vector-square" width="35" class="text-slate-800 dark:text-slate-200" />
                        <p class="text-xs sm:text-sm font-medium text-center">Visual Paradigm</p>
                    </div>
                </div>
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
