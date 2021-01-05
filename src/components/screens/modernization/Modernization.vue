<template>
  <v-container>
    <v-row class="text-center pa-5">
      <h3 class="text-h3">Modernization dashboard</h3>
    </v-row>
    <v-row fluid>
      <div>
        <v-stepper non-linear>
          <v-stepper-header>
            <v-stepper-step
              editable
              step="1"
            >
              Configuration
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              editable
              step="2"
            >
              Exploration
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              step="3"
              editable
            >
              Modernization
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>

      </div>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Modernization",

  data: () => ({})
});
</script>
