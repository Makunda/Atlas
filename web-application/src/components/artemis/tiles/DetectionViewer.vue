<template>
  <v-container>
    <v-row style="width: 100%">
      <v-col cols="3"
        ><p>
          <strong>Application</strong><br />{{ detectionObj.application }}
        </p></v-col
      >
      <v-col cols="3"
        ><p>
          <strong>Language</strong><br />{{ detectionObj.language }}
        </p></v-col
      >
      <v-col cols="3"
        ><p><strong>Time Elapsed</strong><br />{{ toDisplay }}</p></v-col
      >
      <v-col cols="3"
        ><p><strong>Results</strong><br />{{ numResults }}</p></v-col
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { DetectionStatus } from "@/api/interface/artemis/detectionStatus.enum";
import DetectionInterface from "@/api/interface/artemis/Detection";

export default Vue.component("DetectionViewer", {
  props: ["detection"],

  data: () => ({
    detectionObj: {} as DetectionInterface,
    toDisplay: "",
    numResults: ""
  }),

  methods: {
    milisecondsToDhms(miliseconds) {
      const seconds = Number(miliseconds / 1000);
      const d = Math.floor(seconds / (3600 * 24));
      const h = Math.floor((seconds % (3600 * 24)) / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);

      const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    },

    countDownTimer() {
      this.toDisplay = this.milisecondsToDhms(
        Date.now() - this.detectionObj.timestampStart
      );
      setTimeout(this.countDownTimer, 1000);
    }
  },

  mounted() {
    if (this.detection == null) {
      return;
    }

    this.detectionObj = this.detection as DetectionInterface;
    console.log("Detection", this.detectionObj);

    if (this.detectionObj.status == DetectionStatus.Pending) {
      this.numResults = "Pending detection";
      this.countDownTimer();
    } else {
      const elapsed =
        this.detectionObj.timestampFinish - this.detectionObj.timestampStart;
      this.toDisplay =
        elapsed > 0 ? this.milisecondsToDhms(elapsed) : "No information";
    }

    // Results this.numResults =
    this.numResults =
      this.detectionObj.data.length > 0
        ? this.detectionObj.data.filter(x => x.type === "Framework").length +
          " framework detected."
        : "No framework detected";
  }
});
</script>
