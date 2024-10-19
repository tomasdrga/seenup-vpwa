<template>
  <q-layout view="lHh lpr lFf" class="bg-grey no-scroll">
    <q-header class="bg-grey text-primary main-header" height-hint="98">
      <q-toolbar class="row items-center justify-between">

        <q-toolbar-title class="text-weight-bold row items-center">
          <div class="col items-center text-uppercase">
            <q-avatar size="2rem" class="q-mr-xs">
              <img src="../assets/nowty_face.png">
            </q-avatar>
            SeenUp
          </div>

          <q-btn v-if="$q.screen.lt.sm" flat class="q-pa-none">
            <q-avatar rounded size="lg">
              <img :src="user.profilePic" alt="Profile Pic" />
            </q-avatar>
            <q-menu
              anchor="bottom right"
              self="bottom left"
              :offset="[10, 0]"
              class="q-pt-md text-primary">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section class="col-3">
                    <q-avatar rounded size="lg">
                      <img :src="user.profilePic" alt="Profile Pic" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-weight-bold text-no-wrap">{{ user.userName }}</q-item-label>
                    <q-item-label caption class="text-purple-4">
                      <q-icon :name="userStatus.icon" :color="userStatus.color"></q-icon>{{ user.status }}
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable class="text-primary">
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_left" />
                  </q-item-section>
                  <q-item-section class="text-right">Status</q-item-section>

                  <q-menu anchor="top end" self="top start" class="text-primary">
                    <q-list>
                      <q-item dense clickable @click="changeStatus('Active')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="radio_button_checked" color="green" class="q-pr-sm"></q-icon>Active
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item dense clickable @click="changeStatus('Do not disturb')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="nightlight" color="primary" class="q-pr-sm"></q-icon>Do not disturb
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item dense clickable @click="changeStatus('Offline')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="radio_button_unchecked" color="grey-6" class="q-pr-sm"></q-icon>Offline
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section class="text-right">Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section class="text-right">Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above :breakpoint="600" v-model="leftDrawerOpen" side="left" :width="75" class="bg-grey row content-between justify-center">
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
        <q-btn round icon="add" class="q-mb-md" id="add-button">
          <q-menu
            anchor="bottom right"
            self="bottom left"
            :offset="[10, 0]"
            class="text-primary">
            <q-list>
              <q-item clickable v-close-popup @click="newChannelDialog = true">
                <q-item-section class="col-1">
                  <q-icon name="add"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-no-wrap">Create new channel</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section class="col-1">
                  <q-icon name="add"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-no-wrap">Invite people</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn flat class="q-pa-none">
          <q-avatar rounded size="lg">
            <img :src="user.profilePic" alt="Profile Pic" />
          </q-avatar>
          <q-menu
            anchor="bottom right"
            self="bottom left"
            :offset="[10, 0]"
            class="q-pt-md text-primary">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section class="col-3">
                  <q-avatar rounded size="lg">
                    <img :src="user.profilePic" alt="Profile Pic" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-no-wrap">{{ user.userName }}</q-item-label>
                  <q-item-label caption class="text-purple-4">
                    <q-icon :name="userStatus.icon" :color="userStatus.color"></q-icon>{{ user.status }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Status</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start" class="text-primary">
                    <q-list>
                      <q-item dense clickable @click="changeStatus('Active')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="radio_button_checked" color="green" class="q-pr-sm"></q-icon>Active
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item dense clickable @click="changeStatus('Do not disturb')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="nightlight" color="primary" class="q-pr-sm"></q-icon>Do not disturb
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item dense clickable @click="changeStatus('Offline')">
                        <q-item-section>
                          <q-item-label>
                            <q-icon name="radio_button_unchecked" color="grey-6" class="q-pr-sm"></q-icon>Offline
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section @click="settings = true">Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Sign out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
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

  <q-dialog v-model="settings">
      <q-card style="min-width: 75vw; max-width: 75vw; max-height: 75vh" class="text-primary">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold text-uppercase">Settings</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-py-none dialog-tabs">
          <q-tabs align="left" v-model="selectedTab">
            <q-tab name="general">
              <div class="row items-center"><q-icon name="settings" class="q-mr-xs gt-xs"/><span class="text-weight-bold">General</span></div> 
            </q-tab>
            <q-tab name="user">
              <div class="row items-center"><q-icon name="person" class="q-mr-xs gt-xs"/><span class="text-weight-bold">User</span></div> 
            </q-tab>
            <q-tab name="security">
              <div class="row items-center"><q-icon name="security" class="q-mr-xs gt-xs"/><span class="text-weight-bold">Security</span></div> 
            </q-tab>
          </q-tabs>
        </q-card-section>
        <q-card-section>
          <q-card-section>
            <div class="text-h6">{{ selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1) }}</div>
          </q-card-section>
          <q-card-section v-if="selectedTab === 'general'" class="q-py-none">
            <q-form @submit="onSubmit" @reset="onReset">
              <q-card-section class="q-px-none q-pt-none">
                <q-card-label>
                  <div class="text-body text-weight-bold text-uppercase q-pb-sm">Notifications</div>
                  <div class="text-caption text-purple-9 q-pb-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illum nisi quas explicabo ut porro alias omnis aspernatur cumque sapiente unde, non consequatur facere, odit dolorem impedit quia? Numquam, fugiat.</div>
                </q-card-label>
                <q-select filled v-model="notificationType" :options="options" label="Notification type" />
              </q-card-section>
              <q-card-section class="q-px-none q-pt-none">
                <div class="row q-pt-xl justify-end">
                  <q-btn label="Discard" type="reset" color="primary" flat class="q-ml-sm" />
                  <q-btn label="Save" type="submit" color="primary" />
                </div>
              </q-card-section>
            </q-form>
          </q-card-section>
          <q-card-section v-else-if="selectedTab === 'people'">
            <q-scroll-area style="height: 400px;">
              
            </q-scroll-area>
          </q-card-section>
          <q-card-section v-else-if="selectedTab === 'danger'">
            <q-scroll-area style="height: 400px;">
              
            </q-scroll-area>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="newChannelDialog" >
      <q-card style="min-width: 75vw; max-width: 75vw; max-height: 75vh" class="text-primary">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold text-uppercase">Create a new channel</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-card-section class="q-py-none">
             <q-form @submit="onSubmitChannel" @reset="onResetChannel">
              <q-card-section class="q-pa-none">
                <q-card-label>
                  <div class="text-body text-weight-bold text-uppercase q-pb-sm">Channel name</div>
                  <div class="text-caption text-purple-9 q-pb-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illum nisi quas explicabo ut porro alias omnis aspernatur cumque sapiente unde, non consequatur facere, odit dolorem impedit quia? Numquam, fugiat.</div>
                </q-card-label>
                <q-input
                  filled
                  v-model="name"
                  label="Channel name"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type your channel name']"
                />
              </q-card-section>
              <q-card-section class="q-px-none q-pt-none">
                <q-card-label>
                  <div class="text-body text-weight-bold text-uppercase q-pb-sm">Channel type</div>
                  <div class="text-caption text-purple-9 q-pb-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore illum nisi quas explicabo ut porro alias omnis aspernatur cumque sapiente unde, non consequatur facere, odit dolorem impedit quia? Numquam, fugiat.</div>
                </q-card-label>
                <q-select
                  v-model="typeChannel"
                  label="Channel Type"
                  :options="channel_options"
                  option-value="value"
                  option-label="label"
                />
              </q-card-section>
              <q-card-section class="q-px-none q-pt-none">
                <div class="row q-pt-xl justify-end">
                  <q-btn label="Discard" type="reset" color="primary" flat class="q-ml-sm" />
                  <q-btn label="Save" type="submit" color="primary" />
                </div>
              </q-card-section>
            </q-form>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
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
  border: 1px solid $primary;
}

