<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { fetchMfeApp } from "../mfe";

const props = defineProps<{
  url: string;
}>();

let childEls = [] as HTMLElement[];

function removeChildApp() {
  childEls.forEach((item) => item.remove());
  childEls = [];
}

onMounted(async () => {
  childEls = await fetchMfeApp(props.url);
});

onUnmounted(() => {
  removeChildApp();
});
</script>

<template>
  <div></div>
</template>
