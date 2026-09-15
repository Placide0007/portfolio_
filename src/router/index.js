import BaseLayout from "../layouts/BaseLayout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: BaseLayout,

            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'about',
                    component: About
                },
                {
                    path: 'projects',
                    component: Projects
                },
                {
                    path: 'contact',
                    component: Contact
                },
                {
                    path: 'skills',
                    component: Skills
                },
            ]
        }
    ]
})

export default router
