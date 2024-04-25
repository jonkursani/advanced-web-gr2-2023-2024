<script setup>

import {computed, ref} from "vue";

const counter = ref(0);

function decrement(number) {
  counter.value = counter.value - number;
}

const increment = (number) => {
  counter.value = counter.value + number;
};

const result = computed(() => {
  if(counter.value < 37) {
    return 'Not there yet'
  } else if (counter.value > 37) {
    return 'Too much!'
  } else {
    return counter.value
  }
})
</script>

<template>
  <div class="container mt-5">
    <button class="btn btn-danger" v-on:click="decrement(1)">-</button>
    <button class="btn btn-danger ms-1" v-on:click="decrement(5)">-5</button>
    <h3 class="d-inline mx-3">
      <!-- Template syntax -->
      {{ counter }}
      <!-- 10 -->
    </h3>
    <!-- <button class="btn btn-success" @click="counter++">+</button> -->
    <button class="btn btn-success" @click="increment(1)">+</button>
    <button class="btn btn-success ms-1" @click="increment(5)">+5</button>

    <h4>Result: {{ result }}</h4>
  </div>
</template>
