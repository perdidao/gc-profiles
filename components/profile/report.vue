<template>
  <div class="player-report" :class="'player-report--' + data.type">
    <p class="player-report__total">
      {{ data.total }}
    </p>
    <p class="player-report__label">
      {{ data.label }}
    </p>
  </div>
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
