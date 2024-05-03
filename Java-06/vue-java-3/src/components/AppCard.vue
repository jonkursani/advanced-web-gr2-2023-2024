<script setup>
</script>

<template>
  <div class="card">
    <div class="card-header bg-success text-white text-center">
      <slot name="header"></slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

<!--    <div class="card-footer">-->
<!--      <slot name="footer"></slot>-->
<!--    </div>-->
  </div>
</template>

<style scoped>

</style>