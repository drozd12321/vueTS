<template>
  <div>
    <div v-for="user in users">
      {{ user.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUsers } from "@/use/users";

const { users } = await useUsers();
</script>
<style scoped></style>
