<template>
  <main class="flex min-h-screen flex-col">
    <Header />
    <section class="content grow">
      <Landing/>
      <Competence/>
      <About/>
      <Project/>
    </section>
    <Footer />
  </main>
</template>

<script setup>
  import Header from './partials/Header.vue';
  import Footer from './partials/Footer.vue';
  import Landing from './pages/Landing.vue';
  import Competence from './pages/Competence.vue';
  import About from './pages/About.vue';
  import Project from './pages/Project.vue';
</script>
