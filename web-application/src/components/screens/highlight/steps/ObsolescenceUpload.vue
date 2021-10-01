<template>
  <v-card>
    <v-card-title>
      <h3 class="text-h4">
        Inject <strong>Obsolescence Insights</strong> into
        {{ application }} application.
      </h3>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      Upload here the <strong>Open-source BOM (Bill of material)</strong> coming
      from CAST Highlight
    </v-card-subtitle>

    <v-card-text>
      <v-stepper v-model="e1" >
        <v-stepper-header class="custom-stepper">
          <v-stepper-step :complete="e1 > 1" step="1">
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
                      </v-row>

                      <!-- Fitler on actual version -->
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-subheader
                            >Filter by age of the component:</v-subheader
                          >
                        </v-col>
                        <v-col cols="12" md="10" class="d-flex flex-column">
                          <h4 class="text-h6">
                            Between
                            <strong>{{ getDate(range[0]) }}</strong>
                            {{ getYearDifference(range[0]) }} year{{
                              getYearDifference(range[0]) > 1 ? "s" : ""
                            }}
                            and
                            <strong>{{ getDate(range[1]) }}</strong> (
                            {{ getYearDifference(range[1]) }} year{{
                              getYearDifference(range[1]) > 1 ? "s" : ""
                            }}
                            gap )
                          </h4>
                          <v-range-slider
                            v-model="range"
                            @change="filterItems"
                            style="max-width: 80%"
                            :max="maxDate"
                            :min="minDate"
                          >
                          </v-range-slider>
                        </v-col>
                      </v-row>

                      <!-- Fitler on latest version -->
                      <!-- 
                        minDateRelease: 0 as number,
                        maxDateRelease: 0 as number,
                        rangeRelease: [0, 0],
                       -->
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-subheader>Filter on latest version:</v-subheader>
                        </v-col>
                        <v-col cols="12" md="10" class="d-flex flex-column">
                          <h4 class="text-h6">
                            Between
                            <strong>{{ getDate(rangeRelease[0]) }}</strong>
                            {{ getYearDifference(rangeRelease[0]) }} year{{
                              getYearDifference(rangeRelease[0]) > 1 ? "s" : ""
                            }}
                            and
                            <strong>{{ getDate(rangeRelease[1]) }}</strong> (
                            {{ getYearDifference(rangeRelease[1]) }} year{{
                              getYearDifference(rangeRelease[1]) > 1 ? "s" : ""
                            }}
                            gap )
                          </h4>
                          <v-range-slider
                            v-model="rangeRelease"
                            @change="filterItems"
                            style="max-width: 80%"
                            :max="maxDateRelease"
                            :min="minDateRelease"
                          >
                          </v-range-slider>
                        </v-col>
                      </v-row>

                      <!-- Type of creation  -->
                      <v-row>
                        <v-col cols="12" md="2">
                          <v-subheader>Choose the type of tagging</v-subheader>
                        </v-col>
                        <v-col cols="12" md="10">
                          <v-radio-group v-model="taggingType">
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
                    item-key="id"
                    show-select
                    class="elevation-1"
                  >
                    <template v-slot:item.component="props">
                      <v-edit-dialog
                        :return-value.sync="props.item.file"
                        large
                        persistent
                        @save="save"
                        @cancel="cancel"
                        @open="open"
                        @close="close"
                      >
                        <div>{{ props.item.component }}</div>
                        <template v-slot:input>
                          <div class="mt-4 text-h6">
                            Update detection pattern
                          </div>
                          <v-text-field
                            v-model="props.item.component"
                            label="Edit"
                            single-line
                            counter
                            autofocus
                          ></v-text-field>
                        </template>
                      </v-edit-dialog>
                    </template>

                    <template v-slot:item.integration="{ item }">
                      <v-container>
                        <v-row
                          v-if="
                            !item.integration || item.integration.length == 0
                          "
                        >
                          <p>No object matching this framework was found</p>
                        </v-row>
                        <v-row v-else>
                          <v-col
                            class="pa-0 ma-0"
                            cols="12"
                            v-for="(link, i) in item.integration"
                            :key="i"
                          >
                            <strong>Type: </strong>{{ link.type }} -
                            <strong>Count: </strong>{{ link.count }}
                          </v-col>
                        </v-row>
                      </v-container>
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

          <!-- Step 3: Review -->
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
import OssRecommendation from "@/api/interface/highlight/OssRecommendation";
import { ObsolescenceController } from "@/api/highlight/ObsolescenceController";

