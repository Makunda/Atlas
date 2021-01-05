<template>
  <v-card
    class="mx-5"
    color="persianGrey"
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
    <v-card-subtitle class="text-body-1 mt-2" style="height: 100px" v-text="groupAction.description"></v-card-subtitle>


    <v-card-actions>
      <v-list-item class="grow d-flex flex-row-reverse" width="100%">
        <v-btn
            @click="execute()"
            :loading="loading"
            rounded
            color="charcoal"
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

