<template>
  <v-card>
    <v-card-title>
      Review the level of the application.
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-card>
          <v-card-title class="charcoal white--text headline">
            Levels viewer
          </v-card-title>
          <v-row class="pa-4" justify="space-between">
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
                        :class="'mt-4 ml-3 ' + getLevelColor(item.level)"
                        text-color="white"
                      >
                        <v-avatar
                          left
                          :class="getLevelColor(item.level) + ' darken-4'"
                        >
                          {{ item.level }}
                        </v-avatar>
                        Level
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
                      :class="getLevelColor(selected.level)"
                      text-color="white"
                    >
                      <v-avatar
                        left
                        :class="getLevelColor(selected.level) + ' darken-4'"
                      >
                        {{ selected.level }}
                      </v-avatar>
                      Level
                    </v-chip>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="text-left" tag="v-card-text">
                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                      Name:
                    </v-col>
                    <v-col>{{ selected.name }}</v-col>
                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                      FullName:
                    </v-col>
                    <v-col>{{ selected.fullName }}</v-col>
                    <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">
                      Count:
                    </v-col>
                    <v-col>{{ selected.count }}</v-col>
                  </v-row>
                  <v-row v-if="selected.level < 3">
                    <i>Unfortunately. The modification of level above the level 3 is not possible for the moment.</i>
                  </v-row>
                  <v-row class="mt-6">
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
                        class="mx-3"
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
                        rounded
                        small
                        color="warning"
                        :disabled="selected.count > 0"
                        dark
                      >
                        Delete level
                      </v-btn>
                    </div>
                  </v-row>
                </v-card>
              </v-scroll-y-transition>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-card-text>
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
                  v-model="editItem.fullName"
                  :value="
                    (parentItem ? parentItem.fullName : editItem.fullName) +
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
                  v-model="editItem.shade"
                  :value="editItem.shade + editItem.color"

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
        <v-btn color="blue" text v-bind="attrs" @click="snackbarInfo = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import LevelController from "@/api/imaging/Level.controller";
import ILevel from "@/api/interface/imaging/Level.interface";

export default Vue.extend({
  name: "LevelExplorer",

  data: () => ({
    tree: [],
    active: [],
    open: [],
    levels: [],
    selected: null,
    loadingRoots: false,

    // Snackbar
    snackbarInfo: false,
    textSnackBar: "",

    // Edit Dialog
    colorPicker: {},
    editionType: "",
    dialog: false,
    parentItem: null as ILevel,
    editItem: {} as ILevel
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
    editLevel(item: ILevel) {
      this.editionType = "Edit ";
      this.editItem = Object.assign({}, item);
      // remove name from fullName
      item.fullName = item.fullName.substring(
        0,
        item.fullName.length - item.name.length
      );
      item.shade = item.shade.substring(
        0,
        item.shade.length - item.color.length
      );
      this.dialog = true;
    },

    createLevel(parentItem: ILevel) {
      this.editionType = "Create ";
      this.parentItem = parentItem;
      this.editItem = {};
      // remove name from fullName
      this.editItem._id = -1;
      this.editItem.fullName = parentItem.fullName + "##";
      this.editItem.shade = parentItem.shade + "##";
      this.editItem.level = parentItem.level + 1;

      this.dialog = true;
    },

    saveLevel() {
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
            this.dialog = false;
            this.refresh();
          });
      } else {
        this.snackbarInfo = true;
        this.textSnackBar = "Not implemented yet";
      }
    },

    closeEditDialog() {
      this.editItem = {};
      this.dialog = false;
    },

    focusLevel(item) {
      this.selected = item;
    },

    getLevelColor(depth: number) {
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

    getRootLevels() {
      this.loadingRoots = true;
      LevelController.getRootLevels(this.application)
        .then(async (res: ILevel[]) => {
          this.levels = [];
          for (const i in res) {
            this.levels.push(await this.getChildren(res[i]));
          }
        })
        .catch(err => {
          console.error(
            "Failed to retrieve root levels of the application.",
            err
          );
          this.snackbarInfo = true;
          this.textSnackBar = err;
        })
        .finally(() => {
          this.loadingRoots = false;
        });
    },

    async getChildren(item) {
      item.children = await LevelController.fetchChildren(
        this.application,
        item
      );

      for (const i in item.children) {
        item.children[i] = await this.getChildren(item.children[i]);
      }

      return item;
    },

    refresh() {
      this.getRootLevels();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    }
  }
});
</script>
