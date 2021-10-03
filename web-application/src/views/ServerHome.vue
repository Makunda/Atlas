<template>
  <v-container class="pa-10 mx-auto">
    <v-row>
      <v-card width="100%">
        <v-card-title>
          <h3 class="text-h4">Administration of the server</h3>
        </v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text> </v-card-text>
      </v-card>
    </v-row>
    <v-row class="mt-10">
      <ServerCategoriesHelper></ServerCategoriesHelper>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ServerCategoriesHelper from "@/components/navigation/ServerCategoriesHelper.vue";

export default Vue.extend({
  name: "ServerHome",
  components: {
    ServerCategoriesHelper
  }
});
</script>

<style scoped></style>
