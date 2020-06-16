<template>
  <figure class="player-medal" :class="'player-medal--' + playerExpertiseSlug">
    <img :src="data.image" :alt="data.name" />
  </figure>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    playerExpertiseSlug: {
      type: String,
      default: ''
    }
  }
}
</script>
