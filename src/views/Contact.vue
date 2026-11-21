<template>
    <div id="contact" class="px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:p-20 max-w-5xl mx-auto">
        <!-- TITRE -->
        <div class="mb-10 text-left">
            <h2 class="inline-block text-3xl sm:text-4xl font-bold underline decoration-slate-300 dark:decoration-slate-600 underline-offset-8">
                {{ $t('contact.title') }}
            </h2>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
                {{ $t('contact.subtitle') }}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            <!-- COORDONNEES & INFOS -->
            <div class="md:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">
                        {{ $t('contact.info_title') }}
                    </h3>

                    <div class="space-y-5">
                        <div class="flex items-start gap-4">
                            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                                <Icon icon="mdi:email-outline" width="20" />
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    {{ $t('contact.email_label') }}
                                </p>
                                <a href="mailto:lazareplacide02@gmail.com" class="text-sm font-medium hover:underline text-slate-800 dark:text-slate-200 break-all">
                                    {{ $t('contact.email_value') }}
                                </a>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                                <Icon icon="mdi:map-marker-outline" width="20" />
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    {{ $t('contact.location') }}
                                </p>
                                <p class="text-sm font-medium text-slate-800 dark:text-slate-200">
                                    {{ $t('contact.location_value') }}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                                <Icon icon="mdi:clock-outline" width="20" />
                            </div>
                            <div>
                                <p class="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                                    {{ $t('contact.availability') }}
                                </p>
                                <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    {{ $t('contact.availability_value') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <router-link
                        to="/"
                        class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                    >
                        <Icon icon="mdi:arrow-left" width="16" />
                        <span>{{ $t('contact.back_home') }}</span>
                    </router-link>
                </div>
            </div>

            <!-- FORMULAIRE DE CONTACT -->
            <div class="md:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            {{ $t('contact.name') }}
                        </label>
                        <input
                            v-model="form.name"
                            type="text"
                            required
                            :placeholder="$t('contact.name_placeholder')"
                            class="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition"
                        />
                    </div>

                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            {{ $t('contact.email') }}
                        </label>
                        <input
                            v-model="form.email"
                            type="email"
                            required
                            :placeholder="$t('contact.email_placeholder')"
                            class="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition"
                        />
                    </div>

                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            {{ $t('contact.subject') }}
                        </label>
                        <input
                            v-model="form.subject"
                            type="text"
                            required
                            :placeholder="$t('contact.subject_placeholder')"
                            class="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition"
                        />
                    </div>

                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            {{ $t('contact.message') }}
                        </label>
                        <textarea
                            v-model="form.message"
                            rows="4"
                            required
                            :placeholder="$t('contact.message_placeholder')"
                            class="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition resize-none"
                        ></textarea>
                    </div>

                    <div v-if="submitted" class="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs sm:text-sm font-medium">
                        {{ $t('contact.success') }}
                    </div>

                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-semibold rounded-lg hover:opacity-90 transition cursor-pointer shadow-sm flex items-center justify-center gap-2"
                    >
                        <Icon icon="mdi:send-outline" width="16" />
                        <span>{{ isSubmitting ? $t('contact.sending') : $t('contact.send') }}</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Icon, addCollection } from '@iconify/vue/offline'
import mdi from '@iconify-json/mdi/icons.json'

addCollection(mdi)

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = () => {
    isSubmitting.value = true
    setTimeout(() => {
        isSubmitting.value = false
        submitted.value = true
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
        setTimeout(() => {
            submitted.value = false
        }, 5000)
    }, 600)
}
</script>
