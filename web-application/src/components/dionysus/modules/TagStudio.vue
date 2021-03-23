<template>
  <v-container class="ml-5">
    <v-card>
      <!-- Introduction Section -->
      <v-card-title>
        Tag creator studio
      </v-card-title>
      <v-card-subtitle
        >In this creator studio you'll be able to create your own Demeter
        recommendations ,in order to enrich your configuration, and display more
        informations on CAST Imaging System.<br />
        <br />
        For more informations on tags and documents, please refer to the
        official <a href="#">CAST Imaging documentation</a>.</v-card-subtitle
      >
      <v-card-text>
        <v-container>
          <v-row>
            <v-expand-x-transition>
              <v-col
                :cols="editMode ? 0 : 6"
                v-show="!editMode"
                transition="scale-transition"
              >
                <v-treeview
                  v-model="tree"
                  :items="useCasesTree"
                  selected-color="indigo"
                  open-on-click
                  return-object
                  expand-icon="mdi-chevron-down"
                >
                  <template v-slot:prepend="{ item }">
                    <v-icon v-if="!item.isUseCase">
                      mdi-label-variant
                    </v-icon>
                  </template>

                  <template slot="label" slot-scope="{ item }">
                    <p class="pt-4" v-if="item.isUseCase">{{ item.title }}</p>
                    <!-- Diplay a group with actions -->
                    <div v-else>
                      <v-row class="px-8">
                        <div class="pt-4">
                          <p>Tag {{ item.name }}</p>
                        </div>
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
                              v-on:click="removeItem(item)"
                              v-bind="attrs"
                              v-on="on"
                            >
                              <v-icon>mdi-timeline-remove-outline</v-icon>
                            </v-btn>
                          </template>
                          <span>Remove the use case</span>
                        </v-tooltip>
                      </v-row>
                    </div>
                  </template>
                </v-treeview>
              </v-col>
            </v-expand-x-transition>
            <v-expand-x-transition>
              <v-col :cols="editMode ? 12 : 6" transition="scale-transition">
                <!-- Tag assistant -->

                <!-- Creation assistant section -->
                <v-row>
                  <!-- Tag / Document assistant  -->
                  <v-col>
                    <v-card class="mx-auto">
                      <v-card-text>
                        <v-row>
                          <p class="display-1 text--primary">
                            Recommendation creation
                          </p>
                          <v-spacer></v-spacer>
                          <v-btn
                            v-if="editMode"
                            @click="close"
                            class="ma-2 mr-5"
                            small
                            dark
                          >
                            <v-icon dark left> mdi-minus-circle </v-icon>Close
                          </v-btn>
                        </v-row>
                        <div class="text--primary">
                          Select the type of the recommendation to create
                        </div>

                        <!-- Forms -->
                        <!-- Tag Form -->
                        <v-form
                          v-if="editMode"
                          class="pa-4"
                          ref="form"
                          lazy-validation
                        >
                          <v-text-field
                            outlined
                            v-model="group.name"
                            :rules="[(v) => !!v || 'Name is required']"
                            label="Name of the rule"
                            required
                          ></v-text-field>
                          <v-textarea
                            outlined
                            name="associatedDescription"
                            v-model="group.description"
                            label="Associated description"
                            placeholder="Type here the descirption assoicated to your tag..."
                          ></v-textarea>
                          <v-text-field
                            outlined
                            v-model="group.groupName"
                            :rules="[(v) => !!v || 'Group is required']"
                            label="Name of the group that will be created"
                            required
                          ></v-text-field>
                          <v-textarea
                            outlined
                            name="cypherRequest"
                            v-model="group.cypherRequest"
                            label="Associated Request"
                            :rules="[
                              (v) => !!v || 'Associated request is required',
                            ]"
                            placeholder="Type here your neo4j Cypher request..."
                            @change="validRequest = false"
                          ></v-textarea>
                          <v-text-field
                            outlined
                            v-model="group.cypherRequestReturn"
                            :rules="[(v) => !!v || 'Return value is required']"
                            label="Name of the returned value"
                            @change="validRequest = false"
                            required
                          ></v-text-field>
                          <v-select
                            v-model="selectedUseCaseId"
                            :items="usecases"
                            item-text="title"
                            item-value="id"
                            label="Select the parent use case"
                            :rules="[
                              (v) => !!v || 'You must select a parent use case',
                            ]"
                            persistent-hint
                            single-line
                          ></v-select>
                          <v-checkbox
                            class="pl-5"
                            v-model="group.active"
                            label="Set recommendation as active"
                          ></v-checkbox>
                          <v-checkbox
                            class="pl-5"
                            v-model="group.selected"
                            label="Set recommendation as selected"
                          ></v-checkbox>
                          <v-btn
                            class="ma-2 float"
                            color="info"
                            @click="
                              showAssistant = showAssistant ? false : true
                            "
                          >
                            Open assitant
                          </v-btn>
                        </v-form>
                        <div v-show="!editMode">
                          <h3 class="ma-auto">
                            Please select a tag or
                            <v-btn
                              class="ml-3"
                              small
                              color="primary"
                              dark
                              @click="createItem"
                            >
                              Create a new recommendation
                            </v-btn>
                          </h3>
                        </div>

                        <!-- Use Case Selection -->

                        <!-- Request validity -->
                        <v-row
                          class="pa-5"
                          v-if="validityError && validityError.length != 0"
                        >
                          <p class="red--text">
                            {{ validityError }}
                          </p>
                        </v-row>

                        <!-- Creation Error -->
                        <v-row
                          class="pa-5"
                          v-if="creationError && creationError.length != 0"
                        >
                          <v-alert
                            :value="creationError.length != 0"
                            color="pink"
                            dark
                            border="top"
                            type="error"
                            transition="scale-transition"
                          >
                            {{ creationError }}
                          </v-alert>
                        </v-row>
                      </v-card-text>

                      <v-card-actions v-show="editMode">
                        <v-btn
                          class="ma-2"
                          :loading="loadingValidity"
                          :disabled="loadingValidity"
                          color="success"
                          @click="checkValidity()"
                        >
                          Test validity
                          <template v-slot:loader>
                            <span>Loading...</span>
                          </template>
                        </v-btn>
                        <v-btn
                          class="ma-2"
                          :loading="loadingCreation"
                          :disabled="loadingCreation || !validRequest"
                          color="info"
                          @click="save"
                        >
                          Create recommendation
                          <template v-slot:loader>
                            <span class="custom-loader">
                              <v-icon light>mdi-cached</v-icon>
                            </span>
                          </template>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-expand-x-transition>
          </v-row>
          <v-row v-if="showAssistant" transition="scroll-y-transition">
            <v-card class="mt-5 mx-3" width="100%">
              <v-card-title>
                Tag creator assistant
                <v-spacer></v-spacer>
                <v-btn
                  @click="showAssistant = false"
                  class="ma-2 mr-5"
                  small
                  dark
                >
                  <v-icon dark left> mdi-minus-circle </v-icon>Close
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <!-- Tag template title list -->
                  <v-row>
                    <v-col cols="3">
                      <v-list dense>
                        <v-subheader>Models</v-subheader>
                        <v-list-item-group
                          v-model="selectedTagAssist"
                          color="primary"
                        >
                          <v-list-item
                            v-for="(item, i) in tagAssistsItems"
                            :key="i"
                          >
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item.title"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-col>
                    <!-- Tag template description -->
                    <v-col cols="9">
                      <v-textarea
                        class="pa-2"
                        height="200px"
                        label="Template"
                        :value="tagAssistsItems[selectedTagAssist].template"
                        outlined
                      ></v-textarea>
                      <v-row
                        class="px-4"
                        v-if="tagAssistsItems[selectedTagAssist].explanation"
                      >
                        <p>How this request works :</p>
                        <i
                          >{{ tagAssistsItems[selectedTagAssist].explanation }}
                        </i>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

    <!-- Pop up -->
    <!-- Confirm delete -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
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
  </v-container>
