import { ref } from 'vue';

export const users = ref([
  { id: 1, userName: 'Matej Drienovský', profilePic: '/avatars/matko.jpg', status: 'Active' },  
  { id: 2, userName: 'Tomáš Drga', profilePic: '/avatars/tomko.jpg', status: 'Offline' },
  { id: 3, userName: 'Spicy Pája', profilePic: '/avatars/pajko.jpg', status: 'Do not disturb' },
])
