<script setup>
// console.log(router)
const query = getQuery()
const src = query.src.replace('http:', 'https:')
console.log(src)

onMounted(() => {
  // console.log(router.currentRoute.value)
  // console.log(query)
})

</script>

<template>
  <iframe class="w-screen h-screen" :src="src"></iframe>
</template>