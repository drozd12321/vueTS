<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import { Suspense } from "vue";
</script>

<template>
  <TheNavBar />
  <main>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
