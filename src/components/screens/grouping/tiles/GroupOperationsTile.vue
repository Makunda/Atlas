<template>
  <v-card
    class="mx-5"
    color="#25B8D9"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-cog
      </v-icon>
      <span class="title font-weight-light">{{ groupAction.title | 'Operation' }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{ groupAction.description }}"
    </v-card-text>

    <v-card-actions fluid>
      <v-list-item class="grow d-flex flex-row-reverse" width="100%">
        <v-btn
            @click="execute()"
            :loading="loading"
            rounded
            color="#85D8EB"
            class="float-right"
            >
            Launch
            <v-icon
                right
                dark
            > 
                mdi-play
            </v-icon>
        </v-btn>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { GroupAction, GroupActionController } from "@/api/applications/GroupActionController"

export default {
  name: "GroupOperationsTile",
  props: {
      groupAction: Object
  },

  data: () => ({
    loading : false as boolean,
  }),

  methods : {
      execute() {
          GroupActionController.executeAction(this.groupAction);
      }
  }
};
</script>

