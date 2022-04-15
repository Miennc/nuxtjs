<template>
<div>
  <div class="h-screen bg-black flex items-center justify-center mx-12 mt-5">

    <div class="grid grid-cols-5 gap-2 px-16">

      <!-- Item 1 -->
      <div class="flex flex-col gap-1" v-for="(categoryItem, index) in categories" :key="index">

        <!-- Image -->
        <a href="" class="bg-purple-500">
          <NuxtLink :to="{name:'CategoryDetail',query:{id:categoryItem.id}}">
            <img src="http://128.199.211.17/storage/products/1649735743010b87210be9f0b3fd0984dc6831cbedc%20(1).jpg" />

          </NuxtLink>
        </a>

        <!-- Games Title -->
        <a href="#" class="hover:text-purple-500 text-gray-200 font-semibold"> {{categoryItem.name}} </a>

        <!-- Viewers -->
        <a href="#" class="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 78.4K viewers </a>

        <!-- Category Tags -->
        <div class="flex flex-row flex-wrap gap-2">
          <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
          <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ca văn te go ry'
    }
  },
  name: "Category",
  data(){
    return {
      categories:[]
    }
  },
  async fetch(){
    try{
      const response = await this.$repositories.category.getCategory();
      this.categories = response.data;
    } catch (error) {
      console.log(error)
    }
  }

}
</script>

<style scoped>

</style>
