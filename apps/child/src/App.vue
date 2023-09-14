<script setup lang="ts">
import { isMfe } from "./mfe";
</script>

<template>
  <main class="main" :class="isMfe() ? 'mfe-enabled' : 'mfe-disabled'">
    <router-view />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main.mfe-enabled {
  height: 100%;
}

.main.mfe-disabled {
  flex: 1;
}
</style>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#child-app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#child-header {
  flex: 0 50px;
}

#child-body {
  flex: 1;
  display: flex;
}
</style>
