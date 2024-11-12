<template>
  <div v-if="dataReady" class="container">
    <div v-for="thread in paginatedThreads" :key="thread.id">
      {{ thread.title }}
    </div>

    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
  <span v-else>Loading page data...</span>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import sourceData from '@/data.json'
import { useDataReady } from '@/mixins/asyncDataStatus'

const { dataReady, dataIsReady } = useDataReady()

const itemsPerPage = 10

const currentPage = ref(1)

const paginatedThreads = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = currentPage.value * itemsPerPage
  return sourceData.threads.slice(startIndex, endIndex)
})

const totalPages = computed(() => {
  return Math.ceil(sourceData.threads.length / itemsPerPage)
})

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

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
