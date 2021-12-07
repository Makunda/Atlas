<template>
  <!-- BREAKDOWN SECTION -->
  <v-card class="ma-2" width="100%">
    <v-card-title>
      <p class="text-h3 text--primary">
        <span class="font-weight-light pr-1">Review the breakdown of</span>
        {{ applicationName }}
      </p>
      <br />
      <v-spacer></v-spacer>
      <v-btn class="px-4" color="green" icon large @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      <v-icon color="red">mdi-message-alert-outline</v-icon>
      Make sure the agent are running if you planned to extract the artifacts
      from the breakdown.
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <h3 class="mx-4 mb-6">
            Quick application overview :
          </h3>
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of levels:</v-col>
          <v-col cols="12" md="8"
            ><strong>{{
              insights.levels5 ? insights.levels5.length : 0
            }}</strong></v-col
          >
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of modules:</v-col>
          <v-col cols="12" md="8"
            ><strong>{{
              insights.modules ? insights.modules.length : 0
            }}</strong></v-col
          >
        </v-row>
        <v-row class="mx-4">
          <v-col cols="12" md="4">Number of architectures:</v-col>
          <v-col cols="12" md="8"
            ><strong>{{
              insights.architectures ? insights.architectures.length : 0
            }}</strong></v-col
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
            v-for="target in targetList"
            v-bind:key="target.value"
            :color="selectedTarget !== target.value ? 'grey' : 'persianGrey'"
            class="mx-2"
            dark
            @click="selectedTarget = target.value"
          >
            {{ target.text }}
          </v-btn>
        </v-row>

        <v-row class="mx-4 mb-3">
          <p>
            Select the type of modification you want to apply on the
            application. The level and the modules creation usually takes
            between few seconds and 1 minutes for very large number of nodes.
            The creation of Architectures views implying more resources, the
            operation can take up to few minutes to be completed on large set of
            nodes.<br />
            <b
              >It's not recommended to relaunch directly an architecture
              grouping</b
            >
            if you're not seeing the results in CAST Imaging.<br />
            Do not forget to refresh your views to see the changes.
          </p>
        </v-row>

        <v-row>
          <h3 class="mx-4 mb-2">
            Select the externality: {{ classExternality }}
          </h3>
        </v-row>
        <v-row class="mx-4 mb-2">
          <v-switch
            v-model="classExternality"
            :disabled="loadingArtifacts"
            :label="classExternality ? 'External class' : 'Internal classes'"
            :loading="loadingArtifacts"
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
                v-model="defaultLanguage"
                :disabled="loadingArtifacts"
                :items="languageItems"
                :loading="loadingArtifacts"
                class="mx-2"
                label="Language"
                outlined
                @change="getArtifactTree()"
              ></v-select>
            </v-row>

            <v-row>
              <h3 class="mx-4 mb-2">Select the rules to export:</h3>
            </v-row>
            <v-row class="mb-4">
              <v-progress-circular
                v-if="loadingArtifacts"
                :size="50"
                :width="7"
                class="ma-12"
                color="persianGrey"
                indeterminate
              ></v-progress-circular>

              <v-treeview
                v-if="!loadingArtifacts"
                v-model="artifactTree"
                :items="artifactItems"
                return-object
                selectable
                selection-type="independent"
              >
                <template v-slot:label="{ item }">
                  <v-container>
                    <v-row>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <p
                            class="my-2"
                            style="word-break: break-word"
                            v-bind="attrs"
                            v-on="on"
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
                        v-if="item === editItem"
                        v-model="item.customName"
                        class="mx-1"
                        dense
                        label="Custom Name"
                      ></v-text-field>
                      <v-icon
                        v-if="item !== editItem"
                        class="ma-2"
                        small
                        @click="editArtifact(item)"
                        >mdi-pencil
                      </v-icon>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            class="ma-2"
                            v-bind="attrs"
                            @click="selectFramework(item)"
                            v-on="on"
                            >mdi-keyboard-caps
                          </v-icon>
                        </template>
                        <span>Extract as a Framework</span>
                      </v-tooltip>

                      <v-icon
                        v-if="item === editItem"
                        class="ma-2"
                        small
                        @click="editItem = null"
                        >mdi-close
                      </v-icon>
                    </v-row>
                    <v-row>
                      <p class="text-wrap">{{ toDisplayProperty(item) }}</p>
                    </v-row>
                  </v-container>
                </template>
              </v-treeview>

              <p v-if="artifactItems.length === 0" class="pa-4">
                <i>No object found for this language in the application.</i>
              </p>
            </v-row>

            <v-row class="mx-4 mb-6">
              <h3>
                Do you want the selection in the same group or separated ?
              </h3>
              <p>
                The same group option will group the selected nodes under the
                same entity. For levels, they will be grouped under a single
                level 5. For creating modules and architectures, the group
                option will group them under the same module/architecture. By
                choosing the "Separated" option for modules and architectures,
                multiple modules/architectures will be created.
              </p>
            </v-row>
            <v-row class="mx-4 mb-2">
              <v-select
                v-model="selectedLocation"
                :items="locationList"
                class="mx-2"
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
              v-if="
                selectedTarget === 'architecture' ||
                  selectedTarget === 'module' ||
                  (selectedTarget === 'level' &&
                    selectedLocation === 'together')
              "
              class="mx-4 mb-2"
            >
              <v-text-field
                v-model="primaryGroupName"
                :label="selectedTarget"
                class="mx-2"
                clearable
                outlined
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
              v-if="
                selectedTarget === 'architecture' &&
                  selectedLocation === 'together'
              "
              class="mx-4 mb-2"
            >
              <v-text-field
                v-model="secondaryGroupName"
                class="mx-2"
                clearable
                label="subset"
                outlined
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
                  dark
                  large
                  width="100%"
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
      v-bind:artifact="selectedArtifact"
      v-bind:model="showFrameworkModal"
      v-on:close="showFrameworkModal = false"
    >
    </FrameworkDispatch>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ApiRegexNode } from "@/api/interface/ApiRegexNode.interface";
