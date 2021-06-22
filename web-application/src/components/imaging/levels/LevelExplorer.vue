<template>
  <v-card width="100%">
    <v-card-title>
      <h3 class="py-3 pb-5 text-h4">Level Management</h3>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1 ml-1">
        Manage the levels created by Imaging. Rename them, hide them, and create
        new children. The levels 1, 2 and 3 cannot be modified for the moment.
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
                  <v-col md="2" class="mt-2">
                    <p>Levels viewer</p>
                  </v-col>

                  <v-col md="3">
                    <v-select
                      class="mt-1"
                      dark
                      v-model="selectedLevel"
                      :items="levelItems"
                      item-text="text"
                      item-value="value"
                      label="Outlined style"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col md="6" class="d-flex flex-row align-content-end">
                    <v-text-field
                      v-model="searchLevel"
                      label="Search a level by name"
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
                  :items="levels"
                  :open.sync="open"
                  color="warning"
                  transition
                >
                  <template slot="label" slot-scope="{ item }">
                    <v-container
                      style="cursor: pointer;"
                      @click="focusLevel(item)"
                      ><v-row>
                        <p class="pt-4">{{ item.name }}</p>
                        <v-chip
                          small
                          :class="'mt-4 ml-3 ' + getLevelColor(item)"
                          text-color="white"
                        >
                          <v-avatar
                            left
                            :class="getLevelColor(item) + ' darken-4'"
                            class="d-flex flex-row"
                          >
                            {{ item.level }}
                          </v-avatar>
                          <p class="mt-4 mr-3">Level</p>
                          <v-icon x-small color="red px-2" v-if="item.hidden"
                            >mdi-eye-off</v-icon
                          >
                        </v-chip>
                      </v-row></v-container
                    >
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
                    Select a Level
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
                        :class="getLevelColor(selected)"
                        text-color="white"
                      >
                        <v-avatar
                          left
                          :class="getLevelColor(selected) + ' darken-4'"
                        >
                          {{ selected.level }}
                        </v-avatar>
                        Level
                      </v-chip>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="mt-3" tag="v-card-text"
                      ><b>Name:</b> {{ selected.name }}
                    </v-row>
                    <v-row tag="v-card-text"
                      ><b>FullName:</b> {{ selected.fullName }}
                    </v-row>
                    <v-row tag="v-card-text"
                      ><b>Count:</b> {{ selected.count }}
                    </v-row>

                    <v-row v-if="selected.level < 3">
                      <i
                        >Unfortunately. The modification of level above the
                        level 3 is not possible for the moment.</i
                      >
                    </v-row>
                    <v-row
                      class="mt-6 justify-center"
                      v-if="selected.level >= 3"
                    >
                      <div class="text-center">
                        <v-btn
                          small
                          rounded
                          color="success"
                          dark
                          :disabled="selected.level < 2"
                          @click="createLevel(selected)"
                        >
                          <v-icon left>
                            mdi-plus
                          </v-icon>
                          Add a child
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="selected.level < 3"
                          @click="editLevel(selected)"
                        >
                          <v-icon left>
                            mdi-pencil
                          </v-icon>
                          Modify level
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          @click="openMergeModal()"
                        >
                          <v-icon left>
                            mdi-merge
                          </v-icon>
                          Merge level
                        </v-btn>
                        <v-btn
                          v-if="!selected.hidden"
                          class="mx-3"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="selected.level < 3"
                          :loading="hidingLevel"
                          @click="hideLevel(selected)"
                        >
                          <v-icon left>
                            mdi-eye-off
                          </v-icon>
                          Hide level
                        </v-btn>
                        <v-btn
                          v-if="selected.hidden"
                          class="ma-2"
                          rounded
                          small
                          color="primary"
                          dark
                          :disabled="selected.level < 3"
                          :loading="hidingLevel"
                          @click="unhideLevel(selected)"
                        >
                          <v-icon left>
                            mdi-eye
                          </v-icon>
                          Display level
                        </v-btn>

                        <v-btn
                          rounded
                          small
                          color="warning"
                          :disabled="selected.count > 0"
                        >
                          Delete level
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card>
                </v-scroll-y-transition>
              </v-col>
            </v-row>
            <!-- Level Edit / creation -->
            <v-dialog v-model="dialog" persistent max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">{{ editionType }} a level</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Name*"
                          v-model="editItem.name"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Current level ( Auto computed )"
                          v-model="editItem.level"
                          disabled
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          rows="2"
                          label="FullName ( Auto generated )"
                          disabled
                          :value="
                            (parentItem ? parentItem.fullName + '##' : '') +
                              editItem.name
                          "
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <p>Pick a color :</p>
                        <v-color-picker
                          class="ma-2"
                          hide-canvas
                          v-model="colorPicker"
                          @update:color="
                            editItem.color =
                              colorPicker && colorPicker.rgba
                                ? `rgb(${colorPicker.rgba.r},${colorPicker.rgba.g},${colorPicker.rgba.b})`
                                : 'rgb(0,0,0)'
                          "
                        ></v-color-picker>
                        <p>Color: {{ editItem.color }}</p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          rows="2"
                          label="Full Shade ( Auto computed )"
                          disabled
                          :value="
                            (parentItem ? parentItem.shade + '##' : '') +
                              editItem.color
                          "
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeEditDialog()">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="saveLevel()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
          <DemeterTile></DemeterTile>
        </v-row>
      </v-container>
    </v-card-text>

    <!--  Merge modal  -->
    <LevelMergeModal
      v-bind:application="application"
      v-bind:level="selected"
      v-bind:dialog="mergeDialog"
      @close="mergeDialog = false"
    ></LevelMergeModal>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import LevelController from "@/api/imaging/Level.controller";
