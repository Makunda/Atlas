<template>
  <v-card
    :disabled="rollbackProcedure"
    :loading="rollbackProcedure"
    class="mx-auto"
    min-height="200px"
    min-width="100%"
  >
    <v-card-title class="blue-grey white--text">
      <span class="text-h6">Backups</span>
      <v-spacer></v-spacer>
      <v-btn class="pb-5" color="green" icon x-large @click="refresh">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="py-0">
      <v-timeline v-if="items && items.length > 0" dense>
        <v-slide-x-reverse-transition group hide-on-leave>
          <v-timeline-item
            v-for="item in items"
            :key="item.id"
            color="deepblue"
            fill-dot
            small
          >
            <v-card color="charcoal" dark>
              <v-card-title class="text-h6">
                Name: <b class="ml-2">{{ item.name }}</b>
                <v-spacer></v-spacer>
                {{ convertTimestampToDate(item.timestamp) }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <v-container>
                  <v-row>
                    <!--   Description and button    -->
                    <v-col cols="8">
                      <v-container style="min-height: 100%">
                        <v-row>
                          <p class="pt-3">
                            Description: {{ item.description }}.
                          </p>
                        </v-row>
                      </v-container>
                    </v-col>

                    <!--   Picture    -->
                    <v-col v-if="item.picture" cols="4">
                      <v-img :src="item.picture" alt="Snapshot image"></v-img>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  :loading="item.id in deleteListId"
                  class="mx-0 ml-2"
                  color="red darken-3"
                  depressed
                  @click="deleteBackupById(item)"
                >
                  Remove
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="mx-0 mr-5" color="lightblue" depressed>
                  Download
                </v-btn>
                <v-btn
                  class="mx-0"
                  color="persianGrey"
                  depressed
                  @click="rollback(item)"
                >
                  Rollback to this version
                </v-btn>
              </v-card-actions>
            </v-card>
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
    /**
     * Get the list of backup in one application
     */
    async getBackupList() {
      try {
        const items = await BackupController.getList(this.application);
        items.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
        this.items = items;
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
    },

    /**
     * Remove a Backup
     */
    async deleteBackupById(item: Backup) {
      try {
        this.deleteListId.push(item.id);
        await BackupController.deleteBackup(this.application, item.id);

        // Splice the list
        const index = this.items.findIndex(x => x.id == item.id);
        this.items.splice(index, 1);
      } catch (e) {
        Logger.error(
          "Failed to delete the backup",
          "Controller thrown an error",
          e
        );
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to delete the backup.",
          body: e
        });
      } finally {
        this.deleteListId.filter(x => x != item.id);
      }
    },

    /**
     * Rollback to a specific version
     */
    async rollback(item: Backup) {
      try {
        this.rollbackProcedure = true;
        await BackupController.rollback(this.application, item.id);
      } catch (e) {
        Logger.error(
          "Failed to rollback the application",
          "Controller thrown an error",
          e
        );
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to rollback the application.",
          body: e
        });
      } finally {
        this.rollbackProcedure = false;
      }
    },

    /**
     * Convert to timestamp
     * @param timestamp
     */
    convertTimestampToDate(timestamp: number) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const seconds = "0" + date.getSeconds();
      const formattedTime =
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      return date.toDateString() + " - " + formattedTime;
    },

    async refresh() {
      if (this.refreshing) return;
      try {
        this.refreshing = true;
        await this.getBackupList();
      } catch (e) {
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to refresh the list of backup.",
          body: e
        });
      } finally {
        this.refreshing = false;
      }
    }
  },

  data: () => ({
    application: "",
    items: [] as Backup[],

    // Loading
    refreshing: false,
    deleteListId: [] as number[], // List of items being deleted
    rollbackProcedure: false
  }),

  // Mounted operation
  async mounted() {
    this.application = this.$store.state.applicationName;
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
