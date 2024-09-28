<template>
  <q-page>   
    
    <div class="full-height row no-wrap justify-start items-start content-start" id="main">
      <div class="gt-sm col-md-2 full-height" id="left-side-bar">
        <q-list dense bordered padding>
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-12 col-md-10 full-height column justify-between">
          <div class="row">
            <div style="width: 100%;">
              <q-chat-message
                label="Sunday, 19th"
              />

              <div class="row" id="message">
                  <div class="col-1">
                    <q-avatar rounded>
                      <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                  </div>
                  <div class="col-auto">
                    <div class="row">
                      <span class="q-mr-md text-weight-bold">Johno</span>
                      <div>Yesterday 11:45AM</div>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt qui nemo. Quod earum recusandae soluta aliquid mollitia, assumenda optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, qui? A error fuga, culpa distinctio ut alias beatae quia, tenetur perspiciatis accusamus quis ex. Quo facere sit deserunt debitis non.</div>
                  </div>
              </div>

              <div class="row" id="message">
                  <div class="col-1">
                    <q-avatar rounded>
                      <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                  </div>
                  <div class="col-auto">
                    <div class="row">
                      <span class="q-mr-md text-weight-bold">Johno</span>
                      <div>Yesterday 11:45AM</div>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt qui nemo. Quod earum recusandae soluta aliquid mollitia, assumenda optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, qui? A error fuga, culpa distinctio ut alias beatae quia, tenetur perspiciatis accusamus quis ex. Quo facere sit deserunt debitis non.</div>
                  </div>
              </div>

              <div class="row" id="message">
                  <div class="col-1">
                    <q-avatar rounded>
                      <img src="https://cdn.quasar.dev/img/avatar.png">
                    </q-avatar>
                  </div>
                  <div class="col-auto">
                    <div class="row">
                      <span class="q-mr-md text-weight-bold">Johno</span>
                      <div>Yesterday 11:45AM</div>
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt qui nemo. Quod earum recusandae soluta aliquid mollitia, assumenda optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, qui? A error fuga, culpa distinctio ut alias beatae quia, tenetur perspiciatis accusamus quis ex. Quo facere sit deserunt debitis non.</div>
                  </div>
              </div>
            </div>
          </div>
          <q-editor v-model="editor" min-height="5rem" />
      </div>
    </div>

  </q-page>
</template>

<style>
  #main {
    min-height: inherit;
  }
  .full-height {
    min-height: inherit;
  }
  #left-side-bar {
    border-right: 1px solid #00000015;
  }
  .q-chat-message .q-chat-message--received {
    width: 250px;
  }
  #message {
    padding: 1rem 1rem;
    border-bottom: 1px solid #00000015;
    border-top: 1px solid #00000015;
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