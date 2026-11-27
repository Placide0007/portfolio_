<template>
    <div class="w-full max-w-[480px] mx-auto">
        <!-- TERMINAL CARD -->
        <div class="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <!-- TERMINAL HEADER -->
            <div class="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 select-none">
                <!-- Mac dots -->
                <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                </div>

                <!-- Window title -->
                <div class="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <Icon icon="mdi:console" width="14" />
                    <span>placide@portfolio:~/avatar.ascii</span>
                </div>

                <!-- Copy ASCII button -->
                <button
                    @click="copyAscii"
                    type="button"
                    :title="$t('ascii.copy')"
                    class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer flex items-center gap-1"
                >
                    <Icon :icon="copied ? 'mdi:check' : 'mdi:content-copy'" width="14" />
                    <span class="text-[10px] hidden sm:inline">{{ copied ? $t('ascii.copied') : $t('ascii.copy') }}</span>
                </button>
            </div>

            <!-- TERMINAL BODY / DISPLAY -->
            <div class="relative p-3 sm:p-4 flex items-center justify-center min-h-[300px] sm:min-h-[340px] bg-slate-50/50 dark:bg-slate-950/60 overflow-hidden">
                <!-- Watermark background grid / scanlines effect -->
                <div class="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <!-- MODE 1: ASCII MONOCHROME (Default) -->
                <div
                    v-if="activeMode === 'mono'"
                    class="w-full flex justify-center items-center overflow-x-auto py-1"
                >
                    <pre
                        class="font-mono font-bold select-all text-slate-800 dark:text-slate-100 text-[6.5px] sm:text-[8px] md:text-[9.2px] leading-[1.08] tracking-[-0.05em] text-center transition-all duration-300 drop-shadow-xs"
                    >{{ asciiText }}</pre>
                </div>

                <!-- MODE 2: ASCII COULEUR -->
                <div
                    v-else-if="activeMode === 'color'"
                    class="w-full flex justify-center items-center overflow-x-auto py-1"
                >
                    <pre
                        class="font-mono font-bold select-all text-[6.5px] sm:text-[8px] md:text-[9.2px] leading-[1.08] tracking-[-0.05em] text-center transition-all duration-300"
                    ><template v-for="(row, rIdx) in asciiColorData" :key="rIdx"><template v-for="(cell, cIdx) in row" :key="cIdx"><span :style="cell.isBg ? '' : { color: `rgb(${cell.r}, ${cell.g}, ${cell.b})` }">{{ cell.char }}</span></template>
