<template>
  <v-container>
    <v-row no-gutters>
      <v-toolbar dense>
        <v-toolbar-title>Generate tag for : {{value}} </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>

    <template>
      <v-card class="mt-4" height="100%">
        <template>
          <v-progress-linear
            v-if="loading"
            indeterminate
            color="cyan"
          ></v-progress-linear>
          <v-simple-table height="80vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Tag
                  </th>
                  <th class="text-left">
                    Description
                  </th>
                  <th class="text-left">
                    Number of Match
                  </th>
                  <th class="text-left">
                    Categories
                  </th>
                  <th class="text-left">
                    Use cases
                  </th>
                  <th class="text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tagResultList" :key="item.id">
                  <td>{{ item.tag }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.numMatch }}</td>
                  <td v-html="convertBadgeToHTML(item.categories)"></td>
                  <td>{{ item.useCase }}</td>
                  <td>
                    <v-btn
                      small
                      depressed
                      color="primary"
                      v-on:click="executeTag(item.id)"
                    >
                      Execute
                      <v-expand-transition>
                        <v-icon dark right v-if="!checkOnGoing(item.id)">
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-expand-transition>
                      <v-progress-circular
                        v-if="checkOnGoing(item.id)"
                        :size="20"
                        indeterminate
                        color="white"
                        class="ml-1"
                      ></v-progress-circular>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-card>
    </template>
    <v-row v-if="errorState != null">
      <ErrorDialog :title="errorState.title" :text="errorState.text">
      </ErrorDialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ApplicationController,
  ApplicationRecord
} from "@/api/applications/ApplicationController";
import { TagController, TagResult } from "@/api/applications/TagController";
import ErrorDialog from "./error/ErrorDialog.vue";

export default Vue.extend({
  name: "TagDashboard",

  props: ["value"],

  components: {
    ErrorDialog
  },

  data: () => ({
    singleSelect: false,
    selected: [],
    onGoingQueries: [] as number[],
    loadingApplication: true as boolean,
    loading: true as boolean,
    applicationName: "No application selected" as string,
    numberOfApplication: 0 as number,
    applicationList: [] as ApplicationRecord[],
    tagResultList: [] as TagResult[],
    errorState: null as unknown,
    headers: [
      {
        text: "Tag",
        align: "left",
        sortable: true,
        value: "tag"
      },
      { text: "Description", value: "description" },
      { text: "Number of Match", value: "numMatch" },
      { text: "Categories", value: "categories" },
      { text: "Use Case", value: "useCase" }
    ],
    search: ""
  }),

  created() {
    this.getTagResults();
  },

  methods: {
    getTagResults() {
      this.loading = true;
      console.log("Now launching req for app : " + this.value);
      TagController.getTagResults("Configuration_1", this.value)
        .then((res: TagResult[]) => {
          this.tagResultList = res.sort(this.sortByNumMAtch);

          this.loading = false;
          console.log(res);
          console.log(
            `${res.length} tags were loaded for application ${this.value}`
          );
        })
        .catch(err => {
          console.error("An error occurred while retrieving tags.", err);
        });
    },

    checkOnGoing(idTag: number) {
      return this.onGoingQueries.indexOf(idTag) != -1;
    },

    executeTag(idTag: number) {
      this.onGoingQueries.push(idTag);
      TagController.executeTag(this.value, idTag)
        .then((res: TagResult) => {
          console.log(res);
        })
        .catch(err => {
          console.error("Failed to execute the Tag request.", err);
        })
        .finally(() => {
          const index = this.onGoingQueries.indexOf(idTag);
          if (index > -1) {
            this.onGoingQueries.splice(index, 1);
          }
        });
    },

    convertBadgeToHTML(badgeValue: string): string {
      let categorieBadges = "";
      badgeValue.split(":").forEach(x => {
        categorieBadges += `<v-chip class="ma-2" color="primary">${x}</v-chip>`;
      });
      return categorieBadges;
    },

    sortByNumMAtch(a: TagResult, b: TagResult) {
      return b.numMatch - a.numMatch;
    }
  }
});
</script>
