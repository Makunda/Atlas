<template>
  <v-card min-height="300px" class="pa-3">
    <v-card-title>
      <v-row class="d-flex flex-column">
        <h3 class="text-h4 black--text mx-4 mb-4 my-3">
          Agents
        </h3>
        <p class="ml-4 text-body-1">
          Industrialize the grouping of tags. When actives, the agents will
          automatically merge the objects in CAST Imaging.
        </p>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row>
        <!-- Level 5 assistant col -->
        <v-col cols="4" md="4" sm="12">
          <v-card height="100%">
            <v-card-title> Level 5 Agent</v-card-title>
            <v-card-text class="mb-6">
              <p>{{ countLevels }} Levels 5 to group</p>
              <p v-if="countLevels == 0">
                No Level tags were found in your application <br />See how to
                create tags on the
                <a
                  href="https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki"
                  >Demeter Wiki</a
                >
              </p>
              <p v-if="countLevels != 0">Will create groups :</p>
              <v-row countLevels="text--primary">
                <v-chip
                  v-for="group in groupToList(levelTags)"
                  :key="group"
                  class="ma-2"
                  color="secondary"
                >
                  {{ group }}
                </v-chip>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="mx-2"
                tile
                color="success"
                v-on:click="groupApplication(application)"
                :disabled="countLevels == 0"
              >
                <v-icon left>
                  mdi-adjust
                </v-icon>
                Group Levels
              </v-btn>
              <v-btn
                tile
                class="ml-2 mr-8 white--text"
                :color="daemonLevelState ? '#2a9d8f' : '#f4a261'"
                v-on:click="toggleLevelDaemon()"
              >
                <v-icon left>
                  mdi-image-auto-adjust
                </v-icon>
                Assistant {{ daemonLevelState ? "active" : "stopped" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Module assistant col -->
        <v-col cols="4" md="4" sm="12">
          <v-card height="100%">
            <v-card-title> Module Agent</v-card-title>
            <v-card-text class="mb-6">
              <p>{{ countModule }} Modules to group</p>
              <p v-if="countModule == 0">
                No Module tags were found in your application <br />See how to
                create tags on the
                <a
                  href="https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki"
                  >Demeter Wiki</a
                >
              </p>
              <p v-if="countModule != 0">Will create groups :</p>
              <v-row class="text--primary">
                <v-chip
                  v-for="group in groupToList(tags)"
                  :key="group"
                  class="ma-2"
                  color="secondary"
                >
                  {{ group }}
                </v-chip>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="mx-2"
                tile
                color="success"
                v-on:click="groupApplication(application)"
                :disabled="countModule == 0"
              >
                <v-icon left>
                  mdi-adjust
                </v-icon>
                Group Modules
              </v-btn>
              <v-btn
                tile
                class="ml-2 mr-8 white--text"
                :color="daemonModuleState ? '#2a9d8f' : '#f4a261'"
                v-on:click="toggleModuleDaemon()"
              >
                <v-icon left>
                  mdi-image-auto-adjust
                </v-icon>
                Assistant {{ daemonModuleState ? "active" : "stopped" }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <ArchitectureAgent></ArchitectureAgent>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <ViewAgent></ViewAgent>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <FrameworkAgent></FrameworkAgent>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { GroupingController } from "@/api/demeter/grouping.controller";
import FrameworkAgent from "@/components/agents/FrameworkAgent.vue";
import ViewAgent from "@/components/agents/ViewAgent.vue";
import ArchitectureAgent from "@/components/agents/ArchitectureAgent.vue";

import Vue from "vue";

export default Vue.component("GroupingTile", {

  components: {
    FrameworkAgent,
    ViewAgent,
    ArchitectureAgent
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.daemonLevelState = this.$store.state.daemonLevelState;
    this.daemonModuleState = this.$store.state.daemonModuleState;
  },

  data: () => ({
    application: "",
    levelTags: [] as string[],
    moduleTags: [] as string[],

    countLevels: 0,
    countModule: 0,

    loading: false,

    daemonLevelState: true,
    daemonModuleState: true
  }),

  methods: {
    toggleLevelDaemon() {
      this.daemonLevelState = this.$store.state.daemonLevelState = !this.$store
        .state.daemonLevelState;
      console.log(
        "New Level Daemon state is ",
        this.$store.state.daemonLevelState
      );
    },

    toggleModuleDaemon() {
      this.daemonModuleState = this.$store.state.daemonModuleState = !this
        .$store.state.daemonModuleState;
      console.log(
        "New Module Daemon state is ",
        this.$store.state.daemonModuleState
      );
    },

    toggleViewDaemon() {
      console.log("Not implemented yet !");
    },

    groupApplication(appName: string) {
      GroupingController.executeGrouping(appName).then(() => {
        console.log(`Application ${appName} was sucessfully grouped !`);
      });
    },

    groupToList(groups: string[]) {
      if (groups == null) return "";

      const uniqueNames = [] as string[];
      groups.forEach(x => {
        const groupName: string = x.substring(6);
        if (uniqueNames.indexOf(groupName) == -1) uniqueNames.push(groupName);
      });
      return uniqueNames;
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>
