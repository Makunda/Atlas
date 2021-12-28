<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <template>
      <v-card>
        <v-toolbar color="charcoal lighten-2" dark
          >Duplicate {{ getName() }} '{{
            element && element.name ? element.name : "NO ARCHITECTURE SELECTED"
          }}'</v-toolbar
        >
        <v-card-text>
          <v-container>
            <v-row class="mt-6 pb-5">
              <h3>Name of the Duplicate:</h3>
            </v-row>
            <v-row>
              <v-text-field
                v-model="nameDuplicate"
                label="Name new Architecture"
                name
                clearable
              ></v-text-field>
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
            @click="duplicateElement"
            :loading="loadingModify"
            >Modify</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import ArchitectureController from '@/api/controllers/imaging/ArchitectureController';

export default Vue.extend({
  name: 'DuplicateArchitectureModal',

  props: {
    application: String,
    element: Object,
    dialog: Boolean,
  },

  mounted() {
    this.refresh();
  },

  data() {
    return {
      nameDuplicate: '',

      search: null,
      select: null,
      item: [],
      colorPicker: {},

      // errors & loading merge
      loadingModify: false,
      errorModify: '',

      // errors & loading levels
      errordestinationModules: '',
      loadingdestinationModules: false,
    };
  },

  methods: {
    getName() {
      return this.element.type == 'archimodel' ? 'Architecture' : 'Subset';
    },

    async refresh() {
      this.errorModify = '';
      this.errordestinationModules = '';
    },

    /**
     * Modify a module
     */
    async duplicateElement() {
      if (this.element == null) return;
      if (this.nameDuplicate == '') {
        this.errorModify = 'Name cannot be empty';
        return;
      }

      try {
        this.loadingModify = true;
        await ArchitectureController.duplicateArchiModel(
          this.element._id,
          this.nameDuplicate,
        );
        this.errorModify = '';
        this.$emit('close');
      } catch (err) {
        console.error('Failed to duplicate the Architecture element.', err);
        this.errorModify = err;
      } finally {
        this.loadingModify = false;
      }
    },

    /**
     * Close the modal
     */
    closeModal() {
      this.$emit('close');
    },
  },

  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },

    application() {
      this.refresh();
    },

    element() {
      this.editElement = { ...this.element };
      this.refresh();
    },
  },
});
</script>

<style scoped></style>
