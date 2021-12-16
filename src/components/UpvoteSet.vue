<template>
    <div class="upvoteSetContainer">
        <p>This is an upvote set, it is for color {{ color }}</p>
        <Upvote />
        <Upvote />
        <Upvote />
    </div>
</template>

<script>
import Upvote from "./Upvote.vue";

export default {
  name: 'UpvoteSet',
  props: {
      color: String
  },
  components: {
      Upvote
  }
}
</script>
