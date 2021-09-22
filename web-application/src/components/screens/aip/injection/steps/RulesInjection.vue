<template>
  <v-card width="100%">
    <v-card-title>
      <h3 class="py-3 pb-5 text-h4">Rules injection</h3>
    </v-card-title>
    <v-card-subtitle>
      <p class="subtitle-1 ml-1">
        Inject rules coming from CAST AIP in CAST Imaging
      </p>
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <v-select :items="schemaNames" label="Outlined style" outlined></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <p class="text-center">send to</p>
          </v-col>
          <v-col cols="12" md="5"> </v-col>
        </v-row>
        <v-row> </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { AipConfiguration } from '@/api/interface/aip/Aipconfiguration';
import { AipSchema } from '@/api/interface/aip/AipSchema';

export default Vue.extend({
  name: "RulesInjection",

  data: () => ({
      schemaNames: undefined as [AipSchema, AipConfiguration]
  })
});
</script>
