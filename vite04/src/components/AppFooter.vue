<template>
    <footer class="py-[3.75rem] pb-4 bg-gray-200 md:py-[5.625rem] md:pb-5">
        <ul class="flex w-[17.8125rem] mx-auto mb-10">
            <li class="relative px-3 py-1 text-sm text-gray-500">
                <router-link to="/privacy">プライバシーポリシー</router-link>
            </li>
            <li
                class="relative py-1 px-3 text-sm text-gray-500 before:content-[''] before:absolute before:left-0 before:w-px before:h-6 before:bg-gray-500">
                <router-link to="/contact">お問い合わせ</router-link>
            </li>
        </ul>
        <small class="block text-xs text-center text-gray-500">
            © Azuchi Construction Co., Ltd. ALL RIGHTS RESERVED.
        </small>
    </footer>
</template>