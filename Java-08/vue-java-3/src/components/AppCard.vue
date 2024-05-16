<script setup>
</script>

<template>
  <div class="card">
    <div class="card-body">
      <slot name="title"></slot>

      <slot></slot>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>