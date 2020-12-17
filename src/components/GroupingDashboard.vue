<template>
  <v-container>
    <v-row class="text-center">
      <h1 class="display-1 ml-4">Candidate for grouping</h1>
    </v-row>
    <v-row ma-0 pa-0>
      <v-col v-for="n in groupList" :key="n.application">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Candidate application</div>
            <p class="display-1 text--primary">
              {{ n.application }}
            </p>
            <p>Objects to group : {{ n.countTag | 0 }}</p>
            <p v-if="n.countTag!=0">Will create groups :</p>
            <v-row v-if="n.tags" class="text--primary">
              <v-chip
                v-for="group in groupToList(n.tags)"
                :key="group"
                class="ma-2"
                color="secondary"
              >
                {{ group }}
              </v-chip>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="space-around">
              <v-btn
                tile
                color="success"
                v-on:click="groupApplication(n.application)"
              >
                <v-icon left>
                  mdi-adjust
                </v-icon>
                Group communities
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
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

  components: {},

  mounted() {
    this.getGroups();
    this.groupWatchdog();
  },

  data: () => ({
    refreshGroupInterval: 0,
    intervalCheck: 50000 as number,
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

    groupToList(groups: string[]) {
      const uniqueNames = [] as string[];

      groups.forEach(x => {
        const groupName: string = x.substring(6);
        if (uniqueNames.indexOf(groupName) == -1) uniqueNames.push(groupName);
      });
      return uniqueNames;
    },

    groupApplication(appName: string) {
      GroupingController.executeGrouping(appName).then((res: string) => {
        console.log(`Application ${appName} was sucessfully grouped !`);
        this.getGroups(); // Refresh the view
      });
    },

    groupWatchdog() {
      this.refreshGroupInterval = setInterval(() => {
        console.log("Check group");
        this.getGroups();
      }, this.intervalCheck || 2000);
    },

    beforeDestroy() {
      clearInterval(this.refreshGroupInterval);
    }
  }
});
</script>
