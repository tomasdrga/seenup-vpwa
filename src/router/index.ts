import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import routes from './routes';

// Define the router configuration
export default route(function (/* { store, ssrContext } */) {
  // Determine the history mode based on the environment
  const createHistory = process.env.SERVER ? createMemoryHistory : createWebHistory;

  // Create the router instance
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(), // History mode for cleaner URLs
  });

  // Return the router instance
  return Router;
});