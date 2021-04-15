<template>
  <v-card>
    <v-card-title>
      Global parameters
    </v-card-title>
    <v-card-subtitle>
      Modify the parameters of the Atlas platform
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <!--    Path to imaging on the system       -->
          <v-card width="100%">
            <v-card-title class="text-h6"
              >Path to Imaging Installation folder
            </v-card-title>
            <v-card-text>
              <v-container class="pa-3">
                <v-row
                  ><p class="text-subtitle-1 pt-3">
                    Auto detect Imaging installation path :
                  </p>
                  <v-spacer></v-spacer
                  ><v-btn class="ma-2" color="persianGrey" dark>
                    Auto Detect
                  </v-btn>
                </v-row>

                <v-row class="mt-7">
                  <p class="text-decoration-underline text-subtitle-1">
                    Manual input of the Imaging path :
                  </p></v-row
                >
                <v-row px-3>
                  <v-text-field
                    label="Main input"
                    :rules="rules"
                    hide-details="auto"
                  ></v-text-field>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>

        <v-row class="mt-8">
          <!--    Path to imaging on the system       -->
          <v-card width="100%">
            <v-card-title class="text-h6"
              >Status of the extensions</v-card-title
            >
            <v-card-text>
              <v-row> </v-row>
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Properties, Credentials, Configuration } from "@/Configuration";
import { Neo4JAccessLayer } from "@/api/Neo4jAccessLayer";

export default Vue.extend({
  name: "GlobalParameters",

  computed: {},

  data: () => ({}),

  methods: {}
});
</script>
