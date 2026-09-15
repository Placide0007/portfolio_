<template>
    <footer id="footer" class="border-t border-slate-200 px-20 py-8">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="font-semibold text-xl">Placide_dev</h2>
                <p class="text-sm text-gray-500">
                    {{ $t('footer.role') }}
                </p>
            </div>

            <div class="flex gap-5">
                <a href="#" class="hover:scale-110 transition">
                    <Icon icon="logos:github-icon" width="25" />
                </a>

                <a href="#" class="hover:scale-110 transition">
                    <Icon icon="logos:linkedin-icon" width="25" />
                </a>

                <a href="#" class="text-gray-600 hover:text-black transition">
                    <Icon icon="mdi:email-outline" width="25" />
                </a>
            </div>
        </div>

        <p class="text-xs text-gray-600 mt-8">
            &copy; 2026 Lazare Placide Andriatahina.
            {{ $t('footer.rights') }}
        </p>
    </footer>
</template>

<script setup>
    import { Icon } from '@iconify/vue/offline'
</script>