export default Vue.extend({
  name: "ObsolescenceUpload",

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

    violationFilter: {
      critical: false,
      high: false,
      medium: false,
      low: false
    },

    selected: [] as OssRecommendation[],

    snack: false,
    snackColor: "",
    snackText: "",
    pagination: {},

    defaultRegex: "(\\w+\\.\\w+)",
    defaultReplacement: "",

    // Applying tags
    taggingType: "tag",
    loadingApply: false,
    percentageTagsApplied: 0,

    headers: [
      {
        text: "Application",
        align: "start",
        sortable: false,
        value: "application"
      },
      { text: "Pattern", value: "component" },
      { text: "Origin", value: "origin" },
      { text: "Description", value: "description" },
      { text: "Version", value: "version" },
      { text: "Technology", value: "technology" },
      { text: "Version date", value: "release" },
      { text: "Latest Release", value: "lastRelease" },
      { text: "Integration", value: "integration" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    blockerList: [] as OssRecommendation[],
    blockerUndoTable: [] as OssRecommendation[],
    blockerDisplayedList: [] as OssRecommendation[],

    // Date Filter Release
    minDate: 0 as number,
    maxDate: 0 as number,
    range: [0, 0],

    // Latest Release
    minDateRelease: 0 as number,
    maxDateRelease: 0 as number,
    rangeRelease: [0, 0],

    // Review results
    appliedBlockers: 0,
    errorApplying: "",
    blockerNotApplied: [] as OssRecommendation[],

    // Progression
    sizeToSend: 0,
    sizeSent: 0,
    fileUploading: false
  }),

  methods: {
    /**
     * Return the timestamp as a date
     */
    getDate(timestamp: number) {
      return new Date(timestamp).toDateString();
    },

    /**
     * Get year difference
     */
    getYearDifference(enteredDate: number) {
      return (
        new Date(
          new Date().getTime() - new Date(enteredDate).getTime()
        ).getFullYear() - 1970
      );
    },

    /**
     * Apply tags on the application, by batch of tags
     */
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

          // Send batch
          const noApplied = await ObsolescenceController.applyBlockers(
            batch,
            this.taggingType
          );
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
      // Rearrange filter
      if (this.rangeRelease[0] >= this.range[0])
        this.range[0] = this.rangeRelease[0];
      if (this.rangeRelease[1] <= this.range[1])
        this.range[1] = this.rangeRelease[1];

      this.blockerDisplayedList = this.blockerList.filter(
        (x: OssRecommendation) => {
          const date = new Date(x.release);
          const releaseDate = new Date(x.lastRelease);

          return (
            // Filter technologies
            this.valuesTechnologies.indexOf(x.technology) >= 0 &&
            // Filter on Date
            date >= this.range[0] &&
            date <= this.range[1] &&
            releaseDate >= this.rangeRelease[0] &&
            releaseDate <= this.rangeRelease[1]
          );
        }
      );

      this.processTags();
    },

    refresh() {
      // pass
    },

    deleteItem(item: OssRecommendation) {
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
      this.fileUploading = true;

      try {
        if (this.file == null) return;
        if (this.application == null) return;

        this.blockerList = await ObsolescenceController.uploadFile(
          this.file,
          this.application
        );

        for (const i in this.blockerList) this.blockerList[i].id = i;

        // Get information on the date
        const dateList = this.blockerList.map((x: OssRecommendation) =>
          new Date(x.release).getTime()
        );

        const releaseList = this.blockerList.map((x: OssRecommendation) =>
          new Date(x.lastRelease).getTime()
        );

        // Date
        this.minDate = Math.min(...dateList);
        this.maxDate = Math.max(...dateList);
        this.range = [this.minDate, this.maxDate];

        this.minDateRelease = Math.min(...releaseList);
        this.maxDateRelease = Math.max(...releaseList);
        this.rangeRelease = [this.minDateRelease, this.maxDateRelease];

        this.blockerDisplayedList = [...this.blockerList];

        // Get Filter items
        const tech = this.blockerList
          .map((x: OssRecommendation) => x.technology)
          .filter((v, i, a) => a.indexOf(v) === i);
        const reco = this.blockerList
          .map((x: OssRecommendation) => x.component)
          .filter((v, i, a) => a.indexOf(v) === i);

        this.valuesTechnologies = [...tech] as string[];
        this.itemsTechnologies = [...tech] as string[];
        this.valuesRecommendations = [...reco] as string[];
        this.itemsRecommendations = [...reco] as string[];

        this.e1 = 2;
      } catch (err) {
        console.error("Failed to process the file.", err);
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
      this.blockerDisplayedList.forEach((x: OssRecommendation) => {
        const regexResult = x.component.match(this.defaultRegex);
        if (regexResult && regexResult.length > 0) {
          x.component = regexResult[1];
        }
      });
    },

    removeBeginning() {
      const regex = new RegExp("", "gi");

      this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList);
      this.blockerDisplayedList.forEach((x: OssRecommendation) => {
        const regexResult = x.component.replace(regex, "");
        if (regexResult && regexResult.length > 0) {
          x.component = regexResult[1];
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

<style scoped>
.v-stepper__header {
  background-color: #425B66 !important;
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