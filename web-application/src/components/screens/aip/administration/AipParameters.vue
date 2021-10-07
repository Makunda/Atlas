<template>
  <v-card>
    <v-card-title>
      <v-row class="d-flex flex-column">
        <h3 class="text-h4 black--text mx-4 mb-4 my-3">
          CAST AIP Configuration
        </h3>
        <p class="ml-4 text-body-1">
          For more information, please refer to the documentation.
        </p>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-container fluid>
        <v-row class="mt-3">
          <h3 class="text-h3">Server list</h3>
          <v-spacer></v-spacer>
          <v-btn class="mr-3" color="green" dark @click="testAllConnection()">
            Check Validity
            <v-icon>mdi-timeline-check</v-icon>
          </v-btn>
          <v-btn
            class="mr-3"
            color="green"
            dark
            @click="dialogAddServer = true"
          >
            Add a server
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn class="mr-3" color="green" dark @click="refresh()">
            Refresh list
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-row>
        <v-row class="mt-3 d-flex flex-column">
          <p>
            Search in the list of the server by their name / ip
          </p>
          <v-text-field
            v-model="search"
            label="Search Server"
            flat
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>
        </v-row>

        <!-- Tree / result row -->
        <v-row class="mt-5 mb-8">
          <v-col>
            <v-data-table
              :loading="loading"
              :items="items"
              :headers="headers"
              single-expand
              expanded.sync
              show-expand
              item-key="id"
              class="elevation-1"
              :search="search"
            >
              <!-- Actions -->
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" disabled>
                  mdi-pencil
                </v-icon>
                <v-icon small color="red" @click="deleteConfiguration(item.id)">
                  mdi-delete
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="refresh()">
                  Reset
                </v-btn>
              </template>
              <!-- Slot for Schema name -->
              <template v-slot:[`item.schemas`]="{ item }">
                <p>{{ item.schemas.length || 0 }}</p>
              </template>

              <!-- Expand -->
              <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                  <v-container>
                    <v-row class="ma-2">
                      <h3>Registerd schema for this application</h3>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="mr-3"
                        color="green"
                        text
                        @click="openDialogSchema(item.id)"
                      >
                        Add schema
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-row>
                    <v-row
                      class="ma-2"
                      v-if="!item.schemas || item.schemas.length == 0"
                    >
                      <i
                        >No schema has been registered for this server. Add a
                        new schema to start.</i
                      >
                    </v-row>
                    <v-row v-if="item.schemas && item.schemas.length > 0">
                      <v-col cols="3">
                        <strong>Custom Name</strong>
                      </v-col>

                      <v-col cols="2">
                        <strong>Schema</strong>
                      </v-col>

                      <v-col cols="2">
                        <strong>Registered Type</strong>
                      </v-col>

                      <v-col cols="2">
                        <strong>Action</strong>
                      </v-col>
                    </v-row>
                    <v-row
                      v-if="item.schemas && item.schemas.length > 0"
                      style="min-height: 220px: flex: 0 1 auto !important;"
                      class="d-flex flex-column justify-start pb-10"
                    >
                      <!-- List of Schema registered -->
                      <v-row
                        class="mt-2 mb-2 pr-4 pl-4"
                        max-height="30px"
                        v-for="(schema, i) in item.schemas"
                        :key="i"
                      >
                        <v-hover v-slot="{ hover }">
                          <v-sheet
                            :color="hover ? 'blue-grey lighten-5' : 'white'"
                            :elevation="hover ? 5 : 3"
                            height="50"
                            width="100%"
                          >
                            <v-container>
                              <v-row>
                                <v-col cols="3">
                                  <p>{{ schema.name }}</p>
                                </v-col>
                                <v-col cols="2">
                                  <p>{{ schema.schema }}</p>
                                </v-col>
                                <v-col cols="2">
                                  <p>{{ schema.type }}</p>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-sheet>
                        </v-hover>
                      </v-row>
                    </v-row>
                  </v-container>
                </td>
              </template>
            </v-data-table>
          </v-col>
        </v-row>

        <v-row></v-row>
      </v-container>
    </v-card-text>

    <!-- Modal create connexion -->
    <AddAIPServerModal
      v-bind:dialog="dialogAddServer"
      @close="creationSchemaClosed()"
    >
    </AddAIPServerModal>

    <!-- Modal create schema -->
    <AddAIPSchemaModal
      v-bind:dialog="dialogAddSchema"
      v-bind:serverId="selectedServerId"
      @close="dialogAddSchema = false"
    >
    </AddAIPSchemaModal>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import AddAIPServerModal from "@/components/aip/AddAIPServerModal.vue";
import AddAIPSchemaModal from "@/components/aip/AddAIPSchemaModal.vue";
import { AipConfigurationController } from "@/api/controllers/aip/AipConfigurationController";
import {
  AipConfiguration,
  ValidityServer
} from "@/api/interface/aip/Aipconfiguration";

export default Vue.extend({
  name: "AipParameters",

  components: {
    AddAIPServerModal,
    AddAIPSchemaModal
  },

  mounted() {
    this.getConfigurationList();
  },

  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    }
  },

  methods: {
    // Refresh
    refresh() {
      this.getConfigurationList();
    },

    creationSchemaClosed() {
      this.dialogAddServer = false;
      this.refresh();
    },

    // Get the list of server
    async getConfigurationList() {
      this.loading = false;

      try {
        const items = await AipConfigurationController.getConfigurationList();
        items.forEach(x => {
          x.valid = ValidityServer.UNKNOWN;
          if (!x.schemas) x.schemas = [];
        });
        this.items = items;
      } catch (err) {
        console.error("Failed to retrieve server list.", err);
        this.errors = err;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Delete a server configuration
     */
    async deleteConfiguration(configurationId: number) {
      // Implement
      await AipConfigurationController.deleteSchemaById(configurationId);
      this.refresh();
    },

    // Test connection
    async testConnection(item: AipConfiguration) {
      AipConfigurationController.testConnection(item);
    },

    /**
     * Test all the configuration
     */
    async testAllConnection() {
      for (const id in this.items) {
        this.items[id].valid = ValidityServer.LOADING;

        AipConfigurationController.testConnection(this.items[id])
          .then((result: boolean) => {
            this.items[id].valid = result
              ? ValidityServer.VALID
              : ValidityServer.ERROR;
          })
          .catch(err => {
            console.error("Failed to to check configuration.");
          });
      }
    },

    // Open a modal for a new schema
    openDialogSchema(id: number) {
      this.dialogAddSchema = true;
      this.selectedServerId = id;
    }
  },

  data: () => ({
    errors: "",
    items: [] as AipConfiguration[],
    open: [],
    search: null,
    caseSensitive: false,

    // List parameters
    expanded: [],
    loading: false,
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name"
      },

      { text: "Url", value: "url" },
      { text: "Port", value: "port" },
      { text: "Database", value: "database" },
      { text: "Schemas", value: "schemas" },
      { text: "Valid", value: "valid" },
      { text: "Actions", value: "actions", sortable: false },
      { text: "", value: "data-table-expand" }
    ],

    // Dialog server
    dialogAddServer: false,

    // Dialog schema
    dialogAddSchema: false,
    selectedServerId: 0
  })
});
</script>
