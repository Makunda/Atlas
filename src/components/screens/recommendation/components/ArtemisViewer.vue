<template>
  <v-card class="px-5 mb-5">
    <v-card-text>
      <v-row>
        <h5 class="text-h5 black--text">
          Automatic framework discovery
        </h5>
      </v-row>
      <v-row class="my-5">
        <p>
          The Artemis framework automatic detector analyzes your application and
          finds objects belonging to open-source components. It analyzes the
          most popular online repositories and Google, and thanks to its
          built-in automatic learning algorithm, it finds the best matches.
          <br />
          You can choose to activate or not these options. If no option is
          activated, the artemis framework will rely on it's own database.
        </p>
      </v-row>
      <v-row class="mt-5">
        <h3>Actions:</h3>
      </v-row>
      <v-row>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-switch
            class="mx-5"
            v-model="artemisOnlineOption"
            label="Online search"
            color="persianGrey"
            v-on="on"
            v-bind="attrs"
            hide-details
            ></v-switch>
          <span>Activate the crawling of Google to discover frameworks</span>
        </v-tooltip>
        
        <v-switch
          class="mx-5"
          v-model="artemisRepositoryOption"
          label="Repository search"
          color="persianGrey"
          hide-details
        ></v-switch>
        <v-switch
          class="mx-5"
          v-model="atemisInteractionOption"
          label="Interaction detection"
          color="persianGrey"
          hide-details
        ></v-switch>
      </v-row>
      <v-row class="mt-5">
        <v-btn
          :loading="runningArtemis"
          color="charcoal"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
        >
          Launch detection
          <v-icon right dark>
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn
          :disabled="!runningArtemis"
          color="brown"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
        >
          Stop detection
          <v-icon right dark>
            mdi-stop
          </v-icon>
        </v-btn>
      </v-row>
      <v-row class="my-5">
        <h3>Results:</h3>
      </v-row>
      <v-row class="mb-10" id="artemis-viewer"> </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ArtemisController } from "@/api/applications/ArtemisController";

export default Vue.extend({
  name: "ActionTileViewer",

  data: () => ({
    // Loadings
    loadingConfiguration: true as boolean,

    application: "" as string,

    onlineMode: true as boolean,
    repositoryMode: true as boolean,
    workspacePath: "" as string,
  }),

  methods: {
    /**
     * Get the configuration of Artemis
     */
    async getConfiguration() {
      this.loadingConfiguration = true;

      this.onlineMode = await ArtemisController.getOnlineMode();
      this.repositoryMode = await ArtemisController.getRepositoryMode();
      this.workspacePath = await ArtemisController.getWorkspace();

      this.loadingConfiguration = false;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getConfiguration();
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.getActionList();
    },
  },
});
</script>
