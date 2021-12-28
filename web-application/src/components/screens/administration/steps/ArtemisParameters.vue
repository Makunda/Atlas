<template>
  <v-container>
    <v-card width="100%" min-height="400px">
      <v-card-title>
        <p class="text-h3 text--primary3 ml-2">
          <span class="font-weight-light pr-1">Artemis</span>
          : Configuration
        </p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="my-3">
            <ArtemisParametersViewer></ArtemisParametersViewer>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ArtemisParametersViewer from '@/components/screens/administration/components/ArtemisParametersViewer.vue';

export default Vue.extend({
  name: 'ArtemisParameters',

  components: {
    ArtemisParametersViewer,
  },

  data: () => ({}),
});
</script>
