<template>
    <div
        id="projects"
        class="px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:p-20 bg-slate-50 dark:bg-slate-900/60 max-w-7xl mx-auto"
    >
        <!-- TITRE -->
        <div class="mb-6">
            <h2 class="inline-block text-3xl sm:text-4xl font-bold underline decoration-slate-300 dark:decoration-slate-600 underline-offset-8">
                {{ $t('projects.title') }}
            </h2>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
                {{ $t('projects.subtitle') }}
            </p>
        </div>

        <!-- BOUTONS DE FILTRAGE (Desktop, Website, Mobile, Tous) -->
        <div class="flex flex-wrap items-center gap-2 sm:gap-3 my-8">
            <button
                @click="selectedCategory = 'all'"
                type="button"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all cursor-pointer"
                :class="selectedCategory === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'"
            >
                <Icon icon="mdi:view-grid-outline" width="18" />
                <span>{{ $t('projects.filters.all') }}</span>
                <span class="text-xs px-1.5 py-0.5 rounded-full" :class="selectedCategory === 'all' ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'">
                    {{ projects.length }}
                </span>
            </button>

            <!-- BOUTON DESKTOP -->
            <button
                @click="selectedCategory = 'desktop'"
                type="button"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all cursor-pointer"
                :class="selectedCategory === 'desktop'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'"
            >
                <Icon icon="mdi:monitor" width="18" />
                <span>{{ $t('projects.filters.desktop') }}</span>
                <span class="text-xs px-1.5 py-0.5 rounded-full" :class="selectedCategory === 'desktop' ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'">
                    {{ countByCategory('desktop') }}
                </span>
            </button>

            <!-- BOUTON WEBSITE -->
            <button
                @click="selectedCategory = 'website'"
                type="button"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all cursor-pointer"
                :class="selectedCategory === 'website'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'"
            >
                <Icon icon="mdi:web" width="18" />
                <span>{{ $t('projects.filters.website') }}</span>
                <span class="text-xs px-1.5 py-0.5 rounded-full" :class="selectedCategory === 'website' ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'">
                    {{ countByCategory('website') }}
                </span>
            </button>

            <!-- BOUTON MOBILE -->
            <button
                @click="selectedCategory = 'mobile'"
                type="button"
                class="flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all cursor-pointer"
                :class="selectedCategory === 'mobile'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'"
            >
                <Icon icon="mdi:cellphone" width="18" />
                <span>{{ $t('projects.filters.mobile') }}</span>
                <span class="text-xs px-1.5 py-0.5 rounded-full" :class="selectedCategory === 'mobile' ? 'bg-slate-700 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'">
                    {{ countByCategory('mobile') }}
                </span>
            </button>
        </div>

        <!-- LISTE DES PROJETS -->
        <div v-if="filteredProjects.length > 0" class="mt-8 space-y-12 z-0">
            <div
                v-for="project in filteredProjects"
                :key="project.id"
                class="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-900 rounded-xl shadow-xs border dark:border-slate-800 overflow-hidden border-slate-200"
            >
                <!-- CARROUSEL IMAGES -->
                <div class="lg:col-span-8 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-50 dark:bg-slate-800/80 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                    <Swiper
                        :modules="[Navigation, Pagination, Autoplay]"
                        :navigation="true"
                        :pagination="{ clickable: true }"
                        :autoplay="{
                            delay: 3500,
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
                                class="max-w-full max-h-full object-contain rounded"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <!-- INFORMATIONS PROJET -->
                <div class="lg:col-span-4 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        <!-- EN-TETE PROJET & CATEGORIE -->
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
                                {{ $t('projects.project') }} {{ project.id }}
                            </span>

                            <span
                                class="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full font-medium"
                                :class="project.category === 'desktop'
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                                    : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'"
                            >
                                {{ project.category === 'desktop' ? 'Desktop' : 'Website' }}
                            </span>
                        </div>

                        <!-- TITRE -->
                        <h3 class="text-2xl sm:text-3xl font-semibold mt-3 text-slate-900 dark:text-white">
                            {{ project.titleKey ? $t(project.titleKey) : project.title }}
                        </h3>

                        <!-- DESCRIPTION -->
                        <p class="text-slate-600 text-sm leading-relaxed dark:text-slate-300 mt-4">
                            {{ $t(project.description) }}
                        </p>

                        <!-- TECHNOLOGIES -->
                        <div v-if="project.technologies?.length" class="mt-6">
                            <p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold">
                                {{ $t('projects.technologies') }}
                            </p>

                            <div class="flex flex-wrap gap-2">
                                <div
                                    v-for="technology in project.technologies"
                                    :key="technology.name"
                                    class="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800 shadow-2xs"
                                >
                                    <Icon :icon="technology.icon" width="16" />
                                    <span class="text-xs text-slate-700 dark:text-slate-200 font-medium">
                                        {{ technology.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BOUTONS D'ACTION PROJET -->
                    <div class="flex flex-col sm:flex-row lg:flex-col gap-2.5 mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <!-- BOUTON SITE WEB / DEMO -->
                        <a
                            v-if="project.category === 'website' && project.demo"
                            :href="project.demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded text-xs sm:text-sm font-medium hover:opacity-90 transition text-center shadow-xs"
                        >
                            <Icon icon="mdi:earth" width="16" />
                            <span>{{ $t('projects.demo') }}</span>
                        </a>

                        <!-- BOUTON DESKTOP APP -->
                        <a
                            v-if="project.category === 'desktop'"
                            :href="project.demo || '#'"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded text-xs sm:text-sm font-medium hover:opacity-90 transition text-center shadow-xs"
                        >
                            <Icon icon="mdi:monitor-dashboard" width="16" />
                            <span>{{ $t('projects.desktop_btn') }}</span>
                        </a>

                        <!-- BOUTON CODE SOURCE -->
                        <a
                            :href="project.github"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 px-4 py-2.5 rounded text-xs sm:text-sm font-medium text-slate-800 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 transition text-center"
                        >
                            <Icon icon="logos:github-icon" width="16" />
                            <span>{{ $t('projects.source') }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- ETAT VIDE SI AUCUN PROJET DANS LA CATEGORIE -->
        <div
            v-else
            class="mt-12 p-12 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
        >
            <Icon icon="mdi:folder-open-outline" width="48" class="mx-auto text-slate-400 mb-4" />
            <p class="text-slate-600 dark:text-slate-400 text-base">
                {{ $t('projects.empty') }}
            </p>
            <button
                @click="selectedCategory = 'all'"
                type="button"
                class="mt-4 px-4 py-2 text-xs sm:text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded font-medium cursor-pointer"
            >
                {{ $t('projects.filters.all') }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Icon, addCollection } from '@iconify/vue/offline'
import logos from '@iconify-json/logos/icons.json'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(logos)
addCollection(mdi)

import projects from '../data/projects'

const selectedCategory = ref('all')

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return projects
    }
    return projects.filter(p => p.category === selectedCategory.value)
})

