import Vue from "vue/types/umd";

<template>
  <v-app class="main-application">
    <v-row>
      <v-navigation-drawer
        shaped
        class="side-bar"
        :mini-variant-width="columnWidth"
        permanent
        dark
        expand-on-hover
        fixed
      >
        <v-list>
          <v-list-item class="ml-1" link>
            
              <v-list-item-content class="mx-auto">
                <v-list-item-title class="title">
                  <v-icon color="green" class="mr-2">mdi-leaf</v-icon>
                  Demeter Web
                </v-list-item-title>
                <v-list-item-subtitle
                  >Intelligence for CAST Imaging</v-list-item-subtitle
                >
              </v-list-item-content>
            
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item-group
              v-model="tab"
              mandatory
              active-class="activeNavigationElement"
            >
          <v-list-item
            v-for="(v, i) in items"
            v-bind:key="i"
            link
          >
            <v-list-item-icon>
              <v-icon class="pl-1" :color="tab == i ? '#ffffff' : '#a5a4a4'">{{
                v.icon
              }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title :color="tab == i ? '#ffffff' : '#a5a4a4'" class="text-uppercase">{{
              v.name
            }}</v-list-item-title>
          </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar
        class="ml-15 text--white"
        dark
        color="charcoal"
        min-width="50px"
      >
        <v-toolbar-title class="ml-8">{{ items[tab].name }} </v-toolbar-title>
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

        
      </v-toolbar>
    </v-row>
    <v-row no-gutters>
        <component class="custom-container"
          :is="items[tab].screen"
          v-model="applicationName"
        ></component>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import {
  ApplicationController,
  ApplicationRecord,
} from "@/api/applications/ApplicationController";

import Administration from "@/components/screens/administration/Administration.vue";
import MainApplication from "@/components/screens/main/MainApplication.vue";
import Recommendation from "@/components/screens/recommendation/Recommendation.vue";

export default Vue.extend({
  name: "Application",

  components: {
    MainApplication,
    Administration,
    Recommendation,
  },

  mounted() {
    this.getApplicationList();
  },

  computed: {
    getCurrentView() {
      return this.$store.state.currentView;
    },
  },

  data: () => ({
    tab: 0,
    items: [
      {
        name: "Enrichment",
        screen: "MainApplication",
        icon: "mdi-book-open-variant",
      },
      { name: "Recommendations", screen: "Recommendation", icon: "mdi-pickaxe" },
      { name: "Administration", screen: "Administration", icon: "mdi-cog" },
    ],

    loadingApplication: true as boolean,
    applicationName: "" as string,
    applicationList: [] as ApplicationRecord[],
  }),

  methods: {
    /** Change the state of the application **/
    changeApplication(application: string) {
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
            this.changeApplication(res[0].name);
          } else {
            this.applicationName = "No Application found";
          }

          this.loadingApplication = false;
        }
      );
    },
  },

  watch: {
    applicationName: function() {
      this.changeApplication(this.applicationName);
    },

    tab: function() {
      this.$store.state.currentView = this.items[this.tab].name;
    },

    getCurrentView(newView, oldView) {
      console.log("New view is ", newView);
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === newView) {
          // Found a view with a matching name
          this.tab = i;
        }
      }

      // Do nothing it the view wasn't found
    },
  },
});
</script>

<style>
.floating-application {
  position: absolute;
  bottom: 10px;
  right: 40px;
}

.side-bar {
  min-width: 64px;
}

.custom-container {
  min-width: 100% !important;
  padding: 0px !important;
  padding-left: 75px !important;
  max-width: 100% !important;
}

.main-application {
  position: relative;
}

.activeNavigationElement {
  border-left: 3px solid white;
}
</style>
