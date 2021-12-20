import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/howler',
    name: 'howler',
    component: () => import ('@/views/howler/index.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
