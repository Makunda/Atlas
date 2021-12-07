<template>
  <v-dialog v-model="model" max-width="600px" persistent>
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
              :color="choice !== 'custom' ? 'grey' : 'persianGrey'"
              dark
              tile
              x-large
              @click="choice = 'custom'"
            >
              Create a Custom rule
            </v-btn>
            <v-btn
              :class="{ 'button-glow': blink }"
              :color="choice !== 'framework' ? 'grey' : 'persianGrey'"
              dark
              tile
              x-large
              @click="choice = 'framework'"
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
            <v-text-field
              v-if="choice === 'framework'"
              v-model="frameworkArtifact.name"
              :rules="[v => !!v || 'A name is required']"
              label="Name *"
              required
            ></v-text-field>
          </v-row>
          <v-row class="mt-4">
            <v-text-field
              v-model="frameworkArtifact.pattern"
              :rules="[v => !!v || 'A pattern is required']"
              label="Pattern used *"
              required
            ></v-text-field>
          </v-row>
          <v-row class="mt-4">
            <v-checkbox
              v-model="frameworkArtifact.isRegex"
              label="Set pattern as regex"
              required
            ></v-checkbox>
            <span class="subtitle-2">
              <p>
                If not selected, Artemis will search objects with their names
                equals to the pattern.
              </p>
            </span>
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
              v-model="category"
              :items="categoriesFramework"
              :loading="categoriesLoading"
              :search-input.sync="searchCategories"
              auto-select-first
              item-text="name"
              item-value="id"
              label="Select a category"
              outlined
            ></v-autocomplete>
          </v-row>
          <v-row class="mt-5">
            <v-textarea
              v-model="description"
              clear-icon="mdi-close-circle"
              clearable
              label="Description of the framework"
            ></v-textarea>
          </v-row>
          <v-row v-if="error.length !== 0" class="red--text mt-3">
            <v-icon class="button-glow" color="red"
              >mdi-message-alert-outline
            </v-icon>
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
import { Artifact } from "@/api/interface/extensions/artemis/Artifact";
import { CategoryController } from "@/api/controllers/extensions/artemis/CategoryController";
import { Category } from "@/api/interface/ApiCategory.interface";
import { Framework } from "@/api/interface/extensions/artemis/Framework";
import { FrameworkController } from "@/api/controllers/extensions/artemis/FrameworkController";

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
      }

      this.authorizedType = this.frameworkArtifact.objectTypes;
      this.frameworkArtifact.pattern = this.frameworkArtifact.fullName + ".*";
      this.frameworkArtifact.isRegex = true;
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
    frameworkArtifact: {} as Artifact,
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
        pattern: this.frameworkArtifact.pattern,
        isRegex: this.frameworkArtifact.isRegex,
        internalType: this.frameworkArtifact.objectTypes,
        location: "Custom"
      } as Framework;

      try {
        await FrameworkController.addFramework(framework);
        this.$emit("close");
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
