<!-- Login modal -->
<template>
  <v-app class="main-application">
    <v-container fluid fill-height class="pa-0">
      <v-row style="height: 100%">
        <v-col md="6" id="color-background">
          <v-container bg fill-height grid-list-md text-xs-center>
            <img src="@/assets/svg/Globe_icon.svg" id="background-logo" />
            <v-layout row wrap align-center justify-center>
              <v-flex style="margin-left: 20%; z-index: 10">
                <h2 class="white--text text-h1">Atlas</h2>
                <h2 class="white--text text-h3">NASD Toolkit 2021</h2>
                <h2 class="white--text text-subtitle-1">
                  <i>Version 2.5.0</i>
                </h2>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
        <v-col md="6">
          <v-container bg fill-height grid-list-md text-xs-center>
            <v-layout row wrap align-center justify-center>
              <v-card
                ref="form"
                class="mx-auto"
                min-width="500px"
                v-if="onlineDatabase"
              >
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
              <v-card
                v-if="!onlineDatabase"
                class="mx-auto"
                min-width="500px"
                min-height="250px"
              >
                <v-card-text
                  class="d-flex flex-column"
                  style="margin-top: 20px"
                >
                  <v-icon size="80" color="red" class="my-4"
                    >mdi-database-remove</v-icon
                  >
                  <span>
                    Oops, it seems that the database at
                    <i color="#052C38">{{ uri }}</i> is unreachable.<br />
                    Retry in few seconds or check your neo4j service.
                  </span>
                  <v-btn class="my-4" @click="simpleHealthCheck" text>
                    <v-icon x-large color="#042732">mdi-refresh</v-icon>
                  </v-btn>
                </v-card-text>
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
import { UtilsController } from "@/api/utils/utils.controller";

export default Vue.extend({
  name: "Login",

  data: () => ({
    failedLogin: false,
    showLogin: true,
    show1: false,
    uri: Configuration.getProperties().neo4jUri,
    credentials: {} as Credentials,

    onlineDatabase: true,
    healthcheckGoingon: false,

    switchInternalUse: false
  }),

  mounted() {
    this.getInternalMode();
    this.simpleHealthCheck();
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
          this.simpleHealthCheck();
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
    },

    async simpleHealthCheck() {
      try {
        if (this.healthcheckGoingon) return;
        this.healthcheckGoingon = true;
        this.onlineDatabase = await UtilsController.healthCheck();
        this.healthcheckGoingon = false;
      } catch (err) {
        this.onlineDatabase = false;
        setTimeout(this.simpleHealthCheck, 3000);
      }
    }
  }
});
</script>

<style>
#color-background {
  height: 100%;
  position: relative;
  background: rgb(0, 36, 47);
  background: -moz-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: -webkit-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00242f",endColorstr="#0f4f63",GradientType=1);
}

#background-logo {
  z-index: 1;
  background-size: contain;
  position: absolute;
  margin-top: auto;
  margin-right: auto;
  color: white;
  opacity: 0.2;
  fill: #0e4b5f;
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
