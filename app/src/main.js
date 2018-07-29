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
          id: 1,
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
          id: 2,
          tipo: 'gatto',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: true,
          diagnosi: 'sistemato',
          note: 'non ci sono note da visualizzare'
        },
        {
          id: 3,
          tipo: 'gatto',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: true,
          diagnosi: '',
          note: ''
        },
        {
          id: 4,
          tipo: 'cane',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 5,
          tipo: 'cane',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: true,
          diagnosi: '',
          note: ''
        },
        {
          id: 6,
          tipo: 'topo',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 7,
          tipo: 'topo',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 8,
          tipo: 'uccello',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: true,
          diagnosi: '',
          note: ''
        },
        {
          id: 9,
          tipo: 'gatto',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: true,
          diagnosi: '',
          note: ''
        },
        {
          id: 10,
          tipo: 'pesce',
          proprietario: 'Mario Rossi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 11,
          tipo: 'topo',
          proprietario: 'Matteo Renzi',
          data: '13 maggio 2018',
          ora: '18:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 12,
          tipo: 'uccello',
          proprietario: 'Matteo Salvini',
          data: '13 maggio 2018',
          ora: '12:00',
          motivo: 'infarto',
          visitato: false,
          diagnosi: '',
          note: ''
        },
        {
          id: 13,
          tipo: 'pesce',
          proprietario: 'Luigi Di Maio',
          data: '14 agosto 2018',
          ora: '15:00',
          motivo: 'ischemia',
          visitato: true,
          diagnosi: 'salvato',
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
