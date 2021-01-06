<template>
  <v-container>
    <v-row>
      <v-tabs
        v-model="tab"
        align-with-title
        fixed-tabs
        background-color="charcoal"
        dark
      >
        <v-tab v-for="item in items" :key="item.name">
          <v-icon class="mr-2" v-if="item.icon">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-card class="mx-8 mt-4">
        <v-card-title><h4 class="text-h4 ml-3">{{ items[tab].title + application }}</h4></v-card-title>
        <v-card-text class="px-4 pb-2">
          <component :is="items[tab].view"></component>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ModernizationStep from "./steps/ModernizationStep.vue";
import ConfigurationStep from "./steps/ConfigurationStep.vue";
import ExplorationStep from "./steps/ExplorationStep.vue";

export default Vue.extend({
  name: "Recommendation",

  components: {
    ModernizationStep,
    ConfigurationStep,
    ExplorationStep,
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
    application: "",
    
    step: 1,
    tab: 0,

    items: [ 
      {
        view: "ConfigurationStep",
        name: "Configuration",
        title: "Review the configuration of the application ",
      },
      {
        view: "ExplorationStep",
        name: "Exploration",
        title: "Explore the application ",
      },
      {
        view: "ModernizationStep",
        name: "Modernization",
        title : "Start modernize the application "
      },
    ],
  }),

  watch: {
    getApplicationName(newApp, oldApp) {
      this.application = newApp;
    },
  },
});
</script>

<style>
.modernization-stepper {
  width: 100%;
}
</style>
