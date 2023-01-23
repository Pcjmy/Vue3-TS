<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :age="18" />
  <p>{{ state.name }}</p>
  <p>{{ nameRef }} : {{ computedNameRef }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { reactive, ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

interface Config {
  name: string
}

export default defineComponent({
  name: 'App',
  props: {
    age: {
      type: Number as PropType<number>,
    },
    config: {
      type: Object as PropType<Config>,
      required: true,
    },
  },
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this.state)
    console.log(this.nameRef)
    console.log(this.computedNameRef)
  },
  setup() {
    const state = reactive({
      name: 'Pcjmy',
    })
    // let name = 'Pcjmy'
    const nameRef = ref('Pcjmy')
    setInterval(() => {
      state.name += '1'
      nameRef.value += '1'
    }, 1000)
    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })
    return { state, nameRef, computedNameRef }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
