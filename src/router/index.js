import { createRouter, createWebHistory } from 'vue-router'
import NoteUpdate from '../components/NoteUpdate.vue'
import NoteHome from '../components/NoteHome.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'NoteHome',
      component: NoteHome,
      path: '/',
  },
  {
      name: 'NoteUpdate',
      component: NoteUpdate,
      path: '/update/:id',
  }
  ]
})

export default router
