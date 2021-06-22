<template>
  <div id="app">
    <v-container id="main-container" style="">
      <span id="text-span">
        <h1 class="white--text text-h1">404 - Not Found</h1>
        <a href="/atlas/" class="white--text text-h3">Go back to Atlas</a>
      </span>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "NotFound"
});
</script>

<style scoped>
#app {
  padding: 0;
  margin: 0;

  position: relative;
}

#text-span {
  font-family: "Roboto", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#main-container {
  background-color: #425b66;
  min-width: 100vw !important;
  max-width: 100vw !important;
  width: 100vw;
  height: 100vh;
}
</style>
