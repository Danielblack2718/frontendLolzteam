<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AuthorizationModal from '@/components/Modal/AuthorizationModal.vue'

import { ref } from 'vue'

const isModalOpen = ref(false)

</script>
<template>
  <header>
    <div>
      <RouterLink to="/">
        <img src="@/assets/logo.svg" width="35" alt="" />

      </RouterLink>


      <div v-if="!auth" class="register" @click="isModalOpen = true">
        Авторизоваться
      </div>

      <nav v-else>
        <RouterLink to="/admin">Администрирование</RouterLink>
        <RouterLink to="/profile">Admin</RouterLink>
      </nav>
    </div>

  </header>

  <AuthorizationModal :modalActive="isModalOpen" @close="isModalOpen = false"/>

</template>
<style scoped>
.modal-enter {
  opacity: 0;
}

.modal-enter-active {
  opacity: 1;
  transition: opacity 0.5s;
}

.modal-leave {
  opacity: 1;
}

.modal-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1em;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
  background-color: #ffefd5;

  & .register {
    font-size: 20px;
    cursor: pointer;
  }

  &>div {
    max-width: 1480px;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &>div>nav {
    display: flex;
    gap: 20px;
  }

  &>div>nav>a {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
