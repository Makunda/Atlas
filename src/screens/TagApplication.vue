<template>
  <v-card class="ml-8" width="100%">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Applicable tags</v-toolbar-title>
    </v-toolbar>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
            v-model="tree"
            :items="usecases"
            selected-color="indigo"
            open-on-click
            selectable
            return-object
            expand-icon="mdi-chevron-down"
            on-icon="mdi-bookmark"
            off-icon="mdi-bookmark-outline"
            indeterminate-icon="mdi-bookmark-minus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col
        cols="12"
        md="6"
      >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="title font-weight-light grey--text pa-4 text-center"
          >
            Select the tags you want to apply
          </div>

          <v-scroll-x-transition
            group
            hide-on-leave
          >
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="grey"
              dark
              small
              class="ma-1"
            >
              <v-icon
                left
                small
              >
                mdi-label
              </v-icon>
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
        </v-card-text>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        text
        @click="tree = []"
      >
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        class="white--text"
        color="green darken-1"
        depressed
      >
        Execute
        <v-icon right>
          mdi-animation-play
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script lang="ts">
import Vue from "vue";
import {
  ApplicationController,
  ApplicationRecord
} from "@/api/applications/ApplicationController";
import {
  UseCaseController,
  UseCaseResult
} from "@/api/applications/UseCaseController";
import { TagController, TagResult } from "@/api/applications/TagController";

export default Vue.extend({
  name: "TagApplication",

  props: ["value"],

  components: {
  },

  data: () => ({
    tree: [],
    usecases: [] as UseCaseResult[],
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
    this.getTreeview();
  },

  methods: {
    getTreeview() {
        UseCaseController.getUseCaseAsTree(this.value).then((useCases) => {
            this.usecases = useCases;
        });
    },
    
    getTagResults() {
      this.loading = true;
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
