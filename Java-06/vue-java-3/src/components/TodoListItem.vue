<script setup>
// defineProps(['id', 'title', 'isCompleted'])

import AppButton from "@/components/AppButton.vue";

defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['markAsDone', 'removeTodo'])

function removeTodo(id) {
  emit('removeTodo', id)
}
</script>

<template>
  <li class="list-group-item d-flex justify-content-between"
      :class="{ done: isCompleted }"
  >
    {{ title }}
    <span>
      <app-button class="btn-outline-success"
                  @click="$emit('markAsDone', id)"
                  :disabled="isCompleted">
        {{ isCompleted ? 'Done' : 'Mark as done' }}
      </app-button>

      <app-button class="btn-outline-danger ms-1" @click="removeTodo(id)">
        Delete
      </app-button>
    </span>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
  background-color: lightgreen;
}
</style>