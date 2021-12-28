<template>
  <v-container id="main-container">
    <v-row style="height: 100%; width: 100%; margin: 0">
      <!--  Parameters  -->
      <v-col style="background-color: #707070"></v-col>

      <!-- Visualization -->
      <v-col id="sigma-col">
        <div id="sigma-container"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GraphViewer from "@/services/graph/GraphViewer";

export default Vue.extend({
  name: "TransactionCommunities",

  mounted() {
    this.buildGraph();
  },

  methods: {
    buildGraph() {
      const container = document.getElementById("sigma-container") as HTMLElement;
      const graphViewer = new GraphViewer(container);
      graphViewer.loadExample();
    }
  }
});
</script>

<style scoped>
#main-container {
  height: 100%;
  max-width: 100% !important;
}

#sigma-col {
  height: 100%;
  background-color: gre;
}

#sigma-container {
  min-width: 400px;
  min-height: 400px;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
