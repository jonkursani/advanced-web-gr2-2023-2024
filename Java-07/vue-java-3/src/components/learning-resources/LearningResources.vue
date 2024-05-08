<script setup>
import TheHeader from "@/components/layout/TheHeader.vue";
import LearningResource from "@/components/learning-resources/LearningResource.vue";
import AddLearningResource from "@/components/learning-resources/AddLearningResource.vue";
import {computed, ref} from "vue";
import AppButton from "@/components/AppButton.vue";
import AppCard from "@/components/AppCard.vue";

const isAddResourceShown = ref(false);
const buttonText = computed(() => {
  return isAddResourceShown.value ? 'List of resources' : 'Add resource';
})

const resources = ref([]);

function handleSubmit(formData) {
  resources.value.push({
    id: new Date().toISOString(),
    ...formData
  })

  isAddResourceShown.value = !isAddResourceShown.value;
}

function deleteResource(id) {
  resources.value = resources.value.filter(res => res.id !== id);
}
</script>

<template>
  <the-header title="Learning Resources"/>

  <div class="my-3">
    <app-button
        class="btn-outline-secondary col-12"
        @click="isAddResourceShown = !isAddResourceShown">
      {{ buttonText }}
    </app-button>
  </div>

  <template v-if="isAddResourceShown">
    <add-learning-resource @handleSubmit="handleSubmit"/>
  </template>
  <template v-else>
    <template v-if="resources.length > 0">
      <learning-resource v-for="resource in resources"
                         :key="resource.id"
                         :resource="resource"
                         @deleteResource="deleteResource"/>
    </template>
    <app-card v-else>
      <h3>No resources, please create one!</h3>
    </app-card>
  </template>
</template>

<style scoped>

</style>