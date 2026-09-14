<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />
        <main class="flex-1">
            <router-view />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>