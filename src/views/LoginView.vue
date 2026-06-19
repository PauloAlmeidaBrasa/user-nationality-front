<script setup>
import { ref } from 'vue'
import { login } from '../api/auth'
import { useAuthStore } from '../stores/auth'
import { useRoute, useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()

const submit = async () => {

  try {

    const data = await login(
      email.value,
      password.value
    )

    authStore.saveToken(
      data.token
    )

    const redirectTo = route.query.redirect
    const target = Array.isArray(redirectTo)
      ? redirectTo[0]
      : redirectTo || '/'

    router.push(target)

  } catch (error) {

    alert(
      'Invalid credentials'
    )
  }
}
</script>

<template>
  <form @submit.prevent="submit">

    <input
      v-model="email"
      placeholder="Email"
    >

    <input
      type="password"
      v-model="password"
      placeholder="Password"
    >

    <button>
      Login
    </button>

  </form>
</template>