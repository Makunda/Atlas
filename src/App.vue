<template>
  <v-app>
    <v-row>
      <v-card>
        <v-navigation-drawer
          mini-variant-width="70px"
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
                  Demeter Extension
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
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
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
          </v-list>
        </v-navigation-drawer>
      </v-card>

      <v-main class="ml-15">
        <v-container>
          <component :is="currentComponent"></component>
        </v-container>
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
import Vue from "vue";
import MainDashboard from "./components/MainDashboard.vue";
import HelloWorld from "./components/HelloWorld.vue";
import InstallError from "./components/InstallError.vue";
import ApplicationDashboard from "./components/ApplicationDashboard.vue";
import TagDashboard from "./components/TagDashboard.vue";
import GroupingDashboard from "./components/GroupingDashboard.vue";

export default Vue.extend({
  name: "App",

  components: {
    MainDashboard,
    InstallError,
    HelloWorld,
    ApplicationDashboard,
    TagDashboard,
    GroupingDashboard
  },

  data: () => ({
    currentComponent: "MainDashboard",
    multiLine: true,
    snackbar: false
  }),

  methods: {
    switchToInstallError: function() {
      this.currentComponent = "InstallError";
    }
  }
});
</script>
