<script lang="ts" setup>
import TheBlueCard from '~/components/pageChunks/TheBlueCard.vue';
import TheCameraSlider from '~/components/pageChunks/TheCameraSlider.vue';
import TheLeaders from '~/components/pageChunks/TheLeaders.vue';
import TheRecentUpdates from '~/components/pageChunks/TheRecentUpdates.vue';
import TheWelcomeNote from '~/components/pageChunks/TheWelcomeNote.vue';
</script>

<template>
  <div>
    <TheCameraSlider />
    <TheWelcomeNote />
    <TheLeaders />
    <TheBlueCard />
    <TheRecentUpdates />
  </div>
</template>

<style scoped></style>
