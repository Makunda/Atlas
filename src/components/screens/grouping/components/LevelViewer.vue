<template>
  <v-container> 
      <v-row >
        <v-toolbar
            dark
            color="#1D5D6B"
        >
        <v-toolbar-title>Levels detected in the application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-autocomplete
          :search-input.sync="searchLevels"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Filter the levels ..."
          solo-inverted
        ></v-autocomplete>
      </v-toolbar>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  GroupingController,
  Level5Group,
} from "@/api/applications/GroupingController";
import Vue from "vue";

export default Vue.component("LevelViewer", {

  mounted() {
    this.applicationName = this.$store.state.applicationName;
  },

  computed: {
    getApplicationName() {
        return this.$store.state.applicationName;
    }
  },

  data: () => ({
    // Loadings
    loadingGroups: false,
    loadingUndoGroup: false,

    // Filter
    searchLevels: "" as string,

    // Application
    applicationName: "" as string,

    levels: [] as Level5Group[],
    selectedGroupId: null

  }),

  methods :{

        /**
         * Get the Demeter groups present in one application
         */
        getLevelGroups() {
        this.loadingGroups = false;
        GroupingController.getAllLevels(this.applicationName)
            .then((res: Level5Group[]) => {
            this.loadingGroups = true;
            this.levels = res;
            })
            .catch((err) => {
            this.loadingGroups = false;
            console.error("An error happened while querying Demeter groups", err);
            });
        },

        /**
         * Undo a specific demeter group
         */
        undoGroup(appName: string, group: Level5Group) {
        // Ignore the group if it's not a demeter group
        if(!group.demeterGroup) return;

        this.loadingUndoGroup = true;
        GroupingController.undoGroupedLevel5(appName, group.name)
            .then((res: string) => {
            console.log(
                `Grouping undone for level ${group} on application ${appName} `
            );
            this.getLevelGroups();
            })
            .catch((err) => {
            console.error(
                `Failed to undo group with name ${group} on application ${appName}.`,
                err
            );
            })
            .finally(() => {
            this.loadingUndoGroup = false;
            });
        },

        /**
         * Split the groups in a list of string
         */
        groupToList(groups: string[]) {
            if (groups == null) return "";

            const uniqueNames = [] as string[];
            groups.forEach((x) => {
                const groupName: string = x.substring(6);
                if (uniqueNames.indexOf(groupName) == -1) uniqueNames.push(groupName);
            });
            return uniqueNames;
        },


    },

    watch: {
        getApplicationName (newApp, oldApp) {
            this.applicationName = newApp;
            this.getLevelGroups()
        }
    },
});
</script>
