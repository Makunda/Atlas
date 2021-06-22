<template>
  <v-card>
    <v-card-title>
      <h3 class="text-h4 mb-3 ">
        Global parameters
      </h3>
      <v-spacer></v-spacer>
      <v-btn icon color="green" @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle class="ml-1">
      Modify the parameters of the Atlas platform
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <!--    Path to imaging on the system       -->
          <v-card width="100%">
            <v-card-title class="text-h6"
              >Path to Imaging Installation folder
            </v-card-title>
            <v-card-text>
              <v-container class="pa-3">
                <v-row>
                  <v-col cols="12" md="2">
                    <p class="text-decoration-underline text-subtitle-1 pt-4">
                      Actual Imaging path :
                    </p>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field
                      outlined
                      v-model="imagingPath"
                      label="Main input"
                      hide-details="auto"
                    ></v-text-field>
                    <p class="subtitle-2 red--text" v-if="pathError">
                      {{ pathError }}
                    </p>
                    <p class="subtitle-2 light-green--text" v-if="pathSuccess">
                      {{ pathSuccess }}
                    </p>
                  </v-col>
                  <v-col cols="2" md="2">
                    <v-btn
                      class="mt-2"
                      color="persianGrey"
                      @click="setImagingPath()"
                      dark
                    >
                      Apply changes
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>

        <v-row class="mt-8">
          <!--    Path to imaging on the system       -->
          <v-card width="100%">
            <v-card-title class="text-h6"
              >Status of the extensions
              <v-spacer></v-spacer>
              <v-btn icon color="green" @click="refreshExtension()">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-row class="justify-center pa-3">
                <v-col
                  cols="12"
                  md="4"
                  class="d-flex flex-column align-center justify-center"
                >
                  <img
                    src="@/assets/extensions/demeter_icon.png"
                    height="150px"
                    width="150px"
                  />
                  <h4 class="pt-3">Demeter Extension</h4>
                  <p>Imaging remodelling</p>
                  <p>{{ demeterSuccess }}</p>
                  <p v-if="demeterError" class="red--text">
                    {{ demeterError }}
                  </p>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="d-flex flex-column align-center  justify-center"
                >
                  <img
                    src="@/assets/extensions/artemis_icon.png"
                    height="150px"
                    width="150px"
                  />
                  <h4 class="pt-3">Artemis Extension</h4>
                  <p>Frameworks and communities detection</p>
                  <p>{{ artemisSuccess }}</p>
                  <p v-if="artemisError" class="red--text">
                    {{ artemisError }}
                  </p>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="d-flex flex-column align-center  justify-center"
                >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import InstallationController from "@/api/imaging/Installation.controller";

export default Vue.extend({
  name: "GlobalParameters",

  computed: {},

  data: () => ({
    publicPath: process.env.BASE_URL,

    imagingPath: "",

    // errors & success
    pathError: "",
    pathSuccess: "",

    demeterError: "",
    demeterSuccess: "",

    artemisError: "",
    artemisSuccess: ""
  }),

  methods: {
    refresh() {
      this.getImagingPath();
    },

    refreshExtension() {
      this.getDemeterVersion();
      this.getArtemisVersion();
    },

    async setImagingPath() {
      try {
        this.imagingPath = await InstallationController.setImagingPath(
          this.imagingPath
        );
        this.pathError = "";
        this.pathSuccess = "The path was successfully changed.";
      } catch (err) {
        this.pathSuccess = "";
        this.pathError = err;
      }
    },

    async getImagingPath() {
      try {
        this.imagingPath = await InstallationController.getImagingPath();
        this.pathError = "";
      } catch (err) {
        this.pathSuccess = "";
        this.pathError = err;
      }
    },

    async getDemeterVersion() {
      try {
        this.demeterSuccess =
          "Version : " + (await InstallationController.getDemeterStatus());
        this.demeterError = "";
      } catch (err) {
        this.demeterSuccess = "";
        this.demeterError = err;
      }
    },

    async getArtemisVersion() {
      try {
        this.artemisSuccess =
          "Version : " + (await InstallationController.getArtemisStatus());
        this.artemisError = "";
      } catch (err) {
        this.artemisSuccess = "";
        this.artemisError = err;
      }
    }
  },

  mounted() {
    this.refresh();
    this.refreshExtension();
  }
});
</script>
