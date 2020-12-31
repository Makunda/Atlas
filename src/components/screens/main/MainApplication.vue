<template>
  <v-container fluid>
    <v-row>
      <v-col class="px-8" cols="3" v-if="groupRecord">
        <GroupingCandidateTile
          min-height="330px"
          :application="groupRecord.application"
          :groupName="groupRecord.tags"
          :count="groupRecord.countTag"
          :loading="loading"
        >
        </GroupingCandidateTile>
      </v-col>
      <v-col class="px-8" cols="6" v-if="groupRecord">
        <DemeterGroupTile min-height="330px" v-model="applicationName">
        </DemeterGroupTile>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-if="groupRecord">
        <TagCandidateTile v-model="applicationName"> </TagCandidateTile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupingCandidateTile from "@/components/screens/main/tiles/GroupingCandidateTile.vue";
import TagCandidateTile from "@/components/screens/main/tiles/TagCandidateTile.vue";
import DemeterGroupTile from "@/components/screens/main/tiles/DemeterGroupTile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",

  components: {
    GroupingCandidateTile,
    TagCandidateTile,
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
    this.getApplicationGroupingCandidates(this.applicationName);
    this.applicationName = this.$store.state.applicationName;
  },

  methods: {
    // Get the name of the Demeter grouping candidates present in the application
    getApplicationGroupingCandidates(appName: string) {
      this.loading = true;
      GroupingController.getApplicationGroupingCandidates(appName)
        .then((res: GroupRecord | null) => {
          this.loading = false;
          if (res == null) {
            this.groupRecord = {
              application: appName,
              tags: null,
              countTag: 0
            };
          } else {
            this.groupRecord = res;
          }
        })
        .catch(err => {
          console.error("An error occured trying to retrieve groups.", err);
        });
    }
  },

  watch: {
    getApplicationName (newApp, oldApp) {
      this.getApplicationGroupingCandidates(newApp);
      this.applicationName = newApp;
    }
  }
});
</script>
