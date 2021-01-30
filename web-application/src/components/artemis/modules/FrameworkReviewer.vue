<template>
  <v-container>
    <v-row class="d-flex flex-column pa-5 ml-4">
      <h3 class="text-h4 black--text mb-4 my-3">
        Review the framework discovered
      </h3>
      <p class=" text-body-1">
        Review the different framework detected.
      </p>
      <h4 class="mb-2">Legend :</h4>
      <p>
        <span class="px-3">
          <v-icon color="green">
            mdi-check-circle
          </v-icon>
          Detected as a Framework
        </span>
        <span class="px-3">
          <v-icon color="orange">
            mdi-check-circle
          </v-icon>
          Detected as a Framework but need a validation
        </span>
        <span class="px-3">
          <v-icon color="red">
            mdi-checkbox-blank-circle
          </v-icon>
          Detected as not a Framework
        </span>
      </p>
    </v-row>
    <v-row class="pa-5 ">
      <v-card min-height="600px" min-width="100%">
        <v-card-text>
          <v-container>
            <!-- Search Bar -->
            <v-row>
              <v-toolbar dark color="charcoal" class="mb-1 mb-5">
                <v-text-field
                  v-model="search"
                  clearable
                  flat
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                  <v-spacer></v-spacer>
                  <v-select
                    v-model="sortBy"
                    flat
                    solo-inverted
                    hide-details
                    :items="keys"
                    prepend-inner-icon="mdi-magnify"
                    label="Sort by"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn-toggle v-model="sortDesc" mandatory>
                    <v-btn large depressed color="persianGrey" :value="false">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed color="persianGrey" :value="true">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-toolbar>
            </v-row>

            <!-- Display and pick -->
            <v-row>
              <!-- Search Column  -->
              <v-col md="4">
                <v-card min-width="100%">
                  <v-card-title class="pa-3"> Frameworks Detected</v-card-title>
                  <v-card-text>
                    <v-container fluid>
                      <v-data-iterator
                        :items="items"
                        :items-per-page.sync="itemsPerPage"
                        :page.sync="page"
                        :search="search"
                        :sort-by="sortBy.toLowerCase()"
                        :sort-desc="sortDesc"
                        hide-default-footer
                      >
                        <!-- Frameworks displayed on the left -->
                        <template v-slot:default="props">
                          <v-row>
                            <v-col
                              v-for="(item, i) in props.items"
                              :key="item.name"
                              cols="12"
                            >
                              <v-hover v-slot="{ hover }">
                                <v-card
                                  :elevation="
                                    hover || i == currentIndex ? 8 : 2
                                  "
                                  class="frameworkListItem"
                                  @click="setFrameworkFocus(i)"
                                >
                                  <v-card-title
                                    class="subheading font-weight-bold py-2"
                                  >
                                    {{ item.name }}
                                    <v-spacer></v-spacer>
                                    <v-icon
                                      color="green"
                                      v-if="item.status == 'validFramework'"
                                    >
                                      mdi-check-circle
                                    </v-icon>
                                    <v-icon
                                      color="orange"
                                      v-if="item.status == 'toValidFramework'"
                                    >
                                      mdi-check-circle
                                    </v-icon>
                                    <v-icon
                                      color="orange"
                                      v-if="item.status == 'notFramewok'"
                                    >
                                      mdi-checkbox-blank-circle
                                    </v-icon>
                                  </v-card-title>
                                  <v-card-subtitle
                                    class="text-subtitle-1 text--black"
                                  >
                                    Internal type: {{ item.internalType }}
                                  </v-card-subtitle>
                                </v-card>
                              </v-hover>
                            </v-col>
                          </v-row>
                        </template>

                        <template v-slot:footer>
                          <v-row class="mt-2" align="center" justify="center">
                            <span class="grey--text">Items per page</span>
                            <v-menu offset-y>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  dark
                                  text
                                  color="primary"
                                  class="ml-2"
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  {{ itemsPerPage }}
                                  <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                              </template>
                              <v-list>
                                <v-list-item
                                  v-for="(number, index) in itemsPerPageArray"
                                  :key="index"
                                  @click="updateItemsPerPage(number)"
                                >
                                  <v-list-item-title>{{
                                    number
                                  }}</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>

                            <v-spacer></v-spacer>

                            <span
                              class="mr-4
            grey--text"
                            >
                              Page {{ page }} of {{ numberOfPages }}
                            </span>
                            <v-btn
                              fab
                              dark
                              color="persianGrey"
                              class="mr-1"
                              @click="formerPage"
                            >
                              <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-btn
                              fab
                              dark
                              color="persianGrey"
                              class="ml-1"
                              @click="nextPage"
                            >
                              <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                          </v-row>
                        </template>
                      </v-data-iterator>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- Display Column  -->

              <v-col md="8">
                <v-card
                  min-width="100%"
                  min-height="100%"
                  class="pa-3"
                  id="frameworkEditorZone"
                >
                  <span
                    v-if="editFramework == null"
                    id="selectMessage"
                    class="ma-auto text-subtitle-1"
                    >Please select a framework in the list to start
                    editing</span
                  >
                  <v-card-title>
                    Edit the framework
                    <span v-if="editFramework != null">
                      : <strong>{{ editFramework.name }}</strong></span
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                      v-if="editFramework != null"
                      class="ma-1"
                      color="grey"
                      @click="undoModification()"
                      plain
                    >
                      Undo modifications
                    </v-btn>

                    <v-btn
                      v-if="editFramework != null"
                      class="ma-1"
                      color="error"
                      plain
                      @click="deleteFramework()"
                    >
                      Delete
                    </v-btn>
                  </v-card-title>
                  <v-card-text v-if="editFramework != null">
                    <v-container>
                      <v-row  class="py-1">
                        <v-col cols="4">
                          <v-subheader class="text-h6">
                            Framework type :
                          </v-subheader>
                        </v-col>

                        <v-col cols="8">
                          <v-select
                            v-model="editFramework.type"
                            :items="frameworkTypes"
                            item-text="name"
                            item-value="value"
                            label="Select"
                            persistent-hint
                            return-object
                            single-line
                            
                          ></v-select>
                        </v-col>
                      </v-row>

                      <v-row class="py-1">
                        <v-col cols="4">
                          <v-subheader class="text-h6">
                            Category :
                          </v-subheader>
                        </v-col>

                        <v-col cols="8">
                          <v-combobox
                            v-model="editFramework.category"
                            :items="framewokCategories"
                            label="Select a category or create a new one"
                          ></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row class="py-1 pb-5">
                        <v-col cols="4">
                          <v-subheader class="text-h6">
                            Location :
                          </v-subheader>
                        </v-col>

                        <v-col cols="8">
                          <v-text-field
                            v-model="editFramework.location"
                            :rules="rules"
                            counter="25"
                            hint="Location of the framework ( website, repository ...)"
                            label="Regular"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="px-3">
                        <v-textarea
                          v-model="editFramework.description"
                          outlined
                          clearable
                          clear-icon="mdi-close-circle"
                          label="Description of the framework"
                          :value="editFramework.description"
                        ></v-textarea>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions v-if="editFramework != null">
                    <v-spacer></v-spacer>
                    <v-btn class="ma-1" color="green" plain>
                      Update the Framework
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Framework } from "@/api/interface/ApiArtemis.interface";
import Vue from "vue";

