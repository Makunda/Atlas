<template>
  <v-card width="100%">
    <v-card-title
      ><h1 class="text-h4">
        Administration section
      </h1></v-card-title
    >
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-container fluid class="d-flex flex-row justify-space-around">
        <v-row>
          <!--   Framework Card    -->
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="ma-2"
              width="344"
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              @click.stop="goTo('frameworks')"
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

          <!--   Automation Card    -->
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              @click.stop="goTo('automation')"
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
                    Automation
                  </p>
                </span>
                <p>
                  Enable or disable the agent performing automatic actions on
                  your appplication
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('automation')">
                  Go to section
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>

          <!--   Parameters Card    -->
          <v-hover v-slot:default="{ hover }">
            <v-card
              :dark="hover"
              :color="hover ? 'persianGrey' : 'white'"
              class="ma-2"
              width="344"
              @click.stop="goTo('parameters')"
            >
              <v-card-text>
                <span class="text-h4 text--primary d-flex flex-row">
                  <v-icon x-large>mdi-cog</v-icon>
                  <p
                    class="ml-4 mt-4"
                    :class="hover ? 'white--text' : 'black--text'"
                  >
                    Parameters
                  </p>
                </span>
                <p>
                  Adjust the parameters of the server, and configure the
                  extensions
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="goTo('parameters')">
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
  name: "ServerCategoriesHelper",
  methods: {
    goTo(section: string) {
      this.$router.replace("/administration/" + section);
    }
  }
});
</script>

<style scoped></style>
