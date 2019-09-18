import Vue from 'vue';
import App from './App.vue';
import IonicVue from '@ionic/vue';
import router from './router';
import '@ionic/core/css/ionic.bundle.css';

Vue.config.productionTip = false;
Vue.use(IonicVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
