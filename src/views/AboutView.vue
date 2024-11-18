<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="openDialog">Open/Close about dialog</button>
      <MyModal v-if="dialog"/>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const dialog = ref(false)

const openDialog = () =>{
  dialog.value = !dialog.value
}

const MyModal = defineAsyncComponent(()=>
  import('../components/MyModal.vue')
)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
