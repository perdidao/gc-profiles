<template>
  <section class="player-info">
    <figure class="player-info__avatar">
      <div class="player-info__viewport">
        <img :src="data.avatar" :alt="data.nickname">
      </div>
    </figure>
    <div class="player-info__content">
      <h2 class="player-info__nickname">
        {{ data.nickname }}
      </h2>
      <p class="player-info__id">
        ID: {{ data.id }}
      </p>
    </div>
  </section>
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
