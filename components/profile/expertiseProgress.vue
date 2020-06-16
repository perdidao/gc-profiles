<template>
  <section class="player-expertise">
    <div class="player-expertise__bar">
      <div
        class="player-expertise__current"
        :class="'player-expertise__current--' + playerExpertiseSlug"
        :style="'width:' + playerExpertise + '%;'"
      ></div>
    </div>
    <ul class="player-expertise__list">
      <li
        class="player-expertise__item"
        v-for="step in data"
        :key="step.key"
        :style="'right:' + (100 - step.limit) + '%;'"
      >
        {{ step.label }}
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="player-expertise__icon"
          :class="
            playerExpertise >= step.limit
              ? 'player-expertise__icon--' + playerExpertiseSlug + ' active'
              : ''
          "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 20C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 20ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5Z"
          />
        </svg>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    },
    playerExpertise: {
      type: Number,
      default: 0
    },
    playerExpertiseSlug: {
      type: String,
      default: 0
    }
  }
}
</script>
