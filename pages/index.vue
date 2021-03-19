<template>
  <main class="initial">
    <h1 class="initial-title">Perfis de jogadores</h1>
    <section class="initial-players">
      <div class="initial-player" v-for="player in players" :key="player.id">
        <figure class="initial-player__avatar">
          <router-link
            :to="`/player/${player.id}`"
            :title="`Perfil de ${player.nickname}`"
          >
            <img :src="player.avatar" :alt="player.nickname" />
          </router-link>
        </figure>
        <h2 class="initial-player__nickname">
          <router-link
            :to="`/player/${player.id}`"
            :title="`Perfil de ${player.nickname}`"
          >
            <strong class="initial-player__name">{{ player.nickname }}</strong>
            ID: {{ player.id }}
          </router-link>
        </h2>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
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
    ]
  })
}
</script>
