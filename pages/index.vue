<script setup>
useHead({
    title:'ICTC'
})

import { useCounterStore } from '../stores/test';

const counter = useCounterStore()
</script>

<template>
  <div>
   <!-- <pageChunksTheCameraSlider /> -->
    <pageChunksTheSlider />
    <pageChunksTheWelcomeNote />
    <pageChunksTheLeaders />
    <pageChunksTheBlueCard />
    <pageChunksTheRecentUpdates />
  </div>
</template>

<style scoped></style>
