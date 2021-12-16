<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <UpvoteSet color="blue" />
  <UpvoteSet color="green" />
  <UpvoteSet color="red" />
  <button v-on:click="this.$store.commit('toggle')">click me</button>
</template>

<script>
import UpvoteSet from './components/UpvoteSet.vue';


export default {
  name: 'App',
  components: {
    UpvoteSet
  }
}
</script>
