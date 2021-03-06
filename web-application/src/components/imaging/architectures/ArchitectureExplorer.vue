/* eslint-disable prettier/prettier */
<template>
  <v-card width="100%">
    <v-card-title>
      <h3 class="py-3 pb-5 text-h4">Architecture Management</h3>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1 ml-1">
        Manage the architectures created in Imaging. Rename, hide and delete
        them.
      </p>
    </v-card-subtitle>
    <v-card-text>
      <v-container fluid>
        <v-row style="width: 100%">
          <!--  Card in charge of the management of the displayed levels  -->
          <v-card class="pb-8 px-auto" min-width="100%" :loading="loadingRoots">
            <v-card-title class="charcoal white--text headline">
              <v-container fluid>
                <v-row>
                  <v-col md="3" class="mt-2">
                    <p>Architecture viewer</p>
                  </v-col>

                  <v-spacer></v-spacer>
                  <v-col md="6" class="d-flex flex-row align-content-end">
                    <v-text-field
                      v-model="searchArchitecture"
                      label="Search an architecture by name"
                      dark
                      flat
                      solo-inverted
                      hide-details
                      clearable
                      clear-icon="mdi-close-circle-outline"
                    ></v-text-field>
                    <v-btn class="mx-3" icon color="green" @click="refresh()">
                      <v-icon>mdi-cached</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>

            <v-row class="pa-4" justify="space-between">
              <template slot="progress">
                <v-progress-linear
                  color="persianGrey"
                  height="5"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-col cols="5">
                <v-treeview
                  v-model="tree"
                  :active.sync="active"
                  :items="architectures"
                  item-children="subsets"
                  :open.sync="open"
                  color="warning"
                  transition
                >
                  <template slot="label" slot-scope="{ item }">
                    <v-container
                      style="cursor: pointer;"
                      @click="focusArchitecture(item)"
                      ><v-row>
                        <p class="pt-4">{{ item.name }}</p>
                        <v-chip
                          small
                          :class="`mt-4 ml-3 ${getColor(item)}`"
                          text-color="white"
                        >
                          <p class="mt-4 mr-3">
                            {{
                              item.type == "archimodel"
                                ? "Architecture"
                                : "Subset"
                            }}
                          </p>
                          <v-icon x-small color="red px-2" v-if="item.hidden"
                            >mdi-eye-off</v-icon
                          >
                        </v-chip>
                      </v-row>
                    </v-container>
                  </template>
                </v-treeview>
              </v-col>

              <v-divider vertical></v-divider>

              <v-col class="d-flex text-center">
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="!selected"
                    class="title grey--text text--lighten-1 font-weight-light"
                    style="align-self: center;"
                  >
                    Select an Architecture or a subset
                  </div>
                  <v-card
                    v-else
                    :key="selected._id"
                    class="pt-6 mx-auto"
                    flat
                    max-width="600"
                  >
                    <v-row class="justify-center mb-4">
                      <p class="text-h5 mr-2">{{ selected.name }}</p>
                      <v-chip :class="getColor(selected)" text-color="white">
                        {{ getSelectedName(selected) }}
                      </v-chip>
                    </v-row>
                    <v-divider></v-divider>
                    <v-card-text>
                      <v-container>
                        <v-row class="mt-3 text-subtitle-1"
                          ><b class=" mr-2">Name:</b> {{ selected.name }}
                        </v-row>
                        <v-row class="mt-2 text-subtitle-1"
                          ><b class="mr-2">Count:</b>
                          {{ selected.count }}
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-row class="mt-6 justify-center">
                      <div class="text-center">
                        <v-btn
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          @click="editModal = true"
                        >
                          <v-icon left>
                            mdi-pencil
                          </v-icon>
                          Modify {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.type == 'archimodel'"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          @click="duplicateModal = true"
                        >
                          <v-icon left>
                            mdi-content-copy
                          </v-icon>
                          Duplicate {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.type == 'archimodel'"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          @click="downloadModuleDefinition(selected._id)"
                        >
                          <v-icon left>
                            mdi-content-copy
                          </v-icon>
                          To modules {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.type == 'archimodel'"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          @click="unassignedModal = true"
                        >
                          <v-icon left>
                            mdi-group
                          </v-icon>
                          Create Unassigned Layer
                        </v-btn>

                        <v-btn
                          v-if="!selected.hidden"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          @click="hideElement(selected)"
                        >
                          <v-icon left>
                            mdi-eye-off
                          </v-icon>
                          Hide {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.hidden"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          @click="unhideElement(selected)"
                        >
                          <v-icon left>
                            mdi-eye
                          </v-icon>
                          Show {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="
                            selected.hidden &&
                              getSelectedName(selected) == 'Architecture'
                          "
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          @click="displayCompleteArchiModel(selected)"
                        >
                          <v-icon left>
                            mdi-eye
                          </v-icon>
                          Show {{ getSelectedName(selected) }} and all the
                          children
                        </v-btn>

                        <v-btn
                          rounded
                          small
                          class="ma-2"
                          color="warning"
                          @click="deleteModal = true"
                        >
                          <v-icon left>
                            mdi-delete
                          </v-icon>
                          Delete {{ getSelectedName(selected) }}
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card>
                </v-scroll-y-transition>
              </v-col>
            </v-row>

            <!-- Snack Bar information -->
            <v-snackbar v-model="snackbarInfo" :timeout="5000">
              {{ textSnackBar }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="blue"
                  text
                  v-bind="attrs"
                  @click="snackbarInfo = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-card>
        </v-row>

        <v-row>
          <v-card class="mt-10" width="100%">
            <v-card-title>
              <h3 class="py-3 pb-5 text-h5">Power Actions</h3>
            </v-card-title>
            <v-card-subtitle>
              <p class="subtitle-1 ml-1">
                Launch global actions on the Architecture view
              </p>
            </v-card-subtitle>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="4">
                    <p class="subtitle-1">
                      Duplicate CAST Level 5 Taxonomy to a new Architecture
                      <span class="subtitle-2">
                        Create a new Architecture copying the Level 5. You need
                        to provide a name to this Architecture. Make sure the
                        Architecture agent is running.
                      </span>
                    </p>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      class="pt-0"
                      label="Architecture Name"
                      v-model="taxonomyArchitecture"
                      :disabled="taxonomyArchitectureLoading"
                    ></v-text-field>
                    <v-row class="mx-1" v-if="taxonomyArchitectureError !== ''">
                      <p class="red--text">{{ taxonomyArchitectureError }}</p>
                    </v-row>
                    <v-row class="mx-1" v-if="taxonomyArchitectureError !== ''">
                      <p class="green--text">
                        {{ taxonomyArchitectureSuccess }}
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                      round
                      color="primary"
                      dark
                      @click="replicateTaxonomy"
                      :loading="taxonomyArchitectureLoading"
                      >Replicate Architecture</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row> </v-row>
                <v-row> </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>

    <!--  Merge modal  -->
    <DeleteArchitectureModal
      v-bind:application="application"
      v-bind:element="selected"
      v-bind:dialog="deleteModal"
      @close="deleteModal = false"
    ></DeleteArchitectureModal>

    <!--  Modify modal  -->
    <ModifyArchitectureModal
      v-bind:application="application"
      v-bind:element="selected"
      v-bind:dialog="editModal"
      @close="editModal = false"
    ></ModifyArchitectureModal>

    <!--  Dulicate modal  -->
    <DuplicateArchitectureModal
      v-bind:application="application"
      v-bind:element="selected"
      v-bind:dialog="duplicateModal"
      @close="duplicateModal = false"
    ></DuplicateArchitectureModal>

    <!--  Dulicate modal  -->
    <CreateUnassignedModal
      v-bind:application="application"
      v-bind:element="selected"
      v-bind:dialog="unassignedModal"
      @close="unassignedModal = false"
    ></CreateUnassignedModal>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import ArchitectureController from "@/api/imaging/ArchitectureController";
import Archimodel from "@/api/interface/imaging/ArchiModel";
import DeleteArchitectureModal from "@/components/imaging/tiles/architectures/DeleteArchitectureModal.vue";
import ModifyArchitectureModal from "@/components/imaging/tiles/architectures/ModifyArchitectureModal.vue";
import DuplicateArchitectureModal from "@/components/imaging/tiles/architectures/DuplicateArchitectureModal.vue";
import CreateUnassignedModal from "@/components/imaging/tiles/architectures/CreateUnassignedModal.vue";

export default Vue.extend({
  name: "ArchitectureExplorer",

  components: {
    DeleteArchitectureModal,
    ModifyArchitectureModal,
    DuplicateArchitectureModal,
    CreateUnassignedModal
  },

  data: () => ({
    application: "",
    loadedArchitectures: [] as Archimodel[],

    tree: [] as Archimodel[],
    architectures: [] as Archimodel[],
    active: [],
    open: [],
    selected: {} as Archimodel,
    loadingRoots: false,

    mergeDialog: false,
    editModal: false,
    deleteModal: false,
    duplicateModal: false,
    unassignedModal: false,

    searchArchitecture: "",

    // Snackbar
    snackbarInfo: false,
    textSnackBar: "",

    // Power Actions
    taxonomyArchitecture: "",
    taxonomyArchitectureLoading: false,
    taxonomyArchitectureError: "",
    taxonomyArchitectureSuccess: "",

    // Edit Dialog
    colorPicker: {},
    editionType: "",
    dialog: false,
    parentItem: null as Archimodel,
    editItem: {} as Archimodel,

    // Hiding level
    hidingElement: false
  }),

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.refresh();
  },

  methods: {
    getColor(item) {
      if (item.hidden) return "black";
      if (item.type == "archimodel") return "blue";
      else return "green";
    },

    getSelectedName(selected) {
      return selected.type == "archimodel" ? "Architecture" : "Subset";
    },

    /**
     * Replicate the Cast Taxonomy
     */
    async replicateTaxonomy() {
      try {
        this.taxonomyArchitectureError = "";
        if (this.taxonomyArchitecture == "") {
          this.taxonomyArchitectureError = "Name cannot be empty";
          return;
        } // Ignore if no name is provided

        this.taxonomyArchitectureLoading = true;

        await ArchitectureController.duplicateTaxonomy(
          this.taxonomyArchitecture,
          this.application
        );

        await this.refresh();

        this.taxonomyArchitectureSuccess = `Duplication of the Levvel 5 is complete. A new Architecture with name '${this.taxonomyArchitecture} should appear in few seconds. 
        This operation being complex it can take some time on large applications.'`;

        this.taxonomyArchitecture = "";
      } catch (err) {
        this.taxonomyArchitectureError = err;
      } finally {
        this.taxonomyArchitectureLoading = false;
      }
    },

    async getArchitectures() {
      try {
        this.loadingRoots = true;
        this.loadedArchitectures = await ArchitectureController.getArchitectures(
          this.application
        );

        this.architectures = this.loadedArchitectures;
      } catch (err) {
        console.error(
          `Failed to retrieve architecture in the application.`,
          err
        );
        this.displaySnackBar(
          `Failed to retrieve architecture in the application. ${err}`
        );
      } finally {
        this.loadingRoots = false;
      }
    },

    async editLevel(item: Archimodel) {
      this.editionType = "Edit ";
      this.editItem = Object.assign({}, item);

      this.dialog = true;
    },

    async editArchitecture() {
      this.editModal = true;
    },

    /**
     * Hide Element
     */
    async hideElement(element) {
      try {
        this.hidingElement = true;

        await ArchitectureController.hideArchitectureElement(
          element._id,
          element.type
        );
        this.displaySnackBar(`Element is now hidden`);
        this.refresh();
      } catch (err) {
        console.error("Failed to hide the Architecture Element", err);
        this.displaySnackBar(`Failed to hide the Architecture Element. ${err}`);
      } finally {
        this.hidingElement = false;
      }
    },

    /**
     * Display an architecture and all its children
     */
    async displayCompleteArchiModel(element) {
      try {
        this.hidingElement = true;

        await ArchitectureController.displayCompleteArchimodelElement(
          element._id
        );
        this.displaySnackBar(`Architecture is now displayed`);
        this.refresh();
      } catch (err) {
        console.error("Failed to display the complete Architecture", err);
        this.displaySnackBar(
          `Failed to display the complete Architecture. ${err}`
        );
      } finally {
        this.hidingElement = false;
      }
    },

    /**
     * Download the definition of the module for the current architecture id
     * @params {number} architectureId Id of the architecture
     */
    async downloadModuleDefinition(architectureId: number) {
      try {
        await ArchitectureController.generateModulesFromArchitecture(
          this.application,
          architectureId
        );
      } catch (err) {
        console.error("Failed to generate the module definition.", err);
      }
    },

    /**
     * Unhide Element
     */
    async unhideElement(element) {
      try {
        this.hidingElement = true;

        await ArchitectureController.displayArchitectureElement(
          element._id,
          element.type
        );
        this.displaySnackBar("Element is now displayed.");
        this.refresh();
      } catch (err) {
        console.error("Failed to unhide the Element", err);
        this.displaySnackBar(`Failed to display the Element. ${err}`);
      } finally {
        this.hidingElement = false;
      }
    },

    displaySnackBar(text: string) {
      this.snackbarInfo = true;
      this.textSnackBar = text;
    },

    focusArchitecture(item) {
      this.selected = item;
    },

    async refresh() {
      this.selected = null;
      await this.getArchitectures();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },

    selectedLevel: async function(newValue: string) {
      await this.getArchitectures();
    },

    editModal: async function(newValue: string) {
      await this.getArchitectures();
    },

    mergeDialog: async function(newValue: string) {
      await this.getArchitectures();
    },

    deleteModal: async function(newValue: string) {
      await this.getArchitectures();
    },

    searchArchitecture: async function(newValue: string) {
      if (newValue && newValue.length > 0) {
        this.architectures = this.loadedArchitectures.filter(
          (x: Archimodel) =>
            x.name.toLowerCase().indexOf(newValue.toLowerCase()) >= 0
        );
      } else {
        // No search string
        this.architectures = this.loadedArchitectures;
      }
    }
  }
});
</script>
