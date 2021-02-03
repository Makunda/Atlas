<template>
  <v-card width="100%">
    <v-card-title class="text-h">
      Custom categories creator
      <v-spacer></v-spacer>
      <v-btn icon color="green" @click="refresh()">
        <v-icon>mdi-cached</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle class="text-subtitle-1 ml-2 mt-2"
      >Create in this section custom categories. The categories will match and
      regroup objects in your level wiews to make the investigation easier.
      <br />
      You can configure the groups with different Regexes, and frameworks names
      and category.
      <a href="https://github.com/CAST-Extend/com.castsoftware.uc.atlas">
        https://github.com/CAST-Extend/com.castsoftware.uc.atlas
      </a>
    </v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
          <v-spacer></v-spacer>
          <h4 class="text-h5">Append a new category </h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-treeview
              v-model="tree"
              :items="items"
              activatable
              return-object	
              item-key="id"
            >
              <template v-slot:prepend="{ item, open }">
                <v-icon large v-if="!item.file">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <v-icon large v-else>
                  {{ files[item.file] }}
                </v-icon>
              </template>
              <template slot="label" slot-scope="{ item }">
                  <div class="d-flex flex-row">
                    <h4 class="text-h5 mx-4">{{ item.name }} </h4>  
                  <v-icon color="primary" dark @click="focusedRegexNode = Object.assign({}, item)">
          mdi-wrench
        </v-icon>
                  </div>
                </template>
            </v-treeview>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title class="text-h4">
                Review the Regex Rules
                <v-spacer></v-spacer>
                <v-btn icon :color="!editMode ? 'green' : 'red'" @click="editMode = !editMode">
        <v-icon>mdi-lead-pencil</v-icon>
      </v-btn>
              </v-card-title>
              <v-card-text>
                <v-container class="pl-2">
                  <v-row class="mx-1 mb-5"
                    ><h4 class="text-h6">Name of the Category</h4></v-row
                  >
                  <v-row class="mx-1">
                    <v-text-field
                      v-model="focusedRegexNode.name"
                      label="Name"
                      solo
                      :readonly="!editMode"
                    ></v-text-field>
                  </v-row>
                  <v-row class="mx-1 mb-5"
                    ><h4 class="text-h6">Name of the framework</h4></v-row
                  >
                  <v-row  class="mx-1">
                    <v-text-field
                      v-model="focusedRegexNode.framework"
                      label="Framework"
                      solo
                      :readonly="!editMode"
                    ></v-text-field>
                  </v-row>

                  <v-row class="mx-1 mb-5"
                    ><h4 class="text-h6">List of Regexes</h4></v-row
                  >
                  <v-row class="mb-1 ml-2"
                    ><h4 >Add a new regex rule</h4></v-row
                  >
                  <v-row>
                    <v-col cols="10"
                      ><v-text-field
                        v-model="currentRegexInput"
                        solo
                        label="Append outer"
                        :disabled="!editMode"
                      ></v-text-field
                    ></v-col>
                    <v-col class="d-flex flex-row" cols="2">
                      <v-btn
                      width="100%"
                        color="primary"
                        dark
                        large
                        @click="appendToRegexList(focusedRegexNode)"
                      >
                        ADD 
                        <v-icon
                          dark
                          right
                        >
                          mdi-plus-box
                        </v-icon>
                      </v-btn>

                    </v-col>
                  </v-row>
                  <v-row v-if="focusedRegexNode.regexes.length != 0" class='pl-3 d-flex flex-column ' >
                    <v-text-field
                    v-for="(regex, i) in focusedRegexNode.regexes" v-bind:key="i"
                      :value="regex"
                      solo
                      label="Append"
                      readonly
    
                      append-outer-icon="mdi-close"
                      @click:append-outer="removeFromList(focusedRegexNode, regex)"
                    ></v-text-field>
                  </v-row>
                  <v-row class="mx-1 mb-5"
                    ><h4 class="text-h6">List of Internal types</h4></v-row
                  >
                  <v-row class="mx-1">
                    <v-combobox
                      v-model="focusedRegexNode.internalTypes"
                      :items="internalTypes"
                      label="Iternal types"
                      multiple
                      chips
                    ></v-combobox>
                  </v-row>
                  <v-row class="mx-1 mb-5"
                    ><h4 class="text-h6">Category</h4></v-row
                  >
                  <v-row class="mx-1">
                    <v-select
                      v-model="focusedRegexNode.category"
                      :items="categories"
                      label="Iternal types"
                      chips
                    ></v-select>
                  </v-row>
                  <v-divider class="my-5"></v-divider>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-3" color="primary" disabled >
                      Test the Regex Rule
                    </v-btn>
                    <v-btn color="primary" >
                      Update the Regex Rule
                    </v-btn>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ApiRegexNode } from "@/api/interface/ApiRegexNode.interface";
import { FrameworkController } from "@/api/artemis/framework.controller";

export default Vue.extend({
  name: "CustomsCreator",

  data: () => ({
    initiallyOpen: ["public"],

    // Regegex node
    focusedRegexNode: {
      regexes: ["test 1", "Test 3"]
    } as ApiRegexNode,
    currentRegexInput: "",
    editMode: false,

    internalTypes : [],
    categories: [],

    tree: [],
    items: [
      {
        id: 1,
        name: ".git",
        regexes: ["test?", "test"],
        internalTypes: ["Cobol utilities", "Caramba"],
        framework: "Spring",
        category: "Java spring",
        parentId: -1,
      },
      {
        id: 2,
        name: ".git",
        regexes: ["test?", "test"],
        internalTypes: ["Cobol utilities", "Caramba"],
        framework: "Spring",
        category: "Java spring 1",
        parentId: -1,
      },
      {
        id: 3,
        name: ".git",
        regexes: ["test?", "test"],
        internalTypes: ["Cobol utilities", "Caramba"],
        framework: "Spring",
        category: "Java spring 2",
        parentId: -1,
        children: [
          {
            id: 4,
            name: ".git",
            regexes: ["test?", "test"],
            internalTypes: ["Cobol utilities", "Caramba"],
            framework: "Spring",
            category: "Java spring",
            parentId: -1,
          },
          {
            id: 5,
            name: ".git",
            regexes: ["test?", "test"],
            internalTypes: ["Cobol utilities", "Caramba"],
            framework: "Spring",
            category: "Java spring",
            parentId: -1,
          },
        ],
      },
    ] as ApiRegexNode[],
  }),

  methods: {
    appendToRegexList(regexNode:ApiRegexNode) {
      if (this.currentRegexInput != "" ) {
        regexNode.regexes.push(this.currentRegexInput);
      }
      this.currentRegexInput == "";

      this.focusedRegexNode = regexNode;
    },

    removeFromList(regexNode:ApiRegexNode, item: string) {
      const index = regexNode.regexes.indexOf(item);
      if (index != -1) {
        regexNode.regexes.splice(index, 1);
        console.log("List of regex ", regexNode.regexes)
      }
      this.focusedRegexNode = regexNode;
    },

    getInternalTypes() {
      FrameworkController.getInternalTypes()
        .then((res: string[]) => {
          this.internalTypes = res;
        })
        .catch(err => {
          console.error("Failed to retrieve the list of internal types", err);
        });
    },

    getCategories() {
      this.categories = ["IBM Utilities", "IBM Internal"]
    }
  },

  mounted() {
    this.getInternalTypes();
    this.getCategories();
  }
});
</script>
