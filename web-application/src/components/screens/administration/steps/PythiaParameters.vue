<template>
  <v-container>
    <v-card width="100%" min-height="400px">
      <v-card-title>
        <p class="text-h3 text--primary3 ml-2">
          <span class="font-weight-light pr-1">Pythia</span>
          : Configuration
        </p>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row class="my-3">
            <PythiaParametersViewer></PythiaParametersViewer>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PythiaParametersViewer from "../components/PythiaParametersViewer.vue";

export default Vue.extend({
  name: "PythiaParameters",

  components: {
    PythiaParametersViewer
  }
});
</script>
