<template>
  <v-card class="mx-auto" min-height="200px" min-width="100%">
    <v-card-title class="blue-grey white--text">
      <span class="text-h6">Backup</span>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text class="py-0">
      <v-timeline v-if="items.length > 0" dense>
        <v-slide-x-reverse-transition group hide-on-leave>
          <v-timeline-item
            v-for="item in items"
            :key="item.name"
            color="primary"
            fill-dot
            small
          >
            <v-alert :value="true" class="white--text" color="primary">
              Name: <b>{{ item.name }}</b>
            </v-alert>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>

      <h2 v-else class="mt-6 my-auto">No backup has been found.</h2>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Backup from "@/api/interface/extensions/demeter/Backup";
import BackupController from "@/api/controllers/extensions/demeter/BackupController";
import Logger from "@/utils/Logger";
import flash, { FlashType } from "@/modules/flash/Flash";

export default Vue.extend({
  name: "BackupTimeline",

  computed: {
    getApplicationName(): string {
      return this.$store.state.applicationName;
    }
  },

  methods: {
    async refresh() {
      await this.getBackupList();
    },

    /**
     * Get the list of backup in one application
     */
    async getBackupList() {
      try {
        this.items = BackupController.getList(this.application);
      } catch (e) {
        Logger.error(
          "Failed to get the list of backup",
          "Controller thrown an error",
          e
        );
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to get the list of backup.",
          body: e
        });
      }
    }
  },

  data: () => ({
    application: "",
    items: [] as Backup[]
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
