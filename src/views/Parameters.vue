<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
      class="mt-5"
    >
      <v-card ref="form">
        <v-card-text>
          <v-card-title>Demeter configuration</v-card-title>

          <v-text-field
            ref="refreshRate"
            v-model="refreshRate"
            label="Refresh rate of the daemon ( in Miliseconds ) "
            placeholder="Configuration_1"
            required
          ></v-text-field>

          <div class="my-4 subtitle-1">
            Configuration
          </div>

          <v-text-field
            ref="configurationName"
            v-model="configurationName"
            :rules="rules()"
            label="Name of the configuration"
            placeholder="Configuration_1"
            required
          ></v-text-field>

          <v-divider class="mx-2"></v-divider>

          <div class="my-4 subtitle-1">
            Neo4j Database
          </div>

          <v-text-field
            ref="neo4jUri"
            v-model="neo4jUri"
            label="URI of the Neo4j bolt interface"
            placeholder="http://localhost:7687/"
            required
          ></v-text-field>
          <v-text-field
            ref="neo4jUser"
            v-model="neo4jUser"
            label="Database user"
            placeholder="Neo4j user"
            required
          ></v-text-field>
          <v-text-field
            v-model="neo4jPassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Database password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default Vue.extend({ 
    name: "Parameters",

    data: () => ({
      show1: false,
      configurationName: "" as string,
      refreshRate: 500 as number,

      
    }),

    methods: {
      rules () {
        const rulesTable = []

        const maxRule = (v:any) => (v || '').length <= 30 || `A maximum of ${30} characters is allowed`
        rulesTable.push(maxRule)
        
        const spaceRule = (v:any) => (v || '').indexOf(' ') < 0 || 'No spaces are allowed'
        rulesTable.push(spaceRule)

        const forbidden =  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
        const specialChar = (v:any) => !forbidden.test((v || ''))|| 'No special caracters are allowed'
        rulesTable.push(specialChar)

        return rulesTable
      }
    }
});
</script>
