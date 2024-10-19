<template>
  <div v-if="showInfiniteScroll">
      <q-infinite-scroll ref="infiniteScroll" @load="onLoad" reverse>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner color="deep-purple-4" name="dots" size="40px" />
          </div>
        </template>

        <!--  Generate the chat messages -->
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
            :users="currentChannel.users"
          />
        </template>
      </q-infinite-scroll>
    </div>
</template>

          
<script setup lang="ts">
  import { computed, nextTick, ref, reactive, watch } from 'vue';

  import { useQuasar, QInfiniteScroll } from 'quasar';

  import MessageComponent from 'components/MessageComponent.vue';
  import { allMessages } from 'assets/messages';
  import { users, system } from 'assets/users';
  import { ChannelType, Message, MessageType, User, Channel, Server } from 'components/models';
  import { formatTime, getDayString, scrollToBottom } from './channel-helpers';
 
  const props = defineProps({
    currentServer: {
      type: Object as () => Server,
      required: true
    },
    channel: {
      type: Object as () => Channel,
      required: true
    }
  });

  const $q = useQuasar();
  const rCurrentServer = reactive(props.currentServer)
  const infiniteScroll = ref<QInfiniteScroll | null>(null);
  const showInfiniteScroll = ref(false);
  const items = ref<Message[]>([]);
  const userLoggedIn = 'Matej';
  
  // Reset messages, used when switching between channels multiple times
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
  
  // Watch for channel
  watch(() => props.channel, () => {
    resetMessages();
  }, { immediate: true });

  // Handling the load event in an infinite scroll
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

  // Checking the message for commands
  function commandsCheck(message: string) {
    const messageClean = message.replace(/<[^>]*>/g, '').trim();
    if (messageClean === '/list') {
      const otherUsers = users.value.filter(user => user.userName !== userLoggedIn).map(user => '@' + user.userName).join(', ');
      const listMessage = `Users here: ${otherUsers} ... and you!`;
      // Create a system message with the list of users
      const systemMessage = {
        id: allMessages.value.length + 1,
        text: listMessage,
        user: system,
        timestamp: new Date(),
        type: MessageType.system,
      };

      allMessages.value.push(systemMessage);
      items.value.push(systemMessage);
      showSystemNotification('New message from SeenUpBot');
      return true
    } else if (messageClean.startsWith('/join')) {
      const messageParts = messageClean.split(' ');
      // Create a new channel
      rCurrentServer.channels.push({
        name: messageParts[1],
        type: ChannelType.public,
        users: [users.value[0]],
        messages: allMessages.value
      });
      showSystemNotification('New channel created');
      return true
    }
    return false
  }

  function showSystemNotification(message: string) {
    $q.notify({
      color: 'primary',
      textColor: 'deep-purple-1',
      avatar: 'src/assets/nowty_face.png',
      message: message,
      position: 'top-right',
      timeout: 1000
    });
  }

  function showNotification(message: string, user: User) {
    // Process the message to highlight the users
    const processedMessage = computed(() => {
      return message.replace(/\B@([\w\n]+)/g, function(_: string, username: string) {
        const userExists = users.value.some((user: User) => user.userName === username);
        return userExists ? `<mark>@${username}</mark>` : `@${username}`;
      });
    });

    // Stripe part of the message
    const messageToShow = processedMessage.value.length > 20 ? processedMessage.value.substring(0, 20) + '...' : processedMessage.value;

    // Custom notification
    $q.notify({
      color: 'white',
      textColor: 'primary',
      avatar: user.profilePic,
      message: `
        <div class="col message-alert" style="width: 300px;" role="alert">
          <div class="text-bold">${user.userName}</div>
          <div>${messageToShow}</div>
        </div>
      `,
      position: 'top-right',
      timeout: 1000,
      html: true
    });
  }

  function addMessage(newMessage: string) {
    if (commandsCheck(newMessage)) {
      nextTick(() => {
        scrollToBottom()
      })
      return
    }

    const user = users.value[0];
    const message = {
      id: allMessages.value.length + 1,
      text: newMessage,
      user: user,
      timestamp: new Date(),
      type: MessageType.user,
    }

    // Add the message to the list
    allMessages.value.push(message)
    items.value.push(message)
    showNotification(newMessage, users.value[0])

    // Scroll to the bottom of the chat
    nextTick(() => {
      scrollToBottom()
    })
  }

  // Expose the function to the parent component
  const onMessageSent = (msg: string) => {
    addMessage(msg);
  };
  defineExpose({
    onMessageSent
  });
</script>

<style scoped>
  .message-alert {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
</style>
