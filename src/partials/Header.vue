<template>
    <header class="flex justify-between items-center px-5 py-3 z-40 shadow-xs shadow-slate-800 sticky top-0 bg-slate-950 ">

        <a class="font-semibold hover:-translate-y-1 duration-300  text-xl text-violet-400" href="#hero">Portfolio</a>

        <nav class="hidden md:flex gap-10">
            <router-link v-for="item in menuItems" :key="item.id" :to="`/#${item.id}`"
                class="hover:text-violet-400 transition" :class="{ active: activeSection === item.id }">
                {{ item.label }}
            </router-link>
        </nav>

        <div class="flex items-center gap-4">
            <a class="text-3xl hidden md:block hover:-translate-y-1 duration-300" href="https://github.com/Placide0007">
                <i class="fa fa-github"></i>
            </a>
            <button @click="toggleMenu" class="md:hidden cursor-pointer text-3xl focus:outline-none text-white">
                <i :class="menuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
            </button>
        </div>

        <nav v-if="menuOpen"
            class="absolute top-full left-0 w-full bg-slate-950 flex flex-col items-center gap-6 py-6 md:hidden z-50">
            <a href="#hero" class="text-white text-lg" @click="toggleMenu">Accueil</a>
            <a href="#skills" class="text-white text-lg" @click="toggleMenu">Competences</a>
            <a href="#about" class="text-white text-lg" @click="toggleMenu">A propos</a>
            <a href="#my_projects" class="text-white text-lg" @click="toggleMenu">Projets</a>
            <a href="#footer" class="text-white text-lg" @click="toggleMenu">Contact</a>
            <a href="https://github.com/Placide0007" class="text-3xl mt-4 hover:-translate-y-1 duration-300" @click="toggleMenu">
                <i class="fa fa-github"></i>
            </a>
        </nav>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const menuOpen = ref(false); 

    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
    };

    const menuItems = [
        { id: 'hero', label: 'Accueil' },
        { id: 'skills', label: 'Compétences' },
        { id: 'about', label: 'À propos' },
        { id: 'my_projects', label: 'Projets' },
        { id: 'footer', label: 'Contact' },
    ];

    const activeSection = ref(menuItems[0].id);

    function onScroll() {
        const scrollPos = window.scrollY + 200;

        for (let i = menuItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(menuItems[i].id);
            if (section && section.offsetTop <= scrollPos) {
                activeSection.value = menuItems[i].id;
                break;
            }
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll);
        onScroll();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    });
</script>
