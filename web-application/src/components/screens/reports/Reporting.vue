<template>
  <v-container fluid>
    <v-container class=" d-flex flex-column">

      <v-container class="ma-3 px-10">
        <v-card class="mx-auto mt-2">
          <v-card-title
            >
            <h2 class="text-h4 mb-3 ">
              Generate reports for application {{ application }}
            </h2>
            <v-spacer></v-spacer>
            <v-text-field
              class="pt-1"
              label="Search Reports"
              placeholder="Search in reports"
              filled
              rounded
              dense
            ></v-text-field>
            <v-btn icon color="green" @click="refresh" x-large class="pb-5">
              <v-icon>mdi-cached</v-icon>
            </v-btn></v-card-title
          >
          <!-- Subtitle containing the different insights -->
          <v-card-subtitle> </v-card-subtitle>
          <v-card-text>
            <v-container fluid>
              <v-row
                v-if="loadingReports"
                md="12"
                class="d-flex justify-center"
              >
                <v-progress-circular
                  class="ma-10"
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-row>
              <v-row
                v-if="errorReports"
                md="12"
                class="d-flex flex-column justify-center"
              >
                <h3>Failed to retrieve the reports</h3>
                <p class="subtitle-2 red--text">{{ errorReports }}</p>
                <v-btn @click="loadReports" depressed color="primary">
                  Retry
                </v-btn>
              </v-row>
              <!--  Container for the different reports  -->
              <v-row class="my-5">
                <v-card
                  v-for="report in reportList"
                  v-bind:key="report.id"
                  class="mx-auto ma-2"
                  max-width="450"
                  :class="
                    focusReportId === report.id ? 'selectedCard' : 'normalCard'
                  "
                  outlined
                >
                  <v-container>
                    <v-row
                      ><v-list-item three-line>
                        <v-list-item-content>
                          <div
                            class="text-overline mb-4"
                            :class="
                              focusReportId === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                          >
                            {{ report.categories }}
                            <v-spacer></v-spacer>
                            <v-progress-circular
                              indeterminate
                              color="primary"
                              v-if="loadingReport === report.id"
                            ></v-progress-circular>
                          </div>
                          <v-list-item-title
                            class="text-h5 mb-1"
                            :class="
                              focusReportId === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                          >
                            {{ report.name }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            :class="
                              focusReportId === report.id
                                ? 'white--text'
                                : 'black--text'
                            "
                            >{{ report.description }}</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item></v-row
                    >
                    <v-row>
                      <v-expand-transition>
                        <!--   Card listing the different parameters of the query -->
                        <v-card
                          class="my-4"
                          v-show="
                            focusReportId === report.id &&
                              report.parameters &&
                              report.parameters.length > 0
                          "
                          width="100%"
                          color="#E0E0E0"
                          style="background: white; color: black !important;"
                        >
                          <v-card-subtitle>
                            Query Options
                          </v-card-subtitle>
                          <v-container>
                            <v-row
                              class="pa-2"
                              v-for="(p, i) in report.parameters"
                              v-bind:key="i"
                            >
                              <v-container>
                                <v-row>
                                  <p>
                                    <i>{{ p.description }}</i>
                                  </p>
                                </v-row>
                                <v-row v-if="p.values === null">
                                  <v-text-field
                                    v-model="focusReportParameters[p.name]"
                                    :label="p.name"
                                    clearable
                                    outlined
                                  ></v-text-field>
                                </v-row>
                                <v-row v-if="p.values !== null">
                                  <v-select
                                    v-model="focusReportParameters[p.name]"
                                    :items="p.values"
                                    :label="p.name"
                                    outlined
                                  ></v-select>
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
                      v-if="focusReportId !== report.id"
                      @click="focusReportId = report.id"
                      outlined
                      rounded
                      text
                    >
                      Customize
                    </v-btn>

                    <v-btn
                      v-if="focusReportId === report.id"
                      @click="generateReports"
                      class="white--text"
                      outlined
                      rounded
                      text
                    >
                      Generate
                    </v-btn>
                    <v-btn
                      v-if="focusReportId === report.id"
                      @click="focusReportId = -1"
                      class="white--text"
                      outlined
                      rounded
                      text
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
import Vue from "vue";
import IGroupResult from "@/api/interface/paris/groupResult.interface";
import { ReportController } from "@/api/reports/Report.controller";
import { ReportInterface } from "@/api/interface/reports/report.interface";

export default Vue.extend({
  name: "Reporting",

  components: {},

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.loadReports();
  },

  data: () => ({
    application: "",

    // Report list
    errorReports: "",
    loadingReports: false,
    reportList: [] as ReportInterface[],

    // Element
    focusReportId: -1,
    focusReportParameters: {},
    loadingReport: -1,

    // Snack bar
    snackbarInfo: "",
    snackbarInfoDisplay: false
  }),

  methods: {
    /**
     * Load reports
     */
    async loadReports() {
      try {
        this.errorReports = "";
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
        this.snackbarInfo = `Report ${this.focusReportId} is being processed. Please wait.`;
      } else {
        try {
          this.loadingReport = this.focusReportId;
          await ReportController.generateReport(
            this.focusReportId,
            this.application,
            this.focusReportParameters
          );
          this.snackbarInfo = `The report has been successfully generated.`;
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
      this.groupResult = [] as IGroupResult[];
      this.loadReports();
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.reportGenerated = false;
    },

    focusReportId: function() {
      this.focusReportParameters = {};
    }
  }
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
