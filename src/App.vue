<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="flex justify-center space-x-4 mb-6">
      <RouterLink to="/signup" class="text-blue-500">Signup</RouterLink>
      <RouterLink to="/login" class="text-blue-500">Login</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>