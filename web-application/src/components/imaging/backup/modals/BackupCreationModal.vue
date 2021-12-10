<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="800px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5"
            >Backup creation: <b>{{ application }}</b></span
          >
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
              <h3>Pick a date for the backup: {{ picker }}</h3>
              <v-date-picker v-model="picker" full-width></v-date-picker>
            </v-row>
            <v-row>
              <v-file-input
                v-model="file"
                :show-size="1000"
                accept="image/*"
                color="deep-purple accent-4"
                counter
                label="File input"
                outlined
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                @change="imageToBase64"
              >
              </v-file-input>
            </v-row>
            <v-row v-if="this.picture" class="d-flex flex-column pa-2">
              <h5>Preview</h5>
              <v-img
                id="preview"
                :src="picture"
                alt="Upload preview"
                max-height="300"
              />
            </v-row>
          </v-container>
          <small>*indicates required field</small>
          <h3 class="red--text">{{ error }}</h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" outlined @click="close()">
            Close
          </v-btn>
          <v-btn
            :loading="loading"
            color="green darken-1"
            dark
            @click="createBackup()"
          >
            Create backup
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
      this.application = this.$store.state.applicationName;
      this.name = "";
      this.file = {};
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

    toDataURL(src): Promise<string | ArrayBuffer> {
      return new Promise((resolve, reject) => {
        try {
          const reader = new FileReader();
          reader.onloadend = function(fileLoadedEvent) {
            resolve(reader.result);
          };
          reader.readAsDataURL(src);
        } catch (e) {
          reject(e);
        }
      });
    },

    async imageToBase64() {
      if (!this.file || !this.file.name) return;
      const base64 = (await this.toDataURL(this.file)) as string;
      if (base64) {
        this.picture = base64;
      }
    },

    /**
     * Get the list of backup in one application
     */
    async createBackup() {
      this.loading = true;
      this.error = "";

      try {
        if (!this.name) throw new Error("You must specify a name");
        if (!this.application)
          throw new Error("You must specify an application");

        let timestamp;
        if (!this.picker) {
          timestamp = Date.now();
        } else {
          const newDate = new Date(
            this.picker[2],
            this.picker[1] - 1,
            this.picker[0]
          );
          timestamp = newDate.getTime();
        }

        await BackupController.createBackup(
          this.application,
          this.name,
          this.description,
          timestamp,
          this.picture
        );
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
        this.error = e;
      } finally {
        this.loading = false;
      }
    }
  },

  data: () => ({
    application: "",
    name: "",
    description: "",
    picker: "",

    file: {} as File,
    picture: "" as any,

    // Loading & Error
    loading: false,
    error: ""
  }),

  // Mounted operation
  async mounted() {
    await this.refresh();
  },
  watch: {
    async getApplicationName(newApp) {
      this.application = newApp;
      await this.refresh();
    },
    file: {
      handler() {
        this.imageToBase64();
      }
    },
    dialog: {
      handler() {
        this.refresh();
      }
    }
  }
});
</script>

<style scoped></style>
