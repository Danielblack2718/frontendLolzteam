<template>
  <LoadingBlock v-if="loading"></LoadingBlock>
  <div v-else>
    <main v-if="posts.length > 0" class="posts">
      <PostComponent v-for="post in posts" :key="post.id" :post="post" />
    </main>

    <div v-else>Постов нет</div>
  </div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import LoadingBlock from '@/components/LoadingBlock.vue'
import PostComponent from '@/components/PostComponent.vue'
import PostService from '@/api/PostService.js'

const posts = ref([])
var loading = ref(true)
const currentPage = ref(1)
const searchQuery = ref('')

const fetchPosts = () => {
  PostService.getPosts(currentPage.value, searchQuery.value).then((response) => {
    posts.value = response.data
    loading.value = false
  })
}

fetchPosts()

setInterval(() => {
  fetchPosts()
}, 20000)
</script>
<style>
main{
  margin-top: 70px;
}
</style>
