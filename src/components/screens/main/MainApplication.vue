<template>
  <v-container fluid>
    <v-card class="ma-4">
      <v-card-text>
        <v-row class="px-8 mb-8 my-4" style="min-height=300px">
          <GroupingTile min-height="330px"> </GroupingTile>
        </v-row>
        <v-row class="px-8 my-8">
          <v-card class="pa-2" style="width: 100%;">
            <TagApplication></TagApplication>
          </v-card>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">

import GroupingTile from "@/components/screens/main/tiles/GroupingTile.vue";
// import DemeterGroupTile from "@/components/screens/main/tiles/DemeterGroupTile.vue";
import TagApplication from "@/components/screens/tags/TagApplication.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",

  components: {
    GroupingTile,
    // DemeterGroupTile,
    TagApplication
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    loading: true,
    groupRecord: undefined as unknown,
    applicationName: "" as string
  }),

  mounted() {
    this.applicationName = this.$store.state.applicationName;
  },

  methods: {},

  watch: {
    getApplicationName(newApp) {
      this.applicationName = newApp;
    }
  }
});
</script>
