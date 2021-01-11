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
          The <i>Artemis :  automatic framewok detector </i> your application and
          finds objects belonging to open-source components. It analyzes the
          most popular online repositories and Google, and thanks to its
          built-in automatic learning algorithm, it finds the best matches.
          <br />
          You can choose to activate or not these options. If no option is
          activated, the <i>Artemis :  automatic framewok detector </i> will rely on it's own database to discover frameworks.
        </p>
      </v-row>
      <v-row class="mt-5">
        <h3>Actions:</h3>
      </v-row>
      <v-row class="d-flex flex-column">
        <v-switch
          class="mx-5"
          v-model="onlineMode"
          label="Online search : The framewok detection will parse Google, to discover frameworks. The frameworks detected are added to the configuration for future usage."
          color="persianGrey"
          :loading="loadingConfiguration || loadingOnlineMode"
          :disabled="loadingOnlineMode"
          @click="setOnlineMode()"
          hide-details
        ></v-switch>
        <v-switch
          class="mx-5"
          v-model="repositoryMode"
          label="Repository search : Parse most populars repositories as Github, Maven, etc.. "
          color="persianGrey"
          :loading="loadingConfiguration || loadingRepositoryMode"
          :disabled="loadingRepositoryMode"
          @click="setRepositoryMode()"
          hide-details
        ></v-switch>
        <v-switch
          class="mx-5"
          label="Interaction detection : Discover your own internals frameworks by detecting the pieces of code used by multiple applications. (Coming soon)"
          color="persianGrey"
          hide-details
          disabled
        ></v-switch>
        <v-checkbox
         class="mx-5"
          label="Send the results of this detection by mail. (Configure mails addresses in the admistration panel) (Coming soon)"
          disabled
        ></v-checkbox>
      </v-row>
      <v-row class="mt-3">
        <p class="ml-5"><b ><i><v-icon color="persianGrey">mdi-information</v-icon> The current workspace of the framework detector is located under :  </i></b>{{ workspacePath }}
        <br>
        You can change the workspace in the Administration section
        </p>
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
import { ArtemisController, ArtemisFrameworkResult } from "@/api/applications/ArtemisController";

export default Vue.extend({
  name: "ActionTileViewer",

  data: () => ({
    // Loadings
    loadingConfiguration: false as boolean,
    loadingOnlineMode: false as boolean,
    loadingRepositoryMode: false as boolean,
    runningArtemis: false as boolean,

    // Errors
    errorOnlineMode: false as boolean,
    errorRepositoryMode: false as boolean,
    errorDetection: "",

    // Detection
    onGoingDetections: [] as string[],
    resultDetection: [],
    selectedLanguage: "",
    availableLanguages: [] as string[],
    

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

      this.availableLanguages = ArtemisController.getSupportedLanguages();

      this.loadingConfiguration = false;
    },

    /**
     *  Set a new mode for the online parameter
     */
    setOnlineMode() {
        this.loadingOnlineMode = true;
        ArtemisController.setOnlineMode(this.onlineMode).then((res:boolean) => {
            this.onlineMode = res;
        }).catch(err => {
            this.errorOnlineMode = true;
            console.error("Failed to change online mode of Artemis Framework detector.", err)
        }).then(() => {
            this.loadingOnlineMode = false;
        })
    },

    /** 
     * Change the mode of the repository 
    */
    setRepositoryMode() {
        this.loadingOnlineMode = true;
        ArtemisController.setRepositoryMode(this.repositoryMode).then((res:boolean) => {
            this.repositoryMode = res;
        }).catch(err => {
            this.errorRepositoryMode = true;
        }).then(() => {
            this.loadingOnlineMode = false;
        })
    },

    launchDetection() {
        // If the detection was previously launched, do nothing
        if( this.onGoingDetections.indexOf(this.application) != -1 ) return;
        this.onGoingDetections.push(this.application);

        ArtemisController.launchDetection(this.application, this.selectedLanguage).then((res:ArtemisFrameworkResult[]) => {
            console.log(`${res.length} frameworks were detected during the operation.`)
        }).catch(err => {
            console.error(`The analysis of the application ${this.application} failed.`, err);
            this.errorDetection = err;
        }).finally(() => {
            const index = this.onGoingDetections.indexOf(this.application);
            this.onGoingDetections.slice(index, 1);
        })

    }


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
