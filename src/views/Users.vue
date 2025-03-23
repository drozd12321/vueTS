<template>
  <div>
    <h2>Пользователи</h2>
    <Suspense>
      <UserList />
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import UserList from "../components/UserList.vue";
import axios from "axios";
</script>
<style scoped></style>
