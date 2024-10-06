<template>
  <q-page>
    <div class="full-height row no-wrap justify-start items-start content-start rounded bg-white" id="main">
      <div class="gt-sm col-md-2 full-height" id="left-side-bar">
        <q-list dense padding>
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
      <div class="col-12 col-md-10 column justify-between " style="height: 40rem">
        <ChannelComponent />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChannelComponent from 'components/ChannelComponent.vue';

export default defineComponent({
  components: { ChannelComponent }
});
</script>

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

.rounded {
  border-top-left-radius: 10px;
}


</style>

