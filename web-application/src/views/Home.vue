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
                <v-row>
                  <StatisticsColumn></StatisticsColumn>
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
      <CategoriesHelper></CategoriesHelper>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { ApplicationController } from "@/api/applications/application.controller";
import { IApplicationInsights } from "@/api/interface/imaging/Application.interface";
import ActionsTile from "@/components/actions/ActionsTile.vue";
import StatisticsHelper from "@/components/screens/statistics/tiles/StatisticsHelper.vue"
import StatisticsColumn from "@/components/screens/statistics/StatisticsColumn.vue";
import CategoriesHelper from "@/components/navigation/CategoriesHelper.vue";

export default Vue.extend({
  name: "Home",
  components: {
    ActionsTile,
    StatisticsHelper,
    StatisticsColumn,
    CategoriesHelper
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
