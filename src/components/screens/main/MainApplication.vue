<template>
  <v-container fluid>
    <v-row style="min-height=300px">
      <v-col class="px-8" cols="4">
        <GroupingTile min-height="330px"> </GroupingTile>
      </v-col>
      <v-col class="px-8" cols="8">
        <DemeterGroupTile min-height="330px" v-model="applicationName">
        </DemeterGroupTile>
      </v-col>
    </v-row>
    <v-row class="px-8">
      <v-card style="width: 100%;">
        <TagApplication></TagApplication>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupingTile from "@/components/screens/main/tiles/GroupingTile.vue";
import DemeterGroupTile from "@/components/screens/main/tiles/DemeterGroupTile.vue";
import TagApplication from "@/components/screens/tags/TagApplication.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",

  components: {
    GroupingTile,
    DemeterGroupTile,
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
    getApplicationName(newApp, oldApp) {
      this.applicationName = newApp;
    }
  }
});
</script>
