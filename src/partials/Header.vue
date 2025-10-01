<template>
    <header class="flex justify-between items-center px-5 py-3 z-40 shadow-xs sticky top-0 bg-slate-950 shadow-white">
        <p class="font-semibold text-xl text-violet-400">Portfolio</p>

        <nav class="hidden md:flex gap-10">
            <router-link to="#hero" class="hover:text-violet-400 transition">Accueil</router-link>
            <router-link to="#about" class="hover:text-violet-400 transition">A propos</router-link>
            <router-link to="#skills" class="hover:text-violet-400 transition">Competences</router-link>
            <router-link to="#my_projects" class="hover:text-violet-400 transition">Projets</router-link>
            <router-link to="#footer" class="hover:text-violet-400 transition">Contact</router-link>
        </nav>

        <div class="flex items-center gap-4">
            <a class="text-3xl hidden md:block" href="">
                <i class="fa fa-github"></i>
            </a>
            <button @click="toggleMenu" class="md:hidden cursor-pointer text-3xl focus:outline-none text-white">
                <i :class="menuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
            </button>
        </div>

        <nav v-if="menuOpen"
            class="absolute top-full left-0 w-full bg-slate-950 flex flex-col items-center gap-6 py-6 md:hidden z-50">
            <a href="" class="text-white text-lg" @click="toggleMenu">Accueil</a>
            <a href="#skills" class="text-white text-lg" @click="toggleMenu">Competences</a>
            <a href="" class="text-white text-lg" @click="toggleMenu">A propos</a>
            <a href="" class="text-white text-lg" @click="toggleMenu">Projets</a>
            <a href="" class="text-white text-lg" @click="toggleMenu">Contact</a>
            <a href="" class="text-3xl mt-4" @click="toggleMenu">
                <i class="fa fa-github"></i>
            </a>
        </nav>
    </header>
</template>

<script setup>
    import { ref } from 'vue';

    const menuOpen = ref(false);

    function toggleMenu() {
        menuOpen.value = !menuOpen.value;
    }
</script>
