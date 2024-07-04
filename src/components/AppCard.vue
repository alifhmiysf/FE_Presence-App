    <template>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto p-4 justify-center">
        <!-- Kartu pertama -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#" class="block">
            <img class="object-cover rounded-t-lg h-48 w-full" src="https://images.stockcake.com/public/3/b/6/3b6e3270-e48b-465f-a701-492680be5f0d_large/coding-youngster-smiles-stockcake.jpg" alt="">
            </a>
            <div class="p-5">
            <a href="#" class="block">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Informatics</h5>
            </a>
            <p class="mb-3 text-gray-700 dark:text-gray-400">Informatics is the study of the structure, behaviour, and interactions of natural and engineered computational systems.</p>
            <router-link to="/informatic" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </router-link>
            </div>
        </div>
        <!-- Kartu kedua -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
            <img class="object-cover rounded-t-lg h-48 w-full" src="https://images.stockcake.com/public/3/3/7/3373b776-8c5a-4ad8-9655-29cc406b21ba_large/classical-library-decor-stockcake.jpg" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Philosophy</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Philosophy is an activity people undertake when they seek to understand fundamental truths about themselves, the world in which they live, and their relationships to the world and to each other.</p>
            <router-link to="/informatic" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </router-link>
            </div>
        </div>
        <!-- Kartu ketiga -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
            <img class="object-cover rounded-t-lg h-48 w-full" src="https://images.stockcake.com/public/d/5/8/d58f866d-a826-4bb6-92d8-11fee50e4381_large/robot-teaching-math-stockcake.jpg" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematics</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mathematics is the science that deals with the logic of shape, quantity and arrangement.</p>
            <router-link to="/informatic" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </router-link>
            </div>
        </div>
        </div>
    </template>
    
    <script>
    export default {
        name: 'AppCard'
    }
    </script>
    
    <style scoped>
    /* Style khusus untuk komponen card jika diperlukan */
    </style>
    