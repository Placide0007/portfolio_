<template>
    <!-- apropos de moi  -->
    <section id="about" class="p-10 md:h-screen bg-gradient-to-l from-slate-900 to-slate-950 text-white">
        <div id="jumbotrons-description-container" class="flex gap-3 flex-col py-10" data-aos="fade-down">
            <p class="text-center text-3xl font-semibold">A propos de moi</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="border-slate-900 p-5 rounded  cursor-pointer bg-slate-800"
                data-aos="fade-up">
                <p>
                    Je suis un développeur passionné et attentif aux détails, originaire de
                    Madagascar. J'aime transformer les idées en projets fonctionnels et
                    élégants.
                </p>
            </div>

            <div class="border-slate-900 p-5 rounded  cursor-pointer bg-slate-800"
                data-aos="fade-up" data-aos-delay="100">
                <p>
                    Titulaire d'une Licence en Informatique à l’Université de Toamasina, je
                    suis passionné par le développement web et j’ai acquis de solides
                    compétences grâce à ma formation.
                </p>
            </div>

            <div class="border-slate-900 p-5 rounded  cursor-pointer bg-slate-800"
                data-aos="fade-up" data-aos-delay="200">
                <p>
                    Je conçois des interfaces modernes et responsives avec VueJS, React.js,
                    Tailwind CSS, Bootstrap , HTML , CSS et JavaScript. Je m'applique à créer
                    des expériences web propres, accessibles et conviviales.
                </p>
            </div>

            <div class="border-slate-900 p-5 rounded  cursor-pointer bg-slate-800"
                data-aos="fade-up" data-aos-delay="300">
                <p>
                    Toujours à l’écoute des dernières tendances technologiques, je
                    m'efforce d'améliorer continuellement mes compétences pour offrir des
                    solutions innovantes et performantes.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
    AOS.init({
        duration: 800,
        once: true,
    });
});
</script>
