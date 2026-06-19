<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { findNationalityByPerson } from '../api/nationality-api/nationality'
import NationalityResult from '../components/NationalityResult.vue'

const authStore = useAuthStore()
const personName = ref('')
const nationalityResult = ref(null)
const errorMessage = ref('')
const loading = ref(false)

const searchNationality = async () => {
  errorMessage.value = ''
  nationalityResult.value = null

  const name = personName.value.trim()
  if (!name) {
    errorMessage.value = 'Please enter a name.'
    return
  }

  loading.value = true
  try {
    nationalityResult.value = await findNationalityByPerson(name)
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Unable to load nationality data.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <h1>
      User Nationality
    </h1>

    <p>
      Welcome, {{ authStore.userName }}!
    </p>

    <section class="nationality-search">
      <h2>Find Nationality</h2>

      <div>
        <input
          v-model="personName"
          placeholder="Enter a name"
        />
        <button @click="searchNationality" :disabled="loading">
          {{ loading ? 'Searching...' : 'Search' }}
        </button>
      </div>

      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>
    </section>

    <NationalityResult :nationalityData="nationalityResult" />
  </div>
</template>