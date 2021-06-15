<!-- Login modal -->
<template>
  <v-app class="main-application">
    <v-container fluid fill-height class="pa-0">
      <v-row style="height: 100%">
        <v-col
          md="6"
          style="background: #073B4C; height: 100%; position: relative"
        >
          <v-container bg fill-height grid-list-md text-xs-center>
          <img src="@/assets/svg/Globe_icon.svg" id="background-logo" />
            <v-layout row wrap align-center justify-center>
              <v-flex style="margin-left: 20%; z-index: 10">
                <h2 class="white--text text-h1">Atlas</h2>
                <h2 class="white--text text-h3">NASD Toolkit 2021</h2>
                <h2 class="white--text text-subtitle-1">
                  <i>Version 2.3.0</i>
                </h2>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
        <v-col md="6">
          <v-container bg fill-height grid-list-md text-xs-center>
            <v-layout row wrap align-center justify-center>
              <v-card ref="form" class="mx-auto" min-width="500px">
                <v-card-text>
                  <v-text-field
                    ref="neo4jUser"
                    v-model="credentials.user"
                    label="Username"
                    placeholder="Neo4j user"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="credentials.password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    name="input-10-1"
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <p>Database bolt URI : {{ uri }}</p>

                  <!-- Information on connection -->
                  <div
                    v-if="failedLogin"
                    class="red darken-2 text-center pa-2"
                    width="100%"
                  >
                    <span class="white--text"
                      >Wrong credentials / URI. Contact your CAST Imaging
                      administrator for more information.</span
                    >
                  </div>
                  <v-divider></v-divider>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="save">
                    Login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-layout>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Configuration, Credentials } from "@/Configuration";
import { Neo4JAccessLayer } from "@/api/Neo4jAccessLayer";
import { ServerInfo } from "neo4j-driver";
import ConfigurationController from "../api/configuration/configuration.controller";


export default Vue.extend({
  name: "Login",

  data: () => ({
    failedLogin: false,
    showLogin: true,
    show1: false,
    uri: Configuration.getProperties().neo4jUri,
    credentials: {} as Credentials,

    switchInternalUse: false
  }),

  mounted() {
    this.getInternalMode();
  },

  methods: {
    // Check, save and redirect to the Main dashboard
    save() {
      // Save new URI
      const properties = Configuration.getProperties();
      properties.neo4jUri = this.uri;
      Configuration.saveProperties(properties);

      // Connect to Neo4j
      Neo4JAccessLayer.connectWithCredentials(this.credentials);
      const neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();

      neo4jAl
        .testConnection()
        .then((res: ServerInfo) => {
          // Successful connection , redirect to main
          this.$router.replace("/atlas/");
          window.location.reload();
        })
        .catch(err => {
          // Cannot connect to the Neo4j instance
          console.error("Cannot connect to Neo4j", err);
          this.failedLogin = true;
        });
    },

    // Set Internal mode
    async setInternalMode() {
      await ConfigurationController.setInternalMode(!this.switchInternalUse)
        .then((res: boolean) => {
          return;
        })
        .catch(err => {
          console.error("Failed to set internal mode to ", err);
        });
    },

    // Get Intrenal mode
    getInternalMode() {
      ConfigurationController.getInternalMode()
        .then((res: boolean) => {
          this.switchInternalUse = res;
        })
        .catch(err => {
          console.log("Failed to change the value of internal mode.", err);
          this.switchInternalUse = false;
        });
    }
  }
});
</script>

<style>
#background-logo {
  z-index: 1;
  background-size: contain;
  position: absolute;
  margin-top: auto;
  margin-right: auto;
  color: white;
  opacity: 0.2;
  fill: #1e4d5b;
}

.login-container {
  display: block;
  width: 100%;

  /* Positionning */
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.103);
  min-width: 100vw;
  min-height: 100vh;
}
</style>
