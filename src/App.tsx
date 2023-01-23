import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld'

// eslint-disable-next-line
const img = require('./assets/logo.png')

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}

export default defineComponent({
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
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} />
          {renderHelloWorld(18)}
        </div>
      )
      // return h('div', { id: 'app' }, [
      //   h('img', {
      //     alt: 'Vue logo',
      //     src: img,
      //   }),
      //   h('p', state.name + number),
      // ])
    }
  },
})
