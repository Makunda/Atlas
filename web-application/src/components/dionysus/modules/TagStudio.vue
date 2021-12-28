<template>
  <v-container class="ml-5">
    <v-card>
      <!-- Introduction Section -->
      <v-card-title>
        <p class="text-h3 text--primary3 pb-3">
          <span class="font-weight-light pr-1">Tag creator studio</span>
        </p>
      </v-card-title>
      <v-card-subtitle class="ml-3"
        >In this creator studio you'll be able to create your own Demeter
        recommendations ,in order to enrich your configuration, and display more
        information on CAST Imaging System.<br />
        For more information on tags and documents, please refer to the official
        <a href="#">CAST Imaging documentation</a>.
      </v-card-subtitle>
      <v-card-text>
        <v-container>
          <v-row>
            <v-expand-x-transition>
              <v-col
                v-show="!editMode"
                :cols="editMode ? 0 : 6"
                transition="scale-transition"
              >
                <v-treeview
                  v-model="tree"
                  :items="useCasesTree"
                  expand-icon="mdi-chevron-down"
                  open-on-click
                  return-object
                  selected-color="indigo"
                >
                  <template v-slot:prepend="{ item }">
                    <v-icon v-if="!item.isUseCase">
                      mdi-label-variant
                    </v-icon>
                  </template>

                  <template slot="label" slot-scope="{ item }">
                    <p v-if="item.isUseCase" class="pt-4">{{ item.title }}</p>
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
                              color="blue lighten-2"
                              icon
                              small
                              text
                              v-bind="attrs"
                              v-on="on"
                              v-on:click="editItem(item)"
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
                              color="red lighten-2"
                              icon
                              small
                              text
                              v-bind="attrs"
                              v-on="on"
                              v-on:click="removeItem(item)"
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
                    <v-card class="mx-auto pa-3">
                      <v-card-text>
                        <v-row>
                          <p class="display-1 text--primary">
                            Recommendation creation
                          </p>
                          <v-spacer></v-spacer>
                          <v-btn
                            v-show="editMode"
                            class="ma-2 mr-5"
                            dark
                            small
                            @click="close"
                          >
                            <v-icon dark left> mdi-minus-circle</v-icon>
                            Close
                          </v-btn>
                        </v-row>
                        <div class="text--primary">
                          Select the type of the recommendation to create
                        </div>

                        <!-- Forms -->
                        <!-- Tag Form -->
                        <v-expand-x-transition>
                          <v-form
                            v-show="editMode"
                            ref="form"
                            class="pa-4"
                            lazy-validation
                          >
                            <v-text-field
                              v-model="group.name"
                              :rules="[v => !!v || 'Name is required']"
                              label="Name of the rule"
                              outlined
                              required
                            ></v-text-field>
                            <v-textarea
                              v-model="group.description"
                              label="Associated description"
                              name="associatedDescription"
                              outlined
                              placeholder="Type here the descirption assoicated to your tag..."
                            ></v-textarea>
                            <v-text-field
                              v-model="group.groupName"
                              :rules="[v => !!v || 'Group is required']"
                              label="Name of the group that will be created"
                              outlined
                              required
                            ></v-text-field>
                            <v-textarea
                              v-model="group.cypherRequest"
                              :rules="[
                                v => !!v || 'Associated request is required'
                              ]"
                              label="Associated Request"
                              name="cypherRequest"
                              outlined
                              placeholder="Type here your neo4j Cypher request..."
                              @change="validRequest = false"
                            ></v-textarea>
                            <v-text-field
                              v-model="group.cypherRequestReturn"
                              :rules="[v => !!v || 'Return value is required']"
                              label="Name of the returned value"
                              outlined
                              required
                              @change="validRequest = false"
                            ></v-text-field>
                            <v-select
                              v-model="selectedUseCaseId"
                              :items="usecases"
                              :rules="[
                                v => !!v || 'You must select a parent use case'
                              ]"
                              item-text="title"
                              item-value="id"
                              label="Select the parent use case"
                              persistent-hint
                              single-line
                            ></v-select>
                            <v-checkbox
                              v-model="group.active"
                              class="pl-5"
                              label="Set recommendation as active"
                            ></v-checkbox>
                            <v-checkbox
                              v-model="group.selected"
                              class="pl-5"
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
                        </v-expand-x-transition>
                        <div v-show="!editMode">
                          <h3 class="ma-auto">
                            Please select a tag or
                            <v-btn
                              class="ml-3"
                              color="primary"
                              dark
                              small
                              @click="createItem"
                            >
                              Create a new recommendation
                            </v-btn>
                          </h3>
                        </div>

                        <!-- Use Case Selection -->

                        <!-- Request validity -->
                        <v-row
                          v-if="validityError && validityError.length != 0"
                          class="pa-5"
                        >
                          <p class="red--text">
                            {{ validityError }}
                          </p>
                        </v-row>

                        <!-- Creation Error -->
                        <v-row
                          v-if="creationError && creationError.length != 0"
                          class="pa-5"
                        >
                          <v-alert
                            :value="creationError.length != 0"
                            border="top"
                            color="pink"
                            dark
                            transition="scale-transition"
                            type="error"
                          >
                            {{ creationError }}
                          </v-alert>
                        </v-row>
                      </v-card-text>

                      <v-card-actions v-show="editMode">
                        <v-btn
                          :disabled="loadingValidity"
                          :loading="loadingValidity"
                          class="ma-2"
                          color="success"
                          @click="checkValidity()"
                        >
                          Test validity
                          <template v-slot:loader>
                            <span>Loading...</span>
                          </template>
                        </v-btn>
                        <v-btn
                          :disabled="loadingCreation || !validRequest"
                          :loading="loadingCreation"
                          class="ma-2"
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
                  class="ma-2 mr-5"
                  dark
                  small
                  @click="showAssistant = false"
                >
                  <v-icon dark left> mdi-minus-circle</v-icon>
                  Close
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
                        :value="tagAssistsItems[selectedTagAssist].template"
                        class="pa-2"
                        height="200px"
                        label="Template"
                        outlined
                      ></v-textarea>
                      <v-row
                        v-if="tagAssistsItems[selectedTagAssist].explanation"
                        class="px-4"
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
          >Are you sure you want to delete this item?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK
          </v-btn>
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
import { Vue } from 'vue-property-decorator';
import { Group } from '@/api/interface/extensions/paris/Group';
import { UseCase } from '@/api/interface/extensions/paris/UseCase';
import { UseCaseController } from '@/api/controllers/extensions/paris/UseCaseController';
import { GroupController } from '@/api/controllers/extensions/paris/GroupController';

