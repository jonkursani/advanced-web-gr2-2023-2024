<script setup>
import {ref} from "vue";
import TodoListItem from "@/components/TodoListItem.vue";
import NewTodo from "@/components/NewTodo.vue";
import AppCard from "@/components/AppCard.vue";

const isVueGood = ref(true);

const inpTodo = ref(''); // { value: '' }
const todos = ref([]);

function addTodo(todo) {
  // console.log(event)
  // console.log(event.key === 'Enter')

  // event.preventDefault();
  // if (event.key === 'Enter') {
  if (!todo) {
    return;
  }

  todos.value.push({
    id: new Date().toISOString(),
    title: todo,
    isCompleted: false,
  });

  inpTodo.value = '';
  // }
}

function removeTodo(id) {
  todos.value = todos.value.filter(item => item.id !== id);
}

function markAsDone(id) {
  // console.log(id)
  const todo = todos.value.find(todo => todo.id === id);
  todo.isCompleted = !todo.isCompleted; // !false = true
}
</script>

<template>
  <app-card>
    <template #header>
      <h3>Todo list</h3>
    </template>

    <!--    <template #default>-->
    <new-todo v-model="inpTodo" @addTodo="addTodo"/>

    <ul class="list-group" v-if="todos.length > 0">
      <!--        <TodoListItem id="" title="" />-->
      <todo-list-item v-for="todo in todos"
                      :key="todo.id"
                      :id="todo.id"
                      :title="todo.title"
                      :isCompleted="todo.isCompleted"
                      @markAsDone="markAsDone"
                      @removeTodo="removeTodo"
      />
    </ul>
    <h4 v-else class="text-center">No todos</h4>
    <!--    </template>-->
  </app-card>
</template>

<style scoped>
</style>