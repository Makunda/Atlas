<template>
  <v-container>
    <v-row>
      <BreakdownApplication></BreakdownApplication>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import BreakdownApplication from '@/components/artemis/tiles/BreakdownApplication.vue';

export default Vue.extend({
  name: 'BreakdownStep',
  components: { BreakdownApplication },
  data: () => ({}),
});
</script>
