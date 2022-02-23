import Vue from 'vue/dist/vue'

Vue.config.productionTip = false

new Vue({
  directives: {
    'on2': {
      bind(el, info) {
        el.addEventListener(info.arg, info.value)
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value)
      }
    }
  },
  methods: {
    hi() {
      console.log('hi')
    }
  },
  template: `
    <button v-on2:click="hi">点我</button>
  `
}).$mount('#app')
