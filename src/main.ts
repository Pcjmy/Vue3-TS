import { createApp, defineComponent, h, reactive, ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import App from './App.vue'

// eslint-disable-next-line
const img = require('./assets/logo.png')

const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'Pcjmy',
    })

    const numberRef = ref(1)

    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)
    return () => {
      const number = numberRef.value
      return h('div', { id: 'app' }, [
        h('img', {
          alt: 'Vue logo',
          src: img,
        }),
        h('p', state.name + number),
      ])
    }
  },
})

createApp(App).mount('#app')
