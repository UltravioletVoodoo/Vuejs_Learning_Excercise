<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Upvote v-bind:upvoted="true" />
  <Upvote v-bind:upvoted="false" />
  <!-- <Upvote v-bind:upvoted="store.state.upvoted" /> -->
  <button onclick="store.toggle()">click me</button>
</template>

<script>
import { createStore } from 'vuex';
import Upvote from './components/Upvote.vue';

const store = createStore({
  state () {
    return {
      upvoted: false
    }
  },
  mutations: {
    toggle (state) {
      state.upvoted = !state.upvoted;
    }
  }
});


export default {
  name: 'App',
  components: {
    Upvote
  }
}
</script>
