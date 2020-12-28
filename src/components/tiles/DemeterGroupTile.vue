<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div>Demeter groups detected</div>
      <p class="display-1 text--primary">Groups detected in {{ value }}</p>
      <!-- Slide group if groups were detected -->
      <v-row v-if="demeterGroups.lenght != 0">
        <template>
          <v-sheet class="mx-auto text--black" min-width="95%">
            <v-slide-group v-model="selectedGroupId" center-active show-arrows>
              <v-slide-item
                v-for="n in demeterGroups"
                :key="n.id"
                v-slot="{ active, toggle }"
              >
                <v-btn
                  class="mx-2"
                  :input-value="active"
                  active-class="orange white--text"
                  depressed
                  rounded
                  @click="toggle"
                >
                  {{ n.name }}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </template>
      </v-row>
      <!-- No Demeter groups detected, invitation to group objects -->
      <v-row v-else> </v-row>

      <!-- Display message if no group is selected -->
      <v-row class="px-6 pt-4" v-if="selectedGroupId == null">
        <v-container class="d-flex flex-column" fill-height>
          <p class="text-body-1">
            <b>Select a group to display informations</b>
          </p>
        </v-container>
      </v-row>
      <!-- Display a specific group -->
      <v-row class="px-6 pt-4" v-else>
        <v-container>
          <v-row>
            <p class="text-body-1">
              <b>Name of the group :</b>
              {{ getGroupByIndex(selectedGroupId).name }}<br />
              <b>Number of objects in the group :</b>
              {{ getGroupByIndex(selectedGroupId).numObjects }}<br />
            </p>
          </v-row>
          <v-row>
            <v-btn
              :loading="loadingUndoGroup"
              :disabled="loadingUndoGroup"
              color="warning"
              @click="undoGroup(value, getGroupByIndex(selectedGroupId).name)"
            >
              Undo group
            </v-btn>
          </v-row>
        </v-container>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="orange accent-4">
        Go to grouping Dashboard
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import {
  GroupingController,
  DemeterGroup
} from "@/api/applications/GroupingController";
import Vue from "vue";

export default Vue.component("DemeterGroupTile", {
  props: ["value"],

  mounted() {
    this.getDemeterGroups(this.value);
  },

  data: () => ({
    loadingGroups: false,
    loadingUndoGroup: false,
    demeterGroups: [] as DemeterGroup[],
    selectedGroupId: null,

    /**
     * Get the Demeter groups present in one application
     */
    getDemeterGroups(appName: string) {
      this.loadingGroups = false;
      GroupingController.getDemeterGroupedLevel5(appName)
        .then((res: DemeterGroup[]) => {
          this.loadingGroups = true;
          this.demeterGroups = res;
        })
        .catch(err => {
          this.loadingGroups = false;
          console.error("An error happened while querying Demeter groups", err);
        });
    },

    /**
     * Undo a specific demeter group
     */
    undoGroup(appName: string, groupName: string) {
      this.loadingUndoGroup = true;
      GroupingController.undoGroupedLevel5(appName, groupName)
        .then((res: string) => {
          console.log(
            `Grouping undone for level ${groupName} on application ${appName} `
          );
          this.getDemeterGroups(appName);
        })
        .catch(err => {
          console.error(
            `Failed to undo group with name ${groupName} on application ${appName}.`
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
      groups.forEach(x => {
        const groupName: string = x.substring(6);
        if (uniqueNames.indexOf(groupName) == -1) uniqueNames.push(groupName);
      });
      return uniqueNames;
    },

    getGroupByIndex(id: number) {
      return this.demeterGroups[id];
    },

    isUndoLoading(): boolean {
      return this.loadingUndoGroup;
    }
  }),

  watch: {
    value: function() {
      this.getDemeterGroups(this.value);
    }
  }
});
</script>
