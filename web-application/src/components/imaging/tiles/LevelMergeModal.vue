<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Merging level '{{
            level && level.name ? level.name : "NO LEVEL SELECTED"
          }}' into another Level</v-toolbar
        >
        <v-card-text>
          <v-container>
            <v-row class="my-4 mx-2">
              <p>
                In application :
                {{ application ? application : "NO APPLICATION SELECTED" }}
                <br />
                Select a destination level 5 to merge all objects in
                {{ level && level.name ? level.name : "NO LEVEL SELECTED" }}.
              </p>
            </v-row>
            <v-row>
              <v-autocomplete
                v-model="select"
                :loading="loadingDestinationLevels"
                :items="item"
                :search-input.sync="search"
                item-text="name"
                cache-items
                return-object
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Select a Level 5"
              ></v-autocomplete>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="select != null">
              <p>
                You're about to merge all the object from
                <b>{{
                  level && level.name ? level.name : "NO LEVEL SELECTED"
                }}</b>
                into <b>{{ select.name }}</b>
              </p>
            </v-row>
            <v-row class="mt-6 mx-2" v-if="errorDestinationLevels !== ''">
              <p class="red--text">{{ errorDestinationLevels }}</p>
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
            @click="mergeLevel"
            :loading="loadingMerge"
            :disabled="select == null"
            >Merge</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import LevelController from "@/api/imaging/Level.controller";
import ILevel from "@/api/interface/imaging/Level.interface";

export default Vue.extend({
  name: "LevelMergeModal",

  props: {
    application: String,
    level: Object,
    dialog: Boolean
  },

  mounted() {
    this.refresh()
  },

  data() {
    return {
      sourceLevel: {} as ILevel,
      destinationLevels: [] as ILevel[],

      search: null,
      select: null,
      item: [] as ILevel[],

      // errors & loading merge
      loadingMerge: false,
      errorMerge: "",

      // errors & loading levels
      errorDestinationLevels: "",
      loadingDestinationLevels: false
    };
  },

  methods: {

    async refresh() {
      this.errorMerge = "";
      this.errorDestinationLevels = "";
      await this.getDestinationLevel5();
    },
    /**
     * Get the list of destination levels in the application
     */
    async getDestinationLevel5() {
      if(this.application == "") return;
      try {
        this.loadingDestinationLevels = true;
        this.destinationLevels = await LevelController.findLevelByDepth(
          this.application,
          5
        );
        this.errorDestinationLevels = "";
        this.item = this.destinationLevels;
      } catch (err) {
        this.errorDestinationLevels = err;
      } finally {
        this.loadingDestinationLevels = false;
      }
    },

    querySelections(v) {
      this.items = this.destinationLevels.filter(e => {
        return (
          (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        );
      });
    },

    async mergeLevel() {
      if (this.application == "") return;
      if (this.select == null) return;
      if (this.level == null) return;

      try {
        this.loadingMerge = true;
        await LevelController.mergeLevel(
          this.application,
          this.level._id,
          this.select._id
        );
        this.errorMerge = "";
        this.$emit("close");
      } catch (err) {
        console.error(`Failed to merge the level`, err);
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

    application : function(newVal) {
      this.refresh();
    },

    level : function(newVal) {
      this.refresh();
    }
  }
});
</script>

<style scoped></style>
