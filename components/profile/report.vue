<template>
  <div class="player-report" :class="`player-report--${data.type}`">
    <p class="player-report__total">
      {{ data.total }}
    </p>
    <p class="player-report__label">
      {{ parseLabelText(data.label) }}
      <strong class="player-report__highlighted">
        {{ parseLabelHightlight(data.label) }}
      </strong>
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
  },
  methods: {
    parseLabelText(string) {
      const initial = string.split(' **')
      return initial[0]
    },
    parseLabelHightlight(string) {
      const rgx = /\*{2}(.*?)\*{2}/
      const highlighted = rgx.exec(string)
      return highlighted[1]
    }
  }
}
</script>
