<template>
  <v-app class="main-application">
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
            <v-list-item
              v-for="v in views"
              v-bind:key="v.view"
              link
              @click="actualView = v.view"
            >
              <v-list-item-icon>
                <v-icon>{{ v.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ v.name }}</v-list-item-title>
            </v-list-item>

            <v-list-item link justify-end v-on:click="checkDatabase()">
              <v-list-item-icon>
                <v-icon color="green darken-2" v-if="dbAvailable"
                  >mdi-database-check</v-icon
                >
                <v-icon color="red darken-2" v-if="!dbAvailable"
                  >mdi-database-remove</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title v-if="dbAvailable" color="green darken-2"
                >Database available</v-list-item-title
              >
              <v-list-item-title v-if="!dbAvailable" color="red darken-2"
                >Database unavailable</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-main class="pl-15">
        <component :is="actualView"></component>
      </v-main>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import VueCookies from "vue-cookies";

import TagStudio from "@/views/TagStudio.vue";
import ConfigurationVue from "@/views/Configuration.vue";

import { UtilsController } from "./api/applications/UtilsController";
import { Neo4JAccessLayer } from "./api/Neo4jAccessLayer";
import { ServerInfo } from "neo4j-driver";
import { Configuration, Properties } from "./Configuration";

Vue.use(VueCookies);

export default Vue.extend({
  name: "App",

  components: {
    TagStudio,
    ConfigurationVue
  },

  mounted() {
    this.checkDemeter();
    this.checkDatabase();
    this.getProperties();
  },

  data: () => ({
    neo4jAccessLayer: Neo4JAccessLayer.getInstance() as Neo4JAccessLayer,
    properties: {} as Properties,
    // Connection test
    dbAvailable: false,
    demeterAvaible: true,
    demeterVersion: "No version",

    // Popups
    demeterErrorDialog: false,

    // Navigation
    actualView: "Applications" as string,
    columnWidth: "70px",
    views: [
      {
        name: "Applications",
        view: "Applications",
        icon: "mdi-view-dashboard"
      },
      { name: "Tag Studio", view: "TagStudio", icon: "mdi-tag-multiple" },
      {
        name: "My Configurations",
        view: "ConfigurationVue",
        icon: "mdi-folder"
      },
      { name: "Parameters", view: "Parameters", icon: "mdi-wrench" }
    ],
    multiLine: true,
    snackbar: false
  }),

  methods: {
    /**
     * Get pr
     */
    getProperties: function() {
      this.properties = Configuration.getProperties();
    },

    /**
     * Check the connectivity of the database
     */
    checkDatabase: function() {
      this.neo4jAccessLayer
        .testConnection()
        .then(() => {
          this.dbAvailable = true;
        })
        .catch(err => {
          this.dbAvailable = false;
        });
    },

    /**
     * Check the installation of the demeter extension
     */
    checkDemeter: function() {
      UtilsController.getDemeterVersion().then((version: string | null) => {
        if (version == null) {
          this.demeterAvaible = false;
          this.demeterErrorDialog = true;
        } else {
          console.log(`Version detected : ${version}`);
          this.demeterVersion = version || "hey";
          this.demeterAvaible = true;
        }
      });
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

.custom-container {
  min-width: 100% !important;
}

.main-application {
  position: relative;
}
</style>
