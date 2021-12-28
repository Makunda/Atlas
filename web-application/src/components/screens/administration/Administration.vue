<template>
  <v-container fluid>
    <v-row>
      <v-tabs
        class="pt-3"
        v-model="tab"
        align-with-title
        fixed-tabs
        background-color="deepcharcoal"
        dark
      >
        <v-tab v-for="item in items" :key="item.name">
          <v-icon class="mr-3" v-if="item.icon">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-container class="mx-auto mt-10">
        <component :is="items[tab].view"></component>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ArtemisParameters from '@/components/screens/administration/steps/ArtemisParameters.vue';
import GlobalParameters from '@/components/screens/administration/steps/GlobalParameters.vue';
import PythiaParameters from '@/components/screens/administration/steps/PythiaParameters.vue';

export default Vue.extend({
  name: 'Administration',

  components: {
    GlobalParameters,
    ArtemisParameters,
    PythiaParameters,
  },

  data: () => ({
    tab: 0,

    step: 1,

    items: [
      {
        view: 'GlobalParameters',
        name: 'Global Parameters',
        icon: 'mdi-cogs',
      },
      {
        view: 'ArtemisParameters',
        name: 'Artemis Parameters',
        icon: 'mdi-cogs',
      },
      {
        view: 'PythiaParameters',
        name: 'Pythia Parameters',
        icon: 'mdi-cogs',
      },
    ],
  }),
});
</script>
