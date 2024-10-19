import { ref } from 'vue';
import { User } from 'components/models';

export const matej :User = { userName: 'Matej', profilePic: 'https://cdn.quasar.dev/img/boy-avatar.png' };
export const tomas :User = { userName: 'Tomas', profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg' };
export const pavel :User= { userName: 'Pavel', profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg' };
export const system :User= {userName: 'SeenUpBot', profilePic: 'src/assets/nowty_face.png'};

export const users = ref([
  matej,
  tomas,
  pavel
]);



