<template>
  <v-card>
    <v-card-title>
      Review the Data Call Graphs in the {{ application }} application.
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <v-card class="ma-4" width="100%">
            <v-card-title>Options</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col md="3" class="d-flex flex-column">
                    <p>
                      Specify the prefix used to pin the Data Call Graph.<br />
                      <b
                        >This parameter is not stored and will be reset if you
                        refresh this page.</b
                      >
                    </p>
                    <v-text-field
                      label="Pin Prefix"
                      v-model="pinPrefix"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Power actions
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Clean by number of objects</div>
                      <div class="text--primary">
                        Mask all the Data Call Graph with a number of objects
                        inferior to a limit ( Recommended 10)
                        <v-text-field
                          v-model="maskActionLimit"
                          type="number"
                          label="Number of objects"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        text
                        color="persianGrey"
                        @click="maskByCount"
                        :loading="maskActionLoading"
                      >
                        <p>Mask the Data Call Graph .</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Clean by number of Technology</div>
                      <div class="text--primary">
                        Mask all the Data Call Graph containing a number of
                        technology inferior or equal to the input
                        <v-text-field
                          v-model="maskActionTechnology"
                          type="number"
                          label="Number of objects"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        text
                        color="persianGrey"
                        @click="maskByTechnology"
                        :loading="maskActionLoading"
                      >
                        <p>Mask the Data Call Graph .</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>

                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Clean by number of objects</div>
                      <div class="text--primary">
                        Mask all the Data Call Graph containing certain terms in
                        their names
                        <v-combobox
                          v-model="maskActionTermsList"
                          label="List of terms"
                          multiple
                          chips
                        ></v-combobox>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        text
                        color="persianGrey"
                        @click="maskByTerms"
                        :loading="maskActionLoading"
                      >
                        <p>Mask the Data Call Graph</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Reset Data Call Graph</div>
                      <div class="text--primary">
                        Unmask all the dataCallGraphs ( Reset )
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="persianGrey"
                        @click="unmaskAll"
                        :loading="unmaskAllActionLoading"
                      >
                        Unmask all
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
        <!-- Filter panel -->
        <v-row>
          <v-card class="ma-4" width="100%">
            <v-card-title class="ma-3">
              Filter Data Call Graph
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
            <v-card-text>
              <v-row>
                <!-- Number Object / SubObject -->
                <v-col class="px-4" cols="4">
                  <v-row class="mx-3">
                    <h3>Filter by number of Object/SubObject</h3>
                  </v-row>
                  <v-row class="ma-3">
                    Min Object :
                    <strong class="mr-3">{{
                      dataCallGraphInsights.minObject
                    }}</strong>
                    Max Object :
                    <strong>{{ dataCallGraphInsights.maxObject }}</strong>
                  </v-row>
                  <v-row class="mx-3">
                    <v-range-slider
                      v-model="rangeObject"
                      :max="dataCallGraphInsights.maxObject"
                      :min="dataCallGraphInsights.minObject"
                      hide-details
                      persistent-hint
                      hint="Number of object"
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="rangeObject[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(rangeObject, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="rangeObject[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(rangeObject, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-row>
                </v-col>
                <!-- Number Technologies -->
                <v-col class="px-4" cols="4">
                  <v-row class="mx-3">
                    <h3>Filter by number of Technologies</h3>
                  </v-row>
                  <v-row class="ma-3">
                    Min Technologies :
                    <strong class="mr-3">{{
                      dataCallGraphInsights.minTechnology
                    }}</strong>
                    Max Technologies :
                    <strong>{{ dataCallGraphInsights.maxTechnology }}</strong>
                  </v-row>
                  <v-row class="mx-3">
                    <v-range-slider
                      v-model="rangeTechnology"
                      :max="dataCallGraphInsights.maxTechnology"
                      :min="dataCallGraphInsights.minTechnology"
                      hide-details
                      persistent-hint
                      hint="Number of object"
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="rangeTechnology[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(rangeTechnology, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="rangeTechnology[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                          @change="$set(rangeTechnology, 1, $event)"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-row>
                </v-col>
                <!-- Search technologies -->
                <v-col class="px-4" cols="4">
                  <v-row class="mx-3">
                    <h3>Search by technology (AND clause)</h3>
                  </v-row>
                  <v-row class="mx-3">
                    <v-autocomplete
                      v-model="technologySearch"
                      :items="technologiesList"
                      :loading="loadingTechList"
                      filled
                      rounded
                      chips
                      label="Chips"
                      multiple
                    ></v-autocomplete>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="mt-6 mb-1">
                <v-spacer></v-spacer>
                <v-btn
                  class="mr-3"
                  depressed
                  color="grey"
                  dark
                  @click="dataCallGraphApiCall"
                >
                  Apply filter
                </v-btn>
                <v-btn
                  depressed
                  color="persianGrey"
                  dark
                  @click="dataCallGraphApiCall()"
                >
                  Remove all non-compliant
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <!-- Data Call Graph -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Data Call Graph in the application
              <v-spacer></v-spacer>
              <v-btn
                class="mr-5"
                icon
                color="green"
                @click="dataCallGraphApiCall()"
              >
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="displayedDataCallGraph"
                :options.sync="optionsDataCallGraph"
                :server-items-length="numDataCallGraph"
                :loading="loadingDataCallGraph"
                class="elevation-1 pt-3"
                fixed-header
              >
              <template v-slot:top class="my-5">
                <v-text-field
                  filled
                  rounded
                  clearable
                  v-model="searchName"
                  @change="dataCallGraphApiCall"
                  label="Search DataCallGraph by Name"
                  class="mx-4"
                ></v-text-field>
              </template>

                <template v-slot:item.technologies="{ item }">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip small v-for="tech in item.technologies" :key="tech">
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </template>
                <template v-slot:item.actions="{ item }" class="flex flex-row">
                  <v-icon small class="mr-2" @click="maskDataCallGraph(item)">
                    mdi-eye-off
                  </v-icon>
                  <v-icon
                    v-if="!containsPrefix(item)"
                    small
                    class="mr-2"
                    @click="pinDataCallGraph(item)"
                  >
                    mdi-pin
                  </v-icon>
                  <v-icon
                    v-if="containsPrefix(item)"
                    small
                    class="mr-2"
                    @click="unpinDataCallGraph(item)"
                  >
                    mdi-pin-off
                  </v-icon>
                  <v-icon small class="mr-2" @click="openRenameModal(item)">
                    mdi-grease-pencil
                  </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="mt-5"> </v-row>
        <v-row>
          <!-- Masked DataCallGraph -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Masked Data Call Graphs in the application
              <v-spacer></v-spacer>
              <v-btn
                class="mr-5"
                icon
                color="green"
                @click="maskedDataCallGraphApiCall"
              >
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle> </v-card-subtitle>
            <v-card-text>
              <v-data-table
                :headers="headersMasked"
                :items="displayedMaskedDataCallGraph"
                :options.sync="optionsMaskedDataCallGraph"
                :server-items-length="numMaskedDataCallGraph"
                :loading="loadingMaskedDataCallGraph"
                class="elevation-1"
              >
                <template v-slot:item.technologies="{ item }">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip small v-for="tech in item.technologies" :key="tech">
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="unMaskDataCallGraph(item)">
                    mdi-eye
                  </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>

    <!--  Modal Rename DataCallGraph  -->
    <v-dialog v-model="modalRename" width="500">
      <v-card>
        <v-card-title class="text-h5 white--text charcoal lighten-2">
          Renaming a Data Call Graph
        </v-card-title>

        <v-card-text class="mt-4">
          <v-container>
            <v-row class="my-4">
              Enter the new Name of the Data Call Graph n°{{
                toEditDataCallGraph._id
              }}:
            </v-row>
            <v-row>
              <v-text-field
                label="Outlined"
                v-model="toEditDataCallGraph.name"
                single-line
                outlined
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            :loading="loadingRename"
            text
            @click="closeRenameModal"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green"
            text
            :disabled="loadingRename"
            @click="confirmRename"
          >
            Rename
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import DataCallGraphController from "@/api/imaging/DataCallGraphController";
import {DataCallGraph} from "@/api/interface/imaging/DataCallGraph";
import DataCallGraphInsights from "@/api/interface/imaging/DataCallGraphInsights";
import { ApplicationController } from "@/api/applications/ApplicationController";

export default Vue.extend({
  name: "DataCallGraphExplorer",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.refresh();
  },

  data: () => ({
    application: "",

    // options
    pinPrefix: "#",

    headers: [
      {
        text: "Name",
        align: "start",
        value: "name"
      },
      //{ text: "Full Name", value: "fullName" },
      { text: "Object Count", value: "count" },
      { text: "Technologies", value: "technologies" },
      { text: "Number of technologies", value: "numTechnologies" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    headersMasked: [
      {
        text: "Name",
        align: "start",
        value: "name"
      },
      //{ text: "Full Name", value: "fullName" },
      { text: "Object Count", value: "count" },
      { text: "Technologies", value: "technologies" },
      { text: "Number of technologies", value: "numTechnologies" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    loadingDataCallGraph: true,
    loadingMaskedDataCallGraph: true,

    optionsDataCallGraph: {},
    optionsMaskedDataCallGraph: {},

    numDataCallGraph: 0,
    numMaskedDataCallGraph: 0,

    // DataCallGraph displayed
    displayedDataCallGraph: [] as DataCallGraph[],
    displayedMaskedDataCallGraph: [] as DataCallGraph[],

    startIndexDataCallGraph: 0,
    endIndexDataCallGraph: 0,
    pageDataCallGraph: 0,

    startIndexMaskedDataCallGraph: 0,
    endIndexMaskedDataCallGraph: 0,
    pageMaskedDataCallGraph: 0,

    // Search DataCallGraph
    searchName: "",

    // Power Actions
    maskActionLimit: 0,
    maskActionTechnology: 0,
    maskActionLoading: false,
    maskActionTermsList: [] as string[],

    unmaskAllActionLoading: false,

    // DataCallGraph Insight
    dataCallGraphInsights: {} as DataCallGraphInsights,
    rangeObject: [0, 20],
    rangeTechnology: [0, 20],
    technologySearch: [] as string[],
    technologiesList: [] as string[],
    loadingTechList: false,

    // DataCallGraph Rename
    modalRename: false,
    loadingRename: false,
    toEditDataCallGraph: {} as DataCallGraph
  }),

  methods: {
    /**
     *  Open the Rename modal for the dataCallGraphs
     **/
    openRenameModal(item: DataCallGraph) {
      this.toEditDataCallGraph = Object.assign({}, item);
      this.modalRename = true;
    },

    async confirmRename() {
      try {
        this.loadingRename = true;
        await DataCallGraphController.renameDataCallGraph(
          this.application,
          this.toEditDataCallGraph._id,
          this.toEditDataCallGraph.name
        );
        this.closeRenameModal();
        this.refresh();
      } catch (err) {
        console.error("Failed to rename the dataCallGraph.", err);
      } finally {
        this.loadingRename = false;
      }
    },

    closeRenameModal() {
      this.modalRename = false;
      this.toEditDataCallGraph = {};
    },

    /**
     * Check if the prefix is present in the DataCallGraph Name
     * @param item
     */
    containsPrefix(item: DataCallGraph): boolean {
      try {
        return item.name.indexOf(this.pinPrefix) == 0;
      } catch (err) {
        return false;
      }
    },

    async unmaskAll() {
      try {
        this.unmaskAllActionLoading = true;
        this.numDataCallGraph = await DataCallGraphController.unMaskAllDataCallGraph(
          this.application
        );
        await this.refresh();
      } catch (err) {
        console.error("Failed to un-mask all the dataCallGraphs", err);
      } finally {
        this.unmaskAllActionLoading = false;
      }
    },

    async getTechnologies() {
      try {
        if (this.application == "") return;
        this.loadingTechList = true;
        this.technologiesList = await ApplicationController.getLevelsByDepth(
          this.application,
          5
        );
        this.technologiesList = this.technologiesList.sort();
      } catch (err) {
        console.error(
          `Failed to retrieve technologies in the application ${this.application}.`,
          err
        );
      } finally {
        this.loadingTechList = false;
      }
    },

    async maskByCount() {
      try {
        this.maskActionLoading = true;
        this.numDataCallGraph = await DataCallGraphController.maskByCount(
          this.application,
          this.maskActionLimit
        );
        await this.refresh();
      } catch (err) {
        console.error("Failed to mask by count.", err);
      } finally {
        this.maskActionLoading = false;
      }
    },

    async maskByTechnology() {
      try {
        this.maskActionLoading = true;
        this.numDataCallGraph = await DataCallGraphController.maskByTechnology(
          this.application,
          this.maskActionTechnology
        );
        await this.refresh();
      } catch (err) {
        console.error("Failed to mask by technology.", err);
      } finally {
        this.maskActionLoading = false;
      }
    },

    async maskByTerms() {
      try {
        this.maskActionLoading = true;
        this.numDataCallGraph = await DataCallGraphController.maskByTerms(
          this.application,
          this.maskActionTermsList
        );
        await this.refresh();
      } catch (err) {
        console.error("Failed to mask by terms.", err);
      } finally {
        this.maskActionLoading = false;
      }
    },

    async getInsights() {
      try {
        this.dataCallGraphInsights = await DataCallGraphController.getInsightsUnmaskedDataCallGraph(
          this.application
        );

        this.rangeTechnology = [
          this.dataCallGraphInsights.minTechnology,
          this.dataCallGraphInsights.maxTechnology
        ];

        this.rangeObject = [
          this.dataCallGraphInsights.minObject,
          this.dataCallGraphInsights.maxObject
        ];
      } catch (err) {
        console.error("Failed to get the insights of dataCallGraphs", err);
      }
    },

    async getNumberDataCallGraph() {
      try {
        this.numDataCallGraph = await DataCallGraphController.getNumberDataCallGraph(
          this.application
        );
        return this.numDataCallGraph;
      } catch (err) {
        console.error("Failed to get the number of dataCallGraph", err);
      }
    },

    async getNumberMaskedDataCallGraph() {
      try {
        this.numMaskedDataCallGraph = await DataCallGraphController.getNumberMaskedDataCallGraph(
          this.application
        );
      } catch (err) {
        console.error("Failed to get the number of dataCallGraph", err);
      }
    },

    async dataCallGraphApiCall() {
      this.loadingDataCallGraph = true;

      await this.getNumberDataCallGraph();

      const filter: any = {
        minTechnologies: this.rangeTechnology[0],
        maxTechnologies: this.rangeTechnology[1],
        minObject: this.rangeObject[0],
        maxObject: this.rangeObject[1],
        techContained: this.technologySearch
      };

      if (this.searchName != "") filter.name = this.searchName;

      // eslint-disable-next-line prefer-const
      let { sortBy, sortDesc, page, itemsPerPage } = this.optionsDataCallGraph;
      if (itemsPerPage === -1) {
        itemsPerPage = this.numDataCallGraph;
      }

      let sortByOption = null;
      let sortByDesccOption = null;
      if (Array.isArray(sortBy) && sortBy.length === 1)
        sortByOption = sortBy[0];
      if (Array.isArray(sortDesc) && sortDesc.length === 1)
        sortByDesccOption = sortDesc[0];


      const dataCallGraphs = await DataCallGraphController.getBatchDataCallGraph(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortByOption,
        sortByDesccOption,
        filter
      );

      this.loadingDataCallGraph = false;
      this.displayedDataCallGraph = dataCallGraphs;
      return dataCallGraphs;
    },

    // Call the api to retrieve Masked dataCallGraphs
    async maskedDataCallGraphApiCall() {
      this.loadingMaskedDataCallGraph = true;

      await this.getNumberMaskedDataCallGraph();
      const {
        sortBy,
        sortDesc,
        page } = this.optionsMaskedDataCallGraph;

      let {
        itemsPerPage
      } = this.optionsMaskedDataCallGraph;

      if (itemsPerPage === -1) {
        itemsPerPage = this.numMaskedDataCallGraph;
      }

      let sortByOption = null;
      let sortByDesccOption = null;
      if (Array.isArray(sortBy) && sortBy.length === 1)
        sortByOption = sortBy[0];
      if (Array.isArray(sortDesc) && sortDesc.length === 1)
        sortByDesccOption = sortDesc[0];

      const dataCallGraphs = await DataCallGraphController.getBatchMaskedDataCallGraph(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortByOption,
        sortByDesccOption
      );

      this.loadingMaskedDataCallGraph = false;
      this.displayedMaskedDataCallGraph = dataCallGraphs;
      return dataCallGraphs;
    },

    async maskDataCallGraph(item: DataCallGraph) {
      await DataCallGraphController.maskDataCallGraph(this.application, item._id);
      this.refresh();
    },

    async pinDataCallGraph(item: DataCallGraph) {
      await DataCallGraphController.pinDataCallGraph(
        this.application,
        item._id,
        this.pinPrefix
      );
      await this.refresh();
    },

    async unpinDataCallGraph(item: DataCallGraph) {
      await DataCallGraphController.unpinDataCallGraph(
        this.application,
        item._id,
        this.pinPrefix
      );
      await this.refresh();
    },

    async renameDataCallGraph(item: DataCallGraph) {
      await DataCallGraphController.renameDataCallGraph(
        this.application,
        item._id,
        item.name
      );
      await this.refresh();
    },

    async unMaskDataCallGraph(item: DataCallGraph) {
      await DataCallGraphController.unmaskDataCallGraph(this.application, item._id);
      this.refresh();
    },

    async refresh() {
      await this.getInsights();
      await this.getTechnologies();
      await this.dataCallGraphApiCall();
      await this.maskedDataCallGraphApiCall();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },

    optionsDataCallGraph: {
      handler() {
        this.dataCallGraphApiCall();
      },
      deep: true
    },

    optionsMaskedDataCallGraph: {
      handler() {
        this.maskedDataCallGraphApiCall();
      },
      deep: true
    }
  }
});
</script>
