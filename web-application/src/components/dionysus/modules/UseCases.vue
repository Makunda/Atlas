<template>
  <v-container>
    <v-card width="100%">
      <v-card-title>
        Use Cases Manager
        <v-spacer></v-spacer>
        <v-btn icon color="green" @click="refresh">
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </v-card-title>

      <v-row class="pa-4" justify="space-between">
        <v-col cols="7">
          <v-row>
            <v-treeview
              :items="items"
              activatable
              open-on-click
              transition
            >
              <template v-slot:prepend="{ }">
                <v-icon> mdi-folder-open-outline </v-icon>

              </template>

              <template slot="label" slot-scope="{ item }" @click="selected">
                <v-container>
                  <v-row>
                    <!-- Title of the row -->
                    <p class="mt-4">
                      {{ item.title }}
                      <span v-if="!item.active" class="red--text">
                        ( Deactivated )
                      </span>
                    </p>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="ma-2"
                          text
                          small
                          icon
                          v-on:click="editItem(item)"
                          color="blue lighten-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="ma-2"
                          text
                          small
                          icon
                          color="red lighten-2"
                          v-on:click="deleteItem(item)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-timeline-remove-outline</v-icon>
                        </v-btn>
                      </template>
                      <span>Remove the use case</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="ma-2"
                          text
                          small
                          icon
                          color="green lighten-2"
                          v-on:click="createItemUnderParent(item)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-folder-plus</v-icon>
                        </v-btn>
                      </template>
                      <span>Add a new use case under it</span>
                    </v-tooltip>
                  </v-row>
                </v-container>
              </template>
            </v-treeview>
          </v-row>
          <v-row class="pa-4">
            <!-- Add button -->
            <v-col cols="1">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-2"
                    small
                    fab
                    dark
                    color="indigo"
                    @click="createItem"
                    v-on="on"
                    v-bind="attrs"
                  >
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </template>
                <span>Add a new use case</span>
              </v-tooltip></v-col
            >

            <v-col cols="3"><p class="mt-3">Add a new use case</p></v-col>
          </v-row>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
            >
              Select a use case
            </div>
            <v-card
              v-else
              :key="selected.id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
            >
              <v-card-text>
                {{ selected }}
              </v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-scroll-y-transition>
        </v-col>
      </v-row>

      <!-- Create / Edit Dialog  -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{ titleEditBox }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.title"
                    label="Title*"
                    hint="Title of the use case ( displayed in the tree )"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.description"
                    label="Description*"
                    hint="Brief description of the use case"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="editedItem.categories"
                    :items="['Cloud', 'Pilot', 'SQL']"
                    outlined
                    dense
                    chips
                    label="Categories*"
                    hint="Apply a categories used for search"
                    small-chips
                    required
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-row class="mr-6">
                    <v-checkbox
                      class="mr-2"
                      v-model="editedItem.active"
                      label="Active"
                    ></v-checkbox>

                    <v-checkbox
                      v-model="editedItem.selected"
                      label="Selected"
                    ></v-checkbox>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

       <!-- Delete Dialog  -->
      <v-dialog v-model="dialogDelete" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Delete a use case</span>
          </v-card-title>
          <v-card-text>
            <v-container>
             <p v-html="contentDeleteBox"></p>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete" :loading="loadingDelete">
              Close
            </v-btn>
            <v-btn color="red darken-1" text @click="confirmDelete">
              Delete
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
  </v-container>
</template>

<script lang="ts">
import { UseCaseController } from "@/api/paris/UseCase.controller";
import { IUseCase } from "@/api/interface/paris/useCase.interface";
import Vue from "vue";

export default Vue.extend({
  name: "UseCases",

  data: () => ({
    active: null,
    items: [] as IUseCase[],
    open: null as IUseCase,
    selected: null as IUseCase,

    editedItem: {
      title: "",
      description: "",
      categories: [],
      active: false,
      selected: false,
    } as IUseCase,

    defaultItem: {
      title: "",
      description: "",
      categories: [],
      active: false,
      selected: false,
    } as IUseCase,

    titleEditBox: "",
    contentDeleteBox: "",
    
    parentUseCaseId: -1,
    editedIndex: 0,
    dialog: false,
    dialogDelete: false,
    loadingDelete: false,

    snackbarInfo: false,
    textSnackBar: "",
  }),

  methods: {
    async getChildren(item): Promise<IUseCase> {

      return await UseCaseController.getAttachedUseCase(item.id).then(async (res: IUseCase[]) => {
        item.children = res;

        // Treat childrent
        for(const i in item.children ) {
          item.children[i] = await this.getChildren(item.children[i]);
        }

        return item;
      }).catch((err) => {
        console.log(`Failed to fetch the children for use case with id : ${item.id}`, err);
        return item;
      });
    },

    getRootUseCase() {
      UseCaseController.getRootUseCase()
        .then(async (res: IUseCase[]) => {
          if (res) {
            this.items = [];
            for(const i in res) {
              this.items.push(await this.getChildren(res[i]));
            }
          }
        })
        .catch((err) => {
          console.error("Failed to retrieve the root use cases", err);
        });
    },

    selectItem (item) {
        this.selected = item;
      },

    createItem() {
      this.titleEditBox = "Create new Use case";
      this.editedIndex = -1;
      this.parentUseCaseId = -1;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },

    createItemUnderParent(item) {
      this.titleEditBox = `Create new Use case under ${item.title}`;
      this.editedIndex = -1;
      this.parentUseCaseId = item.id;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = true;
    },

    editItem(item) {
      this.titleEditBox = `Edit the use case : ${item.title}`;
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.contentDeleteBox = `You're about to delete the use case with name <strong>${item.title}</strong>. Are you sure that you want to delete it ?  `
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    confirmDelete() {
      this.loadingDelete = true;
      UseCaseController.deleteUseCase(this.editedItem)
          .then((res: boolean) => {
            if(res) {
              this.textSnackBar = "Successfully deleted the use case.";
            } else {
              this.textSnackBar = "Failed to delete the use case.";
            }
            this.snackbarInfo = true;
            this.refresh();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to deleted the use case. Error: ${err}`;
            this.snackbarInfo = true;
          }).finally(() => {
            this.loadingDelete = false;
            this.closeDelete();
          });
    },

    close() {
      this.dialog = false;
      this.parentUseCaseId = -1;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
    },

    save() {
      if(this.parentUseCaseId != -1 && this.editedIndex <= -1) {
        UseCaseController.addUseCaseWithParent(this.editedItem, this.parentUseCaseId )
          .then((res: IUseCase) => {
            this.textSnackBar = "Successfully attached a new use case.";
            this.snackbarInfo = true;
            this.refresh();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to attach the new use case. Error: ${err}`;
            this.snackbarInfo = true;
          });
      }
      else if (this.editedIndex > -1) {
        UseCaseController.editUseCase(this.editedItem)
          .then((res: IUseCase) => {
            this.textSnackBar = "Successfully updated the use case.";
            this.snackbarInfo = true;
            this.refresh();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to update the use case. Error: ${err}`;
            this.snackbarInfo = true;
          });
      } else {
        UseCaseController.addUseCase(this.editedItem)
          .then((res: IUseCase) => {
            this.textSnackBar = "Successfully added the use case.";
            this.snackbarInfo = true;
            this.refresh();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to add the use case. Error: ${err}`;
            this.snackbarInfo = true;
          });
      }
      this.close();
    },

    refresh() {
      this.getRootUseCase();
    },
  },

  mounted() {
    this.refresh();
  },
});
</script>
