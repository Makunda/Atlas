<template>
  <v-card>
    <v-card-title>
      <p class="text-h3 text--primary pb-3">
        <span class="font-weight-light pr-1"
          >Inject Container blockers into</span
        >
        {{ application }}
      </p>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      Upload here the
      <strong>Excel sheet container Cloud blockers</strong> coming from Cast
      Highlight
    </v-card-subtitle>

    <v-card-text>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" class="white--text">
            <span class="white--text">Upload</span>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            <span class="white--text">Review</span>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            <span class="white--text">Confirm</span>
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12  elevation-3" height="200px">
              <v-container>
                <v-row>
                  <h4>Import the Cast Highlight Excel File</h4>
                </v-row>

                <!-- File input -->
                <v-row class="mt-8">
                  <v-file-input
                    v-model="file"
                    label="File input"
                    outlined
                    dense
                  ></v-file-input>
                </v-row>

                <!-- Progress bar during file upload -->
                <v-row v-if="fileUploading">
                  <p>Processing the file</p>
                  <v-progress-linear
                    color="light-blue"
                    height="5"
                    striped
                    indeterminate
                  ></v-progress-linear>
                </v-row>
              </v-container>
            </v-card>

            <v-btn
              color="primary"
              @click="sendFileToApi"
              :disabled="!this.file"
            >
              Send the file
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-container>
              <v-row
                class="mx-1"
                v-if="blockerList && blockerList.length !== 0"
              >
                <p>Found {{ blockerList.length }} blockers in the Export</p>
              </v-row>
              <v-row class="mx-1" v-else>
                <p>
                  No blocker was found. Make sure the file contains cloud
                  results
                </p>
              </v-row>

              <v-row>
                <v-card width="100%" class="my-4 mx-1 elevation-3">
                  <v-card-title primary-title>
                    Action panel
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row> </v-row>
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-subheader
                            >Modify file path by removing the beginning of the
                            path:</v-subheader
                          >
                        </v-col>
                        <v-col cols="10" md="7">
                          <v-text-field
                            v-model="defaultReplacement"
                            label="Remove the beginnning of the file property"
                            hint="C:\User\ABC\myApplication\..."
                            multiple
                            chips
                          ></v-text-field>
                        </v-col>
                        <v-col cols="2" md="2">
                          <v-btn color="success" @click="removeBeginning" block
                            >Remove beginnning</v-btn
                          >
                        </v-col>
                      </v-row>

                      <!-- Replacement  -->
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-subheader
                            >Modify file path using regular expression ( only
                            one group is accepted ):
                          </v-subheader>
                        </v-col>
                        <v-col cols="10" md="7">
                          <v-text-field
                            v-model="defaultRegex"
                            label="Regular expression to modify file fields"
                            multiple
                            chips
                          ></v-text-field>
                        </v-col>
                        <v-col cols="2" md="2">
                          <v-btn color="success" @click="processTags" block
                            >Apply regex</v-btn
                          >
                        </v-col>
                      </v-row>

                      <!-- Filter Technology -->
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-subheader>
                            Filter the cloud blockers based on their tehcnology
                            or type of recommendation:
                          </v-subheader>
                        </v-col>
                        <v-col cols="10" md="4">
                          <v-autocomplete
                            v-model="valuesTechnologies"
                            :items="itemsTechnologies"
                            @change="filterItems"
                            outlined
                            chips
                            small-chips
                            label="Filter Technologies"
                            multiple
                          ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-autocomplete
                            v-model="valuesRecommendations"
                            :items="itemsRecommendations"
                            @change="filterItems"
                            outlined
                            chips
                            small-chips
                            label="Filter Recommendations"
                            multiple
                          ></v-autocomplete>
                        </v-col>
                      </v-row>

                      <!-- Type of creation  -->
                      <v-row>
                        <v-col cols="12" md="3">
                          <v-subheader>Choose the type of tagging</v-subheader>
                        </v-col>
                        <v-col cols="12" md="5">
                          <v-radio-group v-model="taggingType" row>
                            <v-radio label="Regular Tag" value="tag"></v-radio>
                            <v-radio
                              label="Document"
                              value="document"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-row>

              <v-row>
                <v-card class="mb-12 mt-5 mx-1 elevation-3" width="100%">
                  <v-card-title>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search Blockers"
                      filled
                      rounded
                      single-line
                      hide-details
                    ></v-text-field>
                    <v-btn
                      text
                      color="warning"
                      :disabled="
                        !selected || (selected && selected.length === 0)
                      "
                      @click="deleteSelectedItems"
                      ><v-icon>mdi-delete</v-icon> Delete selected</v-btn
                    >
                  </v-card-title>

                  <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="blockerDisplayedList"
                    :items-per-page="20"
                    :search="search"
                    show-select
                    item-key="id"
                    class="elevation-1"
                  >
                    <template v-slot:item.file="props">
                      <v-edit-dialog
                        :return-value.sync="props.item.file"
                        large
                        persistent
                        @save="save"
                        @cancel="cancel"
                        @open="open"
                        @close="close"
                      >
                        <div>{{ props.item.file }}</div>
                        <template v-slot:input>
                          <div class="mt-4 text-h6">
                            Update File
                          </div>
                          <v-text-field
                            v-model="props.item.file"
                            label="Edit"
                            single-line
                            counter
                            autofocus
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>

                    <template v-slot:item.actions="{ item }">
                      <v-icon small @click="deleteItem(item)">
                        mdi-delete
                      </v-icon>
                    </template>
                  </v-data-table>
                </v-card>
              </v-row>

              <v-row> </v-row>
            </v-container>

            <v-btn color="primary" @click="applyTags">
              Apply Tags
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>

          <!-- STEP 3 Review the blockers  -->
          <v-stepper-content step="3">
            <v-card class="mb-12 elevation-3">
              <v-card-text> </v-card-text>
              <v-card-text>
                <v-container>
                  <v-row v-if="loadingApply" class="d-flex flex-column">
                    <p class="text-h3">
                      Applying {{ taggingType }}s on {{ application }}...
                    </p>
                    <v-progress-linear
                      class="mt-4 mb-2"
                      :value="percentageTagsApplied"
                      height="6"
                    ></v-progress-linear>
                    <p class="text-h5">
                      {{ sizeSent }} {{ taggingType }}select-all="" applied on
                      {{ sizeToSend }}
                    </p>
                    <p class="text-h5">{{ blockerNotApplied.length }} Errors</p>
                  </v-row>
                  <!-- Successful -->
                  <v-row v-if="!loadingApply && errorApplying === ''">
                    <v-container>
                      <v-row>
                        <p class="text-h3">
                          {{ sizeSent - blockerNotApplied.length }}
                          {{ taggingType }}s were applied
                        </p>
                      </v-row>
                      <v-row>
                        <p class="text-h5">
                          {{ blockerNotApplied.length }} produced an error.
                        </p>
                      </v-row>
                    </v-container>
                  </v-row>

                  <!-- Errors -->
                  <v-row
                    class="mt-3"
                    v-if="blockerNotApplied && blockerNotApplied.length > 0"
                  >
                    <p>
                      <span class="text-h5"
                        >Review blockers that have not been applied</span
                      ><br />
                      There are several different reasons that can explain the
                      errors here. <br />
                      Some file types will be processed by CAST Highlight (such
                      as configuration files) but will not exist in the in the
                      CAST Imaging ecosystem. In addition, the path to these
                      files files (for XML, Cobol, etc.) may be absolute and
                      depend on where this application has been where this
                      application was parsed. <br />
                      To solve this To solve this problem, you can rerun this
                      process and modify the path of these elements with a
                      regular expression. these elements with a regular
                      expression. You just have to remove the beginning of this
                      absolute path so that it only matches the structure the
                      structure of the application folder.
                    </p>

                    <!-- Data table to display the errors  -->
                    <v-data-table
                      max-height="500px"
                      style="width: 100%;"
                      :headers="headers"
                      :items="blockerNotApplied"
                      dense
                      item-key="id"
                      class="elevation-1"
                    >
                    </v-data-table>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-text>

    <!-- Snack bar data table -->
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import ContainerBlocker from '@/api/interface/highlight/ContainerBlocker';
import ContainerBlockerController from '@/api/controllers/highlight/ContainerBlockerController';
import flash, { FlashType } from '@/modules/flash/Flash';

