<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="not-found-page flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-indigo-500 mb-4">404</h1>
      <p class="text-xl mb-6 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
      <RouterLink to="/" class="btn inline-flex">
        Go to Home
      </RouterLink>
    </div>
  </div>
</template>