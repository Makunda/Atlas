/* eslint-disable prettier/prettier */
<template>
  <v-card width="100%">
    <v-card-title>
      <h3 class="py-3 pb-5 text-h4">Module Management</h3>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1 ml-1">
        Manage the modules created in Imaging. Rename them, hide them, and
        create new children.
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
                    <p>Modules viewer</p>
                  </v-col>

                  <v-spacer></v-spacer>
                  <v-col class="d-flex flex-row align-content-end" md="6">
                    <v-text-field
                      v-model="searchModule"
                      clear-icon="mdi-close-circle-outline"
                      clearable
                      dark
                      flat
                      hide-details
                      label="Search a module by name"
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
                  :items="modules"
                  :open.sync="open"
                  color="warning"
                  transition
                >
                  <template slot="label" slot-scope="{ item }">
                    <v-container
                      style="cursor: pointer;"
                      @click="focusModule(item)"
                    >
                      <v-row>
                        <p class="pt-4">{{ item.name }}</p>
                        <v-chip
                          :class="
                            'mt-4 ml-3 ' + (item.hidden ? 'black' : 'blue')
                          "
                          small
                          text-color="white"
                        >
                          <p class="mt-4 mr-3">Module</p>
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
                    Select a Module
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
                      <v-chip
                        :class="selected.hidden ? 'black' : 'blue'"
                        text-color="white"
                      >
                        Module
                      </v-chip>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="mt-3" tag="v-card-text"
                      ><b class="mr-2">Name:</b> {{ selected.name }}
                    </v-row>
                    <v-row tag="v-card-text"
                      ><b class="mr-2">Count:</b> {{ selected.count }}
                    </v-row>

                    <v-row class="mt-6 justify-center">
                      <div class="text-center">
                        <v-btn
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="editModule()"
                        >
                          <v-icon left>
                            mdi-pencil
                          </v-icon>
                          Modify module
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="openMergeModal()"
                        >
                          <v-icon left>
                            mdi-merge
                          </v-icon>
                          Merge module
                        </v-btn>
                        <v-btn
                          v-if="!selected.hidden"
                          :disabled="hidingModule"
                          :loading="hidingModule"
                          class="mx-3"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="hideModule(selected)"
                        >
                          <v-icon left>
                            mdi-eye-off
                          </v-icon>
                          Hide Module
                        </v-btn>

                        <v-btn
                          v-if="selected.hidden"
                          :disabled="hidingModule"
                          :loading="hidingModule"
                          class="mx-3"
                          color="primary"
                          dark
                          rounded
                          small
                          @click="unhideModule(selected)"
                        >
                          <v-icon left>
                            mdi-eye
                          </v-icon>
                          Show Module
                        </v-btn>

                        <v-btn
                          class="mx-3"
                          color="warning"
                          rounded
                          small
                          @click="deleteModal = true"
                        >
                          <v-icon left>
                            mdi-delete
                          </v-icon>
                          Delete Module
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card>
                </v-scroll-y-transition>
              </v-col>
            </v-row>

            <!--  Merge modal  -->
            <ModuleMergeModal
              v-bind:application="application"
              v-bind:dialog="mergeDialog"
              v-bind:module="selected"
              @close="mergeDialog = false"
            ></ModuleMergeModal>

            <!-- Delete Modal -->
            <DeleteModuleModal
              v-bind:dialog="deleteModal"
              v-bind:module="selected"
              @close="deleteModal = false"
            >
            </DeleteModuleModal>

            <!--  Modify modal  -->
            <ModifyModuleModal
              v-bind:application="application"
              v-bind:dialog="editModal"
              v-bind:module="selected"
              @close="editModal = false"
            ></ModifyModuleModal>

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
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ModuleController from '@/api/controllers/imaging/ModuleController';
import ModuleMergeModal from './tiles/ModuleMergeModal.vue';
import DeleteModuleModal from './tiles/DeleteModuleModal.vue';
import ModifyModuleModal from './tiles/ModifyModuleModal.vue';
import Module from '@/api/interface/imaging/Module';

export default Vue.extend({
  name: 'ModuleExplorer',

  components: {
    ModuleMergeModal,
    ModifyModuleModal,
    DeleteModuleModal,
  },

  data: () => ({
    application: '',
    loadedModules: [] as Module[],

    tree: [] as Module[],
    modules: [] as Module[],
    active: [],
    open: [],
    selected: {} as Module,
    loadingRoots: false,

    mergeDialog: false,
    editModal: false,
    deleteModal: false,

    searchModule: '',

    // Hidden levels
    hiddenModule: [],

    // Snackbar
    snackbarInfo: false,
    textSnackBar: '',

    // Edit Dialog
    colorPicker: {},
    editionType: '',
    dialog: false,
    parentItem: null as Module,
    editItem: {} as Module,

    // Hiding level
    hidingModule: false,
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
    async getModules() {
      try {
        this.loadingRoots = true;
        this.loadedModules = await ModuleController.getModules(
          this.application,
        );
        const hidden = await ModuleController.getHiddenModules(
          this.application,
        );

        this.loadedModules = this.loadedModules.concat(hidden);
        this.modules = this.loadedModules;
      } catch (err) {
        console.error('Failed to retrieve modules in the application.', err);
      } finally {
        this.loadingRoots = false;
      }
    },

    openMergeModal() {
      if (this.application == '') return;
      this.mergeDialog = true;
    },

    onCloseMergeDialog(args) {
      if (args) {
        this.snackbarInfo = true;
        this.textSnackBar = 'Module merged successfully. Refresh Imaging in few seconds (Make sure the module agent is running)';
      }

      this.mergeDialog = false;
    },

    async editLevel(item: Module) {
      this.editionType = 'Edit ';
      this.editItem = { ...item };

      this.dialog = true;
    },

    async editModule() {
      this.editModal = true;
    },

    async hideModule(module: Module) {
      try {
        this.hidingModule = true;
        await ModuleController.hideById(module._id);
        this.displaySnackBar('Module is now hidden');
        this.refresh();
      } catch (err) {
        console.error('Failed to hide the module');
        this.displaySnackBar(`Failed to hide the module. ${err}`);
      } finally {
        this.hidingModule = false;
      }
    },

    async unhideModule(module: Module) {
      try {
        this.hidingModule = true;
        await ModuleController.unHideById(module._id);
        this.displaySnackBar('Module is now displayed.');
        this.refresh();
      } catch (err) {
        console.error('Failed to unhide the module');
        this.displaySnackBar(`Failed to display the module. ${err}`);
      } finally {
        this.hidingModule = false;
      }
    },

    displaySnackBar(text: string) {
      this.snackbarInfo = true;
      this.textSnackBar = text;
    },

    focusModule(item) {
      this.selected = item;
    },

    refresh() {
      this.selected = null;
      this.getModules();
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },

    async selectedLevel(newValue: string) {
      await this.getModules();
    },

    async editModal(newValue: string) {
      await this.getModules();
    },

    async mergeDialog(newValue: string) {
      await this.getModules();
    },

    async deleteModal(newValue: string) {
      await this.getModules();
    },

    async searchModule(newValue: string) {
      if (newValue && newValue.length > 0) {
        this.modules = this.loadedModules.filter(
          (x: Module) => x.name.toLowerCase().indexOf(newValue.toLowerCase()) >= 0,
        );
      } else {
        // No search string
        this.modules = this.loadedModules;
      }
    },
  },
});
</script>
