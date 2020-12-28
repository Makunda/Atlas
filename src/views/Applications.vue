import Vue from "vue/types/umd";

<template>
  <v-main>
    <v-row>
      <v-toolbar class="ml-8 text--white" dark color="grey darken-2">
        <v-toolbar-title class="ml-8">Application insights</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-autocomplete
          v-model="applicationName"
          :loading="loadingApplication"
          :items="applicationList"
          item-text="name"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="Pick an application"
          solo-inverted
        ></v-autocomplete>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with-title>
            <v-tab v-for="item in items" :key="item.name">
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-row>
    <v-row no-gutters>
      <v-container class="mx-0 pr-16 custom-container" max-width="100%">
        <component
          :is="items[tab].screen"
          v-model="applicationName"
        ></component>
      </v-container>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";

import {
  ApplicationController,
  ApplicationRecord
} from "@/api/applications/ApplicationController";

import HelloWorld from "@/components/HelloWorld.vue";
import MainApplication from "@/components/screens/MainApplication.vue";
import TagApplication from "@/components/screens/TagApplication.vue";
import TagDashboard from "@/components/TagDashboard.vue";
import StatisticsApplication from "@/components/screens/StatisticsApplication.vue";

export default Vue.extend({
  name: "Applications",

  components: {
    MainApplication,
    HelloWorld,
    TagApplication,
    TagDashboard,
    StatisticsApplication
  },

  mounted() {
    this.getApplicationList();
  },

  data: () => ({
    tab: 0,
    items: [
      { name: "Main", screen: "MainApplication" },
      { name: "Statistics", screen: "StatisticsApplication" },
      { name: "Discovery", screen: "TagApplication" },
      { name: "Architecture", screen: "HelloWorld" },
      { name: "Grouping", screen: "HelloWorld" }
    ],

    loadingApplication: true as boolean,
    applicationName: "" as string,
    applicationList: [] as ApplicationRecord[]
  }),

  methods: {
    getApplicationList() {
      this.loadingApplication = true;
      ApplicationController.getSortedApplications().then(
        (res: ApplicationRecord[]) => {
          this.applicationList = res;
          if (res.length != 0) {
            this.applicationName = res[0].name;
          } else {
            this.applicationName = "No Application found";
          }

          this.loadingApplication = false;
        }
      );
    }
  }
});
</script>
