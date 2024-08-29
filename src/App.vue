<script setup>
import {computed, onMounted, ref} from "vue";
import { useToast } from "vue-toastification";

import Header from './components/Header.vue'
import Bakiye from './components/Bakiye.vue'
import GelirGider from "@/components/GelirGider.vue";
import HarcamaListesi from "@/components/HarcamaListesi.vue";
import HarcamaEkle from "@/components/HarcamaEkle.vue";

const toast = useToast()

const harcamalar = ref([])

onMounted(()=>{
   const kayitliHarcamalar = JSON.parse(localStorage.getItem("harcamalar"))
  if(kayitliHarcamalar){
      harcamalar.value = kayitliHarcamalar;
  }
})

const handleHarcamaDelete = (id) => {
  harcamalar.value = harcamalar.value.filter(harcama => harcama.id != id)
  localStrogaKayit()
  toast.warning("Kayıt Silindi");
}

const handleHarcamaEkle =(item)=>{
  console.log(item);
  item.id = Math.floor(Math.random()*100000000);
  harcamalar.value.push(item);
  localStrogaKayit()
  toast.success("Harcama Eklendi")
}
const localStrogaKayit = ()=>{
  localStorage.setItem("harcamalar", JSON.stringify(harcamalar.value))
}
const bakiye = computed(()=>{
  return harcamalar.value.reduce((t, harcama) =>{ return t + harcama.fiyat; },0)
})

const gelir = computed(()=>{
  return harcamalar.value.filter(harcama => harcama.fiyat > 0).reduce((t, harcama) =>{ return t + harcama.fiyat; },0).toFixed(2)
})

const gider = computed(()=>{
  return harcamalar.value.filter(harcama => harcama.fiyat < 0 ).reduce((t, harcama) => {return t + harcama.fiyat; }, 0).toFixed(2)
})
</script>

<template>
  <Header />
 <div class="container">
   <Bakiye :bakiye="bakiye" />
   <GelirGider :gelir="+gelir" :gider="+gider" />
   <HarcamaListesi :harcamalar="harcamalar" @harcamaDeleted="handleHarcamaDelete"/>
   <HarcamaEkle @harcamaSubmitted="handleHarcamaEkle"/>
 </div>

</template>

<style scoped>
</style>
