<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  name: "ErrorDialog",
  props: ["title", "text"],

  data: () => ({
    dialog: false as boolean
  })
};
</script>
