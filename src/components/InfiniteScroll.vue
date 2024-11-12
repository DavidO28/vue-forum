<template>
<ul ref="listEl">
    <li v-for="user in usersList" :key="user.id">
        {{ user.firstName }}
    </li>
    <p v-show="fetchingData">Loading data...</p>
</ul>
</template>

<script setup>
import { getUsers } from '@/api/getUsers';
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core';

const listEl = ref(null)

const usersToShow = 10

const usersList = ref(await getUsers(usersToShow, 0))
const fetchingData = ref(null)
console.log(usersList.value);

const getUsersOnScroll = async () =>{
    fetchingData.value = true
    await new Promise((res)=>setTimeout(res, 2000))
    const newUsers = await getUsers(usersToShow, usersList.value.length)
    fetchingData.value = null
    usersList.value.push(...newUsers)
}

useInfiniteScroll(
    listEl, 
    async()=>{await getUsersOnScroll(),
    {distance: 10}
})
</script>