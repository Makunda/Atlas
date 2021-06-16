<template>
  <v-card width="100%">
    <v-card-title
      ><h1 class="text-h4">
        Start to explore the application
      </h1></v-card-title
    >
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container fluid class="d-flex flex-row justify-space-around">
        <v-row>
          <!--   Report Card    -->
          <v-hover v-slot:default="{ hover }">
            <v-card
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              class="ma-2"
              width="344"
            >
              <v-card-text>
                <span class="text-h4 text--primary d-flex flex-row">
                  <v-icon x-large>mdi-file-excel</v-icon>
                  <p
                    :class="hover ? 'white--text' : 'black--text'"
                    class="ml-4 mt-4"
                  >
                    Reports
                  </p>
                </span>
                <p>Extract .xlsx reports from the Neo4j Database</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('reports')">
                  Go to section
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
          <!--   Analysis Card    -->
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              class="ma-2"
              width="344"
            >
              <v-card-text>
                <span class="text-h4 text--primary d-flex flex-row">
                  <v-icon x-large>mdi-file-cad</v-icon>
                  <p
                    class="ml-4 mt-4"
                    :class="hover ? 'white--text' : 'black--text'"
                  >
                    Analysis
                  </p>
                </span>
                <p>
                  Check the analysis and break nodes to extract undiscovered
                  technologies or POI.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('analysis')">
                  Go to section
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>

          <!--   Imaging Card    -->
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              class="ma-2"
              width="344"
            >
              <v-card-text>
                <span class="text-h4 text--primary d-flex flex-row">
                  <v-icon x-large>mdi-file-excel</v-icon>
                  <p
                    class="ml-4 mt-4"
                    :class="hover ? 'white--text' : 'black--text'"
                  >
                    Imaging Tuning
                  </p>
                </span>
                <p>
                  Explore the different transactions in the application, rename
                  levels, etc...
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('tuning')">
                  Go to section
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>

          <!--   Enrichment Card    -->
          <v-hover v-slot:default="{ hover }">
            <v-card
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              class="ma-2"
              width="344"
            >
              <v-card-text>
                <span class="text-h4 text--primary d-flex flex-row">
                  <v-icon x-large>mdi-hexagon-multiple</v-icon>
                  <p
                    class="ml-4 mt-4"
                    :class="hover ? 'white--text' : 'black--text'"
                  >
                    Enrichment
                  </p>
                </span>
                <p>
                  Run automatics agents looking for tags in the application and
                  find interesting areas in the application
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('reports')">
                  Go to section
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CategoriesHelper",
  methods: {
    goTo(section: string) {
      this.$router.replace("/atlas/" + section);
    }
  }
});
</script>

<style scoped></style>
