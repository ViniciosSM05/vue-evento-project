import { createRouter, createWebHistory } from 'vue-router'
import CadastroEventoView from '../views/cadastro-evento/CadastroEventoView.vue'
import ListagemEventosView from '@/views/listagem-eventos/ListagemEventosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listagem',
      component: ListagemEventosView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroEventoView
    }
  ]
})

export default router
