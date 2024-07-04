    <template>
        <div class="flex flex-col md:flex-row gap-6">
        <!-- Kartu tetap di pojok kiri -->
        <div class="max-w-m p-6 my-10 mx-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg class="mb-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
            </svg>
            <a href="#">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Have you done your attendance?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Click the button to take attendance :</p>
            <PresenceButton/>
            <!-- <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Presence</button> -->
        </div>
    
        <!-- Konten kedua di sisi kanan -->
        <div class="border my-5 p-6 ml-10 max-h-96 overflow-y-auto mr-10">
      <h1 class="text-2xl font-semibold mb-4">halo</h1>
     
<p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform.  and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

    </div>
        </div>
    </template>
    
    <script>
    import PresenceButton from "../components/PresenceButton.vue"
    export default {
        name: 'ContentPresence',
        components : {
            PresenceButton
        }
    }
    </script>
    
    <style scoped>
    /* Tambahkan gaya jika diperlukan */
    </style>
    