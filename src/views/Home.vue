<template>
    <AppNavbar/>
    <div class="mt-10">
      <AppCard/>
    </div>
  </template>
  
  <script>
  import AppCard from '../components/AppCard.vue'
  import AppNavbar from '../components/AppNavbar.vue'
  
  export default {
    name: 'HomePage',
    components: {
      AppCard,
      AppNavbar
    }
  }
  </script>
  
  <style>
  /* Tambahkan gaya Anda di sini jika diperlukan */
  </style>
  