<script setup>
import {computed, ref} from "vue";

const task = ref('');
const tasks = ref([]);

const addTask = () => {
  if (!task.value) {
    return;
  }

  tasks.value.push(task.value)
}

const isListShown = ref(true);
function toggleList() {
  isListShown.value = !isListShown.value;
}

const buttonText = computed(() => {
  return isListShown.value ? 'Hide list' : 'Show list';
})
</script>

<template>
  <div class="card">
    <div class="card-header text-center bg-success text-white">
      <h3>Assignment</h3>
    </div>
    <div class="card-body">
      <!-- 1) Add code to manage a list of tasks -->
      <!-- When clicking "Add Task" a new task with the entered text should be added -->

      <div class="input-group my-3">
        <input type="text" class="form-control" placeholder="Add task"
               v-model.r.trim="task"
               @keyup.enter="addTask">
        <button class="btn btn-outline-success" type="button" @click="addTask">+ Add</button>
      </div>

      <ul class="list-group list-group-flush" v-if="isListShown">
        <!-- 2) Output the list of tasks here -->
        <!-- <li class="list-group-item">Test</li> -->
        <li class="list-group-item"
            v-for="task in tasks"
            :key="task">
          {{ task }}
        </li>
      </ul>

      <!-- 3) When the below button is pressed, the list should be shown or hidden -->
      <!-- BONUS: Also update the button caption -->
      <div class="text-center">
<!--        <button class="btn btn-outline-secondary col-2" @click="isListShown = !isListShown">Hide / Show List</button>-->
<!--        <button class="btn btn-outline-secondary col-2" @click="toggleList">-->
<!--          {{ isListShown ? 'Hide' : 'Show' }} List-->
<!--        </button>-->
        <button
            class="btn btn-outline-secondary col-2"
            @click="toggleList"
            v-if="tasks.length > 0">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>