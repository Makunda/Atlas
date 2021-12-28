<template>
  <v-container fluid>
    <v-row>
      <v-tabs
        class="pt-3"
        v-model="tab"
        align-with-title
        fixed-tabs
        background-color="deepcharcoal"
        dark
      >
        <v-tab v-for="item in items" :key="item.name">
          <v-icon class="mr-3" v-if="item.icon">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-container class="mx-auto mt-10">
        <component :is="items[tab].view"></component>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import RulesInjection from './steps/RulesInjection.vue';

export default Vue.extend({
  name: 'AipInjection',

  components: {
    RulesInjection,
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },
  },

  data: () => ({
    loading: true,
    applicationName: '' as string,

    // Navigation
    tab: 0,
    items: [
      {
        view: 'RulesInjection',
        name: 'Inject Rules',
        icon: 'mdi-assistant',
      },
    ],
  }),

  mounted() {
    this.applicationName = this.$store.state.applicationName;
  },

  watch: {
    getApplicationName(newApp) {
      this.applicationName = newApp;
    },
  },
});
</script>

<style>
.v-tab-active {
  background-color: #425b66 !important;
}
</style>
