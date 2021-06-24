<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Editing Module '{{
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
                Select a destination module to merge all objects in
                {{
                  module && module.name ? module.name : "NO MODULE SELECTED"
                }}.
              </p>
            </v-row>
            <v-row class="pb-5">
              <h3>Name of the module:</h3>
            </v-row>
            <v-row>
              <v-text-field
                v-model="editModule.name"
                label="Outlined"
                name
                clearable
              ></v-text-field>
            </v-row>
            <v-row>
              <v-row>
                <v-col cols="12">
                  <h3>Change the color :</h3>
                  <v-color-picker
                    class="ma-2"
                    hide-canvas
                    v-model="colorPicker"
                    @update:color="
                      editModule.color =
                        colorPicker && colorPicker.rgba
                          ? `rgb(${colorPicker.rgba.r},${colorPicker.rgba.g},${colorPicker.rgba.b})`
                          : 'rgb(0,0,0)'
                    "
                  ></v-color-picker>
                  <p>New Color: {{ editModule.color }}</p>
                </v-col>
              </v-row>
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
            @click="modifyModule"
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
import Module from "@/api/interface/imaging/Module";
import ModuleController from "@/api/imaging/ModuleController";

export default Vue.extend({
  name: "ModifyModuleModal",

  props: {
    application: String,
    module: Object,
    dialog: Boolean
  },

  mounted() {
    this.editModule = Object.assign({}, this.module);
    this.refresh();
  },

  data() {
    return {
      editModule: {} as Module,
      destinationModules: [] as Module[],

      search: null,
      select: null,
      item: [] as Module[],
      colorPicker: {},

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
    async modifyModule() {
      if (this.application == "") return;
      if (this.module == null) return;
      if (this.editModule == null) return;

      try {
        this.loadingModify = true;
        await ModuleController.updateById(this.module._id, this.editModule);
        this.errorModify = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to modify the module`, err);
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

    module: function(newVal) {
      this.editModule = Object.assign({}, this.module);
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
