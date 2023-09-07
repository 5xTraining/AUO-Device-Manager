<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <nav class="px-2 py-3 text-xl shadow">
    <ul class="flex gap-4">
      <li><RouterLink to="/">設備管理系統</RouterLink></li>
      <li><RouterLink to="/about">關於</RouterLink></li>
      <li><RouterLink to="/app">APP</RouterLink></li>
    </ul>
  </nav>
  <main class="mx-6 sm:mx-12">
    <RouterView></RouterView>
  </main>
</template>
