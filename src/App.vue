<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Upvote />
  <Upvote />
  <Upvote />
  <button v-on:click="this.$store.commit('toggle')">click me</button>
</template>

<script>
import Upvote from './components/Upvote.vue';


export default {
  name: 'App',
  components: {
    Upvote
  }
}
</script>
