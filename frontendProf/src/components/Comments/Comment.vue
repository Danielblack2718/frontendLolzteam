<template>
    <div class="comment">
        {{ comment.content }}
    </div>
</template>
<script>
import CommentService from '@/api/CommentService';


export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    setup() {
        const deleteComment = async () => {
            await CommentService.deleteComment(this.comment.id);
            this.$emit('delete', this.comment.id);
        }

        return {
            deleteComment
        }
    }
}

</script>