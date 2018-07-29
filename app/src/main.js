// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:
    {
      animals: [
        {
          tipo: 'cane',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'labirintite',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          tipo: 'cane',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'labirintite',
          visitato: true,
          diagnosi: '',
          note: ''
        }
      ],
      additional: [
        {
          title: 'Some additional info',
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Some additional info',
          description: 'Lorem ipsum dolor sit amet'
        }
      ]
    }

})
