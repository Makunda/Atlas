<template>
  <v-container fluid>
    <v-row class="mb-10">
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
      <v-container class="mx-auto ">
        <component :is="items[tab].view"></component>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LevelExplorer from "@/components/imaging/levels/LevelExplorer.vue";
import TransactionExplorer from "@/components/imaging/TransactionExplorer.vue";
import IconManager from "@/components/imaging/IconManager.vue";

export default Vue.extend({
  name: "ImagingTuning",

  components: {
    LevelExplorer,
    TransactionExplorer,
    IconManager
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  mounted() {
    this.application = this.$store.state.applicationName;
  },

  data: () => ({
    application: "",

    step: 1,
    tab: 0,

    items: [
      {
        view: "LevelExplorer",
        name: "Level Manager",
        title: "Review the configuration of the ",
        icon: "mdi-folder-cog"
      },
      {
        view: "TransactionExplorer",
        name: "Transaction",
        title: "Explore the transaction ",
        icon: "mdi-apple-safari"
      },
      {
        view: "IconManager",
        name: "Icon Manager",
        title: "Manage icons ",
        icon: "mdi-file-image-outline"
      }
    ]
  }),

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
    }
  }
});
</script>

<style></style>
