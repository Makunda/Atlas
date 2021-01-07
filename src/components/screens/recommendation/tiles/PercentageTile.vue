<template>
  <v-card class="ma-5 statistic-tile" :color="indicatorColor" dark>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text class="fill-height mt-5">
      <p style="height: 50px">{{ description }}</p>
      <v-progress-linear color="white" height="25" :value="percentage * 100">
        <template>
          <strong style="color: #264653;"
            >{{ Math.ceil(percentage * 100) }}%</strong
          >
        </template>
      </v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PercentageTile",

  props: {
    title: String,
    description: String,
    percentage: Number,
    inverted: Boolean
  },

  // Pick the right color on mount
  mounted() {
    if (this.inverted) {
      this.displayedPercentage = 1 - this.percentage;
    } else {
      this.displayedPercentage = this.percentage;
    }

    if (this.displayedPercentage <= 0.25) {
      this.indicatorColor = "#e76f51";
    } else if (
      this.displayedPercentage > 0.25 &&
      this.displayedPercentage <= 0.5
    ) {
      this.indicatorColor = "#f4a261";
    } else if (
      this.displayedPercentage > 0.5 &&
      this.displayedPercentage <= 0.75
    ) {
      this.indicatorColor = "#f4a261";
    } else {
      this.indicatorColor = "#2a9d8f";
    }
  },

  data: () => ({
    indicatorColor: "persianGrey",
    displayedPercentage: 0.0
  })
});
</script>

<style>
.statistic-tile {
  height: 250px;
  width: 250px;
}
</style>
