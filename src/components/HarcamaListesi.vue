<script setup>
import {defineProps } from 'vue';

const props = defineProps({
  harcamalar: {
  type: Array,
    required: true
  }})

const emit = defineEmits(['harcamaDeleted'])

const handleHarcamaDelete = (id)=>{
  emit("harcamaDeleted", id)
}
</script>

<template>
  <h3>Harcama Listesi</h3>
  <ul class="list" id="list">
    <li v-for="harcama in harcamalar" :key="harcama.id" :class="harcama.fiyat > 0 ? 'plus' : 'minus'" >
      {{harcama.baslik}} <span>{{ harcama.fiyat }}</span> <button class="delete-btn" @click="handleHarcamaDelete(harcama.id)" >x</button>
    </li>
  </ul>
</template>

<style scoped>

</style>