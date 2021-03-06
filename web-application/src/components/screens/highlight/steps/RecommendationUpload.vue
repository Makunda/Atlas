<template>
  <v-card>
    <v-card-title>
      <h3 class="text-h4">
        Review the blockers in the {{ application }} application.
      </h3>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      Upload here the Tags coming from Cast Highlight
    </v-card-subtitle>

    <v-card-text>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Upload
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Review
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Confirm
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12  elevation-3" height="200px">
              <v-container>
                <v-row>
                  <h4>Import the Cast Highlight Excel File</h4>
                </v-row>
                <v-row class="mt-8">
                  <v-file-input
                    v-model="file"
                    label="File input"
                    outlined
                    dense
                  ></v-file-input>
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
                        <v-col cols="2">
                          <p>
                            <span class="subtitle-1">Modify file path:</span>
                          </p>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="defaultRegex"
                            label="Regular expression to modify file fields"
                            multiple
                            chips
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <v-btn color="success" @click="processTags"
                            >Apply regex</v-btn
                          >
                        </v-col>
                      </v-row>

                      <!-- Filter Technology -->
                      <v-row>
                        <v-col cols="2">
                          <p>
                            <span class="subtitle-1">Filter</span>
                          </p>
                        </v-col>
                        <v-col cols="5">
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
                        <v-col cols="5">
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

          <v-stepper-content step="3">
            <v-card class="mb-12 elevation-3">
              <v-card-text> </v-card-text>
              <v-card-text>
                <v-container>
                  <v-row v-if="loadingApply" class="d-flex flex-column">
                    <p class="text-h3">Applying tags on {{ application }}...</p>
                    <v-progress-linear
                      class="mt-4"
                      :value="percentageTagsApplied"
                    ></v-progress-linear>
                    <p class="text-h5">
                      {{ sizeSent }} tags applied on {{ sizeToSend }}
                    </p>
                    <p class="text-h5">{{ blockerNotApplied.length }} Errors</p>
                  </v-row>
                  <!-- Successful -->
                  <v-row v-if="!loadingApply && errorApplying === ''">
                    <v-container>
                      <v-row>
                        <p class="text-h3">
                          {{ sizeSent - blockerNotApplied.length }} Tags were
                          applied
                        </p>
                      </v-row>
                      <v-row>
                        <p class="text-h5">
                          {{ blockerNotApplied.length }} produced an error.
                        </p>
                      </v-row>
                    </v-container>
                  </v-row>

                  <!-- Error -->
                  <v-row v-if="!loadingApply && errorApplying !== ''"> </v-row>
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
import Vue from "vue";
import CloudBlocker from "@/api/interface/highlight/CloudBlocker";
import { HighlightController } from "@/api/highlight/HighlightController";

export default Vue.extend({
  name: "RecommendationUpload",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    application: "",
    e1: 1,
    file: null,

    search: "",

    // filters
    valuesTechnologies: [] as string[],
    itemsTechnologies: [] as string[],
    valuesRecommendations: [] as string[],
    itemsRecommendations: [] as string[],

    selected: [] as CloudBlocker[],

    snack: false,
    snackColor: "",
    snackText: "",
    pagination: {},

    defaultRegex: "(\\w+\\.\\w+)",

    // Applying tags
    loadingApply: false,
    percentageTagsApplied: 0,

    headers: [
      {
        text: "Application",
        align: "start",
        sortable: false,
        value: "application"
      },
      { text: "Requirement", value: "requirement" },
      { text: "Block", value: "blocker" },
      { text: "Technology", value: "technology" },
      { text: "File", value: "file" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    blockerList: [] as CloudBlocker[],
    blockerUndoTable: [] as CloudBlocker[],
    blockerDisplayedList: [] as CloudBlocker[],

    // Review results
    appliedBlockers: 0,
    errorApplying: "",
    blockerNotApplied: [] as CloudBlocker,

    // Progression
    sizeToSend: 0,
    sizeSent: 0
  }),

  methods: {
    async applyTags() {
      this.e1 = 3;
      this.loadingApply = true;
      this.blockerNotApplied = [];
      this.errorApplying = "";

      try {
        this.sizeToSend = this.blockerDisplayedList.length;
        const batchSize = 10;
        for (
          let index = 0;
          index < this.blockerDisplayedList.length;
          index += batchSize
        ) {
          const upBound =
            index + batchSize > this.blockerDisplayedList.length
              ? this.blockerDisplayedList.length - 1
              : index + batchSize;
          const batch = this.blockerDisplayedList.slice(index, upBound);
          console.log("To send", batch);
          
          // Send batch
          const noApplied = await HighlightController.applyBlockers(batch);
          this.blockerNotApplied = this.blockerNotApplied.concat(noApplied);

          this.sizeSent = upBound;
          this.percentageTagsApplied = (100 * index) / this.sizeToSend;
        }

        this.appliedBlockers = batchSize - this.blockerNotApplied.length;
      } catch (err) {
        console.error("Failed to apply the tags", err);
        this.snack = true;
        this.snackColor = "error";
        this.snackText = `Failed to apply the tags. ${err}.`;
        this.errorApplying = err;
      } finally {
        this.loadingApply = false;
      }
    },

    filterItems() {
      this.blockerDisplayedList = this.blockerList.filter((x: CloudBlocker) => {
        return (
          this.valuesTechnologies.indexOf(x.technology) >= 0 &&
          this.valuesRecommendations.indexOf(x.requirement) >= 0
        );
      });

      this.processTags();
    },

    refresh() {
      // pass
    },

    deleteItem(item: CloudBlocker) {
      const editedIndex = this.blockerList.indexOf(item);
      this.blockerList.splice(editedIndex, 1);

      this.filterItems();
    },

    deleteSelectedItems() {
      this.selected.forEach(x => {
        const editedIndex = this.blockerList.indexOf(x);
        this.blockerList.splice(editedIndex, 1);
      });

      this.selected = [];
      this.filterItems();
    },

    async sendFileToApi() {
      try {
        if (this.file == null) return;
        if (this.application == null) return;

        this.blockerList = await HighlightController.uploadFile(
          this.file,
          this.application
        );

        this.blockerDisplayedList = [...this.blockerList];

        // Get Filter items
        const tech = this.blockerList
          .map((x: CloudBlocker) => x.technology)
          .filter((v, i, a) => a.indexOf(v) === i);
        const reco = this.blockerList
          .map((x: CloudBlocker) => x.requirement)
          .filter((v, i, a) => a.indexOf(v) === i);

        this.valuesTechnologies = [...tech] as string[];
        this.itemsTechnologies = [...tech] as string[];
        this.valuesRecommendations = [...reco] as string[];
        this.itemsRecommendations = [...reco] as string[];

        this.e1 = 2;
      } catch (err) {
        console.error("Failed to process the file.", err);
      }
    },

    reset() {
      this.e1 = 1;
      // pass
    },

    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Editing data";
    },
    close() {
      console.log("Closed.");
    },

    resetTable() {
      this.blockerDisplayedList = [...this.blockerList];
    },

    undo() {
      this.blockerUndoTable = [...this.blockerDisplayedList];
    },

    processTags() {
      this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList);
      this.blockerDisplayedList.forEach((x: CloudBlocker) => {
        const regexResult = x.file.match(this.defaultRegex);
        if (regexResult && regexResult.length > 0) {
          x.file = regexResult[1];
        }
      });
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>
