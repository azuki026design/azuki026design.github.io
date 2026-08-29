<template>
    <div class="font-sans text-black">
        <!-- Header -->
        <header id="header" class="relative mb-22.5 max-md:mb-18">
            <div class="mv">
                <picture>
                    <source media="(max-width: 768px)" srcset="/images/mv-sp.jpg" />
                    <img src="/images/mv-pc.jpg" alt="" class="w-full h-200 object-cover max-md:h-125" />
                </picture>
            </div>

            <h1 class="absolute top-6.5 left-11 leading-none max-md:top-5 max-md:left-5.5">
                <img src="/images/logo.svg" alt="AZUKI進学スクール" />
            </h1>

            <p class="absolute top-33 left-11 max-md:top-20 max-md:left-5.5 max-md:max-w-52.5">
                <img src="/images/header-text.svg" alt="この夏で決まる！本気で合格を目指すならAZUKI進学スクール" />
            </p>

            <div class="absolute -bottom-6.5 right-7 max-md:-bottom-12.5 max-md:right-4 max-md:max-w-45">
                <img src="/images/badge.svg" alt="満足度100%。※2022年3月時点 当社独自調査により算出" />
            </div>
        </header>

        <main class="pb-19 max-md:pb-13">
            <!-- Course Section -->
            <section id="course" class="max-w-220 mx-auto px-5 mb-35 max-md:mb-20">
                <h2 class="mb-20 text-center max-md:mb-10">
                    <img src="/images/course-title.svg" alt="「夏期限定」特別講習スタート！" class="inline-block" />
                </h2>

                <p class="text-[30px] mb-3.75 text-center max-md:text-lg max-md:mb-1.25">
                    ＜短期集中の特別カリキュラム＞
                </p>

                <div class="mb-20 text-center max-md:mb-10">
                    <img src="/images/course-schedule.svg" alt="" class="inline-block" />
                </div>

                <p class="mb-12.5 text-center max-md:mb-5">
                    <img src="/images/course-text.svg" alt="「グループ講習」と「オンライン講習」の2コースからお選びいただけます。" class="inline-block" />
                </p>

                <div class="mb-10 text-center max-md:max-w-45 max-md:mx-auto max-md:mb-7.5">
                    <img src="/images/course-arrow.svg" alt="" class="inline-block" />
                </div>

                <div class="flex items-end justify-between max-md:flex-col max-md:px-5">
                    <div class="w-full max-w-95 text-center mr-10 max-md:max-w-full max-md:mr-0 max-md:mb-10">
                        <div class="mb-5">
                            <img src="/images/course-group-title.svg" alt="仲間と頑張る グループ講習" class="inline-block" />
                        </div>
                        <div class="mb-5">
                            <img src="/images/course-group.jpg" alt=""
                                class="w-full max-w-70 h-auto rounded-full mx-auto" />
                        </div>
                        <p class="text-sm font-bold leading-relaxed text-justify">
                            最大5名でのグループ講習。分からない問題を教え合ったり仲間と一緒に頑張りたい人向けの講習です。
                        </p>
                    </div>

                    <div class="w-full max-w-95 text-center max-md:max-w-full">
                        <div class="mb-5">
                            <img src="/images/course-online-title.svg" alt="1人で集中 オンライン講習" class="inline-block" />
                        </div>
                        <div class="mb-5">
                            <img src="/images/course-online.jpg" alt=""
                                class="w-full max-w-70 h-auto rounded-full mx-auto" />
                        </div>
                        <p class="text-sm font-bold leading-relaxed text-justify">
                            完全オンライン型の集中講習。好きな時間に自分のペースで勉強したい人向けの講習です。
                        </p>
                    </div>
                </div>
            </section>

            <!-- Feature Section -->
            <section id="feature">
                <div class="bg-[rgba(69,204,196,0.5)] py-12.5 px-5">
                    <div class="w-75 mx-auto -mt-30 mb-10 max-md:w-50 max-md:-mt-25">
                        <img src="/images/icon-feature.svg" alt="Feature" class="w-full" />
                    </div>
                    <h2 class="text-2xl font-bold tracking-wider mb-12.5 text-center max-md:text-[19px]">
                        AZUKI進学スクール5つの特徴
                    </h2>
                    <ol class="max-w-210 mx-auto">
                        <li class="mb-7.5 max-md:mb-2.5">
                            <a href="#feature-1">
                                <img src="/images/feature-1.svg" alt="豊富なカリキュラム" class="w-full" />
                            </a>
                        </li>
                        <li class="mb-7.5 max-md:mb-2.5">
                            <a href="#feature-2">
                                <img src="/images/feature-2.svg" alt="受講生の満足度100%" class="w-full" />
                            </a>
                        </li>
                        <li class="mb-7.5 max-md:mb-2.5">
                            <a href="#feature-3">
                                <img src="/images/feature-3.svg" alt="講師は実力派ぞろい" class="w-full" />
                            </a>
                        </li>
                        <li class="mb-7.5 max-md:mb-2.5">
                            <a href="#feature-4">
                                <img src="/images/feature-4.svg" alt="圧倒的な合格率の高さ" class="w-full" />
                            </a>
                        </li>
                        <li class="mb-7.5 max-md:mb-2.5">
                            <a href="#feature-5">
                                <img src="/images/feature-5.svg" alt="講習後も万全のフォロー" class="w-full" />
                            </a>
                        </li>
                    </ol>
                </div>

                <!-- Feature 1 -->
                <section id="feature-1" class="pt-12.5">
                    <div class="max-w-220 mx-auto px-5">
                        <h3 class="mb-6.25 text-center">
                            <picture>
                                <source media="(max-width: 768px)" srcset="/images/feature-title-1-sp.svg" />
                                <img src="/images/feature-title-1-pc.svg" alt="豊富なカリキュラム" class="inline-block" />
                            </picture>
                        </h3>

                        <p class="text-sm leading-relaxed mb-10 text-center max-md:text-justify">
                            AZUKI進学スクール では、豊富なカリキュラムの中から、<br class="max-md:hidden" />
                            自分にあったカリキュラムを選択していただけます。
                        </p>

                        <div class="max-w-95 mx-auto">
                            <p class="bg-accent text-white text-[13px] mb-2.5 text-center">基礎講座</p>
                            <div class="mb-2.5">
                                <img src="/images/feature1-img.jpg" alt="" class="w-full" />
                            </div>
                            <p class="text-xs">
                                全ての科目の基礎をひと通り復習するための講座です。もう一度基礎を固めなおしたい方におすすめです。
                            </p>
                        </div>

                        <div class="flex justify-between my-10 max-md:flex-col max-md:items-center max-md:mb-0">
                            <div class="max-w-95 max-md:mb-10">
                                <p class="bg-accent text-white text-[13px] mb-2.5 text-center">テーマ別講座</p>
                                <p class="text-xs px-5">
                                    苦手分野を集中的に勉強したり、得意分野をさらに伸ばすためのテーマを絞った講座です。受講するテーマは自由に選択していただけます。
                                </p>
                            </div>
                            <div class="max-w-95">
                                <p class="bg-accent text-white text-[13px] mb-2.5 text-center">大学別対策講座</p>
                                <p class="text-xs px-5">
                                    特定の大学にターゲットを絞り、その大学に特化した対策・勉強を行うための講座です。※選択した大学ごとにカリキュラムの内容が異なります。
                                </p>
                            </div>
                        </div>

                        <div class="mb-10 text-center">
                            <a href="#"
                                class="text-sm relative underline after:content-[''] after:absolute after:-right-4 after:top-1.25 after:w-1.75 after:h-1.75 after:border-r after:border-t after:border-black after:rotate-45">
                                その他の講座を見る
                            </a>
                        </div>
                    </div>

                    <div class="bg-[#ecfcfb] py-10">
                        <div class="max-w-220 mx-auto px-5">
                            <p class="border-y border-black text-sm font-bold leading-none py-2.5 mb-6.25 text-center">
                                カリキュラムの紹介
                            </p>
                            <div class="mb-5 text-center max-md:mb-7.5">
                                <picture>
                                    <source media="(max-width: 768px)" srcset="/images/curriculum-sp.svg" />
                                    <img src="/images/curriculum-pc.svg" alt="" class="inline-block" />
                                </picture>
                            </div>

                            <div class="flex items-center justify-between max-md:flex-col">
                                <div
                                    class="w-[32%] max-w-65 mr-[6%] text-center max-md:w-full max-md:max-w-full max-md:mr-0 max-md:mb-5">
                                    <img src="/images/point-1.jpg" alt="" class="w-full" />
                                </div>
                                <div class="w-[62%] max-md:w-full">
                                    <p class="text-[17px] font-bold leading-none mb-5 max-md:text-base max-md:mb-3.75">
                                        計算されたカリキュラム
                                    </p>
                                    <p class="text-sm leading-relaxed">
                                        当スクールのカリキュラムは、
                                        <span class="bg-[linear-gradient(rgba(255,255,255,0)_0,#ffff00_0)] font-bold">
                                            独自のAIシステム
                                        </span>
                                        を使用して過去の試験内容を解析することで、重要な部分を効率よく学習することができるようにした
                                        <span class="bg-[linear-gradient(rgba(255,255,255,0)_0,#ffff00_0)] font-bold">
                                            オリジナルのカリキュラム
                                        </span>
                                        です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Feature 2 -->
                <section id="feature-2" class="pt-12.5">
                    <div class="max-w-220 mx-auto px-5">
                        <h3 class="mb-6.25 text-center">
                            <picture>
                                <source media="(max-width: 768px)" srcset="/images/feature-title-2-sp.svg" />
                                <img src="/images/feature-title-2-pc.svg" alt="受講生の満足度100%" class="inline-block" />
                            </picture>
                        </h3>
                        <p class="text-sm leading-relaxed mb-10 text-center max-md:text-justify">
                            AZUKI進学スクール は、講座を受講した全ての生徒から<br class="max-md:hidden" />
                            非常に高い満足度を得ています。<br class="max-md:hidden" />
                            受講前のカウンセリングをしっかりと行い、<br class="max-md:hidden" />
                            結果につながるカリキュラムをご提案いたします。
                        </p>
                    </div>
                    <div>
                        <img src="/images/feature2-img.jpg" alt="" class="w-full h-150 object-cover max-md:h-100" />
                    </div>
                </section>

                <!-- Feature 3 -->
                <section id="feature-3" class="pt-12.5">
                    <div class="max-w-220 mx-auto px-5">
                        <h3 class="mb-6.25 text-center">
                            <picture>
                                <source media="(max-width: 768px)" srcset="/images/feature-title-3-sp.svg" />
                                <img src="/images/feature-title-3-pc.svg" alt="講師は実力派ぞろい" class="inline-block" />
                            </picture>
                        </h3>
                        <p class="text-sm leading-relaxed mb-10 text-center max-md:text-justify">
                            AZUKI進学スクールの講師陣は、高い選考基準をクリアした<br class="max-md:hidden" />
                            よりすぐりのメンバーだけで構成されています。<br class="max-md:hidden" />
                            ただ学力や知識のレベルが高いだけでなく指導方法の引き出しも豊富なため、<br class="max-md:hidden" />
                            生徒の理解度を把握しながら最適な指導で目標達成へ導きます。
                        </p>

                        <p class="border-y border-black text-sm font-bold leading-none py-2.5 mb-6.25 text-center">
                            講師の紹介
                        </p>

                        <ul class="flex flex-wrap">
                            <li v-for="(teacher, i) in teachers" :key="i"
                                class="w-[31%] bg-[#f5f5f5] p-5 mb-7.5 max-md:w-[48%] max-md:p-2.5 max-md:mb-3.75"
                                :class="[
                                    (i + 1) % 3 === 0 ? 'mr-0' : 'mr-[3.5%]',
                                    (i + 1) % 2 === 0 ? 'max-md:mr-0' : 'max-md:mr-[4%]'
                                ]">
                                <p class="inline-block bg-[#333] text-white text-xs px-2 mb-2.5">
                                    {{ teacher.subject }}
                                </p>
                                <p class="text-sm font-bold mb-2.5">{{ teacher.name }}</p>
                                <p class="text-sm">{{ teacher.comment }}</p>
                            </li>
                        </ul>

                        <div class="text-center">
                            <a href="#"
                                class="text-sm relative underline after:content-[''] after:absolute after:-right-4 after:top-1.25 after:w-1.75 after:h-1.75 after:border-r after:border-t after:border-black after:rotate-45">
                                その他の講座を見る
                            </a>
                        </div>
                    </div>
                </section>

                <!-- Feature 4 -->
                <section id="feature-4" class="pt-12.5">
                    <div class="max-w-220 mx-auto px-5">
                        <h3 class="mb-6.25 text-center">
                            <picture>
                                <source media="(max-width: 768px)" srcset="/images/feature-title-4-sp.svg" />
                                <img src="/images/feature-title-4-pc.svg" alt="圧倒的な合格率の高さ" class="inline-block" />
                            </picture>
                        </h3>
                        <p class="text-sm leading-relaxed mb-10 text-center max-md:text-justify">
                            AZUKI進学スクール は、生徒の最終目標である<br class="max-md:hidden" />
                            「志望校合格」にとことんこだわります。<br class="max-md:hidden" />
                            その結果、おかげさまで毎年高い合格率を達成しています。
                        </p>

                        <div class="max-w-150 mx-auto mb-15">
                            <img src="/images/graph.png" alt="2021年度 合格大学内訳と合格実績（合格者数102名、合格率96.5%）" class="w-full" />
                        </div>

                        <p class="border-y border-black text-sm font-bold leading-none py-2.5 mb-6.25 text-center">
                            生徒の声
                        </p>

                        <div class="flex items-center justify-between max-md:flex-col">
                            <div
                                class="max-w-100 bg-[url('/images/bg-line.png')] bg-repeat p-10 text-center mr-10 max-md:p-5 max-md:mr-0 max-md:mb-5">
                                <div class="mb-6.25 max-md:mb-3.75">
                                    <img src="/images/student1.png" alt="" class="w-45 rounded-full mx-auto" />
                                </div>
                                <p class="inline-block bg-white font-bold px-3.75 py-1.25 mb-6.25 max-md:mb-3.75">
                                    生徒　名前
                                </p>
                                <p class="text-[13px] leading-loose text-justify max-md:text-xs">
                                    生徒のコメントが入ります生徒のコメントが入ります。生徒のコメントが入ります生徒のコメントが入ります。生徒のコメントが入ります生徒のコメントが入ります。
                                </p>
                            </div>

                            <div
                                class="max-w-100 bg-[url('/images/bg-line.png')] bg-repeat p-10 text-center max-md:p-5">
                                <div class="mb-6.25 max-md:mb-3.75">
                                    <img src="/images/student2.png" alt="" class="w-45 rounded-full mx-auto" />
                                </div>
                                <p class="inline-block bg-white font-bold px-3.75 py-1.25 mb-6.25 max-md:mb-3.75">
                                    生徒　名前
                                </p>
                                <p class="text-[13px] leading-loose text-justify max-md:text-xs">
                                    生徒のコメントが入ります生徒のコメントが入ります。生徒のコメントが入ります生徒のコメントが入ります。生徒のコメントが入ります生徒のコメントが入ります。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Feature 5 -->
                <section id="feature-5" class="pt-12.5 pb-17.5">
                    <div class="max-w-220 mx-auto px-5">
                        <h3 class="mb-6.25 text-center">
                            <picture>
                                <source media="(max-width: 768px)" srcset="/images/feature-title-5-sp.svg" />
                                <img src="/images/feature-title-5-pc.svg" alt="講習後も万全のフォロー" class="inline-block" />
                            </picture>
                        </h3>
                        <p class="text-sm leading-relaxed mb-10 text-center max-md:text-justify">
                            AZUKI進学スクール は、受講中だけでなく<br class="max-md:hidden" />
                            受講後のサポートにも力を入れています。<br class="max-md:hidden" />
                            生徒が安心して勉強に専念できるように、万全のサポート体制を整えています。
                        </p>
                    </div>

                    <div class="bg-[#ecfcfb] py-10 mb-12.5 max-md:mb-10">
                        <div class="max-w-220 mx-auto px-5">
                            <p class="border-y border-black text-sm font-bold leading-none py-2.5 mb-6.25 text-center">
                                主なサポート
                            </p>
                            <ul
                                class="max-w-185 flex flex-wrap items-center ml-[12%] mb-5 max-md:flex-col max-md:items-start max-md:ml-0">
                                <li v-for="(item, i) in supports" :key="i"
                                    class="w-1/3 font-bold mb-5 before:content-['●'] before:text-brand before:mr-1 max-md:w-full">
                                    {{ item }}
                                </li>
                            </ul>
                            <p class="font-bold leading-relaxed text-center">
                                その他にも生徒全員の学習をフォローする<br />
                                充実したサポートが揃っています！
                            </p>
                        </div>
                    </div>

                    <div class="max-w-220 mx-auto px-5">
                        <div class="mb-12.5">
                            <img src="/images/point-2.jpg" alt="" class="w-full" />
                        </div>
                        <p class="text-[17px] font-bold mb-7.5 text-center">結果を大切にする</p>
                        <p class="text-sm leading-relaxed text-center max-md:text-justify">
                            当スクールは、まず何よりも「
                            <span class="bg-[linear-gradient(rgba(255,255,255,0)_0,#ffff00_0)] font-bold">
                                志望大学への合格
                            </span>
                            」<br class="max-md:hidden" />
                            という結果を一番大切に考えています。<br class="max-md:hidden" />
                            講習の中だけでは足りない部分を、<br class="max-md:hidden" />
                            講習後に
                            <span class="bg-[linear-gradient(rgba(255,255,255,0)_0,#ffff00_0)] font-bold">
                                継続してフォロー
                            </span>
                            していくことで目標達成へ導きます。
                        </p>
                    </div>
                </section>
            </section>
        </main>

        <!-- Footer -->
        <footer id="footer" class="fixed bottom-0 left-0 w-full flex justify-center text-center z-10">
            <a href="" target="_blank"
                class="w-full max-w-120 flex items-center justify-center bg-brand rounded-t-2.5 text-white text-xl font-bold leading-none py-7 hover:opacity-90 transition-opacity max-md:text-base max-md:py-4.5">
                <span class="mr-5 max-md:mr-2.5">無料体験</span>
                <span class="w-3 h-3 border-t-2 border-r-2 border-white rotate-45 max-md:w-2 max-md:h-2"></span>
            </a>
            <a href="" target="_blank"
                class="w-full max-w-120 flex items-center justify-center bg-brand rounded-t-2.5 text-white text-xl font-bold leading-none py-7 hover:opacity-90 transition-opacity max-md:text-base max-md:py-4.5 ml-px">
                <span class="mr-5 max-md:mr-2.5">お問い合わせ</span>
                <span class="w-3 h-3 border-t-2 border-r-2 border-white rotate-45 max-md:w-2 max-md:h-2"></span>
            </a>
        </footer>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

const teachers = [
    { subject: '国語', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '数学', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '英語', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '物理', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '化学', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '国語', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '数学', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '英語', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
    { subject: '物理', name: '講師　氏名', comment: '講師のコメントが入ります。講師のコメントが入ります。講師のコメントが入ります。' },
]

const supports = [
    'メールでの質問受付',
    '進路の相談・アドバイス',
    '最新情報のお届け',
    '学習の相談・アドバイス',
    '個別質問',
    '成績の管理と診断',
    '強化テスト',
    '自習教材',
    '自習室完備',
]

onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            const href = anchor.getAttribute('href')
            const target = document.querySelector(
                href === '#' || href === '' ? 'html' : href
            )
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
})
</script>