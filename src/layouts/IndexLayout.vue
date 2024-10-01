<template>
  <q-layout view="lHh lpr lFf" class="bg-grey">
    <q-header class="bg-grey text-purple" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1">
          <span class="text-weight-bold">Page One</span>
        </q-route-tab>
        <q-route-tab to="/page2">
          <span class="text-weight-bold">Page Two</span>
        </q-route-tab>
        <q-route-tab to="/page3">
          <span class="text-weight-bold">Page Three</span>
        </q-route-tab>
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" width="100" class="bg-grey">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white" v-if="!leftDrawerOpen">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

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
