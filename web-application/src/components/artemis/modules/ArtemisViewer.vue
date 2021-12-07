<template>
  <v-card :disabled="disabledTile" class="px-5 mb-5 pt-4">
    <v-card-title>
      <p class="text-h3 text--primary">
        <span class="font-weight-light pr-1"
          >Automatic framework discovery on</span
        >
        {{ application }}
      </p>
      <v-chip
        v-if="analysisStatus"
        :color="analysisStatus == 'Analyzed' ? 'primary' : 'red'"
        class="ml-4 mb-4"
        dark
      >
        {{ analysisStatus }}
      </v-chip>
    </v-card-title>

    <v-card-subtitle class="text-subtitle-1">
      <v-chip-group active-class="primary--text" column>
        <v-chip v-for="tag in applicationsInsights.technologies" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
      <p>
        The <i>Artemis : automatic framework detector </i> your application and
        finds objects belonging to open-source components. It analyzes the most
        popular online repositories and Google, and thanks to its built-in
        automatic learning algorithm, it finds the best matches.
        <br />
        You can choose to activate or not these options. If no option is
        activated, the <i>Artemis : automatic framework detector </i> will rely
        on it's own database to discover frameworks.
      </p>
      <p>
        <b>
          <v-icon color="persianGrey">mdi-information</v-icon>
          The current workspace of the framework detector is located under : </b
        >{{ workspacePath }}
        <br />
        You can change the workspace in the Administration section
      </p>
      <p>
        <b>
          <v-icon color="persianGrey">mdi-information</v-icon>
          The current version of Artemis is : </b
        >{{ version }}
      </p>
    </v-card-subtitle>

    <v-card-text>
      <v-row class="mt-2 text-subtitle-1"></v-row>
      <v-row class="mt-3"></v-row>

      <v-row class="mt-5 mb-6 ml-1 mb-4">
        <h2>
          1 - Select one or more data sources for the framework detection:
        </h2>
      </v-row>
      <v-row class="d-flex flex-column ml-3">
        <!-- Selection of the detection mode -->
        <v-btn-toggle
          v-model="dataSources"
          :value="dataSources"
          class="my-3"
          multiple
        >
          <v-btn disabled value="local" x-large>
            <v-icon class="mr-2">mdi-database</v-icon>
            Local Database
          </v-btn>
          <v-btn value="pythia" x-large>
            <v-icon class="mr-2">mdi-cloud-search</v-icon>
            Pythia Repository
          </v-btn>
          <v-btn value="online" x-large>
            <v-icon class="mr-2">mdi-google</v-icon>
            Online Detection (Google)
          </v-btn>
          <v-btn value="repository" x-large>
            <v-icon class="mr-2">mdi-git</v-icon>
            Online repository (Maven, etc..)
          </v-btn>
        </v-btn-toggle>

        <!-- Display infos and activation status  -->
        <div class="d-flex flex-column mt-3 text-h6">
          <p class="ma-0">
            <v-icon class="mr-2 mb-1" color="green">mdi-check-circle</v-icon>
            <strong>Local Database</strong> : Use the results stored in the
            local Neo4j database (activated by default)
          </p>
          <p class="ma-0">
            <v-icon
              :color="dataSources.includes('pythia') ? 'green' : 'grey'"
              class="mr-2 mb-1"
              >{{
                dataSources.includes("pythia")
                  ? "mdi-check-circle"
                  : "mdi-close-circle"
              }}
            </v-icon>
            <strong>Pythia Repository</strong> : Query the NASD Pythia Framework
            repository to automatically flag known frameworks. Status of Pythia
            :
            <i>{{ pythiaStatus }}</i>
          </p>
          <p class="ma-0">
            <v-icon
              :color="dataSources.includes('online') ? 'green' : 'grey'"
              class="mr-2 mb-1"
              >{{
                dataSources.includes("online")
                  ? "mdi-check-circle"
                  : "mdi-close-circle"
              }}
            </v-icon>
            <strong>Online Search</strong> The framewok detection will parse
            Google, to discover frameworks. The frameworks detected are added to
            the configuration for future usages.
          </p>
          <p class="ma-0">
            <v-icon
              :color="dataSources.includes('repository') ? 'green' : 'grey'"
              class="mr-2 mb-1"
              >{{
                dataSources.includes("repository")
                  ? "mdi-check-circle"
                  : "mdi-close-circle"
              }}
            </v-icon>
            <strong>Online Repository search</strong> : Parse most populars
            repositories as Github, Maven, etc..
          </p>
          <p></p>
        </div>

        <!-- Diplay summary type of detection  -->
        <div>
          <h3>1 - Select the source of data for the framework exploration:</h3>
        </div>

        <!-- Language selection -->
        <v-row align="center" class="my-6 pa-0 ml-0">
          <v-col class="px-0" cols="12" md="4">
            <v-subheader class="px-0">
              <h2>2 - Pick a language for discovery :</h2>
            </v-subheader>
          </v-col>

          <v-col cols="12" md="4">
            <v-select
              v-model="selectedLanguage"
              :items="availableLanguages"
              label="Language"
              large
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>

        <!-- Review the parameters and launch -->
        <div class="mb-3">
          <h2>3 - Review the parameters:</h2>
        </div>
        <div class="text-h6  d-flex flex-row">
          <p class="mx-2"><strong>Application : </strong>{{ application }}</p>
          <p class="mx-2"><strong>Language : </strong>{{ selectedLanguage }}</p>
          <p class="mx-2">
            <strong>Data Sources: </strong>
            {{ "local database, " + dataSources.join(", ") }}
          </p>
        </div>
      </v-row>

      <v-row class="my-5">
        <v-btn
          :disabled="ongoingDetection != ''"
          :loading="runningArtemis"
          class="ma-2 white--text"
          color="charcoal"
          @click="launchDetection()"
        >
          Launch detection
          <v-icon dark right>
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn
          :disabled="!runningArtemis"
          class="ma-2 white--text"
          color="brown"
          @click="stopDetection()"
        >
          Stop detection
          <v-icon dark right>
            mdi-stop
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ma-2 white--text" color="brown" @click="checkStatus()">
          Reload status
          <v-icon dark right>
            mdi-reload
          </v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-alert
          v-if="ongoingDetection && ongoingDetection != ''"
          border="left"
          class="ma-2"
          dense
          type="info"
          width="100%"
        >
          <p>
            {{ ongoingDetection }} <strong class="mx-2">Time Elapsed</strong
            >{{ toDisplay }}
          </p>
        </v-alert>
        <v-alert
          v-if="errorDetection && errorDetection !== ''"
          border="left"
          class="ma-2"
          dense
          type="error"
          width="100%"
        >
          {{ errorDetection }}
        </v-alert>
        <v-alert
          v-if="message && message !== ''"
          border="left"
          class="ma-2"
          dense
          type="success"
          width="100%"
        >
          {{ message }}
        </v-alert>
      </v-row>
      <v-divider></v-divider>
      <v-card class="my-6">
        <v-card-title>
          Result of the detection:
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-card-title>
        <v-card-subtitle class="d-flex justify-end">
          <v-checkbox
            v-model="showOnlyFrameworks"
            label="Show only detected as Frameworks"
          ></v-checkbox>
        </v-card-subtitle>

        <v-data-table
          :headers="headers"
          :items="filteredFrameworks"
          :items-per-page="20"
          :loading="runningArtemis"
          :search="search"
          class="elevation-3"
          item-key="nema"
          style="width: 100%"
        >
        </v-data-table>
      </v-card>
    </v-card-text>
    <div v-if="diplayNotInstalled" id="NotInstalledArtemis">
      <h2 id="Message" class="ma-auto text--h2">
        The Artemis extension is not installed on this instance.<br />
        Please install the extension from
        <a
          href="https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0"
        >
          CAST Extend
        </a>
        <br />or verify that the Artemis workspace has been correctly declared
        in the parameters.
      </h2>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ArtemisController } from "@/api/controllers/extensions/artemis/ArtemisController";
