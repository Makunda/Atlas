<template>
  <v-container fluid>
    <v-row class="ml-8 my-6">
      <h2 class="text-h2 mx-4">
        Generating report for application {{ value }}
      </h2>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="loading"
        :loading="loading"
        class="ma-2"
        color="secondary"
        v-on:click="launchGenerate"
      >
        Generate
        <v-icon dark right>
          mdi-chart-box
        </v-icon>
      </v-btn>

      <v-btn
        :disabled="!generated"
        class="ma-2 white--text"
        color="blue-grey"
        @click="loader = 'loading3'"
      >
        Download
        <v-icon dark right>
          mdi-archive-arrow-down
        </v-icon>
      </v-btn>
    </v-row>
    <v-row
      v-if="loading"
      class="d-flex flex-column text-center mx-auto my-10"
      fill-height
      min-width="80%"
    >
      <v-progress-circular
        :size="70"
        class="mx-auto"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <p class="my-5">
        Loading report for application ...<br />This can take a while on large
        application
      </p>
    </v-row>
    <v-row v-if="!loading" class="px-6" fill-height fluid ma-0 pa-0>
      <v-col cols="6">
        <v-row>
          <StatisticTile
            v-for="n in leftStats"
            :key="n.title"
            :description="n.description"
            :results="n.result"
            :title="n.title"
          ></StatisticTile>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <StatisticTile
            v-for="m in rightStats"
            :key="m.title"
            :description="m.description"
            :results="m.result"
            :title="m.title"
          ></StatisticTile>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="!loading" class="hidden-md-and-up" fill-height>
      <v-col cols="12" ma-0 pa-2>
        <v-row>
          <StatisticTile
            v-for="n in statisticsList"
            :key="n.title"
            :description="n.description"
            :results="n.result"
            :title="n.title"
          ></StatisticTile>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="errorState != null">
      <ErrorDialog :text="errorState.text" :title="errorState.title">
      </ErrorDialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { ApplicationRecord } from '@/api/controllers/applications/ApplicationController';
import ErrorDialog from '@/components/error/ErrorDialog.vue';
import StatisticTile from '@/components/screens/statistics/tiles/StatisticTile.vue';
import { DemeterStatisticResult } from '@/api/interface/extensions/demeter/DemeterStatistic';

export default Vue.extend({
  name: 'StatisticsApplication',
  props: ['value'],

  components: {
    ErrorDialog,
    StatisticTile,
  },

  data: () => ({
    generated: false,
    loading: false as boolean,
    numberOfApplication: 0 as number,
    applicationList: [] as ApplicationRecord[],
    statisticsList: [] as DemeterStatisticResult[],
    leftStats: [] as DemeterStatisticResult[],
    rightStats: [] as DemeterStatisticResult[],
    errorState: null as unknown,
  }),

  methods: {
    /**
     * Get the results for a specific application
     */
    getReportResult() {
      this.loading = true;
      console.log(`Loading statistics for application with name ${this.value}`);

      // Todo implement statistics
    },

    launchGenerate() {
      this.getReportResult();
    },
  },
});
</script>
