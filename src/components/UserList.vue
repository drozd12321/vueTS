<template>
  <div>
    {{ users }}
    <div v-for="user in users.value">
      {{ user.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from "@/use/users";

interface User {
  name: string;
  username: string;
  email: string;
  address: object;
  geo: string;
}

const { users }: User = await useUsers();
</script>
