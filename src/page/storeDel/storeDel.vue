<script setup>

async function getData() {
  const { data } = await http.post('sto/list?pageNum=1&pageSize=100',{})
  console.log(data)
}

onMounted(() => {
  getData()
})

</script>

<template>

</template>