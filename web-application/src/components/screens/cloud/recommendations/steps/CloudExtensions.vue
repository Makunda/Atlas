<template>
  <v-container>
    <v-row class="pb-0">
      <v-card width="100%">
        <v-card-text>
          <p class="text-h3 text--primary">
            <span class="font-weight-light pr-1">Cloud extensions on</span> {{ application }}
          </p>
          <div class="text--subtitle py-5">
            Get automatic recommendations on how to migrate an application to a
            specific cloud service
          </div>
        </v-card-text>
      </v-card>
    </v-row>

    <v-row class="text-center pt-0">
      <v-container fluid class="pa-0">
        <v-data-iterator
          :items="extensions"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          :search="search"
          :sort-by="sortBy.toLowerCase()"
          :sort-desc="sortDesc"
          :loading="loadingExtensions"
          hide-default-footer
        >
          <template v-slot:header>
            <v-toolbar dark color="charcoal" class="mb-4">
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
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="text-center"
              >
                <v-card class="text-center">
                  <v-card-title
                    class="subheading font-weight-bold text-center d-flex justify-center"
                    width="100%"
                  >
                    <p class="text-center">{{ item.name }}</p>
                  </v-card-title>
                  <v-card-subtitle>
                    <v-chip
                      v-for="(tag, i) in item.tags"
                      :key="i"
                      label
                      class="mx-1"
                    >
                      {{ tag }}</v-chip
                    >
                  </v-card-subtitle>
                  <v-card-text>
                    <div class="text--primary">{{ item.description }}"</div>
                  </v-card-text>

                  <v-card-actions class="d-flex justify-center pa-5">
                    <v-btn color="success" @click="openModal(item)"
                      >Analyze the application</v-btn
                    >
                  </v-card-actions>
                </v-card>
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
                    <v-list-item-title>{{ number }}</v-list-item-title>
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
    </v-row>

    <!-- Modal section -->
    <CloudExecutionModal
      :dialog="showModal"
      :application="application"
      :title="selectedExtension.name"
      :description="selectedExtension.fullDescription"
      v-on:Close="showModal = false"
      v-on:Run="runExtension"
    />

    <ProgressModal
      :dialog="showProgressModal"
      :title="selectedExtension.name"
    />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import CloudRecoController from "@/api/controllers/recommendations/cloud/CloudRecoController";
import CloudExecutionModal from "../components/CloudExecutionModal.vue";
import ProgressModal from "../components/ProgressModal.vue";
import Extension from "@/api/interface/cloud/recommendations/Extension";
import flash, { FlashType } from "@/modules/flash/Flash";

export default Vue.extend({
  name: "CloudExtensions",

  components: {
    CloudExecutionModal,
    ProgressModal
  },

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getExtensions();
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.extensions.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== "Name");
    },

    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

    async getExtensions() {
      this.loadingExtensions = true;
      this.errorExtension = false;
      try {
        this.extensions = await CloudRecoController.getExtensionList();
      } catch (error) {
        console.error("Failed to get the list of extension");
        this.errorExtension =
          "Failed to get the extension list. Please retry..";
      } finally {
        this.loadingExtensions = true;
      }
    },

    /** Modal  */

    openModal(extension: Extension) {
      this.selectedExtension = extension;
      this.showModal = true;
    },

    async runExtension() {
      this.showModal = false;

      // Must select an extension
      if (!this.selectedExtension.id) return;

      this.showProgressModal = true;

      try {
        // Run the extension using the application and its Id
        await CloudRecoController.runExtension(
          this.selectedExtension.id,
          this.application
        );
        flash.commit("add", {
          type: FlashType.SUCCESS,
          title: "Succesful operation.",
          body: `The execution of the ${this.selectedExtension.name} is done.`
        });
      } catch (error) {
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to get cloud recommendations extensions.",
          body: error
        });
        console.log("Failed to execute the extension.", error);
      } finally {
        this.showProgressModal = false;
      }
    }
  },

  data: () => ({
    // Default
    application: "" as string,

    // Data iterator
    itemsPerPageArray: [20, 40, 100],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 20,
    sortBy: "name",
    keys: ["id", "name", "description", "tags", "creation", "lastUpdate"],
    extensions: [],

    loadingExtensions: false,
    errorExtension: "",

    // Extension modal
    showModal: false,
    selectedExtension: {} as Extension,

    // Progress bar modal
    showProgressModal: false
  }),

  watch: {
    getApplicationName(old, newApp) {
      this.application = newApp;
    }
  }
});
</script>