import { AtlasController } from "@/api/controllers/extensions/atlas/AtlasController";

import DetectionController from "@/api/controllers/extensions/artemis/DetectionController";

import ConfigurationController from "@/api/controllers/configuration/ConfigurationController";
import { DetectionStatus } from "@/api/interface/extensions/artemis/detectionStatus.enum";
import { DetectionResult } from "@/api/interface/extensions/artemis/detectionResult.interface";
import { Framework } from "@/api/interface/extensions/artemis/Framework";
import { Cookie } from "@/enum/Cookie";
import PythiaController from "@/api/controllers/pythia/PythiaUtilController";
import { ApplicationInsights } from "@/api/interface/imaging/ApplicationInsights";
import ApplicationController from "@/api/controllers/imaging/ApplicationController";
import flash, { FlashType } from "@/modules/flash/Flash";

export default Vue.extend({
  name: "ActionTileViewer",

  computed: {
    filteredFrameworks() {
      if (this.showOnlyFrameworks) {
        return this.resultDetection.filter(d => {
          return d.type == "Framework";
        });
      } else {
        return this.resultDetection;
      }
    },

    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    // Result table
    // Application
    applicationsInsights: {} as ApplicationInsights,
    loadingApplication: false,
    analysisStatus: "",

    // Table
    headers: [
      {
        text: "Framework",
        align: "start",
        sortable: true,
        value: "name"
      },
      { text: "Description", value: "description" },
      { text: "Category", value: "category" },
      { text: "Detected as ", value: "type" }
    ],
    showOnlyFrameworks: true as boolean,

    disabledTile: false as boolean,
    version: "Unknown" as string,
    diplayNotInstalled: false as boolean,

    // Loadings
    loadingConfiguration: false as boolean,
    loadingOnlineMode: false as boolean,
    loadingRepositoryMode: false as boolean,
    runningArtemis: false as boolean,

    // Errors
    errorOnlineMode: false as boolean,
    errorRepositoryMode: false as boolean,
    errorDetection: "",

    // Message
    message: "",

    // Detection
    filterValidFramework: true,
    search: "",
    ongoingDetection: "",
    resultDetection: [] as Framework[],
    selectedLanguage: "",
    availableLanguages: [] as string[],
    checkingStatus: false,
    toDisplay: "",
    detection: null,

    application: "" as string,

    // Parameters
    dataSources: [] as string[],
    onlineMode: true as boolean,
    repositoryMode: true as boolean,
    workspacePath: "" as string,

    // Pythia
    pythiaStatus: "Unknown",
    pythiaLoadingStatus: false,

    // On destroy
    flaggedAsToDestroy: false
  }),

  methods: {
    /**
     * Get the configuration of Artemis
     */
    async getConfiguration() {
      this.loadingConfiguration = true;

      this.onlineMode = await ArtemisController.getOnlineMode();
      this.repositoryMode = await ArtemisController.getRepositoryMode();
      this.workspacePath = await ConfigurationController.getArtemisWorkspace();

      await ArtemisController.getSupportedLanguages()
        .then((res: string[]) => {
          this.availableLanguages = res;
          this.selectedLanguage = res[0];
        })
        .catch(err => {
          console.error("Failed to retrieve languages.", err);
        });

      this.loadingConfiguration = false;
    },

    milisecondsToDhms(miliseconds) {
      const seconds = Number(miliseconds / 1000);
      const d = Math.floor(seconds / (3600 * 24));
      const h = Math.floor((seconds % (3600 * 24)) / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);

      const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    },

    countDownTimer() {
      this.toDisplay = this.milisecondsToDhms(
        Date.now() - this.detection.timestampStart
      );
      setTimeout(this.countDownTimer, 1000);
    },

    /**
     *  Get the status of the Detection
     */
    checkStatus(): boolean {
      // Skip if already checking status or if no language was selected
      if (this.checkingStatus || this.selectedLanguage == null) return;
      if (this.application == "") return;

      this.checkingStatus = true;
      DetectionController.getApplicationStatus(
        this.application,
        this.selectedLanguage
      )
        .then((res: DetectionResult) => {
          // If res is null, the application has no status
          if (res == null) {
            this.analysisStatus = "No detection launched";
            this.message = `No detection was launched for ${this.application}`;
            this.ongoingDetection = "";
            this.errorDetection = "";
            return true;
          }

          this.detection = res;

          // If the detection is successfully launched, set a timeout and wait for the response
          switch (res.status) {
            case DetectionStatus.Pending:
              this.analysisStatus = "On-going detection";
              this.ongoingDetection = `On-going detection for the ${this.application} application.`;
              this.runningArtemis = true;
              this.errorDetection = "";
              this.countDownTimer();
              break;
            case DetectionStatus.Success:
              this.analysisStatus = "Analyzed";
              this.resultDetection = res.data;
              this.runningArtemis = false;
              this.errorDetection = "";
              this.ongoingDetection = "";
              break;
            case DetectionStatus.Failure:
              this.analysisStatus = "Detection failed";
              this.errorDetection =
                "An error occurred during the detection. Please check the logs";
              this.ongoingDetection = "";
              this.runningArtemis = false;
              break;

            default:
              break;
          }
        })
        .catch(err => {
          console.error(
            `Failed to retrieve the status of the application ${this.application}.`,
            err
          );
          this.errorDetection = `Failed to retrieve the status of the application ${this.application}.`;
          return true;
        })
        .finally(() => {
          this.checkingStatus = false;
        });
    },

    /**
     * Launch a detection for a specific application
     */
    launchDetection() {
      this.displayErrorDetection = false;
      DetectionController.launchDetection(
        this.application,
        this.selectedLanguage,
        this.dataSources
      )
        .then((res: boolean) => {
          // If the detection is successfully launched, set a timeout and wait for the response
          if (res) {
            this.runningArtemis = true;
          } else {
            throw new Error(
              "The server refused to launch the detection. Check the logs."
            );
          }
        })
        .catch(err => {
          console.error(
            `The analysis of the application ${this.application} failed to launch.`,
            err
          );
          this.errorDetection = err;
        });
    },

    /**
     * Stop the detection of an ongoing application
     */
    stopDetection() {
      this.displayErrorDetection = false;
      DetectionController.cancelDetection(
        this.application,
        this.selectedLanguage
      )
        .then((res: boolean) => {
          // If the detection is successfully launched, set a timeout and wait for the response
          if (res) {
            this.runningArtemis = false;
          } else {
            throw new Error(
              "The server refused to stopped the detection. Check the logs."
            );
          }
        })
        .catch(err => {
          console.error(`Failed to stop the on-going analysis.`, err);
          this.errorDetection = `Failed to stop the on-going analysis. Error : ${err}`;
        });
    },

    constantStatusCheck() {
      if (this.diplayNotInstalled) return;
      const stopFlag = this.checkStatus();

      if (stopFlag) return;
      if (this.flaggedAsToDestroy) return;
      setTimeout(this.constantStatusCheck, 5000);
    },

    cancelDetection() {
      // Todo
    },

    /**
     * Get the status of the pythia repository
     */
    async getPythiaStatus() {
      this.pythiaLoadingStatus = true;

      try {
        this.pythiaStatus = await PythiaController.getAuthenticationStatus();
      } catch (err) {
        this.pythiaStatus = "Unreachable";
      } finally {
        this.pythiaLoadingStatus = false;
      }
    },

    /**
     * Get insights for this applications
     */
    async getApplicationInsights() {
      try {
        this.loadingApplication = true;
        this.applicationsInsights = await ApplicationController.getApplicationInsights(
          this.application
        );
      } catch (error) {
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to get the application insights.",
          body: error
        });
      } finally {
        this.loadingApplication = false;
      }
    }
  },

  async mounted() {
    this.disabledTile = true;
    this.resultDetection = []; // Reinitialized the detection results

    // Check for preference cookies stored as a string
    if (Vue.$cookies.isKey(Cookie.DETECTION_PREFERENCES)) {
      const arrAsString = String(
        Vue.$cookies.get(Cookie.DETECTION_PREFERENCES)
      );
      this.dataSources = arrAsString.split(",");
      this.dataSources = this.dataSources.filter(x => x != "null");
    }

    // Get status
    this.getPythiaStatus();

    // Get the Artemis Version
    try {
      const version = await AtlasController.getArtemisVersion();
      this.version = version;
      this.disabledTile = false;
      this.application = this.$store.state.applicationName;
      await this.getConfiguration();
    } catch (e) {
      console.error(
        "The Artemis extension wasn't detected. The  function will be limited. Please install the Artemis extension",
        e
      );
      this.diplayNotInstalled = true;
    }

    await this.constantStatusCheck();
    await this.getApplicationInsights();
  },

  beforeDestroy() {
    this.flaggedAsToDestroy = true;
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.resultDetection = [];
      this.runningArtemis = false;
      this.getApplicationInsights();
      this.checkStatus();
    },

    dataSources: function() {
      // Save in cookies the selection to be reused
      Vue.$cookies.set(
        Cookie.DETECTION_PREFERENCES,
        this.dataSources.join(",")
      );
    }
  }
});
</script>

<style>
#NotInstalledArtemis {
  min-width: 100%;
  min-height: 100%;
  position: absolute;

  top: 0;
  right: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}

#NotInstalledArtemis #Message {
  display: block;
  color: white;
  text-align: center;
  position: absolute;

  top: 40%;
  right: 0;
  width: 100%;
}
</style>