</template>

<script lang="ts">
import { IGroup } from "@/api/interface/paris/group.interface";
import { IUseCase } from "@/api/interface/paris/useCase.interface";
import { UseCaseController } from "@/api/paris/UseCase.controller";
import { GroupController } from "@/api/paris/Group.controller";
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "TagStudio",

  created() {
    this.initialize();
  },

  data: () => ({
    // Use case Tree
    usecases: [] as IUseCase[],
    useCasesTree: [],
    tree: [],
    activeItems: [],

    //snackbarInfo
    snackbarInfo: false,
    textSnackBar: "",

    //dialogDelete
    dialogDelete: false,

    // Assistant
    showAssistant: false,
    selectedTagAssist: 0,
    tagAssistsItems: [
      {
        title: "Group by Type",
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.Type CONTAINS 'JPA' RETURN n as node",
        explanation:
          "The request will match all the objects where the type contains the string 'JPA'. ",
      },
      {
        title: "Group by Name",
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.FullName CONTAINS 'javax.persistence' RETURN n as node",
        explanation: "",
      },
      {
        title: "Group by Relationship and Type ",
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.InternalType='SQLScriptProcedure' AND NOT (n)-[:USE]->(:Object { InternalType : 'SQLScriptTable'}) AND NOT (n)-[:CALL]->(:Object { InternalType : 'SQLScriptProcedure'}) RETURN n as node",
        explanation: "",
      },
    ],

    // Loaders
    loadingValidity: false,
    loadingCreation: false,

    selectedUseCaseId: -1 as number,
    testPassed: false,
    items: ["Tag", "Document"] as string[],

    // Form properties
    recoType: "Tag" as string,

    editMode: false,
    editedIndex: -1,
    group: {} as IGroup,
    recoForm: {},

    // Validation
    validRequest: false,
    validityError: "",
    creationError: "",
  }),

  methods: {
    initialize() {
      this.loadUseCase();
      this.getRootUseCase();
    },

    close() {
      this.editMode = false;
      this.$nextTick(() => {
        this.group = Object.assign({}, {} as IGroup);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.editMode = false;
      this.$nextTick(() => {
        this.group = Object.assign({}, {} as IGroup);
        this.editedIndex = -1;
      });
    },

    removeItem(item) {
      this.dialogDelete = true;
      this.validRequest = false;
      this.editedIndex = this.items.indexOf(item);
      this.group = Object.assign({}, item);
    },

    deleteItemConfirm() {
      GroupController.deleteGroup(this.group)
        .then((res: boolean) => {
          this.textSnackBar = "Successfully deleted the group.";
          this.snackbarInfo = true;
          this.initialize();
        })
        .catch((err) => {
          this.textSnackBar = `Failed to delete the Group. Error: ${err}`;
          this.snackbarInfo = true;
        });

      this.closeDelete();
    },

    editItem(item) {
      this.validRequest = false;
      this.editMode = true;
      this.editedIndex = this.items.indexOf(item);
      this.group = Object.assign({}, item);
      this.dialog = true;
    },

    createItem() {
      this.validRequest = false;
      this.editMode = true;
      this.editedIndex = -1;
      this.group = {};
      this.dialog = true;
    },

    save() {
      this.loadingCreation = true;
      this.group.idUseCase = this.selectedUseCaseId;
      if (this.editedIndex > -1) {
        GroupController.editUseCase(this.group)
          .then((res: IGroup) => {
            this.textSnackBar = "Successfully updated the group.";
            this.snackbarInfo = true;
            this.initialize();
            this.close();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to udpdate the Category. Error: ${err}`;
            this.snackbarInfo = true;
            // Do not close
          })
          .finally(() => {
            this.loadingCreation = false;
          });
      } else {
        GroupController.addGroup(this.group)
          .then((res: IGroup) => {
            this.textSnackBar = "Successfully added the group.";
            this.snackbarInfo = true;
            this.initialize();
            this.close();
          })
          .catch((err) => {
            this.textSnackBar = `Failed to add the Category. Error: ${err}`;
            this.snackbarInfo = true;
            // Do not close
          })
          .finally(() => {
            this.loadingCreation = false;
          });
      }
    },

    async getChildren(item): Promise<IUseCase> {
      item.children = await UseCaseController.getAttachedUseCase(item.id);
      for (const i in item.children) {
        item.children[i] = await this.getChildren(item.children[i]);
      }

      const groups = await UseCaseController.getAttachedGroups(item.id);
      console.log("got groups ", groups);
      item.children.push(...groups);
      item.isUseCase = true;
      return item;
    },

    getRootUseCase() {
      UseCaseController.getRootUseCase()
        .then(async (res: IUseCase[]) => {
          if (res) {
            this.useCasesTree = [];
            for (const i in res) {
              this.useCasesTree.push(await this.getChildren(res[i]));
            }
          }
        })
        .catch((err) => {
          console.error("Failed to retrieve the root use cases", err);
        });
    },

    loadUseCase() {
      UseCaseController.getAllUseCase()
        .then((useCases: IUseCase[]) => {
          this.usecases = useCases;
        })
        .catch((err) => {
          console.error("Error trying to retrieve use cases tree:", err);
        });
    },

    updateSelectedItem(val: number) {
      this.selectedUseCaseId = val;
    },

    /**
     * Push the recommendation to the actual configuration
     */
    createRecommendation() {
      this.loadingCreation = true;
    },

    /**
     * Check the validty of the request in the form
     */
    checkValidity() {
      this.loadingValidity = true;
      UseCaseController.checkValidity(
        this.group.cypherRequest,
        this.group.cypherRequestReturn
      )
        .then((res: boolean) => {
          this.validRequest = res;
          if (!res) {
            this.validityError =
              "Failed to verify the cypher query above, please follow the Cypher Guidelines.";
          }
        })
        .catch((err) => {
          console.error("Failed to add the request.");
        })
        .finally(() => {
          this.loadingValidity = false;
        });
    },

    /**
     * Launch an alert
     */
    launchAlert(text: string) {
      this.creationError = text;
      setTimeout(() => {
        this.creationError = "";
      }, 5000);
    },
  },
});
</script>
