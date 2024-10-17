<template>
  <q-layout view="lHh lpr lFf" class="bg-grey no-scroll">
    <q-header class="bg-grey text-primary main-header" height-hint="98">
     <q-toolbar class="row items-center justify-between">
      <!-- Title with Avatar on the Left -->
      <q-toolbar-title class="text-weight-bold row items-center">
        <div class="col items-center">
          <q-avatar size="2rem" class="q-mr-xs">
            <img src="../assets/nowty_face.png">
          </q-avatar>
          SeenUp
        </div>

        <q-avatar
        v-if="$q.screen.lt.sm"
        rounded
        size="lg"
        class="q-ml-md">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      </q-toolbar-title>
      </q-toolbar>


      <!-- <q-tabs align="left">
        <q-route-tab to="/messages" id="message-tab">
          <div class="row items-center">
             <q-icon name="question_answer" class="q-mr-xs"/>
            <span class="text-weight-bold">Messages</span>
          </div>
        </q-route-tab>
        <q-route-tab to="/files" id="files-tab">
          <div class="row items-center">
            <q-icon name="layers" class="q-mr-xs"/>
            <span class="text-weight-bold">Files</span>
          </div>
        </q-route-tab>
        <q-route-tab to="/settings" id="settings-tab">
          <div class="row items-center">
            <q-icon name="settings" class="q-mr-xs"/>
            <span class="text-weight-bold">Settings</span>
          </div>
        </q-route-tab>
      </q-tabs> -->
    </q-header>

    <q-drawer show-if-above breakpoint="600" v-model="leftDrawerOpen" side="left" width="75" class="bg-grey row content-between justify-center">
      <div class="row justify-center items-center" id="top_actions">
        <q-tabs vertical class="text-primary">
          <q-route-tab to="/messages" id="message-tab">
            <div class="column items-center">
              <q-icon name="home"/>
              <span class="text-weight-bold smaller">Home</span>
            </div>
          </q-route-tab>
          <q-route-tab to="/files" id="files-tab">
            <div class="column items-center">
              <q-icon name="notifications"/>
              <span class="text-weight-bold smaller">Activity</span>
            </div>
          </q-route-tab>
          <q-route-tab to="/settings" id="settings-tab">
            <div class="column items-center">
              <q-icon name="more_horiz"/>
              <span class="text-weight-bold smaller">More</span>
            </div>
          </q-route-tab>
        </q-tabs>
      </div>

      <div class="row justify-center items-center q-mb-md">
        <q-btn round icon="add" class="q-mb-md" id="add-button"/>
        <q-avatar rounded size="lg">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey text-primary" v-if="!leftDrawerOpen" height-hint="20">
      <q-toolbar>
        <q-tabs horizontal class="text-primary row justify-center items-center full-width">
          <q-route-tab to="/messages" id="message-tab">
            <div class="column items-center">
              <q-icon name="home"/>
              <span class="text-weight-bold smaller">Home</span>
            </div>
          </q-route-tab>
          <q-route-tab to="/files" id="files-tab">
            <div class="column items-center">
              <q-icon name="notifications"/>
              <span class="text-weight-bold smaller">Activity</span>
            </div>
          </q-route-tab>
          <q-route-tab to="/settings" id="settings-tab">
            <div class="column items-center">
              <q-icon name="more_horiz"/>
              <span class="text-weight-bold smaller">More</span>
            </div>
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style lang="scss">
  .no-scroll {
    overflow: hidden;
  }
  .q-tabs .q-focus-helper {
    display: none;
  }
  #message-tab:hover, #files-tab:hover, #settings-tab:hover {
    color: $purple-8;
  }

  #add-button {
    background-color: transparent;
    color: $primary;
    border:1px solid $primary;
  }

  #top_actions {
    margin-top: 3rem;
  }

  .smaller {
    font-size: 0.7rem;
  }

  @media (max-width: $breakpoint-sm-min) {
    .main-header {
      margin-bottom: 8px;
    }

  }
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
