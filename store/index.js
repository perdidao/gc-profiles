export const state = () => ({
  showConfigs: false
})

export const mutations = {
  toggleConfigs(state) {
    state.showConfigs = !state.showConfigs
  }
}
