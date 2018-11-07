import Vue from 'vue';
import '@/plugins/axios';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');