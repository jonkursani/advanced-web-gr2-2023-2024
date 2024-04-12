const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (!this.todo.trim()) {
        alert('Shkruaje nje todo...');
        return;
      }

      this.todos.push(this.todo);
      this.todo = '';
    },
  },
}).mount('#app');

// const inpTodo = document.getElementById('inp-todo');
// const btnSave = document.getElementById('btn-save');
// const ulTodoList = document.getElementById('todo-list');

// function addTodo() {
//   const inpTodoValue = inpTodo.value.trim();

//   if (!inpTodoValue) {
//     alert('Shkruaje nje todo...');
//     return;
//   }

//   const li = document.createElement('li');
//   li.textContent = inpTodoValue;
//   li.classList.add('list-group-item');
//   ulTodoList.append(li);

//   inpTodo.value = '';
// }

// btnSave.addEventListener('click', addTodo);
