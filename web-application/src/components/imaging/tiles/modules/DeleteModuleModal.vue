<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Deleting Module '{{
            module && module.name ? module.name : "NO MODULE SELECTED"
          }}'</v-toolbar
        >
        <v-card-text>
          <v-container>
            <v-row class="my-4">
              <p>
                In application :
                {{ application ? application : "NO APPLICATION SELECTED" }}
                <br />
              </p>
            </v-row>
            <v-row class="pb-5">
              <h3>
                You're about to delete the module '{{
                  module && module.name ? module.name : "NO MODULE SELECTED"
                }}'. This action is not reversible. <br />
                Are your sure that you want to delete the module ?
              </h3>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errordestinationModules !== ''">
              <p class="red--text">{{ errordestinationModules }}</p>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errorModify !== ''">
              <p class="red--text">{{ errorModify }}</p>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="closeModal">Cancel</v-btn>
          <v-btn
            color="green"
            text
            @click="deleteModule"
            :loading="loadingModify"
            >Modify</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import ModuleController from "@/api/imaging/ModuleController";

export default Vue.extend({
  name: "DeleteModuleModal",

  props: {
    module: Object,
    dialog: Boolean
  },

  mounted() {
    this.refresh();
  },

  data() {
    return {

      // errors & loading merge
      loadingModify: false,
      errorModify: "",

      // errors & loading levels
      errordestinationModules: "",
      loadingdestinationModules: false
    };
  },

  methods: {
    async refresh() {
      this.errorModify = "";
      this.errordestinationModules = "";
      await this.getDestinationModules();
    },

    querySelections(v) {
      this.items = this.destinationModules.filter(e => {
        return (
          (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        );
      });
    },

    /**
     * Modify a module
     */
    async deleteModule() {
      if (this.module == null) return;

      try {
        this.loadingModify = true;
        await ModuleController.deleteById(this.module._id);
        this.errorModify = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to delete the module`, err);
        this.errorModify = `Failed to delete the module. ${err}`;
      } finally {
        this.loadingModify = false;
      }
    },

    /**
     * Close the modal
     */
    closeModal() {
      this.$emit("close");
    }
  },

});
</script>

<style scoped></style>
