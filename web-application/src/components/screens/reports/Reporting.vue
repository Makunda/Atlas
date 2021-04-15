<template>
  <v-container>
    <v-row class="pa-10">
      <v-container>
        <v-card class="mx-auto mt-10">
          <v-card-title
            ><h3>Generate reports for application {{ application }}</h3>
            <v-spacer></v-spacer>
            <v-btn icon color="green" @click="refresh">
              <v-icon>mdi-cached</v-icon>
            </v-btn></v-card-title
          >
          <v-card-text>
            <v-container>
              <!--     Ask for report generation         -->
              <v-row v-if="!reportGenerated && !reportLoading">
                <v-btn
                  color="blue-grey"
                  class="ma-auto white--text"
                  @click="generateReport()"
                >
                  Generate report
                  <v-icon right dark>
                    mdi-cloud-upload
                  </v-icon>
                </v-btn>
              </v-row>

              <!--     Display loading and status of the report         -->
              <v-row v-if="!reportGenerated && reportLoading">
                <v-container>
                  <v-row> Creating report ...</v-row>
                  <v-row>
                    <v-progress-circular
                      :size="50"
                      color="primary"
                      indeterminate
                    ></v-progress-circular
                  ></v-row>
                </v-container>
              </v-row>

              <v-row v-if="reportGenerated && !reportLoading">
                <v-container>
                  <v-row> Report completed on </v-row>
                  <v-row> {{ groupResult }} </v-row>
                </v-container>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { GroupController } from "@/api/paris/Group.controller";
import IGroupResult from "@/api/interface/paris/groupResult.interface";
import { ArtemisController } from "@/api/artemis/artemis.controller";
import DetectionController from "@/api/artemis/detection.controller";

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
  },

  data: () => ({
    application: "",

    reportGenerated: false,
    reportLoading: false,
    groupResultLoading: false,

    groupResult: [] as IGroupResult[],

    items: []
  }),

  methods: {
    async generateReport() {
      // Launch tag
      this.reportLoading = true;

      this.groupResultLoading = true;
      GroupController.forecastAllGroups(this.application)
        .then((res: IGroupResult[]) => {
          this.groupResult = res;
        })
        .catch(err => {
          console.error("Error : ", err);
        });
      // Launch

      this.reportLoading = false;
      this.reportGenerated = true;
    },

    refresh() {
      this.reportGenerated = false;
      this.reportLoading = false;
      this.groupResultLoading = false;
      this.groupResult = [] as IGroupResult[];
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.reportGenerated = false;
    }
  }
});
</script>

<style></style>
