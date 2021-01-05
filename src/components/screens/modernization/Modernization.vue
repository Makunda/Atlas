<template>
  <v-container>
    <v-row class="text-center pa-5">
      <h3 class="text-h3">Modernization dashboard</h3>
    </v-row>
    <v-row class="px-6 modernization-stepper">
      <v-stepper v-model="step" non-linear style="width: 100%">
        <v-stepper-header>
          <v-stepper-step editable step="1">
            Pilot acceleration
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="2">
            Exploration
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" editable>
            Modernization
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <ConfigurationStep></ConfigurationStep>

            <v-btn class="white--text" color="charcoal" @click="step = 2">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <ExplorationStep></ExplorationStep>

            <v-btn class="white--text" color="charcoal" @click="step = 3">
              Continue
            </v-btn>
            <v-btn text @click="step = 1">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <ModernizationStep></ModernizationStep>

            <v-btn text @click="step = 2">
              Go back
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ModernizationStep from "./steps/ModernizationStep.vue";
import ConfigurationStep from "./steps/ConfigurationStep.vue";
import ExplorationStep from "./steps/ExplorationStep.vue";

export default Vue.extend({
  name: "Modernization",

  components: {
    ModernizationStep,
    ConfigurationStep,
    ExplorationStep
  },

  data: () => ({
    step: 1
  })
});
</script>

<style>
.modernization-stepper {
  width: 100%;
}
</style>
