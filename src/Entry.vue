<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <main class="mx-6 sm:mx-12">
    <nav class="py-3 text-xl">
      <ul class="flex gap-4">
        <li><RouterLink to="/">設備管理系統</RouterLink></li>
        <li><RouterLink to="/about">關於</RouterLink></li>
        <li><RouterLink to="/app">APP</RouterLink></li>
      </ul>
    </nav>
    <section class="">
      <RouterView></RouterView>
    </section>
  </main>
</template>

<style>
.h1 {
  @apply my-6 text-4xl font-extrabold;
}
</style>
