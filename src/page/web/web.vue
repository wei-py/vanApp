<script setup>
// console.log(router)
const query = getQuery()
const src = query.src

onMounted(() => {
  
  // console.log(router.currentRoute.value)
  console.log(query)
})

</script>

<template>
  <iframe :src="src"></iframe>
</template>