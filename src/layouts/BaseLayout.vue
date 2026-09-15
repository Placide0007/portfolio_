<template>
    <main class="flex flex-col min-h-screen" >
        <Header/>
        <div class="content grow">
            <RouterView/>
        </div>
        <Footer/>
    </main>
</template>
<script setup >
    import Footer from '../components/Footer.vue';
    import Header from '../components/Header.vue';
</script>