import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import WorkView from '../views/WorkView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: '安土建設株式会社' }
    },
    {
        path: '/company',
        name: 'company',
        component: CompanyView,
        meta: { title: '企業情報 | 安土建設株式会社' }
    },
    {
        path: '/work',
        name: 'work',
        component: WorkView,
        meta: { title: '実績紹介 | 安土建設株式会社' }
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView,
        meta: { title: 'ニュース | 安土建設株式会社' }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: { title: 'お問い合わせ | 安土建設株式会社' }
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: PrivacyView,
        meta: { title: 'プライバシーポリシー | 安土建設株式会社' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || '安土建設株式会社'
})

export default router