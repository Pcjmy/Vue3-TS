import { createApp } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import App from './App.vue'

// eslint-disable-next-line
// const img = require('./assets/logo.png')

// const App = defineComponent({
//   render() {
//     return createVNode('div', { id: 'app' }, [
//       createVNode('img', {
//         alt: 'Vue logo',
//         src: img,
//       }),
//       createVNode(HelloWorld, {
//         msg: 'Welcome to Your Vue.js + TypeScript App',
//         age: 18,
//       }),
//     ])
//   },
// })

createApp(App).mount('#app')
