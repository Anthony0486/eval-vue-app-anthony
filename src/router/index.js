import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', alias: '/home', component: () => import('../views/Home.vue') },
    { path: '/component_communication', component: () => import('../views/ComponentCommunication.vue') },
    { path: '/conditional_list_rendering', component: () => import('../views/ContionalRendering.vue') },
    { path: '/computed_properties', component: () => import('../views/ComputedProperties.vue') },
    {path: '/:pathMatch(.*)*',name: 'not-found',meta: {description: 'Page non trouvée'}, component: () => import('../views/NotFound.vue')},
  ],
})

export default router