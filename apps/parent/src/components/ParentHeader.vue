<template>
  <header class="header">
    <span>Micro Frontend Example</span>
    <router-link to="/home">Home</router-link>
    <router-link to="/vue-child">Vue</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/">Close App</router-link>
  </header>
</template>

<style scoped>
.header {
  grid-area: header;
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.header :last-child {
  margin-left: auto;
}
</style>
