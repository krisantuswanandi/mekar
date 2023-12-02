<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import MfeLoader from "../components/MfeLoader.vue";
</script>

<template>
  <DefaultLayout>
    <MfeLoader url="http://localhost:8081/vue-child" />
  </DefaultLayout>
</template>
