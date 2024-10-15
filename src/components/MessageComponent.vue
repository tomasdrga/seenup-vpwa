<template>
  <div class="row no-wrap q-pl-md" id="message">
    <div class="q-pr-md">
      <q-avatar rounded class="q-mt-xs">
        <img :src="profilePic" alt="Profile Pic" />
      </q-avatar>
    </div>
    <div>
      <div class="row items-center">
        <span class="q-mr-md text-weight-bold text-body1 text-purple">{{ userName }}</span>
        <div class="text-purple-1 text-caption">{{ time }}</div>
      </div>
      <div v-html="processedMessage" class="text-body2 text-purple"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

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
});

const processedMessage = computed(() => {
  return props.message.replace(/\B@([\w]+)/g, '<mark>@$1</mark>');
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
</style>
