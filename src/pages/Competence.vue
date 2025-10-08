<template>
    <!-- skills section -->
    <section id="skills" class="py-10 bg-slate-900 text-white">
        <div class="flex gap-3 flex-col py-5">
            <p class="text-center text-3xl font-semibold">Mes compétences</p>
        </div>

        <!-- mes competences -->
        <div id="skills-container" class="grid md:grid-cols-2 grid-cols-1 gap-6 md:px-10 p-3">
            
            <div id="programing-langage" class="border-slate-800 border rounded-lg p-5" data-aos="fade-up">
                <p class="p-3 text-lg font-medium flex items-center gap-2">
                    <i class="fa fa-code"></i>
                    Langages de Programmation
                </p>
                <div class="grid grid-cols-3 gap-10 p-5 place-content-center place-items-center">
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/html.svg" alt="HTML5" />
                        <p>HTML5</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/css.svg" alt="CSS3" />
                        <p>CSS3</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/javascript.svg" alt="JavaScript" />
                        <p>JavaScript</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/php.svg" alt="PHP" />
                        <p>PHP</p>
                    </button>
                </div>
            </div>

            <!-- Frameworks et bibliothèques -->
            <div id="frameworks" class="border-slate-800 border rounded-lg p-5" data-aos="fade-up" data-aos-delay="100">
                <p class="p-3 text-lg font-medium flex items-center gap-2">
                    <i class="fa fa-cubes"></i>
                    Frameworks et Libraries
                </p>
                <div class="grid grid-cols-3 gap-10 p-5 place-content-center place-items-center">
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/laravel.svg" alt="Laravel" />
                        <p>Laravel</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/vue.svg" alt="VueJs" />
                        <p>VueJs</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/bootstrap.svg" alt="Bootstrap5" />
                        <p>Bootstrap5</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/tailwindcss.svg" alt="TailwindCSS" />
                        <p>TailwindCSS</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/react.svg" alt="React Js" />
                        <p>React Js</p>
                    </button>
                </div>
            </div>

            <!-- Outils de développement -->
            <div id="programing-tools" class="border-slate-800 border rounded-lg p-5" data-aos="fade-up"
                data-aos-delay="200">
                <p class="p-3 text-lg font-medium flex items-center gap-2">
                    <i class="fa fa-server"></i>
                    Outils de développement et base de donnée
                </p>
                <div class="grid grid-cols-3 gap-10 p-5 place-content-center place-items-center">
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/git.svg" alt="Git" />
                        <p>Git</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/windows.svg" alt="Windows" />
                        <p>Windows</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/mysql.svg" alt="MySQL" />
                        <p>MySQL</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/vs-code.svg" alt="VSCode" />
                        <p>VSCode</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img class="w-[50px]" src="../assets/github.svg" alt="GitHub" />
                        <p>GitHub</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img class="w-[50px]" src="../assets/LogosInsomnia.svg" alt="insomnia" />
                        <p>Insomnia</p>
                    </button>
                    <button
                        class="w-[50px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img class="w-[50px]" src="../assets/paradigm.png" alt="paradigm" />
                        <p>Visual Paradigm</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from 'vue'
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    onMounted(() => {
        AOS.init({
            duration: 800,
            once: true,
        })
    })
</script>

