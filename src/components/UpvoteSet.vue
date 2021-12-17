<template>
    <div class="upvoteSetContainer">
        <p>{{ section }}</p>
        <Upvote v-for:="index in this.$store.state[section].num" :key="index" :section="section"/>
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
      section: String
  },
  components: {
      Upvote
  },
  methods: {
      handleAddClick() {
          this.$store.commit(`increment_${this.section}`);
      }
  }
}
</script>
