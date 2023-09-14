<script setup lang="ts">
import ParentHeader from "../components/ParentHeader.vue";
import ParentFooter from "../components/ParentFooter.vue";
import ParentSidebar from "../components/ParentSidebar.vue";
import ParentBody from "../components/ParentBody.vue";
</script>

<template>
  <div class="layout">
    <ParentHeader />
    <ParentSidebar />
    <ParentBody>
      <slot />
    </ParentBody>
    <ParentFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 60px auto 40px;
  grid-template-areas:
    "header header"
    "sidebar body"
    "footer footer";
}
</style>
