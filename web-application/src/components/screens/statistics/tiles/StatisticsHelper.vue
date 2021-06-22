<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="d-flex flex-row"
        text
        color="red lighten-2"
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon color="persianGrey">
          mdi-help-circle
        </v-icon>
        <i class="mt-1"> Help </i>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 white--text charcoal lighten-2">
        Help on statistics
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-row class="mx-2 mt-2 d-flex flex-column">
            <h5 class="text-h5 black--text">Statistics on the application</h5>
            <p>
              Quickly discover if the configuration of the application's
              analysis is correct with some statistics on it
            </p>
            <h3>Color Schema :</h3>
            <p>
              The statistical tiles below change color according to the score
              they measure. A green tile is a sign that the statistics have a
              "high percentage" of compliance.<br />
              They they follow the following color schema :
            </p>
            <div class="color-ruler mb-6">
              <div class="round">0</div>
              <div class="round">33</div>
              <div class="round">66</div>
              <div class="round">100</div>
            </div>
            <p>
              <i
                >Disclaimer: It can happen that even with a perfect
                configuration, the statistics show bad scores. Further
                investigation is needed to understand where these results come
                from.<br />
                This can be done with the action tiles, below this section, to
                investigate directly in CAST Imaging.</i
              >
            </p>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "StatisticsHelper",

  data: () => ({
    dialog: false
  })
});
</script>

<style scoped></style>
