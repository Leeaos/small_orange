import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
   }
}).$mount('#app')
