<template>
  <div v-if="showCommands" class="command-suggestions absolute bg-white rounded-border text-primary hide-scrollbar q-ml-sm" style="max-width: 300px; max-height: 10rem; overflow:auto; ">
    <q-list dense>
      <q-item v-for="(command, index) in commands" :key="index" clickable v-ripple @click="selectCommand(command.name)" :class="index === commands.length - 1 ? '' : 'command-item'" >
        <q-item-section class="q-py-lg" >
          <q-item-label class="text-bold">{{ command.name }}</q-item-label>
          <q-item-label caption class="text-primary text-caption" >{{ command.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div v-if="showUsers" :style="{top: userOffset + 'rem'}" class="command-suggestions absolute bg-white rounded-border text-primary hide-scrollbar q-ml-sm" style="width: 250px; max-height: 10rem; overflow:auto; max-width: 300px ">
    <q-list dense class="q-py-sm">
      <q-item v-for="(user, index) in users" :key="index" clickable v-ripple @click="selectUser(user.userName)" :class="index === users.length - 1 ? '' : 'command-item'">
        <div class="content-center">
          <q-avatar size="sm" rounded color="purple" text-color="white">
            <img :src="user.profilePic" alt="Avatar"/>
          </q-avatar>
        </div>
        <q-item-section class="q-ml-sm">{{user.userName}}</q-item-section>
      </q-item>
    </q-list>
  </div>

  <div class="command-line rounded-border bg-white text-primary">
    <div>
      <q-editor
        v-model="editor"
        ref="editorElement"
        min-height="1rem"
        max-height="5rem"
        flat
        overflow-hidden
        placeholder="Message #social"
        toolbar-bg="grey"
        :toolbar="showToolbar ? [
        ['bold', 'italic', 'strike'],
        ['link'],
        ['unordered', 'ordered'],
        ['quote'],
      ] : []"
      />
    </div>
    <div class="q-pa-none row justify-between" style="height: 100%;">
      <div>
        <q-btn round dense flat icon="add" size="sm" class="q-ma-xs"/>
        <q-btn @click="(toggleToolbar)" round dense flat icon="text_fields" size="sm" class="q-ma-xs"/>
        <q-btn round dense flat icon="mood" size="sm" class="q-ma-xs"/>
        <q-btn @click="(toggleUser)" round dense flat icon="alternate_email" size="sm" class="q-ma-xs"/>
      </div>
      <q-btn @click="(sendMessage)" round dense flat icon="send" size="sm" class="q-ma-xs"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch, nextTick } from 'vue';

  import { computed } from 'vue';

  const userOffset = computed(() => users.value.length * -1.5);

  interface Command {
    name: string;
    description: string;
  }

  const editorElement = ref(null);
  const editor = ref('');
  const showToolbar = ref(true);
  const showCommands = ref(false);
  const showUsers = ref(false);
  watch(editor, function(newValue) {
    showCommands.value = newValue.startsWith('/');
  });


  watch(editor, (newValue: string) => {
    const replacedValue: string = newValue.replace(/<br>/g, ' ').replace(/<\/?div>/g, ' ');
    const cleanValue: string = replacedValue.replace(/<[^>]*>?/gm, '');
    const pattern: RegExp = /(^|\s)@(\s|$)/;
    showUsers.value = pattern.test(cleanValue);
  });

  const selectUser = async (user: string) => {
    console.log('editor value', editor.value);
    const parts = editor.value.split('@');
    const lastPart = parts.pop();

    const newContent = `${parts.join('@')}@${user} ${lastPart}`;

    editor.value = newContent;
    console.log('editor value inserted user', editor.value);
    await nextTick();
    showUsers.value = false;
  };

  const commands: Command[] = [
    { name: '/invite nickName', description: 'Invite a user to the channel' },
    { name: '/revoke nickName', description: 'Remove a user from the channel' },
    { name: '/join channelName', description: 'Join a channel (if the channel doesn\'t exist, it is automatically created)' },
    { name: '/kick nickName', description: 'Remove a user from the channel'},
    { name: '/quit command', description: 'Close the channel'},
    { name: '/cancel', description: 'Cancel subscription from the channel'},
    { name: '/list', description: 'View a list of channel members'},
    { name: '@nickname', description: 'Address message to specific user '}
  ];

  const users = ref([
    { userName: 'channel', profilePic: 'campaign'},
    { userName: 'matej', profilePic: 'https://cdn.quasar.dev/img/boy-avatar.png' },
    { userName: 'tomas', profilePic: 'https://cdn.quasar.dev/img/avatar1.jpg' },
  ])

  const toggleUser = async () => {
    showUsers.value = !showUsers.value;
    editor.value = editor.value + '@';
  };

  const toggleToolbar = () => {
    showToolbar.value = !showToolbar.value;
  };

  const selectCommand = async (command: string) => {
    editor.value = command;
    await nextTick();
    showCommands.value = false;
  };

  const sendMessage = (): void => {
    if (editor.value.trim() !== '') {
      emit('send-message', editor.value);
      editor.value = '';
    }
  };

  const emit = defineEmits(['send-message']);
</script>


<style scoped>
  .command-suggestions {
    z-index: 1;
    top: -8rem;
  }

  .command-item {
    border-bottom: 1px solid #00000015;
  }

  .rounded-border {
    border: 1px solid #00000015;
    border-radius: 5px;
  }
</style>
