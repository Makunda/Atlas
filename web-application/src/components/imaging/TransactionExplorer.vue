<template>
  <v-card>
    <v-card-title>
      <p class="text-h3 text--primary pb-3">
        <span class="font-weight-light pr-1">Review the transactions in</span>
        {{ application }}
      </p>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" color="green" icon @click="refresh">
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
                  <v-col class="d-flex flex-column" md="3">
                    <p>
                      Specify the prefix used to pin the transactions.<br />
                      <b
                        >This parameter is not stored and will be reset if you
                        refresh this page.</b
                      >
                    </p>
                    <v-text-field
                      v-model="pinPrefix"
                      label="Pin Prefix"
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
                        Mask all the transactions with a number of objects
                        inferior to a limit ( Recommended 10)
                        <v-text-field
                          v-model="maskActionLimit"
                          label="Number of objects"
                          type="number"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        :loading="maskActionLoading"
                        color="persianGrey"
                        text
                        @click="maskByCount"
                      >
                        <p>Mask the transactions .</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Clean by number of Technology</div>
                      <div class="text--primary">
                        Mask all the transactions containing a number of
                        technology inferior or equal to the input
                        <v-text-field
                          v-model="maskActionTechnology"
                          label="Number of objects"
                          type="number"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        :loading="maskActionLoading"
                        color="persianGrey"
                        text
                        @click="maskByTechnology"
                      >
                        <p>Mask the transactions .</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>

                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Clean by number of objects</div>
                      <div class="text--primary">
                        Mask all the transactions containing certain terms in
                        their names
                        <v-combobox
                          v-model="maskActionTermsList"
                          chips
                          label="List of terms"
                          multiple
                        ></v-combobox>
                      </div>
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-btn
                        :loading="maskActionLoading"
                        color="persianGrey"
                        text
                        @click="maskByTerms"
                      >
                        <p>Mask the transactions</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card class="ma-1" max-width="344">
                    <v-card-text>
                      <div>Reset transactions</div>
                      <div class="text--primary">
                        Unmask all the transactions ( Reset )
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        :loading="unmaskAllActionLoading"
                        color="persianGrey"
                        text
                        @click="unmaskAll"
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
              Filter transactions
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
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
                      transactionInsights.minObject
                    }}</strong>
                    Max Object :
                    <strong>{{ transactionInsights.maxObject }}</strong>
                  </v-row>
                  <v-row class="mx-3">
                    <v-range-slider
                      v-model="rangeObject"
                      :max="transactionInsights.maxObject"
                      :min="transactionInsights.minObject"
                      class="align-center"
                      hide-details
                      hint="Number of object"
                      persistent-hint
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="rangeObject[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          style="width: 60px"
                          type="number"
                          @change="$set(rangeObject, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="rangeObject[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          style="width: 60px"
                          type="number"
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
                      transactionInsights.minTechnology
                    }}</strong>
                    Max Technologies :
                    <strong>{{ transactionInsights.maxTechnology }}</strong>
                  </v-row>
                  <v-row class="mx-3">
                    <v-range-slider
                      v-model="rangeTechnology"
                      :max="transactionInsights.maxTechnology"
                      :min="transactionInsights.minTechnology"
                      class="align-center"
                      hide-details
                      hint="Number of object"
                      persistent-hint
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          :value="rangeTechnology[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          style="width: 60px"
                          type="number"
                          @change="$set(rangeTechnology, 0, $event)"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          :value="rangeTechnology[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          style="width: 60px"
                          type="number"
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
                      chips
                      filled
                      label="Chips"
                      multiple
                      rounded
                    ></v-autocomplete>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="mt-6 mb-1">
                <v-spacer></v-spacer>
                <v-btn
                  class="mr-3"
                  color="grey"
                  dark
                  depressed
                  @click="transactionApiCall"
                >
                  Apply filter
                </v-btn>
                <v-btn
                  color="persianGrey"
                  dark
                  depressed
                  @click="transactionApiCall()"
                >
                  Remove all non-compliant
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <!-- Transaction -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Transactions in the application
              <v-spacer></v-spacer>
              <v-btn
                class="mr-5"
                color="green"
                icon
                @click="transactionApiCall()"
              >
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="displayedTransaction"
                :loading="loadingTransaction"
                :options.sync="optionsTransaction"
                :server-items-length="numTransaction"
                class="elevation-1 pt-3"
                fixed-header
              >
                <template v-slot:top class="my-5">
                  <v-text-field
                    v-model="searchName"
                    class="mx-4"
                    clearable
                    filled
                    label="Search Transaction by Name"
                    rounded
                    @change="transactionApiCall()"
                  ></v-text-field>
                </template>

                <template v-slot:item.technologies="{ item }">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip v-for="tech in item.technologies" :key="tech" small>
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </template>
                <template v-slot:item.actions="{ item }" class="flex flex-row">
                  <v-icon class="mr-2" small @click="maskTransaction(item)">
                    mdi-eye-off
                  </v-icon>
                  <v-icon
                    v-if="!containsPrefix(item)"
                    class="mr-2"
                    small
                    @click="pinTransaction(item)"
                  >
                    mdi-pin
                  </v-icon>
                  <v-icon
                    v-if="containsPrefix(item)"
                    class="mr-2"
                    small
                    @click="unpinTransaction(item)"
                  >
                    mdi-pin-off
                  </v-icon>
                  <v-icon class="mr-2" small @click="openRenameModal(item)">
                    mdi-grease-pencil
                  </v-icon>

                  <v-menu
                    ref="menu"
                    :close-on-click="false"
                    :close-on-content-click="false"
                    :value="menuShow == item._id"
                    bottom
                    transition="scale-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        icon
                        v-bind="attrs"
                        x-small
                        @click="getTransactionStatistics(item)"
                        v-on="on"
                      >
                        <v-icon>mdi-information</v-icon>
                      </v-btn>
                    </template>
                    <v-list style="min-width: 450px">
                      <div v-if="loadingStatistics" style="margin: auto">
                        <v-progress-circular
                          :size="50"
                          color="primary"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                      <div v-else>
                        <v-container class="ma-2">
                          <v-row class="flex" style="width: 100%">
                            <b>General information: </b>
                            <v-spacer></v-spacer>
                            <v-btn color="red" icon @click="menuShow = -1">
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-row>
                          <v-row class="flex flex-column">
                            <p>
                              Id: {{ statistics.transactionId }}
                              <br />
                              Size:
                              <b>{{ statistics.size }}</b> Objects/SubObjects
                              <br />
                              <span v-if="statistics.information">
                                Information {{ statistics.information }} <br />
                              </span>
                              Start point: {{ statistics.startTechnology }}
                              <br />
                              End point: {{ statistics.endTechnology }}
                            </p>
                          </v-row>
                          <v-row class="flex flex-column">
                            <p>
                              <b>Object information: </b> <br />
                              <span
                                v-for="(it, i) in statistics.objects"
                                :key="i"
                                class="flex"
                                style="margin-left: 5px"
                              >
                                Type: {{ it.type }}
                                <span v-if="!it.displayed">(hidden)</span>-
                                {{ it.percentage.toFixed(2) }}%
                                <v-icon
                                  v-if="it.displayed"
                                  class="mr-2"
                                  small
                                  @click="
                                    hideTechnology(item, 'Object', it.type)
                                  "
                                >
                                  mdi-eye-off
                                </v-icon>
                                <v-icon
                                  v-else
                                  class="mr-2"
                                  small
                                  @click="
                                    showTechnology(item, 'Object', it.type)
                                  "
                                >
                                  mdi-eye
                                </v-icon>
                                <br />
                              </span>
                            </p>
                          </v-row>
                          <v-row class="flex flex-column">
                            <p>
                              <b>SubObject information: </b> <br />
                              <span
                                v-for="(it, i) in statistics.subObjects"
                                :key="i"
                                style="margin-left: 5px"
                              >
                                Type: {{ it.type }}
                                <span v-if="!it.displayed">(hidden)</span> -
                                {{ it.percentage.toFixed(2) }}%
                                <v-icon
                                  v-if="it.displayed"
                                  class="mr-2"
                                  small
                                  @click="
                                    hideTechnology(item, 'SubObject', it.type)
                                  "
                                >
                                  mdi-eye-off
                                </v-icon>
                                <v-icon
                                  v-else
                                  class="mr-2"
                                  small
                                  @click="
                                    showTechnology(item, 'SubObject', it.type)
                                  "
                                >
                                  mdi-eye
                                </v-icon>
                                <br
                              /></span>
                            </p>
                          </v-row>
                        </v-container>
                      </div>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="mt-5"></v-row>
        <v-row>
          <!-- Masked Transaction -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Masked transactions in the application
              <v-spacer></v-spacer>
              <v-btn
                class="mr-5"
                color="green"
                icon
                @click="maskedTransactionApiCall"
              >
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-data-table
                :headers="headersMasked"
                :items="displayedMaskedTransaction"
                :loading="loadingMaskedTransaction"
                :options.sync="optionsMaskedTransaction"
                :server-items-length="numMaskedTransaction"
                class="elevation-1"
              >
                <template v-slot:item.technologies="{ item }">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip v-for="tech in item.technologies" :key="tech" small>
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon class="mr-2" small @click="unMaskTransaction(item)">
                    mdi-eye
                  </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>

    <!--  Modal Rename Transaction  -->
    <v-dialog v-model="modalRename" width="500">
      <v-card>
        <v-card-title class="text-h5 white--text charcoal lighten-2">
          Renaming a transaction
        </v-card-title>

        <v-card-text class="mt-4">
          <v-container>
            <v-row class="my-4">
              Enter the new Name of the transaction n°{{
                toEditTransaction._id
              }}:
            </v-row>
            <v-row>
              <v-text-field
                v-model="toEditTransaction.name"
                label="Outlined"
                outlined
                single-line
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :loading="loadingRename"
            color="red"
            text
            @click="closeRenameModal"
          >
            Cancel
          </v-btn>
          <v-btn
            :disabled="loadingRename"
            color="green"
            text
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
import TransactionController from "@/api/controllers/imaging/TransactionController";
import Transaction from "@/api/interface/imaging/Transaction.interface";
import TransactionsInsights from "@/api/interface/imaging/TransactionsInsights.interface";
import { ApplicationController } from "@/api/controllers/applications/ApplicationController";
import TransactionStatistics from "@/api/interface/imaging/TransactionStatistics";
import Logger from "@/utils/Logger";
import flash, { FlashType } from "@/modules/flash/Flash";

