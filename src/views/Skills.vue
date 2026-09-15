<template>
      <div id="skills" class="p-20">
        <button class="p-2 rounded underline text-4xl">{{ $t('skills.title') }}</button>

        <div class="grid grid-cols-2 gap-5">

            <div class="py-5">

                <h2 class="my-5 font-semibold text-xl text-left underline border-slate-200">
                    {{ $t('skills.frameworks') }}
                </h2>

                <div class="grid grid-cols-3 gap-10 justify-items-start">
                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:laravel" width="35" />
                        <p class="text-sm">Laravel</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:vue" width="35" />
                        <p class="text-sm">Vuejs</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:qt" width="35" />
                        <p class="text-sm">Pyside6</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:django" width="50" />
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:tailwindcss" width="95" />
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:react" width="35" />
                        <p class="text-sm">React</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:bootstrap" width="35" />
                        <p class="text-sm">Bootstrap</p>
                    </button>
                </div>
            </div>


            <!-- langages de programmation -->

            <div class="py-5">

                <h2 class="my-5 font-semibold text-xl text-right underline border-slate-200">
                    {{ $t('skills.languages') }}
                </h2>

                <div class="grid grid-cols-3 gap-10 justify-items-end">
                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:html-5" width="35" />
                        <p class="text-sm">HTML</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:css-3" width="35" />
                        <p class="text-sm">CSS3</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:javascript" width="35" />
                        <p class="text-sm">javascript</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:python" width="35" />
                        <p class="text-sm">Python</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:php" width="45" />
                        <p class="text-sm">Php</p>
                    </button>
                </div>
            </div>


            <!-- outils de developpment et base de donnee -->

            <div class="py-5">

                <h2 class="my-5 font-semibold text-xl text-left underline border-slate-200">
                    {{ $t('skills.tools') }}
                </h2>

                <div class="grid grid-cols-3 gap-10 justify-items-start">
                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:git" width="60" />
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:mysql" width="60" />
                        <p class="text-sm"></p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:github-icon" width="35" />
                        <p class="text-sm">GitHub</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:visual-studio-code" width="35" />
                        <p class="text-sm">VSCode</p>
                    </button>

                    <button class="flex justify-center items-center flex-col">
                        <Icon icon="logos:insomnia" width="35" />
                        <p class="text-sm">insomnia</p>
                    </button>
                </div>
            </div>


            <!-- conception et modelisation -->

            <div class="py-5">

                <h2 class="my-5 font-semibold text-xl text-right underline border-slate-200">
                    {{ $t('skills.design') }}
                </h2>

                <div class="grid grid-cols-3 justify-items-end">
                    <button class="flex flex-col items-center gap-2">
                        <Icon icon="mdi:sitemap-outline" width="35" />
                        <p class="text-sm">UML</p>
                    </button>

                    <button class="flex flex-col items-center gap-2">
                        <Icon icon="mdi:database-cog-outline" width="35" />
                        <p class="text-sm">MERISE</p>
                    </button>

                    <button class="flex flex-col items-center gap-2">
                        <Icon icon="mdi:vector-square" width="35" />
                        <p class="text-sm">Visual Paradigm</p>
                    </button>
                </div>
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