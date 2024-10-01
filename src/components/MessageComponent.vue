<template>
  <div class="row no-wrap" id="message">
    <div class="q-pr-md">
      <q-avatar rounded>
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
    </div>
    <div>
      <div class="row">
        <span class="q-mr-md text-weight-bold">{{userName}}</span>
        <div>{{time}}</div>
      </div>
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
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
</script>
