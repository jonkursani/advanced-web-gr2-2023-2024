<script setup>
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useResourceStore} from "@/stores/resource.store.js";

const resource = ref({
  title: '',
  description: '',
  resourcePlace: '',
  link: ''
});

const {params} = useRoute();
const {push} = useRouter();

const store = useResourceStore();
onMounted(() => {
  resource.value = store.resources.find(resource => resource.id === params.id);
})

const handleUpdate = () => {
  store.updateResource(resource.value)
  push({name: 'resources'});
}
</script>

<template>
  <app-card>
    <template #title>
      <h3>Update Resource</h3>
    </template>

    <form @submit.prevent="handleUpdate">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" v-model="resource.title"/>
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea class="form-control" v-model="resource.description"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Resource place</label>
        <select class="form-select" v-model="resource.resourcePlace">
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Medium">Medium</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Link</label>
        <input type="text" class="form-control" v-model="resource.link"/>
      </div>

      <div class="mb-3">
        <app-button class="btn-outline-success">Update</app-button>
        <router-link class="btn btn-outline-secondary ms-1" to="/">Cancel</router-link>
      </div>
    </form>
  </app-card>
</template>

<style scoped>

</style>