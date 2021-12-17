<template>
  <UpvoteSet section="firstSection" />
  <UpvoteSet section="secondSection" />
  <UpvoteSet section="thirdSection" />
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
