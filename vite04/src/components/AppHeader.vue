<template>
    <header class="fixed top-0 left-0 w-full bg-white z-[800] border-b border-primary">
        <div
            class="header-container relative flex items-center gap-[12.53vw] w-full px-[5.33vw] py-[1.6875rem]
                md:max-w-[1000px] md:w-[71.43vw] md:justify-between md:gap-0 md:px-0 md:py-[1.5625rem] md:mx-auto md:z-[900]">

            <!-- ハンバーガーボタン -->
            <button type="button" class="flex flex-col gap-2 z-[999] w-8 md:hidden" :aria-expanded="isOpen"
                aria-label="メインメニューを開く" @click="toggleMenu">
                <span class="w-full h-0.5 bg-primary transition-all duration-500 ease-in-out"
                    :class="{ 'relative translate-y-[0.6875rem] rotate-45 bg-white': isOpen }"></span>
                <span class="w-full h-0.5 bg-primary transition-all duration-500 ease-in-out"
                    :class="{ 'hidden': isOpen }"></span>
                <span class="w-full h-0.5 bg-primary transition-all duration-500 ease-in-out"
                    :class="{ 'relative translate-y-0 rotate-[135deg] bg-white': isOpen }"></span>
            </button>

            <!-- ロゴ -->
            <router-link to="/" class="u-link">
                <h1 class="leading-none text-0">
                    <picture>
                        <source srcset="/images/logo-sp.png" media="(max-width: 767.99px)" />
                        <img src="/images/logo-pc.png" alt="安土建設株式会社"
                            class="w-[11.25rem] h-[1.45625rem] md:w-[14.775rem] md:h-[1.9125rem]" loading="lazy"
                            decoding="async" />
                    </picture>
                </h1>
            </router-link>

            <!-- PCメニュー -->
            <nav class="hidden md:flex">
                <ul class="flex gap-[clamp(10px,2vw,40px)] min-[1400px]:gap-[clamp(10px,2.86vw,40px)]">
                    <li><router-link to="/company" class="text-sm header__menu-link u-link">企業情報</router-link></li>
                    <li><router-link to="/work" class="text-sm header__menu-link u-link">実績紹介</router-link></li>
                    <li><router-link to="/news" class="text-sm header__menu-link u-link">ニュース</router-link></li>
                    <li><router-link to="/contact" class="text-sm header__menu-link u-link">お問い合わせ</router-link></li>
                </ul>
            </nav>
        </div>

        <!-- ハンバーガーメニュー -->
        <div class="absolute z-[998] top-0 left-0 overflow-hidden w-full transition-all duration-500"
            :style="{ height: menuHeight }">
            <ul ref="menuList" class="flex flex-col items-center w-full h-screen gap-2 pt-20 pb-4 bg-black">
                <li><router-link to="/" class="text-sm text-white" @click="closeMenu">トップ</router-link></li>
                <li><router-link to="/company" class="text-sm text-white" @click="closeMenu">企業情報</router-link></li>
                <li><router-link to="/work" class="text-sm text-white" @click="closeMenu">実績紹介</router-link></li>
                <li><router-link to="/news" class="text-sm text-white" @click="closeMenu">ニュース</router-link></li>
                <li><router-link to="/contact" class="text-sm text-white" @click="closeMenu">お問い合わせ</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isAnimating = ref(false)
const menuHeight = ref('0px')
const menuList = ref(null)

const toggleMenu = () => {
    if (isAnimating.value) return
    isAnimating.value = true

    if (!isOpen.value) {
        // 開く
        isOpen.value = true
        const targetHeight = menuList.value.offsetHeight
        menuHeight.value = targetHeight + 'px'
        setTimeout(() => {
            menuHeight.value = 'auto'
            isAnimating.value = false
        }, 500)
    } else {
        // 閉じる
        const targetHeight = menuList.value.offsetHeight
        menuHeight.value = targetHeight + 'px'
        setTimeout(() => {
            menuHeight.value = '0'
            isOpen.value = false
            isAnimating.value = false
        }, 1)
    }
}

const closeMenu = () => {
    if (isOpen.value && !isAnimating.value) {
        isAnimating.value = true
        const targetHeight = menuList.value.offsetHeight
        menuHeight.value = targetHeight + 'px'
        setTimeout(() => {
            menuHeight.value = '0'
            isOpen.value = false
            isAnimating.value = false
        }, 1)
    }
}

const handleOutsideClick = (e) => {
    if (isOpen.value && !isAnimating.value) {
        const button = document.querySelector('button[aria-label="メインメニューを開く"]')
        const menu = document.querySelector('.absolute.z-\\[998\\]')
        if (button && menu && !button.contains(e.target) && !menu.contains(e.target)) {
            closeMenu()
        }
    }
}

const handleResize = () => {
    if (window.innerWidth >= 768 && isOpen.value) {
        isOpen.value = false
        menuHeight.value = '0'
    }
}

onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    window.removeEventListener('resize', handleResize)
})
</script>