<template>
  <div>
    <h2>Пользователи</h2>
    <Suspense>
      <UserList />
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import UserList from "../components/UserList.vue";
</script>
<style scoped></style>
