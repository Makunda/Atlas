<template>
  <v-container fluid>
    <v-row>
      <v-container fluid>
        <v-row v-for="stat in statistics" :key="stat.id">
          <LinearStatisticTile
            :title="stat.title"
            :description="stat.description"
            :percentage="stat.percentage"
            :inverted="stat.inverseResults"
          ></LinearStatisticTile>
        </v-row>
      </v-container>
    </v-row>

    <!-- Snack bar for Information -->
    <v-snackbar v-model="snackbarInfoDisplay" :timeout="10000">
      {{ snackbarInfo }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarInfo = ''">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import StatisticInterface from '@/api/interface/statistics/Statistic.interface';
import { StatisticsController } from '@/api/controllers/statistics/StatisticsController';
import LinearStatisticTile from '@/components/screens/statistics/tiles/LinearStatisticTile.vue';

export default Vue.extend({
  name: 'StatisticsColumn',

  components: {
    LinearStatisticTile,
  },

  data: () => ({
    application: '',

    loadingStatistics: false,
    statistics: [] as StatisticInterface[],

    loadingCategories: false,
    categories: [] as string[],
    category: '',

    // Snackbar
    snackbarInfoDisplay: false,
    snackbarInfo: '',
  }),

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.loadStatistics();
  },

  methods: {
    async loadStatistics() {
      if (this.application == '') return;
      this.loadingStatistics = true;
      try {
        if (this.category != '') {
          this.statistics = await StatisticsController.getStatisticsList(
            this.application,
          );
        } else {
          this.statistics = await StatisticsController.getStatisticsList(
            this.application,
            this.category,
          );
        }
      } catch (err) {
        console.error('Failed to load the statistics.', err);
        this.snackbarInfo = 'Failed to load the statistics';
        this.snackbarInfoDisplay = false;
      } finally {
        this.loadingStatistics = false;
      }
    },

    async getCategories() {
      this.loadingCategories = true;
      try {
        this.statistics = await StatisticsController.getCategories();
      } catch (err) {
        console.error('Failed to load the statistics categories.', err);
        this.snackbarInfo = 'Failed to load the statistics\' categories.';
        this.snackbarInfoDisplay = false;
      } finally {
        this.loadingCategories = false;
      }
    },

    async refresh() {
      await this.getCategories();
      await this.loadStatistics();
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    },
  },
});
</script>

<style scoped></style>
