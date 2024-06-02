<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
<template>
    <div class="loading">
        <div>

        </div>
    </div>

</template>
<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid white;
    border-top-color: #f2ddbe;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
