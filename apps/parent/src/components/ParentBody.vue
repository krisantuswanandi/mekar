<template>
  <main class="body" id="parent-body">
    <slot>
      <div class="default-body">Default Content (parent)</div>
    </slot>
  </main>
</template>

<style scoped>
.body {
  grid-area: body;
}

.default-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
