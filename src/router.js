import { createRouter, createWebHistory } from 'vue-router';
import Form from './components/Form.vue';
import Preview from './components/Preview.vue';

const routes = [
  { path: '/', component: Form, name: 'Form' },
  { path: '/preview', component: Preview, name: 'Preview' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
