<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6" class="mt-5">
      <v-card ref="form">
        <v-card-text>
          <v-card-title>
            <h2>
              Demeter configuration
            </h2>
          </v-card-title>

          <div class="my-4 subtitle-1">
            Daemon grouping
          </div>

          <v-text-field
            ref="refreshRate"
            v-model="properties.refreshRate"
            label="Refresh rate of the daemon ( in Miliseconds ) "
            placeholder="Configuration_1"
            required
          ></v-text-field>

          <div class="my-4 subtitle-1">
            Configuration
          </div>

          <v-text-field
            ref="configurationName"
            v-model="properties.configurationName"
            :rules="rules()"
            label="Name of the configuration"
            placeholder="Configuration_1"
            required
          ></v-text-field>

          <v-divider class="mx-2"></v-divider>

          <div class="my-4 subtitle-1">
            Neo4j Database
          </div>

          <v-text-field
            ref="neo4jUri"
            v-model="properties.neo4jUri"
            label="URI of the Neo4j bolt interface"
            placeholder="http://localhost:7687/"
            value="http://localhost:7687/"
            required
          ></v-text-field>
          <v-text-field
            ref="neo4jUser"
            v-model="credentials.user"
            label="Database user"
            placeholder="Neo4j user"
            required
          ></v-text-field>
          <v-text-field
            v-model="credentials.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Database password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text @click="cancel">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="saveForm">
            Save parameters
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Properties, Credentials, Configuration } from "@/Configuration";
import { Neo4JAccessLayer } from "@/api/Neo4jAccessLayer";

export default Vue.extend({
  name: "Parameters",

  computed: {
    formHasErrors(): boolean {
      return false;
    }
  },

  data: () => ({
    show1: false,
    // Form parameters
    properties: Configuration.getProperties() as Properties,
    credentials: {} as Credentials
  }),

  methods: {
    rules() {
      const rulesTable = [];

      const maxRule = (v: any) =>
        (v || "").length <= 30 || `A maximum of ${30} characters is allowed`;
      rulesTable.push(maxRule);

      const spaceRule = (v: any) =>
        (v || "").indexOf(" ") < 0 || "No spaces are allowed";
      rulesTable.push(spaceRule);

      const forbidden = /[!@#$%^&*()\-=[\]{};':"\\|,.<>/?]+/;
      const specialChar = (v: any) =>
        !forbidden.test(v || "") || "No special caracters are allowed";
      rulesTable.push(specialChar);

      return rulesTable;
    },

    saveForm(): boolean {
      // save properties
      Configuration.saveProperties(this.properties);

      // if credentials changed, reset Neo4J connection and save new token
      if (
        this.credentials.user.length != 0 &&
        this.credentials.password.length != 0
      ) {
        Neo4JAccessLayer.connectWithCredentials(this.credentials);
      }

      // Store preference cookies
      window.location.reload();
      return true;
    },

    cancel() {
      this.properties = Configuration.getProperties();
    }
  }
});
</script>
