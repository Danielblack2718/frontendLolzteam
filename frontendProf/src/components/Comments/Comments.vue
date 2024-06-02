<template>
    <div>
        <div class="comments">
            <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
        <div>
            Комментариев нет
        </div>
    </div>


</template>
<script setup>
import Comment from './Comment.vue';
import { defineProps } from 'vue';

defineProps({
    comments: {
        type: Array,
        required: true
    }
})

</script>
<style>
.comments{
    width: 100%;
}
</style>