<template>
  <v-card width="100%">
    <v-card-title class="flex-column align-start">
      <p style="cursor: pointer" @click="goBack()">
        <v-icon class="mr-2" color="primary">mdi-arrow-left</v-icon>
        Return to the transaction explorer
      </p>

      <h3 class="pb-3 pb-5 text-h4 ml-1">Transaction Studio</h3>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1 ml-2">
        Modify the transaction n°{{ getTransactionId }}
      </p>
    </v-card-subtitle>
    <v-card-text>
      <v-container fluid>
        <!-- Name options -->
        <v-row class="pl-3">
          <p class="text-h5 ma-0 mb-1">Naming options</p>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-text-field
              v-model="name"
              hint="Name of the transaction ( displayed in list box ) "
              label="Name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="fullName"
              hint="Full name of the transaction"
              label="Full name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn color="deepcharcoal" dark x-large>
              Update
            </v-btn>
          </v-col>
        </v-row>

        <!--   Objects and types     -->
        <v-row class="pl-3 mt-3 mb-2">
          <p class="text-h5 ma-0 mb-3">Objects and types</p>
        </v-row>

        <!-- Loading -->
        <v-row>
          <v-progress-linear
            v-if="loadingStatistics"
            color="deepblue"
            indeterminate
          ></v-progress-linear>
        </v-row>

        <!--   Statistics     -->
        <v-row>
          <v-col cols="3">
            <p class="">
              <b>{{ statistics.size }}</b> Objects/SubObjects
            </p>
          </v-col>
          <v-col cols="3"
            ><p><b>Start point:</b> {{ statistics.startTechnology }}</p>
          </v-col>
          <v-col cols="3"
            ><p><b>End point:</b> {{ statistics.endTechnology }}</p>
          </v-col>
        </v-row>

        <!--   Object types and SubObject     -->
        <v-row>
          <v-col class="flex flex-column" cols="6">
            <span class="text-h6">Object information: </span> <br />
            <span
              v-for="(it, i) in statistics.objects"
              :key="i"
              class="flex"
              style="margin-left: 5px"
            >
              Type: {{ it.type }} <span v-if="!it.displayed">(hidden)</span>-
              {{ it.percentage.toFixed(2) }}%
              <v-icon
                v-if="it.displayed"
                class="mr-2"
                small
                @click="hideTechnology(item, 'Object', it.type)"
              >
                mdi-eye-off
              </v-icon>
              <v-icon
                v-else
                class="mr-2"
                small
                @click="showTechnology(item, 'Object', it.type)"
              >
                mdi-eye
              </v-icon>
              <br />
            </span>
          </v-col>
          <!--     Sub object     -->
          <v-col class="flex flex-column" cols="6">
            <span class="text-h6">SubObject information: </span> <br />
            <span
              v-for="(it, i) in statistics.subObjects"
              :key="i"
              style="margin-left: 5px"
            >
              Type: {{ it.type }} <span v-if="!it.displayed">(hidden)</span> -
              {{ it.percentage.toFixed(2) }}%
              <v-icon
                v-if="it.displayed"
                class="mr-2"
                small
                @click="hideTechnology(item, 'SubObject', it.type)"
              >
                mdi-eye-off
              </v-icon>
              <v-icon
                v-else
                class="mr-2"
                small
                @click="showTechnology(item, 'SubObject', it.type)"
              >
                mdi-eye
              </v-icon>

              <br
            /></span>
          </v-col>
        </v-row>

        <!--   Transaction visualization     -->

        <v-row> </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import TransactionController from '@/api/controllers/imaging/TransactionController';
import Logger from '@/utils/Logger';
import flash, { FlashType } from '@/modules/flash/Flash';
import TransactionStatistics from '@/api/interface/imaging/TransactionStatistics';

export default Vue.extend({
  name: 'TransactionStudio',

  computed: {
    getTransactionId() {
      return parseInt(this.$route.params.id);
    },
  },

  async mounted() {
    // if id is not null or empty, load
    if (!isNaN(this.getTransactionId)) {
      await this.getTransactionInsights();
    }
  },

  methods: {
    goBack() {
      this.$router.replace('/atlas/tuning/transaction').catch(() => {
        // Ignored
      });
    },

    /**
     * Get the list of transaction insights
     */
    async getTransactionInsights() {
      try {
        this.loadingStatistics = true;
        this.statistics = await TransactionController.getStatistics(
          this.getTransactionId,
        );
      } catch (e) {
        Logger.error('Failed to get transaction insights', e);
        flash.commit('add', {
          type: FlashType.ERROR,
          title: 'Failed to get transaction insights.',
          body: e,
        });
      } finally {
        this.loadingStatistics = false;
      }
    },
  },

  data: () => ({
    // Name
    name: '' as string,
    fullName: '' as string,
    loadingName: false,

    // Technologies
    loadingStatistics: false,
    statistics: {} as TransactionStatistics,
  }),
});
</script>

<style scoped></style>
