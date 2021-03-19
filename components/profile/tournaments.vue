<template>
  <section class="player-tournaments">
    <h2 class="player-sections__title">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="player-sections__icon"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 6H7V4H25V6H24V8H27.5V17.5803L23.9707 19.5971C23.671 22.6305 21.1122 25 18 25H17V28H21V30H11V28H15V25H14C10.9006 25 8.35015 22.65 8.03316 19.6346L4 17.618V8H8V6ZM10 6V19C10 21.2091 11.7909 23 14 23H18C20.2091 23 22 21.2091 22 19V6H10ZM8 10H6V16.382L8 17.382V10ZM24 17.2768L25.5 16.4197V10H24V17.2768Z"
          fill="#9cc00c"
        />
      </svg>
      {{ data.label }}
    </h2>
    <section class="player-tournaments__next">
      <p
        class="player-tournaments__open"
        v-if="data.nextTournament.status == 'openRegistration'"
      >
        Inscrições Abertas
      </p>
      <h2 class="player-tournaments__title">
        {{ data.nextTournament.name }}
      </h2>
      <div class="player-tournaments__status">
        <p class="player-tournaments__teams">Times inscritos</p>
        <p class="player-tournaments__totals">
          {{ data.nextTournament.currentTeams }}
          <span>/{{ data.nextTournament.maxTeams }}</span>
        </p>
      </div>
      <div class="player-tournaments__bar">
        <div
          class="player-tournaments__current"
          :style="
            `width:${teamsPercentage(
              data.nextTournament.currentTeams,
              data.nextTournament.maxTeams
            )}%;`
          "
        ></div>
      </div>
    </section>
  </section>
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
    teamsPercentage(current, total) {
      return (current * 100) / total
    }
  }
}
</script>
