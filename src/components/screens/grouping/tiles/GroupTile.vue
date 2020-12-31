<template>
  <v-card
    class="mx-5"
    :color=" group.demeterGroup ? '#D9C60F' : '#8C033E' "
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
      <span class="title font-weight-light">{{ group.name }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{ groupAction.numObjects }} Objects in the group"
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
  name: "GroupTile",
  props: {
      group: Object
  },

  data: () => ({
    loading : false as boolean,
  }),

  methods : {
      execute() {
          GroupActionController.executeAction(this.group);
      }
  }
};
</script>

