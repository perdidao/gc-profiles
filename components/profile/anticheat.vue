<template>
  <a :href="data.download" class="player-anticheat">{{ data.label }}</a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>
