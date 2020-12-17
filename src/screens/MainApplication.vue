<template>
  <v-container fluid>
    <v-row>
      <v-col cols="5" v-if="groupRecord != unknown">
        <GroupTile :application="value" 
        :groupName="groupRecord.tags" 
        :count="groupRecord.countTag">
        </GroupTile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { GroupingController, GroupRecord } from "@/api/applications/GroupingController";
import  GroupTile  from "@/components/tags/GroupTile.vue";
import Vue from "vue";

export default Vue.extend({
  name: "MainApplication",
  props: ["value"],

  components: {
    GroupTile
  },

  data: () => ({
      groupRecord: undefined as unknown
  }),

  mounted () {
    this.getApplicationGroup(this.value);
  },

  methods : {
    getApplicationGroup(appName:string) {
        GroupingController.getApplicationGroup(appName).then((res:GroupRecord | null) => {
          if(res == null) {
            this.groupRecord = { application: appName, tags: null , countTag: 0};
          } else {
            this.groupRecord = res;
          }
        }).catch((err) => {
            console.error("An error occured trying to retrieve groups.", err);
        });
      }
  }
});
</script>
