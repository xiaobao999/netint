import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import echarts from 'echarts'
import HttpSever from '@/http.js'
import MyCard from '@/components/mycard.vue'
import LeftList from '@/components/leftlist.vue'
import RightList from '@/components/rightlist.vue'

Vue.use(HttpSever)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(MyCard.name, MyCard)
Vue.component(LeftList.name, LeftList)
Vue.component(RightList.name, RightList)
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')