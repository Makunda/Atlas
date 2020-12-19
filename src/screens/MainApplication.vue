<template>
  <v-container fluid>
    <v-row>
      <v-col cols="5" v-if="groupRecord">
        <GroupTile
          :application="groupRecord.application"
          :groupName="groupRecord.tags"
          :count="groupRecord.countTag"
          :loading="loading"
        >
        </GroupTile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupTile from "@/components/tags/GroupTile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",
  props: ["value"],

  components: {
    GroupTile
  },

  data: () => ({
    loading: true,
    groupRecord: undefined as unknown
  }),

  mounted() {
    this.getApplicationGroup(this.value);
  },

  methods: {
    getApplicationGroup(appName: string) {
      this.loading = true;
      GroupingController.getApplicationGroup(appName)
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
      this.getApplicationGroup(val);
    }
  }
});
</script>
