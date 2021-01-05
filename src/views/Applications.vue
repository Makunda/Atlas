import Vue from "vue/types/umd";

<template>
  <v-main>
    <v-row>
      <v-toolbar class="ml-8 text--white" dark color="charcoal">
        <v-toolbar-title class="ml-8">Application insights </v-toolbar-title>
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
              <v-icon class="mr-2" v-if="item.icon">{{ item.icon }}</v-icon>
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-row>
    <v-row no-gutters>
      <v-container class="mx-0 pl-10 custom-container" max-width="100%">
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

import Administration from "@/components/screens/administration/Administration.vue";
import MainApplication from "@/components/screens/main/MainApplication.vue";
import Modernization from "@/components/screens/modernization/Modernization.vue";
import GroupingApplication from "@/components/screens/grouping/GroupingApplication.vue";

export default Vue.extend({
  name: "Applications",

  components: {
    MainApplication,
    Administration,
    Modernization,
    GroupingApplication
  },

  mounted() {
    this.getApplicationList();
  },

  data: () => ({
    tab: 0,
    items: [
      { name: "Enhancement", screen: "MainApplication", icon: "mdi-book-open-variant" },
      { name: "Grouping", screen: "GroupingApplication", icon: "mdi-ungroup" },
      { name: "Administration", screen: "Administration", icon: "mdi-cog" },
      { name: "Modernization", screen: "Modernization", icon: "mdi-pickaxe" },
    ],

    loadingApplication: true as boolean,
    applicationName: "" as string,
    applicationList: [] as ApplicationRecord[]
  }),

  methods: {
    /** Change the state of the application **/
    changeApplication(application:string) {
      this.applicationName = application;
      // Update store properties 
      this.$store.state.applicationName = application;
      console.log("New sate of store ", this.$store.state);
      
    },

    getApplicationList() {
      this.loadingApplication = true;
      ApplicationController.getSortedApplications().then(
        (res: ApplicationRecord[]) => {
          this.applicationList = res;
          if (res.length != 0) {
            this.changeApplication(res[0].name)
          } else {
            this.applicationName = "No Application found";
          }

          this.loadingApplication = false;
        }
      );
    }
  },

  watch: {
    applicationName : function() {
      this.changeApplication(this.applicationName);
    }
  }
  
});
</script>
