import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Page from './components/page.vue';
import Dashboard from './components/dashboard.vue';
import Commands from './components/commands.vue';
import Timers from './components/timers.vue';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'cashboard',
      component: Dashboard
    },
    {
      path: '/commands',
      name: 'commands',
      component: Commands
    },
    {
      path: '/timers',
      name: 'timers',
      component: Timers
    }
  ]
});


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
