<template>
  <main class="player">
    <p class="player-error" v-if="error !== ''">
      {{ error }}<br />
      <router-link to="/">
        Voltar para a página inicial
      </router-link>
    </p>
    <section class="player-wrapper" v-if="!loading && error === ''">
      <header class="player-header" :class="'player-header--'+playerExpertiseSlug(playerInfo.player.expertise)">
        <p>{{ playerInfo.player.nickname }}</p>
      </header>
    </section>
  </main>
</template>

<script>
import { fetchPlayerInfo } from '@/utils/api'

export default {
  data: () => ({
    loading: false,
    players: [
      {
        id: 737335,
        nickname: 'GC.Muleklizzo',
        avatar:
          'https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg',
        hash: '5ec7dd672f00003b0a427579'
      },
      {
        id: 94,
        nickname: 'mibr.FalleN',
        avatar:
          'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/ac6fd3610257492db106bc30892bf213aa4a0689_full.jpg',
        hash: '5ecbe07d3000005a67ddd9df'
      }
    ],
    playerHash: '',
    playerId: 0,
    error: '',
    playerInfo: {}
  }),
  beforeMount() {
    // Setting current player's ID based on the route parameter
    this.playerId = parseInt(this.$route.params.slug)
    // Setting current player's hash for the API request
    this.playerHash = this.findPlayerHash(this.playerId)
    // Fetching current player's data from API
    fetchPlayerInfo(this)
  },
  methods: {
    fetchPlayerInfo,
    findPlayerHash(id) {
      /* Ideally, the API request would use the player's ID to fetch data
        For the mockup, I'm looking for the player's hash based on the ID */
      let playerHash = ''
      this.players.forEach(player => {
        if (player.id === id) {
          playerHash = player.hash
        }
      })
      return playerHash
    },
    playerExpertiseSlug(expertise) {
      if (expertise >= 100) {
        return 'pro'
      } else if (expertise >= 75 && expertise < 100) {
        return 'amateur'
      } else if (expertise >= 50 && expertise < 75) {
        return 'competitive'
      } else if (expertise >= 25 && expertise < 50) {
        return 'casual'
      } else {
        return 'starter'
      }
    }
  }
}
</script>
