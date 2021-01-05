<template>
  <v-container>
    <v-row class="text-center">
      <h4 class="text-h4">Check the configuration</h4>
    </v-row>
    <v-row class="mt-5 d-flex flex-column">
      <h5 class="text-h5">Statistics on the application</h5>
      <p>
        Quickly discover if the analyze of the application is correct with
        statistiscs on it
      </p>
    </v-row>
    <v-row class="my-5">
      <v-progress-circular
        v-if="loadingStatistics"
        :size="60"
        :width="7"
        color="persianGrey"
        class="mx-auto"
        indeterminate
      ></v-progress-circular>

      <PercentageTile
        v-for="(item, i) in statistics"
        v-bind:key="i"
        :title="item.title"
        :description="item.description"
        :percentage="item.percentage"
        :inverted="item.inverseResult"
      ></PercentageTile>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-5">
      <h5 class="text-h5">Grouping action on configuration</h5>
      <ActionTileViewer> </ActionTileViewer>
    </v-row>
    <v-row class="mb-5"></v-row>
  </v-container>
</template>

<script lang="ts">
import {
  StatisticPercentageResult,
  StatisticsController,
} from "@/api/applications/StatisticsController";
import Vue from "vue";
import PercentageTile from "@/components/screens/modernization/tiles/PercentageTile.vue";
import ActionTileViewer from '@/components/screens/modernization/components/ActionTileViewer.vue'

export default Vue.extend({
  name: "ConfigurationStep",

  components: {
    PercentageTile,
    ActionTileViewer
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getConfigurationStatistics();
  },

  data: () => ({
    application: "",
    statistics: [] as StatisticPercentageResult[],
    loadingStatistics: false,
  }),

  methods: {
    getConfigurationStatistics() {
      this.loadingStatistics = true;
      this.statistics = [];
      StatisticsController.getConfigurationStatistics(this.application)
        .then((res: StatisticPercentageResult[]) => {
          this.statistics = res;
        })
        .catch((err) => {
          console.error(
            "An error occured while retrieving configuration statistics...",
            err
          );
        })
        .finally(() => {
          this.loadingStatistics = false;
        });
    },
  },

  watch: {
    getApplicationName(newApp, oldApp) {
      this.application = newApp;
      this.getConfigurationStatistics();
    },
  },
});
</script>
