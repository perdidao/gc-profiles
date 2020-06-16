import Axios from 'axios'

/**
 * Error treatment for data population
 * @param {Number} errorCode - Error code number
 * @param {Object} self - Vue component object
 */
export const errorFeedback = (error, self) => {
  const errorCode = error.response.status
  switch (errorCode) {
    case 404:
      self.error =
        'Não conseguimos encontrar o jogador selecionado, tente atualizar a página em alguns minutos.'
      break
    case 504:
      self.error =
        'Essa requisição demorou muito para responder, aguarde alguns minutos e tente novamente.'
      break
    default:
      self.error = 'Erro interno do servidor, tente novamente mais tarde.'
  }
}

/**
 * Fetch single player information from the API
 * @param {Object} self Vue Object
 */
export const fetchPlayerInfo = self => {
  const { playerHash } = self
  self.loading = true

  Axios.get(`${process.env.api}${playerHash}`)
    .then(response => {
      self.playerInfo = response.data.data
      self.loading = false
    })
    .catch(error => {
      errorFeedback(error, self)
      self.loading = false
    })
}
