import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueQuagga from 'vue-quaggajs'
import VueParticles from 'vue-particles'

Vue.use(VueQuagga);
Vue.use(VueParticles);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
