<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create a new schema</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="this.errors">
              <p class="red--text">{{ this.errors }}</p>
            </v-row>
            <v-row>
              <!-- Mandatory custom Name -->
              <v-col class="pa-0  pb-3" cols="12">
                <h3>Enter a custom schema name</h3>
              </v-col>

              <v-col class="pa-0" cols="12">
                <v-text-field
                  label="Custom Name*"
                  v-model="schema.name"
                  required
                ></v-text-field>
              </v-col>

              <v-col class="pa-0 pb-3" cols="12">
                <h4>Select a schema from the list</h4>
              </v-col>
              <v-col v-if="errorSchema" cols="12">
                {{ errorSchema }}
              </v-col>
              <v-col cols="12">
                <v-card
                  class="mx-auto"
                  outlined
                  style="min-height: 200px; overflow: scroll"
                  max-height="300px"
                  scrollable
                >
                  <!-- Schema list  -->
                  <v-btn
                    class="mx-auto"
                    v-if="!schemasList || schemasList.length == 0"
                    @click="loadSchemas()"
                    >Click to load schemas</v-btn
                  >
                  <v-list dense>
                    <v-list-item-group color="primary">
                      <v-list-item
                        v-for="(item, i) in schemasList"
                        :key="i"
                        @click="selectSchemaList(item)"
                      >
                        <v-list-item-content>
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </v-col>

              <!-- Give the choive between auto selection or manual input -->

              <v-divider></v-divider>
              <!-- Custom section entry -->
              <v-col class="pa-0 pb-3" cols="12">
                <h3>Or Manual input</h3>
              </v-col>
              <v-col class="pa-0" cols="12">
                <v-text-field
                  label="Schema name*"
                  v-model="schema.schema"
                  required
                ></v-text-field>
              </v-col>
              <v-col class="pa-0" cols="12">
                <v-select
                  :items="itemsType"
                  v-model="schema.type"
                  label="Schema Type"
                ></v-select>
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
import { AipSchema, SchemaType } from "@/api/interface/aip/AipSchema";
import { AipConfigurationController } from "@/api/controllers/aip/AipConfigurationController";
import { AipSchemaController } from "@/api/controllers/aip/AipSchemaController";

export default Vue.extend({
  name: "AddAIPSchemaModal",

  props: {
    serverId: Number,
    dialog: Boolean
  },

  methods: {
    closeModal() {
      this.dialog = false;

      // Reset modal
      this.selectedSchemaName = "";
      this.loadingSchemas = false;
      this.schemasList = [];
      this.errorSchema = "";

      this.$emit("close", false);
    },

    /**
     *  Load all the schemas present in the database
     */
    loadSchemas() {
      this.loadingSchemas = true;

      AipConfigurationController.getAllSchemaList(this.serverId)
        .then((schemaList: string[]) => {
          this.schemasList = schemaList;
        })
        .catch(err => {
          this.errorSchema =
            "Failed to get the schema list. Check the connectivity to the server.";
        })
        .finally(() => {
          this.loadingSchemas = false;
        });
    },

    // Clicked on the list
    selectSchemaList(schemaName: string) {
      this.schema.schema = schemaName;

      if (schemaName.indexOf("_local") >= 0) {
        this.schema.type = SchemaType.LOCAL;
      } else if (schemaName.indexOf("_mngt") >= 0) {
        this.schema.type = SchemaType.MANAGEMENT;
      } else if (schemaName.indexOf("_central") >= 0) {
        this.schema.type = SchemaType.CENTRAL;
      }
    },

    // Save the new schema
    async save() {
      this.loading = true;
      this.errors = "";

      try {
        await AipSchemaController.createSchemaNode(this.serverId, this.schema);
        this.closeModal();
      } catch (err) {
        console.error("Failed to create schema.", err);
        this.errors = "Failed to create schema. Error: " + err;
      } finally {
        this.loading = false;
      }
    }
  },

  data: () => ({
    errors: "",
    loading: false,

    itemsType: ["Local", "Management", "Central"],

    schema: {
      name: "Local Database",
      schema: "application_local",
      type: SchemaType.LOCAL
    } as AipSchema,

    // Schemas
    selectedSchemaName: "",
    loadingSchemas: false,
    schemasList: [] as string[],
    errorSchema: ""
  })
});
</script>
