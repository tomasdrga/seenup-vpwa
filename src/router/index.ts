import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import routes from './routes';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER ? createMemoryHistory : createWebHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(), // History mode for cleaner URLs
  });

  return Router;
});
