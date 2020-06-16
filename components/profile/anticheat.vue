<template>
  <a :href="data.download" class="player-anticheat">
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
        d="M16.7071 21.7071L16 22.4142L15.2929 21.7071L7.29289 13.7071L8.70711 12.2929L15 18.5858V3H17V18.5858L23.2929 12.2929L24.7071 13.7071L16.7071 21.7071ZM3 21V27V28H4H28H29V27V21H27V26H5V21H3Z"
        fill="white"
      />
    </svg>
    <span>{{ data.label }}</span>
  </a>
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
