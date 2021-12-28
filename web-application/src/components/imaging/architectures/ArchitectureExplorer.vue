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
          <v-card :loading="loadingRoots" class="pb-8 px-auto" min-width="100%">
            <v-card-title class="charcoal white--text headline">
              <v-container fluid>
                <v-row>
                  <v-col class="mt-2" md="3">
                    <p>Architecture viewer</p>
                  </v-col>

                  <v-spacer></v-spacer>
                  <v-col class="d-flex flex-row align-content-end" md="6">
                    <v-text-field
                      v-model="searchArchitecture"
                      clear-icon="mdi-close-circle-outline"
                      clearable
                      dark
                      flat
                      hide-details
                      label="Search an architecture by name"
                      solo-inverted
                    ></v-text-field>
                    <v-btn class="mx-3" color="green" icon @click="refresh()">
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
                  :open.sync="open"
                  color="warning"
                  item-children="subsets"
                  transition
                >
                  <template slot="label" slot-scope="{ item }">
                    <v-container
                      style="cursor: pointer;"
                      @click="focusArchitecture(item)"
                    >
                      <v-row>
                        <p class="pt-4">{{ item.name }}</p>
                        <v-chip
                          :class="`mt-4 ml-3 ${getColor(item)}`"
                          small
                          text-color="white"
                        >
                          <p class="mt-4 mr-3">
                            {{
                              item.type == "archimodel"
                                ? "Architecture"
                                : "Subset"
                            }}
                          </p>
                          <v-icon v-if="item.hidden" color="red px-2" x-small
                            >mdi-eye-off
                          </v-icon>
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
                          color="primary"
                          dark
                          rounded
                          small
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
                          color="primary"
                          dark
                          rounded
                          small
                          @click="duplicateModal = true"
                        >
                          <v-icon left>
                            mdi-content-copy
                          </v-icon>
                          Duplicate {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.type == 'archimodel'"
                          :loading="loadingModuleDefinition"
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
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
                          color="primary"
                          dark
                          rounded
                          small
                          @click="unassignedModal = true"
                        >
                          <v-icon left>
                            mdi-group
                          </v-icon>
                          Create Unassigned Layer
                        </v-btn>

                        <v-btn
                          v-if="!selected.hidden"
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="hideElement(selected)"
                        >
                          <v-icon left>
                            mdi-eye-off
                          </v-icon>
                          Hide {{ getSelectedName(selected) }}
                        </v-btn>

                        <v-btn
                          v-if="selected.hidden"
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
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
                          :disabled="hidingElement"
                          :loading="hidingElement"
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="displayCompleteArchiModel(selected)"
                        >
                          <v-icon left>
                            mdi-eye
                          </v-icon>
                          Show {{ getSelectedName(selected) }} and all the
                          children
                        </v-btn>

                        <v-btn
                          class="ma-2"
                          color="warning"
                          rounded
                          small
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
                      v-model="taxonomyArchitecture"
                      :disabled="taxonomyArchitectureLoading"
                      class="pt-0"
                      label="Architecture Name"
                    ></v-text-field>
                    <v-row v-if="taxonomyArchitectureError !== ''" class="mx-1">
                      <p class="red--text">{{ taxonomyArchitectureError }}</p>
                    </v-row>
                    <v-row v-if="taxonomyArchitectureError !== ''" class="mx-1">
                      <p class="green--text">
                        {{ taxonomyArchitectureSuccess }}
                      </p>
                    </v-row>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                      :loading="taxonomyArchitectureLoading"
                      color="primary"
                      dark
                      round
                      @click="replicateTaxonomy"
                      >Replicate Architecture
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row></v-row>
                <v-row></v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>

    <!--  Merge modal  -->
    <DeleteArchitectureModal
      v-bind:application="application"
      v-bind:dialog="deleteModal"
      v-bind:element="selected"
      @close="deleteModal = false"
    ></DeleteArchitectureModal>

    <!--  Modify modal  -->
    <ModifyArchitectureModal
      v-bind:application="application"
      v-bind:dialog="editModal"
      v-bind:element="selected"
      @close="editModal = false"
    ></ModifyArchitectureModal>

    <!--  Dulicate modal  -->
    <DuplicateArchitectureModal
      v-bind:application="application"
      v-bind:dialog="duplicateModal"
      v-bind:element="selected"
      @close="duplicateModal = false"
    ></DuplicateArchitectureModal>

    <!--  Dulicate modal  -->
    <CreateUnassignedModal
      v-bind:application="application"
      v-bind:dialog="unassignedModal"
      v-bind:element="selected"
      @close="unassignedModal = false"
    ></CreateUnassignedModal>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ArchitectureController from '@/api/controllers/imaging/ArchitectureController';
import Archimodel from '@/api/interface/imaging/ArchiModel';
import DeleteArchitectureModal from '@/components/imaging/architectures/tiles/DeleteArchitectureModal.vue';
import ModifyArchitectureModal from '@/components/imaging/architectures/tiles/ModifyArchitectureModal.vue';
import DuplicateArchitectureModal from '@/components/imaging/architectures/tiles/DuplicateArchitectureModal.vue';
import CreateUnassignedModal from '@/components/imaging/architectures/tiles/CreateUnassignedModal.vue';

export default Vue.extend({
  name: 'ArchitectureExplorer',

  components: {
    DeleteArchitectureModal,
    ModifyArchitectureModal,
    DuplicateArchitectureModal,
    CreateUnassignedModal,
  },

  data: () => ({
    application: '',
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

    searchArchitecture: '',

    // Snackbar
    snackbarInfo: false,
    textSnackBar: '',

    // Power Actions
    taxonomyArchitecture: '',
    taxonomyArchitectureLoading: false,
    taxonomyArchitectureError: '',
    taxonomyArchitectureSuccess: '',

    // Edit Dialog
    colorPicker: {},
    editionType: '',
    dialog: false,
    parentItem: null as Archimodel,
    editItem: {} as Archimodel,

    // Hiding level
    hidingElement: false,

    // Module definition
    loadingModuleDefinition: false,
  }),

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.refresh();
  },

  methods: {
    getColor(item) {
      if (item.hidden) return 'black';
      if (item.type == 'archimodel') return 'blue';
      return 'green';
    },

    getSelectedName(selected) {
      return selected.type == 'archimodel' ? 'Architecture' : 'Subset';
    },

    /**
     * Replicate the Cast Taxonomy
     */
    async replicateTaxonomy() {
      try {
        this.taxonomyArchitectureError = '';
        if (this.taxonomyArchitecture == '') {
          this.taxonomyArchitectureError = 'Name cannot be empty';
          return;
        } // Ignore if no name is provided

        this.taxonomyArchitectureLoading = true;

        await ArchitectureController.duplicateTaxonomy(
          this.taxonomyArchitecture,
          this.application,
        );

        await this.refresh();

        this.taxonomyArchitectureSuccess = `Duplication of the Levvel 5 is complete. A new Architecture with name '${this.taxonomyArchitecture} should appear in few seconds. 
        This operation being complex it can take some time on large applications.'`;

        this.taxonomyArchitecture = '';
      } catch (err) {
        this.taxonomyArchitectureError = err;
      } finally {
        this.taxonomyArchitectureLoading = false;
      }
    },

    /**
     * Get the architectures models in one application
     */
    async getArchitectures() {
      try {
        this.loadingRoots = true;
        this.loadedArchitectures = await ArchitectureController.getArchitectures(
          this.application,
        );

        this.architectures = this.loadedArchitectures;
      } catch (err) {
        console.error(
          'Failed to retrieve architecture in the application.',
          err,
        );
        this.displaySnackBar(
          `Failed to retrieve architecture in the application. ${err}`,
        );
      } finally {
        this.loadingRoots = false;
      }
    },

    /**
     * Edit an Architecture
     */
    async editLevel(item: Archimodel) {
      this.editionType = 'Edit ';
      this.editItem = { ...item };

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
          element.type,
        );
        this.displaySnackBar('Element is now hidden');
        this.refresh();
      } catch (err) {
        console.error('Failed to hide the Architecture Element', err);
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
          element._id,
        );
        this.displaySnackBar('Architecture is now displayed');
        this.refresh();
      } catch (err) {
        console.error('Failed to display the complete Architecture', err);
        this.displaySnackBar(
          `Failed to display the complete Architecture. ${err}`,
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
        this.loadingModuleDefinition = true;
        this.displaySnackBar('Generating the module definition..');
        await ArchitectureController.generateModulesFromArchitecture(
          this.application,
          architectureId,
        );
      } catch (err) {
        console.error('Failed to generate the module definition.', err);
        this.displaySnackBar(`Module generation failed. Error: ${err}`);
      } finally {
        this.loadingModuleDefinition = false;
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
          element.type,
        );
        this.displaySnackBar('Element is now displayed.');
        this.refresh();
      } catch (err) {
        console.error('Failed to unhide the Element', err);
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
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.architectures = [];
      this.loadedArchitectures = [];
      this.refresh();
    },

    async selectedLevel(newValue: string) {
      await this.getArchitectures();
    },

    async editModal(newValue: string) {
      await this.getArchitectures();
    },

    async mergeDialog(newValue: string) {
      await this.getArchitectures();
    },

    async deleteModal(newValue: string) {
      await this.getArchitectures();
    },

    async searchArchitecture(newValue: string) {
      if (newValue && newValue.length > 0) {
        this.architectures = this.loadedArchitectures.filter(
          (x: Archimodel) => x.name.toLowerCase().indexOf(newValue.toLowerCase()) >= 0,
        );
      } else {
        // No search string
        this.architectures = this.loadedArchitectures;
      }
    },
  },
});
</script>
