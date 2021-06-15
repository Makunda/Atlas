<template>
  <!-- BREAKDOWN SECTION -->
  <v-card class="ma-2" width="100%">
    <v-card-title>
      <h3 class="text-h4 mb-4">Review the breakdown of the {{ application }} application</h3><br>
      <v-spacer></v-spacer>
      <v-btn icon large color="green" class="px-4" @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      <v-icon color="red">mdi-message-alert-outline</v-icon> Make sure the agent
      are running if you planned to extract the artifacts from the breakdown.
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <h3 class="mx-4 mb-6">
            Quick application overview :
          </h3>
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of levels: </v-col>
          <v-col cols="12" md="8"
            ><strong>{{ insights.levels5.length || 0 }}</strong></v-col
          >
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of modules: </v-col>
          <v-col cols="12" md="8"
            ><strong>{{ insights.modules.length || 0 }}</strong></v-col
          >
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of architectures: </v-col>
          <v-col cols="12" md="8"
            ><strong>{{ insights.architectures.length || 0 }}</strong></v-col
          >
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4"
            >Supported technologies for the breakdown:
          </v-col>
          <v-col cols="12" md="8"
            ><strong>{{ insights.technologies || "None" }}</strong></v-col
          >
        </v-row>

        <v-row class="mt-6">
          <h3 class="mx-4 mb-6">
            Select the type of modification (Selected: {{ selectedTarget }}):
          </h3>
        </v-row>
        <v-row class="mx-4 mb-6">
          <v-btn
            class="mx-2"
            v-for="target in targetList"
            v-bind:key="target.value"
            @click="selectedTarget = target.value"
            :color="selectedTarget !== target.value ? 'grey' : 'persianGrey'"
            dark
          >
            {{ target.text }}
          </v-btn>
        </v-row>

        <v-row>
          <h3 class="mx-4 mb-2">
            Select the externality: {{ classExternality }}
          </h3>
        </v-row>
        <v-row class="mx-4 mb-2">
          <v-switch
            v-model="classExternality"
            :label="classExternality ? 'External class' : 'Internal classes'"
            color="primary"
          ></v-switch>
        </v-row>

        <v-row>
          <h3 class="mx-4 mb-2 mt-3">Select the language:</h3>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row class="pa-4">
              <v-select
                class="mx-2"
                v-model="defaultLanguage"
                :items="languageItems"
                label="Language"
                @change="getArtifactTree()"
                outlined
              ></v-select>
            </v-row>

            <v-row>
              <h3 class="mx-4 mb-2">Select the rules to export:</h3>
            </v-row>
            <v-row class="mb-4">
              <v-progress-circular
                class="ma-12"
                v-if="loadingArtifacts"
                :size="50"
                :width="7"
                color="persianGrey"
                indeterminate
              ></v-progress-circular>

              <v-treeview
                v-if="!loadingArtifacts"
                selectable
                v-model="artifactTree"
                :items="artifactItems"
                selection-type="independent"
                return-object
              >
                <template v-slot:label="{ item }">
                  <v-container>
                    <v-row>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <p
                            class="my-2"
                            style="word-break: break-word"
                            v-on="on"
                            v-bind="attrs"
                          >
                            <strong>{{ item.customName || item.name }} </strong>
                            <i class="text--persianGrey"
                              >( items count : {{ item.count }})</i
                            >
                            <br />
                          </p>
                        </template>
                        <span>Full name: {{ item.fullName }}</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-if="isDisplayedProperty('level')"
                            class="mx-1"
                            color="blue"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-alpha-l-circle
                          </v-icon>
                        </template>
                        <span>In levels : {{ item.levels }}</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-if="isDisplayedProperty('module')"
                            class="mx-1"
                            color="red"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-alpha-m-circle
                          </v-icon>
                        </template>
                        <span>In modules : {{ item.modules }}</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-if="isDisplayedProperty('architecture')"
                            class="mx-1"
                            color="persianGrey"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-alpha-s-circle
                          </v-icon>
                        </template>
                        <span>In subsets : {{ item.subsets }}</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            class="mx-1"
                            color="orange"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-alpha-i-circle
                          </v-icon>
                        </template>
                        <span>Object types : {{ item.objectTypes }}</span>
                      </v-tooltip>

                      <v-text-field
                        class="mx-1"
                        v-model="item.customName"
                        v-if="item === editItem"
                        dense
                        label="Custom Name"
                      ></v-text-field>
                      <v-icon
                        v-if="item !== editItem"
                        small
                        @click="editArtifact(item)"
                        class="ma-2"
                        >mdi-pencil</v-icon
                      >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            @click="selectFramework(item)"
                            class="ma-2"
                            v-bind="attrs"
                            v-on="on"
                            >mdi-keyboard-caps</v-icon
                          >
                        </template>
                        <span>Extract as a Framework</span>
                      </v-tooltip>

                      <v-icon
                        v-if="item === editItem"
                        small
                        @click="editItem = null"
                        class="ma-2"
                        >mdi-close</v-icon
                      >
                    </v-row>
                    <v-row>
                      <p class="text-wrap">{{ toDisplayProperty(item) }}</p>
                    </v-row>
                  </v-container>
                </template>
              </v-treeview>

              <p class="pa-4" v-if="artifactItems.length === 0">
                <i>No object found for this language in the application.</i>
              </p>
            </v-row>

            <v-row>
              <h3 class="mx-4 mb-6">
                Do you want the selection in the same group or separated ?
              </h3>
            </v-row>
            <v-row class="mx-4 mb-2">
              <v-select
                class="mx-2"
                v-model="selectedLocation"
                :items="locationList"
                item-text="text"
                item-value="value"
                label="Target"
                outlined
              ></v-select>
            </v-row>
            <v-row
              v-if="
                selectedTarget === 'architecture' ||
                  selectedTarget === 'module' ||
                  (selectedTarget === 'level' &&
                    selectedLocation === 'together')
              "
            >
              <h3 class="mx-4 mb-6">
                Enter the name of the {{ selectedTarget }}:
              </h3>
            </v-row>
            <v-row
              class="mx-4 mb-2"
              v-if="
                selectedTarget === 'architecture' ||
                  selectedTarget === 'module' ||
                  (selectedTarget === 'level' &&
                    selectedLocation === 'together')
              "
            >
              <v-text-field
                class="mx-2"
                v-model="primaryGroupName"
                :label="selectedTarget"
                outlined
                clearable
              ></v-text-field>
            </v-row>
            <v-row
              v-if="
                selectedTarget === 'architecture' &&
                  selectedLocation !== 'together'
              "
            >
              <p class="mx-4 mb-6">
                If you choose to extract the nodes separately, one subset will
                be created by item selected.
              </p>
            </v-row>
            <v-row
              v-if="
                selectedTarget === 'architecture' &&
                  selectedLocation === 'together'
              "
            >
              <h3 class="mx-4 mb-6">
                Enter the name of the subset:
              </h3>
            </v-row>
            <v-row
              class="mx-4 mb-2"
              v-if="
                selectedTarget === 'architecture' &&
                  selectedLocation === 'together'
              "
            >
              <v-text-field
                class="mx-2"
                v-model="secondaryGroupName"
                label="subset"
                outlined
                clearable
              ></v-text-field>
            </v-row>

            <v-row>
              <v-col cols="6" md="6">
                <v-btn large width="100%" @click="createQuerySet()">
                  Generate the queries
                </v-btn>
              </v-col>
              <v-col cols="6" md="6">
                <v-btn
                  color="persianGrey"
                  width="100%"
                  dark
                  large
                  @click="extractArtifacts()"
                >
                  Extract selected nodes
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <!-- Snack Bar information -->
    <v-snackbar v-model="snackbarInfo" :timeout="5000">
      {{ textSnackBar }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarInfo = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!--  Framework Modal  -->
    <FrameworkDispatch
      v-bind:model="showFrameworkModal"
      v-bind:artifact="selectedArtifact"
      v-on:close="showFrameworkModal = false"
    >
    </FrameworkDispatch>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ArtifactController } from "@/api/artemis/artifact.controller";
