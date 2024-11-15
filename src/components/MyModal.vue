<template>
    <div class="my-dialog">
        <span class="my-dialog-text">
            This is about modal, you can change text color by indicating in the input
        </span>
        <input type="text" v-model="textColor">
    </div>
</template>

<script setup>
import { ref } from 'vue'

const textColor = ref('white')
</script>

<style scoped>
.my-dialog {
    position: absolute;
    z-index: 999;
    width: 300px;
    height: 300px;
    background-color: gray;
}

.my-dialog-text {
    color: v-bind(textColor)
}
</style>
