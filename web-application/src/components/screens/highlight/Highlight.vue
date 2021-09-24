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
import CloudBockersUpload from "./steps/CloudBockersUpload.vue";
import OSSUpload from "./steps/OSSUpload.vue";


export default Vue.extend({
  name: "Highlight",

  components: {
    CloudBockersUpload,
    OSSUpload,
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
        view: "CloudBockersUpload",
        name: "Cloud Blockers",
        icon: "mdi-folder-cog"
      },
      {
        view: "OSSUpload",
        name: "OSS Injection",
        icon: "mdi-open-source-initiative"
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
