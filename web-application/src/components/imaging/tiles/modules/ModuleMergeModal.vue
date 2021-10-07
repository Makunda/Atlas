<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Merging Module '{{
            module && module.name ? module.name : "NO MODULE SELECTED"
          }}' into another Module</v-toolbar
        >
        <v-card-text>
          <v-container>
            <v-row class="my-4 mx-2">
              <p>
                In application :
                {{ application ? application : "NO APPLICATION SELECTED" }}
                <br />
                Select a destination module to merge all objects in
                {{
                  module && module.name ? module.name : "NO MODULE SELECTED"
                }}.
              </p>
            </v-row>
            <v-row>
              <v-autocomplete
                v-model="select"
                :loading="loadingdestinationModules"
                :items="item"
                :search-input.sync="search"
                item-text="name"
                cache-items
                return-object
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Select a Module"
              ></v-autocomplete>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="select != null">
              <p>
                You're about to merge all the object from
                <b>{{
                  module && module.name ? module.name : "NO LEVEL SELECTED"
                }}</b>
                into <b>{{ select.name }}</b>
              </p>
            </v-row>
            <v-row
              class="mt-6 mx-2"
              v-if="
                select != null && module != null && module._id == select._id
              "
            >
              It is possible, but are you sure you want to merge a module with
              itself ?
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errordestinationModules !== ''">
              <p class="red--text">{{ errordestinationModules }}</p>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errorMerge !== ''">
              <p class="red--text">{{ errorMerge }}</p>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="closeModal">Cancel</v-btn>
          <v-btn
            color="green"
            text
            @click="mergeModule"
            :loading="loadingMerge"
            :disabled="loadingMerge"
            >Merge</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Module from "@/api/interface/imaging/Module";
import ModuleController from "@/api/controllers/imaging/ModuleController";

export default Vue.extend({
  name: "ModuleMergeModal",

  props: {
    application: String,
    module: Object,
    dialog: Boolean
  },

  mounted() {
    this.refresh();
  },

  data() {
    return {
      sourceModule: {} as Module,
      destinationModules: [] as Module[],

      search: null,
      select: null,
      item: [] as Module[],

      // errors & loading merge
      loadingMerge: false,
      errorMerge: "",

      // errors & loading levels
      errordestinationModules: "",
      loadingdestinationModules: false
    };
  },

  methods: {
    async refresh() {
      this.errorMerge = "";
      this.errordestinationModules = "";
      await this.getDestinationModules();
    },
    /**
     * Get the list of destination levels in the application
     */
    async getDestinationModules() {
      if (this.application == "") return;
      try {
        this.loadingdestinationModules = true;
        this.destinationModules = await ModuleController.getModules(
          this.application
        );
        this.errordestinationModules = "";
        this.item = this.destinationModules;
      } catch (err) {
        this.errordestinationModules = err;
      } finally {
        this.loadingdestinationModules = false;
      }
    },

    querySelections(v) {
      this.items = this.destinationModules.filter(e => {
        return (
          (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        );
      });
    },

    async mergeModule() {
      if (this.application == "") return;
      if (this.select == null) return;
      if (this.module == null) return;

      try {
        this.loadingMerge = true;
        await ModuleController.mergeModules(
          this.application,
          this.module._id,
          this.module._id
        );
        this.errorMerge = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to merge the module`, err);
        this.errorMerge = err;
      } finally {
        this.loadingMerge = false;
      }
    },

    /**
     * Close the modal
     */
    closeModal() {
      this.$emit("close");
    }
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },

    application: function(newVal) {
      this.refresh();
    },

    module: function(newVal) {
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
