<template>
    <LoadingBlock v-if="loading"></LoadingBlock>
    <div v-else class="post">
        <div class="post__header">
            {{ post.title }}
        </div>
        <div class="post__body">
            <div class="img">
                <img :src="post.image" alt="" />
            </div>
            <div class="post__content">
                {{ post.content }}
            </div>
        </div>
        <h1>Комментарии</h1>
        <Comments :comments="post.comments" />
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PostService from '@/api/PostService'
import LoadingBlock from '@/components/LoadingBlock.vue'
import Comments from '@/components/Comments/Comments.vue'

export default {
    name: 'Post',
    setup() {
        const post = ref({})
        const route = useRoute()
        var loading = ref(true)

        const fetchPosts = () => {
            PostService.getPost(route.params.id).then((response) => {
                console.log(response)
                post.value = response.data
                loading.value = false
            })
        }

        fetchPosts()

        return {
            post
        }
    },
    components: {
        Comment
    }
}
</script>

<style scoped>
.post {
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    max-width: 1480px;
    width: 100%;
    min-width: 100%;


    .img {
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 0;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            filter: blur(10px);
            z-index: 0;
        }

        img {
            max-width: 1480px;
            max-height: 800px;
            object-fit: cover;
            position: relative;
            z-index: 1;
        }
    }

    & .post__header {
        font-size: 30px;
        font-weight: 600;
        width: 100%;
        padding: 10px;
        box-shadow: 0px 0px 2px black;
        border-radius: 5px;
        background-color: antiquewhite;
    }

    & .post__body {
        width: 100%;
        box-shadow: 0px 0px 2px black;
        border-radius: 5px;
        background-color: antiquewhite;
        margin-top: 10px;
    }

    & .post__content {
        padding: 1em;
        margin-top: 10px;
    }
}
</style>
