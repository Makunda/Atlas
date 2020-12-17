<template>
  <v-app>
    <v-row>
      <v-card>
        <v-navigation-drawer
          :mini-variant-width="columnWidth"
          permanent
          dark
          expand-on-hover
          fixed
        >
          <v-list class="mx-2">
            <v-list-item class="px-2">
              <v-list-item-avatar class="mx-auto">
                <v-img src="@/assets/logo.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content class="mx-auto">
                <v-list-item-title class="title">
                  Olympus
                </v-list-item-title>
                <v-list-item-subtitle
                  >Intelligence for CAST Imaging</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item link @click="currentComponent = 'MainDashboard'">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Main dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="currentComponent = 'GroupingDashboard'">
              <v-list-item-icon>
                <v-icon>mdi-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Grouping assistant</v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              @click="currentComponent = 'ApplicationDashboard'"
            >
              <v-list-item-icon>
                <v-icon>mdi-file</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Report generator</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="currentComponent = 'TagDashboard'">
              <v-list-item-icon>
                <v-icon>mdi-tag-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tag generator</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-target</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Artemis Detector</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>My Configurations</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-wrench</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Parameters</v-list-item-title>
            </v-list-item>
            <v-list-item link justify-end v-on:click="checkDatabase()">
              <v-list-item-icon>
                <v-icon color="green darken-2" v-if="dbAvailable">mdi-database-check</v-icon>
                <v-icon color="red darken-2" v-if="!dbAvailable">mdi-database-remove</v-icon>
              </v-list-item-icon>
              <v-list-item-title  v-if="dbAvailable" color="green darken-2">Database available</v-list-item-title>
              <v-list-item-title  v-if="!dbAvailable" color="red darken-2">Database unavailable</v-list-item-title>
            </v-list-item>
            
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-main class="ml-15">
        <v-row>
          <v-toolbar class="ml-8 text--white" dark color="grey darken-2">
            <v-toolbar-title class="ml-8">Application</v-toolbar-title>
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
        <v-row class="ml-6">
          <v-container class="mx-0">
            <component :is="items[tab].screen" v-model="applicationName"></component>
          </v-container>
        </v-row>
      </v-main>

      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        <v-alert dense elevation="7" type="error">
          Demeter is not installed on localhost. Please make sure the extension
          was insall ( more documentation on how to install demeter
          <a
            href="https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki"
            >here</a
          >)
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-alert>
      </v-snackbar>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue, { Component } from "vue";

import HelloWorld from "./components/HelloWorld.vue"
import MainApplication from "./screens/MainApplication.vue";
import TagApplication from "./screens/TagApplication.vue";
import TagDashboard from "./components/TagDashboard.vue";
import StatisticsDashboard from "./components/StatisticsDashboard.vue";

import {
  ApplicationController,
  ApplicationRecord
} from "./api/applications/ApplicationController";
import { Neo4JAccessLayer } from "./api/Neo4jAccessLayer";
import { ServerInfo } from "neo4j-driver";

export default Vue.extend({
  name: "App",

  components: {
    MainApplication,
    HelloWorld,
    TagApplication,
    TagDashboard,
    StatisticsDashboard
  },

  mounted() {
    this.getApplicationList();
    this.checkDatabase();
  },

  data: () => ({
    neo4jAccessLayer: Neo4JAccessLayer.getInstance() as Neo4JAccessLayer,
    dbAvailable: false,
    tab: 0 ,
    items: [
      { name: "Main", screen: "MainApplication" },
      { name: "Statistics", screen: "StatisticsDashboard" },
      { name: "Discovery", screen: "TagApplication" },
      { name: "Architecture", screen: "HelloWorld" },
      { name: "Grouping", screen: "HelloWorld" }
    ],

    loadingApplication: true as boolean,
    applicationName: "" as string,
    applicationList: [] as ApplicationRecord[],
    columnWidth: "70px",
    currentComponent: "MainDashboard",
    multiLine: true,
    snackbar: false
  }),

  methods: {
    switchToInstallError: function() {
      this.currentComponent = "InstallError";
    },

    checkDatabase: function() {
      this.neo4jAccessLayer.testConnection().then((info: ServerInfo)=> {
        this.dbAvailable = true;
      }).catch(err => {
        this.dbAvailable = false;
      })
    },

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

<style>
.floating-application {
  position: absolute;
  bottom: 10px;
  right: 40px;
}
</style>
