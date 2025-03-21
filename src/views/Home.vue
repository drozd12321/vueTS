<template>
  <div>
    <h2>Главная</h2>
    <button @click="goToUsers">Перейти на пользователей</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goToUsers = () => {
  router.push("/users");
};
</script>
<style scoped>
button {
  padding: 7px;
  border: none;
  border-radius: 6px;
  background-color: antiquewhite;
  color: black;
  font-size: 17px;
}
</style>
