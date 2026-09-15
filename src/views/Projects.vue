<template>
    <div id="projects" class="p-20 bg-slate-50">
        <button class="p-2 rounded underline text-4xl">{{ $t('projects.title') }}</button>

        <div class="mt-10">
            <div
                v-for="project in projects"
                :key="project.id"
                @click="openProject(project)"
                class="group flex items-center justify-between py-7 border-b border-slate-300 cursor-pointer hover:px-5 transition-all duration-300"
            >
                <div class="flex items-center gap-8">
                    <span class="text-sm text-gray-400">
                        {{ project.id }}
                    </span>
                    <h2 class="text-xl font-medium">
                        {{ project.title }}
                    </h2>
                </div>

                <span class="text-3xl font-bold group-hover:translate-x-1 p-1 rounded">
                    →
                </span>
            </div>
        </div>

        <!-- FULL SCREEN POPUP -->
        <Transition name="fullscreen">

            <div v-if="selectedProject" class="fixed inset-0 z-999 bg-white">

                <!-- HEADER -->
                <header class="flex items-center justify-between px-8 md:px-16 py-6 border-b border-slate-300">
                    <div class="flex items-center gap-5">
                        <span class="text-gray-400">
                            {{ selectedProject.id }}
                        </span>
                        <h2 class="text-xl font-semibold">
                            {{ selectedProject.title }}
                        </h2>
                    </div>

                    <button @click="closeProject" class="text-4xl leading-none hover:rotate-90 transition duration-300">
                        ×
                    </button>
                </header>

                <!-- CONTENU -->
                <main class="h-[calc(100vh-89px)] grid grid-cols-1 lg:grid-cols-12">

                    <div class="lg:col-span-8 flex items-center justify-center p-6 md:p-12 bg-slate-50">
                        <Swiper
                            :modules="[Navigation, Pagination]"
                            :navigation="true"
                            :pagination="{ clickable: true }"
                            :slides-per-view="1"
                            :loop="true"
                            class="fullscreen-swiper"
                        >
                            <SwiperSlide
                                v-for="(image, index) in selectedProject.images"
                                :key="index"
                                class="flex items-center justify-center"
                            >
                                <img :src="image" :alt="`${selectedProject.title} - Image ${index + 1}`"
                                   \ class="max-w-full max-h-full object-contain"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <!-- INFORMATIONS -->
                    <div class="lg:col-span-4 p-8 md:p-14 flex flex-col justify-center">

                        <span class="text-sm uppercase tracking-[0.2em] text-gray-400">
                            {{ $t('projects.project') }} {{ selectedProject.id }}
                        </span>

                        <h1 class="text-4xl md:text-5xl font-semibold mt-4">
                            {{ selectedProject.title }}
                        </h1>

                        <p class="text-gray-600 leading-7 mt-8">
                            {{ $t(selectedProject.description) }}
                        </p>

                        <div class="flex flex-col gap-3 mt-10">
                            <a :href="selectedProject.github" target="_blank" class="border border-black px-6 py-3 text-center hover:bg-black hover:text-white transition"
                            >
                                {{ $t('projects.source') }}
                            </a>

                            <a :href="selectedProject.demo"  target="_blank" class="bg-black text-white px-6 py-3 text-center hover:bg-gray-800 transition"
                            >
                                {{ $t('projects.demo') }}
                            </a>
                        </div>

                    </div>

                </main>

            </div>

        </Transition>

    </div>

</template>

<script setup>

    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation, Pagination } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import projects from '../data/projects'

    const selectedProject = ref(null)

    const openProject = (project) => selectedProject.value = project
    const closeProject = () => selectedProject.value = null

</script>

<style>
    .fullscreen-swiper {
        width: 100%;
        height: 100%;
    }

    .fullscreen-swiper img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .fullscreen-swiper .swiper-button-next,
    .fullscreen-swiper .swiper-button-prev {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        color: black;
        padding: 10px;
    }

    .fullscreen-swiper .swiper-pagination-bullet-active {
        background: black;
    }

    .fullscreen-enter-active,
    .fullscreen-leave-active {
        transition: opacity 0.35s ease;
    }

    .fullscreen-enter-from,
    .fullscreen-leave-to {
        opacity: 0;
    }
</style>

