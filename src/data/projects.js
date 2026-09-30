import dashboard from '../assets/e_commerce/dashboard.png'
import home from '../assets/e_commerce/home.png'
import cart from '../assets/e_commerce/cart.png'
import orders_admin from '../assets/e_commerce/orders admin.png'
import orders_view from '../assets/e_commerce/orders view.png'
import users from '../assets/e_commerce/users.png'

import home_ from '../assets/fst_screenshoot/home.png'
import blog_ from '../assets/fst_screenshoot/blog.png'
import show_ from '../assets/fst_screenshoot/show.png'
import about_ from '../assets/fst_screenshoot/about.png'

import light from '../assets/portfolio/light.png'
import dark from '../assets/portfolio/dark.png'
import projects_ from '../assets/portfolio/projects.png'




const projects = [

    {
        id: '01',

        title: 'E-commerce',

        description: 'projects.ecommerce',

        images: [
            home,
            dashboard,
            cart,
            orders_admin,
            orders_view,
            users
        ],

        technologies: [
            {
                name: 'Laravel',
                icon: 'logos:laravel'
            },
            {
                name: 'Tailwind CSS',
                icon: 'logos:tailwindcss-icon'
            },
            {
                name: 'SQLite',
                icon: 'vscode-icons:file-type-sqlite'
            }
        ],

        github: '#',

        demo: '#'
    },


    {
        id: '02',

        title: 'FST',

        description: 'projects.sales',

        view: 'projects.view',

        images: [
            home_,
            blog_,
            show_,
            about_
        ],

        technologies: [
            {
                name: 'Django',
                icon: 'logos:django-icon'
            },
            {
                name: 'Python',
                icon: 'logos:python'
            },
            {
                name: 'Tailwind CSS',
                icon: 'logos:tailwindcss-icon'
            },
            {
                name: 'SQLite',
                icon: 'vscode-icons:file-type-sqlite'
            }
        ],

        github: '#',

        demo: '#'
    },


    {
        id: '03',

        title: 'Mon Portfolio',

        description: 'projects.portfolio',

        images: [
            light,
            dark,
            projects_
        ],

        technologies: [
            {
                name: 'Vue.js',
                icon: 'logos:vue'
            },
            {
                name: 'Tailwind CSS',
                icon: 'logos:tailwindcss-icon'
            },
            {
                name: 'JavaScript',
                icon: 'logos:javascript'
            },
            {
                name: 'Vite',
                icon: 'logos:vitejs'
            }
        ],

        github: '#',

        demo: '#'
    }

]

export default projects

