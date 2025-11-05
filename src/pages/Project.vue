<template>
    <!-- section projet  -->
    <section id="my_projects" class="p-10">
        <div class="flex gap-3 flex-col py-10">
            <p class="text-center text-3xl">Mes projets</p>
        </div>

        <div id="projects" class="grid grid-cols-1  gap-5">

            <div class="card border-slate-900 border p-3 rounded-xl" v-for="(project, index) in projects" :key="index">
                <div class="card-header py-3">
                    <p class="font-semibold text-3xl mb-5">{{ project.title }}</p>
                    <p>{{ project.description }}</p>
                </div>

                <div class="card-body">
                    <div :ref="el => splides[index] = el" class="splide">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="splide__slide flex justify-center items-center"
                                    v-for="(img, idx) in project.images" :key="idx">
                                    <img :src="img" alt="image" class="rounded max-h-[900px] object-fill" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 py-5">
                    <div v-for="(tech, tIdx) in project.techs" :key="tIdx"
                        class="flex bg-slate-800 justify-center items-center border-xs rounded text-xs  py-1 text-center">
                        {{ tech }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import Splide from '@splidejs/splide'
    import '@splidejs/splide/dist/css/splide.min.css'

    import dashboardImg from '../assets/e-commerce/dashboard.png'
    import categoriesImg from '../assets/e-commerce/categories.png'
    import homeImg from '../assets/e-commerce/home.png'
    import aboutImg from '../assets/e-commerce/about.png'
    import panierImg from '../assets/e-commerce/panier.png'
    import profileImg from '../assets/e-commerce/profile.png'
    import usersImg from '../assets/e-commerce/users.png'
    import productsImg from '../assets/e-commerce/products.png'


    import bbooks from '../assets/library/books.png'
    import bcategories from '../assets/library/categories.png'
    import bemprunts from '../assets/library/emprunts.png'
    import bhome from '../assets/library/home.png'
    import blogin from '../assets/library/login.png'
    import bnew_book from '../assets/library/new-book.png'
    import breservation from '../assets/library/reservation.png'
    import busers from '../assets/library/users.png'

    import mhome from '../assets/mini_blog/about.png'
    import mdetails from '../assets/mini_blog/details.png'
    import mforum from '../assets/mini_blog/forum.png'
    import mlogin from '../assets/mini_blog/login.png'
    import mlogout from '../assets/mini_blog/logout.png'
    import mpost_creation from '../assets/mini_blog/post_creation.png'
    import mregister from '../assets/mini_blog/register.png'

    import landing from '../assets/portfolio/landing.png'
    import competence from '../assets/portfolio/competence.png'
    import projet from '../assets/portfolio/projet.png'

    import accueil from '../assets/agr/accueil.png'
    import ajumbotron from '../assets/agr/jumbotron.png'
    import ajumbotron2 from '../assets/agr/jumbotron2.png'
    import alogin from '../assets/agr/login.png'
    import aregister from '../assets/agr/register.png'

    import dashboad_ from '../assets/stock_management/dashboard.png'
    import products from '../assets/stock_management/products.png'
    import suppliers from '../assets/stock_management/suppliers.png'
    import reviews from '../assets/stock_management/reviews.png'
    import categories from '../assets/stock_management/categories.png'
    
    const projects = [
        {
            title: 'Stock management',
            description: 'Une application de gestion de stock, réalisée avec Python et PySide6, utilisant une base de données XML pour le stockage des informations produits, fournisseurs et catégories.L’application offre un tableau de bord interactif permettant de visualiser les statistiques clés (nombre de produits, valeur totale du stock, fournisseurs, catégories) à travers des graphiques dynamiques et une interface moderne et intuitive.',
            images: [dashboad_, products, suppliers, reviews, categories],
            techs: ['Python','xml','PySide6','matplotlib']
        },
        {
            title: 'E-commerce',
            description: 'Projet de gestion des composants PC permettant de suivre et organiser le matériel via une interface simple développée avec Laravel 12, HTML, CSS et JavaScript. (Pas encore responsive)',
            images: [dashboardImg, categoriesImg, homeImg, aboutImg, panierImg, profileImg, productsImg, usersImg],
            techs: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Mysql', 'ChartJs']
        },
        {
            title: 'PortFolio',
            description: 'Portfolio personnel développé avec Vue.js et Tailwind CSS pour présenter mes projets, compétences et expériences de manière professionnelle et responsive',
            images: [landing, competence, projet],
            techs: ['Vue.js', 'tailwindcss', 'splidejs','AnimateCss','AOS']
        },
        {
            title: 'Agrikult',
            description: 'Développeur Front-End d’une application collaborative de partage de ressources culturelles, en collaboration avec deux coéquipiers. (Projet en cours de développement) )',
            images: [accueil, ajumbotron, ajumbotron2, alogin, aregister],
            techs: ['ReactJs', 'TailwindCss', 'SpringBoot', 'Mysql']
        },
        {
            title: 'Bibliothèque en ligne',
            description: 'Application web de gestion de bibliothèque permettant aux utilisateurs de consulter le catalogue, emprunter et réserver des livres en ligne.Elle offre une interface claire et intuitive, développée avec Vue.js, HTML5 et CSS3, assurant une navigation fluide et une expérience utilisateur agréable sur tous types d’appareils.Le projet comprend également une section administrateur permettant de gérer les ouvrages, les utilisateurs et les réservations, tout en mettant l’accent sur la simplicité d’utilisation et la modularité du code grâce aux composants Vue.js.',
            images: [bbooks, bcategories, bemprunts, bhome, blogin, bnew_book, breservation, busers],
            techs: ['HTML', 'CSS', 'Vue.js', 'Laravel', 'Mysql', 'tailwindcss']
        },

        {
            title: 'Mini Blog',
            description: 'Application de partage des ressources creer avec Vue.js, HTML , CSS et Bootstrap5',
            images: [mhome, mforum, mlogout, mlogin, mregister, mpost_creation, mdetails],
            techs: ['HTML', 'CSS', 'Vue.js', 'Laravel', 'Mysql', 'bootstrap5']
        },
    ]

    const splides = []

    onMounted(() => {
        splides.forEach((el) => {
            if (el) {
                new Splide(el, {
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    interval: 2000,
                    pauseOnHover: true,
                    arrows: true,
                    pagination: true,
                }).mount()
            }
        })
    })
</script>