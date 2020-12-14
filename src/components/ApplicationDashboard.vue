<template>
  <v-container>
    <v-row no-gutters>
      <v-toolbar dense>
        <v-toolbar-title
          >Report generator for {{ applicationName }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-autocomplete
          v-model="applicationName"
          :loading="loadingApplication"
          :items="applicationList"
          :search-input.sync="applicationName"
          @change="getStatisticsResult()"
          item-text="name"
          hide-no-data
          hide-details
          label="Pick an application"
        ></v-autocomplete>
      </v-toolbar>
    </v-row>
    <v-row width="100%" ma-0 pa-0 fill-height v-if="loading">
      <v-progress-circular
        class="mx-auto"
        :size="70"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-row>
    <v-row
      fluid
      ma-0
      pa-0
      fill-height
      v-if="!loading"
      class="hidden-sm-and-down"
    >
      <v-col cols="6">
        <v-row>
          <StatisticTile
            v-for="n in leftStats"
            :key="n.title"
            :title="n.title"
            :description="n.description"
            :results="n.result"
          ></StatisticTile>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <StatisticTile
            v-for="m in rightStats"
            :key="m.title"
            :title="m.title"
            :description="m.description"
            :results="m.result"
          ></StatisticTile>
        </v-row>
      </v-col>
    </v-row>
    <v-row fill-height v-if="!loading" class="hidden-md-and-up">
      <v-col ma-0 pa-2 cols="12">
        <v-row>
          <StatisticTile
            v-for="n in statisticsList"
            :key="n.title"
            :title="n.title"
            :description="n.description"
            :results="n.result"
          ></StatisticTile>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="errorState != null">
      <ErrorDialog :title="errorState.title" :text="errorState.text">
      </ErrorDialog>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ApplicationController,
  ApplicationRecord
} from "@/api/applications/ApplicationController";
import {
  StatisticResult,
  StatisticsController
} from "@/api/applications/StatisticsController";
import ErrorDialog from "./error/ErrorDialog.vue";
import StatisticTile from "./tags/StatisticTile.vue";

export default Vue.extend({
  name: "ApplicationDashboard",

  components: {
    ErrorDialog,
    StatisticTile
  },

  data: () => ({
    loadingApplication: true as boolean,
    loading: true as boolean,
    applicationName: "No application selected" as string,
    numberOfApplication: 0 as number,
    applicationList: [] as ApplicationRecord[],
    statisticsList: [] as StatisticResult[],
    leftStats: [] as StatisticResult[],
    rightStats: [] as StatisticResult[],
    errorState: null as unknown
  }),

  created() {
    this.getApplicationList();
  },

  methods: {
    getApplicationList() {
      ApplicationController.getSortedApplications().then(
        (res: ApplicationRecord[]) => {
          this.numberOfApplication = res.length;
          this.applicationList = res;
          if (res.length != 0) {
            this.applicationName = res[0].name;
          } else {
            this.applicationName = "No Application found";
          }

          this.loadingApplication = false;
          this.getStatisticsResult();
        }
      );
    },

    getStatisticsResult() {
      this.loading = true;
      const appName = this.applicationName;
      StatisticsController.getStatisticResults("Configuration_1", appName)
        .then((res: StatisticResult[]) => {
          this.loading = false;
          console.log(
            "Statistics were loaded for application with name : " + appName
          );
          this.statisticsList = res;

          console.log(`${res.length} statistics were loaded.`);

          const pivotPoint: number = Math.floor(res.length / 2);
          this.leftStats = res.splice(0, pivotPoint);
          this.rightStats = res;
        })
        .catch(err => {
          this.loading = false;
          this.errorState = { title: "Neo4j error", description: err };
          console.error("Error trying to retrieve statistics", err);
        });
    }
  }
});
</script>
