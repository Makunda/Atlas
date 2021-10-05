<template>
  <v-dialog :value="dialog" width="1200">
    <v-card>
      <v-card-title class="text-h5 charcoal white--text">
        <span class="font-weight-light pr-2">Extension is running: </span>
        {{ title }}
      </v-card-title>

      <v-card-text class="py-5">
        <p>
          <span class="text-h5 font-weight-medium"
            >Atlas is executing the extension in background. Please stay on this
            page.<br />Results will be available in few seconds.</span
          ><br />
        </p>
        <v-progress-linear
          color="light-blue"
          height="10"
          value="10"
          striped
          indeterminate
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProgressModal",

  props: {
    dialog: Boolean,
    title: String
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
