<template>
  <v-container>
    <ActionTileViewer></ActionTileViewer>
    <v-divider></v-divider>


  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ActionTileViewer from "@/components/artemis/modules/ArtemisViewer.vue";

export default Vue.extend({
  name: "ExplorationStep",

  components: {
    ActionTileViewer
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
    application: ""
  }),

  methods: {},

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>

<style>
#artemis-viewer {
  /* Size */
  min-height: 100px;

  /* Colors */
  color: black;
  background-color: white;

  /* Border */
  border: 2px inset #2a9d8f;
  border-radius: 20px;
}
</style>
