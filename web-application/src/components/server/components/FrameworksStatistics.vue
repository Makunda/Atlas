<template>
  <v-card width="100%">
    <v-card-title>
      <h3 class="text-h4">Frameworks Statistics</h3>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container fluid>
        <v-col md="4"> </v-col>
        <v-col md="4"> </v-col>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FrameworksStatistics',

  data: () => ({
    numberFrameworks: 0,
  }),
});
</script>

<style scoped></style>