</template></pre>
                </div>

                <!-- MODE 3: PHOTO ORIGINALE -->
                <div
                    v-else-if="activeMode === 'photo'"
                    class="w-full flex flex-col items-center justify-center py-2 animate-fadeIn"
                >
                    <div class="relative p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                        <img
                            :src="profileImage"
                            alt="Lazare Placide Andriatahina"
                            class="w-48 sm:w-56 h-auto object-contain rounded-xl"
                        />
                        <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-900/80 text-white backdrop-blur-xs">
                            RAW 353×314
                        </div>
                    </div>
                </div>
            </div>

            <!-- FOOTER CONTROLS / MODE TOGGLE -->
            <div class="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs">
                <!-- Status tag -->
                <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-[11px] font-mono">{{ $t('ascii.status') }}</span>
                </div>

                <!-- Mode selection pills -->
                <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    <button
                        @click="activeMode = 'mono'"
                        type="button"
                        class="px-2.5 py-1 rounded text-[11px] font-medium transition cursor-pointer"
                        :class="activeMode === 'mono'
                            ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs font-semibold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
                    >
                        {{ $t('ascii.mode_mono') }}
                    </button>

                    <button
                        @click="activeMode = 'color'"
                        type="button"
                        class="px-2.5 py-1 rounded text-[11px] font-medium transition cursor-pointer"
                        :class="activeMode === 'color'
                            ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs font-semibold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
                    >
                        {{ $t('ascii.mode_color') }}
                    </button>

                    <button
                        @click="activeMode = 'photo'"
                        type="button"
                        class="px-2.5 py-1 rounded text-[11px] font-medium transition cursor-pointer"
                        :class="activeMode === 'photo'
                            ? 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-xs font-semibold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'"
                    >
                        {{ $t('ascii.mode_photo') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue/offline'
import profileImage from '../assets/profile.png'

const activeMode = ref('mono')
const copied = ref(false)

// High-fidelity precomputed default ASCII art for immediate 0ms render
const defaultAscii = `                      .:-====:.                         
                   .=%@@@@@@@@@%=.                      
                  +@@@@##%%#%%#@@@*.                    
                :#@%*+==--------=*#@+                   
               -@#====-------------*@%                  
              :@@*=======----------=%@*                 
              %@#++=---------:::::-=+#@:                
              @@*++++++==----=+*%*+==+#+                
             .@%++*%##@@#*=+*#@@#%*+==#%                
              @%++**%##@#+--=%#%#%%%+-%+                
            ..%%++%%##**+=-:-=++%%+=--*+=-              
            #**%+=------=--::--::::::-**%#              
            **%%+=-----===-:-==-::--==*%*-              
             +%%*++=---=%#*%*%*----=++**:               
              =*%*+===--=++++=----=++**-                
               .:**++++**********=++*=.                 
                 :****%%**+++++***+++                   
                  +%%%***%%%%%*+++**:                   
                  =*%%*++====-==+*%*.                   
                  =+*###%##@@##%#%++:                   
                 :++++*#@@@@@@@#*+==**-:                
            .:-+#%+==+++**%#%%++====*@#@#%*=:.          
       .-+*#@@@@%++====+=====-======+###@@@@@#%+=:.     
  .:=*#@@@@@@@@@#*+=====++==========%@#######@@@@@##*+-:
.#@@@@@@@@@@@@@@@#+=====++++*+++===%@@###%%%#@#########%
:@@@@@@@@@@@@@@@@@#*=-===**%%*+=-+#@####%%%##%%########*
:#@@@@@@@@@@@@@@@@@@%+=--=+++==+%@@##%%%%%%%%*%##%###@#%`

const asciiText = ref(defaultAscii)
const asciiColorData = ref([])

// Dynamic client-side Canvas generator to construct colored matrix & exact pixels
const generateAsciiFromCanvas = () => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = profileImage

    img.onload = () => {
        try {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d', { willReadFrequently: true })
            if (!ctx) return

            const targetW = 56
            const aspectRatio = img.naturalHeight / img.naturalWidth
            const charRatio = 0.52
            const targetH = Math.round(targetW * aspectRatio * charRatio)

            canvas.width = targetW
            canvas.height = targetH

            ctx.drawImage(img, 0, 0, targetW, targetH)
            const imgData = ctx.getImageData(0, 0, targetW, targetH).data

            const ramp = '@#%*+=-:. '
            const colorMatrix = []
            const lines = []

            for (let y = 0; y < targetH; y++) {
                const row = []
                let lineStr = ''

                for (let x = 0; x < targetW; x++) {
                    const idx = (y * targetW + x) * 4
                    const r = imgData[idx]
                    const g = imgData[idx + 1]
                    const b = imgData[idx + 2]
                    const a = imgData[idx + 3]

                    // Perceived brightness
                    const lum = 0.299 * r + 0.587 * g + 0.114 * b

                    // Transparent or white background
                    if ((r > 230 && g > 230 && b > 230) || a < 40) {
                        row.push({ char: ' ', r: 0, g: 0, b: 0, isBg: true })
                        lineStr += ' '
                    } else {
                        const rampIdx = Math.min(
                            ramp.length - 1,
                            Math.max(0, Math.floor((lum / 235) * (ramp.length - 1)))
                        )
                        const ch = ramp[rampIdx]
                        row.push({ char: ch, r, g, b, isBg: false })
                        lineStr += ch
                    }
                }
                colorMatrix.push(row)
                lines.push(lineStr)
            }

            asciiColorData.value = colorMatrix
            if (lines.length > 0) {
                asciiText.value = lines.join('\n')
            }
        } catch (e) {
            console.warn('Canvas ASCII generation error, using fallback', e)
        }
    }
}

const copyAscii = async () => {
    try {
        await navigator.clipboard.writeText(asciiText.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch {
        // Fallback
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    }
}

onMounted(() => {
    generateAsciiFromCanvas()
})
</script>
