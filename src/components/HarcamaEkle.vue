<script setup>

import {ref} from "vue";
import {useToast} from "vue-toastification";

const toast = useToast();
const baslik = ref("")
const fiyat = ref("")

const emit = defineEmits(['harcamaSubmitted'])

const handleSubmit = () => {
  if(fiyat.value == "" || baslik.value == ""){
    toast.error("Başlık ve fiyat bilgisi boş geçilemez")
  } else {
    const harcamaVeri = { baslik:baslik.value, fiyat:parseFloat(fiyat.value) };
    emit('harcamaSubmitted', harcamaVeri)
  }
}
</script>

<template>
  <h3>Yeni Harcama Ekle</h3>
  <form id="form" @submit.prevent= "handleSubmit" >
    <div class="form-group">
      <label for="text">Başlık</label>
      <input v-model="baslik" type="text" id="text" placeholder="başlık giriniz" >
    </div>

    <div class="form-group">
      <label for="amount">Fiyat :<br>(negatif yaparsanız gider olur)</label>
      <input v-model="fiyat" type="number" id="amount" placeholder="Fiyat giriniz">
    </div>
    <button class="btn">Harcama Ekle</button>
  </form>

</template>

<style scoped>

</style>