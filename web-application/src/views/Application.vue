import Vue from "vue/types/umd";

<template>
  <div class="main-application">
    <v-app>
      <v-navigation-drawer
        class="side-bar"
        color="deepblue"
        dark
        expand-on-hover
        fixed
        permanent
        shaped
      >
        <v-list>
          <v-list-item class="ml-1" link>
            <v-list-item-content class="mx-auto">
              <v-list-item-title class="title">
                <v-icon class="mr-2" color="#438FDA">mdi-globe-model</v-icon>
                Atlas
              </v-list-item-title>
              <v-list-item-subtitle
                >Intelligence for CAST Imaging
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item-group
            v-model="tab"
            active-class="activeNavigationElement"
            mandatory
          >
            <v-list-item v-for="(v, i) in items" v-bind:key="i" link>
              <v-list-item-icon>
                <v-icon color="#ffffff" class="pl-1">{{ v.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title color="#ffffff" class="text-uppercase"
                >{{ v.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-list>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item
                    v-bind="attrs"
                    v-on="on && !onlineDatabase"
                    link
                    @click="simpleHealthCheck()"
                  >
                    <v-list-item-icon>
                      <v-icon v-if="onlineDatabase" color="green"
                        >mdi-database-check
                      </v-icon>
                      <v-icon v-if="!onlineDatabase" color="red"
                        >mdi-database-remove
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title
                        >Database
                        {{ onlineDatabase ? "online" : "offline" }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <span>Lost connection to the database</span>
              </v-tooltip>
            </v-list>
          </div>
        </template>
      </v-navigation-drawer>
      <v-row style="max-height: 80px">
        <v-toolbar
          class="ml-15 text--white top-toolbar"
          color="charcoal"
          dark
          height="80px"
          min-width="50px"
        >
          <v-toolbar-title class="ml-8 screen-title"> </v-toolbar-title>
          <v-toolbar-title class="mt-2"
            >Application selection :</v-toolbar-title
          >
          <v-autocomplete
            v-model="applicationName"
            :items="applicationList"
            :loading="loadingApplication"
            cache-items
            class="mx-4 mt-2"
            flat
            hide-details
            hide-no-data
            label="Pick an application"
            solo-inverted
          ></v-autocomplete>

          <v-spacer></v-spacer>

          <!--  Panel Adminitration / Logout    -->
          <span class="mt-2 d-flex flex-row">
            <v-btn text @click="goTo('administration', true)">
              <p class="lighten-3 mr-2 pt-4">Administration</p>
              <v-icon>mdi-text</v-icon>
            </v-btn>
            <v-divider class="mx-2" dark vertical></v-divider>
            <v-btn text @click="logout()">
              <p class="lighten-3 mr-2 pt-4">Logout</p>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </span>
        </v-toolbar>
      </v-row>
      <v-row no-gutters>
        <router-view v-slot="{ Component }" style="margin-left: 50px;">
          <transition name="slide-fade">
            <component class="" :is="Component" />
          </transition>
        </router-view>

        <!--      <component-->
        <!--          :is="currentScreen"-->
        <!--          v-model="applicationName"-->
        <!--          class="custom-container"-->
        <!--      ></component>-->
      </v-row>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { ApplicationController } from "@/api/applications/ApplicationController";

import { Configuration } from "@/Configuration";
import { UtilsController } from "@/api/utils/utils.controller";

export default Vue.extend({
  name: "Application",

  mounted() {
    this.getApplicationList();
    this.healthcheck();
  },

  computed: {
    getCurrentView() {
      return this.$store.state.currentView;
    }
  },

  data: () => ({
    tab: 0,
    currentScreen: "Reporting",

    items: [
      { name: "Home", screen: "", icon: "mdi-home" },
      { name: "Reporting", screen: "reports", icon: "mdi-file" },
      {
        name: "Frameworks & Breakdown",
        screen: "analysis",
        icon: "mdi-magnify"
      },
      {
        name: "Tags",
        screen: "tags",
        icon: "mdi-hexagon-multiple"
      },
      { name: "Imaging tuning", screen: "tuning", icon: "mdi-graphql" }
    ],

    loadingApplication: true as boolean,
    applicationName: "" as string,
    applicationList: [] as string[],

    onlineDatabase: false
  }),

  methods: {
    /** Change the state of the application **/
    changeApplication(application: string) {
      this.applicationName = application;
      // Update store properties
      this.$store.state.applicationName = application;
    },

    getApplicationList() {
      this.loadingApplication = true;
      ApplicationController.getListApplications().then((res: string[]) => {
        this.applicationList = res;
        if (res.length != 0) {
          this.changeApplication(res[0]);
        } else {
          this.applicationName = "No Application found";
        }

        this.loadingApplication = false;
      });
    },

    simpleHealthCheck() {
      UtilsController.healthCheck()
        .then((res: boolean) => {
          this.onlineDatabase = res;
        })
        .catch(err => {
          this.onlineDatabase = false;
        });
    },

    healthcheck() {
      UtilsController.healthCheck()
        .then((res: boolean) => {
          this.onlineDatabase = res;
        })
        .catch(err => {
          this.onlineDatabase = false;
        })
        .finally(() => {
          setTimeout(
            function() {
              this.healthcheck();
            }.bind(this),
            10000
          );
        });
    },

    goTo(section: string, absolute = false) {
      if (!absolute) {
        this.$router.replace("/atlas/" + section);
      } else {
        this.$router.replace("/" + section);
      }
    },

    changeView(view: string) {
      this.$store.state.currentView = view;
      this.currentScreen = view;
    },

    updateViewTab(newView) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].screen === newView) {
          // Found a view with a matching name
          this.tab = i;
        }
      }

      // Do nothing if the view wasn't found
    },

    logout() {
      Configuration.deleteProperties();
      document.location.reload();
    }
  },

  watch: {
    $route(to, from) {
      const toSplit: string[] = to.path.split("/");
      const nameView = toSplit[toSplit.length - 1];
      this.updateViewTab(nameView);

      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },

    applicationName: function() {
      this.changeApplication(this.applicationName);
    },

    tab: function() {
      this.$router.replace("/atlas/" + this.items[this.tab].screen);
    },

    getCurrentView(newView) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].screen === newView) {
          // Found a view with a matching name
          this.tab = i;
        }
      }
      console.log(`Not found ${newView}`);
      // Do nothing if the view wasn't found
    }
  }
});
</script>

<style lang="sass">
@import '../../node_modules/typeface-roboto/index.css'
</style>

<style scoped>
.screen-title {
  font-size: 40px;
  margin-top: 6px;
  font-weight: 400;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.side-bar {
  min-width: 64px;
}

.custom-container {
  margin-top: 10px;
  min-width: 100% !important;
  padding: 0px !important;
  padding-left: 75px !important;
  max-width: 100% !important;
}

.main-application {
  position: relative;
}

.top-toolbar {
  min-height: 64px;
}

.activeNavigationElement {
  border-left: 3px solid white;
}
</style>
