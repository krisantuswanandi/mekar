<template>
  <aside class="sidebar" id="parent-sidebar">
    <div class="default-sidebar">Sidebar</div>
  </aside>
</template>

<style scoped>
.sidebar {
  grid-area: sidebar;
}

.default-sidebar {
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-right: 1px solid #ccc;
}
</style>
