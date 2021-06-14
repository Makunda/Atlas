<!-- Login modal -->
<template>
  <v-container fluid class="pa-10">
    <v-row >
      <v-card width="100%">
        <v-card-title
          ><h1 class="text-h4 mb-4">
            Welcome back Consultant #{{ consultantId }}, start to work on
            {{ application }}
          </h1></v-card-title
        >
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col md="4">
                <v-row style="width: 100%">
                  <h3 class="mx-4 mb-6">
                    Quick application overview :
                  </h3>
                </v-row>
                <v-row class="mx-4 w-100" style="width: 100%">
                  <v-col cols="12" md="6">Number of levels: </v-col>
                  <v-col cols="12" md="6"
                    ><strong>{{ (insights && insights.levels5 != null) ? insights.levels5.length : 0 }}</strong></v-col
                  >
                </v-row>
                <v-row class="mx-4" style="width: 100%">
                  <v-col cols="12" md="6">Number of modules: </v-col>
                  <v-col cols="12" md="6"
                    ><strong>{{ (insights && insights.modules != null) ? insights.modules.length : 0 }}</strong></v-col
                  >
                </v-row>
                <v-row class="mx-4" style="width: 100%">
                  <v-col cols="12" md="6">Number of architectures: </v-col>
                  <v-col cols="12" md="6"
                    ><strong>{{
                      (insights && insights.architectures != null) ? insights.architectures.length : 0
                    }}</strong></v-col
                  >
                </v-row>
              </v-col>
              <v-col md="4">
                <v-row>
                  <h3 class="mx-4 mb-6">
                    Technological Stack:
                  </h3>
                </v-row>
                <v-row>
                  <v-chip-group
                      active-class="primary--text"
                      column
                  >
                    <v-chip
                        v-for="technology in technologies"
                        :key="technology"
                    >
                      {{ technology }}
                    </v-chip>
                  </v-chip-group>
                </v-row>
              </v-col>
              <!--Recommendations -->
              <v-col md="4">
                <v-row>
                  <h3 class="mx-4 mb-6">
                    Statistics:
                  </h3>
                  <v-spacer></v-spacer>
                  <StatisticsHelper></StatisticsHelper>
                </v-row>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </v-row>
    <v-row class="mt-10">
      <ActionsTile></ActionsTile>
    </v-row>
    <v-row class="mt-10">
      <v-card  width="100%">
        <v-card-title><v-icon class="mr-2" large>mdi-robot-industrial</v-icon><h1 class="text-h4">Automation</h1> </v-card-title>
        <v-card-subtitle>Check the status of the different automation mechanisms in the application </v-card-subtitle>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <TinyAgent class="mx-2" type="level" color="#52BE80"></TinyAgent>
              <TinyAgent class="mx-2" type="module" color="#039BE5"></TinyAgent>
              <TinyAgent class="mx-2" type="architecture" color="persianGrey"></TinyAgent>
              <TinyAgent class="mx-2" type="framework" color="#26C6DA"></TinyAgent>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="deep-purple lighten-2"
              text
              @click="goTo('automation')"
          >
            Go to Automation section
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row class="mt-10">
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
                    <v-btn text  @click="goTo('reports')">
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

              <!--   Framework Card    -->
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="ma-2"
                  width="344"
                  :dark="hover"
                  :color="hover ? 'persianGrey' : 'white'"
                >
                  <v-card-text>
                    <span class="text-h4 text--primary d-flex flex-row">
                      <v-icon x-large>mdi-file-excel</v-icon>
                      <p
                        class="ml-4 mt-4"
                        :class="hover ? 'white--text' : 'black--text'"
                      >
                        Frameworks
                      </p>
                    </span>
                    <p>
                      Extract Frameworks automatically using web & repository
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="goTo('frameworks')">
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
                      Explore the different transactions in the application,
                      rename levels, etc...
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
                      Run automatics agents looking for tags in the application
                      and find interesting areas in the application
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { ApplicationController } from "@/api/applications/application.controller";
import { IApplicationInsights } from "@/api/interface/imaging/Application.interface";
import TinyAgent from "../components/agents/TinyAgent.vue";
import ActionsTile from "@/components/actions/ActionsTile.vue";
import StatisticsHelper from "@/components/screens/statistics/tiles/StatisticsHelper.vue"

export default Vue.extend({
  name: "Home",
  components: {
    TinyAgent,
    ActionsTile,
    StatisticsHelper
  },

  computed: {
    getApplicationName() {
      return this.$store.state.applicationName;
    }
  },

  data: () => ({
    switchInternalUse: false,
    loadingCandidate: false,
    insights: {},
    technologies: [] as string[],

    // Default parameters
    application: "",
    consultantId: Math.floor(Math.random() * 1000)
  }),

  mounted() {
    this.application = this.$store.state.applicationName;
    this.getApplicationInsights();
    this.getApplicationTechnologies();
  },

  methods: {
    async getApplicationTechnologies() {
      if(this.application == "") return;
      this.technologies = await ApplicationController.getTechnologies(
        this.application
      );
    },

    goTo(section:string) {
      this.$router.replace("/atlas/" + section);
    },

    getApplicationInsights() {
      if(this.application == "") return;
      this.loadingCandidate = true;
      ApplicationController.getApplicationInsights(this.application)
        .then((res: IApplicationInsights) => {
          this.insights = res;
        })
        .catch(err => {
          console.error("Failed to get the insights of the application", err);
        })
        .finally(() => {
          this.loadingCandidate = false;
        });
    }
  },

  watch: {
    getApplicationName(newApp) {
      this.application = newApp;
      this.getApplicationInsights();
      this.getApplicationTechnologies();
    }
  }
});
</script>

<style></style>
