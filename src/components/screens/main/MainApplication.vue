<template>
  <v-container fluid>
    <v-row style="min-height=300px">
      <v-col class="px-8" cols="4" >
        <GroupingCandidateTile
          min-height="330px"
        >
        </GroupingCandidateTile>
      </v-col>
      <v-col class="px-8" cols="6">
        <DemeterGroupTile min-height="330px" v-model="applicationName">
        </DemeterGroupTile>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="4" v-if="groupRecord">
        <TagCandidateTile v-model="applicationName"> </TagCandidateTile>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupingCandidateTile from "@/components/screens/main/tiles/GroupingCandidateTile.vue";
import DemeterGroupTile from "@/components/screens/main/tiles/DemeterGroupTile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",

  components: {
    GroupingCandidateTile,
    DemeterGroupTile
  },

  computed: {
    getApplicationName () {
      return this.$store.state.applicationName 
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

  methods: {
    
  },

  watch: {
    getApplicationName (newApp, oldApp) {
      this.applicationName = newApp;
    }
  }
});
</script>
