import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Admin from '../views/Admin.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts',
      name: 'posts_url',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    
    
  ]
})

export default router
