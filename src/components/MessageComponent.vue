<template>
  <div class="row no-wrap" id="message">
    <div class="q-pr-md">
      <q-avatar rounded class="q-mt-xs">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
    <div>
      <div class="row message-info-row">
        <span class="q-mr-md text-weight-bold text-body1">{{ userName }}</span>
        <div class="disabled text-caption">{{ time }}</div>
      </div>
      <div v-html="processedMessage" class="text-body2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps,  computed } from 'vue';

const props = defineProps({
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
  let text = props.message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  text = text.replace(/\B@([\w]+)/g, '<mark>@$1</mark>');

  return text;
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
