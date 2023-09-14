<script setup lang="ts">
import EmptyLayout from "../layouts/EmptyLayout.vue";
</script>

<template>
  <EmptyLayout>
    <div class="home">
      <RouterLink to="/child">Open Child App</RouterLink>
    </div>
  </EmptyLayout>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
