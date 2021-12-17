<template>
  <div class="upvoteContainer">
    <div v-on:click="handleUpvoteClick()" :class="this.$store.state.upvoted ? 'svgIconBase upvoteArrowContainerSelected' : 'svgIconBase upvoteArrowContainer'">
      <img :class="this.$store.state.upvoted ? 'svgIconBase selectedUpvoteArrow' : 'svgIconBase svgIcon'" src="../assets/arrow.svg" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Upvote',
  computed: {
    upvoted() {
      return this.$store.state.upvoted;
    }
  },
  methods: {
    handleUpvoteClick() {
      this.$store.commit('toggle');
    }
  }
}
</script>
