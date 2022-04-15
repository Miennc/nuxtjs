export default ($axios) => ({
  getCategoryById(id) {
    return $axios.get(`products/category/${id}`);
  },
})
