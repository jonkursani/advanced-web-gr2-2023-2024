<script setup>
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AppCard from "@/components/AppCard.vue";
import {useResourceStore} from "@/stores/resource.store.js";
import {onMounted} from "vue";
import AppButton from "@/components/AppButton.vue";

const store = useResourceStore();

async function loadResources() {
  await store.getAllResources();
}

onMounted(async () => {
  await loadResources();
})

const onRefresh = async () => {
  await loadResources();
}
</script>

<template>
  <the-layout>
    <transition appear v-if="store.loading">
      <app-card class="text-center">
        <h3>Loading...</h3>
      </app-card>
    </transition>
    <transition appear v-else>
      <div>
        <app-button class="btn-outline-secondary mb-3" @click="onRefresh">Refresh list</app-button>

        <template v-if="!store.error && store.resources.length > 0">
          <learning-resource v-for="resource in store.resources"
                             :key="resource.id"
                             :resource="resource"/>
        </template>
        <app-card v-else-if="!store.error && store.resources.length === 0">
          <h3>No resources, please create one!</h3>
        </app-card>
        <app-card v-else-if="store.error">
          <h3>{{ store.error }}</h3>
        </app-card>
      </div>
    </transition>
  </the-layout>
</template>

<style scoped>

</style>