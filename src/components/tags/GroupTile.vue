<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Candidate application</div>
      <p class="display-1 text--primary">
        {{ application }}
      </p>
      <p>Objects to group : {{ count }}</p>
      <p>Will create groups :</p>
      <v-row class="text--primary" v-html="groupName"> </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="space-around">
        <v-btn tile color="success">
          <v-icon left>
            mdi-adjust
          </v-icon>
          Group communities
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.component("GroupTile", {
  props: ["application", "groupName", "count"],

  data: () => ({})
});
</script>
