<template>
    <AppNavbar/>
    <div>
      <PresenceButton/>
      <AppCard/>
    </div>
  </template>
  
  <script>
  import PresenceButton from '../components/PresenceButton.vue'
  import AppCard from '../components/AppCard.vue'
  import AppNavbar from '../components/AppNavbar.vue'
  
  export default {
    name: 'HomePage',
    components: {
      PresenceButton,
      AppCard,
      AppNavbar
    }
  }
  </script>
  
  <style>
  /* Tambahkan gaya Anda di sini jika diperlukan */
  </style>
  