<template>
  <v-dialog v-model="model" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Flag as a framework</span>
      </v-card-title>
      <v-card-subtitle class="my-2">
        You're about to extract a framework. Please choose between a extraction
        to a custom framework rule for this application / client or if you want
        to flag it as a framework for all the future discovery.
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
              >mdi-message-alert-outline</v-icon
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

<script lang="ts">
import Vue from "vue";
import { IArtifact } from "../../../../atlas-api/src/interfaces/artemis/artifact.interface";
import { CategoryController } from "@/api/artemis/category.controller";
import { Category } from "@/api/interface/ApiCategory.interface";
import { Framework } from "@/api/interface/artemis/framework.interface";
import { FrameworkController } from "@/api/artemis/framework.controller";

export default Vue.extend({
  name: "FrameworkDispatch",
  props: {
    model: Boolean,
    artifact: Object
  },

  watch: {
    artifact: function() {
      this.frameworkArtifact = this.artifact;

      if (
        this.frameworkArtifact.children &&
        this.frameworkArtifact.children > 0
      ) {
        this.frameworkArtifact.fullName +=
          this.frameworkArtifact.delimiter + "*";
      } else {
        this.frameworkArtifact.fullName += "*";
      }
      this.authorizedType = this.frameworkArtifact.objectTypes;
    },

    choice: function() {
      this.error = "";
      this.blink = false;

      this.getCategories();
    }
  },

  data: () => ({
    blink: false,
    error: "",

    choice: "",
    frameworkArtifact: {} as IArtifact,
    authorizedType: [],

    category: null,
    description: "",

    searchCategories: null,
    categoriesFramework: [],
    categoriesLoading: false
  }),

  methods: {
    validate() {
      if (this.choice == "") {
        this.error = "You must select a type of extraction for the framework.";
        this.blink = true;
      }

      if (this.choice == "framework") {
        this.sendToFramework();
      }

      if (this.choice == "custom") {
        this.sendToCustom();
      }
    },

    /**
     * Return the list of the Categories for 'Classic' Framework
     */
    async getCategories(): Promise<Category[] | void> {
      if (this.choice == "framework") {
        this.categoriesLoading = true;
        this.categoriesFramework = await CategoryController.getAllNode();
        this.categoriesLoading = false;
      }
    },

    /**
     * Send the created framework to the Framework controller
     */
    async sendToFramework() {
      const framework = {
        name: this.frameworkArtifact.name,
        description: this.description,
        type: "Framework",
        category: this.category,
        internalType: this.frameworkArtifact.objectTypes,
        location: "Custom"
      } as Framework;

      try {
        await FrameworkController.addFramework(framework);
        this.$emit('close');
      } catch (err) {
        console.error("Failed to add a Framework.", err);
        this.error = "Failed to add the framework. Reason : " + err;
      }
    },

    async sendToCustom() {
      console.log("Send to custom");
    }
  }
});
</script>

<style>
@keyframes glowing {
  0% {
    box-shadow: 0 0 -10px darkred;
  }
  40% {
    box-shadow: 0 0 20px darkred;
  }
  60% {
    box-shadow: 0 0 20px darkred;
  }
  100% {
    box-shadow: 0 0 -10px darkred;
  }
}

.button-glow {
  animation: glowing 2000ms infinite;
}
</style>