import ILevel from "@/api/interface/imaging/Level.interface";
import DemeterTile from "../../screens/imagingTuning/tiles/DemeterTile.vue";
import LevelMergeModal from "@/components/imaging/tiles/LevelMergeModal.vue";

export default Vue.extend({
  name: "LevelExplorer",

  components: {
    DemeterTile,
    LevelMergeModal
  },

  data: () => ({
    application: "",

    tree: [],
    active: [],
    open: [],
    levels: [],
    selected: {},
    loadingRoots: false,

    mergeDialog: false,

    searchLevel: "",

    // Levels Selection
    levelItems: [
      { text: "Level 1", value: 1 },
      { text: "Level 2", value: 2 },
      { text: "Level 3", value: 3 },
      { text: "Level 4", value: 4 },
      { text: "Level 5", value: 5 }
    ],

    selectedLevel: 5,

    // Hidden levels
    hiddenLevels: [],

    // Snackbar
    snackbarInfo: false,
    textSnackBar: "",

    // Edit Dialog
    colorPicker: {},
    editionType: "",
    dialog: false,
    parentItem: null as ILevel,
    editItem: {} as ILevel,

    // Hiding level
    hidingLevel: false
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
    openMergeModal() {
      if (this.application == "") return;
      this.mergeDialog = true;
    },

    onCloseMergeDialog(args) {
      if (args) {
        this.snackbarInfo = true;
        this.textSnackBar =
          "Level merged successfully. Refresh Imaging in few seconds (Make sure the level agent is running)";
      }

      this.mergeDialog = false;
    },

    async editLevel(item: ILevel) {
      this.parentItem = await LevelController.fetchParent(
        this.application,
        item
      );

      this.editionType = "Edit ";
      this.editItem = Object.assign({}, item);

      this.dialog = true;
    },

    createLevel(parentItem: ILevel) {
      this.editionType = "Create ";
      this.parentItem = parentItem;
      this.editItem = {};
      // remove name from fullName
      this.editItem._id = -1;
      this.editItem.level = parentItem.level + 1;

      this.dialog = true;
    },

    saveLevel() {
      // treat level
      this.editItem.fullName =
        (this.parentItem ? this.parentItem.fullName + "##" : "") +
        this.editItem.name;
      this.editItem.shade =
        (this.parentItem ? this.parentItem.shade + "##" : "") +
        this.editItem.color;

      if (this.editItem._id != -1) {
        LevelController.updateLevel(this.application, this.editItem)
          .then((res: ILevel) => {
            this.snackbarInfo = true;
            this.textSnackBar = "Successfully updated level.";
          })
          .catch(err => {
            console.error("Failed to update the level : ", err);
            this.snackbarInfo = true;
            this.textSnackBar = "Failed to update the level : " + err;
          })
          .finally(() => {
            this.editItem = {};
            this.parentItem = {};
            this.dialog = false;
            this.refresh();
          });
      } else {
        LevelController.createLevel(
          this.application,
          this.parentItem._id,
          this.editItem
        )
          .then((res: ILevel) => {
            this.snackbarInfo = true;
            this.textSnackBar = "Creation of level is a success.";
          })
          .catch(err => {
            console.error("Failed to create the level : ", err);
            this.snackbarInfo = true;
            this.textSnackBar = "Failed to create the level : " + err;
          })
          .finally(() => {
            this.editItem = {};
            this.parentItem = {};
            this.dialog = false;
            this.refresh();
          });
      }
    },

    async hideLevel(level: ILevel) {
      this.hidingLevel = true;
      try {
        await LevelController.hideLevel(this.application, level);
        this.textSnackBar = "Level has been hidden successfully";
        this.refresh();
      } catch (err) {
        this.textSnackBar = err;
      } finally {
        this.snackbarInfo = true;
        this.hidingLevel = false;
      }
    },

    async unhideLevel(level: ILevel) {
      this.hidingLevel = true;
      try {
        await LevelController.unhideLevel(this.application, level);
        this.textSnackBar = "Level has been recovered successfully";
        this.refresh();
      } catch (err) {
        this.textSnackBar = err;
      } finally {
        this.snackbarInfo = true;
        this.hidingLevel = false;
      }
    },

    closeEditDialog() {
      this.editItem = {};
      this.dialog = false;
    },

    focusLevel(item) {
      this.selected = item;
    },

    getLevelColor(level: ILevel) {
      // If hidden return grey
      if (level.hidden) return "grey";

      // Else return a color based on the depth
      const depth = level.level;
      switch (depth) {
        case 1:
          return "red";
        case 2:
          return "orange";
        case 3:
          return "yellow";
        case 4:
          return "green";
        case 5:
          return "blue";
        default:
          return "black";
      }
    },

    /**
     * Get levels
     */
    async getLevels() {
      if (this.application == "") return;

      try {
        this.loadingRoots = true;
        this.levels = await LevelController.findLevelByDepth(
          this.application,
          this.selectedLevel
        );
      } catch (error) {
        console.error("Failed to retrieve levels of the application.", error);
        this.snackbarInfo = true;
        this.textSnackBar = error;
      } finally {
        this.loadingRoots = false;
      }
    },

    refresh() {
      this.selected = null;
      this.getLevels();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },

    selectedLevel: async function(newValue: string) {
      this.getLevels();
    },

    searchLevel: async function(newValue: string) {
      if (newValue && newValue.length > 0) {
        this.levels = await LevelController.findLevelByName(
          this.application,
          newValue
        );
      } else {
        // No search string
        this.getLevels();
      }
    }
  }
});
</script>
