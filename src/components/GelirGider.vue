<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  gelir:{
    type:Number,
    required:true,
  },
  gider:{
    type:Number,
    required:true,
  }
})
</script>

<template>
<div class="inc-exp-container">
  <div>
    <h4>Gelir</h4>
    <p id="money-plus" class="money plus">{{gelir}} TL</p>
  </div>
  <div>
    <h4>Gider</h4>
    <p id="money-minus" class="money minus">{{gider}} TL</p>
  </div>
</div>
</template>

<style scoped>

</style>