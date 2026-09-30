<template>

    <div
        id="projects"
        class="p-20 bg-slate-50 dark:bg-slate-900"
    >

        <!-- TITRE -->

        <button class="p-2 rounded underline text-4xl">
            {{ $t('projects.title') }}
        </button>


        <!-- PROJETS -->

        <div class="mt-10 space-y-10 z-0">

            <div
                v-for="project in projects"
                :key="project.id"
                class="grid grid-cols-1 lg:grid-cols-12 z-0 bg-white dark:bg-slate-900 rounded shadow-xs border dark:border-slate-800 overflow-hidden border-slate-200"
            >

                <!-- IMAGES -->
    
                <div
                    class="lg:col-span-8 flex items-center justify-center p-6 md:p-12 bg-slate-50 dark:bg-slate-800"
                >

                    <Swiper
                        :modules="[Navigation, Pagination, Autoplay]"
                        :navigation="true"
                        :pagination="{ clickable: true }"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false
                        }"
                        :slides-per-view="1"
                        :loop="true"
                        class="project-swiper"
                    >

                        <SwiperSlide
                            v-for="(image, index) in project.images"
                            :key="index"
                            class="flex items-center justify-center"
                        >

                            <img
                                :src="image"
                                :alt="`${project.title} - Image ${index + 1}`"
                                class="max-w-full max-h-full object-contain"
                            />

                        </SwiperSlide>

                    </Swiper>

                </div>


    
                <!-- INFORMATIONS -->
    

                <div
                    class="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center"
                >

                    <!-- NUMERO -->

                    <span
                        class="text-sm uppercase tracking-[0.2em] text-gray-400"
                    >
                        {{ $t('projects.project') }} {{ project.id }}
                    </span>


                    <!-- TITRE -->

                    <h1
                        class="text-4xl font-semibold mt-4 text-slate-900 dark:text-white"
                    >
                        {{ project.title }}
                    </h1>


                    <!-- DESCRIPTION -->

                    <p
                        class="text-gray-600 text-sm leading-7 dark:text-gray-300 mt-8"
                    >
                        {{ $t(project.description) }}
                    </p>


        
                    <!-- TECHNOLOGIES -->
        

                    <div
                        v-if="project.technologies?.length"
                        class="mt-8"
                    >

                        <!-- TITRE -->

                        <p
                            class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4"
                        >
                            {{ $t('projects.technologies') }}
                        </p>


                        <!-- TECHNOLOGIES -->

                        <div class="flex flex-wrap gap-2">

                            <div
                                v-for="technology in project.technologies"
                                :key="technology.name"
                                class="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800"
                            >

                                <Icon
                                    :icon="technology.icon"
                                />

                                <span
                                    class="text-xs text-slate-700 dark:text-slate-200"
                                >
                                    {{ technology.name }}
                                </span>

                            </div>

                        </div>

                    </div>


        
                    <!-- BOUTONS -->
        

                    <div class="flex flex-col gap-3 mt-10">

                        <!-- CODE SOURCE -->

                        <a
                            :href="project.github"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="border border-black dark:border-white px-6 py-3 text-center dark:text-white hover:bg-black hover:text-white transition"
                        >
                            {{ $t('projects.source') }}
                        </a>


                        <!-- DEMO -->

                        <a
                            :href="project.demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-black dark:text-slate-900 dark:bg-white text-white px-6 py-3 text-center hover:opacity-80 transition"
                        >
                            {{ $t('projects.demo') }}
                        </a>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>


<script setup>

// =========================
// SWIPER
// =========================

import { Swiper, SwiperSlide } from 'swiper/vue'

import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// =========================
// ICONIFY
// =========================

import { Icon, addCollection } from '@iconify/vue/offline'

import logos from '@iconify-json/logos/icons.json'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(logos)
addCollection(mdi)


// =========================
// PROJECTS
// =========================

import projects from '../data/projects'

</script>


<style>

/* ========================= */
/* SWIPER */
/* ========================= */

.project-swiper {
    width: 100%;
    height: 450px;
}


/* ========================= */
/* IMAGES */
/* ========================= */

.project-swiper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}


/* ========================= */
/* NAVIGATION */
/* ========================= */

.project-swiper .swiper-button-next,
.project-swiper .swiper-button-prev {
    width: 40px;
    height: 40px;

    background: white;
    border-radius: 50%;

    color: black;

    padding: 10px;
}


/* ========================= */
/* PAGINATION */
/* ========================= */

.project-swiper .swiper-pagination-bullet-active {
    background: black;
}

</style>
```

### Et ton `projects.js` doit avoir cette structure

```js
{
    id: '01',
    title: 'E-commerce',
    description: 'projects.ecommerce',

    images: [
        home,
        dashboard,
        cart,
        orders_admin,
        orders_view,
        users
    ],

    technologies: [
        {
            name: 'Laravel',
            icon: 'logos:laravel'
        },
        {
            name: 'Vue.js',
            icon: 'logos:vue'
        },
        {
            name: 'Tailwind CSS',
            icon: 'logos:tailwindcss-icon'
        },
        {
            name: 'MySQL',
            icon: 'logos:mysql'
        }
    ],

    github: '#',
    demo: '#'
}
```

Le point important est donc :

```vue
v-for="technology in project.technologies"
```

Chaque projet peut avoir **des technologies différentes**, et elles seront automatiquement affichées avec leur icône.
