<template>
  <v-dialog v-model="model" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Extract selection to framework</span>
      </v-card-title>
      <v-card-subtitle class="my-2">
        You're about to extract multiple groups. You can choose to do bulk
        insert them in the database, they'll be shared and re-used.
      </v-card-subtitle>
      <v-card-text>
        <v-container>
          <v-row class="justify-space-around">
            <v-btn
              :class="{ 'button-glow': blink }"
              x-large
              tile
              @click="choice = 'custom'"
              :color="choice !== 'custom' ? 'grey' : 'persianGrey'"
              dark
            >
              Create a Custom rule
            </v-btn>
            <v-btn
              :class="{ 'button-glow': blink }"
              x-large
              tile
              @click="choice = 'framework'"
              :color="choice !== 'framework' ? 'grey' : 'persianGrey'"
              dark
            >
              Flag as a Framework
            </v-btn>
          </v-row>
          <v-row class="mt-8">
            <v-text-field
              v-if="choice === 'custom'"
              v-model="frameworkArtifact.fullName"
              :rules="[v => !!v || 'A name is required']"
              label="Name *"
              required
            ></v-text-field>
          </v-row>
          <v-row class="mt-4">
            <v-text-field
              v-model="frameworkArtifact.name"
              :rules="[v => !!v || 'A pattern is required']"
              label="Pattern used *"
              required
            ></v-text-field>
          </v-row>
          <v-row class="mt-5">
            <v-select
              v-model="frameworkArtifact.objectTypes"
              :items="authorizedType"
              chips
              label="Select the object types *"
              multiple
              outlined
            ></v-select>
          </v-row>
          <v-row>
            <v-autocomplete
              v-if="choice === 'framework'"
              label="Select a category"
              v-model="category"
              :loading="categoriesLoading"
              :items="categoriesFramework"
              item-value="id"
              item-text="name"
              :search-input.sync="searchCategories"
              outlined
              auto-select-first
            ></v-autocomplete>
          </v-row>
          <v-row class="mt-5">
            <v-textarea
              v-model="description"
              clearable
              clear-icon="mdi-close-circle"
              label="Description of the framework"
            ></v-textarea>
          </v-row>
          <v-row v-if="error.length !== 0" class="red--text mt-3">
            <v-icon color="red" class="button-glow"
              >mdi-message-alert-outline<//hv-icon
            >
            {{ error }}
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="validate()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default Vue.extend({
  name: 'FrameworkDispatch',
  props: {
    model: Boolean,
    artifacts: Object,
  },

  watch: {
    artifacts() {
      this.frameworkArtifact = this.artifact;
    },

    data: () => ({
      error: '',
    }),

    methods: {
      validate() {
        console.log('The selection was validated');
      },
    },
  },
});
</script>

<style scoped></style>
