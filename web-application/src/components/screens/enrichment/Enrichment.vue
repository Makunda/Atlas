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

    <div id="notInstalledDemter" v-if="diplayNotInstalled">
      <h2 class="ma-auto text--h2" id="Message">
        The Demeter extension is not installed on this server.<br />
        You must install the Demeter extension to continue on this section.<br />
        Please install the extension from
        <a
          href="https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0"
        >
          CAST Extend
        </a>
      </h2>
    </div>
  </v-container>
</template>

<script lang="ts">
// import DemeterGroupTile from "@/components/steps/main/tiles/DemeterGroupTile.vue";
import TagViewer from "@/components/screens/enrichment/steps/TagViewer.vue";
import UseCases from "@/components/dionysus/modules/UseCases.vue";
import TagStudio from "@/components/dionysus/modules/TagStudio.vue";
import Vue from "vue";
import { AtlasController } from "@/api/controllers/extensions/atlas/AtlasController";

export default Vue.extend({
  name: "Enrichment",

  components: {
    TagStudio,
    UseCases,
    TagViewer
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    loading: true,
    groupRecord: undefined as unknown,
    applicationName: "" as string,
    diplayNotInstalled: false,

    // Navigation
    tab: 0,
    items: [
      {
        view: "TagViewer",
        name: "Tags",
        icon: "mdi-tag-multiple"
      },
      {
        view: "UseCases",
        name: "Use cases",
        icon: "mdi-folder"
      },
      {
        view: "TagStudio",
        name: "Tag studio",
        icon: "mdi-android-studio"
      }
    ]
  }),

  mounted() {
    this.applicationName = this.$store.state.applicationName;

    AtlasController.getDemeterVersion()
      .then(async (version: string) => {
        this.version = version;
      })
      .catch(err => {
        console.error(
          "The Demeter extension wasn't detected. The functionnalities will be limited. Please install the Artemis extension",
          err
        );
        this.diplayNotInstalled = true;
      });
  },

  methods: {},

  watch: {
    getApplicationName(newApp) {
      this.applicationName = newApp;
    }
  }
});
</script>

<style>
#notInstalledDemter {
  min-width: 100%;
  min-height: 100%;
  position: absolute;

  top: 0;
  right: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}

#notInstalledDemter #Message {
  display: block;
  color: white;
  text-align: center;
  position: absolute;

  top: 40%;
  right: 0;
  width: 100%;
}
</style>
