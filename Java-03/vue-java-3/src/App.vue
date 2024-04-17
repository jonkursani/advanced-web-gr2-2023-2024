<!-- Options api -->
<!-- <script>
export default {
  // variablat (property)
  data() {
    return {
      counter: 0,
    };
  },
  // metodat
  methods: {
    decrement() {
      this.counter--;
    },
    increment() {
      this.counter++;
    },
  },
};
</script> -->

<!-- Composition api -->
<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);

    function decrement() {
      counter.value--;
    }

    const increment = () => {
      counter.value++;
    };

    // export variablat qe me ju qas ne template
    return {
      counter,
      decrement,
      increment,
    };
  },
};
</script> -->

<!-- script setup -->
<script setup>
import { ref } from 'vue';

const counter = ref(0);

function decrement() {
  counter.value--;
}

const increment = () => {
  counter.value++;
};

const learnVue = ref('Learn Vue');
const vueDocs = ref('https://vuejs.org');
const isBtnDisabled = ref(true);
const toggleDisabled = () => (isBtnDisabled.value = !isBtnDisabled.value);
const choosePlace = () => {
  if (Math.random() > 0.5) {
    return 'Go to gym';
  } else {
    return 'Drink coffee';
  }
};
const isListItemShown = ref(true);
</script>

<template>
  <div class="container mt-5 text-center">
    <!-- <button class="btn btn-danger" v-on:click="counter--">-</button> -->
    <button class="btn btn-danger" v-on:click="decrement()">-</button>
    <h3 class="d-inline mx-3">
      <!-- Template syntax -->
      {{ counter }}
      <!-- 10 -->
    </h3>
    <!-- <button class="btn btn-success" @click="counter++">+</button> -->
    <button class="btn btn-success" @click="increment">+</button>
  </div>

  <div class="container mt-5">
    <div class="card">
      <div class="card-header bg-success text-white text-center">
        <h3>Todo list</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">{{ learnVue }}</li>
          <!-- Binding attributes -->
          <!-- <li class="list-group-item">Check Vue <a v-bind:href="vueDocs">docs</a></li> -->
          <li class="list-group-item">Check Vue <a :href="vueDocs">docs</a></li>
          <li class="list-group-item">
            <button @click="isBtnDisabled = !isBtnDisabled">Toggle disabled</button>
            <!-- <button @click="toggleDisabled">Toggle disabled</button> -->
            {{ isBtnDisabled }}
            <button class="btn btn-success" :disabled="isBtnDisabled">Disabled</button>
          </li>
          <!-- js expressions -->
          <li class="list-group-item">
            {{ Math.random() > 0.5 ? 'Go to gym' : 'Drink coffee' }}
          </li>
          <li class="list-group-item">
            {{ choosePlace() }}
          </li>
          <li class="list-group-item" v-if="isListItemShown">V-if shown</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
