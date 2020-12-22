<template>
  <v-row class="ml-15">
    <!-- Introduction Section -->
    <v-row class="d-flex flex-column">
      <h2 class="text-h2 my-6">
        Tag creator studio
      </h2>
      <p class="text-body-1">
        In this creator studio you'll be able to create your own Demeter
        recommendations ,in order to enrich your configuration, and display more
        informations on CAST Imaging System.<br />
        <br />
        For more informations on tags and documents, please refer to the
        official <a href="#">CAST Imaging documentation</a>.
        <br />
      </p>
    </v-row>

    <!-- Creation assistant section -->
    <v-row class="mx-8">
      <v-col>
        <!-- Use case selection -->
        <v-card class="mx-auto">
          <v-card-text>
            <p class="display-1 text--primary">
              Use case
            </p>
            <div class="text--primary">
              Select a use case related to the recommendation you want to
              create.<br>The tag will be created under the selected use case.
              {{tree}}
            </div>
          </v-card-text>

          <v-card-text class="d-flex justify-center" v-if="!usecases || usecases.length == 0">
            <v-progress-circular
              class="mx-auto my-8"
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </v-card-text>

          <v-card-text v-if="usecases && usecases.length != 0">
            <v-treeview
              v-model="tree"
              selection-type="independent"
              :multiple-active="false"
              :items="usecases"
              selected-color="indigo"
              return-object
              expand-icon="mdi-chevron-down"
              on-icon="mdi-bookmark"
              off-icon="mdi-bookmark-outline"
              indeterminate-icon="mdi-bookmark-minus"
            >
              <template slot="label" slot-scope="{ item }" >
                <p v-if="item.id == selectedUseCaseId" color="blue darken-2">{{ item.name }}</p>
                <p v-if="item.id != selectedUseCaseId" :click="updateSelectedItem(item.id)">{{ item.name }}</p>
              </template>
            </v-treeview>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="indigo accent-4">
              Add a new use case
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Tag / Document assistant  -->
      <v-col>
        <v-card class="mx-auto">
          <v-card-text>
            <p class="display-1 text--primary">
              Recommendation
            </p>
            <div class="text--primary">
              Select the type of the recommendation to create
            </div>

            <v-select :items="items" v-model="recoType" label="Type"></v-select>

            <!-- Forms -->
            <!-- Tag Form -->
            <v-form
              v-if="recoType == 'Tag'"
              ref="form"
              lazy-validation
            >
              <v-text-field
                outlined
                v-model="tagName"
                counter="25"
                :rules="[v => !!v || 'Tag name is required']"
                label="Tag to apply"
                required
              ></v-text-field>
              <v-textarea
                outlined
                name="associatedDescription"
                v-model="associatedDescription"
                label="Associated description"
                placeholder="Type here the descirption assoicated to your tag..."
              ></v-textarea>
              <v-textarea
                outlined
                name="associatedRequest"
                v-model="associatedRequest"
                label="Associated Request"
                :rules="[v => !!v || 'Associated request is required']"
                placeholder="Type here your neo4j Cypher request..."
              ></v-textarea>
              <v-checkbox
                v-model="associatedActivation"
                label="Set tag as active"
              ></v-checkbox>
            </v-form>

            <!-- Document Form -->
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="ma-2"
              :loading="loadingValidity"
              :disabled="loadingValidity"
              color="success"
              @click="loader = 'loading2'"
            >
              Test validity
              <template v-slot:loader>
                <span>Loading...</span>
              </template>
            </v-btn>
            <v-btn
              class="ma-2"
              :loading="loadingCreation"
              :disabled="loadingCreation || !testPassed"
              color="info"
              @click="loader = 'loading4'"
            >
              Create recommendation
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts">
import { UseCaseController, UseCaseResult } from "@/api/applications/UseCaseController";
import { Component, Vue } from "vue-property-decorator";
import { use } from "vue/types/umd";

export default Vue.extend({
  name: "TagStudio",

  created() {
    this.loadUseCase();
  },

  data: () => ({
    // Use case Tree 
    usecases: [] as UseCaseResult[],
    tree: [],

    // Loaders
    loadingValidity: false,
    loadingCreation: false,

    selectedUseCaseId: -1 as number,
    testPassed: false,
    items: ["Tag", "Document"] as string[],

    // Form properties
    recoType: "Tag" as string,
    tagName: "" as string,
    associatedDescription: "" as string,
    associatedRequest: "" as string,
    associatedActivation: false as boolean,
    recoForm: {}
  }),

  methods: {

    loadUseCase() {
      UseCaseController.getUseCaseTree().then((useCases:UseCaseResult[]) => {
        this.usecases = useCases;
      }).catch((err) => {
        console.error("Error trying to retrieve use cases tree:", err);
      });
    },

    updateSelectedItem(val:number) {
      this.selectedUseCaseId = val;
    },

    createRecommendation() {
      this.loadingCreation = true;
    },

    checkValidity() {
      this.loadingValidity = true;
    }
  }
});
</script>
