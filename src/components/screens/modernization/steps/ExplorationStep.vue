<template>
  <v-container>
    <v-row>
      <h4 class="text-h4">Explore {{ application }}</h4>
    </v-row>
    <v-row class="my-5">
      <h5 class="text-h5">Artemis : Automatic framework discovery</h5>
      <p>
        The Artemis framework automatic detector analyzes your application and
        finds objects belonging to open-source components. It analyzes the most
        popular online repositories and Google, and thanks to its built-in
        automatic learning algorithm, it finds the best matches.
        <br />
        You can choose to activate or not these options. If no option is
        activated, the artemis framework will rely on it's own database.
      </p>
    </v-row>
    <v-row class="mt-5">
      <h3>Options:</h3>
    </v-row>
    <v-row>
      <v-switch
        class="mx-5"
        v-model="artemisOnlineOption"
        label="Online search"
        color="persianGrey"
        hide-details
      ></v-switch>
      <v-switch
        class="mx-5"
        v-model="artemisRepositoryOption"
        label="Repository search"
        color="persianGrey"
        hide-details
      ></v-switch>
      <v-switch
        class="mx-5"
        v-model="atemisInteractionOption"
        label="Interaction detection"
        color="persianGrey"
        hide-details
      ></v-switch>
    </v-row>
    <v-row class="mt-5">
      <h3>Actions:</h3>
    </v-row>
    <v-row class="mt-5">
      <v-btn
        :loading="runningArtemis"
        color="charcoal"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Launch detection
        <v-icon right dark>
          mdi-play
        </v-icon>
      </v-btn>
      <v-btn
        :disabled="!runningArtemis"
        color="brown"
        class="ma-2 white--text"
        @click="loader = 'loading3'"
      >
        Stop detection
        <v-icon right dark>
          mdi-stop
        </v-icon>
      </v-btn>
    </v-row>
    <v-row class="my-5">
        <h3>Results:</h3>
    </v-row>
    <v-row class="mb-10" id="artemis-viewer">

    </v-row>

    <v-divider></v-divider>
    <v-row class="d-flex flex-column my-5">
      <h5 class="text-h5">Grouping exploration : Detach objects and investigate in CAST Imaging</h5>
      <p>
        Here is a selection of actions that you can execute on your application. <br> 
        The objects matching these use cases will be detached from the default levels and merged again to facilitate investigation and overview.
      </p>
      <h5 class="text-h6">Actions: </h5>
    </v-row>
    <v-row>
        <v-skeleton-loader
            class="mx-auto"
            width="300"
            type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
            class="mx-auto"
            width="300"
            type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
            class="mx-auto"
            width="300"
            type="card"
        ></v-skeleton-loader>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ExplorationStep",

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },
  

  mounted() {
    this.application = this.$store.state.applicationName;
  },

  data: () => ({
    application: "",
    artemisOnlineOption: true,
    artemisRepositoryOption: true,
    atemisInteractionOption: false,
    runningArtemis: false,
  }),

  methods: {},

  watch: {
    getApplicationName(newApp, oldApp) {
      this.application = newApp;
    },
  },
});
</script>

<style>
    #artemis-viewer {
        /* Size */
        min-height: 100px;

        /* Colors */
        color: black;
        background-color: white;

        /* Border */
        border: 2px inset #2a9d8f;
        border-radius: 20px;
    }
</style>
