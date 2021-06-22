<template>
  <v-speed-dial
    class="v-speed-dial"
    v-model="fab"
    bottom
    right
    direction="left"
    transition="scale-transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="#425B66" dark fab x-large>
        <v-icon v-if="fab" @click="fabChoice = ''">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-cog
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      color="#2A9D8F"
      v-if="fabChoice === ''"
      @click="fabChange('automation')"
    >
      <v-icon>mdi-robot-industrial</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      color="#2A9D8F"
      v-if="fabChoice === ''"
      @click="fabChange('framework')"
    >
      <v-icon>mdi-package-variant-closed</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SpeedDial",

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  data: () => ({
    // Speed Dial
    fabChoice: "",
    direction: "top",
    fab: false,
    fling: true,
    hover: true,
    tabs: null,
    transition: "slide-y-reverse-transition"
  }),

  methods: {
    fabChange(to: string) {
      if (to == "") {
        this.fabChoice = "";
        return;
      }

      this.fabChoice = to;
      this.fab = true;

      setTimeout(() => {
        this.fab = true;
      }, 300);
    }
  }
});
</script>

<style scoped>
.v-speed-dial {
  position: fixed;
}

.v-btn--floating {
  position: relative;
}
</style>
