<template>
  <v-container class="pl-6 " fluid>
    <v-row class="ml-4 my-6 d-flex flex-column">
      <h2 class="text-h2  mx-4">Groups operations on {{ application }}</h2>
      <p class="ml-6 my-6 text-body-1">
        The grouping section is here to help you putting tags on interst points
        in your application. It matches some predefined patterns, to give you
        quick ideas of what can be done in the application.<br />
        You can enrich this configuration manually, and create custom generics
        tags in the <i>Tag creator studio</i>.
        <br />

        <!-- TO DO REWRITE THIS SECTION -->
      </p>
    </v-row>
    <v-row class="mx-10 my-8">
      <v-toolbar color="#1D5D6B" dark>
        <v-toolbar-title>Popular grouping operations</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-autocomplete
          :search-input.sync="searchActions"
          cache-items
          class="mx-4"
          flat
          hide-details
          hide-no-data
          label="Filter the operations.."
          solo-inverted
        ></v-autocomplete>
      </v-toolbar>
    </v-row>
    <v-row class="mx-10">
      <v-slide-group active-class="success" class="pa-4" show-arrows>
        <v-slide-item
          v-for="(n, index) in filteredPopularOperations"
          :key="index"
        >
        </v-slide-item>
      </v-slide-group>
    </v-row>

    <v-row class="mx-10 my-8">
      <LevelViewer></LevelViewer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LevelViewer from "@/components/screens/grouping/components/LevelViewer.vue";
import GroupAction from "@/api/interface/extensions/demeter/GroupAction";

export default Vue.extend({
  name: "GroupingApplication",

  components: {
    LevelViewer
  },

  data: () => ({
    // Loadings
    loadingActions: false,

    searchActions: "",
    searchLevels: "",

    application: "" as string,
    popularOperations: [] as GroupAction[],
    filteredPopularOperations: [] as GroupAction[],

    getActionList() {
      this.popularOperations = [];
    }
  }),

  methods: {
    getLevelList() {
      console.log("Not implemented.");
    }
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getActionList();
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.getActionList();
    },

    searchActions: function(val: string) {
      if (!val || val.length == 0) {
        this.filteredPopularOperations = this.popularOperations;
      } else {
        // Filter the array  of application
        val = val.toLowerCase();
        this.filteredPopularOperations = this.popularOperations.filter(x => {
          return (
            x.title.toLowerCase().includes(val) ||
            x.description.toLowerCase().includes(val)
          );
        });
      }
    }
  }
});
</script>
