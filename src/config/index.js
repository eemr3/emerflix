const URL_APP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://emerflix.herokuapp.com'

export default {
  URL_APP,
}
