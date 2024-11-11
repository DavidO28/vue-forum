<template>
  <div class="container">
    {{ sourceData.threads }}
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
console.log(sourceData);
console.log(sourceData.threads);
</script>

<style scoped>
</style>
