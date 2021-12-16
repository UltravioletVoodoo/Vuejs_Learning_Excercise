<template>
  <div class="upvoteContainer">
    <p>This is my upvote component</p>
    <p>The current state is ({{ upvoted }})</p>
  </div>
</template>

<script>
export default {
  name: 'Upvote',
  computed: {
    upvoted() {
      return this.$store.state.upvoted;
    }
  }
}
</script>
