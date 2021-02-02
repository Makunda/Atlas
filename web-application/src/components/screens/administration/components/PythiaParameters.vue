<template>
  <v-card width="100%">
    <v-card-title class="text-h4">
      Pythia : Framework repository
      <v-spacer></v-spacer>
      <v-btn icon color="green" @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1"
      >You can configure the here use of pytha that you want to make.<br />
      Pythia is an online repository that will gather the frameworks of several
      instances of Artemis.</v-card-subtitle
    >
    <v-card-text>
      <!-- Configuration pythia -->
      <v-divider></v-divider>
      <h2 class="my-3">
        Configuration of Pythia
      </h2>
      <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pythiaURI"
            hint="URI of the Pythia server ( ex : http://12.9.1.0:3000 )"
            label="Pythia URI"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
            v-model="pythiaToken"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Pythia token"
            hint="Authentication token of Pythia"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-btn class="mt-3" color="charcoal" dark>
            Connect to Pythia
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
      <v-divider></v-divider>
      <!-- Push / pull  -->
      <h2 class="my-3 mt-6">
        Last version pulled: <em>{{ lastUpdateLocal }}</em>
      </h2>
      <h2 class="my-3">
        Last version of Pythia: <em>{{ lastUpdatePythia }}</em>
      </h2>
      <!-- Even Case -->
      <div class="text-subtitle-1" v-if="isDatabaseEven">
        <v-icon color="green" class="mr-2"
          >mdi-checkbox-marked-circle-outline</v-icon
        >
        It seems that this local database is up-to-date !
      </div>
      <!-- Not even case -->
      <div class="text-subtitle-1" v-else>
        <v-icon color="red" class="mr-2">mdi-exclamation-thick</v-icon>A new set
        of frameworks are avaible on Pythia ! <br>
        <em>{{framewokToPull}} framework where added since the last pull</em>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text>
        <span v-if="isDatabaseEven">Force pull</span>
        <span v-else>Pull {{framewokToPull}} frameworks</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import PythiaController from "@/api/pythia/pythia.controller";

export default Vue.extend({
  name: "PythiaParameters",

  data: () => ({
    lastUpdateLocal: "Never",
    lastUpdatePythia: "Unkown",

    lastLocalTimestamp: 0,
    lastRemoteTimstamp: 0,

    even: true as boolean,
    framewokToPull: 0,

    pythiaURI: "",
    pythiaToken: "",
    show1: false,
  }),

  methods: {
    isDatabaseEven() {
      return this.lastLocalTimestamp >= this.lastRemoteTimstamp;
    },

    getLastLocalUpdate() {
      PythiaController.getLocalLastUpdate()
        .then((res: number) => {
          this.lastLocalTimestamp = res;
          this.lastUpdateLocal = new Date(res).toDateString();
        })
        .catch((err) => {
          console.log("Failed to retieve the last local update", err);
          this.lastUpdatePythia =
            "Unkown - Make sure you installed the latest version of Artemis ";
        });
    },

    getRemoteLastUpdate() {
      PythiaController.getRemoteLastUpdate()
        .then((res: number) => {
          this.lastRemoteTimstamp = res;
          this.lastUpdatePythia = new Date(res).toDateString();
        })
        .catch((err) => {
          console.log("Failed to retieve the last local update", err);
          this.lastUpdatePythia =
            "Unkown - Please check the configuraiton of Pythia ";
        });
    },

    getNumPull() {
      PythiaController.getPullForecast()
        .then((res: number) => {
          this.framewokToPull = res;
        })
        .catch((err) => {
          console.log("Failed to pull fremwork", err);
        });
    },
    

    refresh() {
      this.getLastLocalUpdate();
      this.getRemoteLastUpdate();
    }
  },

  mounted() {
    this.refresh()
  },
});
</script>
