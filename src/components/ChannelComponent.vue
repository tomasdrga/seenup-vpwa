<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import MessageComponent from 'components/MessageComponent.vue';
import { QInfiniteScroll } from 'quasar';
import { allMessages } from 'assets/messages';
import { Message, MessageType } from 'components/models';
import { users } from 'assets/users';
import { Channel } from 'components/models';

const props = defineProps<{
  channel: Channel;
}>();

const $q = useQuasar();

const infiniteScroll = ref<QInfiniteScroll | null>(null);

const items = ref<Message[]>([]);

const showInfiniteScroll = ref(false);

const resetMessages = () => {
  items.value = allMessages.value
    .filter(message => message.channelUuid === props.channel.uuid)
    .slice(-10);

  showInfiniteScroll.value = false;

  nextTick(() => {
    showInfiniteScroll.value = true;
    if (infiniteScroll.value) {
      infiniteScroll.value.reset();
    }
  });
};


watch(() => props.channel, () => {
  resetMessages();
}, { immediate: true });

function formatTime(timestamp: Date) {
  return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const getDayString = (timestamp: Date): string => {
  return timestamp.toISOString().split('T')[0];
}

const onLoad = (index: number, done: () => void) => {
  setTimeout(() => {
    const sliceStart = Math.max(allMessages.value.length - items.value.length - 10, 0);
    const sliceEnd = Math.max(allMessages.value.length - items.value.length, 0);
    
    const newMessages = allMessages.value
      .slice(sliceStart, sliceEnd)
      .filter(message => message.channelUuid === props.channel.uuid);
    
    items.value.unshift(...newMessages);

    if (newMessages.length === 0 && infiniteScroll.value) {
      infiniteScroll.value.stop();  
    }

    done();
  }, 1000);
};



const userLoggedIn = 'Matej';

function commandsCheck(message: string) {
  const messageClean = message.replace(/<[^>]*>/g, '').trim();

  if (messageClean === '/list') {
    const otherUsers = users.value.filter(user => user.userName !== userLoggedIn).map(user => '@' + user.userName).join(', ');
    const listMessage = `Users here: ${otherUsers} ... and you!`;

    const systemMessage = {
      id: allMessages.value.length + 1,
      text: listMessage,
      userName: 'SeenUpBot',
      profilePic: 'src/assets/nowty_face.png',
      timestamp: new Date(),
      type: MessageType.system,
      channelUuid: props.channel.uuid
    };

    allMessages.value.push(systemMessage);
    items.value.push(systemMessage);
    showNotification();
    return true;
  }
  return false;
}

const scrollToBottom = () => {
  const scrollableContainer = document.querySelector('.col.overflow-auto');
  if (scrollableContainer) {
    scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
  }
}

function showNotification() {
  $q.notify({
    color: 'primary',
    textColor: 'deep-purple-1',
    avatar: 'src/assets/nowty_face.png',
    message: 'New message from SeenUpBot',
    position: 'top-right',
    timeout: 1000
  });
}

function addMessage(newMessage: string) {
  if (commandsCheck(newMessage)) {
    nextTick(() => {
      scrollToBottom();
    });
    return;
  }

  const message = {
    id: allMessages.value.length + 1,
    text: newMessage,
    userName: 'Matej',
    profilePic: 'https://cdn.quasar.dev/img/boy-avatar.png',
    timestamp: new Date(),
    type: MessageType.user,
    channelUuid: props.channel.uuid
  };

  allMessages.value.push(message);
  items.value.push(message);

  nextTick(() => {
    scrollToBottom();
  });
}

const onMessageSent = (msg: string) => {
  addMessage(msg);
};

defineExpose({
  onMessageSent
});
</script>

<template>
  <div v-if="showInfiniteScroll">
      <q-infinite-scroll ref="infiniteScroll" @load="onLoad" reverse>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner color="deep-purple-4" name="dots" size="40px" />
          </div>
        </template>
        <template v-for="(item, index) in items" :key="index">
          <q-chat-message v-if="index === 0 || getDayString(item.timestamp) !== getDayString(items[index - 1].timestamp)"
                          :label="getDayString(item.timestamp)"
                          style="height: 1rem; padding-top: 0;"
                          class="text-deep-purple-4"/>
          <message-component
            :time="formatTime(item.timestamp)"
            :message="item.text"
            :user-name="item.userName"
            :profile-pic="item.profilePic"
            :type="item.type"
          />
        </template>
      </q-infinite-scroll>
  </div>
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