<script setup lang="ts">
  import { ref } from 'vue';
  import MessageComponent from 'components/MessageComponent.vue'
  import { QInfiniteScroll } from 'quasar';

  interface Message {
    id: number
    text: string
    userName: string
    profilePic: string
    timestamp: Date
  }

  const infiniteScroll = ref<QInfiniteScroll | null>(null);

  const allMessages = ref<Message[]>([
    { id: 1, text: 'Caukoo', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-01T10:00:00') },
    { id: 2, text: 'Serusky', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-01T10:02:00') },
    { id: 3, text: '@tomas Kedy ideme lietat', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-01T10:04:00') },
    { id: 4, text: '@matej Neviem musim robit wtech',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', userName: 'Tomas', timestamp: new Date('2024-02-01T10:08:00') },
    { id: 5, text: 'Tryhardiiiiik', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T10:10:00') },
    { id: 6, text: 'Drz hubu', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T10:20:00') },
    { id: 7, text: 'Nechce sa ti?', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T10:30:00') },
    { id: 8, text: 'Fakt nemám cas', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T10:31:00') },
    { id: 9, text: 'Dobre, nechajme to na budúci týždeň', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T10:34:00') },
    { id: 10, text: 'Ok, uvidíme', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T10:40:00') },
    { id: 11, text: 'Ale ak budes mat cas skôr, daj vediet.', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T10:45:00') },
    { id: 12, text: 'Dobre, ozvem sa ti.', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T10:47:00') },
    { id: 13, text: 'Super, drž sa!', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T10:50:00') },
    { id: 14, text: 'Ty tiež, cauko', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T11:40:00') },
    { id: 15, text: 'Maj sa!', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T12:00:00') },
    { id: 16, text: 'Zatial', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-02-03T12:30:00') },
    { id: 17, text: 'Cauko', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-02-03T12:31:00') },
    { id: 18, text: 'Caaau, tak čo? Kedy ideme lietať? :D', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:00:00') },
    { id: 19, text: 'Zase začínaš... :D', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:05:00') },
    { id: 20, text: 'No čo, už by to chcelo.', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:10:00') },
    { id: 21, text: 'Musím dokončiť projekt, mám deadline do piatku :(', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:12:00') },
    { id: 22, text: 'Okeeej, tak si tryhardík aj naďalej 😆', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:15:00') },
    { id: 23, text: 'Po piatku si nájdeme čas, sľubujem', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:18:00') },
    { id: 24, text: 'Dobre, držím ťa za slovo.', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:20:00') },
    { id: 25, text: 'A čo ty? Čo máš nové?', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:22:00') },
    { id: 26, text: 'Nič extra, klasika robota, tréning... a čakám na to lietanie!', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:25:00') },
    { id: 27, text: 'Haha, dobre teda, dohodneme sa po piatku.', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:30:00') },
    { id: 28, text: 'Platí! Maj sa zatiaľ!', userName: 'Matej',profilePic:'https://cdn.quasar.dev/img/boy-avatar.png', timestamp: new Date('2024-03-01T09:32:00') },
    { id: 29, text: 'Čaukooo', userName: 'Tomas',profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg', timestamp: new Date('2024-03-01T09:35:00') },
  ])



  const items = ref<Message[]>(allMessages.value.slice(-7))

  function formatTime(timestamp: Date) {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getDayString = (timestamp: Date): string => {
    return timestamp.toISOString().split('T')[0]
  }


const onLoad = (index: number, done: () => void) => {
  setTimeout(() => {
    const sliceStart = Math.max(allMessages.value.length - items.value.length - 7, 0)
    const sliceEnd = Math.max(allMessages.value.length - items.value.length, 0)
    const newMessages = allMessages.value.slice(sliceStart, sliceEnd)
    items.value.unshift(...newMessages)
    console.log('Loaded messages', newMessages.length)
    if (newMessages.length === 0 && infiniteScroll.value) {
      infiniteScroll.value.stop();
    }
    done()
  }, 1000)
}

</script>

<template>
    <q-infinite-scroll ref="infiniteScroll"  @load="onLoad" reverse>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner color="purple-1" name="dots" size="40px" />
        </div>
      </template>
      <template v-for="(item, index) in items" :key="index">
        <q-chat-message v-if="index === 0 || getDayString(item.timestamp) !== getDayString(items[index - 1].timestamp)"
                        :label="getDayString(item.timestamp)"
                        style="height: 1rem; padding-top: 0;"
                        class="text-primary"/>
        <message-component
          :time="formatTime(item.timestamp)"
          :message="item.text"
          :user-name="item.userName"
          :profile-pic="item.profilePic"
        />
      </template>
    </q-infinite-scroll>
</template>

<style scoped>
#message {
  padding: 1rem 1rem;
}

.q-chat-message .q-chat-message--received {
  width: 250px;
}

.border-bottom {
  border-bottom: 1px solid rgba(38, 0, 101, 0.2);
}

.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
