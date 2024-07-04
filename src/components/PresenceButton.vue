<template>
    <div>
        <!-- <button @click="openModal" type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
            </svg>
            <span class="sr-only">Icon description</span>
        </button> -->

        <button @click="openModal" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Presence
        </button>


        <div v-if="showNotification" id="toast-interactive" class="fixed bottom-0 right-0 m-4 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
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

        <div v-if="isModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
                <div class="px-4 py-5 sm:p-6">
                    <video ref="video" autoplay playsinline class="w-full"></video>
                    <div class="actions mt-4 flex justify-between">
                        <button @click="capture" class="bg-blue-500 text-white px-4 py-2 rounded">Capture</button>
                        <button @click="save" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                        <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded">Close</button>
                    </div>
                    <img v-if="photo" :src="photoUrl" alt="Captured Image" class="mt-4 w-full"/>
                    <textarea v-model="comments" placeholder="Add comments" class="mt-4 w-full p-2 border rounded"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const video = ref(null);
const photo = ref(null);
const comments = ref('');
const isModalOpen = ref(false);
const showNotification = ref(false);
const notificationMessage = ref('');
let stream = null;

const openModal = async () => {
    isModalOpen.value = true;
    await start();
};

const closeModal = () => {
    isModalOpen.value = false;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
};

const start = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (video.value) {
            video.value.srcObject = stream;
        }
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
};

const capture = () => {
    if (video.value) {
        const canvas = document.createElement('canvas');
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            const file = new File([blob], 'photo.png', { type: 'image/png' });
            photo.value = file;
        }, 'image/png');
    }
};

const save = async () => {
    if (photo.value) {
        const formData = new FormData();
        formData.append('photo', photo.value); // Mengirim file sebagai bagian dari FormData
        formData.append('user_id', 1);  // ID pengguna yang aktif
        formData.append('comments', comments.value);

        try {
            await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            notificationMessage.value = 'Presence recorded successfully';
            showNotification.value = true;
            closeModal();
        } catch (error) {
            console.error('Error saving photo:', error);
            notificationMessage.value = 'There was an error recording the presence. Please try again.';
            showNotification.value = true;
        }
    }
};

const hideNotification = () => {
    showNotification.value = false;
};

const photoUrl = computed(() => {
  return photo.value ? URL.createObjectURL(photo.value) : '';
});

onMounted(() => {
    // Tambahkan kode yang perlu dijalankan saat komponen dimount, jika ada
});
</script>

<style scoped>
/* Gaya CSS untuk PresenceButton.vue */
</style>
