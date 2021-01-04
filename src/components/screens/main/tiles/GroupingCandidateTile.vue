<template>
  <v-card class="mx-auto" height="100%">
    <v-card-text>
      <div>Candidate application</div>
      <p class="display-1 text--primary">
        {{ application }}
      </p>
      <p>Objects to group : {{ count }}</p>
      <p v-if="count == 0">
        No Demeter tags were found in your application <br />See how to create
        tags on the
        <a
          href="https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki"
          >Demeter Wiki</a
        >
      </p>
      <p v-if="count != 0">Will create groups :</p>
      <v-row class="text--primary">
        <v-chip
          v-for="group in groupToList(groupName)"
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
          v-on:click="groupApplication(application)"
          :disabled="count == 0"
        >
          <v-icon left>
            mdi-adjust
          </v-icon>
          Group communities
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { GroupingController } from "@/api/applications/GroupingController";
import Vue from "vue";

export default Vue.component("GroupingCandidateTile", {
  props: {
    application: String,
    groupName: String,
    count: Number,
    loading: Boolean
  },

  data: () => ({
    groupApplication(appName: string) {
      GroupingController.executeGrouping(appName).then((res: string) => {
        console.log(`Application ${appName} was sucessfully grouped !`);
      });
    },

    groupToList(groups: string[]) {
      if (groups == null) return "";

      const uniqueNames = [] as string[];
      groups.forEach(x => {
        const groupName: string = x.substring(6);
        if (uniqueNames.indexOf(groupName) == -1) uniqueNames.push(groupName);
      });
      return uniqueNames;
    }
  })
});
</script>
