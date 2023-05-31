import { createRouter, createWebHistory } from 'vue-router';

import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: 'Home',
    },
    {
      path: '/about',
      name: 'about',
      component: 'About',
    },
    {
      path: '/contact',
      name: 'contact',
      component: 'Contact',
    },
    {
      path: '/projects',
      name: 'projects',
      component: 'Projects',
    },
  ],
});

export default { router };
