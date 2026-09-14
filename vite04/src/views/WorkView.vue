<template>
    <div class="pt-[8.75rem] pb-0">
        <div class="mx-auto w-[89.33vw] max-w-full md:w-[70vw] md:max-w-[62.5rem] min-[1400px]:w-[71.43vw]">
            <!-- ページタイトル -->
            <div class="mb-[5rem] flex w-full flex-shrink-0 items-center gap-[1.75rem]">
                <div class="flex h-[2.6875rem] w-[0.5rem] bg-[#E60012]"></div>
                <h2 class="text-[1.375rem] leading-none">実績紹介</h2>
            </div>

            <!-- 公共事業 -->
            <section class="pb-[3.5rem]">
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        公共事業
                    </h3>
                </div>
                <swiper :modules="modules" :loop="true" :centered-slides="true" :slides-per-view="'auto'"
                    :space-between="20" :speed="600"
                    :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }" class="mb-[3.5rem]">
                    <swiper-slide v-for="(item, i) in publicWorks" :key="i" class="!w-[80%] md:!w-[58%]">
                        <div class="relative">
                            <img :src="`${base}images/${item.img}`" alt="" class="aspect-[580/380] w-full object-cover"
                                loading="lazy" decoding="async" />
                            <div
                                class="absolute bottom-0 flex w-[calc(100%-1.25rem)] items-center bg-[#070707] p-[0.625rem] opacity-70 md:w-[calc(100%-1.875rem)] md:p-[0.9375rem]">
                                <span class="text-[0.75rem] text-white md:text-[0.875rem]">
                                    {{ item.title }}
                                </span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </section>

            <!-- 住宅・マンション -->
            <section>
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        住宅・マンション
                    </h3>
                </div>
                <swiper :modules="modules" :loop="true" :centered-slides="true" :slides-per-view="'auto'"
                    :space-between="20" :speed="600"
                    :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }" class="mb-[3.5rem]">
                    <swiper-slide v-for="(item, i) in apartments" :key="i" class="!w-[80%] md:!w-[58%]">
                        <div class="relative">
                            <img :src="`${base}images/${item.img}`" alt="" class="aspect-[580/380] w-full object-cover"
                                loading="lazy" decoding="async" />
                            <div
                                class="absolute bottom-0 flex w-[calc(100%-1.25rem)] items-center bg-[#070707] p-[0.625rem] opacity-70 md:w-[calc(100%-1.875rem)] md:p-[0.9375rem]">
                                <span class="text-[0.75rem] text-white md:text-[0.875rem]">
                                    {{ item.title }}
                                </span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </section>
        </div>

        <!-- お問い合わせバナー -->
        <div class="flex flex-col w-full md:flex-row">
            <div
                class="flex flex-col justify-center bg-[#E60012] px-[3.75rem] py-[2.5rem] md:w-[45%] md:py-[3.75rem] min-[1400px]:px-[7.5rem] min-[1400px]:py-[5rem]">
                <span class="block font-bold text-white md:text-[1.25rem]">お問い合わせ</span>
                <p class="text-[0.75rem] text-white md:text-[0.875rem]">
                    お仕事、その他に関するお問い合わせは、電話または
                    フォームからお気軽にご連絡ください
                </p>
            </div>
            <div class="flex bg-[#F5F5F5] py-[2.5rem] md:w-[55%] md:py-[5rem]">
                <div class="flex flex-col items-center justify-center w-1/2">
                    <span class="mb-[0.5rem] text-[0.75rem] font-bold md:text-[1rem]">
                        お電話でのお問い合わせ
                    </span>
                    <span
                        class="text-[1rem] font-bold md:text-[1.5rem] min-[1080px]:text-[1.6875rem] min-[1400px]:text-[1.875rem]">
                        03-0000-0000
                    </span>
                </div>
                <div
                    class="relative flex w-1/2 flex-col items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-[3.75rem] before:w-px before:-translate-y-1/2 before:bg-[#E60012] md:before:h-[5.5rem]">
                    <span class="mb-[0.5rem] text-[0.75rem] font-bold md:text-[1rem]">
                        フォームでのお問い合わせ
                    </span>
                    <router-link to="/contact"
                        class="flex items-center justify-center border border-black bg-white px-[0.5rem] py-[0.25rem] text-[1rem] font-bold transition-opacity duration-200 hover:opacity-85 md:px-[0.625rem] md:py-[0.625rem]">
                        お問い合わせ
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const base = import.meta.env.BASE_URL
const modules = [Pagination]

const publicWorks = [
    { img: 'work-public-1.jpg', title: '20XX年 公共事業プロジェクト1A' },
    { img: 'work-public-2.jpg', title: '20XX年 公共事業プロジェクト2A' },
    { img: 'work-public-3.jpg', title: '20XX年 公共事業プロジェクト3A' },
    { img: 'work-public-4.jpg', title: '20XX年 公共事業プロジェクト4A' },
    { img: 'work-public-5.jpg', title: '20XX年 公共事業プロジェクト5A' },
]

const apartments = [
    { img: 'work-apartment-1.jpg', title: '20XX年 マンション・住宅プロジェクト1A' },
    { img: 'work-apartment-2.jpg', title: '20XX年 マンション・住宅プロジェクト2A' },
    { img: 'work-apartment-3.jpg', title: '20XX年 マンション・住宅プロジェクト3A' },
    { img: 'work-apartment-4.jpg', title: '20XX年 マンション・住宅プロジェクト4A' },
    { img: 'work-apartment-5.jpg', title: '20XX年 マンション・住宅プロジェクト5A' },
]
</script>

<style>
.swiper-pagination-bullet {
    opacity: 0.25;
    width: 1.875rem;
    height: 4px;
    transition: all 0.3s ease;
    background-color: #000;
    border-radius: 0%;
}

.swiper-pagination-bullet-active {
    opacity: 0.75;
}

.swiper-pagination {
    position: relative;
    margin-top: 1.25rem;
}
</style>