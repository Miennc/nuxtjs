export default ($axios) => ({
  getCategory() {
    return $axios.get('category');
  },
  getCategoryById(id) {
    return $axios.get(`products/category/${id}`);
  },
})
