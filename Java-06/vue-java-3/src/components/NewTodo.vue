<script setup>
import {ref} from "vue";
import AppButton from "@/components/AppButton.vue";

// const todo = ref('');
// per me i'u qas variables nga komponenta prind
const todo = defineModel({ default: '' })
const emit = defineEmits(['addTodo'])

function addTodo(todo) {
  emit('addTodo', todo)
}


</script>

<template>
  <div class="input-group mb-3">
    <input type="text"
           class="form-control"
           placeholder="Add todo"
           v-model.trim="todo"
           @keyup.enter="$emit('addTodo', todo)"
    >
    <app-button class="btn-outline-success"
                type="button"
                @click="addTodo(todo)">
      + Add
    </app-button>
  </div>
</template>

<style scoped>

</style>