<template>
  <v-container>
    <v-row class="text-center">
      <h1 class="display-1 ml-4">Candidate for grouping</h1>
    </v-row>
    <v-row ma-0 pa-0>
      <v-col v-for="n in groupList" :key="n.application">
        <GroupTile
          :application="n.application"
          :groupName="groupToHtml(n.tags)"
          :count="n.countTag"
        ></GroupTile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  GroupingController,
  GroupRecord
} from "@/api/applications/GroupingController";
import GroupTile from "./tags/GroupTile.vue";

export default Vue.extend({
  name: "GroupingDashboard",

  components: {
    GroupTile
  },

  created() {
    this.getGroups();
  },

  data: () => ({
    groupList: [] as GroupRecord[]
  }),

  methods: {
    getGroups() {
      GroupingController.getGroups().then((res: GroupRecord[]) => {
        this.groupList = res;
        console.log(`Loaded ${res.length} groups..`);
        console.log(res);
      });
    },

    groupToHtml(groups: string[]) {
      const uniqueNames = [] as string[];
      groups.forEach(x => {
        if (uniqueNames.indexOf(x) == -1) uniqueNames.push(x);
      });

      let htmlBalise = "";
      uniqueNames.forEach(x => {
        const groupName: string = x.substring(6);
        htmlBalise +=
          "<v-chip class='ma-2' color='secondary'> " +
          groupName +
          " </v-chip> ";
      });
      return htmlBalise;
    }
  }
});
</script>
