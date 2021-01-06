<template>
  <v-container style="height: 80vh; width: 90vw">
    <v-row class="text-center pa-5">
      <h4 class="text-h4">Coming soon</h4>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ModernizationStep",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },
  
  mounted() {
    this.application = this.$store.state.applicationName;
  },


  data: () => ({
    application: ""
  }),

  methods: {},

  watch: {
    getApplicationName(newApp, oldApp) {
      this.application = newApp;
    }
  }
});
</script>
