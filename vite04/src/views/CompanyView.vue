<template>
    <div class="pt-[8.75rem] pb-[7.5rem]">
        <div class="mx-auto w-[89.33vw] max-w-full md:w-[70vw] md:max-w-[62.5rem] min-[1400px]:w-[71.43vw]">
            <!-- ページタイトル -->
            <div class="mb-[5rem] flex w-full flex-shrink-0 items-center gap-[1.75rem]">
                <div class="flex h-[2.6875rem] w-[0.5rem] bg-[#E60012]"></div>
                <h2 class="text-[1.375rem] leading-none">企業情報</h2>
            </div>

            <!-- 経営理念 -->
            <section class="mb-[5rem]">
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        経営理念
                    </h3>
                </div>
                <div class="mx-auto w-[80vw] max-w-full md:w-[60vw] md:max-w-[45rem] min-[1400px]:w-[51.43vw]">
                    <span class="mb-4 block text-[1rem] font-bold leading-none md:mb-5 md:text-[1.125rem]">
                        技術の力で豊かな社会を創造する
                    </span>
                    <p class="text-[0.875rem] md:text-[1rem]">
                        経営理念のテキストが入ります経営理念のテキストが入ります。経営理念のテキストが入ります経営理念のテキストが入ります。経営理念のテキストが入ります経営理念のテキストが入ります。経営理念のテキストが入ります経営理念のテキストが入ります。経営理念のテキストが入ります経営理念のテキストが入ります。
                    </p>
                    <img src="/images/company-mission.jpg" alt="" class="w-full mt-4" loading="lazy" decoding="async" />
                </div>
            </section>

            <!-- 会社情報 -->
            <section class="mb-[5rem]">
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        会社情報
                    </h3>
                </div>
                <div class="mx-auto w-[80vw] max-w-full md:w-[60vw] md:max-w-[45rem] min-[1400px]:w-[51.43vw]">
                    <table class="w-full border-collapse border-0 text-left text-[0.875rem]">
                        <thead>
                            <tr>
                                <th class="h-[0.5rem] bg-[#3E3232] p-0"></th>
                                <td class="h-[0.5rem] bg-[#707070] p-0"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in companyInfo" :key="i"
                                class="border-b border-solid border-[#707070] align-top">
                                <th
                                    class="w-[6.25rem] bg-[#F5F5F5] p-[0.5rem] font-normal md:w-[8.75rem] md:p-[0.9375rem]">
                                    {{ row.label }}
                                </th>
                                <td class="p-[0.5rem] md:p-[0.9375rem]">
                                    <template v-if="Array.isArray(row.value)">
                                        <p v-for="(v, j) in row.value" :key="j">{{ v }}</p>
                                    </template>
                                    <template v-else>
                                        {{ row.value }}
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- 所在地 -->
            <section>
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        所在地
                    </h3>
                </div>
                <div class="mx-auto w-[80vw] max-w-full md:w-[60vw] md:max-w-[45rem] min-[1400px]:w-[51.43vw]">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3240.8271969350576!2d139.7663605!3d35.6812567!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1783603252925!5m2!1sja!2sjp"
                            class="aspect-[720/450] max-w-full w-full" allowfullscreen="" loading="lazy"
                            referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                    <p class="mt-4 text-[0.875rem] md:text-[1rem]">
                        〒140-0002 東京都品川区東品川2丁目 ウエストビル14階
                    </p>
                    <p class="text-[0.875rem] md:text-[1rem]">電話番号 00-0000-0000</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
const companyInfo = [
    { label: '商号', value: '安土建設株式会社' },
    { label: '所在地', value: '〒140-0002　東京都品川区東品川2丁目　ウエストビル14階' },
    { label: '代表取締役', value: '安土　太郎' },
    { label: '設立日', value: '1987年3月1日' },
    { label: '資本金', value: '1億円' },
    {
        label: '事業内容',
        value: [
            '建設工事全般に関する請負又は受託',
            '建物内外の保守管理',
            '地域開発、都市開発、コンサルティング',
        ],
    },
    {
        label: '資格・免許',
        value: ['一級建築士', '一級建築施工管理技士', '一級管工事施工管理技士'],
    },
]
</script>