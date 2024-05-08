<script setup>
import AppCard from "@/components/AppCard.vue";
import {reactive} from "vue";
import AppButton from "@/components/AppButton.vue";

const formData = reactive({
  title: '',
  description: '',
  resourcePlace: '',
  link: ''
})

defineEmits(['handleSubmit'])
</script>

<template>
  <app-card>
    <template #title>
      <h3>Add Resource</h3>
    </template>

    <form @submit.prevent="$emit('handleSubmit', formData)">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" v-model="formData.title" />
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea class="form-control" v-model="formData.description"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Resource place</label>
        <select class="form-select" v-model="formData.resourcePlace">
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Medium">Medium</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Link</label>
        <input type="text" class="form-control" v-model="formData.link" />
      </div>

      <div class="mb-3">
        <app-button class="btn-outline-success">Save</app-button>
        <router-link class="btn btn-outline-secondary ms-1" to="/">Cancel</router-link>
      </div>
    </form>
  </app-card>
</template>

<style scoped>

</style>