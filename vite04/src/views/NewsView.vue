<template>
    <div class="pt-[8.75rem] pb-[7.5rem]">
        <div class="mx-auto w-[89.33vw] max-w-full md:w-[70vw] md:max-w-[62.5rem] min-[1400px]:w-[71.43vw]">
            <!-- ページタイトル -->
            <div class="mb-[5rem] flex w-full flex-shrink-0 items-center gap-[1.75rem]">
                <div class="flex h-[2.6875rem] w-[0.5rem] bg-[#E60012]"></div>
                <h2 class="text-[1.375rem] leading-none">ニュース</h2>
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
                        <tr v-for="(item, i) in newsList" :key="i"
                            class="border-b border-solid border-[#707070] align-top">
                            <th
                                class="w-[8.125rem] bg-[#F5F5F5] p-[0.5rem] font-normal md:w-[13.125rem] md:p-[0.9375rem]">
                                {{ item.date }}
                            </th>
                            <td class="p-[0.5rem] md:p-[0.9375rem]">
                                {{ item.topic }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
const newsList = [
    { date: '20XX年3月1日', topic: '弊社WEBサイトをリニューアルしました。' },
    { date: '20XX年1月4日', topic: '新年のご挨拶' },
    { date: '20XX年12月1日', topic: '公共事業プロジェクト1-1A 施工しました。' },
    { date: '20XX年11月1日', topic: '建築メディア10月号に掲載されました。' },
    { date: '20XX年10月1日', topic: '「未来のまちづくりを考えよう」に登壇いたしました。' },
    { date: '20XX年9月1日', topic: '中途採用向け会社説明会を開催いたしました。' },
    { date: '20XX年8月1日', topic: '公共事業プロジェクト2-1A 施工しました。' },
    { date: '20XX年7月1日', topic: '建築メディア6月号に掲載されました。' },
    { date: '20XX年6月1日', topic: 'スタッフを募集します。' },
    { date: '20XX年4月1日', topic: 'オフィス移転のお知らせ' },
]
</script>