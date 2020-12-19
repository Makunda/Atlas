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

    <!-- Error popup Demeter -->
    <v-dialog
      v-model="demeterErrorDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Demeter not detected
        </v-card-title>

        <v-card-text class="my-3">
        Demeter is not installed on <i><b>http://localhost:port</b></i>.<br> Please make sure the extension
          is correclty installed and authorized in Neo4j configuration ( more documentation on how to install demeter
          <a
            href="https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki"
            >here</a
          >)

          <br> 
          Without the Demeter extension installed you'll not be able to use most of the functionnalities present in Olympus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="demeterErrorDialog = false"
          >
            I understand
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import Vue, { Component } from "vue";
import VueCookies from "vue-cookies";

import Applications from "@/views/Applications.vue";
import TagStudio from "@/views/TagStudio.vue";
import Parameters from "@/views/Parameters.vue";
import Configuration from "@/views/Configuration.vue";

import { UtilsController } from "./api/applications/UtilsController";
import { Neo4JAccessLayer } from "./api/Neo4jAccessLayer";
import { ServerInfo } from "neo4j-driver";

Vue.use(VueCookies);

export default Vue.extend({
  name: "App",

  components: {
    Applications,
    TagStudio,
    Configuration,
    Parameters
  },

  mounted() {
    this.checkDemeter();
    this.checkDatabase();
  },

  data: () => ({
    neo4jAccessLayer: Neo4JAccessLayer.getInstance() as Neo4JAccessLayer,

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
      { name: "My Configurations", view: "Configuration", icon: "mdi-folder" },
      { name: "Parameters", view: "Parameters", icon: "mdi-wrench" }
    ],
    multiLine: true,
    snackbar: false
  }),

  methods: {
    /**
     * Check the connectivity of the database
     */
    checkDatabase: function() {
      this.neo4jAccessLayer
        .testConnection()
        .then((info: ServerInfo) => {
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
      UtilsController.getDemeterVersion().then((version:string|null) => {
        if(version == null) { 
          this.demeterAvaible = false; 
          this.demeterErrorDialog = true;
        }
        else {
          console.log(`Version detected : ${version}`)
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
</style>
