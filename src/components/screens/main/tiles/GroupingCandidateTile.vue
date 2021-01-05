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
          v-for="group in groupToList(tags)"
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
import { GroupingController, GroupRecord } from "@/api/applications/GroupingController";
import Vue from "vue";

export default Vue.component("GroupingCandidateTile", {

  computed: {
    getApplicationName () {
      return this.$store.state.applicationName 
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getApplicationGroupingCandidates()
  },

  data: () => ({

    application: "",
    tags: [] as string[],
    count: 0,
    loading: false
  }),

  methods: {
    groupApplication(appName: string) {
      GroupingController.executeGrouping(appName).then(() => {
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
    },

    // Get the name of the Demeter grouping candidates present in the application
    getApplicationGroupingCandidates() {
      this.loading = true;
      GroupingController.getApplicationGroupingCandidates(this.application)
        .then((res: GroupRecord | null) => {
          this.loading = false;
          if (res == null) {
            this.tags = [],
            this.count = 0
            
          } else {
            this.tags = res.tags,
            this.count = res.countTag
          }
        })
        .catch(err => {
          console.error("An error occured trying to retrieve groups.", err);
        }).finally(() => {
          this.loading = false;
        })
    }
  },
  
  watch: {
      getApplicationName (newApp, oldApp) {
        this.application = newApp;
        this.getApplicationGroupingCandidates()
      }
    }

});
</script>
