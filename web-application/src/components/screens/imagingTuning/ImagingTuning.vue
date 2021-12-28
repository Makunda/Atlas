<template>
  <v-container fluid>
    <v-row class="mb-10">
      <v-tabs
        v-model="tab"
        align-with-title
        background-color="deepcharcoal"
        class="pt-3"
        dark
        fixed-tabs
      >
        <v-tab v-for="item in items" :key="item.name" @click="goto(item.name)">
          <v-icon v-if="item.icon" class="mr-3">{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-container class="mx-auto ">
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ImagingTuning',

  components: {},

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    },

    getRoute() {
      const route = this.$route.fullPath;
      const split = route.split('/');
      if (split.length < 4) return '';
      return split[3];
    },
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    const route = this.getRoute;
    console.log('Route :', route);

    if (route == '') this.goto('level');
    else this.changeTab(route);
  },

  methods: {
    changeTab(component: string) {
      const index = this.items.findIndex((x) => x.view == component);
      this.tab = index >= 0 ? index : 0;
    },

    goto(route: string) {
      this.$router.replace(`/atlas/tuning/${route}`).catch(() => {
        // Ignored
      });
    },
  },

  data: () => ({
    application: '',
    activatedTab: '',

    step: 1,
    tab: 0,

    items: [
      {
        view: 'LevelExplorer',
        name: 'level',
        title: 'Review the configuration of the ',
        icon: 'mdi-folder-cog',
      },
      {
        view: 'ModuleExplorer',
        name: 'module',
        title: 'Review the configuration of the ',
        icon: 'mdi-folder-cog',
      },
      {
        view: 'ArchitectureExplorer',
        name: 'architecture',
        title: 'Review the configuration of the ',
        icon: 'mdi-folder-cog',
      },
      {
        view: 'TransactionExplorer',
        name: 'transaction',
        title: 'Explore the transaction ',
        icon: 'mdi-apple-safari',
      },
      {
        view: 'DataCallGraphExplorer',
        name: 'datacallGraph',
        title: 'Explore the DataCallGraph',
        icon: 'mdi-apple-safari',
      },
      {
        view: 'Backup',
        name: 'backup',
        title: 'Backup management',
        icon: 'mdi-backup-restore',
      },
    ],
  }),

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    },

    getRoute(route) {
      this.changeTab(route);
    },
  },
});
</script>

<style></style>
