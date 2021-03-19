<template>
  <section class="player-games">
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
          :d="parseTitleIcon(data.type)"
          :fill="parseHighlightColor(data.type)"
        />
      </svg>
      {{ data.label }}
    </h2>
    <section class="player-games__stats">
      <div class="player-games__stat">
        <strong
          class="player-games__value"
          :style="`color:${parseHighlightColor(data.type)};`"
        >
          {{ data.matches }}
        </strong>
        Partidas
      </div>
      <div class="player-games__stat">
        <strong class="player-games__value player-games__value--wins">
          {{ data.wins }}
        </strong>
        Vitórias
      </div>
      <div class="player-games__stat">
        <strong class="player-games__value player-games__value--losses">
          {{ data.losses }}
        </strong>
        Derrotas
      </div>
    </section>
    <a
      :href="data.action.link"
      class="player-games__button"
      :class="data.type ? 'player-games__button--alt' : ''"
      :style="`background-color:${parseHighlightColor(data.type)};`"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.5858 17L4 17L4 15L25.5858 15L15.2929 4.70711L16.7071 3.29289L29.4142 16L16.7071 28.7071L15.2929 27.2929L25.5858 17Z"
          v-if="!data.type"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 5C9.642 5 7.66667 6.99603 7.66667 9.53846C7.66667 12.0809 9.642 14.0769 12 14.0769C14.358 14.0769 16.3333 12.0809 16.3333 9.53846C16.3333 6.99603 14.358 5 12 5ZM16.3355 14.3053C17.5691 13.1068 18.3333 11.4061 18.3333 9.53846C18.3333 5.96328 15.533 3 12 3C8.46696 3 5.66667 5.96328 5.66667 9.53846C5.66667 11.4061 6.43088 13.1068 7.66454 14.3053C4.9577 15.0646 3 17.6261 3 20.6154V29H21V20.6154C21 17.6261 19.0423 15.0646 16.3355 14.3053ZM9.33333 16.0769C6.97534 16.0769 5 18.073 5 20.6154V27H19V20.6154C19 18.073 17.0247 16.0769 14.6667 16.0769H9.33333Z"
          v-if="data.type"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.3333 9.53846C24.3333 6.99603 22.358 5 20 5V3C23.533 3 26.3333 5.96328 26.3333 9.53846C26.3333 11.4061 25.5691 13.1068 24.3355 14.3053C27.0423 15.0646 29 17.6261 29 20.6154V29H24V27H27V20.6154C27 18.073 25.0247 16.0769 22.6667 16.0769H20V14.0769C22.358 14.0769 24.3333 12.0809 24.3333 9.53846Z"
          v-if="data.type"
        />
      </svg>
      <span>{{ data.action.label }}</span>
    </a>
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
    parseTitleIcon(type) {
      if (type != undefined) {
        return 'M7.0001 3H25.0001V8.41421L21.863 11.5514L20.2248 10.3611L23.0001 7.58579V5H18.0001V8.74483L16.0001 7.29175L14.0001 8.74483V5H9.0001V7.58579L11.7754 10.3611L10.1372 11.5514L7.0001 8.41421V3ZM16.0001 15L17.7635 18.5729L21.7064 19.1459L18.8533 21.9271L19.5268 25.8541L16.0001 24L12.4734 25.8541L13.1469 21.9271L10.2938 19.1459L14.2367 18.5729L16.0001 15ZM16.0001 9.76393L5.31396 17.5279L9.39571 30.0902H22.6045L26.6862 17.5279L16.0001 9.76393ZM10.8488 28.0902L7.66511 18.2918L16.0001 12.2361L24.3351 18.2918L21.1514 28.0902H10.8488Z'
      } else {
        return 'M7 3H25V23H28V25H24.255L13.4789 30.8779L12 30V9.40637L20.0783 5H9V25H4V23H7V3ZM23 5.68454L14 10.5936V28.3155L23 23.4064V5.68454ZM16 18V16H18V18H16Z'
      }
    },
    parseHighlightColor(type) {
      switch (type) {
        case 'open':
          return '#2196FD'
          break
        case 'pro':
          return '#F23641'
          break
        default:
          return '#FACF5A'
      }
    }
  }
}
</script>
