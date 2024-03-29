<template>
  <main class="player">
    <p class="player-error" v-if="error !== ''">
      {{ error }}<br />
      <router-link to="/">
        Voltar para a página inicial
      </router-link>
    </p>
    <div class="loading-wheel" v-if="loading"></div>
    <section class="player-wrapper" v-if="!loading && error === ''">
      <header
        class="player-header"
        :class="
          `player-header--${playerExpertiseSlug(playerInfo.player.expertise)}`
        "
      >
        <playerInfo :data="playerInfo.player" />
        <expertiseProgress
          :data="playerInfo.expertiseProgress"
          :playerExpertise="playerInfo.player.expertise"
          :playerExpertiseSlug="
            playerExpertiseSlug(playerInfo.player.expertise)
          "
        />
        <featuredMedal
          :data="playerInfo.featuredMedal"
          :playerExpertiseSlug="
            playerExpertiseSlug(playerInfo.player.expertise)
          "
        />
      </header>
      <section class="player-sections">
        <div class="player-sections__col">
          <tournaments :data="playerInfo.tournaments" />
        </div>
        <div class="player-sections__col">
          <gameStats :data="playerInfo.lobby" />
        </div>
        <div class="player-sections__col">
          <gameStats :data="playerInfo.ranked" />
        </div>
      </section>
      <footer class="player-footer">
        <div class="player-footer__left">
          <settings :data="playerInfo.config" />
          <anticheat :data="playerInfo.anticheat" />
        </div>
        <div class="player-footer__right">
          <report
            v-for="report in playerInfo.reports"
            :key="report.type"
            :data="report"
          />
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
import { fetchPlayerInfo } from '@/utils/api'
import playerInfo from '@/components/profile/playerInfo'
import expertiseProgress from '@/components/profile/expertiseProgress'
import featuredMedal from '@/components/profile/featuredMedal'

import tournaments from '@/components/profile/tournaments'
import gameStats from '@/components/profile/gameStats'

import settings from '@/components/profile/settings'
import anticheat from '@/components/profile/anticheat'
import report from '@/components/profile/report'

export default {
  data: () => ({
    loading: false,
    players: [
      {
        id: 737335,
        nickname: 'GC.Muleklizzo',
        avatar:
          'https://static.gamersclub.com.br/players/avatar/737335/737335_full.jpg',
        hash: 'lizzy'
      },
      {
        id: 94,
        nickname: 'mibr.FalleN',
        avatar:
          'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ac/ac6fd3610257492db106bc30892bf213aa4a0689_full.jpg',
        hash: 'fallen'
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
  components: {
    playerInfo,
    expertiseProgress,
    featuredMedal,
    tournaments,
    gameStats,
    settings,
    anticheat,
    report
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
