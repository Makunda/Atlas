<template>
  <v-card>
    <v-card-title>
      <p class="text-h3 text--primary pb-3">
        <span class="font-weight-light pr-1">Version management of</span>
        {{ application }}
      </p>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text class="d-flex flex-column pb-10">
      <v-container>
        <v-row class="mb-4">
          <v-btn color="primary" v-on:click="dialog = true"
            >Create backup</v-btn
          >
        </v-row>
        <v-row>
          <BackupTimeline></BackupTimeline>
        </v-row>
      </v-container>
    </v-card-text>

    <!-- Modals -->
    <BackupCreationModal
      v-bind:dialog="dialog"
      v-on:close="dialog = false"
      v-on:create="refresh()"
    ></BackupCreationModal>
  </v-card>
</template>

<script>
import BackupTimeline from "./tiles/BackupTimeline";
import Vue from "vue";
import BackupCreationModal from "@/components/imaging/backup/modals/BackupCreationModal";

export default Vue.extend({
  name: "Backup",
  components: { BackupCreationModal, BackupTimeline },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    application: "",
    dialog: false
  }),

  methods: {
    async refresh() {
      this.dialog = false;
    }
  },

  // Mounted operation
  mounted() {
    this.application = this.$store.state.applicationName;
    this.refresh();
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
