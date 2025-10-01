<template>
    <!-- skills section -->
    <section id="skills">
        <div  class="flex gap-3 flex-col py-5">
            <p class="text-center text-3xl">Mes compétences</p>
        </div>

        <!-- mes competences -->
        <div id="skills-container" class="grid md:grid-cols-2 grid-1 gap-3 md:px-10 p-3">

            <!-- Langages de programmation -->
            <div id="programing-langage" class="border-gray-300 border">
                <p class="p-3"> <span><i class="fa fa-code"></i> </span> Langages de Programmation</p>
                <div class="grid grid-cols-3 gap-10 p-10 place-content-center">
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/html.svg" alt="" />
                        <p>HTML5</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/css.svg" alt="" />
                        <p>CSS3</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/javascript.svg" alt="" />
                        <p>javascript</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/php.svg" alt="" />
                        <p>PHP</p>
                    </button>
                </div>
            </div>

            <!-- Frameworks et bibliothèques -->
            <div id="programing-langage" class="border-gray-300 border">
                <p class="p-3"> <span><i class="fa fa-cubes"></i> </span> Frameworks et Libraries</p>
                <div class="grid grid-cols-3 gap-10 p-10 place-content-center">
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/laravel.svg" alt="" />
                        <p>Laravel</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/vue.svg" alt="" />
                        <p>VueJs</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/bootstrap.svg" alt="" />
                        <p>Bootstrap5</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/tailwindcss.svg" alt="" />
                        <p>tailwindcss</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/react.svg" alt="" />
                        <p>React Js</p>
                    </button>
                </div>
            </div>

            <!-- Outils de développement -->
            <div id="programing-tools" class="border-gray-100 border">
                <p class="p-3"> <span><i class="fa fa-server"></i></span> Outils de developpement et base de donnee</p>
                <div class="grid grid-cols-3 gap-10 p-10 place-content-center">
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/git.svg" alt="" />
                        <p>git</p>
                    </button>
                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/windows.svg" alt="" />
                        <p>Windows</p>
                    </button>

                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/mysql.svg" alt="" />
                        <p>Mysql</p>
                    </button>

                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img src="../assets/vs-code.svg" alt="" />
                        <p>VSCode</p>
                    </button>

                    <button
                        class="w-[70px] hover:-translate-y-2 duration-300 cursor-pointer flex justify-center items-center flex-col gap-1">
                        <img class="w-[50px]" src="../assets/github.svg" alt="" />
                        <p>Git hub</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>