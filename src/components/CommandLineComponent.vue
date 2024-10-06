<template>
    <div class="command-line rounded-border bg-white q-mb-md q-mx-md text-purple">
      <div>
        <q-editor
          v-model="editor"
          min-height="1rem"
          max-height="5rem"
          flat
          overflow-hidden
          toolbar-bg="grey"
          :toolbar="[
          ['bold', 'italic', 'strike'],
          ['link'],
          ['unordered', 'ordered'],
          ['quote'],
        ]"
        />
      </div>
      <div class="q-pa-none row justify-end" style="height: 100%;">
        <q-btn round dense flat icon="send" size="sm" class="q-ma-xs"/>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      editor: ref('Message #social')
    }
  }
}
</script>

<style scoped>
  .rounded-border {
    border: 1px solid #00000015;
    border-radius: 5px;
  }

  /* Input block modifier */
  @media (max-width: 1024px) {
    .command-line {
      max-width: 100vw;
      margin-inline: 5px;
    }
  }

  @media (min-width: 1024px) {
    .command-line {
      max-width: 74vw;
    }
  }

  @media (min-width: 1440px) {
    .command-line {
      max-width: 76vw;
    }
  }

</style>
