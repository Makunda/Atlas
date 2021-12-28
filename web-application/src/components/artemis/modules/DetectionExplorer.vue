<template>
  <v-container>
    <v-row class="text-center pa-5">
      <h3 class="text-h4">
        Review the different detection operations previously launched
      </h3>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2 white--text"
        color="green"
        dark
        rounded
        text
        @click="reload()"
      >
        <v-icon dark right>
          mdi-reload
        </v-icon>
      </v-btn>
    </v-row>

    <v-row class="mx-3 my-7">
      <v-card class="pa-3" style="width: 100%">
        <v-container>
          <v-row>
            <v-alert
              v-if="getOperationErrors != ''"
              border="left"
              dense
              type="error"
              width="100%"
            >
              {{ getOperationErrors }}
            </v-alert>
          </v-row>
          <v-row>
            <!-- Pending operations -->
            <div class="d-flex flex-column mx-1 my-3">
              <h5 class="text-h5">Pending operations</h5>
              <p v-if="pendingOperations.length == 0">
                No pending operation detected.
              </p>
            </div>
            <v-expansion-panels class="mb-6" style="width: 100%">
              <v-expansion-panel
                v-for="(item, i) in pendingOperations"
                :key="i"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                  <h3>{{ item.application }}</h3>
                  <v-spacer></v-spacer>
                  <span class="text-body-1" style="max-width: 100px"
                    >Status :
                    <v-progress-circular
                      :size="20"
                      :width="3"
                      color="teal"
                      indeterminate
                    ></v-progress-circular
                  ></span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="d-flex flex-column">
                    <DetectionViewer v-bind:detection="item"></DetectionViewer>
                    <div class="d-flex flex-row">
                      <v-btn
                        class="float-right ma-3"
                        color="charcoal"
                        dark
                        style="width: 150px"
                      >
                        Go to results
                      </v-btn>
                      <v-btn
                        class="float-right my-3"
                        color="orange"
                        style="width: 150px"
                        @click="stopDetection(item)"
                      >
                        Stop detection
                      </v-btn>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
          <v-row>
            <!-- Previous operations -->
            <div class="d-flex flex-column mx-1 my-3">
              <h5 class="text-h5 ">Previous operations</h5>
              <p v-if="previousOperations.length === 0">
                No operation detected
              </p>
              <p v-if="errorPrevious !== ''" color="red">
                {{ errorPrevious }}
              </p>
            </div>
            <v-expansion-panels class="mb-6" style="width: 100%">
              <v-expansion-panel
                v-for="(item, i) in previousOperations"
                :key="i"
              >
                <v-expansion-panel-header expand-icon="mdi-menu-down">
                  <h3>{{ item.application }}</h3>
                  <v-spacer></v-spacer>
                  <span class="text-body-1" style="max-width: 100px"
                    >Status :
                    <v-icon class="mx-1" color="teal"> mdi-check </v-icon></span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="d-flex flex-column">
                    <DetectionViewer v-bind:detection="item"></DetectionViewer>
                    <div class="d-flex flex-row">
                      <v-btn
                        class="float-right my-3"
                        color="charcoal"
                        dark
                        style="width: 150px"
                        @click="openResultModal(item)"
                      >
                        Display results
                      </v-btn>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
    <ModalDetectionResults
      :detection="selectedDetection"
      :status="modalDetection"
      v-on:close="modalDetection = false"
    ></ModalDetectionResults>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import DetectionViewer from '@/components/artemis/tiles/DetectionViewer.vue';
import ModalDetectionResults from '@/components/artemis/tiles/ModalDetectionResults.vue';
import { DetectionResult } from '@/api/interface/extensions/artemis/detectionResult.interface';
import DetectionInterface from '@/api/interface/extensions/artemis/Detection';
import DetectionController from '@/api/controllers/extensions/artemis/DetectionController';

export default Vue.extend({
  name: 'DetectionExplorer',

  components: {
    DetectionViewer,
    ModalDetectionResults,
  },

  data: () => ({
    pendingOperations: [] as DetectionResult[],
    previousOperations: [] as DetectionInterface[],

    getOperationErrors: '',

    loadingPending: false,

    loadPrevious: false,
    errorPrevious: '',

    selectedDetection: {} as DetectionInterface,
    modalDetection: false,
  }),

  methods: {
    getPendingOperations() {
      DetectionController.getPendingDetections()
        .then((res: DetectionResult[]) => {
          this.pendingOperations = res;
        })
        .catch((err) => {
          console.error('Failed to retrieve pending operations.', err);
          this.getOperationErrors = `Failed to retrieve pending operations : ${err}`;
        })
        .finally(() => {
          this.loadingPending = false;
        });
    },

    /**
     * Get all the previous operations
     */
    async getPreviousOperation() {
      try {
        this.loadPrevious = true;
        this.previousOperations = await DetectionController.getDetectionResults();
        this.errorPrevious = '';
      } catch (error) {
        console.error('Failed to load previous operations.', error);
        this.errorPrevious = `Error: ${error}`;
      } finally {
        this.loadPrevious = true;
      }
    },

    openResultModal(detection: DetectionInterface) {
      this.selectedDetection = { ...detection };
      this.modalDetection = true;
    },

    stopDetection(detection: DetectionResult) {
      this.displayErrorDetection = false;
      DetectionController.cancelDetection(
        detection.application,
        detection.language,
      )
        .then((res: boolean) => {
          // If the detection is successfully launched, set a timeout and wait for the response
          if (res) {
            this.runningArtemis = false;
          } else {
            throw new Error(
              'The server refused to stopped the detection. Check the logs.',
            );
          }
        })
        .catch((err) => {
          console.error('Failed to stop the on-going analysis.', err);
          this.errorDetection = `Failed to stop the on-going analysis. Error : ${err}`;
        });
    },

    reload() {
      this.getOperationErrors = '';
      this.getPendingOperations();
      this.getPreviousOperation();
    },
  },

  mounted() {
    this.reload();
  },
});
</script>
