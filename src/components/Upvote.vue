<template>
  <p>This is my upvote component</p>
  <p>The current state is ({{ upvoted }})</p>
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
