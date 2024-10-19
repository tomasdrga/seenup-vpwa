<template>
  <div v-if="type === 'user'" class="row no-wrap q-pl-md q-py-md" id="message">
    <div class="q-pr-md">
      <q-avatar rounded class="q-mt-xs relative-position">
        <img :src="userImage" alt="Profile Pic" />
        <q-icon :name="userStatus.icon" :color="userStatus.color" class="custom-badge q-pa-none absolute" size="xs"/>
      </q-avatar>
    </div>
    <div>
      <div class="row items-center">
        <span class="q-mr-md text-weight-bold text-body1 text-primary">{{ userName }}</span>
        <div class="text-primary text-caption">{{ time }}</div>
      </div>
      <div v-html="processedMessage" class="text-message text-primary"></div>
    </div>
  </div>

  <div v-if="type === 'system'" class="col bg-deep-purple-1 q-py-sm">
    <div class="row items-center q-pl-md text-deep-purple-4">
      <q-icon name="visibility" />
      <span class="text-caption q-pl-xs">Only visible to you</span>
    </div>
    <div class="row no-wrap q-pl-md" id="message">
      <div class="q-pr-md">
        <q-avatar rounded class="">
          <img :src="userImage" alt="Profile Pic" />
        </q-avatar>
      </div>
      <div>
        <div class="row items-center">
          <span class="q-mr-md text-weight-bold text-body1 text-primary">{{ userName }}</span>
          <div class="text-caption text-deep-purple-4">{{ time }}</div>
        </div>
        <div v-html="processedMessage" class="text-message text-primary"></div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
  import { computed, defineProps, PropType } from 'vue';
  import systemImage from 'src/assets/nowty_face.png'
  import { MessageType, User } from 'components/models';
  import { users } from 'assets/users';
  const props = defineProps({
    profilePic: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<MessageType>,
      required: true
    }
  });

  const processedMessage = computed(() => {
    return props.message.replace(/\B@([\w\n]+)/g, function(_: string, username: string) {
      const userExists = users.value.some((user: User) => user.userName === username);
      return userExists ? `<mark>@${username}</mark>` : `@${username}`;
    });
  });

  const userImage = computed(() => {
    return (props.userName === 'SeenUpBot') ? systemImage : props.profilePic;
  });

  const userStatus = computed(() => {
  const user = users.value.find((user: User) => user.userName === props.userName);
  if (!user) return {icon: 'warning', color: 'red'};

  switch (user.status) {
    case 'Active':
      return {icon: 'radio_button_checked', color: 'green'};
    case 'Offline':
      return {icon: 'radio_button_checked', color: 'grey-6'};
    case 'Do not disturb':
      return {icon: 'nightlight', color: 'primary'};
    default:
      return {icon: 'warning', color: 'red'};
  }
});
</script>

<style>
  mark {
    background-color: rgba(38, 0, 101, 0.15);
    color: #260065;
    margin-right: 2px;
  }

  .message-info-row {
    display: flex;
    align-items: center;
  }

  .custom-badge {
    width: 12px;
    height: 10px;
    border-radius: 50%;
    bottom: -3px;
    right: -4px;
  }

  .text-message {
    font-size: small;
  }
</style>
