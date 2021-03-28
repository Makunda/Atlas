<template>
  <!-- BREAKDOWN SECTION -->
  <v-card class="ma-2" width="100%">
    <v-card-title>
      Generate rules from the breakdown of the application {{ applicationName }}
    </v-card-title>
    <v-card-text>
      <v-container>
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
              <v-treeview
                selectable
                v-model="artifactTree"
                :items="artifactItems"
                selection-type="independent"
                return-object
              >
                <template v-slot:label="{ item }">
                  <v-container>
                    <v-row>
                      <p class="my-2">
                        {{ item.customName || item.name }}
                        <i class="text--persianGrey"
                          >( items count : {{ item.count }})</i
                        >
                      </p>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                              color="blue"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            mdi-alpha-l-circle
                          </v-icon>
                        </template>
                        <span>Tooltip</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                              color="red"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            mdi-alpha-m-circle
                          </v-icon>
                        </template>
                        <span>Tooltip</span>
                      </v-tooltip>

                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                              color="blue"
                              dark
                              v-bind="attrs"
                              v-on="on"
                          >
                            mdi-alpha-s-circle
                          </v-icon>
                        </template>
                        <span>Tooltip</span>
                      </v-tooltip>

                      <v-text-field
                        class="ml-2"
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
                      <v-icon
                        v-if="item === editItem"
                        small
                        @click="editItem = null"
                        class="ma-2"
                        >mdi-close</v-icon
                      >
                    </v-row>
                  </v-container>
                </template>
              </v-treeview>

              <p class="pa-4" v-if="artifactItems.length == 0">
                <i>No object found for this language in the application.</i>
              </p>
            </v-row>
            <v-row>
              <h3 class="mx-4 mb-6">
                Select the target :
              </h3>
            </v-row>
            <v-row class="mx-4 mb-2">
              <v-select
                class="mx-2"
                v-model="selectedTarget"
                :items="targetList"
                item-text="text"
                item-value="value"
                label="Target"
                outlined
              ></v-select>
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
                  @click="launchQuerySet()"
                >
                  Launch
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
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

export default Vue.extend({
  name: "BreakdownApplication",

  watch: {
    classExternality: function() {
      this.getArtifactTree();
    },

    getApplicationName(newApp) {
      this.applicationName = newApp;
    }
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    applicationName: "" as string,

    // Artifacts
    loadingArtifacts: false,

    artifactItems: [],
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
        text: "To a new level"
      },
      {
        value: "architecture",
        text: "To a new architecture"
      },
      {
        value: "module",
        text: "To a new module"
      }
    ],
    selectedTarget: null,

    editItem: null,

    parentIdList: [],

    items: [] as ApiRegexNode[]
  }),

  methods: {
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

    getApplicationAndLanguages() {
      ApplicationController.getListApplications()
        .then((res: string[]) => {
          console.log("Application list", res);
          this.applicationItems = res;
          this.defaultApplication = res[0];
        })
        .catch(err => {
          console.error("Failed to get the list of the application");
        });

      ArtemisController.getSupportedLanguages()
        .then((res: string[]) => {
          this.languageItems = res;
          this.defaultLanguage = res[0];
        })
        .catch(err => {
          console.error("Failed to retrieve languages.", err);
        });
    },

    getArtifactTree() {
      // Get the tree
      this.loadingArtifacts = true;
      ArtifactController.getArtifactAsTree(
        this.applicationName,
        this.defaultLanguage,
        this.classExternality
      )
        .then((res: Artifact[]) => {
          console.log("Get Artifact Tree", res);
          this.artifactItems = res;
        })
        .catch(err => {
          console.error(
            `Error trying to retrieve the breakdown of ${this.defaultApplication}`,
            err
          );
        })
        .finally(() => {
          this.loadingArtifacts = false;
        });
      // Get the list of application
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

    getCandidates() {
      this.loadingCandidates = true;
      DetectionController.getDetectionCandidates()
        .then((res: DetectionCandidate[]) => {
          this.candidates = res;
          console.log(res);
        })
        .catch(err => {
          console.error("Failed to get the candidates for the dection", err);
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

    refresh() {
      this.getArtifactTree();
      this.getApplicationAndLanguages();
    }
  },

  mounted() {
    this.refresh();
  }
});
</script>

<style scoped></style>
