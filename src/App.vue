<template>
  <main id="top" class="flex min-h-screen flex-col">

    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>

    <div v-else>
      <Header />
      <section class="content grow">
        <Landing />
        <Competence />
        <About />
        <Project />
      </section>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Header from './partials/Header.vue'
import Footer from './partials/Footer.vue'
import Landing from './pages/Landing.vue'
import Competence from './pages/Competence.vue'
import About from './pages/About.vue'
import Project from './pages/Project.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 700)
})
</script>
