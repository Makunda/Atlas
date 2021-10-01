<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Create an unassigned layer in the {{ getName() }} '{{
            element && element.name ? element.name : "NO ARCHITECTURE SELECTED"
          }}'</v-toolbar
        >

        <v-card-text>
          <v-container>
            <v-row class="mt-6 pb-5">
              <p>
                All nodes that are not assigned to a subset will be grouped
                under a layer named 'Unassigned'. You can rename and delete this
                subset later. Are you sure you want to create this 'Unassigned'
                layer?
                <br />
                <br />
                <strong
                  >This operation may take some time if the application is
                  huge.</strong
                ><br />
                <v-icon>mdi-information-outline</v-icon
                ><i class="mt-1 mx-1"
                  >Make sure the architecture agent is running.</i
                >
              </p>
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
            @click="groupUnassigned"
            :loading="loadingModify"
            >Create Layer</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import ArchitectureController from "@/api/imaging/ArchitectureController";
import AddAIPServerModal from "@/components/aip/AddAIPServerModal.vue";

export default Vue.extend({
  name: "CreateUnassignedModal",

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
      nameDuplicate: "",

      search: null,
      select: null,
      item: [],
      colorPicker: {},

      // errors & loading merge
      loadingModify: false,
      errorModify: "",

      // errors & loading levels
      errordestinationModules: "",
      loadingdestinationModules: false,

      // Modal
      dialogAddServer: false
    };
  },

  methods: {
    getName() {
      return this.element.type == "archimodel" ? "Architecture" : "Subset";
    },

    async refresh() {
      this.errorModify = "";
      this.errordestinationModules = "";
    },

    /**
     * Modify a module
     */
    async groupUnassigned() {
      if (this.element == null) return;
      if (this.application == "") {
        this.errorModify = "Application name cannot be empty";
        return;
      }

      try {
        this.loadingModify = true;
        await ArchitectureController.groupUnassigned(
          this.element._id,
          this.application
        );
        this.errorModify = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to create an unassigned layer.`, err);
        this.errorModify = err;
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

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },

    application: function(newVal) {
      this.refresh();
    },

    element: function(newVal) {
      this.editElement = Object.assign({}, this.element);
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
