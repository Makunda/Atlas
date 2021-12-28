<template>
  <v-card height="200">
    <v-toolbar color="blue" dark
      >Number of application {{ numberOfApplication }}</v-toolbar
    >

    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
        <template v-for="(item, index) in applicationList">
          <v-list-item :key="item.title">
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('TagTile', {
  props: ['title'],

  data: () => ({}),
});
</script>
