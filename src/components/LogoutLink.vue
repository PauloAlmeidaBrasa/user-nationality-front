<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="logout-link" v-if="authStore.isAuthenticated">
    <a href="#" @click.prevent="logout">Logout</a>
  </div>
</template>
