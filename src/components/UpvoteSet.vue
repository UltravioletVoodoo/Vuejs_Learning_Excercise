<template>
    <div class="upvoteSetContainer">
        <p>This is an upvote set, it is for color {{ color }}</p>
        <Upvote v-for:="index in this.$store.state.num" :key="index"/>
    </div>
    <div v-on:click="handleAddClick()" class="svgIconBase upvoteArrowContainer addIcon">
        <img class="svgIconBase svgIcon" src="../assets/add.svg" />
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
  },
  methods: {
      handleAddClick() {
          this.$store.commit(`increment`);
      }
  }
}
</script>
