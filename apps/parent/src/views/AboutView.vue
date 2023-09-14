<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="about">About Page (parent)</div>
  </DefaultLayout>
</template>

<style scoped>
.about {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
