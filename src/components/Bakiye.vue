<script setup>

defineProps({ bakiye:{
    type: Number,
    required: true
  }})
</script>

<template>
  <h4>Bakiyeniz</h4>
  <h1 id="balance">{{bakiye}} TL</h1>
</template>

<style scoped>

</style>