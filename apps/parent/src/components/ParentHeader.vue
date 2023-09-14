<template>
  <header class="header">
    <span>Micro Frontend Example</span>
    <router-link to="/child">Child</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/settings">Settings</router-link>
    <router-link to="/">Back to Home</router-link>
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
