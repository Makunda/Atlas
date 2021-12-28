<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-card
        class="my-3 statistic-tile-linear"
        :color="indicatorColor"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-card-text class="fill-height">
          <p class="subtitle-2">{{ title }}</p>
          <v-progress-linear
            color="white"
            height="25"
            :value="percentage * 100"
          >
            <template>
              <strong style="color: #264653;"
                >{{ Math.ceil(percentage * 100) }}%</strong
              >
            </template>
          </v-progress-linear>
        </v-card-text>
      </v-card>
    </template>
    <span>{{ description }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LinearStatisticTile',

  props: {
    title: String,
    description: String,
    percentage: Number,
    inverted: Boolean,
  },

  // Pick the right color on mount
  mounted() {
    if (this.inverted) {
      this.displayedPercentage = 1 - this.percentage;
    } else {
      this.displayedPercentage = this.percentage;
    }

    if (this.displayedPercentage <= 0.25) {
      this.indicatorColor = '#e76f51';
    } else if (
      this.displayedPercentage > 0.25
      && this.displayedPercentage <= 0.5
    ) {
      this.indicatorColor = '#f4a261';
    } else if (
      this.displayedPercentage > 0.5
      && this.displayedPercentage <= 0.75
    ) {
      this.indicatorColor = '#f4a261';
    } else {
      this.indicatorColor = '#2a9d8f';
    }
  },

  data: () => ({
    indicatorColor: 'persianGrey',
    displayedPercentage: 0.0,
  }),
});
</script>

<style>
.statistic-tile-linear {
  height: fit-content;
  width: 100%;
}
</style>