const countByCategory = (cat) => {
    return projects.filter(p => p.category === cat).length
}
</script>

<style>
/* ========================= */
/* SWIPER RESPONSIVE HEIGHT */
/* ========================= */

.project-swiper {
    width: 100%;
    height: 240px;
    border-radius: 0.5rem;
}

@media (min-width: 640px) {
    .project-swiper {
        height: 320px;
    }
}

@media (min-width: 1024px) {
    .project-swiper {
        height: 440px;
    }
}

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
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    color: #0f172a;
    padding: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s, background-color 0.2s;
}

.project-swiper .swiper-button-next:hover,
.project-swiper .swiper-button-prev:hover {
    background: #ffffff;
    transform: scale(1.08);
}

.project-swiper .swiper-button-next::after,
.project-swiper .swiper-button-prev::after {
    font-size: 14px;
    font-weight: bold;
}

/* ========================= */
/* PAGINATION */
/* ========================= */

.project-swiper .swiper-pagination-bullet {
    background: #94a3b8;
    opacity: 0.6;
    transition: all 0.2s;
}

.project-swiper .swiper-pagination-bullet-active {
    background: #0f172a;
    opacity: 1;
    width: 18px;
    border-radius: 4px;
}

.dark .project-swiper .swiper-pagination-bullet-active {
    background: #ffffff;
}
</style>
