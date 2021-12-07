<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Backup creation</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="pa-2">
              Create a backup for the application. You can select a different
              date.
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="name"
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="description"
                  label="Description*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex flex-column pa-2" justify="center">
              <h3>Pick a date for the backup:</h3>
              <v-date-picker v-model="picker" full-width></v-date-picker>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close()">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="createBackup()">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import BackupController from "@/api/controllers/extensions/demeter/BackupController";
import Logger from "@/utils/Logger";
import flash, { FlashType } from "@/modules/flash/Flash";
import Vue from "vue";

export default Vue.extend({
  name: "BackupCreationModal",
  computed: {
    getApplicationName(): string {
      return this.$store.state.applicationName;
    }
  },

  props: {
    dialog: Boolean
  },

  methods: {
    async refresh() {
      await this.getBackupList();
      this.application = "";
      this.name = "";
      this.description = "";
      this.picker = "";
    },

    /**
     * Close the modal
     * @param update if true return 'close'
     */
    close(update = false) {
      if (update) this.$emit("create");
      else this.$emit("close");
    },

    /**
     * Get the list of backup in one application
     */
    async createBackup() {
      try {
        if (!this.name) throw new Error("You must specify a name");
        if (!this.application)
          throw new Error("You must specify an application");

        await BackupController.createBackup(this.application, this.name);
        this.close(true);
      } catch (e) {
        Logger.error(
          "Failed to create the backup",
          "Controller thrown an error",
          e
        );
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to create the backup.",
          body: e
        });
      }
    }
  },

  data: () => ({
    application: "",
    name: "",
    description: "",
    picker: ""
  }),

  // Mounted operation
  async mounted() {
    this.application = this.getApplicationName();
    await this.refresh();
  },

  watch: {
    async getApplicationName(newApp) {
      this.application = newApp;
      await this.refresh();
    }
  }
});
</script>

<style scoped></style>
