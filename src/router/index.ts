import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import ManageLayout from '@/layouts/ManageLayout.vue'
import QuestionLayout from '@/layouts/QuestionLayout.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import List from '@/views/manage/List.vue'
import Star from '@/views/manage/Star.vue'
import Trash from '@/views/Trash.vue'
import NotFound from '@/views/NotFound.vue'
import Edit from '@/views/question/Edit/Edit.vue'
import Stat from '@/views/question/Stat/Stat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: 'manage',
          component: ManageLayout,
          children: [
            {
              path: 'list',
              component: List
            },
            {
              path: 'star',
              component: Star
            },
            {
              path: 'trash',
              component: Trash
            }
          ]
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    },
    {
      path: '/question',
      component: QuestionLayout,
      children: [
        {
          path: 'edit/:id',
          component: Edit
        },
        {
          path: 'stat/:id',
          component: Stat
        }
      ]
    }
  ]
})

export default router

// ------------- 常用路由地址 --------------

export const HOME_PATHNAME = '/home'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'