export default Vue.extend({
  name: 'TagStudio',

  created() {
    this.initialize();
  },

  data: () => ({
    // Use case Tree
    usecases: [] as UseCase[],
    useCasesTree: [],
    tree: [],
    activeItems: [],

    // snackbarInfo
    snackbarInfo: false,
    textSnackBar: '',

    // dialogDelete
    dialogDelete: false,

    // Assistant
    showAssistant: false,
    selectedTagAssist: 0,
    tagAssistsItems: [
      {
        title: 'Group by Type',
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.Type CONTAINS 'JPA' RETURN n as node",
        explanation:
          "The request will match all the objects where the type contains the string 'JPA'. ",
      },
      {
        title: 'Group by Name',
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.FullName CONTAINS 'javax.persistence' RETURN n as node",
        explanation: '',
      },
      {
        title: 'Group by Relationship and Type ',
        template:
          "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.InternalType='SQLScriptProcedure' AND NOT (n)-[:USE]->(:Object { InternalType : 'SQLScriptTable'}) AND NOT (n)-[:CALL]->(:Object { InternalType : 'SQLScriptProcedure'}) RETURN n as node",
        explanation: '',
      },
    ],

    // Loaders
    loadingValidity: false,
    loadingCreation: false,

    selectedUseCaseId: -1 as number,
    testPassed: false,
    items: ['Tag', 'Document'] as string[],

    // Form properties
    recoType: 'Tag' as string,

    editMode: false,
    editedIndex: -1,
    group: {} as Group,
    recoForm: {},

    // Validation
    validRequest: false,
    validityError: '',
    creationError: '',
  }),

  methods: {
    initialize() {
      this.loadUseCase();
      this.getRootUseCase();
    },

    close() {
      this.editMode = false;
      this.$nextTick(() => {
        this.group = { ...{} as Group };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.editMode = false;
      this.$nextTick(() => {
        this.group = { ...{} as Group };
        this.editedIndex = -1;
      });
    },

    removeItem(item) {
      this.dialogDelete = true;
      this.validRequest = false;
      this.editedIndex = this.items.indexOf(item);
      this.group = { ...item };
    },

    deleteItemConfirm() {
      GroupController.deleteGroup(this.group)
        .then((res: boolean) => {
          this.textSnackBar = 'Successfully deleted the group.';
          this.snackbarInfo = true;
          this.initialize();
        })
        .catch((err) => {
          this.textSnackBar = `Failed to delete the Group. Error: ${err}`;
          this.snackbarInfo = true;
        });

      this.closeDelete();
    },

    editItem(item: Group) {
      this.validRequest = false;
      this.editMode = true;
      this.editedIndex = item.id;
      this.group = { ...item };
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
          .then((res: Group) => {
            this.textSnackBar = 'Successfully updated the group.';
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
          .then((res: Group) => {
            this.textSnackBar = 'Successfully added the group.';
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

    async getChildren(item): Promise<UseCase> {
      item.children = await UseCaseController.getAttachedUseCase(item.id);
      for (const i in item.children) {
        item.children[i] = await this.getChildren(item.children[i]);
      }

      const groups = await UseCaseController.getAttachedGroups(item.id);
      item.children.push(...groups);
      item.isUseCase = true;
      return item;
    },

    getRootUseCase() {
      UseCaseController.getRootUseCase()
        .then(async (res: UseCase[]) => {
          if (res) {
            this.useCasesTree = [];
            for (const i in res) {
              this.useCasesTree.push(await this.getChildren(res[i]));
            }
          }
        })
        .catch((err) => {
          console.error('Failed to retrieve the root use cases', err);
        });
    },

    loadUseCase() {
      UseCaseController.getAllUseCase()
        .then((useCases: UseCase[]) => {
          this.usecases = useCases;
        })
        .catch((err) => {
          console.error('Error trying to retrieve use cases tree:', err);
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
        this.group.cypherRequestReturn,
      )
        .then((res: boolean) => {
          this.validRequest = res;
          if (!res) {
            this.validityError = 'Failed to verify the cypher query above, please follow the Cypher Guidelines.';
          }
        })
        .catch((err) => {
          console.error('Failed to add the request.');
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
        this.creationError = '';
      }, 5000);
    },
  },
});
</script>
