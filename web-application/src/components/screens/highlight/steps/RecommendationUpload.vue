<template>
  <v-card>
    <v-card-title>
      <h3 class="text-h4">
        Review the blockers in the {{ application }} application.
      </h3>
      <v-spacer></v-spacer>
      <v-btn class="mr-5" icon color="green" @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>
      Upload here the Tags coming from Cast Highlight
    </v-card-subtitle>

    <v-card-body>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Upload
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Review
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Confirm
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" height="200px">
              <v-container>
                <v-row>
                  <h4>Import the Cast Highlight Excel File</h4>
                </v-row>
                <v-row class="mt-8">
                  <v-file-input
                    v-model="file"
                    label="File input"
                    outlined
                    dense
                  ></v-file-input>
                </v-row>
                <v-row class="mt-10 d-flex justify-center">
                  <v-btn color="success" @click="sendFileToApi" text
                    >Send file</v-btn
                  >
                </v-row>
              </v-container>
            </v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1" height="200px">
              <v-data-table
                :headers="headers"
                :items="blockerList"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
            </v-card>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text @click="reset">
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card-body>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import CloudBlocker from "@/api/interface/highlight/CloudBlocker";
import { HighlightController } from "@/api/highlight/HighlightController";

export default Vue.extend({
  name: "RecommendationUpload",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    application: "",
    e1: 1,
    file: null,

    headers: [
      {
        text: "Application",
        align: "start",
        sortable: false,
        value: "application"
      },
      { text: "Requirement", value: "requirement" },
      { text: "Block", value: "blocker" },
      { text: "Technology", value: "technology" }
    ],
    blockerList: [] as CloudBlocker[]
  }),

  methods: {
    refresh() {
      // pass
    },

    async sendFileToApi() {
      try {
        if (this.file == null) return;
        if (this.application == null) return;

        this.blockerList = await HighlightController.uploadFile(
          this.file,
          this.application
        );

        console.log("Blocker List :", this.blockerList);

        this.e1 = 2;
      } catch (err) {
        console.error("Failed to process the file.", err);
      }
    },

    reset() {
      this.e1 = 1;
      // pass
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>
