<template>
  <v-card>
    <v-card-title>
      Review the transactions in the {{ application }} application.
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
            <v-card-title>
              Power actions
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-card class="mr-2" max-width="344">
                    <v-card-text>
                      <div>Clean by number of objects</div>
                      <div class="text--primary">
                        Mask all the transactions with a number of objects
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
                      <v-btn text color="persianGrey" @click="maskByCount" :loading="maskActionLoading">
                        <p>Mask the transactions .</p>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card max-width="344">
                    <v-card-text>
                      <div>Reset transactions</div>
                      <div class="text--primary">
                        Unmask all the transactions ( Reset )
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn text color="persianGrey" @click="unmaskAll" :loading="unmaskAllActionLoading">
                        Unmask all
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-container>
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
                icon
                color="green"
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
                :options.sync="optionsTransaction"
                :server-items-length="numTransaction"
                :loading="loadingTransaction"
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="maskTransaction(item)">
                    mdi-eye-off
                  </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="mt-5"> </v-row>
        <v-row>
          <!-- Masked Transaction -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Masked transactions in the application
              <v-spacer></v-spacer>
              <v-btn
                class="mr-5"
                icon
                color="green"
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
                :options.sync="optionsMaskedTransaction"
                :server-items-length="numMaskedTransaction"
                :loading="loadingMaskedTransaction"
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="unMaskTransaction(item)">
                    mdi-eye
                  </v-icon>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import TransactionController from "@/api/imaging/Transaction.controller";
import ITransaction from "@/api/interface/imaging/Transaction.interface";

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
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name"
      },
      { text: "Full Name", value: "fullName" },
      { text: "Count", value: "count" },
      { text: "Technologies", value: "technologies" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    headersMasked: [
      {
        text: "Name",
        align: "start",
        value: "name"
      },
      { text: "Full Name", value: "fullName" },
      { text: "Count", value: "count" },
      { text: "Technologies", value: "technologies" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    loadingTransaction: true,
    loadingMaskedTransaction: true,

    optionsTransaction: {},
    optionsMaskedTransaction: {},

    numTransaction: 0,
    numMaskedTransaction: 0,

    // Transactions displayed
    displayedTransaction: [],
    displayedMaskedTransaction: [],

    startIndexTransaction: 0,
    endIndexTransaction: 0,
    pageTransaction: 0,

    startIndexMaskedTransaction: 0,
    endIndexMaskedTransaction: 0,
    pageMaskedTransaction: 0,

    // Power Actions
    maskActionLimit: 0,
    maskActionLoading: false,

    unmaskAllActionLoading: false
  }),

  methods: {
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

    async maskByCount() {
      try {
        this.maskActionLoading = true;
        this.numTransaction = await TransactionController.maskByCount(
            this.application,
            this.maskActionLimit
        );
        await this.refresh();

      } catch (err) {
        console.error("Failed to mask by count", err);
      } finally {
        this.maskActionLoading = false;
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
      const { sortBy, sortDesc, page, itemsPerPage } = this.optionsTransaction;
      const transactions = await TransactionController.getBatchTransaction(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortBy,
        sortDesc
      );

      this.loadingTransaction = false;
      this.displayedTransaction = transactions;
      return transactions;
    },

    // Call the api to retrieve Masked transactions
    async maskedTransactionApiCall() {
      this.loadingMaskedTransaction = true;

      await this.getNumberMaskedTransaction();
      const {
        sortBy,
        sortDesc,
        page,
        itemsPerPage
      } = this.optionsMaskedTransaction;
      const transactions = await TransactionController.getBatchMaskedTransaction(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
        sortBy,
        sortDesc
      );

      this.loadingMaskedTransaction = false;
      this.displayedMaskedTransaction = transactions;
      return transactions;
    },

    async maskTransaction(item: ITransaction) {
      await TransactionController.maskTransaction(this.application, item._id);
      this.refresh();
    },

    async unMaskTransaction(item: ITransaction) {
      await TransactionController.unmaskTransaction(this.application, item._id);
      this.refresh();
    },

    refresh() {
      this.transactionApiCall();
      this.maskedTransactionApiCall();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
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
