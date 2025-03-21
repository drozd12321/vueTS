<template>
  <header>
    <div class="grid">
      <h2 class="h2">TS</h2>
      <div class="group">
        <div class="glavn"><router-link to="/">Главная</router-link></div>
        <div class="users">
          <router-link :to="{ name: 'users' }">Пользователи</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
h2 {
  margin: 0;
  font-size: 36px;
}
header {
  margin-top: 3px;
  background-color: antiquewhite;
  color: black;
  padding: 8px;
  position: sticky;
  top: 0;
  cursor: pointer;
}
.grid {
  display: grid;
  grid-template-areas: "h2 group";
  align-items: center;
}
.group {
  display: grid;
  grid-template-areas: "glavn users";
  justify-content: space-around;
  font-size: 22px;
}
.active {
  border-bottom: 4px solid royalblue;
  border-radius: 3px;
}
</style>
