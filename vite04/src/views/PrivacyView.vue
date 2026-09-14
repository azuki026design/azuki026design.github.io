<template>
    <div class="pb-[7.5rem] pt-[8.75rem]">
        <div class="mx-auto w-[89.33vw] max-w-full md:w-[70vw] md:max-w-[62.5rem] min-[1400px]:w-[71.43vw]">
            <!-- ページタイトル -->
            <div class="mb-[5rem] flex w-full flex-shrink-0 items-center gap-[1.75rem]">
                <div class="flex h-[2.6875rem] w-[0.5rem] bg-[#E60012]"></div>
                <h2 class="text-[1.375rem] leading-none">プライバシーポリシー</h2>
            </div>

            <!-- 各セクション -->
            <section v-for="(section, index) in sections" :key="index"
                :class="index === sections.length - 1 ? '' : 'mb-[5rem]'">
                <!-- セクションタイトル -->
                <div class="relative mb-[2.5rem] h-[1.875rem] w-full">
                    <div class="absolute top-1/2 z-10 h-px w-full -translate-y-1/2 bg-[#E60012]"></div>
                    <h3 class="absolute top-1/2 z-20 -translate-y-1/2 bg-white pr-[0.5rem] text-[1.25rem] leading-none">
                        {{ section.title }}
                    </h3>
                </div>

                <div class="mx-auto w-[80vw] max-w-full md:w-[60vw] md:max-w-[45rem] min-[1400px]:w-[51.43vw]">
                    <!-- テーブルがある場合 -->
                    <table v-if="section.table"
                        class="mb-[1.5rem] w-full border-collapse border-0 text-left text-[0.875rem]">
                        <thead>
                            <tr class="text-white">
                                <th class="w-[8.75rem] bg-[#3E3232] p-[0.5rem] md:p-[0.9375rem]">
                                    {{ section.table.headerLabel }}
                                </th>
                                <td class="bg-[#707070] p-[0.5rem] md:p-[0.9375rem]">
                                    {{ section.table.headerValue }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, i) in section.table.rows" :key="i"
                                class="border-b border-solid border-[#707070] align-top">
                                <th class="bg-[#F5F5F5] p-[0.5rem] font-normal md:p-[0.9375rem]">
                                    {{ row.label }}
                                </th>
                                <td class="p-[0.5rem] md:p-[0.9375rem]">
                                    <template v-if="Array.isArray(row.value)">
                                        <ul>
                                            <li v-for="(item, j) in row.value" :key="j"
                                                class="ml-[1rem] list-decimal text-[0.875rem] md:text-[1rem]">
                                                {{ item }}
                                            </li>
                                        </ul>
                                    </template>
                                    <template v-else-if="Array.isArray(row.lines)">
                                        <p v-for="(line, k) in row.lines" :key="k">{{ line }}</p>
                                    </template>
                                    <template v-else>
                                        {{ row.value }}
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 段落 -->
                    <p v-for="(text, pIndex) in section.paragraphs" :key="'p-' + pIndex" :class="[
                        'text-[0.875rem] md:text-[1rem]',
                        pIndex < section.paragraphs.length - 1 ? 'mb-4' : ''
                    ]">
                        {{ text }}
                    </p>

                    <!-- リスト -->
                    <ul v-if="section.list">
                        <li v-for="(item, lIndex) in section.list" :key="'li-' + lIndex"
                            class="ml-[1rem] list-decimal text-[0.875rem] md:text-[1rem]">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    title: '個人情報',
                    paragraphs: [
                        '個人情報の保護方針に関するテキストが入ります個人情報の保護方針に関するテキストが入ります個人情報の保護方針に関するテキストが入ります。',
                        '個人情報に関する仮のテキストです個人情報に関する仮のテキストです個人情報に関する仮のテキストです個人情報に関する仮のテキストです。'
                    ]
                },
                {
                    title: '取得する個人情報について',
                    table: {
                        headerLabel: '個人情報の種別',
                        headerValue: '利用目的',
                        rows: [
                            { label: '種別情報1', value: '利用目的の1番目のテキストが入ります' },
                            { label: '種別情報2', value: '利用目的の2番目のテキストが入ります' },
                            { label: '種別情報3', value: '利用目的の3番目のテキストが入ります' },
                            {
                                label: '種別情報4',
                                value: [
                                    'ダミーテキストダミーテキストダミーテキスト',
                                    'ダミーテキストダミーテキストダミーテキスト',
                                    'ダミーテキストダミーテキストダミーテキスト'
                                ]
                            }
                        ]
                    },
                    paragraphs: [
                        '当社は、お客様との取引の中で取得する個人情報についてのテキストが入ります。取得する個人情報についてのテキストが入ります。',
                        '取得する個人情報についてのテキストが入ります。取得する個人情報についてのテキストが入ります。取得する個人情報についてのテキストが入ります。'
                    ]
                },
                {
                    title: '個人情報の第三者提供',
                    paragraphs: [
                        '当社は、ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスダミーテキストトダミーテキストダミーテキストダミーテキスト。'
                    ],
                    list: [
                        'ダミーテキストダミーテキストダミーテキスト',
                        'ダミーテキストダミーテキストダミーテキスト',
                        'ダミーテキストダミーテキストダミーテキスト',
                        'ダミーテキストダミーテキストダミーテキスト'
                    ]
                },
                {
                    title: '個人情報の開示、訂正、削除',
                    list: [
                        '当社は，本人から個人情報の開示を求められたときは、お申し出いただいた方がご本人であることを確認したうえで、本人に対し開示します。',
                        'ダミーテキストダミーテキストダミーテキストダミーテキスト。'
                    ]
                },
                {
                    title: 'プライバシーポリシーの変更',
                    list: [
                        '本ポリシーの内容は、ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。',
                        'ダミーテキストダミーテキストダミーテキストダミーテキスト。'
                    ]
                },
                {
                    title: 'お問い合わせ窓口',
                    table: {
                        headerLabel: '窓口の名称',
                        headerValue: '個人情報問合せ窓口',
                        rows: [
                            {
                                label: '連絡先',
                                lines: [
                                    '個人情報保護管理者：安土　太郎',
                                    '住所：東京都品川区東品川2丁目　ウエストビル14階',
                                    '電話：00-0000-0000',
                                    'Email：info@xxxxxxxx.jp'
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }
}
</script>