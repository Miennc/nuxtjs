export default ($axios) => ({
  getDataHome() {
    return $axios.get('home')
  },
})
