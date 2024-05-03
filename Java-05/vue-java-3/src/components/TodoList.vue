<script setup>
import {ref} from "vue";

const isVueGood = ref(true);

const todo = ref(''); // { value: '' }
const todos = ref([]);

function addTodo(event) {
  // console.log(event)
  // console.log(event.key === 'Enter')

  event.preventDefault();
  // if (event.key === 'Enter') {
    if (!todo.value) {
      return;
    }

    todos.value.push({
      id: todos.value.length + 1,
      title: todo.value,
      isCompleted: false,
    });

    todo.value = '';
  // }
}

function removeTodo(index, id) {
  const todo = todos.value.find(item => item.id === id);
  // todos.value.splice(index, 1)

  todos.value = todos.value.filter(item => item.id !== id);
}

function markAsDone(id) {
  const todo = todos.value.find(todo => todo.id === id);
  todo.isCompleted = !todo.isCompleted; // !false = true
}
</script>

<template>
  <!--  <div v-if="isVueGood">-->
  <!--    Vue is good-->
  <!--  </div>-->
  <!--&lt;!&ndash;  <p></p>&ndash;&gt;-->
  <!--  <div v-else>-->
  <!--    Vue is not good 🥲-->
  <!--  </div>-->

  <!--  <div v-show="isVueGood">V show</div>-->

  <!--  <button @click="isVueGood = !isVueGood">Toggle</button>-->
  <slot name="header"></slot>
  <slot></slot>

  <form @submit.prevent="">
    <h1>Forma</h1>
    <button type="submit">Submit</button>
  </form>

  [
    {
      id: 1,
      title: 'a',
      isCompleted: true
    },
    {
      id: 2,
      title: 'b',
     isCompleted: false
    }
  ]

  <div class="card">
    <div class="card-header bg-success text-white text-center">
      <h3>Todo list</h3>
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
        <input type="text"
               class="form-control"
               placeholder="Add todo"
               v-model.trim="todo"
               @keyup.enter="addTodo"

        >
        <button class="btn btn-outline-success" type="button" @click="addTodo">+ Add</button>
      </div>

      {{ todo }}

      <ul class="list-group" v-if="todos.length > 0">
<!--        <li class="list-group-item">Learn Vue</li>-->
<!--        v-for -->
          <li class="list-group-item d-flex justify-content-between"
              v-for="(todo, index) in todos"
              :key="todo.id"
              :class="{ done: todo.isCompleted }"
              >
<!--            {{ index }} - -->
            {{todo.id}} - {{ todo.title }}

            <span>
              <button class="btn btn-outline-success" @click="markAsDone(todo.id)" :disabled="todo.isCompleted">
                {{ todo.isCompleted ? 'Done' : 'Mark as done' }}
              </button>
              <button class="btn btn-outline-danger ms-1" @click="removeTodo(index, todo.id)">Delete</button>
            </span>
          </li>
      </ul>
      <h4 v-else class="text-center">No todos</h4>
    </div>
  </div>

  <slot name="footer"></slot>

</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: green;
  //background-color: lightgreen;
}
</style>