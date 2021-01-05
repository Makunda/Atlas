<template>
  <v-container>
    <v-row class="text-center pa-5">
      <h4 class="text-h4">Check the configuration</h4>
    </v-row>
    <v-row>
        
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ConfigurationStep",

   mounted() {
    this.application = this.$store.state.applicationName;
  },

  created() {
    this.application = this.$store.state.applicationName;
  },


  data: () => ({
      application: ""
  }),

  methods: {

  },

  watch: {
    getApplicationName (newApp, oldApp) {
      this.application = newApp;
    }
  }
});
</script>
