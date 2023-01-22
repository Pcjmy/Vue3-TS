<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :age="18" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