import { RegexNodeController } from "@/api/artemis/regexNode.controller";
import { ApiRegexNode } from "@/api/interface/ApiRegexNode.interface";
import { ApplicationController } from "@/api/applications/application.controller";
import { ArtemisController } from "@/api/artemis/artemis.controller";
import { Artifact } from "@/api/interface/artemis/artifact.interface";
import DetectionController from "@/api/artemis/detection.controller";
import AgentController from "@/api/agents/agent.controller";
import { DetectionCandidate } from "@/api/interface/artemis/detectionCandidate.interface";
import { IApplicationInsights } from "@/api/interface/imaging/Application.interface";
import FrameworkDispatch from "@/components/framework/FrameworkDispatch.vue";
import { IArtifact } from "../../../../../atlas-api/src/interfaces/artemis/artifact.interface";

export default Vue.extend({
  name: "BreakdownApplication",

  components: {
    FrameworkDispatch
  },

  watch: {
    classExternality: function() {
      this.getArtifactTree();
    },

    textSnackBar: function() {
      this.snackbarInfo = true;
    },

    getApplicationName(newApp) {
      this.applicationName = newApp;
      this.refresh();
    }
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    // Application information
    applicationName: "" as string,
    applicationInformation: null,
    insights: {} as IApplicationInsights,

    // Group Name
    primaryGroupName: "",
    secondaryGroupName: "",

    // Snackbar
    snackbarInfo: false,
    textSnackBar: "",

    // Modal
    showFrameworkModal: false,
    selectedArtifact: null,

    // Artifacts
    loadingArtifacts: false,

    artifactItems: [] as Artifact[],
    artifactTree: [],
    applicationItems: [] as string[],
    languageItems: [] as string[],
    defaultApplication: "",
    defaultLanguage: "",
    classExternality: false,

    locationList: [
      { value: "separated", text: "I want them separated" },
      { value: "together", text: "I want them grouped together" }
    ],
    selectedLocation: null,

    tree: [],
    treeExport: [] as ApiRegexNode[],
    fullExportRequest: "",
    fullQuerySet: "",

    targetList: [
      {
        value: "level",
        text: "Level creation"
      },
      {
        value: "architecture",
        text: "Architecture creation"
      },
      {
        value: "module",
        text: "Module creation"
      }
    ],
    selectedTarget: "level",

    editItem: null,

    parentIdList: [],

    items: [] as ApiRegexNode[]
  }),

  methods: {
    isDisplayedProperty(name: string): boolean {
      return name !== this.selectedTarget;
    },

    toDisplayProperty(item: Artifact): string {
      let arrayToDisplay: string[];

      switch (this.selectedTarget) {
        case "level":
          arrayToDisplay = item.levels;
          break;
        case "module":
          arrayToDisplay = item.modules;
          break;
        case "architecture":
          arrayToDisplay = item.subsets;
          break;
        default:
          return "";
      }

      if (arrayToDisplay.length > 1) {
        const text = arrayToDisplay.join(", ");
        return `(Mixed) In ${this.selectedTarget}s : ${text}`;
      } else if (arrayToDisplay.length == 0) {
        return `In no ${this.selectedTarget}s`;
      } else {
        return `In ${this.selectedTarget}s : ${arrayToDisplay}`;
      }
    },

    selectFramework(artifact: IArtifact) {
      this.showFrameworkModal = true;
      this.selectedArtifact = artifact;
    },

    createQuerySet() {
      ArtifactController.buildQuerySet(
        this.artifactTree,
        this.defaultApplication,
        this.defaultLanguage,
        this.classExternality
      )
        .then((res: string) => {
          this.fullQuerySet = res;
        })
        .catch(err => {
          this.fullQuerySet = err;
        });
    },

    getNodeList() {
      RegexNodeController.getAllNode()
        .then((res: ApiRegexNode[]) => {
          this.parentIdList = [];
          for (let i = 0; i < res.length; i++) {
            const toPush = { id: res[i].id, name: res[i].name };
            if (this.parentIdList.indexOf(toPush) === -1) {
              this.parentIdList.push(toPush);
            }
          }
          this.parentIdList.push({ id: -1, name: "No parent" });
        })
        .catch(err => {
          console.error(err);
        });
    },

    /**
     * Get the languages supported
     */
    async getApplicationAndLanguages() {
      try {
        this.applicationItems = await ApplicationController.getListApplications();
        this.defaultApplication = this.applicationItems[0];
      } catch (err) {
        console.error("Failed to get the list of the application", err);
      }

      try {
        this.languageItems = await ArtemisController.getSupportedLanguages();
        this.defaultLanguage = this.languageItems[0];
      } catch (err) {
        console.error("Failed to retrieve languages.", err);
      }
    },

    async getArtifactTree() {
      // Get the tree
      this.loadingArtifacts = true;

      try {
        this.artifactItems = await ArtifactController.getArtifactAsTree(
          this.applicationName,
          this.defaultLanguage,
          this.classExternality
        );
      } catch (err) {
        console.error(
          `Error trying to retrieve the breakdown of ${this.defaultApplication}`,
          err
        );
      } finally {
        this.loadingArtifacts = false;
      }
    },

    // Get prefix to build the queries
    getPrefix() {
      AgentController.getPrefix(this.nameAgent)
        .then((res: string) => {
          this.prefix = res;
        })
        .catch(err => {
          console.error(
            "Failed to retrieve the prefix of the Framework agent",
            err
          );
        });
    },

    getApplicationInsights() {
      this.loadingCandidates = true;
      ApplicationController.getApplicationInsights(this.applicationName)
        .then((res: IApplicationInsights) => {
          this.insights = res;
        })
        .catch(err => {
          console.error("Failed to get the insights of the application", err);
        })
        .finally(() => {
          this.loadingCandidates = false;
        });
    },

    // Build the list this.treeExport
    async getRequests(tree: ApiRegexNode[]) {
      if (tree.length == 0) return;
      let fullResults = "";
      try {
        for (const item in tree) {
          fullResults +=
            "<span style='color: #66B245'>// " +
            tree[item].name +
            "</span><br />";
          fullResults +=
            (await RegexNodeController.getRegexRequest(tree[item].id)) +
            ";<br /><br />";

          if (tree[item].children) {
            fullResults += await this.getRequests(tree[item].id);
          }
        }
      } catch (err) {
        console.error("Failed to get the request", err);
      }

      return fullResults;
    },

    async buildRequestTree() {
      this.fullExportRequest = await this.getRequests(this.treeExport);
    },

    extractArtifacts() {
      const extractionType = this.selectedTarget;

      ArtifactController.launchQuerySet(
        this.applicationName,
        this.artifactTree,
        this.selectedLocation,
        this.selectedTarget,
        this.primaryGroupName,
        this.secondaryGroupName
      )
        .then((res: any) => {
          this.textSnackBar = `Extraction to a ${extractionType} is a success. Refresh Imaging in few seconds`;
          this.refresh();
        })
        .catch(err => {
          this.textSnackBar =
            "Failed to perform the extraction. Error : " + err;
          console.error("Failed to perform the extraction", err);
        });
    },

    async refresh() {
      this.getApplicationInsights();
      await this.getApplicationAndLanguages();
      this.getArtifactTree();
    }
  },

  mounted() {
    this.applicationName = this.$store.state.applicationName;
    this.refresh();
  }
});
</script>

<style scoped></style>
