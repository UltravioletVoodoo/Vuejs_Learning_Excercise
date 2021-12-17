<template>
    <div class="upvoteSetSectionContainer">
        <div class="upvoteSetContainer">
            <Upvote v-for:="index in this.$store.state[section].num" :key="index" :section="section"/>
        </div>
        <div class="addIconContainer">
            <div v-on:click="handleAddClick()" class="svgIconBase upvoteArrowContainerNotSelected addIcon">
                <img class="svgIconBase svgIcon" src="../assets/add.svg" />
            </div>
        </div>
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
