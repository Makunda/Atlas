<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6"> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  ApplicationController,
  ApplicationRecord
} from "@/api/applications/ApplicationController";

export default Vue.extend({
  name: "MainDashboard",

  data: () => ({
    numberOfApplication: 0 as number,
    applicationList: [] as ApplicationRecord[]
  }),

  created() {
    this.getApplicationList();
  },

  methods: {
    getApplicationList() {
      ApplicationController.getSortedApplications().then(
        (res: ApplicationRecord[]) => {
          this.numberOfApplication = res.length;
          this.applicationList = res;
        }
      );
    }
  }
});
</script>
