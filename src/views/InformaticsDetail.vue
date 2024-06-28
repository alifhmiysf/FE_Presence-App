<template>
   <div class="flex flex-col min-h-screen">
   <AppNavbar />
   <ContentPresence />
   <!-- <BannerContent/> -->
   

   </div>
 </template>
 
 <script>
 import AppNavbar from "../components/AppNavbar.vue"
 import ContentPresence from "../components/ContentPresence.vue"
//  import BannerContent from "../components/BannerComponent.vue"
 
 export default {
   name: 'InformaticsDetail',
   components: {
     AppNavbar,
     ContentPresence,
   //   BannerContent
   }
 }
 </script>
 
 <style>
 /* Tambahkan gaya Anda di sini jika diperlukan */
 </style>
 