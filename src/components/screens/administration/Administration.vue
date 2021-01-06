<template>
  <v-container>
    <v-row class="text-center pa-5">
      <h3 class="text-h3">Administration Section </h3>
    </v-row>
    <v-row>
        <v-col cols="7">
            <DemeterLevelsTile></DemeterLevelsTile>
            <DemeterModuleTile></DemeterModuleTile>
        </v-col>
        <v-col col="5"> 
            <GlobalOperations></GlobalOperations>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DemeterLevelsTile from "@/components/screens/administration/tiles/DemeterLevelsTile.vue";
import DemeterModuleTile from "@/components/screens/administration/tiles/DemeterModuleTile.vue";
import GlobalOperations from "@/components/screens/administration/tiles/GlobalOperations.vue";

export default Vue.extend({
  name: "Administration",

  components : {
      DemeterLevelsTile,
      GlobalOperations,
      DemeterModuleTile
  },

  data: () => ({

  })
});
</script>
