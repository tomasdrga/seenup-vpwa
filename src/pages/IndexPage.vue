<template>
  <q-page class="full-height q-pb-md q-pr-md padding-left-sm">
    <div class="row no-wrap justify-start items-start content-start rounded bg-white" id="main">
      <q-btn @click="dialog = true" color="primary" flat class="lt-md" icon="menu"/>

      <q-dialog v-model="dialog" persistent>
        <div id="side-popup">
          <div class="row items-center justify-center q-py-md q-pb-xl">
            <p class="text-smaller q-pl-md text-weight-bold text-primary col-10 q-mb-none">{{ currentServer.name }}</p>
            <q-btn @click="dialog = false" flat color="primary" icon="close" class="col-2"/>
          </div>
          <div class="text-primary text-body">
            <q-list class="row rounded-borders text-weight-bold">
              <q-expansion-item default-opened label="Channels" style="width: 100%;">
                <q-btn flat align="left" style="width: 100%;" v-for="(channel, index) in currentServer.channels" :key="index">
                  <q-icon :name="channel.type === 'public' ? 'tag' : 'lock'" size="xs" />
                  <span class="text-caption">{{ channel.name }}</span>
                </q-btn>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </q-dialog>
      <div class="col-0 col-md-2 full-height gt-sm" id="left-side-bar">
        <p :class="$q.screen.lt.lg ? 'text-smaller q-pa-md text-weight-bold text-primary' : 'text-h6 q-pa-md text-weight-bold text-primary'">{{ currentServer.name }}</p>
        <div class="text-primary text-body">
          <q-list class="rounded-borders text-weight-bold">
            <q-expansion-item default-opened label="Channels" style="width: 100%;">
              <q-btn flat align="left" style="width: 100%;" v-for="(channel, index) in currentServer.channels" :key="index">
                <q-icon :name="channel.type === 'public' ? 'tag' : 'lock'" size="xs" />
                <span class="text-caption">{{ channel.name }}</span>
              </q-btn>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      <div class="column col-12 col-md-10" id="channel-container">
        <div class="col-22 text-primary q-pt-md top-bar">
          <div class="fix-top bg-white full-width text-h6 q-pl-md text-weight-bold border-bottom content-center">
            #social
          </div>
          <q-tabs align="left">
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
        </q-tabs>
        </div>
        <div class="col channel-container max-width">
            <ChannelComponent ref="channelComponent" />
        </div>
        <div class="col-2 justify-center items-center bottom-bar q-px-md q-py-sm">
          <CommandLineComponent @send-message="handleSendMessage"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import CommandLineComponent from 'components/CommandLineComponent.vue';
  import ChannelComponent from 'src/components/ChannelComponent.vue';
  import { servers} from 'assets/servers';


  export default defineComponent({
    components: { ChannelComponent, CommandLineComponent },
    setup() {
      const channelComponent = ref<InstanceType<typeof ChannelComponent> | null>(null);
      const currentServer = ref(servers[0]);
      const handleSendMessage = (message: string) => {
        if (channelComponent.value) {
          channelComponent.value.onMessageSent(message);
        } else {
          console.warn('channelComponent is not available yet.');
        }
      };

      return {
        handleSendMessage,
        channelComponent,
        currentServer,
      };
    },
    data() {
      return {
        dialog: false,
      };
    },
  });

</script>

<style lang="scss">
#main {
  border: 2px solid #00000015;
  min-height: calc(100vh - 67px);
  max-height: calc(100vh - 67px);
}

.top-bar {
  border-bottom: 2px solid #00000015;
}

#left-side-bar {
  border-right: 2px solid #00000015;
  width: full-width;
  height: full-height;
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
}

#channel-container {
  height: calc(100vh - 70px);
  min-height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
}

.q-chat-message .q-chat-message--received {
  width: 250px;
}

.channel-container {
  overflow: auto;
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
