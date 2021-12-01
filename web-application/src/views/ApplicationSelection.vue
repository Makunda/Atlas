<template>
  <v-app class="main-application">
    <v-card
      id="colored-tile"
      class="mx-auto d-flex justify-content-between rounded-lg"
    >
      <!-- Bakcground Image  -->
      <img
        id="background-logo"
        :src="`${publicPath}assets/svg/atlasBlack2.svg`"
        alt="Atlas logo"
      />

      <v-card-text class="grow" fill-height height="100%">
        <v-container style="height: 100%; display: grid; position: relative">
          <v-container style="margin: auto; height: 90%; width: 90%">
            <v-row fill-height style="height: 100%">
              <!-- Image column -->
              <v-col cols="12" md="5"></v-col>
              <v-col
                class="rounded-lg"
                cols="12"
                md="7"
                style="background-color: #ffffff; min-height: 100%; z-index: 100"
              >
                <v-container style="max-height: 100%">
                  <v-row>
                    <h4>
                      Select an application (
                      {{ applicationList.length }} applications )
                    </h4>
                  </v-row>
                  <v-row style="max-height: 100%">
                    <v-container>
                      <v-row>
                        <v-autocomplete
                          v-model="selectedApplication"
                          :items="items"
                          :loading="isLoading"
                          :search-input.sync="search"
                          full-width
                          hide-no-data
                          hide-selected
                          item-text="name"
                          item-value="name"
                          label="Applications on servers"
                          placeholder="Start typing to Search"
                          prepend-icon="mdi-database-search"
                          return-object
                        ></v-autocomplete>
                      </v-row>

                      <v-row>
                        <v-virtual-scroll
                          :items="displayedApplicationList"
                          bench="20"
                          item-height="74"
                          max-height="580px"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  <v-btn
                                    class="ml-0 px-0"
                                    small
                                    text
                                    v-on:click="redirectApplication(item.name)"
                                    ><h4>{{ item.name }}</h4></v-btn
                                  >
                                  <v-chip-group show-arrows="false">
                                    <v-chip
                                      v-for="tag in item.technologies"
                                      :key="tag"
                                      x-small
                                    >
                                      {{ tag }}
                                    </v-chip>
                                  </v-chip-group>
                                </v-list-item-title>
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-btn
                                  depressed
                                  small
                                  v-on:click="redirectApplication(item.name)"
                                >
                                  View Application

                                  <v-icon color="orange darken-4" right>
                                    mdi-open-in-new
                                  </v-icon>
                                </v-btn>
                              </v-list-item-action>
                            </v-list-item>
                            <v-divider class="mx-5"></v-divider>
                          </template>
                        </v-virtual-scroll>
                      </v-row>
                    </v-container>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-card-text>
      <!-- Mentions -->
      <div class="white--text pr-4 mentions">
        <v-spacer></v-spacer>
        <p>Powered by the North America Solutions Design Team - 2021</p>
      </div>

      <input v-on:keyup.enter="onEnter" />
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { ApplicationInsights } from "@/api/interface/imaging/ApplicationInsights";
import flash, { FlashType } from "@/modules/flash/Flash";
import ApplicationController from "@/api/controllers/imaging/ApplicationController";
import { Cookie } from "@/enum/Cookie";

export default Vue.extend({
  name: "ApplicationSelection",

  data: () => ({
    publicPath: process.env.BASE_URL,

    // Virtual scroller
    benched: 0,
    displayedApplicationList: [] as ApplicationInsights[],
    applicationList: [] as ApplicationInsights[],
    selectedApplication: {} as ApplicationInsights,

    search: "",

    isLoading: false
  }),

  mounted() {
    this.initialize();
  },

  methods: {
    // Initialize the page
    async initialize() {
      await this.getApplications();
    },

    // Get the list of the application on the server
    async getApplications() {
      try {
        this.isLoading = true;
        this.applicationList = await ApplicationController.getAllApplicationsInsights();

        this.applicationList = this.applicationList.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );

        this.displayedApplicationList = this.applicationList;
        this.search = "";
      } catch (error) {
        flash.commit("add", {
          type: FlashType.ERROR,
          title: "Failed to get the list of application.",
          body: error
        });
      } finally {
        this.isLoading = false;
      }
    },

    // Go to application
    redirectApplication(application: string) {
      // Replace with new application
      try {
        this.$cookies.set(Cookie.APPLICATION_COOKIE, application, "3Od");
      } catch (error) {
        console.error(`Failed to set ${Cookie.APPLICATION_COOKIE}.`, error);
      }

      // Redirect
      this.$router.replace("/atlas");
    }
  },

  watch: {
    search: {
      handler() {
        // If empty search
        if (this.search == "") {
          this.displayedApplicationList = this.applicationList;
          return;
        }

        // Filter the list of application
        this.displayedApplicationList = this.displayedApplicationList.filter(
          x => {
            const toSearch = this.search.toLowerCase();
            return x.name.toLowerCase().includes(toSearch);
          }
        );
      }
    }
  }
});
</script>

<style scoped>
.main-application {
  background-color: #e2e2e2 !important;
  position: relative;
}

.limited-size-input {
  max-width: 450px !important;
}

.mentions {
  position: absolute;
  bottom: 2px;
  right: 0;
}

#colored-tile {
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;

  min-height: 640px;

  margin: auto;
  position: absolute;
  background: rgb(0, 36, 47);
  background: -moz-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: -webkit-linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  background: linear-gradient(
    28deg,
    rgba(0, 36, 47, 1) 0%,
    rgba(15, 79, 99, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00242f", endColorstr="#0f4f63", GradientType=1);
}

#form {
  z-index: 10;
}

#background-logo {
  z-index: 1;
  background-size: contain;
  position: absolute;
  margin-top: auto;
  margin-right: auto;
  color: white;
  left: 5%;
  top: 10%;
  opacity: 0.2;
  height: 80%;
  fill: #0e4b5f;
}

.login-container {
  display: block;
  width: 100%;

  /* Positionning */
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.103);
  min-width: 100vw;
  min-height: 100vh;
}

.v-slide-group__next {
  display: none !important;
}

.v-slide-group__prev {
  display: none !important;
}
</style>
