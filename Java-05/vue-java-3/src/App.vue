<script setup>
import VueIntro from "@/components/VueIntro.vue";
import VueStyling from "@/components/VueStyling.vue";
import Detyra2 from "@/components/Detyra2.vue";
import TodoList from "@/components/TodoList.vue";
import Detyra3 from "@/components/Detyra3.vue";
</script>

<template>
  <div class="container mt-5">
<!--    <VueIntro/>-->
<!--    <VueStyling />-->
<!--    <Detyra2 />-->

    <TodoList>
      <template #header>
        <h2>Teksti ne header</h2>
      </template>
      <h1>Teksti i renderuar prej Slotit</h1>
      <template #footer>
        <h2>Teksti ne footer</h2>
      </template>
    </TodoList>

<!--    <Detyra3 />-->
  </div>
</template>

<style scoped></style>