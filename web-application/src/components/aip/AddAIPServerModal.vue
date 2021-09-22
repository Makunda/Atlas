<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create a new server</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="this.errors">
              <p class="red--text">{{ this.errors }}</p>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Custom Name*"
                  v-model="configuration.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" md="9">
                <v-text-field
                  label="Server URL*"
                  v-model="configuration.url"
                  hint="http://localhost"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-text-field
                  label="Port*"
                  hint="2284"
                  type="number"
                  v-model="configuration.port"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Database*"
                  v-model="configuration.database"
                  hint="Default: postgres"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="User*"
                  v-model="configuration.user"
                  hint="Default: operator"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  v-model="configuration.password"
                  type="password"
                  hint="CastAIP"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal()"
            :disabled="loading"
          >
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="save()" :loading="loading">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import { AipConfiguration } from "@/api/interface/aip/Aipconfiguration";
import { AipConfigurationController } from "@/api/aip/AipConfigurationController";

export default Vue.extend({
  name: "AddAIPServerModal",

  props: {
    dialog: Boolean
  },

  methods: {
    closeModal() {
      this.dialog = false;
      this.$emit("close", false);
    },

    async save() {
      // implement
      this.loading = true;
      this.errors = "";

      try {
        await AipConfigurationController.createConfigurationNode(
          this.configuration
        );
      } catch (err) {
        console.error("Failed to create configuration.", err);
        this.errors = "Failed to create configuration. Error: " + err;
      } finally {
        this.loading = false;
      }

      this.closeModal();
    }
  },

  data: () => ({
    errors: "",
    loading: false,
    // implement
    configuration: {
      name: "Server Name",
      url: "http://localhost",
      port: 2284,
      database: "postgres",
      user: "operator",
      password: "CastAIP",
      schemas: []
    } as AipConfiguration
  })
});
</script>
