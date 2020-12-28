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
        <DemeterGroupTile min-height="330px" v-model="value">
        </DemeterGroupTile>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-if="groupRecord">
        <TagCandidateTile v-model="value"> </TagCandidateTile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupingCandidateTile from "@/components/tiles/GroupingCandidateTile.vue";
import TagCandidateTile from "@/components/tiles/TagCandidateTile.vue";
import DemeterGroupTile from "@/components/tiles/DemeterGroupTile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",
  props: ["value"],

  components: {
    GroupingCandidateTile,
    TagCandidateTile,
    DemeterGroupTile
  },

  data: () => ({
    loading: true,
    groupRecord: undefined as unknown
  }),

  mounted() {
    this.getApplicationGroupingCandidates(this.value);
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
    value: function(val) {
      this.getApplicationGroupingCandidates(val);
    }
  }
});
</script>
