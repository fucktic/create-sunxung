import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ParentLayout from '@/layout/ParentLayout.vue'

const routers = [
  {
    path: '/',
    name: '',
    redirect: '/home',
    component: ParentLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '大屏主页',
        },
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(''),
  routes: routers,
  strict: true,
})

router.beforeEach(async (to, from, next) => {
  document.title = (to?.meta?.title as string) || document.title
  next()
})
export async function setupRouter(app: App): Promise<void> {
  app.use(router)
}
