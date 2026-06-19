<template>
  <div class="app-shell">
    <LogoutLink />
    <router-view />
  </div>
</template>

<script setup>
import LogoutLink from './components/LogoutLink.vue'
</script>

<style>
.app-shell {
  min-height: 100vh;
  position: relative;
  padding: 1rem;
}

.logout-link {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}

.logout-link a {
  color: #1d4ed8;
  text-decoration: none;
  font-weight: 600;
}

.logout-link a:hover {
  text-decoration: underline;
}
</style>
