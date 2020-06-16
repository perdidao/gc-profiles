export default {
  mode: 'spa',
  head: {
    title: 'Gamersclub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
  env: {
    api: 'https://5ee78effffee0c0016a1248e.mockapi.io/api/v1/'
  },
  loading: { color: '#fff' },
  css: ['assets/styles/main.scss'],
  modules: ['@nuxtjs/axios'],
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {}
      }
    }
  }
}
