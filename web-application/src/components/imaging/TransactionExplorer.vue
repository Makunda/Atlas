<template>
  <v-card>
    <v-card-title>
      Review the transaction of the application.
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row class="mt-5">

        </v-row>
        <v-row>
          <!-- Transaction -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Transaction in the application
              <v-spacer></v-spacer>
              <v-btn class="mr-5" icon color="green" @click="transactionApiCall()">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
              <v-data-table
                  :headers="headers"
                  :items="diplayedTransaction"
                  :options.sync="optionsTransaction"
                  :server-items-length="getNumberTransaction"
                  :loading="loadingTransaction"
                  class="elevation-1"
              ></v-data-table>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row class="mt-5">

        </v-row>
        <v-row>
          <!-- Masked Transaction -->
          <v-card class="ma-4" width="100%">
            <v-card-title>
              Masked Transaction in the application
              <v-spacer></v-spacer>
              <v-btn class="mr-5" icon color="green" @click="refresh">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>

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

export default Vue.extend({
  name: "TransactionExplorer",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName
    this.transactionApiCall();
  },


  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'name',
      },
      { text: 'Full Name', value: 'fullName' },
      { text: 'Count', value: 'count' },
      { text: 'Technologies', value: 'technologies' }
    ],

    loadingTransaction: true,

    optionsTransaction: {},
    optionsMaskedTransaction: {},

    numTransaction: 0,
    numMaskedTransaction: 0,

    // Transactions displayed
    diplayedTransaction: [],
    diplayedMaskedTransaction: [],

    startIndexTransaction: 0,
    endIndexTransaction: 0,
    pageTransaction: 0,

    startIndexMaskedTransaction: 0,
    endIndexMaskedTransaction: 0,
    pageMaskedTransaction: 0,

  }),

  methods: {
    async getNumberTransaction() {
      try {
        this.numTransaction = await TransactionController.getNumberTransaction(this.application);
        return this.numTransaction;
      } catch (err) {
        console.error("Failed to get the number of transaction", err);
      }
    },

    async getNumberMaskedTransaction() {
      try {
        this.numMaskedTransaction = await TransactionController.getNumberMaskedTransaction(this.application);
      } catch (err) {
        console.error("Failed to get the number of transaction", err);
      }
    },

    async transactionApiCall() {
      this.loadingTransaction = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.optionsTransaction;
      const transactions = await TransactionController.getBatchTransaction(
        this.application,
        (page - 1) * itemsPerPage,
        page * itemsPerPage
      );

      this.loadingTransaction = false;
      this.diplayedTransaction = transactions;
      return transactions;
    },

    async maskedTransactionApiCall() {
      console.log("TEST")
    },

    refresh() {
      console.log("TEST")
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    },

    optionsTransaction: {
      handler () {
        this.transactionApiCall()
      },
      deep: true,
    },

    optionsMaskedTransaction: {
      handler () {
        this.maskedTransactionApiCall()
      },
      deep: true,
    },
  }
});
</script>
