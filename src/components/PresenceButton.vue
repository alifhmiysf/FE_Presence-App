<template>
    <div>
        <button @click="markPresence" type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
            </svg>
            <span class="sr-only">Icon description</span>
        </button>

        <div v-if="showNotification" id="toast-interactive" class="fixed bottom-0  right-0 m-4 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
            <div class="flex">
                <div class="ms-3 text-sm font-normal">
                    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Thank You</span>
                    <div class="mb-2 text-sm font-normal">{{ notificationMessage }}</div>
                </div>
                <button @click="hideNotification" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>



<script>
import axios from 'axios';

export default {
    name: 'PresenceButton',
    data() {
        return {
            showNotification: false,
            notificationMessage: '',
        };
    },
    methods: {
        markPresence() {
            const userId = 1;
            axios.post('http://localhost:3001/presence', { user_id: userId })
                .then(response => {
                    console.log('Response:', response.data);
                    this.notificationMessage = 'Presence recorded successfully';
                    this.showNotification = true;
                    // Lakukan operasi berikutnya berdasarkan respons
                })
                .catch(error => {
                    console.error('Error recording presence:', error);
                    this.notificationMessage = 'There was an error recording the presence. Please try again.';
                    this.showNotification = true;
                });
        },
        hideNotification() {
            this.showNotification = false;
        }
    }
};
</script>



<style scoped>
</style>