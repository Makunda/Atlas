<template>
  <v-card class="ml-8" min-width="100%" flui>
    <v-toolbar color="indigo" dark flat>
      <v-toolbar-title>Applicable tags</v-toolbar-title>
    </v-toolbar>

    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        label="Search for Tags"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
    </v-sheet>


    <v-row no-gutters>
      <v-col max-width="400px">
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
            <template slot="label" slot-scope="{ item }">
              <p v-if="item.children" >{{ item.name }}</p>
              <a v-if="!item.children  && item.numMatch!=0" v-on:click="openDescription(item)">{{ item.name }}</a>
              <a v-if="!item.children && item.numMatch==0" class="text--secondary" v-on:click="openDescription(item)">{{ item.name }}</a>
          </template>
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col >
        <v-card-text>
          <h5 class="text-h5"> Focused tag </h5>
          <h6 v-if="focusedTag == null" class="text-subtitle-1"> No tag selected </h6>
          <span v-if="focusedTag != null">
            <h6  class="text-subtitle-1 text-decoration-underline"> Name: </h6>
            <h6  class="text-body-1"> {{ focusedTag.name }} </h6>
            <h6  class="text-subtitle-1 text-decoration-underline"> Description: </h6>
            <h6  class="text-body-1"> {{ focusedTag.description }} </h6>
            <h6  class="text-subtitle-1 text-decoration-underline"> Number of objects concerned: </h6>
            <h6  class="text-body-1"> {{ focusedTag.numMatch }} </h6>
            <h6  class="text-subtitle-1 text-decoration-underline"> Categories: </h6>
            <v-row>
              <v-chip v-for="b in splitCategories(focusedTag.categories)" v-bind:key="b" class="ma-2" color="primary">{{b}}</v-chip>
            </v-row>
          </span>
        </v-card-text>
      </v-col>


      <v-divider vertical></v-divider>

      <v-col >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="title font-weight-light grey--text pa-4 text-center"
          >
            Select the tags you want to apply
          </div>

          <v-scroll-x-transition group hide-on-leave>
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="grey"
              dark
              small
              class="ma-1"
            >
              <v-icon left small>
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
      <v-btn text @click="tree = []">
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="white--text" color="green darken-1" depressed>
        Execute {{ tree.length }}
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

  components: {},

  data: () => ({
    tree: [],
    usecases: [] as (UseCaseResult|TagResult)[],
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
    search: "",
    focusedTag: null,

    openDescription(item: TagResult) {
      console.log("focus on : ", item);
      this.focusedTag=item
    },

    splitCategories(cat:string):string[] {
      return cat.split(":");
    }

  }),

  created() {
    this.getTagResults();
    this.getTreeview();
  },

  methods: {
    getTreeview() {
      UseCaseController.getUseCaseAsTree(this.value).then(useCases => {
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
