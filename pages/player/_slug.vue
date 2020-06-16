<template>
  <section class="player">
    {{ playerId }}
  </section>
</template>

<script>
export default {
  data: () => ({
    playerId: 0,
  }),
  mounted () {
    this.playerId = this.$route.params.slug
  }
}
</script>
