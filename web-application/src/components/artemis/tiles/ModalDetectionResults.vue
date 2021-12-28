<template>
  <v-dialog v-model="status" scrollable width="900">
    <v-container fluid>
      <v-card>
        <v-card-title>
          <h3 class="text-h4">
            Results of <b>{{ detection.application }}</b>
          </h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <DetectionViewer :detection="detection"></DetectionViewer>
            </v-row>
            <v-row class="my-2">
              <v-card class="my-6" width="100%">
                <v-card-title>
                  Result of the detection:
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-card-title>
                <v-card-subtitle class="d-flex justify-end">
                  <v-checkbox
                    v-model="showOnlyFrameworks"
                    label="Show only detected as Frameworks"
                  ></v-checkbox>
                </v-card-subtitle>

                <v-data-table
                  :headers="headers"
                  :items="filteredFrameworks"
                  :items-per-page="20"
                  :search="search"
                  class="elevation-3"
                  item-key="name"
                  style="width: 100%"
                >
                </v-data-table>
              </v-card>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" text @click="closeModal">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import DetectionInterface from '@/api/interface/extensions/artemis/Detection';
import DetectionViewer from '@/components/artemis/tiles/DetectionViewer.vue';

export default Vue.extend({
  props: {
    detection: Object,
    status: Boolean,
  },

  components: {
    DetectionViewer,
  },

  name: 'ModalDetectionResults',

  data: () => ({
    // Result table
    headers: [
      {
        text: 'Framework',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Description', value: 'description' },
      { text: 'Category', value: 'category' },
      { text: 'Detected as ', value: 'type' },
    ],
    showOnlyFrameworks: true as boolean,
    filterValidFramework: true,
    search: '',

    dialog: false,
    detectionObj: {} as DetectionInterface,
  }),

  computed: {
    filteredFrameworks() {
      if (!this.detection) return [];

      if (this.showOnlyFrameworks) {
        return this.detection.data.filter((d) => d.type == 'Framework');
      }
      return this.detection.data;
    },
  },

  methods: {
    closeModal() {
      this.status = false;
      this.$emit('close', false);
    },
  },

  mounted() {
    this.detectionObj = this.detection as DetectionInterface;
  },
});
</script>

<style scoped></style>
