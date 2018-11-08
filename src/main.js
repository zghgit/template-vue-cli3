import Vue from 'vue';
import '@/plugins/axios';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Normalize from 'normalize.css';
import 'normalize.css/normalize.css';
import echarts from 'echarts';
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS

// import $ from 'jquery';



Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
// Vue.prototype.$j = director;

Vue.use(ElementUI);
Vue.use(Normalize);
Vue.use(iView);
// Vue.use();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');