<template>
  <div v-if="dataReady" class="container">
    {{ sourceData.threads }}
  </div>
  <span v-else>Loading page data...</span>
</template>

<script setup>
import { onMounted } from 'vue'
import sourceData from '@/data.json'
import { useDataReady } from '@/mixins/asyncDataStatus'

const { dataReady, dataIsReady } = useDataReady()

const fetchData = async () => {
  try {
    // simulating async request
    await new Promise(resolve => setTimeout(resolve, 1000))  
  } catch (e) {
    console.log(e)
  } finally {
    dataIsReady()
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
</style>
