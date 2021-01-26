<template>
  <v-container fluid>
    <v-row>
      <v-tabs
        class="pt-3"
        v-model="tab"
        align-with-title
        fixed-tabs
        background-color="charcoal"
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

  <!-- <v-container fluid>
    <v-row class="px-8 mb-8 my-4">
      <v-col class="mx-auto" sm="12" lg="12" >
        <GroupingTile class="mx-auto"> </GroupingTile>
      </v-col>
    </v-row>
    <v-row class="px-8 my-8">
      <v-col class="mx-auto" sm="12" lg="12">
        <TagApplication class="mx-auto"></TagApplication>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script lang="ts">
import GroupingTile from "@/components/screens/enrichment/tiles/GroupingTile.vue";
// import DemeterGroupTile from "@/components/screens/main/tiles/DemeterGroupTile.vue";
import TagViewer from "@/components/screens/enrichment/steps/TagViewer.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Enrichment",

  components: {
    GroupingTile,
    // DemeterGroupTile,
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

    // Navigation
    tab: 0,
    items: [
      {
        view: "GroupingTile",
        name: "Assistants",
        icon: "mdi-assistant"
      },
      {
        view: "TagViewer",
        name: "Tags",
        icon: "mdi-tag-multiple"
      }
    ]
  }),

  mounted() {
    this.applicationName = this.$store.state.applicationName;
  },

  methods: {},

  watch: {
    getApplicationName(newApp) {
      this.applicationName = newApp;
    }
  }
});
</script>
