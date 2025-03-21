<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import { Suspense } from "vue";
</script>

<template>
  <TheNavBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
