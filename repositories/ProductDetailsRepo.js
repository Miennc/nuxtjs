export default ($axios) => ({
  getDataProductDetails(id) {
    return $axios.get(`/products/${id}`);
  },
})
