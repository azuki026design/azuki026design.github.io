<template>
    <div>
        <!-- メインビジュアル -->
        <div
            class="mx-auto mt-[5rem] w-full aspect-[375/450] md:aspect-[1400/600] md:max-h-[37.5rem] md:overflow-hidden md:object-cover">
            <picture>
                <source :srcset="`${base}images/mainvisual-sp.jpg`" media="(max-width: 767.99px)" />
                <img :src="`${base}images/mainvisual-pc.jpg`" alt="" class="object-cover w-full h-full" loading="lazy"
                    decoding="async" />
            </picture>
        </div>

        <section class="pb-[5rem] pt-[3.75rem] md:pb-[7.5rem] md:pt-[5rem]">
            <div class="mx-auto w-[89.33vw] max-w-full md:w-[70vw] md:max-w-[62.5rem] min-[1400px]:w-[71.43vw]">
                <!-- ニュース -->
                <ul class="mb-[3.75rem] flex flex-col md:mb-[5rem]">
                    <li v-for="(item, index) in news" :key="index"
                        class="flex flex-col gap-[0.25rem] border-b border-solid border-[#CCC] p-[1.25rem] md:flex-row md:gap-[5rem]"
                        :class="{ 'border-b-0': index === news.length - 1 }">
                        <span class="text-[0.875rem] leading-[1.8] md:inline-block md:w-[120px] md:text-[1rem]">
                            {{ item.date }}
                        </span>
                        <span class="text-[0.875rem] leading-[1.8] md:inline-block md:text-[1rem]">
                            {{ item.topic }}
                        </span>
                    </li>
                </ul>
            </div>

            <!-- COMPANY / WORK -->
            <ul class="flex flex-col md:flex-row">
                <li class="flex aspect-[700/360] w-full items-center justify-center bg-cover bg-center md:w-1/2"
                    :style="{ backgroundImage: `url(${base}images/top-company.jpg)` }">
                    <router-link to="/company" class="flex items-center justify-center w-full h-full">
                        <h2 class="text-[1.375rem] text-white md:text-[2rem]">COMPANY</h2>
                    </router-link>
                </li>
                <li class="flex aspect-[700/360] w-full items-center justify-center bg-cover bg-center md:w-1/2"
                    :style="{ backgroundImage: `url(${base}images/top-work.jpg)` }">
                    <router-link to="/work" class="flex items-center justify-center w-full h-full">
                        <h2 class="text-[1.375rem] text-white md:text-[2rem]">WORK</h2>
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL

const news = [
    { date: '20XX年3月1日', topic: '弊社WEBサイトをリニューアルしました。' },
    { date: '20XX年1月4日', topic: '新年のご挨拶' },
    { date: '20XX年12月1日', topic: '公共事業プロジェクト1-1A 施工しました。' },
]
</script>