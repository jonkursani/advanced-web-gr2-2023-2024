<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Resources</router-link>
          </li>
          <li class="nav-item">
<!--            <router-link class="nav-link" to="/add">Add resource</router-link>-->
            <router-link class="nav-link" :to="{ name: 'add-resource' }">Add resource</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>