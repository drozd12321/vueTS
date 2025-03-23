<template>
  <div>
    <div class="users" v-for="user in users">
      <div class="inf">
        <span><strong>username:</strong> {{ user.username }} </span>
        <span><strong>name:</strong> {{ user.name }}</span>
        <span><strong>email:</strong> {{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from "@/use/users";

const { users } = await useUsers();
</script>
<style scoped>
.users {
  background-color: antiquewhite;
  color: black;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 7px;
  padding: 8px;
  margin: 7px auto;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.inf {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