export default Vue.extend({
  name: 'CloudBockersUpload',

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  data: () => ({
    application: '',
    e1: 1,
    file: null,

    search: '',
    taggingType: 'tag',

    // filters
    valuesTechnologies: [] as string[],
    itemsTechnologies: [] as string[],
    valuesRecommendations: [] as string[],
    itemsRecommendations: [] as string[],

    selected: [] as ContainerBlocker[],

    snack: false,
    snackColor: '',
    snackText: '',
    pagination: {},

    defaultRegex: '(\\w+\\.\\w+)',
    defaultReplacement: '',

    // Applying tags
    loadingApply: false,
    percentageTagsApplied: 0,

    headers: [
      {
        text: 'Application',
        align: 'start',
        sortable: false,
        value: 'application',
      },
      { text: 'Requirement', value: 'requirement' },
      { text: 'Block', value: 'blocker' },
      { text: 'Technology', value: 'technology' },
      { text: 'File', value: 'file' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    blockerList: [] as ContainerBlocker[],
    blockerUndoTable: [] as ContainerBlocker[],
    blockerDisplayedList: [] as ContainerBlocker[],

    // Review results
    appliedBlockers: 0,
    errorApplying: '',
    blockerNotApplied: [] as ContainerBlocker[],

    // Progression
    sizeToSend: 0,
    sizeSent: 0,
    fileUploading: false,
  }),

  methods: {
    async applyTags() {
      this.e1 = 3;
      this.sizeSent = 0;
      this.sizeToSend = 0;

      this.loadingApply = true;
      this.blockerNotApplied = [];
      this.errorApplying = '';

      try {
        this.sizeToSend = this.blockerDisplayedList.length;
        const batchSize = 10;
        for (
          let index = 0;
          index < this.blockerDisplayedList.length;
          index += batchSize
        ) {
          const upBound = index + batchSize > this.blockerDisplayedList.length
            ? this.blockerDisplayedList.length - 1
            : index + batchSize;
          const batch = this.blockerDisplayedList.slice(index, upBound);

          // Send batch
          const [
            applied,
            notApplied,
          ] = await ContainerBlockerController.applyBlockers(
            batch,
            this.taggingType,
          );
          this.blockerNotApplied = this.blockerNotApplied.concat(notApplied);

          this.sizeSent = upBound;
          this.percentageTagsApplied = (100 * index) / this.sizeToSend;
        }

        this.appliedBlockers = batchSize - this.blockerNotApplied.length;
      } catch (err) {
        console.error('Failed to apply the tags', err);
        this.snack = true;
        this.snackColor = 'error';
        this.snackText = `Failed to apply the tags. ${err}.`;
        this.errorApplying = err;
      } finally {
        this.loadingApply = false;
      }
    },

    filterItems() {
      this.blockerDisplayedList = this.blockerList.filter(
        (x: ContainerBlocker) => (
          this.valuesTechnologies.indexOf(x.technology) >= 0
            && this.valuesRecommendations.indexOf(x.requirement) >= 0
        ),
      );
    },

    refresh() {
      // pass
    },

    /**
     * Delete a selected item
     */
    deleteItem(item: ContainerBlocker) {
      const editedIndex = this.blockerList.indexOf(item);
      this.blockerList.splice(editedIndex, 1);

      this.filterItems();
    },

    /**
     * Delete all selected items in the list
     */
    deleteSelectedItems() {
      this.selected.forEach((x) => {
        const editedIndex = this.blockerList.indexOf(x);
        this.blockerList.splice(editedIndex, 1);
      });

      this.selected = [];
      this.filterItems();
    },

    /**
     * Send the file to the API
     */
    async sendFileToApi() {
      this.fileUploading = true;

      try {
        if (this.file == null) return;
        if (this.application == null) return;

        this.blockerList = await ContainerBlockerController.uploadFile(
          this.file,
          this.application,
        );

        for (const i in this.blockerList) this.blockerList[i].id = i;

        this.blockerDisplayedList = [...this.blockerList];

        // Get Filter items
        const tech = this.blockerList
          .map((x: ContainerBlocker) => x.technology)
          .filter((v, i, a) => a.indexOf(v) === i);
        const reco = this.blockerList
          .map((x: ContainerBlocker) => x.requirement)
          .filter((v, i, a) => a.indexOf(v) === i);

        this.valuesTechnologies = [...tech] as string[];
        this.itemsTechnologies = [...tech] as string[];
        this.valuesRecommendations = [...reco] as string[];
        this.itemsRecommendations = [...reco] as string[];

        this.e1 = 2;
      } catch (err) {
        console.error('Failed to process the file.', err);
        flash.commit('add', {
          type: FlashType.ERROR,
          title: 'Failed to process the file.',
          body: err,
        });
      } finally {
        this.fileUploading = false;
      }
    },

    reset() {
      this.e1 = 1;
      // pass
    },

    save() {
      this.snack = true;
      this.snackColor = 'success';
      this.snackText = 'Data saved';
    },
    cancel() {
      this.snack = true;
      this.snackColor = 'error';
      this.snackText = 'Canceled';
    },
    open() {
      this.snack = true;
      this.snackColor = 'info';
      this.snackText = 'Editing data';
    },
    close() {
      console.log('Closed.');
    },

    resetTable() {
      this.blockerDisplayedList = [...this.blockerList];
    },

    undo() {
      this.blockerUndoTable = [...this.blockerDisplayedList];
    },

    processTags() {
      this.blockerUndoTable = { ...this.blockerDisplayedList };
      this.blockerDisplayedList.forEach((x: ContainerBlocker) => {
        const regexResult = x.file.match(this.defaultRegex);
        if (regexResult && regexResult.length > 0) {
          x.file = regexResult[1];
        }
      });
    },

    removeBeginning() {
      const regex = new RegExp('', 'gi');

      this.blockerUndoTable = { ...this.blockerDisplayedList };
      this.blockerDisplayedList.forEach((x: ContainerBlocker) => {
        const regexResult = x.file.replace(regex, '');
        if (regexResult && regexResult.length > 0) {
          x.file = regexResult[1];
        }
      });
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    },
  },
});
</script>

<style scoped>
.v-stepper__header {
  background-color: #425b66 !important;
  border-bottom: 6px solid #2a9d8f;
  color: white !important;
}

.v-stepper__label {
  text-shadow: 0px 0px 0px white !important;
  color: white !important;
}

.theme--light.v-stepper .v-stepper__label {
  color: white !important;
}
</style>
