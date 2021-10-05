<template>
  <v-dialog :value="dialog" width="1200">
    <v-card>
      <v-card-title class="text-h5 charcoal white--text">
        <span class="font-weight-light pr-2">Run extension: </span> {{ title }}
        <span class="font-weight-light px-2">on</span> {{ application }}
      </v-card-title>

      <v-card-text class="py-5">
        <p>
          <span class="text-h5 font-weight-medium"
            >Description of the extension</span
          ><br />
          <span class="text-h6 font-weight-regular" v-html="description"></span>
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="danger" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="green" text @click="run">
          Run the extension
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CloudExecutionModal",

  props: {
    dialog: Boolean,
    title: String,
    application: String,
    description: String
  },

  methods: {
    close() {
      this.$emit("Close");
    },

    run() {
      this.$emit("Run");
    }
  },

  data: () => ({})
});
</script>
