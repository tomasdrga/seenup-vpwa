<template>
    <div class="col command-line">
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
      <div class="down-menu-bar">
        <q-btn round dense flat icon="send" size="sm" class="q-ma-xs"/>
      </div>
    </div>
</template>

<script>
</script>

<style scoped>
  /* Input block */
  .command-line {
    background: #FFFFFF;
    border: 1px solid #00000015;
    border-radius: 10px;
    margin-bottom: 0.5rem;
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
      max-width: 75vw;
    }
  }

  @media (min-width: 1440px) {
    .command-line {
      max-width: 76vw;
    }
  }

  /* Down menu bar with send button */
  .down-menu-bar {
    display: flex;
    justify-content: end;
    height: 100%;
  }
</style>
