import Vue from "vue/types/umd";

<template>
  <div class="main-application">
    <v-app>
      <v-navigation-drawer
        class="side-bar"
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
                <v-icon :color="tab === i ? '#ffffff' : '#a5a4a4'" class="pl-1"
                  >{{ v.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title
                :color="tab === i ? '#ffffff' : '#a5a4a4'"
                class="text-uppercase"
                >{{ v.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-list>
              <v-list-item @click="goTo('administration')">
                <v-list-item-icon>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Administration</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

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

              <v-list-item href="https://github.com/Makunda/Demeter/wiki" link>
                <v-list-item-icon>
                  <v-icon>mdi-information-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Documentation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="logout()">
                <v-list-item-icon>
                  <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
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
          <v-spacer></v-spacer>
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
        </v-toolbar>
      </v-row>
      <v-row no-gutters>

        <router-view v-slot="{ Component }" style="margin-left: 50px;">
          <transition name="fade" mode="out-in">
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

import { ApplicationController } from "@/api/applications/application.controller";

import { Configuration } from "../Configuration";
import { UtilsController } from "../api/utils/utils.controller";

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
        name: "Analysis Checker",
        screen: "analysis",
        icon: "mdi-file-cad"
      },
      {
        name: "Tags",
        screen: "tags",
        icon: "mdi-hexagon-multiple"
      },
      {
        name: "Automation",
        screen: "automation",
        icon: "mdi-robot-industrial"
      },
      {
        name: "Frameworks",
        screen: "frameworks",
        icon: "mdi-package-variant-closed"
      },
      { name: "Imaging tuning", screen: "tuning", icon: "mdi-merge" }
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

    goTo(section:string) {
      this.$router.replace("/atlas/" + section);
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
      const nameView = toSplit[toSplit.length-1];
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
      console.log(`Not found ${newView}`)
      // Do nothing if the view wasn't found
    }
  }
});
</script>

<style>
.screen-title {
  font-size: 40px;
  margin-top: 6px;
  font-weight: 400;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
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
