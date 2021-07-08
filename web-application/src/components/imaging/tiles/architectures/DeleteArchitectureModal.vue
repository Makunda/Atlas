<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Deleting {{ getSelectedName(element) }} '{{
            element && element.name ? element.name : "NO ELEMENT SELECTED"
          }}'</v-toolbar
        >
        <v-card-text>
          <v-container>
            <v-row class="mt-4 pb-5">
              <h3>
                You're about to delete the {{ getSelectedName(element) }} '{{
                  element && element.name
                    ? element.name
                    : "NO ELEMENT SELECTED"
                }}'. This action is not reversible. <br />
                Are your sure that you want to delete the
                {{ getSelectedName(element) }} ?
              </h3>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errorElementDelete !== ''">
              <p class="red--text">{{ errorElementDelete }}</p>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errorModify !== ''">
              <p class="red--text">{{ errorModify }}</p>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end">
          <v-btn color="green" text @click="closeModal">Cancel</v-btn>
          <v-btn
            color="red"
            text
            @click="deleteElement"
            :loading="loadingModify"
            >Delete</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import ArchitectureController from "@/api/imaging/ArchitectureController";

export default Vue.extend({
  name: "DeleteArchitectureModal",

  props: {
    application: String,
    element: Object,
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
      errorElementDelete: "",
      loadingdestinationModules: false
    };
  },

  methods: {
    async refresh() {
      this.errorModify = "";
      this.errorElementDelete = "";
    },

    querySelections(v) {
      this.items = this.destinationModules.filter(e => {
        return (
          (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        );
      });
    },

    getSelectedName(selected) {
      return selected.type == "archimodel" ? "Architecture" : "Subset";
    },

    /**
     * Modify a module
     */
    async deleteElement() {
      if (this.element == null) return;

      try {
        this.loadingModify = true;

        await ArchitectureController.deleteArchitectureElement(
          this.application,
          this.element._id,
          this.element.type
        );
        this.errorModify = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to delete the element`, err);
        this.errorModify = `Failed to delete the element. ${err}`;
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
  }
});
</script>

<style scoped></style>
