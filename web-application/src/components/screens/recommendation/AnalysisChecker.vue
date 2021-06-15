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
import Vue from "vue";
import ModernizationStep from "./steps/ModernizationStep.vue";
import ConfigurationStep from "./steps/ConfigurationStep.vue";
import ExplorationStep from "./steps/ExplorationStep.vue";
import BreakdownStep from "@/components/screens/recommendation/steps/BreakdownStep.vue";

export default Vue.extend({
  name: "AnalysisChecker",

  components: {
    BreakdownStep,
    ConfigurationStep,
    ExplorationStep
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
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
        title: "Review the configuration of the ",
        icon: "mdi-folder-cog"
      },
      {
        view: "ExplorationStep",
        name: "Exploration",
        title: "Explore the ",
        icon: "mdi-apple-safari"
      },
      {
        view: "BreakdownStep",
        name: "Breakdown",
        title: "Review the breakdown of the ",
        icon: "mdi-pickaxe"
      }
    ]
  }),

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>

<style>
.modernization-stepper {
  width: 100%;
}

.v-tab--active {
  background-color: #5a727ca6;
}

.v-tabs-slider-wrapper {
  border-bottom: 6px solid #2a9d8f;
}
</style>
