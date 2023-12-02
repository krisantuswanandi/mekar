<script setup lang="ts">
import { isMfe } from "./mfe";
</script>

<template>
  <nav class="nav" :class="isMfe() ? 'mfe-enabled' : 'mfe-disabled'">
    <div class="title">Sidebar (Vue)</div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style scoped>
.nav {
  height: 100%;
  display: flex;
  gap: 1rem;
}

.nav.mfe-enabled {
  flex-direction: column;
  padding: 1rem;
  border-right: 1px solid #ccc;
}

.nav.mfe-disabled {
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.nav.mfe-disabled .title {
  display: none;
}
</style>
