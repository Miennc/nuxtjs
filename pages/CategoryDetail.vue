<template>
  <div>
    <div class="h-screen bg-black flex items-center justify-center mx-12 mt-5">

      <div class="grid grid-cols-5 gap-2 px-16">

        <!-- Item 1 -->
        <div class="flex flex-col gap-1" v-for="(productItem, index) in products" :key="index">

          <!-- Image -->
          <a href="" class="bg-purple-500">
            <div class="w-64 h-60 overflow-hidden ">
              <img :src="productItem.image.full_image_path" class="object-cover"/>
            </div>
          </a>

          <!-- Games Title -->
          <a href="#" class="hover:text-purple-500 text-gray-200 font-semibold"> {{ productItem.name }} </a>

          <!-- Viewers -->
          <a href="#" class="hover:text-purple-500 text-sm text-white -mt-1"> quantity: {{productItem.quantity}}

          </a>
           <p class="text-white">price {{productItem.price}}</p>
          <!-- Category Tags -->
          <div class="flex flex-row flex-wrap gap-2">
            <a href="#"
               class="hover:bg-gray-600 text-white text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
              view {{productItem.view}} </a>
            <a href="#"
               class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full">
              sold {{productItem.sold}} </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryDetail",
  head() {
    return {
      title: 'ca te go ry đì văn têu',
    };
  },
  data() {
    return {
      products: []
    }
  },
  async fetch() {
    try {
      const response = await this.$repositories.categoryDetail.getCategoryById(this.$route.query.id);
      this.products = response.data;
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
