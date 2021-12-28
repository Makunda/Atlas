<template>
  <v-container fluid>
    <v-row class="mb-10 pt-3">
      <v-tabs
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
      <v-container class="mx-auto ">
        <component :is="items[tab].view"></component>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import CloudExtensions from './steps/CloudExtensions.vue';

export default Vue.extend({
  name: 'CloudRecommendations',

  components: {
    CloudExtensions,
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
  },

  data: () => ({
    application: '',

    step: 1,
    tab: 0,

    items: [
      {
        view: 'CloudExtensions',
        name: 'Cloud Extensions',
        icon: 'mdi-cloud',
      },
    ],
  }),

  watch: {
    getApplicationName(old, newApp) {
      this.application = newApp;
    },
  },
});
</script>

<style></style>