.dialog-tabs {
  border-bottom: 2px solid #00000015;
}

#top_actions {
  margin-top: 3rem;
}

.smaller {
  font-size: 0.7rem;
}

.main-dialog {
  width: 75%;
}

@media (max-width: $breakpoint-sm-min) {
  .main-header {
    margin-bottom: 8px;
  }
}
</style>

<script lang="ts">
import { useQuasar } from 'quasar';
import { ref, computed, reactive } from 'vue';
import { users } from 'assets/users';
import { useServerStore } from '../stores/serverStore';
import { ChannelType } from 'components/models';
import { v4 as uuidv4 } from 'uuid';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const name = ref(null);
    const typeChannel = ref(null);
    const newChannelDialog = ref(false);

    const user = reactive(users.value[0]);

    const selectedTab = ref('general');

    const serverStore = useServerStore();

    const userStatus = computed(() => {
      switch (user.status) {
        case 'Active':
          return { icon: 'radio_button_checked', color: 'green' };
        case 'Offline':
          return { icon: 'radio_button_checked', color: 'grey-6' };
        case 'Do not disturb':
          return { icon: 'nightlight', color: 'primary' };
        default:
          return { icon: 'mdi-account-question', color: 'grey' };
      }
    });

    const changeStatus = (status: string) => {
      user.status = status;
    };

    const onSubmitChannel = () => {
      let type = ChannelType.public;
      if (typeChannel.value === 'Public') {
        type = ChannelType.public;
      } else {
        type = ChannelType.private;
      }
      if (typeChannel.value && name.value) {
        const newChannel = {
          id: Date.now(), 
          uuid: uuidv4(), 
          type: type,
          name: name.value,
          users: users.value,
        };
        serverStore.addChannelToServer(1, newChannel); 
        newChannelDialog.value = false;
        console.log('New channel created successfully', newChannel);

        $q.notify({
          progress: true,
          color: 'grey',
          textColor: 'primary',
          icon: 'done',
          message: 'New channel created successfully',
          position: 'top'
        });
      } else {
        $q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'error',
          message: 'Please fill in all required fields',
          position: 'top'
        });
      }
    };
    
    const onResetChannel = () => {
      name.value = null;
      typeChannel.value = null;
    };

    return {
      icon: ref(false),
      notificationType: ref(null),
      name,
      typeChannel,
      options: ['Off', 'Only mentions', 'All messages'],
      channel_options: ['Public', 'Private'],
      leftDrawerOpen,
      user,
      userStatus,
      changeStatus,
      selectedTab,
      settings: ref(false),
      newChannelDialog,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      onSubmit() {
        $q.notify({
          progress: true,
          color: 'grey',
          textColor: 'primary',
          icon: 'done',
          message: 'Settings changes saved successfully',
          position: 'top'
        });
      },
      onReset() {
        name.value = null;
      },
      onSubmitChannel,
      onResetChannel
    };
  }
};
</script>