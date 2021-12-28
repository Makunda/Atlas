/* eslint-disable prettier/prettier */
<template>
  <v-container fluid>
    <v-container class=" d-flex flex-column">
      <v-container class="ma-3 px-10">
        <v-card class="mx-auto mt-2">
          <v-card-title>
            <h2 class="text-h4 mb-3 ">
              Generate reports for application {{ application }}
            </h2>
            <v-spacer></v-spacer>
            <v-text-field
              class="pt-1"
              dense
              filled
              label="Search Reports"
              placeholder="Search in reports"
              rounded
            ></v-text-field>
            <v-btn class="pb-5" color="green" icon x-large @click="refresh">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </v-card-title>
          <!-- Subtitle containing the different insights -->
          <v-card-subtitle></v-card-subtitle>
          <v-card-text>
            <v-container fluid>
              <v-row
                v-if="loadingReports"
                class="d-flex justify-center"
                md="12"
              >
                <v-progress-circular
                  :size="50"
                  class="ma-10"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-row>
              <v-row
                v-if="errorReports"
                class="d-flex flex-column justify-center"
                md="12"
              >
                <h3>Failed to retrieve the reports</h3>
                <p class="subtitle-2 red--text">{{ errorReports }}</p>
                <v-btn color="primary" depressed @click="loadReports">
                  Retry
                </v-btn>
              </v-row>
              <!--  Container for the different reports  -->
              <v-row class="my-5">
                <v-card
                  v-for="report in reportList"
                  v-bind:key="report.id"
                  :class="
                    focusReport.id === report.id ? 'selectedCard' : 'normalCard'
                  "
                  class="mx-auto ma-2"
                  max-width="450"
                  outlined
                >
                  <v-container>
                    <v-row>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <div
                            :class="
                              focusReport.id === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                            class="text-overline mb-4 d-flex flex-row"
                          >
                            {{ report.categories }}
                            <v-spacer></v-spacer>
                            <v-progress-circular
                              v-if="loadingReport === report.id"
                              color="primary"
                              indeterminate
                            ></v-progress-circular>
                          </div>
                          <v-list-item-title
                            :class="
                              focusReport.id === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                            class="text-h5 mb-1"
                          >
                            {{ report.name }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            :class="
                              focusReport.id === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                            >{{ report.description }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-row>
                    <v-row>
                      <v-expand-transition>
                        <!--   Card listing the different parameters of the query -->
                        <v-card
                          v-show="
                            focusReport.id === report.id &&
                              report.parameters &&
                              report.parameters.length > 0
                          "
                          class="my-4"
                          color="#E0E0E0"
                          style="background: white; color: black !important;"
                          width="100%"
                        >
                          <v-card-subtitle>
                            Query Options
                          </v-card-subtitle>
                          <v-container>
                            <v-row
                              v-for="(p, i) in report.parameters"
                              v-bind:key="i"
                              class="pa-2"
                            >
                              <v-container>
                                <v-row>
                                  <p>
                                    <i>{{ p.description }}</i>
                                  </p>
                                </v-row>
                                <v-row
                                  v-if="
                                    p.values !== null &&
                                      typeof p.values !== 'undefined'
                                  "
                                >
                                  <v-select
                                    v-model="focusReportParameters[p.name]"
                                    :items="p.values"
                                    :label="p.name"
                                    outlined
                                  ></v-select>
                                </v-row>
                                <v-row v-else>
                                  <v-text-field
                                    v-model="focusReportParameters[p.name]"
                                    :label="p.name"
                                    clearable
                                    outlined
                                  ></v-text-field>
                                </v-row>
                              </v-container>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-expand-transition>
                    </v-row>
                  </v-container>

                  <v-card-actions class="mt-4">
                    <v-btn
                      v-if="focusReport.id !== report.id"
                      :loading="loadingReport === report.id"
                      outlined
                      rounded
                      text
                      @click="focusReport = report"
                    >
                      Customize
                    </v-btn>

                    <v-btn
                      v-if="focusReport.id === report.id"
                      :loading="loadingReport === report.id"
                      class="white--text"
                      outlined
                      rounded
                      text
                      @click="generateReports"
                    >
                      Generate
                    </v-btn>
                    <v-btn
                      v-if="focusReport.id === report.id"
                      class="white--text"
                      outlined
                      rounded
                      text
                      @click="focusReport = { id: -1 }"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>
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
import GroupResult from '@/api/interface/extensions/paris/GroupResult';
import { ReportController } from '@/api/controllers/reports/ReportController';
import { ReportInterface } from '@/api/interface/reports/report.interface';

export default Vue.extend({
  name: 'Reporting',

  components: {},

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.loadReports();
  },

  data: () => ({
    application: '',

    // Report list
    errorReports: '',
    loadingReports: false,
    reportList: [] as ReportInterface[],

    // Element
    focusReport: {} as any,
    focusReportParameters: {},
    loadingReport: -1,

    // Snack bar
    snackbarInfo: '',
    snackbarInfoDisplay: false,
  }),

  methods: {
    /**
     * Load reports
     */
    async loadReports() {
      try {
        this.errorReports = '';
        this.loadingReports = true;
        this.reportList = await ReportController.getReportList();
      } catch (err) {
        this.errorReports = err;
      } finally {
        this.loadingReports = false;
      }
    },

    /**
     * Generate an async report
     */
    async generateReports() {
      if (this.loadingReport !== -1) {
        this.snackbarInfoDisplay = true;
        this.snackbarInfo = 'A Report is being processed. Please wait.';
      } else {
        this.snackbarInfoDisplay = true;
        this.snackbarInfo = `Generating report: ${this.focusReport.name}`;

        try {
          this.loadingReport = this.focusReport.id;
          await ReportController.generateReport(
            this.focusReport.id,
            this.focusReport.nickname,
            this.application,
            this.focusReportParameters,
          );
          this.snackbarInfo = 'The report has been successfully generated.';
        } catch (err) {
          this.snackbarInfo = `Error, failed to process the report. ${err}`;
        } finally {
          this.snackbarInfoDisplay = true;
          this.loadingReport = -1;
        }
      }
    },

    refresh() {
      this.reportGenerated = false;
      this.reportLoading = false;
      this.groupResultLoading = false;
      this.groupResult = [] as GroupResult[];
      this.loadReports();
    },
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.reportGenerated = false;
    },

    focusReportId() {
      this.focusReportParameters = {};
    },
  },
});
</script>

<style>
.normalCard {
  background-color: #ffffff;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.8s ease-out;
  -o-transition: all 0.8s ease-out;
  transition: all 0.8s ease-out;
}

.selectedCard {
  background-color: #264653 !important;
  -webkit-transition: all 0.8s ease-out;
  -moz-transition: all 0.8s ease-out;
  -o-transition: all 0.8s ease-out;
  transition: all 0.8s ease-out;
}
</style>
