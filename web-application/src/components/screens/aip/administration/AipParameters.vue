<template>
  <v-card>
    <v-card-title>
      <v-row class="d-flex flex-column">
        <h3 class="text-h4 black--text mx-4 mb-4 my-3">
          CAST AIP Configuration
        </h3>
        <p class="ml-4 text-body-1">
          For more information, please refer to the documentation.
        </p>
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-container fluid>
        <v-row class="mt-3">
          <h3 class="text-h3">Server list</h3>
        </v-row>
        <v-row class="mt-3 d-flex flex-column">
          <p>
            Search in the list of the server by their name / ip
          </p>
          <v-text-field
            v-model="search"
            label="Search Server"
            flat
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
          ></v-text-field>
        </v-row>
        <v-row class="mt-5">
          <v-checkbox
            v-model="caseSensitive"
            hide-details
            label="Case sensitive search"
          ></v-checkbox>
        </v-row>
        <!-- Tree / result row -->
        <v-row class="mt-5">
          <v-col >
            <v-treeview
              :items="items"
              :search="search"
              :filter="filter"
              :open.sync="open"
            >
              <template v-slot:prepend="{ item }">
                <v-icon v-if="item.children">mdi-folder-network</v-icon>
              </template>
              <template v-slot:append="{ item }">
                <v-icon v-if="item.children">mdi-folder-network</v-icon>
              </template>
            </v-treeview>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="6">
            Test
          </v-col>
        </v-row>

        <v-row></v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AipParameters",

  data: () => ({
    items: [],
    open: [],
    search: null,
    caseSensitive: false,
  }),

  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    },
  },
});
</script>
