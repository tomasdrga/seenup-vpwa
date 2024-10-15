<template>
  <q-page class="full-height q-pb-md q-pr-md padding-left-sm">
    <div class="row no-wrap justify-start items-start content-start rounded bg-white" id="main">
      <q-btn @click="dialog = true" color="primary" flat class="lt-md" icon="menu"/>

      <q-dialog v-model="dialog" persistent>
        <div id="side-popup">
          <div class="row items-center justify-center q-py-md q-pb-xl">
            <p class="text-smaller q-pl-md text-weight-bold text-primary col-10 q-mb-none">Server name</p>
            <q-btn @click="dialog = false" flat color="primary" icon="close" class="col-2"/>
          </div>
          <div class="text-primary text-body">
            <q-list class="row rounded-borders text-weight-bold">
              <q-expansion-item default-opened label="Channels" style="width: 100%;">
                <q-btn flat align="left" style="width: 100%;">
                  <q-icon name="tag" size="xs" />
                  <span class="text-caption">General</span>
                </q-btn>
                <q-btn flat align="left" style="width: 100%;">
                  <q-icon name="tag" size="xs"/>
                  <span class="text-caption">Standup</span>
                </q-btn>
                <q-btn flat align="left" style="width: 100%;">
                  <q-icon name="lock" size="xs"/>
                  <span class="text-caption">Projects</span>
                </q-btn>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </q-dialog>
      <div class="col-0 col-md-2 full-height gt-sm" id="left-side-bar">
        <p :class="$q.screen.lt.lg ? 'text-smaller q-pa-md text-weight-bold text-primary' : 'text-h6 q-pa-md text-weight-bold text-primary'">Server name</p>
        <div class="text-primary text-body">
          <q-list class="rounded-borders text-weight-bold">
            <q-expansion-item default-opened label="Channels" style="width: 100%;">
              <q-btn flat align="left" style="width: 100%;">
                <q-icon name="tag" size="xs" />
                <span class="text-caption">General</span>
              </q-btn>
              <q-btn flat align="left" style="width: 100%;">
                <q-icon name="tag" size="xs"/>
                <span class="text-caption">Standup</span>
              </q-btn>
              <q-btn flat align="left" style="width: 100%;">
                <q-icon name="lock" size="xs"/>
                <span class="text-caption">Projects</span>
              </q-btn>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-10 full-height column justify-between">
        <div class="row">
          <div style="width: 100%;">
          </div>
        </div>
        <div class="fix-bottom">
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
#main {
  border: 2px solid #00000015;
  min-height: calc(100vh - 67px);
}

#left-side-bar {
  border-right: 2px solid #00000015;
  width: full-width;
  height: full-height;
  min-height: calc(100vh - 70px);
}

.q-chat-message .q-chat-message--received {
  width: 250px;
}

#message {
  padding: 1rem 1rem;
  border-bottom: 1px solid #00000015;
  border-top: 1px solid #00000015;
}

.rounded {
  border-radius: 10px;
}

.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.full-height {
  min-height: 100%;
}

.text-smaller {
  font-size: 1rem;
}

#side-popup {
  width: 300px;
  height: 100vh !important;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

body.platform-ios .q-dialog__inner--minimized > div, body.platform-android:not(.native-mobile) .q-dialog__inner--minimized > div {
  max-height: 100vh;
}

.channel-button {
  width: full-width;
}

@media (max-width: $breakpoint-sm-min) {
  .padding-left-sm {
    padding-left: 16px;
  }

  #main {
    min-height: calc(100vh - 124px);
  }
}

</style>


<script>

export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
