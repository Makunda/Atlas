<template>
  <v-container>
    <v-row>
      <v-tabs
        v-model="tab"
        align-with-title
        fixed-tabs
        background-color="charcoal"
        dark
      >
        <v-tab v-for="item in items" :key="item.name">
          <v-icon class="mr-2" v-if="item.icon">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>

    <v-card class="ma-4 pa-2">
      <v-card-text>
        <!-- Grouping operations -->
        <v-row v-if="tab == 0">
          <v-col cols="7">
            <DemeterLevelsTile></DemeterLevelsTile>
            <DemeterModuleTile></DemeterModuleTile>
          </v-col>
          <v-col col="5">
            <GlobalOperations></GlobalOperations>
          </v-col>
        </v-row>

        <!-- Parameters -->
        <v-row v-if="tab == 1">
          <Parameters></Parameters>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DemeterLevelsTile from "@/components/screens/administration/tiles/DemeterLevelsTile.vue";
import DemeterModuleTile from "@/components/screens/administration/tiles/DemeterModuleTile.vue";
import GlobalOperations from "@/components/screens/administration/tiles/GlobalOperations.vue";
import Parameters from "@/components/screens/administration/Parameters.vue";

export default Vue.extend({
  name: "Administration",

  components: {
    DemeterLevelsTile,
    GlobalOperations,
    DemeterModuleTile,
    Parameters
  },

  data: () => ({
    tab: 0,

    items: [
      {
        view: "GroupingStep",
        name: "Grouping"
      },
      {
        view: "ParametersStep",
        name: "Parameters"
      }
    ]
  })
});
</script>
