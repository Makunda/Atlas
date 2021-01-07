<template>
  <v-card
    class="mx-5"
    :color="demeterGroup ? '#D9C60F' : '#8C033E'"
    dark
    max-width="400"
  >
    <v-card-title>
      <v-icon large left>
        mdi-cog
      </v-icon>
      <span class="title font-weight-light">{{ name }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{ numObjects }} Objects in the group"
    </v-card-text>

    <v-card-actions fluid>
      <v-list-item class="grow d-flex flex-row-reverse" width="100%">
        <v-btn
          v-if="demeterGroup"
          :loading="loading"
          rounded
          color="#85D8EB"
          class="float-right mx-3"
        >
          Undo
          <v-icon right dark>
            mdi-play
          </v-icon>
        </v-btn>
        <v-btn
          rounded
          :color="demeterGroup ? '#E6A205' : '#B00704'"
          class="float-right"
        >
          Launch actions
          <v-icon right dark>
            mdi-play
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">

export default {
  name: "GroupTile",
  props: {
    id: Number,
    name: String,
    application: String,
    numObjects: Number,
    demeterGroup: Boolean
  },

  data: () => ({
    loading: false as boolean
  })
};
</script>
