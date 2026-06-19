<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <div>
    <h1>
      User Nationality
    </h1>

    <p>
      Welcome, {{ authStore.userName }}!
    </p>
  </div>
</template>