export default Vue.extend({
  name: "TransactionExplorer",

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
    pinPrefix: "_",

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

    loadingTransaction: true,
    loadingMaskedTransaction: true,

    optionsTransaction: {},
    optionsMaskedTransaction: {},

    numTransaction: 0,
    numMaskedTransaction: 0,

    // Transactions displayed
    displayedTransaction: [] as Transaction[],
    displayedMaskedTransaction: [] as Transaction[],

    startIndexTransaction: 0,
    endIndexTransaction: 0,
    pageTransaction: 0,

    startIndexMaskedTransaction: 0,
    endIndexMaskedTransaction: 0,
    pageMaskedTransaction: 0,

    // Search Transaction
    searchName: "",

    // Power Actions
    maskActionLimit: 0,
    maskActionTechnology: 0,
    maskActionLoading: false,
    maskActionTermsList: [] as string[],

    unmaskAllActionLoading: false,

    // Transaction Insight
    transactionInsights: {} as TransactionsInsights,
    rangeObject: [0, 20],
    rangeTechnology: [0, 20],
    technologySearch: [] as string[],
    technologiesList: [] as string[],
    loadingTechList: false,

    // Transaction Rename
    modalRename: false,
    loadingRename: false,
    toEditTransaction: {} as Transaction,

    // Misc
    statistics: {} as TransactionStatistics,
    loadingStatistics: false,
    menuShow: -1
  }),

  methods: {
    /**
     *  Open the Rename modal for the transactions
     **/
    openRenameModal(item: Transaction) {
      this.toEditTransaction = Object.assign({}, item);
      this.modalRename = true;
    },

    async confirmRename() {
      try {
        this.loadingRename = true;
        await TransactionController.renameTransaction(
          this.application,
          this.toEditTransaction._id,
          this.toEditTransaction.name
        );
        this.closeRenameModal();
        this.refresh();
      } catch (err) {
        console.error("Failed to rename the transaction.", err);
      } finally {
        this.loadingRename = false;
      }
    },

    closeRenameModal() {
      this.modalRename = false;
      this.toEditTransaction = {};
    },

    /**
     * Check if the prefix is present in the Transaction Name
     * @param item
     */
    containsPrefix(item: Transaction): boolean {
      try {
        return item.name.indexOf(this.pinPrefix) == 0;
      } catch (err) {
        return false;
      }
    },

    async unmaskAll() {
      try {
        this.unmaskAllActionLoading = true;
        this.numTransaction = await TransactionController.unMaskAllTransaction(
          this.application
        );
        await this.refresh();
      } catch (err) {
        console.error("Failed to un-mask all the transactions", err);
      } finally {
        this.unmaskAllActionLoading = false;
      }
    },

    /**
     * Get the statistics for a transaction
     */
    async getTransactionStatistics(transaction: Transaction) {
      try {
        this.loadingStatistics = true;
        this.statistics = await TransactionController.getStatistics(
          transaction._id
        );
        this.menuShow = transaction._id;
      } catch (e) {
        Logger.error("Failed to get transaction statistics", e);
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to get transaction statistics.",
          body: e
        });
      } finally {
        this.loadingStatistics = false;
      }
    },

    /**
     * Show a technology
     * @param transaction Transaction to modify
     * @param type Type of the modification
     * @param technology Technolgy to show
     */
    async showTechnology(
      transaction: Transaction,
      type: string,
      technology: string
    ) {
      try {
        await TransactionController.showTechnology(
          transaction._id,
          type,
          technology
        );
        await this.getTransactionStatistics(transaction);
      } catch (e) {
        Logger.error("Failed to hide the technology", e);
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to hide the technology.",
          body: e
        });
      } finally {
        this.loadingStatistics = false;
      }
    },

    /**
     * Hide a technology
     * @param transaction Transaction to modify
     * @param type Type of the modification
     * @param technology Technolgy to show
     */
    async hideTechnology(
      transaction: Transaction,
      type: string,
      technology: string
    ) {
      try {
        await TransactionController.hideTechnology(
          transaction._id,
          type,
          technology
        );
        await this.getTransactionStatistics(transaction);
      } catch (e) {
        Logger.error("Failed to hide the technology", e);
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to hide the technology.",
          body: e
        });
      } finally {
        this.loadingStatistics = false;
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
        this.numTransaction = await TransactionController.maskByCount(
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
        this.numTransaction = await TransactionController.maskByTechnology(
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
        this.numTransaction = await TransactionController.maskByTerms(
          this.application,
          this.maskActionTermsList
        );
        await this.refresh();
      } catch (err) {
        Logger.error("Failed to mask by terms.", err);
      } finally {
        this.maskActionLoading = false;
      }
    },

    async getInsights() {
      try {
        this.transactionInsights = await TransactionController.getInsightsUnmaskedTransaction(
          this.application
        );

        this.rangeTechnology = [
          this.transactionInsights.minTechnology,
          this.transactionInsights.maxTechnology
        ];

        this.rangeObject = [
          this.transactionInsights.minObject,
          this.transactionInsights.maxObject
        ];
      } catch (err) {
        console.error("Failed to get the insights of transactions", err);
      }
    },

    async getNumberTransaction() {
      try {
        this.numTransaction = await TransactionController.getNumberTransaction(
          this.application
        );
        return this.numTransaction;
      } catch (err) {
        console.error("Failed to get the number of transaction", err);
      }
    },

    async getNumberMaskedTransaction() {
      try {
        this.numMaskedTransaction = await TransactionController.getNumberMaskedTransaction(
          this.application
        );
      } catch (err) {
        console.error("Failed to get the number of transaction", err);
      }
    },

    async transactionApiCall() {
      this.loadingTransaction = true;

      await this.getNumberTransaction();

      const filter: any = {
        minTechnologies: this.rangeTechnology[0],
        maxTechnologies: this.rangeTechnology[1],
        minObject: this.rangeObject[0],
        maxObject: this.rangeObject[1],
        techContained: this.technologySearch
      };

      if (this.searchName != "") filter.name = this.searchName;

      // eslint-disable-next-line prefer-const
      let { sortBy, sortDesc, page, itemsPerPage } = this.optionsTransaction;
      if (itemsPerPage === -1) {
        itemsPerPage = this.numTransaction;
      }

      let sortByOption = null;
      let sortByDesccOption = null;
      if (Array.isArray(sortBy) && sortBy.length === 1)
        sortByOption = sortBy[0];
      if (Array.isArray(sortDesc) && sortDesc.length === 1)
        sortByDesccOption = sortDesc[0];

      const transactions = await TransactionController.getBatchTransaction(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortByOption,
        sortByDesccOption,
        filter
      );

      this.loadingTransaction = false;
      this.displayedTransaction = transactions;
      return transactions;
    },

    // Call the api to retrieve Masked transactions
    async maskedTransactionApiCall() {
      this.loadingMaskedTransaction = true;

      await this.getNumberMaskedTransaction();
      const { sortBy, sortDesc, page } = this.optionsMaskedTransaction;

      let { itemsPerPage } = this.optionsMaskedTransaction;

      if (itemsPerPage === -1) {
        itemsPerPage = this.numMaskedTransaction;
      }

      let sortByOption = null;
      let sortByDesccOption = null;
      if (Array.isArray(sortBy) && sortBy.length === 1)
        sortByOption = sortBy[0];
      if (Array.isArray(sortDesc) && sortDesc.length === 1)
        sortByDesccOption = sortDesc[0];

      const transactions = await TransactionController.getBatchMaskedTransaction(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortByOption,
        sortByDesccOption
      );

      this.loadingMaskedTransaction = false;
      this.displayedMaskedTransaction = transactions;
      return transactions;
    },

    async maskTransaction(item: Transaction) {
      await TransactionController.maskTransaction(this.application, item._id);
      this.refresh();
    },

    async pinTransaction(item: Transaction) {
      await TransactionController.pinTransaction(
        this.application,
        item._id,
        this.pinPrefix
      );
      await this.refresh();
    },

    async unpinTransaction(item: Transaction) {
      await TransactionController.unpinTransaction(
        this.application,
        item._id,
        this.pinPrefix
      );
      await this.refresh();
    },

    async renameTransaction(item: Transaction) {
      await TransactionController.renameTransaction(
        this.application,
        item._id,
        item.name
      );
      await this.refresh();
    },

    async unMaskTransaction(item: Transaction) {
      await TransactionController.unmaskTransaction(this.application, item._id);
      this.refresh();
    },

    async refresh() {
      await this.getInsights();
      await this.getTechnologies();
      await this.transactionApiCall();
      await this.maskedTransactionApiCall();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },

    optionsTransaction: {
      handler() {
        this.transactionApiCall();
      },
      deep: true
    },

    optionsMaskedTransaction: {
      handler() {
        this.maskedTransactionApiCall();
      },
      deep: true
    }
  }
});
</script>
