<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AppCard from "@/components/AppCard.vue";
import {useResourceStore} from "@/stores/resource.store.js";

const store = useResourceStore();
</script>

<template>
  <the-header title="Learning Resources"/>

  <template v-if="store.resources.length > 0">
    <learning-resource v-for="resource in store.resources"
                       :key="resource.id"
                       :resource="resource" />
  </template>
  <app-card v-else>
    <h3>No resources, please create one!</h3>
  </app-card>
</template>

<style scoped>

</style>