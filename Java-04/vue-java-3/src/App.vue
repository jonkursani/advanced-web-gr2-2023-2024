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
import {computed, reactive, ref} from 'vue';
import Detyra1 from "@/components/Detyra1.vue";

const counter = ref(0);
// output: { value: 0 }

const counterReactive = reactive({
  value: 0
})

// vlera primitive
const user = ref({
  id: 1,
  name: 'Filan'
})

console.log(counter.value);
console.log(user.value.name)

// nuk pranon vlera primitive
const userReactive = reactive({
  id: 2,
  name: 'Filan'
});
console.log(userReactive.name)

const userFirstName = ref('');
const userLastName = ref('');
const formData = reactive({
  firstName: '',
  lastName: ''
})


function decrement(number) {
  counter.value = counter.value - number;
}

const increment = (number) => {
  counter.value = counter.value + number;
};

const learnVue = ref('Learn Vue');
const vueDocs = ref('https://vuejs.org');
const isBtnDisabled = ref(true);
const toggleDisabled = () => (isBtnDisabled.value = !isBtnDisabled.value);
// const choosePlace = () => {
//   if (Math.random() > 0.5) {
//     return 'Go to gym';
//   } else {
//     return 'Drink coffee';
//   }
// };
const isListItemShown = ref(true);

const firstName = ref('');

function setFirstName(e) {
  firstName.value = e.target.value;
}

const confirmedUser = ref('');
const confirmUser = () => {
  confirmedUser.value = firstName.value;
}

const choosePlace = computed(() => {
  if (Math.random() > 0.5) {
    return 'Go to gym';
  } else {
    return 'Drink coffee';
  }
})

const fullName = computed(() => {
  return firstName.value + ' Fisteku'
})
</script>

<template>
  <div class="container mt-5 text-center">
    <!-- <button class="btn btn-danger" v-on:click="counter--">-</button> -->
    <button class="btn btn-danger" v-on:click="decrement(1)">-</button>
    <button class="btn btn-danger ms-1" v-on:click="decrement(5)">-5</button>
    <h3 class="d-inline mx-3">
      <!-- Template syntax -->
      {{ counter }}
      <!-- 10 -->
    </h3>
    <!-- <button class="btn btn-success" @click="counter++">+</button> -->
    <button class="btn btn-success" @click="increment(1)">+</button>
    <button class="btn btn-success ms-1" @click="increment(10)">+10</button>
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
          <!--          <li class="list-group-item">-->
          <!--            {{ Math.random() > 0.5 ? 'Go to gym' : 'Drink coffee' }}-->
          <!--          </li>-->
<!--          <li class="list-group-item">-->
<!--            {{ choosePlace() }}-->
<!--          </li>-->
          <li class="list-group-item">
            {{ choosePlace }}
          </li>
          <li class="list-group-item" v-if="isListItemShown">V-if shown</li>
          <li class="list-group-item">
            <!--            <input type="text" class="form-control" :value="firstName" @input="setFirstName">-->
            <input type="text" class="form-control" v-model="firstName" @keyup.enter="confirmUser">
          </li>
          <li class="list-group-item">My name: {{ firstName }}</li>
          <li class="list-group-item">Confirmed name: {{ confirmedUser }}</li>
          <li class="list-group-item">Full name: {{ fullName }}</li>
        </ul>
      </div>
    </div>
  </div>

<!--  import Detyra1 from "@/components/Detyra1.vue";-->
  <Detyra1 />
</template>

<style scoped></style>