import { Artifact } from "@/api/interface/extensions/artemis/Artifact";
import { ApplicationInsights } from "@/api/interface/imaging/ApplicationInsights";
import FrameworkDispatch from "@/components/framework/FrameworkDispatch.vue";
import { RegexNodeController } from "@/api/controllers/extensions/artemis/RegexNodeController";
import { ArtemisController } from "@/api/controllers/extensions/artemis/ArtemisController";
import { ArtifactController } from "@/api/controllers/extensions/artemis/ArtifactController";
import AgentController from "@/api/controllers/agents/AgentController";
import ApplicationController from "@/api/controllers/imaging/ApplicationController";
import Logger from "@/utils/Logger";

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
    insights: {} as ApplicationInsights,

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
    classExternality: true,

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

    selectFramework(artifact: Artifact) {
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
        this.applicationItems = await ApplicationController.getListApplication();
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

    async getApplicationInsights() {
      this.loadingCandidates = true;

      try {
        this.loadingCandidate = true;
        this.insights = await ApplicationController.getApplicationInsights(
          this.applicationName
        );
      } catch (e) {
        Logger.error("Failed to get the insights of the application", e);
      } finally {
        this.loadingCandidate = false;
      }
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
        this.classExternality,
        this.primaryGroupName,
        this.secondaryGroupName
      )
        .then((res: any) => {
          this.textSnackBar = `Tags for ${extractionType} extraction were applied. Make sure the ${extractionType} agent is running.`;
          this.refresh();
        })
        .catch(err => {
          this.textSnackBar =
            "Failed to perform the extraction. Error : " + err;
          console.error("Failed to perform the extraction", err);
        });
    },

    async refresh() {
      await this.getApplicationInsights();
      await this.getApplicationAndLanguages();
      await this.getArtifactTree();
    }
  },

  mounted() {
    this.applicationName = this.$store.state.applicationName;
    this.refresh();
  }
});
</script>

<style scoped></style>
