<template>
  <v-card
    height="auto"
    min-width="97%"
    max-width="97%"
    class="ma-2 px-1 white--text"
    color="persianGrey"
  >
    <v-card-title>
      <span class="title font-weight-light text-h5">{{ title }}</span>
    </v-card-title>

    <v-card-subtitle class="white--text"
      ><p>Description : {{ description }}</p></v-card-subtitle
    >

    <v-card-text
      class="white--text text-wrap textStat"
      v-html="results"
    ></v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  name: 'StatisticTile',
  props: ['title', 'description', 'results'],

  data: () => ({}),
};
</script>

<style>
.textStat {
  font-size: 0.8rem !important;
  font-weight: normal;
  letter-spacing: 0.009375em !important;
  line-height: 1.1rem;
}
</style>
