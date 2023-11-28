<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
   onMounted(()=>{
      console.log($('body'));
   })
</script>