export default Vue.component("FrameworkReviewer", {
  data: () => ({
    itemsPerPageArray: [8, 12, 50],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: [
      "Name",
      "Description",
      "Type discovered",
      "Category",
      "Internal type",
      "Location",
      "Discovery date",
      "Percentage of detection",
    ],
    items: [
      {
        name: "Test Framework 1",
        description: "string",
        type: "string",
        category: "string",
        internalType: "Cobol",
        location: "string",
        discoveryDate: "string",
        percentageOfDetection: 0.5,
      },
      {
        name: "Test Framework 2",
        description: "string",
        type: "string",
        category: "string",
        internalType: "Cobol",
        location: "string",
        discoveryDate: "string",
        percentageOfDetection: 0.5,
      },
      {
        name: "Test Framework 3",
        description: "string",
        type: "string",
        category: "string",
        internalType: "Cobol",
        location: "string",
        discoveryDate: "string",
        percentageOfDetection: 0.5,
      },
      {
        name: "Test Framework 4",
        description: "string",
        type: "string",
        category: "string",
        internalType: "Cobol",
        location: "string",
        discoveryDate: "string",
        percentageOfDetection: 0.5,
      },
      {
        name: "Test Framework 5",
        description: "string",
        type: "string",
        category: "string",
        internalType: "Cobol",
        location: "string",
        discoveryDate: "string",
        percentageOfDetection: 0.5,
      },
    ] as Framework[],

    currentIndex: 0 as number,
    focusedFramework: null,
    editFramework: null as Framework,

    // Editing choice
    frameworkTypes: [
      {
        name: "Framework",
        value: "Framework",
      },
      {
        name: "Not a Framework",
        value: "NotFramework",
      },
    ],

    framewokCategories: [
      "IBM Utilities",
      "IBM Frameworks",
      "IBM Spagetthis"
    ]
  }),

  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },

  methods: {
    setFrameworkFocus(itemIndex: number) {
      console.log("Focus on : " + itemIndex);
      this.currentIndex = itemIndex;
      this.focusedFramework = this.items[this.currentIndex];
      this.editFramework = Object.assign({}, this.focusedFramework);
    },

    getFocusedFramework(): Framework {
      return this.items[this.currentIndex];
    },

    undoModification() {
      console.log("Undo the modifications : ", this.editFramework);
      this.editFramework = this.focusedFramework;
      console.log("Undone ! ", this.editFramework);
    },

    deleteFramework() {
      console.log("Delete the framework : ", this.focusedFramework);
    },

    nextPage() {
      this.currentIndex = 0;
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      this.currentIndex = 0;
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

  },
});
</script>

<style>
.frameworkListItem {
  cursor: pointer;
}

.frameworkListItem .v-card__subtitle {
  padding-bottom: 4px !important;
}

#frameworkEditorZone {
  position: relative;
}

#frameworkEditorZone #selectMessage {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
